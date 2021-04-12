const text = document.getElementById("text"),
  textInput = document.getElementById("textInput"),
  ctx = text.getContext("2d");

const width = (text.width = window.innerWidth);
const height = (text.height = window.innerHeight);

export let textPixels = [];

export function getText() {
  ctx.textAlign = "center";
  ctx.font = `bold ${width / 60}px sans-serif`;
  ctx.fillText(`${textInput.value}`, 60, 30);
}

export function getTextData() {
  textPixels = [];

  let textImgData = ctx.getImageData(0, 0, width, 40);
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
}
