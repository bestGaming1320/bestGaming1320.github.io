var langs = {
    "langindex": {
        "en": {
            "p0": "Text of p0",
            "e1": "Text of e1"
        },
        "de": {
            "p0": "Text von p0",
            "e1": "Text von e1"
        }
    },
    "settings": {
        "en": {
            "langSel": "en",
            "settP": "Settings",
            "langP": "Language",
            "infoP": "Currently only works on this page"
        },
        "de": {
            "langSel": "de",
            "settP": "Einstellungen",
            "langP": "Sprache",
            "infoP": "Funktioniert aktuell nur auf dieser Seite"
        }
    },
    "pageName": {
        "en": {},
        "de": {}
    }
}
var cl = localStorage.getItem("lang")
function elm(n) { return document.getElementById(n) }
function setL(inp,pg) {
    for (i = 0; i < inp.length; i++) {
        let val = langs[pg][cl][inp[i]]
        let tN = elm(inp[i]).tagName
        if (tN == "P") elm(inp[i]).innerHTML = val;
        else if (tN == "SELECT") elm(inp[i]).value = val
    }
}