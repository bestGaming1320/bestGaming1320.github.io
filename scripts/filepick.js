"use strict";
class filePicker extends HTMLElement {
    shd; //shadow dom
    enableStatus; //if file picker can be used or not
    connectedCallback() {
        this.shd = this.attachShadow({ mode: "open" });
        this.enableStatus = this.getAttribute("data-enabled") ? JSON.parse(this.getAttribute("data-enabled")) : true
        this.enabled(this.enableStatus)
        const div = document.createElement("div");
        const inp = document.createElement("input");
        const p = document.createElement("p");
        let config = JSON.parse(this.getAttribute("data-config"));
        config = config ? config : { "center": true, "centerEl": false, "multi": false, "fixedH": false, "accept": "*", "remEmpt": true, "custText": false, "custSelText": false };

        const modEl = fileList => {
            this.dispatchEvent(new CustomEvent("filepick", { detail: { files: fileList } }));
            changeSelTxt()
            for (let i = 0; i < fileList.length; i++) {
                p.innerHTML += fileList[i].name + (config.center ? "<br>" : ", ");
            }
        }

        function changeTxt() {
            if (config.custText) p.innerHTML = config.custText
            else if (config.multi) p.innerHTML = "Click here to pick files"
            else p.innerHTML = "Click here to pick a file"
        }
        function changeSelTxt() {
            if (config.custSelText) return config.custSelText
            else if (config.multi) p.innerHTML = "Selected files:<br>"
            else p.innerHTML = "Selected file:<br>"
        }

        if (!this.style.height) {
            if (config.fixedH) this.style.height = "70px";
            else this.style.minHeight = "50px";

        }
        if (!this.style.width) this.style.width = "220px";

        changeTxt()
        p.style.color = "#fff";
        div.appendChild(p);
        div.appendChild(inp);
        this.shd.appendChild(div);

        inp.type = "file";
        inp.accept = config.accept
        inp.style.display = "none";
        if (config.multi) inp.setAttribute("multiple", "");
        inp.oninput = e => {
            this.setAttribute("value", inp.value)
            if (inp.files.length > 0) modEl(inp.files)
            else if (config.remEmpt) {
                changeTxt()
            }
        }

        div.onclick = () => { if (this.enableStatus) inp.click() };
        div.style.height = this.style.height;
        div.style.minHeight = this.style.minHeight;
        div.style.width = this.style.width;
        div.style.minWidth = this.style.minWidth;
        div.style.background = "#333";
        div.style.border = "2px solid #888";
        if (config.centerEl) div.style.margin = "auto";
    }
    enabled(b) {
        this.enableStatus = b;
        if (b) {
            this.style.filter = "brightness(1)"
        } else {
            this.style.filter = "brightness(0.7)"
        }
    }
    changeStyle(style) {
        if (style.height) div.style.height = style.height;
        if (style.minHeight) div.style.minHeight = style.minHeight;
        if (style.width) div.style.width = style.width;
        if (style.minWidth) div.style.minWidth = style.minWidth;
        if (style.background) div.style.background = style.background;
        if (style.border) div.style.border = style.border;
        if (style.margin) div.style.margin = style.margin;
    }
}

customElements.define('file-picker', filePicker);
