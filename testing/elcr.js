function bu(cont,id) {
  let btn = document.createElement("button")
  btn.setAttribute("id",id)
  btn.appendChild(document.createTextNode(cont))
  document.body.appendChild(btn)
}
function br(){
  document.body.appendChild(document.createElement("br"))
}
function log(v) {
  console.log(v)
}