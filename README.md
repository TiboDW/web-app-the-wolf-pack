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
- Als klant kan ik mijn klantgegevens wijzigen/bekijken
- Als klant kan ik uitloggen van mijn account
- Als klant kan ik online tickets aankopen
- Als klant kan ik me uitschrijven van de website

## Beheerder

- Als beheerder kan ik inloggen op mijn account
- Als beheerder kan ik films toevoegen
- Als beheerder kan ik het programma aanmaken voor de films
- Als beheerder kan ik uitloggen van mijn account
- Als beheerder kan ik me uitschrijven van de website
- Als beheerder kan ik andere beheerders toevoegen

## Bezoeker

- Als bezoeker kan ik een overzicht zien van actuele en/of toekomstige films
- Als bezoeker kan ik een beschrijving lezen van een film
- Als bezoeker kan ik een programma zien van wanneer een film zal worden afgespeeld

# Threat model
*Describe your threat model. One or more architectural diagram expected. Also a list of the principal threats and what you will do about them*

![ThreatModelDFD (1)](https://user-images.githubusercontent.com/64362709/144930883-5520d2a4-32f1-45cd-94a1-8c97b94706b9.jpg)


## OWASP:
| Web Application Security Risks  | Beschrijving van de bedreigingen | Oplossing |
| ------------- | ------------- | ------------- |
| Broken Access Control  | Een limiet stellen aan welke webpagina's bezoekers kunnen bereiken, afhankelijk van hun behoeften.  | De webpagina's correct gaan toekennen aan de klanten en beheerders door middel van authenticatie en autorisatie  |
| Cryptographic Failures  | Blootstelling aan gevoelige gegevens  | Gevoelige gegevens encrypteren, onnodige data niet opslaan en gebruikmaken van HTTPS  |
| Injection  | Een aanvaller die gegevens naar de webtoepassing zendt met bedoeling deze iets te laten doen waarvoor de toepassing niet is ontworpen | Gegevens gescheiden houden van command's en query's. |
| Insecure Design  | Onveilig architectuur ontwerp uitgewerkt  | Use cases en threat model beter uitschrijven, de correcte design patterns gebruiken  |
| Security Misconfiguration  | Slechte configuratie van de webtoepassing  | Onnodige componenten (frameworks, poorten, functionaliteiten) weglaten  |
| Vulnerable and Outdated Components  | Outdated en unsupported componenten gebruiken  | Onnodige dependencies verwijderen en SCA tools gebruiken |
| Identification and Authentication Failures  | Ineffectief identificeren en authoriseren  | Vermijden van zwakke credentials te gebruiken, 2FA, web api beveiligen door middel JWT authentication  |
| Software and Data Integrity Failures  | Gebruiken van niet gevalideerde libararies/plugins   | Gebruikmaken van libraries/plugins die erkend zijn op bepaalde websites (NPM)  |
| Security Logging and Monitoring Failures  | Onvoldoende logging, detectie en monitoring  | De belangrijke activiteiten lokaal bijhouden in logs |
| Server-Side Request Forgery  | Niet valideren van externe bronnen  | HTTP omleiding uitschakelen, dwing "deny by default" policies en alles behalve essentieel verkeer blokkeren |

## STRIDE:
| Threat  | Beschrijving van de bedreigingen | Oplossing |
| ------------- | ------------- | ------------- |
| Spoofing  | Een persoon of een programma die zich voor doet als iemand anders | Authentication |
| Tampering  | Data aangepast is zonder dat men dit weet (geen data integrity) | Encryptie van data in transit |
| Repudiation  | Zeggen dat je een bepaalde actie niet hebt uitgevoerd | Wanneer een betaling wordt uitgevoerd een email voorzien van de aankoop of een PDF met daarin de aankoop factuur van de tickets |
| Information disclosure  | Blootleggen van informatie aan iemand die niet geauthoriseerd is | Rollen toekennen (Klant, Beheerder en Bezoeker) |
| Denial of service  | Is een situatie waarin het systeem onbedoeld niet beschikbaar is om een taak uit te voeren van een gebruiker | Google Firebase Hosting |
| Elevation of privilege  | Bepaalde zaken kunnen doen zonder authorisatie | Rollen toekennen (Klant, Beheerder en Bezoeker) |

## Andere threads:
- **Insiders:** Probleem: Een huidige werknemer of voormalige werknemer die toegang heeft tot gevoelige data en dit misbruikt. Oplossing: Alle acties die de admins doen gaan loggen. Als een admin stopt met werken in de cinema ervoor zorgen dat zijn account kan worden verwijderd door het hoofdadmin.
- **Bot attack:** Probleem: Gebruik maken van web request voor het manipuleren van de website, API en gebruikers te manipuleren, te bedriegen of verstoren. Oplossing: CAPTCHA voorzien als men gaat inloggen, monitoren op mislukte inlog pogingen
- **Cyber criminals:** Probleem: Stelen van gevoelige data. Oplossing: SSL certificaat voorzien, login pogingen voorzien en sterke wachtwoorden gebruiken.

# Deployment
*Minimally, this section contains a public URL of the app. A description of how your software is deployed is a bonus. Do you do this manually, or did you manage to automate? Have you taken into account the security of your deployment process?*

Onze oplossing bevat 2 applicaties. Enerzijds een React applicatie en anderzijds een Express.js REST API. De applicaties zijn terug te vinden op: 
- De React app is gedeployed via firebase hosting: https://thewolfpackreact.web.app
- De REST API is gedeployed via Nginx: https://www.the-wolf-pack.be/movies

> Demo 1: Het deployment is niet geautomatiseerd voor beide apps. Dit willen we graag automatiseren tegen demo 2. 


# *You may want further sections*
*Especially if the use of your application is not self-evident*
