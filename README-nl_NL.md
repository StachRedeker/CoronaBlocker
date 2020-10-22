# CoronaBlocker (:netherlands:)
>CoronaBlocker vervangt viruswoorden voor vriendelijkere alternatieven.

#### Lees de Engelse (:uk:) versie van dit document [hier](/README.md). 

Corona, corona en nog eens corona: open een (nieuws)website en je leest bijna niets anders meer. CoronaBlocker vervangt woorden zoals 'corona', 'covid' en 'SARS-CoV' voor vriendelijkere alternatieven én waarschuwt je van te voren hoeveel coronagerelateerde woorden je kunt verwachten.

### Installatie
CoronaBlocker kan geïnstalleerd worden als Chrome extensie of als Firefox add-on. Ik ben momenteel bezig met het publiceren van het programma in beide appstores.

Je kunt de extensie nu al handmatig installeren. Download de map `nl_NL` van de laatste versie.

**Chrome:** <br>
Ga naar [`extensies`](chrome://extensions/) en activeer `Ontwikkelaarsmodus`. Druk dan op `Uitgepakte extensie laden` en navigeer naar de downloadlocatie op je computer. Druk op `selecteren` en je hebt de extensie succesvol geïnstalleerd!

**Firefox:** <br>
Ga naar [`add-ons`](about:addons) en klik op het instellingenpictogram. Selecteer `Add-ons debuggen` en klik daarna op `Tijdelijke add-on laden...`. Upload een zip-bestand met als inhoud de zojuist gedownloade map (`nl_NL`).

### Wat doet de CoronaBlocker eigenlijk?
De extensie zoekt naar `corona`, `covid` en `SARS-CoV` op iedere webpagina die je bezoekt. Wanneer CoronaBlocker deze woorden vindt, vervangt het programma ze door `honden` (want iedereen houdt van honden). De kleine rode batch bij het icoontje van de extensie laat zien hoeveel woorden er op de desbetreffende pagina zijn vervangen.


### Wensenlijstje voor verbeteringen
Houd er rekening mee dat CoronaBlocker geen professioneel bedrijf is, of een app die ik jaren zal gaan ontwikkelen. Het is bedoeld als een grap. Ik heb te weinig tijd en kennis om al mijn ideeën te implementeren. Bovendien weet ik niet eens hoe ik de meeste van de hieronder beschreven problemen moet oplossen. Maarrr... als jij wel weet hoe je deze verbeteringen kunt aanbrengen (of andere suggesties hebt) en als je je geïnspireerd voelt door mijn project, aarzel dan niet om contact met mij op te nemen of een pull request te maken.

- [x] Voeg synoniemen voor 'corona' toe
- [ ] Voeg een gemakkelijke manier CoronaBlocker aan en uit te zetten toe
- [ ] Vind een manier om de vervanging van woorden uit te zetten, maar de counter wel (werkend) te tonen
- [ ] Een oplossing voor het feit dat de teller in de rode batch niet meer klopt, als je een website op een ander tabblad bezoekt en daarna weer terugkeert naar het eerste tabblad
- [ ] De mogelijkheid dat gebruikers hun eigen vervangingswoorden kunnen instellen

### Dankwoord
Mijn dank gaat in het bijzonder naar [Noah Verkaik](https://github.com/Nowaha), omdat hij me heeft geleerd hoe ik meerdere synoniemen voor 'corona' kon toevoegen en [Mohsin Ali](https://github.com/mohsinaliryk), omdat hij mij op [StackOverflow](https://stackoverflow.com/questions/64459576/incremental-counter-chrome-extension-batch-javascript) heeft geholpen met mijn batch-teller-problemen.
