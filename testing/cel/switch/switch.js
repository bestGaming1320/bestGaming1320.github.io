"use strict"
class switchEl extends HTMLElement {
    constructor(config) {
        super()
        this.config = config
    }
    shd; //shadow dom
    checked = false //switch on or off
    config;
    connectedCallback() {
        this.shd = this.attachShadow({ mode: "open" })
        const container = document.createElement("div"),
            outerDiv = document.createElement("div"),
            innerDiv = document.createElement("div"),
            p = document.createElement("p")

        let dataconf = JSON.parse(this.getAttribute("data-config"))
        this.config = {
            "checked": dataconf.checked ? dataconf.checked : false,
            "text": dataconf.text ? dataconf.text : "",
            "onText": dataconf.onText ? dataconf.onText : (dataconf.text ? dataconf.text : "")
        }

        container.style.userSelect = "none"
        this.shd.appendChild(container)

        outerDiv.style.background = "#336"
        outerDiv.style.height = "25px"
        outerDiv.style.width = "50px"
        outerDiv.style.margin = "auto"
        outerDiv.style.marginTop = "10px"
        outerDiv.style.overflow = "hidden"
        outerDiv.style.borderRadius = "10px"
        outerDiv.style.display = "inline-block"
        outerDiv.tabIndex = "0"
        container.appendChild(outerDiv)

        innerDiv.style.background = "#f00"
        innerDiv.style.height = "80%"
        innerDiv.style.width = "40%"
        innerDiv.style.margin = "5%"
        innerDiv.style.float = "left"
        innerDiv.style.borderRadius = "10px"
        outerDiv.appendChild(innerDiv)

        let tn = document.createTextNode("\n")
        container.appendChild(tn)

        p.style.display = "inline"
        p.innerHTML = this.config.text
        container.appendChild(p)

        this.setAttribute("data-checked", this.config.checked)

        if (this.config.checked) {
            innerDiv.style.float = "right"
            innerDiv.style.background = "#0f0"
            p.innerHTML = this.config.onText
        } else {
            innerDiv.style.float = "left"
            innerDiv.style.background = "#f00"
            p.innerHTML = this.config.text
        }

        container.onclick = () => {
            if (this.getAttribute("data-checked") == "false") {
                innerDiv.style.float = "right"
                innerDiv.style.background = "#0f0"
                this.checked = true
                p.innerHTML = this.config.onText
            } else {
                innerDiv.style.float = "left"
                innerDiv.style.background = "#f00"
                this.checked = false
                p.innerHTML = this.config.text
            }
            this.setAttribute("data-checked", this.checked)
            this.dispatchEvent(new CustomEvent("input", { detail: { checked: this.checked } }))
        }
        container.addEventListener("keydown", e => {
            if(new RegExp(/Enter|NumpadEnter|Space/).test(e.code)) container.click()
        })


    }
}
customElements.define('switch-el', switchEl)