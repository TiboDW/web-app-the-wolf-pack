# Goal
*Describe how this web app will (eventually) earn money or make the world a better place*

De bedoeling is om de website van onze lokale bioscoop te verbeteren. De Focus bioscoop heeft momenteel twee websites. De eerste website geeft een overzicht van de actuele films, de tweede website wordt gebruikt als webshop waar de klanten hun tickets kunnen aankopen.

- http://www.cinemafocus.be/
- https://tickets.cinemafocus.be/nl/movies


Onze dynamische website zal ervoor zorgen dat de bioscoop over één website beschikt waar een duidelijk en modern overzicht van de actuele en aankomende films getoond zal worden. Verder zullen de aankopen op diezelfde website gebeuren.

# Acceptance criteria
*How do we know that the goals have been reached?*

## Klant

- Als klant kan ik een account aanmaken
- Als klant kan ik mij inloggen op mijn account
- Als klant kan ik een overzicht zien van actuele en/of toekomstige films
- Als klant kan ik een beschrijving lezen van een film
- Als klant kan ik een programma zien van wanneer een film zal worden afgespeeld
- Als klant kan ik mijn klantgegevens wijzigen
- Als klant kan ik uitloggen van mijn account

## Beheerder

- Als beheerder kan ik inloggen op mijn account
- Als beheerder kan ik films toevoegen
- Als beheerder kan ik het programma aanmaken voor de films
- Als beheerder kan ik uitloggen van mijn account

# Threat model
*Describe your threat model. One or more architectural diagram expected. Also a list of the principal threats and what you will do about them*

![ThreatModelDFD](https://user-images.githubusercontent.com/64362709/137628823-c1efba2d-7673-412f-b86f-14342d3aaadc.jpg)

 
| Web Application Security Risks  | Beschrijving van de bedreigingen | Oplossing |
| ------------- | ------------- | ------------- |
| Broken Access Control  | Een limiet gaan stellen aan welke webpagina's bezoekers kunnen bereiken, afhankelijk van hun behoeften.  | Alle webpagina's juist gaan toekennen aan de klanten en beheerders door middel van authenticatie en autorisatie  |
| Cryptographic Failures  | Blootstelling aan gevoelige gegevens  | Gevoelige gegevens gaan encrypteren, onnodige data niet gaan opslaan en gebruikmaken van HTTPS  |
| Injection  | Een aanvaller die gegevens naar de webtoepassing zendt met bedoeling deze iets te laten doen waarvoor de toepassing niet is ontworpen | Gegevens gescheiden houden van command's en query's. |
| Insecure Design  | Onveilig architectuur ontwerp uitgewerkt  | Use cases gaan uitschrijven, threat model beter gaan uitschrijven en de juist design patterns gebruiken  |
| Security Misconfiguration  | Slechte configuratie van uw webtoepassing  | Onnodige componenten (frameworks, poorten, functionaliteiten) weglaten  |
| Vulnerable and Outdated Components  | Outdated/Unsupported componenten gebruiken  | Onnodige dependencies verwijderen en SCA tool gebruiken (zorgt voor detectie en tracking van al de componenten in uw codebase zoals GitHub) |
| Identification and Authentication Failures  | Ineffectief identificeren en authoriseren  | Vermijden van zwakke credentials te gaan gebruiken, 2FA  |
| Software and Data Integrity Failures  | Gebruiken van niet gevalideerde libararies/plugins   | Gebruik maken van libraries/plugins die erkend zijn op bepaalde websites (NPM)  |
| Security Logging and Monitoring Failures  | Onvoldoende logging, detectie en monitoring  | De belangrijke activiteiten lokaal gaan bijhouden in logs |
| Server-Side Request Forgery  | Niet valideren van externe bronnen  | HTTP omleiding uitschakelen, dwing "deny by default" policies en blokkeer alles behalve essentieel verkeer  |


# Deployment
*Minimally, this section contains a public URL of the app. A description of how your software is deployed is a bonus. Do you do this manually, or did you manage to automate? Have you taken into account the security of your deployment process?*


# *You may want further sections*
*Especially if the use of your application is not self-evident*
