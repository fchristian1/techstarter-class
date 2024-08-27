# 1.1
### Wertversprechen der AWS Cloud:
- **AWS** bietet Flexibilität, Skalierbarkeit, Kosteneffizienz und Zugang zu einer breiten Palette an Diensten, die Unternehmen dabei helfen, schneller Innovationen zu entwickeln.

### Verstehen der Skaleneffekte:
- **Skaleneffekte** in der AWS Cloud führen zu **Kosteneinsparungen**, da AWS seine globalen Ressourcen optimiert und diese Einsparungen an die Kunden weitergibt.

### Verstehen der Vorteile einer globalen Infrastruktur:
- Die **globale Infrastruktur** von AWS ermöglicht **rasche Bereitstellung** von Anwendungen weltweit, bietet **niedrige Latenz** und unterstützt **globale Reichweite**, was Unternehmen hilft, ihre Services nahtlos auf verschiedene Märkte auszuweiten.

### Verstehen der Vorteile von Hochverfügbarkeit, Elastizität und Agilität:
- **Hochverfügbarkeit** wird durch mehrere **Availability Zones** in jeder Region gewährleistet, **Elastizität** ermöglicht die automatische Skalierung von Ressourcen je nach Bedarf, und **Agilität** erlaubt es Unternehmen, schnell auf Änderungen und neue Anforderungen zu reagieren, indem sie Infrastruktur in Minuten statt Wochen bereitstellen.

# 1.2
### AWS Well-Architected Framework:
- **AWS Well-Architected Framework** bietet Best Practices und Richtlinien, um sichere, belastbare, effiziente und kosteneffektive Cloud-Architekturen zu erstellen.

### Verstehen des Well-Architected Frameworks:
- **Operational Excellence**: Fokus auf Betriebsprozesse, Monitoring und kontinuierliche Verbesserung.
- **Sicherheit**: Schutz von Daten, Systemen und Vermögenswerten durch präventive Maßnahmen.
- **Zuverlässigkeit**: Fähigkeit des Systems, Störungen zu vermeiden und sich von Ausfällen zu erholen.
- **Leistungseffizienz**: Optimierung von Ressourcen zur Erreichung der bestmöglichen Leistung.
- **Kostenoptimierung**: Minimierung von Kosten durch effizienten Ressourceneinsatz.
- **Nachhaltigkeit**: Minimierung der Umweltauswirkungen durch effiziente Nutzung der Cloud-Ressourcen.

### Identifizieren der Unterschiede zwischen den Säulen:
- Jede **Säule** hat einen spezifischen Fokus: **Operational Excellence** optimiert Prozesse, **Sicherheit** schützt Assets, **Zuverlässigkeit** garantiert Verfügbarkeit, **Leistungseffizienz** maximiert Ressourcen, **Kostenoptimierung** senkt die Ausgaben, und **Nachhaltigkeit** strebt nach geringeren ökologischen Fußabdrücken.

# 1.3
### Strategien zur Einleitung der Cloud-Migration:
- **Lift-and-Shift**: Bestehende Anwendungen ohne Änderungen in die Cloud verschieben.
- **Replatforming**: Optimierung bestehender Anwendungen für die Cloud.
- **Refactoring**: Anwendungen neu gestalten, um Cloud-Funktionen optimal zu nutzen.

### Ressourcen zur Unterstützung der Cloud-Migration:
- **AWS Migration Hub**: Zentrale Steuerung und Überwachung von Migrationsprojekten.
- **AWS Professional Services**: Beratung und Unterstützung durch AWS-Experten.

### AWS Cloud Adoption Framework (AWS CAF):
- **Vorteile**: Reduziert Geschäftsrisiken, verbessert ESG-Leistung, steigert Umsatz und betriebliche Effizienz durch strukturierte Cloud-Einführung.

### Migrationsstrategien:
- **Datenbankreplikation**: Echtzeit-Synchronisation von Datenbanken während der Migration.
- **AWS Snowball**: Physischer Datentransportdienst für große Datenmengen, die in die AWS Cloud migriert werden sollen.

# 1.4
### Aspekte der Cloud-Wirtschaftlichkeit:
- **Fixkosten vs. variable Kosten**: In der Cloud fallen keine hohen Anfangsinvestitionen an, stattdessen zahlt man nur für genutzte Ressourcen (variable Kosten).
- **On-Premises-Kosten**: Umfasst Hardware, Wartung, Strom, Kühlung und personellen Aufwand, die bei der Cloud-Nutzung entfallen.

### Kosteneinsparungen durch die Umstellung auf die Cloud:
- **Skaleneffekte**: AWS bietet Kostenersparnisse durch geteilte Infrastruktur und globale Verteilung der Ressourcen.
- **Richtige Bemessung**: Ressourcen können dynamisch an den Bedarf angepasst werden, um Über- oder Unterdimensionierung zu vermeiden.

### Lizenzstrategien:
- **Bring-Your-Own-License (BYOL)**: Nutzung vorhandener Lizenzen in der Cloud.
- **Mitgelieferte Lizenzen**: AWS bietet Lizenzen im Rahmen seiner Dienste an, was den Einstieg erleichtert.

### Vorteile der Automatisierung:
- **AWS CloudFormation**: Automatisiert die Bereitstellung und Verwaltung von AWS-Ressourcen, spart Zeit und reduziert Fehler.

### Verwaltete AWS-Services:
- **Amazon RDS**: Verwaltete relationale Datenbanken.
- **Amazon ECS und Amazon EKS**: Verwaltete Container-Orchestrierungsdienste.
- **Amazon DynamoDB**: Verwaltete NoSQL-Datenbank mit automatischer Skalierung.

# 2.1
### AWS-Modell der geteilten Verantwortung:

- **AWS-Verantwortung**: Verwaltung der Sicherheit der Cloud, einschließlich der Infrastruktur, wie Hardware, Software, Netzwerke und Rechenzentren.

- **Kundenverantwortung**: Verwaltung der Sicherheit in der Cloud, also die Konfiguration und Verwaltung von Ressourcen, Zugangskontrollen, Verschlüsselung und Daten.

