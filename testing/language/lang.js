var langs = {
    "langindex": {
        "en": {
            "metaTitle": "Language Script Testing",
            "metaDesc": "This is a page to test the language script",
            "title": "Language Script Testing",
            "p0": "Text of p0",
            "e1": "Text of e1"
        },
        "de": {
            "metaTitle": "Sprachskript Test",
            "metaDesc": "Dies ist eine Seite um den Sprachskript zu testen",
            "title": "Sprachskript Test",
            "p0": "Text von p0",
            "e1": "Text von e1"
        }
    },
    "pageName": {
        "en": {},
        "de": {}
    }
}
var cl = localStorage.getItem("lang")
function elm(n) { return document.getElementById(n) }
function setL(inp, pg) {
    document.title = langs[pg][cl].metaTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", langs[pg][cl].metaDesc);
    for (i = 0; i < inp.length; i++) {
        let val = langs[pg][cl][inp[i]]
        let tN = elm(inp[i]).tagName
        if (tN == "P"||tN=="H2") elm(inp[i]).innerHTML = val;
        else if (tN == "SELECT") elm(inp[i]).value = val;
        else alert("Unsupported Element: "+tN)
    }
}