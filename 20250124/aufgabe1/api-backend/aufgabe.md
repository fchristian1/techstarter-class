# Aufgabe: Node.js Backend mit MongoDB (Docker und Docker Compose)

In dieser Aufgabe wirst du ein **Node.js-Backend** einrichten, das mit einer **MongoDB-Datenbank** verbunden ist. Wir nutzen Docker, um beide Komponenten zu containerisieren. Danach zeige ich dir, wie Docker Compose den Prozess vereinfacht.

## **Warum Docker?**
Docker bietet eine einfache Möglichkeit, Anwendungen in Containern auszuführen. Mit Containern:
- Läuft die Anwendung in einer isolierten Umgebung.
- Vermeidest du Abhängigkeitsprobleme (z. B. unterschiedliche Node.js-Versionen).
- Kannst du die Anwendung auf anderen Systemen schnell bereitstellen.

Wir beginnen mit einer **Docker-Umgebung** und testen diese, bevor wir zu **Docker Compose** wechseln.

---

## **1. Mit Docker arbeiten (manuell)**

### **1.1 Projekt einrichten**
1. Erstelle ein Verzeichnis für dein Projekt und wechsle hinein:
    ```bash
    mkdir api-backend
    cd api-backend
    ```

2. Initialisiere ein neues Node.js-Projekt und installiere die benötigten Abhängigkeiten:
    ```bash
    npm init -y
    npm install express mongoose dotenv cors
    ```
    - **`express`**: Web-Framework für die API.
    - **`mongoose`**: Verbindung zu MongoDB.
    - **`dotenv`**: Verarbeitung von Umgebungsvariablen.
    - **`cors`**: Erlaubt Anfragen von anderen Domains.

### **1.2 `.env`-Datei erstellen**
Erstelle eine `.env`-Datei für Umgebungsvariablen:
```bash
nano .env
```
Inhalt der `.env`:
```env
MONGO_URI=mongodb://root:deinPasswort@mongo-container:27017/todos_db?authSource=admin
PORT=5000
```
- **`mongodb://`**: Gibt das MongoDB-Protokoll an, um sich mit der Datenbank zu verbinden.
- **`root`**: Der Benutzername, der für die Authentifizierung in MongoDB verwendet wird.
- **`deinPasswort`**: Das Passwort für den Benutzer root.
- **`mongo-container`**: Der Hostname oder die Adresse des MongoDB-Containers. Da der Name mongo-container in der docker-compose.yml definiert ist, kann der Backend-Container diesen Namen direkt verwenden, um MongoDB zu erreichen.
- **`27017`**: Der Standardport, auf dem MongoDB läuft.
- **`todos_db`**: Der Name der MongoDB-Datenbank, die verwendet wird.
- **`authSource=admin`**: Gibt an, dass die Authentifizierung gegen die admin-Datenbank erfolgt.
- **`MONGO_URI`**: Verbindung zur MongoDB-Datenbank.
- **`PORT`**: Port, auf dem das Backend läuft.

### **1.3 `database.js` erstellen**
Erstelle die Datei `database.js`, die die MongoDB-Verbindung und das Schema enthält:
```bash
nano database.js
```
Inhalt der Datei:
```javascript
require('dotenv').config();
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isComplete: { type: Boolean, default: false },
});

const Todo = mongoose.model('Todo', todoSchema);

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Erfolgreich mit MongoDB verbunden');

    const count = await Todo.countDocuments();
    if (count === 0) {
      console.log('Keine Todos gefunden. Testdaten werden hinzugefügt.');

      const todos = [
        { text: 'Python auffrischen', isComplete: false },
        { text: 'JavaScript üben', isComplete: false },
        { text: 'React lernen', isComplete: false },
      ];

      await Todo.insertMany(todos);
      console.log('Testdaten erfolgreich hinzugefügt');
    }
  } catch (err) {
    console.error('Fehler beim Verbinden mit MongoDB:', err.message);
    process.exit(1);
  }
}

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB-Verbindung geschlossen');
  process.exit(0);
});

module.exports = { connectToDatabase, Todo };
```
- **Verbindet sich mit MongoDB**.
- **Initialisiert Testdaten**, falls die Datenbank leer ist.