### Komponenten des Modells:
- **Infrastruktur**: AWS verwaltet die physische Sicherheit und Wartung.
- **Daten und Konfigurationen**: Kunden sind für den Schutz ihrer Daten, Zugriffsrechte und Konfigurationen verantwortlich.

### Geteilte Verantwortungsbereiche:
- **Betriebssystem- und Netzwerksicherheit**: AWS sichert die Plattform, Kunden sind für die Sicherheitskonfiguration verantwortlich.

### Unterschiedliche Verantwortlichkeiten je nach Service:
- **Amazon EC2**: Kunden verwalten das Betriebssystem, die Anwendungen und Daten; AWS sichert die darunterliegende Infrastruktur.
- **Amazon RDS**: AWS verwaltet den Datenbank-Server und die Patches, Kunden verwalten die Daten, Zugriffsrechte und Anwendungslogik.
- **AWS Lambda**: AWS übernimmt mehr Verantwortung, da keine Server verwaltet werden; der Kunde ist nur für den Code und die Datensicherung verantwortlich.

# 2.2
### AWS Cloud-Sicherheits-, Governance- und Compliance-Konzepte

- **Governance und Compliance**: AWS bietet Tools wie **AWS Artifact** für Compliance-Berichte und **AWS Config** für Governance-Überwachung. Compliance-Informationen sind über AWS Artifact zugänglich.

- **Vorteile der Cloud-Sicherheit**: AWS bietet integrierte Verschlüsselung für Daten im Ruhezustand und während der Übertragung, zusammen mit einer Vielzahl von Sicherheitsdiensten wie **AWS Shield** (DDoS-Schutz) und **AWS Security Hub** (zentralisierte Sicherheitsüberwachung).

### Protokollierung und Überwachung
- **Protokollspeicherung**: **AWS CloudTrail** erfasst API-Aktivitäten und **Amazon CloudWatch** überwacht Betriebsdaten und Sicherheitsvorfälle.

### Verschlüsselungsoptionen
- **Verschlüsselung während der Übertragung**: TLS/SSL zur Absicherung von Datenverkehr.
- **Verschlüsselung im Ruhezustand**: Services wie **AWS Key Management Service (KMS)** unterstützen die Verschlüsselung gespeicherter Daten.

### Sicherheitsdienste für Kundenressourcen
- **Amazon Inspector**: Bewertet die Sicherheitslage der Anwendungen.
- **AWS Security Hub**: Bietet eine zentrale Ansicht der Sicherheitsalarme und Compliance-Checks.
- **Amazon GuardDuty**: Erkennt Bedrohungen in Echtzeit.

### Compliance-Anforderungen und Variabilität
- **Unterschiedliche Anforderungen**: AWS-Services haben spezifische Compliance-Profile, die je nach Region und Branche variieren können. Beispielsweise kann eine AWS-Region unterschiedliche DSGVO-Compliance-Anforderungen erfüllen als eine andere.

# 2.3
### Funktionen von AWS Access Management

- **AWS Identity and Access Management (IAM)**: Verwalten von Benutzern, Gruppen und Berechtigungen. Erlaubt detaillierte Zugriffskontrolle auf AWS-Ressourcen.

- **Root User Schutz**: Der Root User hat volle Kontrolle über das AWS-Konto. Es ist wichtig, diesen Zugang zu schützen, indem MFA aktiviert und die Nutzung auf unvermeidbare Aufgaben beschränkt wird.

- **Prinzip der geringsten Privilegien**: Benutzer und Dienste erhalten nur die minimal erforderlichen Berechtigungen, um ihre Aufgaben auszuführen.

### Zugriffsschlüssel und Passwortrichtlinien
- **Zugriffsschlüssel**: Notwendig für die Programmierschnittstellen (APIs). **AWS Secrets Manager** und **AWS Systems Manager** speichern und verwalten Anmeldeinformationen sicher.

- **Passwortrichtlinien**: Bestimmen Anforderungen für starke Passwörter.

### Authentifizierungsmethoden
- **Multi-Faktor-Authentifizierung (MFA)**: Erhöht die Sicherheit durch zusätzliche Authentifizierungsfaktoren.
- **IAM Identity Center (AWS SSO)**: Ermöglicht Single Sign-On für zentralisierte Identitätsverwaltung.
- **Kontoübergreifende IAM-Rollen**: Erlauben den Zugriff auf Ressourcen in anderen AWS-Konten.

### Gruppen, Benutzer und Richtlinien
- **Gruppen und Benutzer**: Organisation von IAM-Ressourcen. Gruppen sammeln Benutzer, um Berechtigungen zu verwalten.
- **Benutzerdefinierte und verwaltete Richtlinien**: Regeln, die den Zugriff auf Ressourcen definieren. Benutzerdefinierte Richtlinien sind spezifisch für die Anforderungen eines Unternehmens, während verwaltete Richtlinien von AWS bereitgestellt werden.

### Aufgaben des Root Users
- **Root User Aufgaben**: Einrichtung des AWS-Kontos, Verwaltung von Zahlungsinformationen und Verwaltung von IAM-Root-Zugriffsberechtigungen.

### Schutz des Root Users
- **Schutzmethoden**: Aktivieren von MFA, Verwendung starker Passwörter, und Vermeidung der täglichen Nutzung des Root Users.

### Identitätsmanagement
- **Identitätsverbundmanagement**: Erlaubt die Nutzung von bestehenden Identitäten (z.B. Active Directory) für den Zugriff auf AWS-Ressourcen.

# 2.4
### Komponenten und Ressourcen für die Sicherheitsunterstützung

- **AWS-Sicherheitsfunktionen und -Services**:
  - **Sicherheitsgruppen**: Virtuelle Firewalls zur Steuerung des eingehenden und ausgehenden Datenverkehrs auf Instanzen.
  - **Netzwerk-ACLs (Access Control Lists)**: Steuern den Zugriff auf Subnetze innerhalb einer VPC.
  - **AWS WAF (Web Application Firewall)**: Schutz vor häufigen Web-Angriffen wie SQL-Injection und Cross-Site Scripting.

- **Sicherheitsprodukte von Drittanbietern**: Erhältlich über **AWS Marketplace** für zusätzliche Sicherheitslösungen und -dienste.

