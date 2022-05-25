"use strict";
class filePicker extends HTMLElement {
    connectedCallback() {
        const shd = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const inp = document.createElement("input");
        const p = document.createElement("p");
        let config = JSON.parse(this.getAttribute("data-config"));
        config = config ? config : { "center": true, "centerEl": false, "multi": false, "fixedH": false, "accept": "*", "remEmpt": true };

        const modEl = fileList => {
            this.dispatchEvent(new CustomEvent("filepick", { detail: { files: fileList } }));
            if (config.multi) p.innerHTML = "Selected files: <br>";
            else p.innerHTML = "Selected file: ";
            for (let i = 0; i < fileList.length; i++) {
                p.innerHTML += fileList[i].name + (config.center ? "<br>" : ", ");
            }
        }

        if (!this.style.height) {
            if (config.fixedH) this.style.height = "70px";
            else this.style.minHeight = "50px";

        }
        if (!this.style.width) this.style.width = "220px";

        if (config.multi) p.innerHTML = "Click here to pick files";
        else p.innerHTML = "Click here to pick a file";
        p.style.color = "#fff";
        div.appendChild(p);
        div.appendChild(inp);
        shd.appendChild(div);

        inp.type = "file";
        inp.accept = config.accept
        inp.style.display = "none";
        if (config.multi) inp.setAttribute("multiple", "");
        inp.oninput = e => {
            this.setAttribute("value", inp.value)
            if (inp.files.length > 0) modEl(inp.files)
            else if (config.remEmpt) {
                if (config.multi) p.innerHTML = "Click here to pick files";
                else p.innerHTML = "Click here to pick a file";
            }
        }

        div.onclick = () => inp.click();
        div.style.height = this.style.height;
        div.style.minHeight = this.style.minHeight;
        div.style.width = this.style.width;
        div.style.minWidth = this.style.minWidth;
        div.style.background = "#333";
        div.style.border = "2px solid #888";
        if (config.centerEl) div.style.margin = "auto";
    }
}

customElements.define('file-picker', filePicker);