### **1.4 `app.js` erstellen**
Erstelle die Datei `app.js`, die die API enthält:
```bash
nano app.js
```
Inhalt der Datei:
```javascript
const express = require('express');
const cors = require('cors');
const { connectToDatabase, Todo } = require('./database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectToDatabase();

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send('Fehler beim Abrufen der Todos');
  }
});

app.post('/todos', async (req, res) => {
  const { text, isComplete } = req.body;
  if (!text) {
    return res.status(400).send("Todo text cannot be empty");
  }

  try {
    const newTodo = new Todo({ text, isComplete });
    await newTodo.save();
    res.status(201).send('Todo created');
  } catch (err) {
    res.status(500).send('Fehler beim Erstellen eines Todos');
  }
});

app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { text, isComplete } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { text, isComplete }, { new: true });
    if (!updatedTodo) {
      return res.status(404).send('Todo not found');
    }
    res.status(200).send('Todo updated');
  } catch (err) {
    res.status(500).send('Fehler beim Aktualisieren des Todos');
  }
});

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).send('Todo not found');
    }
    res.status(200).send('Todo deleted');
  } catch (err) {
    res.status(500).send('Fehler beim Löschen des Todos');
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
```
- **API-Endpunkte:** GET, POST, PUT, DELETE.

### **1.5 Dockerfile erstellen**
Erstelle eine Datei `Dockerfile`:
```bash
nano Dockerfile
```
Inhalt:
```dockerfile
# legt das basis-image für node.js fest
FROM node:18

# erstellt und setzt das arbeitsverzeichnis im container
WORKDIR /app

# kopiert die package.json und package-lock.json
COPY package*.json ./

# installiert die abhängigkeiten aus der package.json
RUN npm install

# kopiert den restlichen code ins arbeitsverzeichnis
COPY . .

# öffnet port 5000 für die anwendung
EXPOSE 5000

# startet die node.js-anwendung
CMD ["node", "app.js"]
```
- das dockerfile beschreibt, wie das image für das backend gebaut wird.
- es enthält alle notwendigen schritte, um die anwendung und ihre abhängigkeiten vorzubereiten.

### **1.6 MongoDB-Container starten**
Erstelle ein Netzwerk und starte den MongoDB-Container:
```bash
docker network create app-network
docker run --name mongo-container --network app-network \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=deinPasswort \
  -e MONGO_INITDB_DATABASE=todos_db \
  -p 27017:27017 -d mongo:latest
```
- **`docker network create`**: Erstellt ein benutzerdefiniertes Netzwerk, damit die Container miteinander kommunizieren können.
- **`docker run`**: Startet den MongoDB-Container mit den angegebenen Umgebungsvariablen.

### **1.7 Backend-Container starten**
Baue das Backend-Image und starte den Container:
```bash
docker build -t node-backend .
docker run --name node-backend --network app-network \
  --env-file .env -p 5000:5000 -d node-backend
```
- **`docker build`**: Baut ein Image für das Backend basierend auf dem Dockerfile.
- **`docker run`**: Startet das Backend mit der Verbindung zu MongoDB.

## **API testen mit cURL**

Hier sind die cURL-Befehle, um die API zu testen. Jeder Befehl wird kurz erklärt, damit du weißt, was passiert:

---

### **1. Abrufen aller Todos (`GET /todos`)**
Dieser Befehl ruft alle gespeicherten Todos aus der Datenbank ab und zeigt sie als JSON an.

```bash
curl -X GET http://localhost:5000/todos
```

- **Erwartete Antwort (Beispiel):**
  ```json
  [
    { "_id": "1", "text": "Python auffrischen", "isComplete": false },
    { "_id": "2", "text": "JavaScript üben", "isComplete": false },
    { "_id": "3", "text": "React lernen", "isComplete": false }
  ]
  ```

---

### **2. Neues Todo erstellen (`POST /todos`)**
Erstellt ein neues Todo in der Datenbank. Der Text und der Status (`isComplete`) des Todos werden im JSON-Body mitgegeben.

```bash
curl -X POST http://localhost:5000/todos \
-H "Content-Type: application/json" \
-d '{"text": "Neues Todo", "isComplete": false}'
```

- **Erwartete Antwort:**
  ```json
  "Todo created"
  ```

---

### **3. Bestehendes Todo aktualisieren (`PUT /todos/:id`)**
Aktualisiert ein bestehendes Todo anhand seiner ID. Du kannst den Text und den Status (`isComplete`) ändern.

```bash
curl -X PUT http://localhost:5000/todos/<id> \
-H "Content-Type: application/json" \
-d '{"text": "Aktualisiertes Todo", "isComplete": true}'
```

- **Erklärung:**
  - Ersetze `<id>` durch die tatsächliche ID des Todos, die du z. B. mit dem `GET`-Befehl herausgefunden hast.
  - Aktualisiert sowohl den Text als auch den Status.

- **Erwartete Antwort:**
  ```json
  "Todo updated"
  ```