- **Verfügbarkeit von AWS-Sicherheitsinformationen**:
  - **AWS Knowledge Center**: Antworten auf häufige Sicherheitsfragen und -probleme.
  - **AWS Security Center**: Umfassende Sicherheitsübersicht und -berichte.
  - **AWS Security Blog**: Updates und Best Practices zu AWS-Sicherheitsdiensten.

- **Verwendung von AWS-Services zur Identifizierung von Sicherheitsproblemen**:
  - **AWS Trusted Advisor**: Bietet Empfehlungen zur Sicherheitsverbesserung, einschließlich der Überprüfung von Sicherheitskonfigurationen und Best Practices.

### Zusammenfassung
- **Sicherheitsgruppen** und **Netzwerk-ACLs** sichern Netzwerke.
- **AWS WAF** schützt Webanwendungen.
- **AWS Marketplace** bietet zusätzliche Sicherheitsprodukte.
- **AWS Knowledge Center**, **AWS Security Center** und **AWS Security Blog** sind Quellen für Sicherheitsinformationen.
- **AWS Trusted Advisor** hilft bei der Identifizierung von Sicherheitsrisiken.

# 3.1
### Methoden zur Bereitstellung und zum Betrieb in der AWS Cloud

- **Zugriffsoptionen auf AWS-Services**:
  - **Programmgesteuerter Zugriff**:
    - **APIs (Application Programming Interfaces)**: Ermöglicht die Interaktion mit AWS-Diensten durch direkte API-Aufrufe.
    - **SDKs (Software Development Kits)**: Bieten Programmierschnittstellen für die Integration mit AWS-Services.
    - **CLI (Command Line Interface)**: Ermöglicht die Verwaltung von AWS-Ressourcen über Befehlszeilenbefehle.
  - **AWS Management Console**: Eine grafische Benutzeroberfläche zum Verwalten und Konfigurieren von AWS-Diensten.
  - **Infrastructure as Code (IaC)**:
    - **AWS CloudFormation**: Definiert und verwaltet Infrastruktur mit deklarativen Templates.
    - **AWS CDK (Cloud Development Kit)**: Entwickelt Infrastruktur durch Programmiersprachen wie Python oder JavaScript.

- **Arten von Cloud-Bereitstellungsmodellen**:
  - **Cloud**: Vollständige Nutzung von Cloud-Diensten (Public Cloud).
  - **Hybrid**: Kombination von Cloud-Diensten und On-Premises-Infrastruktur.
  - **On-Premises**: Vollständige Nutzung eigener Hardware und Infrastruktur.

- **Konnektivitätsoptionen**:
  - **AWS VPN**: Sichere Verbindung zwischen lokalen Netzwerken und der AWS Cloud.
  - **AWS Direct Connect**: Stellt eine dedizierte Netzwerkverbindung von Ihrem Standort zu AWS bereit.
  - **Öffentliches Internet**: Zugriff auf AWS-Dienste über das Internet.

### Zusammenfassung
- **Programmgesteuerter Zugriff** erfolgt über **APIs**, **SDKs**, **CLI**.
- **Management Console** bietet eine grafische Oberfläche.
- **IaC** wird durch **AWS CloudFormation** oder **AWS CDK** ermöglicht.
- **Cloud-Bereitstellungsmodelle** sind **Cloud**, **Hybrid**, **On-Premises**.
- **Konnektivitätsoptionen** umfassen **AWS VPN**, **AWS Direct Connect**, **öffentliches Internet**.

# 3.2
### Globale AWS-Infrastruktur

- **AWS-Regionen, Availability Zones und Edge-Standorte**:
  - **Regionen**: Geografische Gebiete, die mehrere **Availability Zones** enthalten. Jede Region ist unabhängig und enthält mehrere Datenzentren.
  - **Availability Zones (AZs)**: Physisch getrennte Rechenzentren innerhalb einer Region, die voneinander isoliert sind, um Ausfälle zu verhindern. Jede AZ ist unabhängig und bietet Hochverfügbarkeit.
  - **Edge-Standorte**: Netzwerke von Servern, die Inhalte näher an den Endbenutzer bringen, um die Latenz zu reduzieren (z. B. für Amazon CloudFront).

- **Hochverfügbarkeit**:
  - **Mehrere Availability Zones**: Durch Verteilung von Ressourcen auf mehrere AZs kann ein Ausfall in einer Zone durch andere Zonen ausgeglichen werden, was zu höherer Verfügbarkeit und Fehlertoleranz führt.

- **Verwendung mehrerer Regionen**:
  - **Notfallwiederherstellung und Geschäftskontinuität**: Mehrere Regionen ermöglichen Redundanz und Wiederherstellung im Katastrophenfall.
  - **Geringe Latenz**: Durch die Auswahl von Regionen nahe den Endbenutzern wird die Latenz reduziert.
  - **Datensouveränität**: Regionale Datenspeicherung hilft, lokale gesetzliche Anforderungen zu erfüllen.

- **Vorteile von Edge-Standorten**:
  - **Amazon CloudFront**: Nutzt Edge-Standorte zur Bereitstellung von Inhalten mit geringer Latenz.
  - **AWS Global Accelerator**: Verbessert die Leistung von globalen Anwendungen durch Routing über Edge-Standorte.

- **AWS Wavelength Zones und AWS Local Zones**:
  - **AWS Wavelength Zones**: Bringt AWS-Dienste direkt an Netzwerk-Edge, um ultra-niedrige Latenz für mobile Anwendungen zu bieten.
  - **AWS Local Zones**: Bieten AWS-Dienste näher am Endbenutzer, um niedrige Latenz und hohe Performance für latenzempfindliche Anwendungen zu ermöglichen.

### Zusammenfassung
- **Regionen** bestehen aus mehreren **Availability Zones**.
- **Availability Zones** bieten Hochverfügbarkeit durch Isolation.
- **Edge-Standorte** verbessern die Leistung durch geringe Latenz.
- **Mehrere Regionen** ermöglichen Notfallwiederherstellung und geringe Latenz.
- **AWS Wavelength** und **Local Zones** bieten zusätzliche Latenzreduzierung durch Nähe zu Endbenutzern.

# 3.3
### AWS-Computing-Services

