### Analytik:

- **Amazon Athena**: Serverlose Abfrage von Daten in S3 mithilfe von SQL. Operiert auf globaler Ebene.  
  > **Erklärung:** Mit Amazon Athena können Sie Daten direkt in Amazon S3 abfragen, ohne Infrastruktur verwalten zu müssen. Es ist ideal für Ad-hoc-Analysen und unterstützt Standard-SQL, wodurch es einfach wird, Abfragen ohne umfangreiche Vorarbeiten durchzuführen.

- **AWS Data Exchange**: Ermöglicht den sicheren Austausch von Datenprodukten. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS Data Exchange ermöglicht es Kunden, Daten sicher und effizient zu kaufen, zu verkaufen und auszutauschen. Es bietet Zugang zu einer Vielzahl von Datenquellen, einschließlich Finanz-, Gesundheits- und Wetterdaten, die in Analysen und Berichterstellungen genutzt werden können.

- **Amazon EMR**: Verwaltet Hadoop-Frameworks zur Verarbeitung großer Datenmengen. Operiert in Regionen.  
  > **Erklärung:** Amazon EMR (Elastic MapReduce) erleichtert das Einrichten, Verwalten und Skalieren von Big Data Frameworks wie Apache Hadoop, Spark und HBase. Es ist für große Datenverarbeitungsaufgaben optimiert, die in verteilten Rechenumgebungen durchgeführt werden.

- **AWS Glue**: Serverloser Datenkatalog und ETL-Service. Operiert in Regionen.  
  > **Erklärung:** AWS Glue bietet eine vollständig verwaltete ETL-Plattform (Extrahieren, Transformieren, Laden), die das Suchen, Vorbereiten und Kombinieren von Daten für Analysen automatisiert. Es enthält einen integrierten Datenkatalog, der die Auffindbarkeit von Datenquellen erleichtert.

- **Amazon Kinesis**: Echtzeit-Datenverarbeitung für Streaming-Daten. Operiert in Regionen.  
  > **Erklärung:** Mit Amazon Kinesis können Sie in Echtzeit große Mengen an Streaming-Daten erfassen, verarbeiten und analysieren. Es eignet sich hervorragend für Anwendungsfälle wie Protokoll- und Ereignisverarbeitung, Anwendungsüberwachung und Echtzeitanalysen.

- **Amazon MSK**: Vollständig verwalteter Apache Kafka-Service. Operiert in Regionen.  
  > **Erklärung:** Amazon Managed Streaming for Apache Kafka (MSK) erleichtert den Einsatz und die Verwaltung von Apache Kafka, einer beliebten Plattform für die Verarbeitung von Streaming-Daten. Amazon MSK übernimmt die Verwaltung der Kafka-Infrastruktur, sodass Sie sich auf das Entwickeln von Streaming-Anwendungen konzentrieren können.

- **Amazon OpenSearch Service**: Vollständig verwalteter Such- und Analyse-Service. Operiert in Regionen.  
  > **Erklärung:** Amazon OpenSearch Service (ehemals Amazon Elasticsearch Service) bietet eine verwaltete Lösung für die Suche, Überwachung und Analyse von Log- und Anwendungsdaten. Es ist ideal für Szenarien wie Website-Suche, Anwendungsüberwachung und Log-Analyse.

- **Amazon QuickSight**: BI-Service für Dashboards und Berichte. Operiert auf globaler Ebene.  
  > **Erklärung:** Amazon QuickSight ist ein Business-Intelligence-Tool, das es ermöglicht, interaktive Dashboards und Berichte zu erstellen und zu teilen. Es skaliert automatisch mit der Anzahl der Benutzer und bietet Machine-Learning-gestützte Einblicke für fundiertere Entscheidungen.

- **Amazon Redshift**: Data Warehouse Service zur schnellen SQL-Abfrage. Operiert in Regionen.  
  > **Erklärung:** Amazon Redshift ist ein vollständig verwalteter Data Warehouse Service, der es ermöglicht, große Datenmengen schnell zu analysieren. Mit seiner hohen Abfrageleistung und Skalierbarkeit ist es besonders geeignet für die Verarbeitung und Analyse von Big Data mit SQL-basierten Abfragen.

### Anwendungsintegration:

- **Amazon EventBridge**: Serverloser Ereignisbus zur Verbindung von Anwendungen. Operiert in Regionen.  
  > **Erklärung:** Amazon EventBridge ermöglicht es, verschiedene Anwendungen und AWS-Services über ein zentrales Ereignisbus-System zu verbinden. Es leitet Ereignisse von verschiedenen Quellen an Ziele wie Lambda-Funktionen, SQS-Warteschlangen oder andere AWS-Services weiter, was die Erstellung ereignisgesteuerter Architekturen erleichtert.

- **Amazon SNS**: Push-Benachrichtigungsservice für Massenkommunikation. Operiert in Regionen.  
  > **Erklärung:** Amazon Simple Notification Service (SNS) bietet eine skalierbare Plattform für das Senden von Push-Benachrichtigungen, SMS, E-Mails und HTTP-basierte Nachrichten an eine Vielzahl von Abonnenten. Es wird häufig für Alarme, Updates und die Benachrichtigung von Benutzern oder Systemen verwendet.

- **Amazon SQS**: Nachrichtendienst zur asynchronen Kommunikation zwischen verteilten Systemen. Operiert in Regionen.  
  > **Erklärung:** Amazon Simple Queue Service (SQS) ist ein vollständig verwalteter Nachrichtendienst, der es ermöglicht, Nachrichten zwischen verteilten Systemen asynchron zu übertragen. Es hilft, die Komponenten einer Anwendung zu entkoppeln und zu skalieren, indem es Nachrichten sicher in Warteschlangen speichert, bis sie verarbeitet werden können.

- **AWS Step Functions**: Orchestriert verteilte Services und Workflows. Operiert in Regionen.  
  > **Erklärung:** AWS Step Functions ermöglicht die Orchestrierung komplexer Workflows, indem es mehrere AWS-Services in einer anpassbaren Reihenfolge verknüpft. Es bietet eine grafische Oberfläche zur Definition von Zustandsmaschinen, was die Verwaltung und Überwachung von Anwendungs-Workflows erleichtert.
  
### Geschäftsanwendungen:

- **Amazon Connect**: Cloud-basiertes Callcenter. Operiert in Regionen.  
  > **Erklärung:** Amazon Connect ist eine einfach zu bedienende, skalierbare Cloud-basierte Contact-Center-Lösung, die es Unternehmen ermöglicht, Kundensupport über mehrere Kommunikationskanäle wie Telefon, Chat und E-Mail anzubieten. Es ist kosteneffizient und lässt sich leicht in bestehende CRM- und Analysetools integrieren.

- **Amazon SES**: Service für das Senden von E-Mails. Operiert auf globaler Ebene.  
  > **Erklärung:** Amazon Simple Email Service (SES) ist ein skalierbarer E-Mail-Versanddienst, der es ermöglicht, Transaktions-E-Mails, Marketingnachrichten und Benachrichtigungen mit hoher Zuverlässigkeit zu versenden. SES unterstützt dabei die Einhaltung von Vorschriften und ermöglicht die Überwachung der Zustellbarkeit und Leistung von E-Mail-Kampagnen.
  
### Cloud Financial Management:
- **AWS Billing Conductor**: Anpassung von Rechnungen für verschiedene Geschäftsbereiche. Operiert auf globaler Ebene.
 >Ganz gleich, ob Sie die IT-Kosten für Ihre Kunden verwalten oder einfach nur versuchen, die Kostenverantwortung der internen Teams innerhalb Ihres Unternehmens zu verbessern, AWS Billing Conductor ermöglicht eine genaue, anpassbare Abrechnung, um den komplexen Anforderungen Ihres Unternehmens und Ihrer Kunden gerecht zu werden.
 
 >AWS Billing Conductor unterstützt Ihre Abrechnungs- und Berichtsabläufe, indem es die Abrechnungssätze nach eigenem Ermessen anpasst, Gutschriften und Gebühren sowie geteilte Gemeinkosten verteilt. Mit wenigen Klicks erhalten Konten einen Überblick über ihre Kosten, der Ihrer Geschäftslogik entspricht, wenn sie sich in der AWS-Fakturierungskonsole anmelden.
- **AWS Budgets**: Überwachung und Benachrichtigung bei Kostenüberschreitungen. Operiert auf globaler Ebene.
 >Legen Sie mit AWS Budgets benutzerdefinierte Budgets fest, um Ihre Kosten und Nutzung zu verfolgen, und reagieren Sie schnell auf Warnungen, die Sie per E-Mail oder SNS-Benachrichtigung erhalten, wenn Sie Ihren Schwellenwert überschreiten.
- **AWS-Kosten- und Nutzungsbericht**: Detaillierte Berichte über AWS-Nutzung und -Kosten. Operiert auf globaler Ebene.
 >Die AWS-Kosten- und Nutzungsberichte (Cost and Usage Reports - CUR) enthalten die umfassendsten Daten zu Kosten und Nutzung. Sie können die Kosten- und Nutzungsdaten in einen Amazon S3-Bucket exportieren, den Sie besitzen. Die Exporte können Ihre Kosten stündlich, täglich oder monatlich, nach Produkt oder Produktressource oder nach von Ihnen definierten Tags aufschlüsseln. AWS liefert den Export mindestens einmal täglich als CSV- oder Parquet-Datei an Ihren Bucket. Sie können die Exporte mit Analysewerkzeugen wie Amazon Athena oder Amazon Redshift oder Tabellenkalkulationsanwendungen wie Microsoft Excel verarbeiten. Außerdem können Sie Visualisierungen Ihrer CUR mit Business-Intelligence-Tools wie Amazon QuickSight erstellen, um Erkenntnisse mit Ihren Teams zu teilen.
- **AWS Cost Explorer**: Analysetool für AWS-Kosten. Operiert auf globaler Ebene.
 >Der AWS Cost Explorer verfügt über eine benutzerfreundliche Oberfläche, mit der Sie Ihre AWS-Kosten und -Nutzung im Zeitablauf visualisieren, verstehen und verwalten können. Steigen Sie schnell ein, indem Sie benutzerdefinierte Berichte erstellen, die die Kosten und Nutzungsdaten analysieren. Analysieren Sie Ihre Daten auf hoher Ebene (zum Beispiel Gesamtkosten und Nutzung über alle Konten hinweg) oder blicken Sie genauer in Ihre Kosten und Nutzungsdaten, um Trends zu identifizieren, Kostentreiber zu ermitteln und Anomalien zu erkennen.

