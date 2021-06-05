var coLi = {
"rainbow":["#ff0000", "#fc2c00", "#f84100", "#f45000", "#f05e00", "#eb6900", "#e57400", "#e07e00", "#da8700", "#d48f00", "#ce9700", "#c79f00", "#c1a600", "#baad00", "#b3b400", "#acba00", "#a5c000", "#9dc611", "#95cc29", "#8ed13a", "#85d74a", "#7ddc58", "#74e167", "#6ae575", "#60ea83", "#54ee91", "#48f39f", "#39f7ad", "#26fbbb", "#00ffc8", "#00f7db", "#00eeec", "#00e3f8", "#00d8ff", "#00ccff",  "#00c0ff", "#07bdff", "#1abaff", "#2cb6ff", "#3eb2ff", "#4fadff", "#5fa9ff", "#70a3ff", "#7f9eff", "#8f98ff", "#9e91ff", "#ac8aff", "#ba82fe", "#c77af7", "#d471ee", "#df68e5", "#ea5dda", "#f352ce", "#fc46c1", "#ff38b4", "#ff27a6", "#ff0f97", "#ff0087", "#ff0077", "#ff0067", "#ff0056", "#ff0045", "#ff0034", "#ff0020"],
"red":["#ff0000", "#ff3200", "#ff4b00", "#ff5e00", "#ff7000", "#ff8000", "#ff9000", "#ff9f00", "#ffad00", "#ffbc00", "#ffca00", "#ffd700", "#ffe500", "#fff200", "#ffff00", "#fff200", "#ffe500", "#ffd700", "#ffca00", "#ffbc00", "#ffad00", "#ff9f00", "#ff9000", "#ff8000", "#ff7000", "#ff5e00", "#ff4b00", "#ff3200"],
"green":["#b9ff00", "#b2ff0d", "#aaff17", "#a2ff1e", "#9aff25", "#92ff2b", "#89ff31", "#80ff36", "#76ff3c", "#6cff41", "#60ff46", "#53ff4b", "#43ff4f", "#2fff54", "#00ff59", "#2fff54", "#43ff4f", "#53ff4b", "#60ff46", "#6cff41", "#76ff3c", "#80ff36", "#89ff31", "#92ff2b", "#9aff25", "#a2ff1e", "#aaff17", "#b2ff0d"],
"blue":["#2300ff", "#003bff", "#0055ff", "#0069ff", "#007bff", "#008aff", "#0098ff", "#00a5ff", "#00b1ff", "#00bdff", "#00c8ff", "#00d3ff", "#00deff", "#00e8ff", "#00f1ff", "#00e8ff", "#00deff", "#00d3ff", "#00c8ff", "#00bdff", "#00b1ff", "#00a5ff", "#0098ff", "#008aff", "#007bff", "#0069ff", "#0055ff", "#003bff"],
"magenta":["#ff08a7", "#fb00ac", "#f600b1", "#f000b6", "#ea00bb", "#e300c1", "#dc00c6", "#d400cc", "#cb00d2", "#c100d8", "#b500de", "#a900e4", "#9a00ea", "#8a02f0", "#7614f6", "#8a02f0", "#9a00ea", "#a900e4", "#b500de", "#c100d8", "#cb00d2", "#d400cc", "#dc00c6", "#e300c1", "#ea00bb", "#f000b6", "#f600b1", "#fb00ac", "#ff08a7"], 
"gray":["#000000", "#0c0c0c", "#151515", "#1c1c1c", "#232323", "#2a2a2a", "#323232", "#393939", "#414141", "#494949", "#515151", "#595959", "#626262", "#6a6a6a", "#737373", "#7b7b7b", "#848484", "#8d8d8d", "#969696", "#9f9f9f", "#a8a8a8", "#b2b2b2", "#bbbbbb", "#c4c4c4", "#cecece", "#d8d8d8", "#e1e1e1", "#ebebeb", "#f5f5f5", "#ffffff", "#f5f5f5", "#ebebeb", "#e1e1e1", "#d8d8d8", "#cecece", "#c4c4c4", "#bbbbbb", "#b2b2b2", "#a8a8a8", "#9f9f9f", "#969696", "#8d8d8d", "#848484", "#7b7b7b", "#737373", "#6a6a6a", "#626262", "#595959", "#515151", "#494949", "#414141", "#393939", "#323232", "#2a2a2a", "#232323", "#1c1c1c", "#151515", "#0c0c0c"]
}

//Function for color selection
function cSel(x) {
let result;
if(x=="red") {result=coLi.red}
else if(x=="mag") {result=coLi.magenta}
else if(x=="rb") {result=coLi.rainbow}
else if(x=="blue") {result=coLi.blue} 
else if(x=="green") {result=coLi.green}
else if(x=="gray") {result=coLi.gray}
return result
}
//Background Color
function backc(elem, time, col) {
let selCol = cSel(col)

let i = 0;
function func() {
elem.style.background=selCol[i];
if(i>selCol.length-1) {i=-1};
i++}
setInterval(func, time)}

//Text Color
function textc(elem, time, col) {
let selCol = cSel(col)

let i = 0;
function func() {
elem.style.color=selCol[i];
if(i>selCol.length-1) {i=-1};
i++}
setInterval(func, time)}

//Border
var bpx = "2px";
var bst = "solid";
function bds(p,s){bpx=p;bst=s} //border pixel and style

function borderc(elem, time, col) {
let selCol = cSel(col)

let i = 0;
function func() {
elem.style.border = bpx +" "+ bst +" "+ selCol[i];
if(i>selCol.length-1) {i=-1}; 
i++}
setInterval(func, time)}