- **Amazon EC2 (Elastic Compute Cloud)**:
  - **Instanztypen**:
    - **Rechenoptimiert (z.B. C-Serie)**: Für rechenintensive Anwendungen wie Batch-Verarbeitung.
    - **Speicheroptimiert (z.B. R-Serie)**: Für speicherintensive Anwendungen wie Datenbanken.
    - **Allzweck (z.B. M-Serie)**: Für allgemeine Anwendungen und Webserver.
    - **Grafikprozessor (z.B. P-Serie)**: Für GPU-intensive Aufgaben wie maschinelles Lernen.
    - **Funktionen**: Flexibles Virtualisieren von Servern mit unterschiedlichen Größen und Kapazitäten.

- **Container-Optionen**:
  - **Amazon ECS (Elastic Container Service)**: Verwaltet Container auf EC2-Instances oder AWS Fargate.
  - **Amazon EKS (Elastic Kubernetes Service)**: Verwaltet Kubernetes-Cluster für Container-Orchestrierung.

- **Serverless-Computing-Optionen**:
  - **AWS Lambda**: Führt Code in Reaktion auf Ereignisse aus, ohne Serververwaltung.
  - **AWS Fargate**: Führt Container ohne Serververwaltung aus, integriert mit ECS oder EKS.

- **Automatische Skalierung**:
  - **Auto Scaling**: Passt die Anzahl der EC2-Instances oder Container basierend auf der Nachfrage an, um Kosten zu optimieren und die Verfügbarkeit sicherzustellen.

- **Load Balancer**:
  - **Zweck**: Verteilt eingehenden Datenverkehr auf mehrere EC2-Instances oder Container, um eine gleichmäßige Lastverteilung, hohe Verfügbarkeit und Fehlertoleranz zu gewährleisten.
  - **Typen**:
    - **Application Load Balancer (ALB)**: Auf Layer 7, eignet sich für HTTP/HTTPS-Traffic.
    - **Network Load Balancer (NLB)**: Auf Layer 4, geeignet für TCP/UDP-Traffic mit hoher Leistung.
    - **Classic Load Balancer (CLB)**: Älterer Typ, bietet grundlegende Load-Balancing-Funktionen.

### Zusammenfassung
- **Amazon EC2** bietet unterschiedliche Instanztypen für spezifische Anforderungen.
- **Container-Optionen**: **ECS** für einfache Container-Verwaltung und **EKS** für Kubernetes.
- **Serverless**: **Lambda** für ereignisgesteuerten Code und **Fargate** für containerbasierte Anwendungen ohne Serververwaltung.
- **Automatische Skalierung** sorgt für Elastizität.
- **Load Balancer** verteilen den Datenverkehr und verbessern Verfügbarkeit und Skalierbarkeit.

# 3.4
### AWS-Datenbank-Services

- **Verwaltete vs. EC2-gehostete Datenbanken**:
  - **Verwaltete Datenbanken**: Von AWS verwaltet, z.B. **Amazon RDS** oder **Amazon DynamoDB**, bieten einfache Verwaltung und Skalierung.
  - **EC2-gehostete Datenbanken**: Auf EC2-Instances selbst installiert und verwaltet, bieten vollständige Kontrolle, aber erfordern manuelle Verwaltung und Skalierung.

- **Relationale Datenbanken**:
  - **Amazon RDS (Relational Database Service)**: Unterstützt mehrere Datenbank-Engines wie MySQL, PostgreSQL, Oracle und SQL Server. 
  - **Amazon Aurora**: Höchstleistungsfähige, kompatible relationale Datenbank mit MySQL- und PostgreSQL-Kompatibilität, bietet hohe Verfügbarkeit und Skalierbarkeit.

- **NoSQL-Datenbanken**:
  - **Amazon DynamoDB**: Vollständig verwaltete NoSQL-Datenbank, geeignet für Anwendungen mit hoher Leistung und niedriger Latenz.

- **Speicherbasierte Datenbanken**:
  - **Amazon ElastiCache**: In-Memory-Datenbank-Dienst für Redis oder Memcached, verbessert die Leistung durch Caching.

- **Tools zur Datenbankmigration**:
  - **AWS Database Migration Service (AWS DMS)**: Migratet Datenbanken zu AWS mit minimaler Ausfallzeit.
  - **AWS Schema Conversion Tool (AWS SCT)**: Hilft beim Konvertieren von Datenbankschemas von einer Engine in eine andere.

### Zusammenfassung
- Verwaltete Datenbanken wie **Amazon RDS** und **Amazon Aurora** bieten einfache Verwaltung.
- **DynamoDB** ist ideal für NoSQL-Anwendungen.
- **ElastiCache** für speicherbasierte Anforderungen.
- **AWS DMS** und **AWS SCT** unterstützen bei der Datenbankmigration und Schema-Konvertierung.

# 3.5
### AWS-Netzwerkservices

- **VPC-Komponenten**:
  - **Subnetze**: Logische Segmente innerhalb einer VPC, in denen Ressourcen platziert werden.
  - **Internet-Gateway**: Ermöglicht die Kommunikation zwischen VPC und dem Internet.
  - **NAT-Gateway**: Erlaubt Instanzen in privaten Subnetzen den Zugang zum Internet, ohne dass sie direkt öffentlich erreichbar sind.
  - **Routen-Tabellen**: Definieren, wie der Datenverkehr innerhalb und außerhalb der VPC weitergeleitet wird.

- **Sicherheit in einer VPC**:
  - **Netzwerk-ACLs**: Netzwerksicherheitsrichtlinien, die den eingehenden und ausgehenden Verkehr auf Subnetz-Ebene regeln.
  - **Sicherheitsgruppen**: Virtuelle Firewalls für EC2-Instances, die den eingehenden und ausgehenden Verkehr auf Instanz-Ebene regeln.

- **Amazon Route 53**:
  - **Domain Name System (DNS) Service**: Bietet DNS-Dienste für die Auflösung von Domainnamen in IP-Adressen und unterstützt Routing von Benutzern zu AWS-Ressourcen.

- **Edge-Services**:
  - **Amazon CloudFront**: Content Delivery Network (CDN) zur schnellen Bereitstellung von Inhalten wie Web-Assets und Medien weltweit.
  - **AWS Global Accelerator**: Verbessert die Verfügbarkeit und Leistung von Anwendungen durch Routing über das globale Netzwerk von AWS.