- **AWS Marketplace**: Marktplatz für Softwarelösungen. Operiert auf globaler Ebene.
 >AWS Marketplace ermöglicht es qualifizierten Partnern, AWS-Kunden ihre Software anzubieten und an sie zu verkaufen. AWS Marketplace ist ein Online-Software-Store, in dem Kunden über AWS angebotene Software und Services finden, erwerben und unmittelbar starten können.

 >AWS Marketplace ist für unabhängige Softwareanbieter (ISVs), Wiederverkäufer (VARs) und Systemintegratoren (SIs) konzipiert, die Software-Produkte haben, die sie Kunden in der Cloud anbieten möchten. Partner nutzen AWS Marketplace, um binnen weniger Tage Kunden weltweit ihre Software-Produkte anbieten zu können.

### Computing:

- **AWS Batch**: Batch-Verarbeitung von Jobs auf EC2. Operiert in Regionen.  
  > **Erklärung:** AWS Batch ermöglicht die effiziente Ausführung von Batch-Verarbeitungsaufträgen jeder Größe auf EC2-Instanzen. Es automatisiert die Bereitstellung von Rechenressourcen basierend auf den Anforderungen der Jobs, sodass große Datenmengen kosteneffizient verarbeitet werden können.

- **Amazon EC2**: Virtuelle Server in der Cloud. Operiert in Regionen und AZs.  
  > **Erklärung:** Amazon Elastic Compute Cloud (EC2) bietet skalierbare Rechenkapazität in der Cloud. Es ermöglicht die Bereitstellung von virtuellen Maschinen, die flexibel an die Anforderungen von Anwendungen angepasst werden können, mit einer breiten Palette von Instanztypen und Speicheroptionen.

- **AWS Elastic Beanstalk**: Plattform zur einfachen Bereitstellung und Skalierung von Webanwendungen. Operiert in Regionen.  
  > **Erklärung:** AWS Elastic Beanstalk vereinfacht die Bereitstellung und Verwaltung von Webanwendungen, indem es automatisch die zugrunde liegende Infrastruktur wie Server, Datenbanken und Netzwerkressourcen für Sie konfiguriert und skaliert.

- **Amazon Lightsail**: Einfache Virtual Private Server (VPS)-Lösung. Operiert in Regionen.  
  > **Erklärung:** Amazon Lightsail bietet eine einfache Möglichkeit, virtuelle private Server (VPS) mit einer benutzerfreundlichen Oberfläche zu erstellen und zu verwalten. Es ist ideal für Benutzer, die einen schnellen und einfachen Einstieg in die Cloud mit festen monatlichen Preisen suchen.

- **AWS Local Zones**: Erweiterung von AWS-Regionen für Latenz-empfindliche Anwendungen. Operiert in Städten (Lokalzonen).  
  > **Erklärung:** AWS Local Zones bringen AWS-Infrastruktur näher an die Endbenutzer, um die Latenz für Anwendungen zu minimieren, die eine schnelle Reaktionszeit erfordern, wie z.B. Echtzeit-Gaming, Video-Streaming oder maschinelles Lernen.

- **AWS Outposts**: AWS-Infrastruktur für lokale Rechenzentren. Operiert vor Ort (On-Premises).  
  > **Erklärung:** AWS Outposts ermöglicht es, AWS-Dienste in Ihrem eigenen Rechenzentrum oder On-Premises-Standort zu betreiben. Es bietet dieselbe Hardware und Software wie in AWS-Rechenzentren, sodass Anwendungen konsistent in der Cloud und vor Ort ausgeführt werden können.

- **AWS Wavelength**: Bringt AWS-Dienste zu 5G-Netzwerken. Operiert in speziellen Zonen (Edge-Standorte).  
  > **Erklärung:** AWS Wavelength integriert AWS-Dienste direkt in 5G-Netzwerke, um die Latenzzeit für Anwendungen zu reduzieren, die eine extrem niedrige Reaktionszeit erfordern, wie z.B. IoT, AR/VR und autonome Fahrzeuge.

### Container:

- **Amazon ECR**: Verwalteter Docker-Container-Registry-Service. Operiert in Regionen.  
  > **Erklärung:** Amazon Elastic Container Registry (ECR) ist ein vollständig verwalteter Dienst zum Speichern, Verwalten und Bereitstellen von Docker-Container-Images. ECR integriert sich nahtlos mit Amazon ECS und EKS, um die Containerbereitstellung und -verwaltung zu vereinfachen.

- **Amazon ECS**: Container-Orchestrierung auf EC2 oder Fargate. Operiert in Regionen.  
  > **Erklärung:** Amazon Elastic Container Service (ECS) ist ein leistungsstarker Service zur Orchestrierung und Verwaltung von Container-Anwendungen. Es unterstützt die Ausführung von Containern auf EC2-Instanzen oder serverlos mit AWS Fargate, und bietet integrierte Funktionen für Skalierung, Lastverteilung und Überwachung.

- **Amazon EKS**: Verwalteter Kubernetes-Service. Operiert in Regionen.  
  > **Erklärung:** Amazon Elastic Kubernetes Service (EKS) ist ein vollständig verwalteter Service, der Kubernetes-Clustern hilft, in AWS sicher und zuverlässig zu laufen. EKS übernimmt die Verwaltung der Kubernetes-Steuerebene, sodass Sie sich auf das Ausführen und Skalieren Ihrer Container-Anwendungen konzentrieren können.

### Kundenbindung:

- **AWS Activate für Startups**: Unterstützungsprogramm für Startups. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS Activate bietet Startups Zugang zu AWS-Ressourcen, technischen Schulungen und Unterstützung, um deren Wachstum zu beschleunigen. Das Programm umfasst kostenlose Credits, technische Unterstützung und exklusive Schulungsangebote.

- **AWS IQ**: Vermittlungsplattform für AWS-Experten. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS IQ verbindet Kunden mit qualifizierten AWS-Beratern, die bei der Architektur, Implementierung und Optimierung von AWS-Lösungen helfen. Die Plattform ermöglicht es Unternehmen, spezifische Projekte schnell und effizient umzusetzen.

- **AWS Managed Services (AMS)**: Verwaltung von AWS-Infrastrukturen. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS Managed Services bietet umfassende Verwaltung und Unterstützung für AWS-Infrastrukturen, einschließlich Betrieb, Überwachung und Optimierung. Dies hilft Unternehmen, die Betriebsaufwände zu reduzieren und sich auf ihre Kernaktivitäten zu konzentrieren.

- **AWS Support**: Technischer Support für AWS-Kunden. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS Support bietet technischen Support für AWS-Kunden, einschließlich Hilfe bei der Fehlerbehebung, Architekturberatung und Zugang zu Expertenwissen. Der Support umfasst verschiedene Pläne, die je nach Anforderungen unterschiedliche Levels an Unterstützung bieten.

### Datenbank:

- **Amazon Aurora**: Hochleistungsfähige relationale Datenbank. Operiert in Regionen.  
  > **Erklärung:** Amazon Aurora ist eine vollständig verwaltete relationale Datenbank, die mit MySQL- und PostgreSQL-kompatibel ist. Sie bietet hohe Verfügbarkeit, automatische Skalierung und hohe Leistung durch eine verteilte Architektur.

- **Amazon DynamoDB**: NoSQL-Datenbank mit geringer Latenz. Operiert in Regionen.  
  > **Erklärung:** Amazon DynamoDB ist eine vollständig verwaltete NoSQL-Datenbank, die eine konsistente Leistung bei niedriger Latenz bietet. Sie unterstützt flexible Datenmodelle und bietet automatische Skalierung und hohe Verfügbarkeit.

- **Amazon MemoryDB für Redis**: In-Memory-Datenbank für Redis. Operiert in Regionen.  
  > **Erklärung:** Amazon MemoryDB für Redis ist ein vollständig verwalteter, hochverfügbarer In-Memory-Datenbankdienst, der mit Redis kompatibel ist. Er bietet Persistenz, Datensicherheit und automatische Wiederherstellung, ideal für Echtzeitanalysen und Caching.

- **Amazon Neptune**: Graph-Datenbank-Service. Operiert in Regionen.  
  > **Erklärung:** Amazon Neptune ist ein vollständig verwalteter Graph-Datenbank-Service, der sowohl Property-Graphen (Apache TinkerPop Gremlin) als auch RDF-Datenmodelle (SPARQL) unterstützt. Er ist für komplexe Beziehungsanalysen und vernetzte Datenanwendungen optimiert.

- **Amazon RDS**: Verwalteter relationaler Datenbank-Service. Operiert in Regionen.  
  > **Erklärung:** Amazon Relational Database Service (RDS) vereinfacht das Einrichten, Betreiben und Skalieren von relationalen Datenbanken wie MySQL, PostgreSQL, MariaDB, Oracle und SQL Server. Es bietet automatische Backups, Patch-Management und hohe Verfügbarkeit.

### Entwickler-Tools:

- **AWS AppConfig**: Verteilung von Konfigurationsdaten an Anwendungen. Operiert in Regionen.  
  > **Erklärung:** AWS AppConfig ermöglicht es, Konfigurationsdaten sicher und effizient an Anwendungen zu verteilen, ohne Codeänderungen vornehmen zu müssen. Es unterstützt die Verwaltung von Konfigurationen und Rollouts in verschiedenen Umgebungen.

- **AWS CLI**: Befehlszeilenwerkzeug zur Verwaltung von AWS-Diensten. Operiert auf globaler Ebene.  
  > **Erklärung:** Die AWS Command Line Interface (CLI) bietet eine einheitliche Schnittstelle zur Verwaltung von AWS-Diensten über die Befehlszeile. Sie ermöglicht die Automatisierung von Aufgaben und die Durchführung von Operationen in Skripten.

- **AWS Cloud9**: Webbasierte IDE für die Entwicklung in AWS. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS Cloud9 ist eine integrierte Entwicklungsumgebung (IDE), die im Browser läuft und vollständige Entwicklungs- und Debugging-Tools bietet. Sie erleichtert die Zusammenarbeit und das Arbeiten direkt in der AWS-Cloud.

- **AWS CloudShell**: Browserbasierte Shell für AWS-Verwaltung. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS CloudShell bietet eine browserbasierte Kommandozeilenschnittstelle, die sofort bereit ist, um AWS-Dienste zu verwalten. Sie bietet eine vorkonfigurierte Umgebung mit den notwendigen Tools und Konfigurationen.

