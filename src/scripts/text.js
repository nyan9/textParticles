const text = document.getElementById("text"),
  ctx = text.getContext("2d");

const width = (text.width = window.innerWidth);
const height = (text.height = window.innerHeight);

export let textPixels = [];

export function getText() {
  ctx.fillStyle = "white";
  ctx.font = "bold 30px sans-serif";
  ctx.fillText("Aeiou", 5, 25);

  // ctx.strokeRect(0, 0, 400, 30);
}

export function getTextData() {
  let textImgData = ctx.getImageData(0, 0, 400, 30);
  // every single pixel of image data
  let pixData = textImgData.data;

  // Iterate through every pixel collected inside ClampedArray (textImgData.data)
  for (let y = 0; y < textImgData.height; y++) {
    for (let x = 0; x < textImgData.width; x++) {
      // push x,y coord to textPixels, if alpha value of pixelData is greater than 128
      if (pixData[y * 4 * textImgData.width + x * 4 + 3] > 128) {
        textPixels.push({ positionX: x, positionY: y });
      }
    }
  }
  console.log(textImgData);
  console.log(textPixels);
}

getText();