- **Netzwerkkonnektivitätsoptionen**:
  - **AWS VPN**: Stellt sichere Verbindungen zwischen Ihrer On-Premises-Umgebung und Ihrer VPC her.
  - **AWS Direct Connect**: Bietet eine dedizierte Netzwerkverbindung von Ihrem Rechenzentrum zu AWS, die eine höhere Bandbreite und geringere Latenz ermöglicht.

### Zusammenfassung
- **VPC**: Verwaltung von Netzwerkinfrastruktur und Sicherheit durch Subnetze, Gateways, und Routen-Tabellen.
- **Sicherheitsgruppen und Netzwerk-ACLs**: Schutz auf Instanz- und Subnetz-Ebene.
- **Route 53**: DNS-Service zur Domainauflösung und Traffic-Routing.
- **Edge-Services**: Optimierung der Leistung und Verfügbarkeit durch **CloudFront** und **Global Accelerator**.
- **Konnektivität**: **VPN** und **Direct Connect** für sichere und leistungsfähige Netzwerkverbindungen.

# 3.6
### AWS-Speicherservices

- **Objektspeicher**:
  - **Amazon S3 (Simple Storage Service)**: Bietet skalierbaren Objektspeicher für beliebige Datenmengen. Ideal für Backup, Archivierung, und große Datenmengen.

- **Unterschiede zwischen Amazon S3-Speicherklassen**:
  - **S3 Standard**: Hohe Haltbarkeit und Verfügbarkeit für häufig genutzte Daten.
  - **S3 Intelligent-Tiering**: Automatische Verschiebung von Objekten zwischen Zugriffsebenen basierend auf Nutzungsmustern.
  - **S3 One Zone-IA (Infrequent Access)**: Niedrigere Kosten für selten benötigte Daten, die nicht in mehreren Verfügbarkeitszonen gespeichert sind.
  - **S3 Glacier**: Langfristige Archivierung mit niedrigen Kosten und langen Wiederherstellungszeiten.
  - **S3 Glacier Deep Archive**: Sehr kostengünstige Archivierung für selten benötigte Daten mit längeren Wiederherstellungszeiten.

- **Blockspeicherlösungen**:
  - **Amazon EBS (Elastic Block Store)**: Blockbasierter Speicher für EC2-Instances, ideal für Datenbanken und Anwendungen mit hohen IOPS-Anforderungen.
  - **Instance-Speicher**: Temporärer Speicher, der direkt an die EC2-Instanz angeschlossen ist und bei Instanz-Stopp oder -Beendigung verloren geht.

- **Dateiservices**:
  - **Amazon EFS (Elastic File System)**: Dateispeicher, der einfach mit EC2-Instances skaliert und gleichzeitig in mehreren Verfügbarkeitszonen verfügbar ist.
  - **Amazon FSx**: Bietet verwaltete Windows-Dateisysteme (FSx for Windows File Server) oder Lustre-Dateisysteme (FSx for Lustre) für spezialisierte Anwendungsfälle.

- **Zwischengespeicherte Dateisysteme**:
  - **AWS Storage Gateway**: Hybrid-Speicherservice, der lokale Anwendungen nahtlos mit Cloud-Speicher verbindet. Bietet Dateigateway, Volumengateway und Bandgateway.

- **Lebenszyklusrichtlinien**:
  - **S3 Lebenszyklusrichtlinien**: Automatisieren die Verwaltung von Objekten, einschließlich der Verschiebung zwischen Speicherklassen und dem Löschen von Objekten basierend auf deren Alter oder Nutzung.

- **AWS Backup**:
  - **AWS Backup**: Zentrale Lösung für die Sicherung von Daten in AWS und On-Premises. Automatisiert die Sicherung von EBS-Volumes, RDS-Datenbanken, DynamoDB-Tabellen, und mehr.

### Zusammenfassung
- **Objektspeicher**: **Amazon S3** für skalierbaren und langlebigen Speicher.
- **Blockspeicher**: **Amazon EBS** für persistente Speicherung und **Instance-Speicher** für temporären Speicher.
- **Dateiservices**: **Amazon EFS** und **Amazon FSx** für Dateisysteme.
- **Zwischengespeicherte Systeme**: **AWS Storage Gateway** für hybride Speicherlösungen.
- **Lebenszyklusrichtlinien und Backup**: **S3 Lebenszyklusrichtlinien** zur Automatisierung der Speicherung und **AWS Backup** für umfassende Datensicherung.

# 3.7
### AWS-Services für Künstliche Intelligenz (KI) und Maschinelles Lernen (ML)
- **Amazon SageMaker**: Plattform zum Erstellen, Trainieren und Bereitstellen von ML-Modellen. Unterstützt alle Phasen des ML-Lebenszyklus.
- **Amazon Lex**: Erstellen von Chatbots und Sprachassistenten. Nutzt dieselbe Sprachtechnologie wie Alexa.
- **Amazon Kendra**: Intelligente Unternehmenssuchlösung, die mit KI dokumentenbasierte Suchanfragen besser verstehen kann.
- **Amazon Rekognition**: Bild- und Videoanalyse für das Erkennen von Objekten, Gesichtern und Szenen.
- **Amazon Comprehend**: Verarbeitung natürlicher Sprache zur Analyse von Text und Extraktion von Informationen.
- **Amazon Polly**: Text-to-Speech-Service, der Text in natürliche Sprache umwandelt.
- **Amazon Transcribe**: Automatische Transkription von Sprache in Text.
- **Amazon Translate**: Übersetzung von Texten in verschiedene Sprachen.
- **Amazon Textract**: Extrahiert Text und Daten aus gescannten Dokumenten und Formularen.
- **Amazon Forecast**: Zeitreihenanalyse zur Vorhersage von zukünftigen Werten basierend auf historischen Daten.

