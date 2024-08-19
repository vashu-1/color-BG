var index = 0;
function handleColor() {
  var colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
  const body = document.body;
  body.style.background = colors[index++];

  if (index > colors.length - 1) index = 0;
}
