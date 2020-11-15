//how can I change the color of all bars to blue?

var bars = document.querySelectorAll(".bar");
bars.forEach(bar => {
  //console.dir(bar);
  bar.style.backgroundColor = "blue";
  bar.style.borderRadius = "100%";
});

var myContainer = document.querySelector('section');
console.dir(myContainer);
myContainer.style.borderWidth = "10px";
myContainer.style.borderColor = "rgb(244,0,0)";
myContainer.style.borderStyle = "solid";
myContainer.style.width = "80%";
