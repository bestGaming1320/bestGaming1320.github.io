var langs = {
    "settings": {
        "en": {
            "langSel": "en",
            "settP": "Settings",
            "langP": "Language",
            "infoP": "Currently only works on these pages:<br>Settings<br>Homepage"
        },
        "de": {
            "langSel": "de",
            "settP": "Einstellungen",
            "langP": "Sprache",
            "infoP": "Funktioniert aktuell nur auf diesen Seiten:<br>Einstellungen<br>Homepage"
        }
    },
    "mIndex": {
        "en": {
            "title": "Select a page",
            "tool": "Tools",
            "game": "Games",
            "colSc": "Color Screen",
            "clock": "Clock",
            "book": "Book",
            "docs": "Documentations"
        },
        "de": {
            "title": "Suche eine Seite aus",
            "tool": "Tools",
            "game": "Spiele",
            "colSc": "Farbbildschirm",
            "clock": "Uhr",
            "book": "Buch",
            "docs": "Dokumentationen"
        }
    }
}
if (localStorage.getItem("lang") == null) localStorage.setItem("lang", "en")
var cl = localStorage.getItem("lang")
function elm(n) { return document.getElementById(n) }
function setL(inp, pg) {
    for (i = 0; i < inp.length; i++) {
        let val = langs[pg][cl][inp[i]]
        let tN = elm(inp[i]).tagName
        if (tN == "P" || tN == "BUTTON") elm(inp[i]).innerHTML = val;
        else if (tN == "SELECT") elm(inp[i]).value = val;
        else alert("Unsupported Element: " + tN)
    }
}