### AWS-Analytik-Services
- **Amazon Athena**: Interaktive SQL-Abfragen auf Daten in Amazon S3 ohne Datenvorbereitung.
- **Amazon EMR (Elastic MapReduce)**: Big Data-Verarbeitung und Analyse mit Hadoop, Spark und anderen Frameworks.
- **AWS Glue**: Vollständig verwalteter ETL-Service (Extract, Transform, Load) zum Vorbereiten und Laden von Daten.
- **Amazon Redshift**: Data Warehouse-Service für schnelle Abfragen und Analysen großer Datenmengen.
- **Amazon Kinesis**: Echtzeit-Streaming-Datenverarbeitung zur Analyse von Datenströmen in Echtzeit.
- **Amazon OpenSearch Service**: Voll verwalteter Dienst für die Suche und Analyse von Daten, basiert auf OpenSearch (ehemals Elasticsearch).
- **Amazon QuickSight**: Business-Intelligence-Tool zur Erstellung von Dashboards und Visualisierungen für Datenanalysen.

### Zusammenfassung
- **KI/ML-Services**: Umfassen Dienste wie **Amazon SageMaker** für ML-Modelle, **Amazon Lex** für Chatbots, **Amazon Rekognition** für Bildanalyse, und viele weitere spezialisierte Tools für unterschiedliche KI- und ML-Anwendungen.
- **Analytik-Services**: Bieten Lösungen für Datenabfrage, Verarbeitung, ETL, Data Warehousing und Echtzeitanalyse. Wichtige Dienste sind **Amazon Athena**, **Amazon EMR**, **AWS Glue**, **Amazon Redshift**, **Amazon Kinesis**, und **Amazon QuickSight**.

# 3.8
Hier ist eine Übersicht der verschiedenen AWS-Services aus den genannten Kategorien:

### 1. Anwendungsintegrations-Services
- **Amazon EventBridge**: Verwalten von ereignisgesteuerten Architekturen und Integration von Anwendungen durch Ereignisse.
- **Amazon Simple Notification Service (SNS)**: Versenden von Benachrichtigungen und Nachrichten an mehrere Abonnenten.
- **Amazon Simple Queue Service (SQS)**: Verwalten von Nachrichtenwarteschlangen zur Entkopplung von Komponenten und zur asynchronen Verarbeitung.

### 2. Services für Geschäftsanwendungen
- **Amazon Connect**: Cloud-basierter Contact-Center-Service zur Kundenbetreuung und -interaktion.
- **Amazon Simple Email Service (SES)**: Dienst zum Versenden und Empfangen von E-Mails.

### 3. Services zur Kundenbindung
- **AWS Activate für Startups**: Unterstützung und Ressourcen für Startups zur Nutzung von AWS.
- **AWS IQ**: Beratung und Unterstützung durch zertifizierte AWS-Experten.
- **AWS Managed Services (AMS)**: Vollständig verwaltete IT-Services zur Verwaltung von AWS-Umgebungen.
- **AWS Support**: Verschiedene Support-Pläne (Basic, Developer, Business, Enterprise) für technischen und operativen Support.

### 4. Entwickler-Tools-Services und -Funktionen
- **AWS AppConfig**: Verwaltung und Bereitstellung von Anwendungs-Konfigurationsdaten.
- **AWS Cloud9**: Cloud-basierte integrierte Entwicklungsumgebung (IDE) für das Schreiben von Code.
- **AWS CloudShell**: Browser-basierte Shell für die Interaktion mit AWS-Diensten.
- **AWS CodeArtifact**: Verwaltetes Repository für Code-Bibliotheken und Abhängigkeiten.
- **AWS CodeBuild**: Vollständig verwalteter Build-Service für das Erstellen von Quellcode.
- **AWS CodeCommit**: Git-kompatibler Quellcode-Repository-Service.
- **AWS CodeDeploy**: Automatisierung der Bereitstellung von Anwendungen auf verschiedenen Instanzen.
- **AWS CodePipeline**: Continuous Integration und Continuous Delivery (CI/CD) Service für die Softwarebereitstellung.
- **AWS CodeStar**: Entwicklungsplattform für das Erstellen, Verwalten und Bereitstellen von Anwendungen.
- **AWS X-Ray**: Service zur Fehlerbehebung und Leistungsüberwachung von verteilten Anwendungen.

### 5. Services für Endbenutzer-Computing
- **Amazon AppStream 2.0**: Dienst zum Streamen von Desktop-Anwendungen auf Endgeräte.
- **Amazon WorkSpaces**: Cloud-basierte virtuelle Desktops für Endbenutzer.
- **Amazon WorkSpaces Web**: Zugriff auf virtuelle Desktops über einen Webbrowser.

### 6. Frontend-Webservices und Services für Mobilgeräte
- **AWS Amplify**: Entwicklungsplattform für das Erstellen und Verwalten von Web- und Mobilanwendungen.
- **AWS AppSync**: GraphQL-Datenservice für Echtzeit-Datenabfragen und -Synchronisation.

### 7. IoT-Services
- **AWS IoT Core**: Plattform für die Verbindung und Verwaltung von IoT-Geräten.
- **AWS IoT Greengrass**: Erweiterung von IoT Core zur lokalen Verarbeitung von Daten auf Geräten.

### Zusammenfassung
- **Anwendungsintegration**: Wählen Sie zwischen EventBridge für Ereignisse, SNS für Benachrichtigungen und SQS für Warteschlangen.
- **Geschäftsanwendungen**: Nutzen Sie Amazon Connect für Contact Center und SES für E-Mails.
- **Kundenbindung**: AWS Activate für Startups, IQ für Expertenhilfe, AMS für Managed Services und Support für technische Unterstützung.
- **Entwickler-Tools**: Verwenden Sie Cloud9, CodeBuild, CodePipeline und weitere Tools zur Entwicklung und Bereitstellung von Anwendungen.
- **Endbenutzer-Computing**: AppStream 2.0 und WorkSpaces bieten virtuelle Desktops und Anwendungsstreaming.
- **Frontend-Web/Mobil**: Amplify für die Anwendungsentwicklung und AppSync für Datenabfragen.
- **IoT**: IoT Core für Gerätemanagement und Greengrass für lokale Datenverarbeitung.

# 4.1
### Vergleich der AWS-Preismodelle

#### 1. **Computing-Kaufoptionen**

- **On-Demand Instances**:
  - **Flexibilität**: Keine langfristigen Verpflichtungen; zahlt nach Nutzung.
  - **Kosten**: Höhere Kosten pro Stunde, ideal für unvorhersehbare Workloads.

