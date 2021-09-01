import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  const satellitePic = props.satellitePic;
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = satellitePic;
    img.onload = function() {
        context.drawImage(img, 0, 0, 400, 400)
        img.style.display = 'none';
    }
    let myImageDataTest = context.getImageData(0, 0, 400, 400)
    let dataTest = context.getImageData(0, 0, 1, 1);
    // const rgba = `rgba(${dataTest.data[0]}, ${dataTest.data[1]}, ${dataTest.data[2]}, ${data.data[3] / 255})`;
    console.log("all pixel values", myImageDataTest)
    console.log("one pixel value", dataTest, );

    //Looping through all of the pixels
    const myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = myImageData.data;
    console.log("data", data)

    function changeColors(red, green, blue) {
        if (red === 1 && green === 1 && blue === 1 ) {
            return [255, 1, 0];
        } 
        if (red === 2 && green === 2 && blue === 2 ) {
            return [64, 64, 64];
        } 
        if (red === 3 && green === 3 && blue === 3 ) {
            return [131, 60, 11];
        } 
        if (red === 4 && green === 4 && blue === 4 ) {
            return [0, 255, 0];
        } 
        if (red === 5 && green === 5 && blue === 5 ) {
            return [254, 255, 0];
        } 
        if (red === 6 && green === 6 && blue === 6) {
            return [13, 0, 204];
        } 
        if (red === 7 && green === 7 && blue === 7) {
            return [116, 113, 113];
        } 
        if (red === 8 && green === 8 && blue === 8) {
            return [173, 170, 170];
        } 
        if (red === 9 && green === 9 && blue === 9) {
            return [208, 206, 206];
        } 
        if (red === 10 && green === 10 && blue === 10) {
            return [0, 204, 255];
        } 
        if (red === 11 && green === 11 && blue === 11) {
            return [255, 103, 255];
       } 
    }

    for(let i = 0; i < data.length; i += 4) {
        let red = data[i];
        let green = data[i + 1];
        let blue = data[i + 2];
        // let alpha = data[i + 3];

        let newColors = changeColors(red, green, blue);
        console.log("new colors" , newColors)
        myImageData.data[i] = newColors[0];
        myImageData.data[i+1] = newColors[1];
        myImageData.data[i+2] = newColors[2];
        myImageData.data[i+3] = 255;

    }

    context.putImageData(myImageData, 0, 0);

    // Classification Colors
        //1 - rgb(255, 1, 0) (red)
        //2 - rgb(64, 64, 64)
        //3 - rgb(131,60,11)
        //4 - rgb(0, 255, 0)
        //5 - rgb(254, 255, 0)
        //6 - rgb(13, 0, 204)
        //7 - rgb(116, 113, 113)
        //8 - rgb(173, 170, 170)
        //9 -  rgb(208, 206, 206)
        //10 - rgb(0, 204, 255)
        //11 - rgb(255, 103, 255)
  }, [])
  
  return <canvas width="400" height="400" ref={canvasRef} {...props}/>
}

export default Canvas