- **AWS CodeArtifact**: Verwaltetes Paket-Repository für Artefakte. Operiert in Regionen.  
  > **Erklärung:** AWS CodeArtifact ist ein vollständig verwaltetes Repository für Softwarepakete und Artefakte, das mehrere Paketformate unterstützt. Es erleichtert das Speichern, Verwalten und Freigeben von Paketen in der Entwicklungsumgebung.

- **AWS CodeBuild**: Verwalteter Build-Service für Softwareprojekte. Operiert in Regionen.  
  > **Erklärung:** AWS CodeBuild ist ein vollständig verwalteter Build-Service, der automatisch den Build- und Testprozess für Softwareprojekte ausführt. Er integriert sich mit anderen CI/CD-Tools und unterstützt eine Vielzahl von Programmiersprachen und Build-Umgebungen.

- **AWS CodeCommit**: Verwaltetes Git-Repository. Operiert in Regionen.  
  > **Erklärung:** AWS CodeCommit ist ein sicherer und skalierbarer Git-Repository-Service, der es Entwicklern ermöglicht, Code-Repositorys in der Cloud zu hosten und zu verwalten. Er unterstützt kollaboratives Arbeiten und Versionskontrolle.

- **AWS CodeDeploy**: Automatisiert die Anwendungsbereitstellung. Operiert in Regionen.  
  > **Erklärung:** AWS CodeDeploy automatisiert den Bereitstellungsprozess von Anwendungen auf verschiedenen Rechenressourcen wie EC2-Instanzen oder Lambda-Funktionen. Es hilft, Anwendungsupdates zuverlässig und konsistent durchzuführen.

- **AWS CodePipeline**: CI/CD-Dienst zur Automatisierung von Release-Pipelines. Operiert in Regionen.  
  > **Erklärung:** AWS CodePipeline ist ein kontinuierlicher Integrations- und Bereitstellungsdienst, der den gesamten Release-Prozess von der Code-Erstellung bis zur Produktion automatisiert. Es ermöglicht die schnelle und zuverlässige Bereitstellung von Anwendungen.

- **AWS CodeStar**: Plattform zur schnellen Bereitstellung von DevOps-Projekten. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS CodeStar bietet eine integrierte Entwicklungsumgebung für die schnelle Erstellung, Verwaltung und Bereitstellung von DevOps-Projekten. Es vereinfacht die Verwaltung von CI/CD-Pipelines und bietet Tools für das Projektmanagement.

- **AWS X-Ray**: Debugging-Tool für die Analyse von verteilten Anwendungen. Operiert in Regionen.  
  > **Erklärung:** AWS X-Ray hilft bei der Analyse und Fehlersuche von verteilten Anwendungen, indem es detaillierte Einblicke in die Leistung und Interaktionen von Microservices bietet. Es ermöglicht das Tracking von Anfragen und die Identifizierung von Engpässen.

### Computing für Endbenutzer:

- **Amazon AppStream 2.0**: Streaming von Desktop-Anwendungen. Operiert in Regionen.  
  > **Erklärung:** Amazon AppStream 2.0 ermöglicht das Streaming von Desktop-Anwendungen zu jedem Gerät, ohne dass diese lokal installiert werden müssen. Es bietet Nutzern Zugriff auf leistungsstarke Anwendungen über einen Webbrowser, wodurch die Verwaltung und Bereitstellung von Software vereinfacht wird.

- **Amazon WorkSpaces**: Verwaltete virtuelle Desktop-Lösung. Operiert in Regionen.  
  > **Erklärung:** Amazon WorkSpaces ist ein vollständig verwalteter virtueller Desktop-Service, der es Benutzern ermöglicht, auf ihre Desktop-Umgebungen von überall aus zuzugreifen. Er bietet skalierbare und sichere Desktops in der Cloud und reduziert den Verwaltungsaufwand für IT-Teams.

- **Amazon WorkSpaces Web**: Sicherer Browserzugriff auf webbasierte Anwendungen. Operiert in Regionen.  
  > **Erklärung:** Amazon WorkSpaces Web bietet sicheren Zugriff auf webbasierte Anwendungen über einen Webbrowser, ohne dass eine vollständige virtuelle Desktop-Umgebung erforderlich ist. Es ermöglicht Benutzern den Zugriff auf interne Anwendungen und Websites von jedem Ort aus, ohne dass zusätzliche Software installiert werden muss.

### Frontend-Web und Mobile:

- **AWS Amplify**: Entwicklungsplattform für Web- und Mobile-Anwendungen. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS Amplify ist eine umfassende Entwicklungsplattform, die Entwicklern Werkzeuge und Services bietet, um Web- und Mobile-Anwendungen schnell zu erstellen, zu testen und bereitzustellen. Es unterstützt Authentifizierung, Datenverwaltung, Hosting und mehr.

- **AWS AppSync**: GraphQL-API-Service für mobile und Webanwendungen. Operiert in Regionen.  
  > **Erklärung:** AWS AppSync ist ein verwalteter GraphQL-Dienst, der es Entwicklern ermöglicht, flexible APIs für mobile und Webanwendungen zu erstellen. Es bietet Echtzeit-Datenabonnements, Offline-Funktionalität und nahtlose Integration mit AWS-Datenquellen.

- **AWS Device Farm**: Testen von mobilen und Web-Apps auf echten Geräten. Operiert in Regionen.  
  > **Erklärung:** AWS Device Farm ermöglicht das Testen von mobilen und Web-Anwendungen auf einer Vielzahl von echten Geräten und Betriebssystemversionen. Es automatisiert den Testprozess und liefert detaillierte Berichte zur Verbesserung der App-Qualität und -Leistung.
  
### Internet der Dinge (IoT):

- **AWS IoT Core**: Plattform für die Verbindung und Verwaltung von IoT-Geräten. Operiert in Regionen.  
  > **Erklärung:** AWS IoT Core ermöglicht die sichere Verbindung und Verwaltung von IoT-Geräten in der Cloud. Es unterstützt die bidirektionale Kommunikation zwischen Geräten und der Cloud, die Verarbeitung von IoT-Daten und die Integration mit anderen AWS-Diensten.

- **AWS IoT Greengrass**: Lokale Verarbeitung und Verwaltung von IoT-Daten. Operiert vor Ort (Edge).  
  > **Erklärung:** AWS IoT Greengrass erweitert AWS-Funktionen auf lokale Geräte, um IoT-Daten vor Ort zu verarbeiten und zu verwalten. Es ermöglicht lokale Verarbeitung, Datenaggregation und Entscheidungsfindung, selbst wenn keine Verbindung zur Cloud besteht.

### Maschinelles Lernen:

- **Amazon Comprehend**: NLP-Service zur Analyse von Texten. Operiert in Regionen.  
  > **Erklärung:** Amazon Comprehend nutzt natürliche Sprachverarbeitung (NLP), um Textinhalte zu analysieren und zu verstehen. Er identifiziert Themen, Sentiment, Entitäten und Beziehungen in Texten, um nützliche Einsichten zu gewinnen.

- **Amazon Kendra**: Intelligente Suchmaschine für Unternehmensdaten. Operiert in Regionen.  
  > **Erklärung:** Amazon Kendra ist eine intelligente Suchlösung, die auf maschinellem Lernen basiert und präzise Suchergebnisse für Unternehmensdokumente und -daten liefert. Es verbessert die Suche durch kontextbasierte Relevanz und semantische Suchfähigkeiten.

- **Amazon Lex**: Sprach- und Text-Interaktionen für Chatbots. Operiert in Regionen.  
  > **Erklärung:** Amazon Lex ermöglicht die Erstellung von Chatbots und Sprachassistenten, die natürliche Sprachverarbeitung und Spracherkennung nutzen, um Konversationen in Anwendungen zu integrieren und zu automatisieren.

- **Amazon Polly**: Text-to-Speech-Service. Operiert in Regionen.  
  > **Erklärung:** Amazon Polly wandelt Text in natürlich klingende Sprache um. Es bietet eine Vielzahl von Sprachoptionen und Akzenten und wird für Sprachausgabe in Anwendungen, Audiobücher und Sprachsynthese verwendet.

- **Amazon Rekognition**: Bild- und Videoanalyse-Service. Operiert in Regionen.  
  > **Erklärung:** Amazon Rekognition analysiert Bilder und Videos, um Gesichter, Objekte, Szenen und Aktivitäten zu erkennen. Es unterstützt auch die Analyse von Inhalten für Sicherheits- und Überwachungsanwendungen.

- **Amazon SageMaker**: Plattform für den Aufbau und das Training von ML-Modellen. Operiert in Regionen.  
  > **Erklärung:** Amazon SageMaker ist eine umfassende Plattform für das Erstellen, Trainieren und Bereitstellen von Machine Learning-Modellen. Sie bietet Tools für die Modellierung, das Training mit großen Datenmengen und die Optimierung von ML-Workflows.

- **Amazon Textract**: Extrahiert Text und Daten aus Dokumenten. Operiert in Regionen.  
  > **Erklärung:** Amazon Textract verwendet ML-Modelle, um automatisch Text und Daten aus gescannten Dokumenten und Formularen zu extrahieren. Es identifiziert und analysiert Textinhalte und strukturiert die Daten für die weitere Nutzung.

- **Amazon Transcribe**: Automatische Spracherkennung (ASR) für Audiodateien. Operiert in Regionen.  
  > **Erklärung:** Amazon Transcribe wandelt gesprochene Sprache in Text um. Es bietet Funktionen zur Transkription von Audioinhalten, einschließlich der Unterstützung für verschiedene Sprachen und die Möglichkeit, benutzerdefinierte Vokabulare zu verwenden.

- **Amazon Translate**: Automatische Übersetzung von Texten. Operiert in Regionen.  
  > **Erklärung:** Amazon Translate bietet automatische Übersetzungen von Texten in verschiedene Sprachen. Es nutzt neuronale maschinelle Übersetzungsmodelle, um genaue und kontextbezogene Übersetzungen zu liefern.

### Management und Governance:

- **AWS Auto Scaling**: Automatische Skalierung von AWS-Ressourcen. Operiert in Regionen.  
  > **Erklärung:** AWS Auto Scaling sorgt automatisch für die Anpassung der Anzahl von EC2-Instanzen und anderen Ressourcen basierend auf der tatsächlichen Nutzung und den festgelegten Richtlinien. Es hilft, die Verfügbarkeit zu maximieren und Kosten zu optimieren.