- **Reserved Instances (RIs)**:
  - **Flexibilität**: Langfristige Verpflichtung (1-3 Jahre); Rabatte bis zu 75% im Vergleich zu On-Demand.
  - **Verhalten in AWS-Organisationen**: RIs können für mehrere Konten in einer AWS-Organisation freigegeben werden.

- **Spot Instances**:
  - **Flexibilität**: Nutzt ungenutzte Kapazitäten; erhebliche Kosteneinsparungen.
  - **Kosten**: Günstigste Option, aber instabil, da AWS Spot-Preise schwanken und Instanzen jederzeit gekündigt werden können.

- **Savings Plans**:
  - **Flexibilität**: Bietet Rabatte für eine bestimmte Nutzung (Compute oder EC2) ohne die Notwendigkeit zur Zuweisung an spezifische Instanztypen oder -größen.
  - **Kosten**: Rabatte ähnlich wie bei RIs, aber flexibler bei der Nutzung.

- **Dedizierte Hosts**:
  - **Flexibilität**: Feste physische Server, die für die exklusive Nutzung durch einen Kunden bereitgestellt werden.
  - **Kosten**: Hohe Kosten, aber nützlich für Lizenzierungsvorschriften oder spezielle Compliance-Anforderungen.

- **Dedicated Instances**:
  - **Flexibilität**: Auf dedizierter Hardware laufen, ohne vollständige Kontrolle wie bei dedizierten Hosts.
  - **Kosten**: Etwas teurer als On-Demand-Instanzen, aber keine langfristige Verpflichtung.

- **Kapazitätsreservierungen**:
  - **Flexibilität**: Reserviert EC2-Kapazität in einer spezifischen Region und Verfügbarkeitszone für einen festen Zeitraum.
  - **Kosten**: Zusätzliche Kosten neben den normalen On-Demand-Preisen.

#### 2. **Datenübertragungskosten**

- **Eingehende Datenübertragung**: In der Regel kostenlos, außer für Datenübertragungen aus bestimmten Quellen (z.B. von AWS Snowball).
- **Ausgehende Datenübertragung**:
  - **Innerhalb derselben Region**: Kostenlos oder geringe Kosten.
  - **Zwischen Regionen**: Kostenpflichtig, variierend nach Region und Datenmenge.
  - **Zu/from dem Internet**: Abhängig von der Menge und dem Zielort der Daten, typischerweise kostenpflichtig.

#### 3. **Speicheroptionen und Stufen**

- **Amazon S3 (Objektspeicher)**:
  - **S3 Standard**: Häufig verwendete Daten mit hoher Verfügbarkeit und Haltbarkeit; höhere Kosten.
  - **S3 Intelligent-Tiering**: Automatischer Wechsel zwischen Zugriffshäufigkeitsebenen; Kosten variieren je nach Zugriffsmuster.
  - **S3 Standard-IA (Infrequent Access)**: Selten verwendete Daten; günstiger als Standard, aber mit Zugriffsgebühren.
  - **S3 Glacier & Glacier Deep Archive**: Archivierungslösungen mit sehr niedrigen Kosten für langfristige Speicherung; Abfrage- und Wiederherstellungsgebühren.

- **Amazon EBS (Blockspeicher)**:
  - **EBS General Purpose SSD (gp3)**: Balance aus Preis und Leistung; typischerweise verwendet für viele Anwendungen.
  - **EBS Provisioned IOPS SSD (io2)**: Hohe Leistung für geschäftskritische Anwendungen; höhere Kosten.
  - **EBS Magnetic**: Älterer Typ, kostengünstig für nicht häufig verwendete Daten.

- **Amazon EFS (Dateisystem)**:
  - **EFS Standard**: Für allgemeine Zwecke und niedrige Latenz; Preise basierend auf genutztem Speicher und Datenübertragung.
  - **EFS One Zone**: Günstiger als Standard, aber nur in einer AZ verfügbar.

- **Amazon FSx**:
  - **FSx for Windows File Server**: Vollständig verwaltete Windows-Dateisysteme; hohe Verfügbarkeit, aber höherer Preis.
  - **FSx for Lustre**: Hochleistungs-Dateisystem für rechenintensive Workloads; Preise variieren je nach Performance-Optionen.

#### Zusammenfassung

- **Computing-Kaufoptionen**: Wählen Sie je nach Workload-Bedarf und Budget zwischen On-Demand, Reserved, Spot, Savings Plans oder dedizierten Optionen.
- **Datenübertragungskosten**: Achten Sie auf eingehende und ausgehende Datenübertragungskosten, insbesondere bei Inter-Region und Internet-Datenübertragungen.
- **Speicheroptionen**: Wählen Sie die passende Speicherklasse basierend auf Zugriffshäufigkeit und Kostenanforderungen.

# 4.2
### Ressourcen für Fakturierung, Budget und Kostenmanagement verstehen

#### 1. **AWS-Budgets, AWS Cost Explorer und AWS Billing Conductor**

- **AWS Budgets**:
  - **Verwendung**: Erstellen von Budget-Überwachungen für Kosten und Nutzung. Setzen von Warnungen bei Überschreitungen.
  - **Funktion**: Verfolgt Ausgaben und Nutzung, erstellt Berichte und Benachrichtigungen, wenn Budgetgrenzen überschritten werden.

- **AWS Cost Explorer**:
  - **Verwendung**: Analysieren und Visualisieren von Ausgaben und Nutzung. Ermöglicht detaillierte Einblicke und Berichte.
  - **Funktion**: Bietet Zeitreihenanalysen, Prognosen und Filteroptionen, um Kostenmuster zu verstehen und zu optimieren.

- **AWS Billing Conductor**:
  - **Verwendung**: Erlaubt maßgeschneiderte Abrechnung und Kostenverteilung basierend auf benutzerdefinierten Preismodellen.
  - **Funktion**: Flexibilität bei der Erstellung von Abrechnungsregeln und -strukturen für komplexe Preismodellanforderungen.

#### 2. **AWS Pricing Calculator**

