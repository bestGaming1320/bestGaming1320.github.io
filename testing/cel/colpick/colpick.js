"use strict";
class colSel extends HTMLElement {
    connectedCallback() {
        const shd = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const inp = document.createElement("input");
        const p = document.createElement("p");
        const datalist = document.createElement("datalist");

        inp.value = this.getAttribute("data-def") ? this.getAttribute("data-def") : "#ffffff";
        this.setAttribute("value", inp.value);

        if (!this.style.height) this.style.height = "50px";
        if (!this.style.width) this.style.width = "200px";

        if (this.hasAttribute("data-cols")) {
            var cont = JSON.parse(this.getAttribute("data-cols"));
            for (var i = 0; i < cont.length; i++) {
                let opt = document.createElement("option");
                opt.setAttribute("value", cont[i]);
                datalist.appendChild(opt);
            }
            datalist.id = "dat";
            inp.setAttribute("list", "dat");
        }

        p.innerHTML = this.getAttribute("txt");
        p.style.color = parseInt(inp.value.replace("#", ""), 16) > 8388607 ? "#000" : "#fff";
        div.appendChild(p);
        div.appendChild(inp);
        shd.appendChild(datalist);
        shd.appendChild(div);

        inp.type = "color";
        inp.style.opacity = 0;
        inp.oninput = () => {
            div.style.background = inp.value;
            this.setAttribute("value", inp.value);
            this.dispatchEvent(new CustomEvent("colchange"));
            p.style.color = parseInt(inp.value.replace("#", ""), 16) > 8388607 ? "#000" : "#fff";
        }

        div.onclick = () => inp.click();
        div.style.height = this.style.height;
        div.style.width = this.style.width;
        div.style.background = inp.value;
        div.style.border = "2px solid #888";
        if (this.getAttribute("data-center") == "true") div.style.margin = "0 auto";
    }
}

customElements.define('col-sel', colSel);
