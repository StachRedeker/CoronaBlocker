var elements = document.getElementsByTagName('*');
var counter = 0;

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/corona/gi, 'honden');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
              counter += 1;
            }
        }
    }
}
chrome.runtime.sendMessage({counter: counter});
