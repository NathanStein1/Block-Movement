function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("element", ev.target.id);
  
}
// if dragged === draggee, plus one to var = 0, if var = 3, than open the page
let points = 0;
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("element");
  // console.log(ev.dataTransfer.getData())
  ev.target.appendChild(document.getElementById(data));
  console.log(ev)
  let dragged = ev.target.firstElementChild.attributes[1].value
  let draggee = ev.target.attributes[1].value

  if (dragged === draggee) {
    document.querySelector('.blah').textContent= "Good Job"
    points++
    console.log(points)
  }

  else {
    document.querySelector('.blah').textContent= "False"
  }
  if (points == 3) {
    document.querySelector('.tinkle').textContent= "BEANS"
  }

}

