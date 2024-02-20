function hide(elementId){
  let element = document.getElementById(elementId)
  element.classList.add("hidden");
    
}
function addItem(text) {
  let div = document.createElement('div')
  div.innerHTML = `
  <p id = "element" class="output">${text}</p>
  <input type="checkbox" class = "check"  id="isDone">
  <button id="delete" class="button">-</button>

  `
 
 
  document.getElementById("listElements").appendChild(div)
  
  console.log(div)
  getChildById(div, "delete").addEventListener("click", function(ev){
    div.remove()
  })
}

function getChildById(element, id) {
  const children = element.childNodes
  for (const child of children) {
    if (child.id == id) return child
  }
  return undefined
}

function unhide(elementId){
  let element = document.getElementById(elementId)
  element.classList.remove("hidden");
    
}

document.getElementById("enter").addEventListener("click", function(ev){
  hide("container");
  const text = document.getElementById("input").value
  addItem(text);
}
)

document.getElementById("addItem").addEventListener("click", function(ev) {
  
  unhide("container");
  
})

document.getElementById("input").addEventListener("input",function(ev){

})