export class Util {
    constructor() { return "No" }
    //Get element
    static elm = id => document.getElementById(id);
    //Generate random number
    static rand = (a, b) => b ? (Math.random() * (b - a) + a) | 0 : (Math.random() * a) | 0;
    //Generate secure random number
    static secRand = (a, b) => b ? (crypto.getRandomValues(new Uint32Array(1))[0] % (b - a) + a) : (crypto.getRandomValues(new Uint32Array(1))[0] % a)
    //Generate random color
    static rcol = mode => {
        if (mode == "hex") return '#' + (rand(0x1000000).toString(16).padStart(6, '0'));
        else if (mode == "rgb") return `rgb(${this.rand(256)}, ${this.rand(256)}, ${this.rand(256)})`
        else return null
    }
    //Detect if element scrolled to bottom
    static scrBtm = (elm = document.documentElement, offset = 50) => elm.scrollHeight - elm.scrollTop - offset <= elm.clientHeight
    //Logging Utility
    static log = (msg, mode = "log", bg) => {
        switch (mode) {
            default:
                if (mode[0] == "#") mode = "color:" + mode + ";background:" + bg
                break;
            case "log":
                mode = "color: #eee"
                break;
            case "warn":
                console.warn("%c" + msg, "color:#ff0;background:#550;border:1px solid #ff0")
                return;
                break;
            case "err":
            case "error":
                console.error("%c" + msg, "font-size:18px;color:#f00;background:#500;border:1px solid #f00")
                return;
                break;
            case "imp":
            case "important":
                mode = "color: #0af;border:1px solid #0af"
                break;
            case "obj":
            case "object":
                console.log("%c" + msg[0], "color:#f0f", msg[1])
                return;
                break;
        }
        console.log("%c" + msg, mode)
    }
    //Alert dialog
    static createAlert = (msg, mode, useHtml = false, append = true) => {
        let dia = document.createElement("dialog"),
            style = "",
            id
        do {
            id = "dia" + (this.rand(2 ** 16))
        } while (document.getElementById(id) != null)
        dia.id = id
        if (useHtml) {
            dia.innerHTML = `${msg}`
        } else {
            dia.innerHTML = `<p>${msg}</p>`
        }
        switch (mode) {
            default:
            case 0: //Alert Mode
                dia.innerHTML += `<div class="bottom">
<button onclick="document.getElementById('${dia.id}').close()" style="${style}">Close</button></div>`

                break;
            case 1: //Confirm Mode
                dia.innerHTML += `<div class="bottom">
<button onclick="document.getElementById('${dia.id}').close()" style="${style}">Confirm</button><br>
<button onclick="document.getElementById('${dia.id}').close()" style="${style}">Close</button></div>`

                break;
            case 2: //Prompt Mode
                dia.innerHTML += `<div class="bottom"><button onclick="document.getElementById('${dia.id}').close()" style="${style}">Close</button></div>`
                break;
        }

        if (append) document.body.appendChild(dia)
        return [dia, id]
    }
    
}