- **AWS CloudFormation**: Modellierung und Verwaltung von AWS-Infrastruktur als Code. Operiert in Regionen.  
  > **Erklärung:** AWS CloudFormation ermöglicht das Erstellen und Verwalten von AWS-Ressourcen durch die Definition von Infrastruktur als Code. Sie nutzen Vorlagen, um komplexe Umgebungen automatisch zu erstellen und zu konfigurieren.

- **AWS CloudTrail**: Überwachung und Protokollierung von AWS-API-Aufrufen. Operiert in Regionen.  
  > **Erklärung:** AWS CloudTrail protokolliert API-Aufrufe, die in Ihrem AWS-Konto getätigt werden. Es bietet einen detaillierten Überblick über die Nutzung und ermöglicht Sicherheitsüberprüfungen und Compliance-Überwachung.

- **Amazon CloudWatch**: Überwachung und Management von AWS-Ressourcen und Anwendungen. Operiert in Regionen.  
  > **Erklärung:** Amazon CloudWatch überwacht AWS-Ressourcen und Anwendungsmetriken in Echtzeit. Es ermöglicht das Erstellen von Dashboards, das Einrichten von Alarmen und die Automatisierung von Reaktionen auf Systemzustände.

- **AWS Compute Optimizer**: Empfehlungen zur Optimierung der AWS-Compute-Ressourcen. Operiert in Regionen.  
  > **Erklärung:** AWS Compute Optimizer analysiert die Nutzung von EC2-Instanzen und gibt Empfehlungen zur Optimierung von Compute-Ressourcen basierend auf Leistung und Kosteneffizienz.

- **AWS Config**: Überwachung und Auditing von AWS-Ressourcen. Operiert in Regionen.  
  > **Erklärung:** AWS Config bietet einen umfassenden Überblick über die Konfiguration und Änderungen an AWS-Ressourcen. Es hilft bei Compliance-Prüfungen und der Überwachung von Konfigurationsänderungen.

- **AWS Control Tower**: Einrichtung und Verwaltung einer sicheren AWS-Multi-Account-Umgebung. Operiert in Regionen.  
  > **Erklärung:** AWS Control Tower vereinfacht die Einrichtung und Verwaltung von Multi-Account-Umgebungen und gewährleistet die Einhaltung von Best Practices für Governance und Sicherheit in AWS.

- **AWS Health Dashboard**: Echtzeit-Überwachung der Gesundheit von AWS-Diensten. Operiert auf globaler Ebene.  
  > **Erklärung:** Das AWS Health Dashboard bietet personalisierte Einblicke in die Gesundheit der AWS-Dienste, die Ihr Konto betreffen, einschließlich Warnungen und Statusaktualisierungen über Störungen oder Wartungsarbeiten.

- **AWS Launch Wizard**: Beschleunigte Bereitstellung von komplexen Workloads. Operiert in Regionen.  
  > **Erklärung:** AWS Launch Wizard bietet eine geführte Benutzeroberfläche zur schnellen und einfachen Bereitstellung komplexer Workloads wie SAP und Microsoft SQL Server, unter Berücksichtigung von Best Practices.

- **AWS License Manager**: Verwaltung von Softwarelizenzen auf AWS. Operiert in Regionen.  
  > **Erklärung:** AWS License Manager hilft bei der Verwaltung und Überwachung von Softwarelizenzen auf AWS und in hybriden Umgebungen. Es vereinfacht die Lizenzkonformität und optimiert Lizenzkosten.

- **AWS Management Console**: Webbasierte Benutzeroberfläche zur Verwaltung von AWS-Ressourcen. Operiert auf globaler Ebene.  
  > **Erklärung:** Die AWS Management Console ist die webbasierte Benutzeroberfläche, die es ermöglicht, AWS-Ressourcen zu verwalten und zu konfigurieren, Berichte zu erstellen und die Nutzung zu überwachen.

- **AWS Organizations**: Verwaltung und Konsolidierung von AWS-Konten. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS Organizations ermöglicht die Verwaltung mehrerer AWS-Konten von einer zentralen Stelle aus, einschließlich der Konsolidierung von Abrechnungen, der Anwendung von Richtlinien und der Verwaltung von Zugriffen.

- **AWS Resource Groups und Tag-Editor**: Verwaltung und Kategorisierung von AWS-Ressourcen. Operiert in Regionen.  
  > **Erklärung:** AWS Resource Groups und Tag-Editor ermöglichen die Verwaltung und Kategorisierung von AWS-Ressourcen durch Tags. Sie vereinfachen das Gruppieren, Filtern und Verwalten von Ressourcen.

- **AWS Service Catalog**: Verwaltung von IT-Services für interne und externe Nutzer. Operiert in Regionen.  
  > **Erklärung:** AWS Service Catalog ermöglicht die Erstellung und Verwaltung von Katalogen von genehmigten IT-Services und -Ressourcen, die von internen oder externen Benutzern bereitgestellt und verwendet werden können.

- **AWS Systems Manager**: Verwaltung von AWS-Ressourcen und On-Premises-Infrastruktur. Operiert in Regionen.  
  > **Erklärung:** AWS Systems Manager bietet einheitliche Verwaltungstools für AWS-Ressourcen und lokale Infrastruktur, einschließlich Patch-Management, Konfigurationsmanagement und Automatisierung von Aufgaben.

- **AWS Trusted Advisor**: Empfehlungen zur Optimierung von AWS-Nutzung und Sicherheit. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS Trusted Advisor bietet Empfehlungen zur Optimierung von AWS-Ressourcennutzung, Kosten, Leistung und Sicherheit durch regelmäßige Überprüfungen und Best-Practice-Vorschläge.

- **AWS Well-Architected Tool**: Bewertet die Architektur von AWS-Workloads nach Best Practices. Operiert auf globaler Ebene.  
  > **Erklärung:** Das AWS Well-Architected Tool hilft bei der Bewertung der Architektur von AWS-Workloads anhand von Best Practices. Es bietet Einsichten zur Verbesserung der Sicherheit, Leistung, Kostenoptimierung und betriebliche Effizienz.

### Migration und Übertragung:

- **AWS Application Discovery Service**: Sammlung von Daten über lokale Rechenzentren zur Migration. Operiert in Regionen.  
  > **Erklärung:** AWS Application Discovery Service hilft beim Sammeln und Analysieren von Daten zu bestehenden lokalen IT-Ressourcen, um die Planung und Durchführung von Migrationen zu AWS zu unterstützen.

- **AWS Application Migration Service**: Automatisierte Migration von Anwendungen zu AWS. Operiert in Regionen.  
  > **Erklärung:** AWS Application Migration Service ermöglicht die automatisierte und nahtlose Migration von physischen, virtuellen und Cloud-basierten Anwendungen nach AWS, indem es Anwendungsinstanzen repliziert und migriert.

- **AWS Database Migration Service (AWS DMS)**: Migration von Datenbanken zu AWS. Operiert in Regionen.  
  > **Erklärung:** AWS Database Migration Service erleichtert die Migration von Datenbanken zu AWS, indem es Daten kontinuierlich repliziert und sicherstellt, dass die Datenbanken während der Migration verfügbar bleiben.

- **AWS Migration Hub**: Zentrale Verwaltung und Überwachung von Migrationsprojekten. Operiert in Regionen.  
  > **Erklärung:** AWS Migration Hub bietet eine zentrale Ansicht und Verwaltung von Migrationsprojekten. Es hilft, den Fortschritt der Migration zu überwachen und zu steuern, indem es Daten von verschiedenen Migrationstools aggregiert.

- **AWS Schema Conversion Tool (AWS SCT)**: Automatisiert die Konvertierung von Datenbank-Schemas. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS Schema Conversion Tool konvertiert Datenbank-Schemas und SQL-Code von einer Datenbankplattform zu einer anderen, um die Migration von Datenbanken zu AWS zu erleichtern.

- **AWS Snow Family**: Physische Datenübertragung zu und von AWS. Operiert vor Ort (On-Premises).  
  > **Erklärung:** Die AWS Snow Family umfasst Geräte wie Snowcone, Snowball und Snowmobile für die physische Übertragung großer Datenmengen zu und von AWS, insbesondere bei begrenzter Netzwerkverbindung oder großen Datenvolumina.

- **AWS Transfer Family**: Sichere Übertragung von Dateien zu und von AWS. Operiert in Regionen.  
  > **Erklärung:** AWS Transfer Family umfasst Dienste wie SFTP, FTPS und FTP für die sichere Übertragung von Dateien zu und von AWS-Speicherdiensten wie Amazon S3 und Amazon EFS, mit Unterstützung für gängige Dateiübertragungsprotokolle.

### Netzwerk und Bereitstellung von Inhalten:

- **Amazon API Gateway**: Erstellung, Verwaltung und Skalierung von APIs. Operiert in Regionen.  
  > **Erklärung:** Amazon API Gateway ermöglicht das Erstellen, Verwalten und Skalieren von APIs für Webanwendungen und mobile Apps. Es verwaltet den API-Verkehr, bietet Sicherheitsfunktionen und integriert sich mit anderen AWS-Diensten.

- **Amazon CloudFront**: Globales Content Delivery Network (CDN). Operiert auf globaler Ebene.  
  > **Erklärung:** Amazon CloudFront ist ein CDN, das Inhalte wie Webseiten, Videos und APIs weltweit über ein Netzwerk von Edge-Standorten schnell und zuverlässig bereitstellt, um Latenzzeiten zu minimieren.

- **AWS Direct Connect**: Private Netzwerkverbindung zu AWS. Operiert in Regionen.  
  > **Erklärung:** AWS Direct Connect ermöglicht eine dedizierte, private Netzwerkverbindung zwischen Ihrem Rechenzentrum und AWS. Dies verbessert die Netzwerkperformance und reduziert die Kosten im Vergleich zu Internet-basierten Verbindungen.

- **AWS Global Accelerator**: Beschleunigt die Performance von globalen Anwendungen. Operiert auf globaler Ebene.  
  > **Erklärung:** AWS Global Accelerator verbessert die Performance von Anwendungen, indem es den Datenverkehr über das globale Netzwerk von AWS leitet, um eine konsistentere und schnellere Benutzererfahrung zu gewährleisten.

- **Amazon Route 53**: Skalierbarer DNS-Webservice. Operiert auf globaler Ebene.  
  > **Erklärung:** Amazon Route 53 ist ein hochverfügbarer und skalierbarer DNS-Dienst, der Domainnamen in IP-Adressen auflöst und Routing für Anfragen an Anwendungen und Webservices bereitstellt.

