function init(txt="") {
    let pV = p("This is the page for my repository ", false)
    let aE = a("github.com/bestGaming1320/" + elm("t").innerHTML, elm("t").innerHTML)
    apn(aE, pV)
    apn(pV)
    p(txt)
}

function btn(txt,url) {
    let button = document.createElement("button")
    button.innerHTML = txt
    button.onclick = function () { location.href = url }
    button.style.border = "2px solid #" + hexR()
    document.body.appendChild(button)
}

function p(txt, apnd = true) {
    let pE = document.createElement("p")
    pE.appendChild(document.createTextNode(txt))
    return apnd ? document.body.appendChild(pE) : pE
}
function a(link, txt = link) {
    let aE = document.createElement("a")
    aE.href = "https://" + link
    aE.innerHTML = txt
    return aE
}
function br(apnd = true) {
    let br = document.createElement("br")
    return apnd ? document.body.appendChild(br) : br
}

function apn(e, ap = document.body) {
    ap.appendChild(e)
}

function elm(e) {
    return document.getElementById(e)
}

function hexR() {
    return (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}