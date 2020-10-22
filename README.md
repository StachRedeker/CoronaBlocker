# CoronaBlocker (:uk:)
>CoronaBlocker replaces covid related words with friendlier alternatives.

#### Read the Dutch (:netherlands:) version of this document [here](/README-nl_NL). 

Corona, corona and more corona: it is almost impossible to visit a (news) website without reading about it. CoronaBlocker replaces words like 'corona', 'covid' and 'Sars-CoV' with friendlier alternatives. CoronaBlocker also tells you exacly how many covid related words were found on the webpage.

### Installation 
CoronaBlocker can be installed as Chrome extension or Firefox add-on. I am currently working on getting the program in both app stores.

For now, download the folder `en_EN` from the latest version.

**Chrome:** <br>
Go to [`extensions`](chrome://extensions/) and activate `Developer mode`. Then press `Load unpacked` and navigate to the download location on your computer. Press `select` and you are good to go!

**Firefox:** <br>
Go to [`addons`](about:addons) and navigate to the settings icon. Click `debugging add-ons` and then `load temporary add-on`. Upload a zip-file with the contents of the previously downloaded folder (`en_EN`).

### What does CoronaBlocker do?

The extension searches for `corona`, `covid` and `SARS-CoV` on every webpage you visit. When found, CoronaBlocker changes those words to `dog`. The small red batch on top of the extension icon shows how many words have been replaced on that page.


### Future improvements

- [x] Add synonyms for 'corona' to the code
- [ ] Add an easy option to turn the CoronaBlocker on and off
- [ ] Find a way to turn off the replacement of words, but to keep the counter visible and working
- [ ] Find a way to 
- [ ] Let users pick there own remplacement words

### Special thanks
Special thanks to [Noah Verkaik](https://github.com/Nowaha) for teaching me how to add 'corona' synonyms to the code and [Mohsin Ali](https://github.com/mohsinaliryk) for helping me with my batch-counter-problems on [StackOverflow](https://stackoverflow.com/questions/64459576/incremental-counter-chrome-extension-batch-javascript).