- **Amazon VPC**: Isolierte Netzwerkumgebung in der AWS-Cloud. Operiert in Regionen.  
  > **Erklärung:** Amazon Virtual Private Cloud (VPC) ermöglicht das Erstellen eines isolierten Netzwerkbereichs innerhalb der AWS-Cloud, in dem Sie Ihre Ressourcen sicher betreiben und Netzwerksicherheitsrichtlinien umsetzen können.

- **AWS VPN**: Sicherer VPN-Zugriff auf AWS-Ressourcen. Operiert in Regionen.  
  > **Erklärung:** AWS VPN ermöglicht eine sichere Verbindung zwischen Ihrem lokalen Netzwerk und Ihrer AWS-VPC über ein VPN-Gateway. Dies schützt die Datenübertragung und ermöglicht sicheren Zugriff auf Ihre AWS-Ressourcen.

### Sicherheit, Identität und Compliance:
- **AWS Artifact**: Zugang zu Compliance-Berichten und -Dokumentationen. Operiert auf globaler Ebene.

 > Das über die Konsole bereitgestellte AWS Artifact ist ein Self-Service-Portal zum Abrufen von Prüfartefakten, das unseren Kunden On-Demand-Zugriff auf die Compliance-Dokumentation und die Agreements von AWS bietet.

 > Verwenden Sie AWS Artifact Reports, um AWS- Sicherheits- und Compliance-Dokumente wie z. B. AWS-ISO-Zertifizierungen, Dokumente der Zahlungskartenindustrie (PCI, Payment Card Industry) und Service Organization Control (SOC)-Berichte herunterzuladen.

 > Sie können die Agreements zu AWS Artifact für das Überprüfen, Akzeptieren und Nachverfolgen des Status von AWS Agreements wie unserem Business Associate Addendum (BAA) verwenden.
 
- **AWS Audit Manager**: Automatisierung des Auditprozesses. Operiert in Regionen.

 > 
AWS Audit Manager ist ein AWS-Dienst für Compliance-Berichterstattung, der bei der Vorbereitung von IT-Audits unterstützt. Der Dienst konzentriert sich auf vorgefertigte Berichte für Compliance-Beauftragte sowie interne und externe Prüfer. Er konsolidiert Compliance-Daten aus AWS Config und AWS Security Hub und sammelt Auditnachweise über API-Aufrufe an AWS-Dienste und aus AWS CloudTrail-Ereignissen.

- **AWS Certificate Manager (ACM)**: Verwaltung von SSL/TLS-Zertifikaten. Operiert in Regionen.

 > AWS Certificate Manager (ACM) bewältigt die Komplexität der Erstellung, Speicherung und Erneuerung von öffentlichen und privaten SSL TLS /X.509-Zertifikaten und Schlüsseln, die Ihre AWS Websites und Anwendungen schützen. Sie können Zertifikate für Ihre integrierten AWS Dienste bereitstellen, indem Sie sie entweder direkt ausstellen ACM oder indem Sie Zertifikate von Drittanbietern in das ACM Verwaltungssystem importieren. ACMZertifikate können einzelne Domainnamen, mehrere spezifische Domainnamen, Wildcard-Domains oder Kombinationen davon schützen. ACMWildcard-Zertifikate können eine unbegrenzte Anzahl von Subdomains schützen. Sie können auch ACM Zertifikate exportieren, von denen signiert wurde, AWS Private CA um sie überall in Ihrem internen Bereich zu verwenden. PKI

- **AWS CloudHSM**: Verwaltete Hardware-Sicherheitsmodule (HSM) für Kryptographie. Operiert in Regionen.

 > Verwalten Sie Ihre Schlüssel auf FIPS-validierter Hardware, geschützt durch kundeneigene, mandantenfähige HSM-Instanzen, die in Ihrer eigenen Virtual Private Cloud (VPC) laufen. Die Trennung von Aufgaben und eine rollenbasierte Zugriffssteuerung zählen zu den wesentlichen Merkmalen von AWS CloudHSM. AWS überwacht den Zustand und die Netzwerkverfügbarkeit Ihrer HSMs. Sie kontrollieren die HSMs und die Erzeugung und Verwendung Ihrer Verschlüsselungsschlüssel.
 
- **Amazon Cognito**: Identitäts- und Benutzerverwaltung für Web- und Mobile-Apps. Operiert in Regionen.

 > Amazon Cognito ist ein entwicklerzentrierter und kostengünstiger Service für Customer Identity and Access Management (CIAM). Es bietet einen sicheren Identitätsspeicher und Verbundsoptionen, die auf Millionen von Benutzern skaliert werden können. Amazon Cognito unterstützt die Anmeldung mit sozialen Identitätsanbietern und SAML- oder OIDC-basierten Identitätsanbietern für ein angenehmes Kundenerlebnis und bietet erweiterte Sicherheitsfunktionen zum Schutz Ihrer Kunden und Ihres Unternehmens. Es unterstützt verschiedene Compliance-Standards, arbeitet mit offenen Identitätsstandards (OAuth2.0, SAML 2.0 und OpenID Connect) und lässt sich in ein erweitertes Ökosystem von Front-End- und Back-End-Entwicklungsressourcen und SDK-Bibliotheken integrieren.
 
- **Amazon Detective**: Erkennung und Untersuchung von Sicherheitsvorfällen. Operiert in Regionen.

 > Amazon Detective vereinfacht das Analysieren, Untersuchen und schnelle Identifizieren der Ursachen von potentiellen Sicherheitsgefährdungen oder verdächtigen Aktivitäten. Amazon Detective erfasst automatisch Protokolldaten aus Ihren AWS-Ressourcen und erstellt mithilfe von Machine Learning, statistischer Analyse und Diagrammtheorie einen verknüpften Datensatz, mit dem Sie schnellere und effizientere Sicherheitsüberprüfungen durchführen können.

 > Amazon Detective kann Billionen von Ereignissen aus verschiedenen Datenquellen wie Amazon Virtual Private Cloud (Amazon VPC)-Flussprotokollen, AWS-CloudTrail-Protokollen, Amazon Elastic Kubernetes Service (Amazon EKS)-Prüfungsprotokollen und Sicherheitserkenntnissen aus verschiedenen Services wie Amazon GuardDuty, AWS Security Hub und mehr analysieren. Detective erstellt automatisch eine einheitliche, interaktive Ansicht Ihrer Ressourcen, Benutzer und der Interaktionen zwischen ihnen im Laufe der Zeit. Mit dieser einheitlichen Ansicht können Sie alle Details und den Kontext an einem Ort visualisieren, um die zugrunde liegenden Gründe für die Erkenntnisse zu identifizieren, relevante historische Aktivitäten aufzuspüren und die Ursache schnell zu ermitteln.


- **AWS Directory Service**: Integration von Active Directory in AWS. Operiert in Regionen.

 > AWS Directory Service für Microsoft Active Directory, auch bekannt als AWS Managed Microsoft Active Directory (AD), ermöglicht es Ihren verzeichnisorientierten Workloads und AWS-Ressourcen, das verwaltete Active Directory (AD) in AWS zu nutzen. AWS Managed Microsoft AD basiert auf aktuellem Microsoft AD und erfordert keine Synchronisierung oder Replikation von Daten aus Ihrem vorhandenen Active Directory in die Cloud. Sie können die standardmäßigen AD-Verwaltungstools verwenden und die Vorteile der integrierten AD-Features wie Gruppenrichtlinien und Single-Sign-On nutzen. Mit AWS Managed Microsoft AD können Sie ganz einfach Instances von Amazon EC2 und Amazon RDS für SQL Server zu Ihrer Domain hinzufügen und AWS-Endbenutzer-Computing-Services, wie Amazon WorkSpaces, mit AD-Benutzern und Gruppen nutzen.

- **AWS Firewall Manager**: Zentrale Verwaltung von Firewalls in AWS. Operiert in Regionen.

 >AWS Firewall Manager ist ein Sicherheitsmanagement-Service, der die zentrale Konfiguration und Verwaltung von Firewall-Regeln für Ihre Konten und Anwendungen in AWS Organizations ermöglicht. Wenn neue Anwendungen erstellt werden, können Sie mit dem Firewall Manager einfacher neue Anwendungen und Ressourcen festgelegte Sicherheitsregeln durchsetzen.

 >AWS Firewall Manager vereinfacht Ihre Verwaltungs- und Wartungsaufgaben für mehrere Konten und Ressourcen und bietet eine Vielzahl von Schutzmaßnahmen AWS WAF AWS Shield Advanced, darunter Amazon VPC-Sicherheitsgruppen und Netzwerk-ACLs sowie Amazon Route 53 Resolver DNS Firewall. AWS Network Firewall Mit Firewall Manager richten Sie Ihre Schutzmaßnahmen nur einmal ein und der Service wendet sie automatisch auf Ihre Konten und Ressourcen an, auch wenn Sie neue Konten und Ressourcen hinzufügen.
 >- Firewall Manager bietet folgende Vorteile:
 
 >- Schützt Ressourcen kontoübergreifend.
 
 >- Hilft dabei, alle Ressourcen eines bestimmten Typs zu schützen, z. B. alle CloudFront Amazon-Distributionen
 
 >- Schützt aller Ressourcen mit bestimmten Tags.
 
 >- Wendet den Schutz automatisch auf Ressourcen an, die zu Ihrem Konto hinzugefügt werden.
 
 >- Ermöglicht es Ihnen, alle Mitgliedskonten einer AWS Organizations Organisation zu abonnieren AWS Shield Advanced, und abonniert automatisch neue Konten, die der Organisation beitreten
 
 >- Ermöglicht das Anwenden von Sicherheitsgruppenregeln auf alle Mitgliedskonten oder bestimmte Teilmengen von Konten in einer AWS Organizations -Organisation und wendet die Regeln automatisch auf neue Konten innerhalb des Bereichs an, die der Organisation beitreten.
 
 >- Ermöglicht es Ihnen, Ihre eigenen Regeln zu verwenden oder verwaltete Regeln von zu erwerben AWS Marketplace
 
 >Firewall Manager ist besonders nützlich, wenn Sie Ihr gesamtes Unternehmen schützen möchten und nicht nur eine kleine Anzahl bestimmter Konten und Ressourcen, oder wenn Sie häufig neue Ressourcen hinzufügen, die Sie schützen möchten. Firewall Manager bietet auch eine zentrale Überwachung von DDoS-Angriffen in Ihrem gesamten Unternehmen.
 
