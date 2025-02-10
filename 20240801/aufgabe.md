Wetter App

Das Ziel der heutigen Praxisaufgabe ist es, eine simple Website
zu erstellen, die das Wetter für eine vom User bestimmte
Stadt anzeigen kann.

1. Erstelle eine einfache HTML Website,
mit den dafür notwendigen Komponenten. 

Füge außerdem ein Input Feld "Stadt" 
und ein Button "Wetter abfragen hinzu"

2.  Gehe auf http://wttr.in

Hier kannst du dir das aktuelle Wetter 
für bestimmte Standorte ansehen. 
Mit dem Format http://wttr.in/{Ort} 
kannst du dir für spezifische Orte das Wetter 
anzeigen lassen, indem du {Ort} ersetzt. 
Bspw http://wttr.in/Berlin

Mit dem Format Argument, kannst du die HTTP Antwort des 
Servers statt als HTML auch als 
JSON ausgeben lassen (?format=j1). 
Rufe einmal http://wttr.in/Berlin?format=j1 im 
Browser auf und studiere die JSON Antwort. 
Welche Felder geben Auskunft über Temperatur in 
Celsius, Wetterbeschreibung und Ort?
Überprüfe auch, was passiert wenn du Fantasiestädte 
oder Nonsens-Namen benutzt. Überlege dir, wie du mit diesen 
User eingaben umgehen möchtest

3. Benutze nun Javascript um die Funktionalität deiner 
Website zu gestalten. 

Lasse den Button eine Funktion auslösen, die den Inhalt 
des Input Felds einliest und einen API-call an wttr.in 
für die vom User angefragte Stadt durchführt. 

-> Benutze fetch und .then um die JSON Daten zu empfangen und 
weiter zu bearbeiten 
-> Beachte hierbei, ob die Stadt gefunden wurde
-> Extrahiere mindestens die Information über 
Temperatur (in °C), die Beschreibung des Wetters und den 
Namen des Ortes aus der HTTP-Response und stelle sie auf 
der Website dar (optional mehr infos)
-> Überlege dir eine vernünftige Strategie für User-Eingaben, 
die zu keiner existierenden Stadt führen

4. (Optional) Benutze CSS und Icons um die Darstellung 
deiner Website zu verschönern

5. Gib einen Screenshot deiner fertigen Website ab, 
mit der du die aktuellen Wetterdaten einer 
beliebigen Stadt anzeigen lässt