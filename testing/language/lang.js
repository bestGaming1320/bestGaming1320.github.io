var langs = {
    "langindex": {
        "en": {
            "metaTitle": "Language Script Testing",
            "metaDesc": "This is a page to test the language script",
            "title": "Language Script Testing",
            "p0": "Text of p0",
            "e1": "Text of e1",
            "b1": "Content of b1"
        },
        "de": {
            "metaTitle": "Sprachskript Test",
            "metaDesc": "Dies ist eine Seite um den Sprachskript zu testen",
            "title": "Sprachskript Test",
            "p0": "Text von p0",
            "e1": "Text von e1",
            "b1": "Inhalt von b1"
        }
    },
    "pageName": {
        "en": {},
        "de": {}
    }
}
function hasV(el) {
    if (elm(el).value == undefined) return false
    else return true
}
if (localStorage.getItem("lang") == null) localStorage.setItem("lang", "en")
var cl = localStorage.getItem("lang")

function elm(n) { return document.getElementById(n) }
function setL(inp, pg) {
    document.title = langs[pg][cl].metaTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", langs[pg][cl].metaDesc);
    for (i = 0; i < inp.length; i++) {
        let val = langs[pg][cl][inp[i]]
        if (hasV(inp[i])) elm(inp[i]).value = val;
        else elm(inp[i]).innerHTML = val;
    }
}