- **Amazon GuardDuty**: Bedrohungserkennung in AWS-Umgebungen. Operiert in Regionen.

 >Amazon GuardDuty ist ein Service zur Erkennung von Bedrohungen, der Ihre AWS-Umgebung kontinuierlich auf bösartige Aktivitäten und nicht autorisiertes Verhalten überwacht. GuardDuty kombiniert Machine Learning, Anomalieerkennung, Netzwerküberwachung und die Erkennung bösartiger Dateien und nutzt sowohl von AWS entwickelte als auch branchenführende Quellen von Drittanbietern, um Workloads und Daten in AWS zu schützen. GuardDuty analysiert Ereignisse aus mehreren AWS-Datenquellen, einschließlich AWS CloudTrail-Protokollen, Amazon Virtual Private Cloud (Amazon VPC) Flow-Protokollen und DNS-Abfrageprotokollen. GuardDuty überwacht auch Amazon-Simple-Storage-Service-Datenereignisse (Amazon S3), Amazon-Aurora-Anmeldeereignisse und Laufzeitaktivitäten für Amazon Elastic Kubernetes Service (Amazon EKS), Amazon Elastic Compute Cloud (Amazon EC2) und Amazon Elastic Container Service (Amazon ECS) – einschließlich serverloser Container-Workloads auf AWS Fargate.

- **AWS Identity and Access Management (IAM)**: Verwaltung von Benutzerzugriffen und -rechten. Operiert in Regionen.

 >AWS Identity and Access Management (IAM) ist ein Webdienst, mit dem Sie den Zugriff auf AWS Ressourcen sicher kontrollieren können. Mit können Sie Berechtigungen verwaltenIAM, mit denen gesteuert wird, auf welche AWS Ressourcen Benutzer zugreifen können. Sie steuern IAM damit, wer authentifiziert (angemeldet) und autorisiert ist (über Berechtigungen verfügt), um Ressourcen zu verwenden. IAMstellt die Infrastruktur bereit, die erforderlich ist, um die Authentifizierung und Autorisierung für Sie AWS-Konten zu kontrollieren.

- **AWS IAM Identity Center (AWS Single Sign-On)**: Zentrales SSO für AWS-Konten und -Anwendungen. Operiert in Regionen.

 >AWS IAM Identity Center erleichtert die zentrale Verwaltung des Zugriffs auf mehrere AWS-Konten und Geschäftsanwendungen. Es bietet Ihren Mitarbeitern einen Single-Sign-On-Zugriff auf alle zugewiesenen Konten und Anwendungen von einem einzigen Ort aus. Mit IAM Identity Center können Sie den zentralisierten Zugriff und Benutzerberechtigungen für alle Ihre Konten in AWS Organizations problemlos verwalten. IAM Identity Center konfiguriert und verwaltet alle benötigten Berechtigungen für Ihre Konten automatisch, ohne dass zusätzliche Einstellungen in den einzelnen Konten erforderlich sind. Sie können Benutzern Berechtigungen auf Basis häufiger Arbeitsfunktionen zuweisen und diese an Ihre speziellen Sicherheitsanforderungen anpassen. IAM Identity Center umfasst auch integrierte Integrationen in AWS-Anwendungen wie AWS Analytics Services, Amazon SageMaker Studio, AWS Systems Manager Change Manager sowie in viele Geschäftsanwendungen wie Salesforce, Box und Microsoft 365.

 >Sie können Benutzer erstellen und verwalten, die im Identitätsspeicher von IAM Identity Center gespeichert werden, und Verknüpfungen zu einer vorhandenen Identitätsquelle wie Microsoft Active Directory, Okta Ping Identity, JumpCloud, und Microsoft Entra ID (ehemals Azure AD) erstellen. IAM Identity Center ermöglicht Ihnen die Auswahl von Benutzerattributen, z. B. Kostenstelle, Titel oder Gebietsschema, aus der Identitätsquelle und dann deren Verwendung zur attributbasierten Zugriffssteuerung (ABAC) in AWS.

- **Amazon Inspector**: Automatisierte Sicherheitsbewertung von Anwendungen. Operiert in Regionen.

 >Amazon Inspector ist ein Schwachstellenmanagement-Service, der kontinuierlich AWS-Workloads auf Software-Schwachstellen und unbeabsichtigte Netzwerkaussetzungen scannt. Mit wenigen Schritten in der AWS Management Console können Sie Amazon Inspector in allen Konten Ihrer Organisation nutzen. Nach dem Start entdeckt es automatisch Amazon Elastic Compute Cloud (EC2)-Instanzen, Container-Images in Amazon Elastic Container Registry (ECR) und innerhalb von Continuous Integration und Continuous Delivery (CI/CD)-Tools sowie AWS Lambda-Funktionen in großem Maßstab und beginnt sofort mit der Bewertung auf bekannte Schwachstellen.

 >Amazon Inspector berechnet für jedes Finding eine hoch kontextualisierte Risikobewertung, indem es Informationen zu Common Vulnerabilities and Exposures (CVE) mit Faktoren wie Netzwerkzugriff und Ausnutzbarkeit korreliert. Dieser Score wird verwendet, um die kritischsten Schwachstellen zu priorisieren und die Effizienz der Behebung zu verbessern. Alle Findings werden in der Amazon Inspector-Konsole aggregiert und an AWS Security Hub und Amazon EventBridge weitergeleitet, um Workflows zu automatisieren. Schwachstellen, die in Container-Images gefunden werden, werden ebenfalls an Amazon ECR gesendet, damit Ressourcenbesitzer sie einsehen und beheben können. Amazon Inspector ermöglicht es Sicherheitsteams und Entwicklern jeder Größe, eine umfassende Sicherheit und Compliance der Infrastruktur-Workloads in ihren AWS-Umgebungen zu erreichen.

- **AWS Key Management Service (AWS KMS)**: Verwaltung von Verschlüsselungsschlüsseln. Operiert in Regionen.

 >Mit AWS Key Management Service (KMS) können Sie die zum Schutz Ihrer Daten verwendeten kryptografischen Schlüssel zentral steuern. Der Service ist mit anderen AWS-Services integriert und vereinfacht die Verschlüsselung von Daten, die Sie in diesen Services speichern, sowie die Zugriffskontrolle für Schlüssel zur Entschlüsselung dieser Daten. AWS KMS ist auch in AWS CloudTrail integriert, mit dem Sie überprüfen können, wer welche Schlüssel wann auf welchen Ressourcen verwendet hat. AWS KMS hilft Entwicklern ihrem Anwendungscode auf einfachere Weise Funktionen zur Verschlüsselung oder digitalen Signatur hinzuzufügen, entweder direkt oder mithilfe des AWS-SDK. Das AWS-Verschlüsselungs-SDK unterstützt AWS KMS als Schlüsselanbieter für Entwickler, die Daten in ihren Anwendungen lokal verschlüsseln/entschlüsseln müssen.
 
 >Mit AWS KMS können Sie den Lebenszyklus und die Berechtigungen Ihrer Schlüssel zentral steuern. Sie können jederzeit neue Schlüssel erstellen und jeweils separat festlegen, wer sie verwalten und verwenden darf. Alternativ zur Verwendung von Schlüsseln, die von AWS KMS generiert wurden, können Sie Schlüssel aus der eigenen Schlüsselverwaltungsinfrastruktur importieren oder in Ihrem AWS-CloudHSM-Cluster gespeicherte Schlüssel, oder Schlüssel, die außerhalb von AWS in Ihrer externen Schlüsselverwaltung aufbewahrt werden verwenden. Sie können die automatische Rotation von in AWS KMS generierten Stammschlüsseln einmal pro Jahr auswählen, ohne zuvor verschlüsselte Daten erneut verschlüsseln zu müssen. Der Dienst hält ältere Versionen des Stammschlüssels automatisch verfügbar, um zuvor verschlüsselte Daten zu entschlüsseln. Sie können Ihre Stammschlüssel verwalten und deren Verwendung über die AWS-Managementkonsole, das AWS SDK oder die AWS-Befehlszeilenschnittstelle (CLI) prüfen.

- **Amazon Macie**: Schutz und Überwachung sensibler Daten. Operiert in Regionen.

 >Amazon Macie ist ein Datensicherheitsdienst, der mithilfe von Machine Learning und Musterabgleich sensible Daten erkennt, Einblicke in Datensicherheitsrisiken bietet und Ihnen das Automatisieren des Schutzes vor diesen Risiken ermöglicht. Macie unterstützt Sie bei der Verwaltung des Sicherheitsstatus der Daten in Ihrer Amazon-S3-Umgebung, indem es fortlaufend die Sicherheits- und Zugriffskontrollen Ihrer S3-Buckets auswertet und Ergebnisse generiert, um Sie über entsprechende Probleme zu informieren. Dies können beispielsweise unverschlüsselte Buckets, öffentlich zugängliche Buckets oder Buckets, die für AWS-Konten außerhalb Ihrer Organisation freigegeben sind, sein. Macie erstellt dann automatisch Stichproben von den Objekten in Ihren S3-Buckets und analysiert diese, um zu prüfen, ob sie sensible Daten wie persönlich identifizierbare Informationen (PII) enthalten. Außerdem erstellt Macie eine interaktive Datenkarte, die aufzeigt, wo sich Ihre sensiblen Daten in S3 in den Konten befinden, und es wird eine Sensibilitätsbewertung für jeden Bucket generiert. Mithilfe der interaktiven Datenkarte können Sie bestimmen, welche S3-Buckets genauer untersucht werden sollten, indem Sie mit Macie gezielte Aufträge zur Erkennung sensibler Daten ausführen. Solche Aufträge können Ihnen dabei helfen, Vorschriften wie den Health Insurance Portability and Accountability Act (HIPAA) und die Datenschutz-Grundverordnung (DSGVO) einzuhalten. Alle von Macie generierten Ergebnisse werden an Amazon EventBridge gesendet und können auch auf AWS Security Hub veröffentlicht werden, um automatisierte Abhilfemaßnahmen wie das Sperren des öffentlichen Zugangs für Ihren S3-Speicher einzuleiten. Für Ihre ersten Schritte mit Macie können Sie die 30-tägige kostenlose Testversion nutzen, die die automatisierte Erkennung sensibler Daten und die Auswertung auf S3-Bucket-Ebene ermöglicht. Mit der kostenlosen Testversion können Sie sich außerdem ein Bild von den ungefähren Kosten machen, die für die Nutzung der kostenpflichtigen Version anfallen würden.