- **Verwendung**: Schätzt die Kosten von AWS-Ressourcen basierend auf Konfigurationen und Nutzungsszenarien.
- **Funktion**: Bietet detaillierte Kostenanalysen für eine Vielzahl von AWS-Services und -Konfigurationen. Nützlich für die Planung und Budgetierung.

#### 3. **AWS Organizations**

- **Verwendung**: Konsolidierte Fakturierung und Verwaltung mehrerer AWS-Konten. Ermöglicht die Aggregation von Kosten und Nutzung über ein zentrales Konto.
- **Funktion**: Bietet konsolidierte Rechnungsstellung, ermöglicht die Verteilung von Kosten und die Verwaltung von Berechtigungen und Richtlinien.

#### 4. **Tags für die AWS-Kostenzuweisung**

- **Verwendung**: Kennzeichnen von Ressourcen mit benutzerdefinierten Tags zur Kostenverfolgung und -zuweisung.
- **Funktion**: Tags können verwendet werden, um Kosten nach Projekten, Abteilungen oder Teams zuzuordnen. Tags erscheinen in Kosten- und Nutzungsberichten, um die Ausgaben besser nachzuvollziehen.

#### 5. **AWS-Kosten- und Nutzungsbericht**

- **Verwendung**: Detaillierter Bericht, der Informationen über AWS-Kosten und -Nutzung bereitstellt.
- **Funktion**: Ermöglicht die Analyse der Ausgaben und Nutzung auf granularer Ebene. Unterstützt die Kostenzuweisung und -verfolgung durch die Verwendung von Tags und Budgetvorgaben.

### Zusammenfassung

- **AWS Budgets** für Budgetierung und Warnungen.
- **AWS Cost Explorer** für detaillierte Kostenanalyse.
- **AWS Billing Conductor** für maßgeschneiderte Abrechnungslösungen.
- **AWS Pricing Calculator** für Kostenprognosen.
- **AWS Organizations** für konsolidierte Fakturierung und Verwaltung.
- **Tags** zur detaillierten Kostenzuweisung und -verfolgung.
- **AWS-Kosten- und Nutzungsbericht** für umfassende Kostenanalysen.

# 4.3
### Technische Ressourcen und Supportoptionen von AWS identifizieren

#### 1. **Ressourcen und Dokumentation**

- **AWS Whitepapers**: Detaillierte technische Dokumente zu Best Practices, Architekturen und Sicherheitsrichtlinien. Verfügbar auf der AWS Whitepapers-Seite.
- **AWS Blogs**: Neueste Updates, Fallstudien und technische Anleitungen. Verfügbar auf dem AWS Blog.
- **AWS Dokumentation**: Offizielle Anleitungen und Referenzen für AWS-Dienste. Verfügbar auf der AWS Dokumentationsseite.

#### 2. **Technische AWS-Ressourcen**

- **AWS Prescriptive Guidance**: Anleitungen und Best Practices für spezifische Lösungen. Verfügbar auf AWS Prescriptive Guidance.
- **AWS Knowledge Center**: Sammlung von häufig gestellten Fragen und Lösungshinweisen. Verfügbar auf AWS Knowledge Center.
- **AWS re:Post**: Community-Forum für Fragen und Antworten. Verfügbar auf AWS re:Post.

#### 3. **AWS-Support-Stufen**

- **Kundenservice und Communitys**: Basis-Support durch AWS Community-Foren und Dokumentation.
- **AWS Developer Support**: Unterstützung für Entwicklungsprojekte, Zugriff auf technische Ressourcen und Foren.
- **AWS Business Support**: 24/7-Technischer Support, Zugang zu AWS Trusted Advisor und Infrastruktur-Event-Management.
- **AWS Enterprise On-Ramp Support**: Erweiterter Support für größere Unternehmen mit dedizierten Account-Managern.
- **AWS Enterprise Support**: Umfassender Support, inklusive technischer Account-Manager und maßgeschneiderter Beratung.

#### 4. **Wichtige Support-Ressourcen**

- **AWS Trusted Advisor**: Optimierung von AWS-Ressourcen, Sicherheit und Kostenmanagement. Verfügbar für Business- und Enterprise-Kunden.
- **AWS Health Dashboard**: Echtzeit-Überwachung von AWS-Service-Zuständen und Vorfällen. Verfügbar im AWS Management Console.
- **AWS Health-API**: Zugriff auf Gesundheitsereignisse und -warnungen für proaktive Verwaltung.

#### 5. **AWS Trust and Safety-Teams**

- **Rolle**: Meldung von Missbrauch und Sicherheitsbedenken. Kontakt über AWS Trust and Safety.

#### 6. **AWS-Partnernetzwerk**

- **AWS Marketplace**: Plattform für Softwarelösungen und Dienstleistungen von Drittanbietern. Verfügbar auf AWS Marketplace.
- **Unabhängige Softwareanbieter und Systemintegratoren**: Unterstützung durch Partner für maßgeschneiderte Lösungen und Integrationen.

#### 7. **Vorteile einer AWS-Partnerschaft**

- **Partnertraining und -zertifizierung**: Schulungen und Zertifikate für Partnerunternehmen.
- **Partnerevents**: Zugang zu exklusiven AWS-Veranstaltungen und Webinaren.
- **Mengenrabatte**: Preisnachlässe für Partnerunternehmen auf AWS-Dienste.

#### 8. **AWS Professional Services und Solutions Architects**

- **AWS Professional Services**: Beratung und Unterstützung durch AWS-Experten für komplexe Projekte.
- **AWS Solutions Architects**: Hilfe bei der Planung und Architektur von AWS-Lösungen. 

### Zusammenfassung

- **AWS Ressourcen**: Whitepapers, Blogs, Dokumentationen, Prescriptive Guidance, Knowledge Center, re:Post.
- **Support-Stufen**: Kundenservice, Developer Support, Business Support, Enterprise On-Ramp, Enterprise Support.
- **Support-Ressourcen**: Trusted Advisor, Health Dashboard, Health-API.
- **Trust and Safety**: Missbrauch melden.
- **Partnernetzwerk**: Marketplace, ISVs, Systemintegratoren.
- **Partnerschaftsvorteile**: Training, Events, Rabatte.
- **Technische Unterstützung**: Professional Services, Solutions Architects.
