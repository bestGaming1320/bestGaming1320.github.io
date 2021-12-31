var langs = {
    "settings": {
        "en": {
            "metaTitle": "Settings",
            "metaDesc": "Settings for the website",
            "langSel": "en",
            "settP": "Settings",
            "langP": "Language",
            "infoP": "Currently only works on these pages:<br>Settings<br>Homepage"
        },
        "de": {
            "metaTitle": "Einstellungen",
            "metaDesc": "Einstellungen für die Website",
            "langSel": "de",
            "settP": "Einstellungen",
            "langP": "Sprache",
            "infoP": "Funktioniert aktuell nur auf diesen Seiten:<br>Einstellungen<br>Homepage"
        }
    },
    "mIndex": {
        "en": {
            "metaTitle": "Homepage",
            "metaDesc": "Links to all my pages",
            "title": "Select a page",
            "tool": "Tools",
            "game": "Games",
            "colSc": "Color Screen",
            "clock": "Clock",
            "book": "Book",
            "docs": "Documentations"
        },
        "de": {
            "metaTitle": "Homepage",
            "metaDesc": "Links zu all meinen Seiten",
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
function hasV(el) {
    if (elm(el).tagName == "BUTTON") return false
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
        let val = langs[pg][cl][inp[i]];
        if (hasV(inp[i])) elm(inp[i]).value = val;
        else elm(inp[i]).innerHTML = val;
    }
}