- **AWS Network Firewall**: Managed Network Firewall Service. Operiert in Regionen.

 >AWS Network Firewall ist ein verwalteter Service, der die einfache Implementierung wichtiger Netzwerkschutzmaßnahmen für alle Ihre Amazon Virtual Private Clouds (VPCs) ermöglicht. Der Service lässt sich mit nur wenigen Klicks einrichten und wird automatisch mit Ihrem Netzwerk-Datenverkehr skaliert, sodass Sie sich nicht um die Bereitstellung und Verwaltung der Infrastruktur kümmern müssen. Mit der flexiblen Regel-Engine von AWS Network Firewall können Sie Firewall-Regeln definieren, die Ihnen eine differenzierte Kontrolle über den Netzwerk-Datenverkehr ermöglichen, z. B. das Blockieren ausgehender SMB-Anfragen (Server Message Block), um die Verbreitung bösartiger Aktivitäten zu verhindern. Sie können auch Regeln importieren, die Sie bereits in gängigen Open-Source-Regelformaten geschrieben haben, und die Integration von verwalteten Informations-Feeds aktivieren, die von AWS-Partnern bezogen werden. AWS Network Firewall arbeitet mit AWS Firewall Manager zusammen, sodass Sie Richtlinien basierend auf Regeln von AWS Network Firewall erstellen und diese Richtlinien dann zentral auf Ihre VPCs und Konten anwenden können.

- **AWS Resource Access Manager (AWS RAM)**: Teilen von Ressourcen über AWS-Konten hinweg. Operiert in Regionen.
 >AWS RAM hilft Ihnen bei der sicheren Freigabe Ihrer Ressourcen über AWS-Konten hinweg oder innerhalb Ihrer Organisation oder Organisationseinheiten (OUs) und mit IAM-Rollen und -Benutzern für unterstützte Ressourcentypen.
 
- **AWS Secrets Manager**: Verwaltung von Zugangsdaten und Geheimnissen. Operiert in Regionen.
 >AWS Secrets Manager hilft Ihnen dabei, Datenbankanmeldedaten, Anwendungsanmeldedaten, OAuth-Token, API-Schlüssel und andere Geheimnisse während ihres gesamten Lebenszyklus zu verwalten, abzurufen und zu rotieren. Viele AWS Dienste speichern und verwenden Geheimnisse in Secrets Manager.

 >Secrets Manager hilft Ihnen, Ihre Sicherheitslage zu verbessern, da hartcodierte Anmeldeinformationen im Quellcode der Anwendung nicht mehr innerhalb oder mit der Anwendung gespeichert werden. Das Speichern der Anmeldeinformationen im Secrets Manager trägt dazu bei, eine mögliche Kompromittierung durch jemanden zu verhindern, der Ihre Anwendung oder die Komponenten inspizieren kann. Mit Secrets Manager können Sie hartkodierten Anmeldeinformationen durch einen Laufzeitaufruf des Secrets-Manager-Webservice ersetzen und somit die Anmeldeinformationen bei Bedarf dynamisch abrufen.

 >Mit Secrets Manager können Sie einen automatischen Rotationsplan für Ihre Secrets konfigurieren. Dies ermöglicht es Ihnen, langfristige Secrets durch kurzfristige zu ersetzen, was das Risiko einer Kompromittierung erheblich verringert. Da die Anmeldeinformationen nicht mehr in der Anwendung gespeichert werden, müssen für rotierende Anmeldeinformationen Ihre Anwendungen nicht mehr aktualisiert und Änderungen an den Anwendungsclients bereitgestellt werden.
 
- **AWS Security Hub**: Zentrale Sicherheitsüberwachung und Compliance-Verwaltung. Operiert in Regionen.
 >AWS Security Hub ist ein Cloud Security Posture Management (CSPM) Service, der Sicherheitsoperationen durch automatisierte, kontinuierliche Überprüfungen von Sicherheits-Best-Practices für Ihre AWS-Ressourcen vereinfacht, um Fehlkonfigurationen zu identifizieren. Security Hub aggregiert Ihre Sicherheitswarnungen (sogenannte Findings) in einem standardisierten Format und priorisiert sie, damit Sie diese einfacher anreichern, untersuchen und beheben können.

 >Der Einstieg in Security Hub erfordert nur wenige Klicks in der AWS Management Console, um mit der Aggregation von Findings und Sicherheitsüberprüfungen im Rahmen der 30-tägigen kostenlosen Testversion zu beginnen. Sie können Security Hub in AWS Organizations integrieren, um den Service automatisch in allen Konten Ihrer Organisation zu aktivieren.
- **AWS Shield**: Schutz vor DDoS-Angriffen. Operiert in Regionen.

 >Alle AWS-Kunden profitieren ohne zusätzliche Kosten vom automatischen Schutz durch AWS Shield Standard. AWS Shield Standard schützt vor den gängigsten, häufig auftretenden DDoS-Angriffen auf Netzwerk und Transportebene, die sich gegen Ihre Website oder Anwendungen richten. Wenn Sie AWS Shield Standard mit Amazon CloudFront und Amazon Route 53 verwenden, erhalten Sie umfangreichen Verfügbarkeitsschutz gegen alle bekannten Infrastruktur-Angriffe (Ebene 3 und 4).
 
 >Um einen erhöhten Schutz vor Angriffen auf Ihre Anwendungen zu gewährleisten, die auf Ressourcen von Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator und Amazon Route 53 ausgeführt werden, können Sie AWS Shield Advanced abonnieren. Neben dem Netzwerk- und Transportebenen-Schutz der Standard-Version, bietet Shield Advanced zusätzliche Erkennung und Schadensminderung bei großen und umfangreichen DDoS-Angriffen, fast Echtzeit-Sichtbarkeit bei Angriffen und Integration in AWS WAF, eine Firewall für Webanwendungen. Shield Advanced ermöglicht Ihnen zusätzlich Rund-um-die-Uhr-Zugriff auf das AWS Shield Response Team (SRT) und Schutz vor DDoS-bezogenen Belastungsspitzen in Ihren EC2-, ELB-, CloudFront-, Global Accelerator- und Route 53-Ressourcen.
 
- **AWS WAF**: Web Application Firewall zum Schutz von Webanwendungen. Operiert in Regionen.

 >AWS WAF hilft Ihnen, sich vor gängigen Web-Exploits und Bots zu schützen, die die Verfügbarkeit beeinträchtigen, die Sicherheit gefährden oder übermäßig viele Ressourcen verbrauchen können.
 
### Serverless:
- **AWS Fargate**: Serverloses Ausführen von Containern ohne Infrastrukturverwaltung. Operiert in Regionen.

 >AWS Fargate ist sowohl mit Amazon Elastic Container Service (Amazon ECS) als auch mit Amazon Elastic Kubernetes Service (Amazon EKS) kompatibel. Wählen Sie ein OCI-konformes Container-Image aus, definieren Sie Speicher- und Rechenressourcen und führen Sie den Container mit Serverless-Datenverarbeitung aus. Da mehrere CPU-Architekturen und Betriebssysteme unterstützt werden, können Sie die Vorteile in einer Vielzahl von Anwendungen nutzen.
- **AWS Lambda**: Ausführen von Code in Reaktion auf Ereignisse ohne Serververwaltung. Operiert in Regionen.
 >AWS Lambda ist ein Serverless-Datenverarbeitungsservice, der Ihren Code beim Eintreten bestimmter Ereignisse ausführt und für Sie automatisch die zugrunde liegenden Datenverarbeitungsressourcen verwaltet. Zu den Ereignissen können Zustandsänderungen oder Aktualisierungen gehören, beispielsweise wenn ein Benutzer einen Artikel in einen Einkaufswagen auf einer E-Commerce-Website legt. Mit AWS Lambda können Sie andere AWS-Services mit benutzerdefinierter Logik erweitern oder Ihre eigenen Backend-Services erstellen und im AWS-Umfang und mit AWS-Leistung und -Sicherheit betreiben. AWS Lambda kann Code automatisch als Reaktion auf mehrere Ereignisse wie HTTP-Anforderungen über Amazon API Gateway, Änderungen von Objekten in Amazon Simple Storage Service (Amazon S3)-Buckets, Aktualisierungen von Tabellen in Amazon DynamoDB oder Zustandsübergänge in AWS Step Functions ausführen.

 >Lambda führt Ihren Code auf einer hochverfügbaren Computing-Infrastruktur aus und erledigt alle rechenintensiven und verwaltungstechnischen Aufgaben für Ihre Datenverarbeitungs-Ressourcen aus. Das umfasst die Wartung von Servern und Betriebssystemen, die Bereitstellung von Kapazitäten und die automatische Skalierung, die Bereitstellung von Code und Sicherheitspatches ebenso wie die Codeüberwachung und -protokollierung. Sie müssen nur den Code zur Verfügung stellen.

### Speicher:

- **AWS Backup**: Zentralisierte Datensicherung für AWS-Dienste. Operiert in Regionen.
 >AWS-Backup bietet einen kostengünstigen, vollständig verwalteten, richtlinienbasierten Service, der die Datensicherung im großen Maßstab vereinfacht.
 
 >AWS Backup ist ein vollständig verwalteter Service, der die Datensicherung über AWS-Services und hybride Arbeitslasten hinweg zentralisiert und automatisiert. Es bietet Kernfunktionen für den Datenschutz, Wiederherstellungsfunktionen für Ransomware sowie Einblicke in die Compliance und Analysen für Datenschutzrichtlinien und -vorgänge. AWS Backup bietet einen kosteneffektiven, richtlinienbasierten Service mit Funktionen, die die Datensicherung in Exabyte-Größe über Ihr AWS-System hinweg vereinfachen. 
