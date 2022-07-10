var langs;
if (localStorage.getItem("lang") == null) localStorage.setItem("lang", "en")
var cl = localStorage.getItem("lang")

function elm(n) {
    return document.getElementById(n)
}

function setL(inp, pg) {
    fetch("/scripts/langs.json").then(resp => {
        if (resp.ok) return resp.json()
        else console.error("There was an error getting the language file. Status: " + resp.status)
    }).then(dat => {
        langs = dat;
        setLang(inp, pg)
    })
}

function setLang(inp, pg) {
    document.title = langs[pg][cl].metaTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", langs[pg][cl].metaDesc);
    for (i = 0; i < inp.length; i++) {
        let val = langs[pg][cl][inp[i]];
        if (hasV(inp[i])) elm(inp[i]).value = val;
        else elm(inp[i]).innerHTML = val;
    }
}

function hasV(el) {
    if (elm(el).tagName == "BUTTON") return false
    if (elm(el).value == undefined) return false
    else return true
}