---

### **4. Todo löschen (`DELETE /todos/:id`)**
Löscht ein bestehendes Todo anhand seiner ID aus der Datenbank.

```bash
curl -X DELETE http://localhost:5000/todos/<id>
```

- **Erklärung:**
  - Ersetze `<id>` durch die tatsächliche ID des Todos.
  - Dieser Befehl entfernt das Todo aus der Datenbank.

- **Erwartete Antwort:**
  ```json
  "Todo deleted"
  ```

---

### **Zusammenfassung**
- **`GET /todos`**: Holt alle Todos aus der Datenbank.
- **`POST /todos`**: Erstellt ein neues Todo.
- **`PUT /todos/:id`**: Aktualisiert ein Todo mit einer spezifischen ID.
- **`DELETE /todos/:id`**: Löscht ein Todo mit einer spezifischen ID.

> **Hinweis:** Stelle sicher, dass die API läuft (`http://localhost:5000`) und MongoDB korrekt verbunden ist, bevor du diese Befehle ausführst.


---

## **2. Mit Docker Compose arbeiten**

### **Warum Docker Compose?**
Docker Compose vereinfacht die Verwaltung mehrerer Container. Statt mehrere Befehle manuell auszuführen, kannst du alle Services in einer `docker-compose.yml`-Datei definieren und mit einem einzigen Befehl starten.

### **Vorbereitung für Docker Compose**

Um sicherzustellen, dass Docker Compose korrekt arbeiten kann, müssen die vorherigen Container entfernt werden, da diese möglicherweise Ports oder Namen belegen, die wir erneut verwenden. Gehe wie folgt vor:

1. **Alte Container stoppen und entfernen:**
   Stoppe und entferne die bisherigen Container, die manuell mit `docker run` gestartet wurden:
   ```bash
   docker stop mongo-container node-backend
   docker rm mongo-container node-backend
   ```
   - **`docker stop`**: Stoppt die laufenden Container.
   - **`docker rm`**: Entfernt die gestoppten Container vollständig.

2. **Prüfen, ob alles sauber ist:**
   Stelle sicher, dass keine Container mit den Namen `mongo-container` oder `node-backend` mehr laufen:
   ```bash
   docker ps -a
   ```

Nach diesen Schritten ist die Umgebung sauber vorbereitet. 

### **2.1 Docker Compose Datei erstellen**
Erstelle eine `docker-compose.yml`:
```bash
nano docker-compose.yml
```
Inhalt:
```yaml
version: '3.8'

services:
  # definiert den mongoDB service
  mongo:
    image: mongo:latest # verwendet das neueste mongoDB image
    container_name: mongo-container # gibt dem container einen namen
    ports:
      - "27017:27017" # verbindet den port 27017 des containers mit dem host
    environment: # setzt umgebungsvariablen für die datenbank
      MONGO_INITDB_ROOT_USERNAME: root # der benutzername für mongoDB
      MONGO_INITDB_ROOT_PASSWORD: deinPasswort # das passwort für mongoDB
      MONGO_INITDB_DATABASE: todos_db # erstellt eine standarddatenbank
    networks:
      - app-network # fügt den container einem benutzerdefinierten netzwerk hinzu

  # definiert den backend service
  backend:
    build:
      context: . # verweist auf das aktuelle verzeichnis mit dem Dockerfile
    container_name: node-backend # gibt dem container einen namen
    ports:
      - "5000:5000" # verbindet den port 5000 des containers mit dem host
    env_file:
      - .env # lädt die umgebungsvariablen aus der .env datei
    networks:
      - app-network # fügt den container demselben netzwerk hinzu wie mongoDB
    depends_on:
      - mongo # stellt sicher, dass mongo gestartet ist, bevor backend läuft

networks:
  app-network:
    driver: bridge # erstellt ein bridge-netzwerk für die kommunikation zwischen den containern
```
- definiert mongoDB und das backend als separate services.
- verbindet beide container über dasselbe netzwerk.

### **2.2 Anwendung starten**
Starte die Anwendung mit Docker Compose:
```bash
docker-compose up --build -d
```
- **`--build`**: Baut das Backend-Image basierend auf dem Dockerfile.
- startet automatisch beide container (mongoDB und backend).
- **`-d:`** Führt Docker Compose im Hintergrund aus.

### **2.3 API testen**
Teste die API wie oben mit cURL.

um alles wieder herunterzufahren verwende 
```bash
docker-compose down
```

Wenn du alles (Container, Volumen und Images) aufräumen möchtest:
```bash
docker-compose down -v --rmi all
```