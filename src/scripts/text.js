const text = document.getElementById("text"),
  ctx = text.getContext("2d");

const width = (text.width = window.innerWidth);
const height = (text.height = window.innerHeight);

let pix = ctx.getImageData(0, 0, width / 2, height / 2);

export function initText() {
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.font = "30px sans-serif";
  ctx.fillText("asd", width / 2, height / 2);
  ctx.strokeStyle = "white";
  ctx.strokeRect(0, 0, width, height);
}