- **Amazon Elastic Block Store (Amazon EBS)**: Blockspeicher für EC2-Instanzen. Operiert in AZs.
 >Beim Amazon Elastic Block Store (Amazon EBS) handelt es sich um einen benutzerfreundlichen, skalierbaren und hochleistungsfähigen Blockspeicherservice, der für Amazon Elastic Compute Cloud (Amazon EC2) entwickelt wurde.

 >Skalieren Sie schnell für Ihre anspruchsvollsten, hochleistungsfähigen Workloads, einschließlich unternehmenskritischer Anwendungen wie SAP, Oracle und Microsoft-Produkte.

 >Ausfallschutz mit hoher Verfügbarkeit, inklusive Replikation innerhalb Availability Zones (AZs) und 99,999 % Beständigkeit mit io2-Block-Express-Volumes.

 >Wählen Sie den Speicher, der am besten zu Ihrem Workload passt. Das Angebot an Volumes reicht von kostengünstigen Dollar-pro-GB-Volumes bis hin zu Hochleistungsvolumes mit den schnellsten IOPS und Durchsatzraten.

 >Verschlüsseln Sie Ihre Blockspeicherressourcen, ohne Ihre eigene Schlüsselverwaltungsinfrastruktur aufbauen, warten und sichern zu müssen. Verhindern Sie den unbefugten Zugriff auf Ihre Daten, indem Sie den öffentlichen Zugriff einschränken und Sperren für Datensicherungen einrichten.

 >Schützen Sie Blockspeicherdaten in der Cloud sowie On-Premises-Blockdaten mit Amazon-EBS-Snapshots – einer zeitpunktbezogenen Kopie, die verwendet werden kann, um Notfallwiederherstellung zu ermöglichen, Daten zwischen Regionen und Konten zu migrieren und die Backup-Compliance zu verbessern. AWS vereinfacht das Lebenszyklus-Management Ihrer Snapshots durch die Integration mit Amazon Data Lifecycle Manager weiter. Auf diese Weise können Sie Richtlinien erstellen, mit denen Sie mehrere Aufgaben automatisieren können, einschließlich der Erstellung, Löschung, Aufbewahrung und Freigabe von Snapshots.

- **Amazon Elastic File System (Amazon EFS)**: Skalierbares NFS-Dateisystem für EC2-Instanzen. Operiert in Regionen.
 >Das Amazon Elastic File System (Amazon EFS) wächst und schrumpft automatisch, wenn Sie Dateien hinzufügen oder entfernen, ohne dass eine Verwaltung oder Bereitstellung erforderlich ist.

 >Erstellen und konfigurieren Sie gemeinsam genutzte Dateisysteme einfach und schnell für AWS-Computing-Services – ohne Bereitstellen, Patchen oder Wartung.

 >Skalieren Sie Workloads nach Bedarf auf Petabyte an Speicherplatz und Gigabyte pro Sekunde an Durchsatz, und zwar sofort.

 >Reduzieren Sie die Gesamtbetriebskosten durch automatisches Lebenszyklusmanagement mit kostenoptimierten Speicherklassen für seltenen Zugriff und Archiv, die darauf ausgelegt sind, die Kosten um bis zu 97 % zu senken.

 >Greifen Sie auf Ihre Dateien zu – mit einem vollständig verwalteten Dateisystem, das für hohe Verfügbarkeit und 99,999999999 % (11 Neuen) Haltbarkeit und bis zu 99,99 % (4 Neuen) Verfügbarkeit ausgelegt ist.
 
- **AWS Elastic Disaster Recovery**: Wiederherstellung von Workloads nach Ausfällen. Operiert in Regionen.
 >AWS Elastic Disaster Recovery (AWS DRS) minimiert Ausfallzeiten und Datenverluste mit einer schnellen, verlässlichen Wiederherstellung von On-Premises- und cloudbasierten Anwendungen – mit kostengünstiger Speicherung, minimalem Rechenaufwand und zeitpunktbezogener Wiederherstellung.
 
 >AWS Elastic Disaster Recovery (DRS) ist ein Service, der die Wiederherstellung von IT-Ressourcen nach einem Ausfall oder einer Katastrophe automatisiert. Er repliziert laufende Anwendungen und Daten kontinuierlich auf AWS, sodass Sie bei einem Ausfall schnell auf die AWS-Umgebung umschalten können. Er bietet eine einfache Wiederherstellung und reduzierte Ausfallzeiten, indem er regelmäßige Sicherungen durchführt und bei Bedarf automatisierte Wiederherstellungsprozesse bereitstellt.
 
 >Besonders herausragend ist die automatisierte, kontinuierliche Replikation von Daten und Anwendungen in Echtzeit, die eine schnelle Wiederherstellung und minimale Ausfallzeiten ermöglicht.
- **Amazon FSx**: Verwaltete Dateisysteme (Windows, Lustre, etc.). Operiert in Regionen.
 >Mit Amazon FSx haben Sie die Wahl zwischen vier weit verbreiteten Dateisystemen: NetApp ONTAP, OpenZFS, Windows File Server und Lustre. Diese Wahl basiert in der Regel auf Ihrer Vertrautheit mit einem bestimmten Dateisystem oder auf der Abstimmung des Feature-Umfangs, der Leistungsprofile und der Datenverwaltungsfunktionen des Dateisystems auf die Anforderungen Ihres Workloads.

 >Amazon FSx for Lustre ist ein vollständig verwalteter Service, der kosteneffizienten, hochleistungsfähigen und skalierbaren Speicher für Rechenlasten bietet. Angetrieben von Lustre, dem weltweit beliebtesten Hochleistungs-Dateisystem, bietet FSx for Lustre gemeinsamen Speicher mit Latenzen im Sub-Millisekundenbereich, bis zu Terabyte pro Sekunde Durchsatz und Millionen von IOPS. FSx for Lustre-Dateisysteme können auch mit Amazon Simple Storage Service (S3)-Buckets verknüpft werden, sodass Sie Daten gleichzeitig von einem Hochleistungs-Dateisystem und über die S3-API zugreifen und verarbeiten können.

 >Amazon FSx for Windows File Server erleichtert das Starten und Skalieren von zuverlässigem, leistungsstarkem und sicherem gemeinsamem Dateispeicher für Ihre Anwendungen und Endbenutzer. Mit Amazon FSx können Sie hochverfügbare und haltbare Dateisysteme starten, die sich über mehrere Verfügbarkeitszonen (AZs) erstrecken können und von bis zu Tausenden von Recheninstanzen über das branchenübliche Server Message Block (SMB)-Protokoll zugänglich sind. Es bietet eine umfassende Palette an Verwaltungs- und Sicherheitsfunktionen und integriert sich mit Microsoft Active Directory (AD). Um ein breites Spektrum von Arbeitslasten zu bedienen, bietet Amazon FSx hohe Durchsatz- und IOPS-Werte sowie konsistente Latenzen im Sub-Millisekundenbereich.
- **Amazon S3**: Objektbasierter Speicher für beliebige Datenmengen. Operiert in Regionen.
 >Amazon Simple Storage Service (Amazon S3) ist ein Objektspeicherservice, der branchenführende Skalierbarkeit, Datenverfügbarkeit, Sicherheit und Leistung bietet. Mit Amazon S3 können Sie jederzeit beliebige Mengen von Daten von überall aus im Internet speichern und aufrufen.
 
 >Um das Beste aus Amazon S3 herauszuholen, müssen Sie einige einfache Konzepte verstehen. Amazon S3 speichert Daten als Objekte innerhalb von Buckets. Ein Objekt besteht aus einer Datei und optional aus Metadaten, die diese Datei beschreiben. Um ein Objekt in Amazon S3 zu speichern, laden Sie die Datei, die Sie speichern möchten, in einen Bucket hoch. Wenn Sie eine Datei hochladen, können Sie Berechtigungen für das Objekt und alle Metadaten festlegen.

 >Buckets sind die Behälter für Objekte. Sie können einen oder mehrere Buckets haben. Für jeden Bucket können Sie den Zugriff darauf steuern (wer Objekte im Bucket erstellen, löschen und auflisten kann), Zugriffsprotokolle für ihn und seine Objekte anzeigen und die geografische Region auswählen, in der Amazon S3 den Bucket und seinen Inhalt speichert.
- **Amazon S3 Glacier**: Langfristige Datenspeicherung mit niedrigen Kosten. Operiert in Regionen.
 >Die Amazon-S3-Glacier-Speicherklassen wurden speziell für die Datenarchivierung entwickelt und bieten Ihnen die höchste Leistung, die größte Abrufflexibilität und den kostengünstigsten Archivspeicher in der Cloud. Alle S3-Glacier-Speicherklassen bieten virtuell unbegrenzte Skalierbarkeit und sind auf 99,999999999 % (11 Neuner) Datenbeständigkeit ausgerichtet. Die S3-Glacier-Speicherklassen bieten Optionen für den schnellsten Zugriff auf Ihre Archivdaten und den günstigsten Preis für Archivspeicher in der Cloud.

 >Sie können aus drei Archivspeicherklassen wählen, die für unterschiedliche Zugriffsmuster und Speicherdauer optimiert wurden. Für Archivdaten, auf die sofortiger Zugriff erforderlich ist, wie z. B. medizinische Bilder, Nachrichtenmedien-Komponenten oder Genomik-Daten, ist die Speicherklasse S3 Glacier Instant Retrieval die erste Wahl und bietet die kostengünstigste Speicherung mit Abrufen in Millisekunden. Für Archivdaten, auf die kein sofortiger Zugriff erforderlich ist, die aber die Flexibilität benötigen, große Datenmengen kostenlos abzurufen, wie z. B. Backup- oder Notfallwiederherstellungs-Anwendungsfälle, wählen Sie S3 Glacier Flexible Retrieval, mit Abrufen innerhalb von Minuten oder kostenlosen Massenabrufen innerhalb von 5–12 Stunden. Um bei Langzeit-Archivspeichern, wie z. B. Compliance-Archiven und der Aufbewahrung digitaler Medien, noch mehr sparen zu können, wählen Sie S3 Glacier Deep Archive, den kostengünstigsten Speicher in der Cloud mit Datenabruf innerhalb von 12 Stunden.
- **AWS Storage Gateway**: Integration von On-Premises-Speicher mit AWS-Cloud. Operiert vor Ort (On-Premises).
 >AWS Storage Gateway ist ein hybrider Cloud-Speicherdienst, der Ihnen On-Premises-Zugriff auf praktisch unbegrenzten Cloud-Speicher ermöglicht. Sie können Storage Gateway verwenden, um die Speicherverwaltung zu vereinfachen und die Kosten für wichtige Anwendungsfälle von Hybrid-Cloud-Speicher zu senken. Dazu gehören die Verlagerung von Backups in die Cloud, die Verwendung von On-Premises-Dateifreigaben, die durch Cloud-Speicher gesichert werden, und die Bereitstellung von Zugriff auf Daten in AWS mit niedriger Latenz für On-Premises-Anwendungen.

 >Um diese Anwendungsfälle zu unterstützen, bietet der Service vier verschiedene Arten von Gateways – Tape Gateway, Amazon S3 File Gateway, Amazon FSx File Gateway und Volume Gateway. Diese Gateways können die On-Premises-Anwendungen nahtlos mit Cloud-Speichern verbinden und Daten lokal zwischenspeichern, um den Zugriff mit geringer Latenz zu ermöglichen.
