import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  const satellitePic = props.satellitePic;

let colorChanger = {
    '0':[255,255,255],
    '1':[255,1,0],
    '2':[64,64,64],
    '3':[131,60,11],
    '4':[0,255,0],
    '5':[254,255,0],
    '6':[13,0,204],
    '7':[166, 113, 113],
    '8':[173,170,170],
    '9':[208,206,206],
    '10':[0,204,255],
    '11':[255,103,255]
   }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = satellitePic;
    img.onload = function() {
        context.drawImage(img, 0, 0, 420, 420)
        img.style.display = 'none';

        const myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = myImageData.data;
        console.log("data", data)

        for(let i = 0; i < myImageData.data.length; i+=4) {
            
            let red = myImageData.data[i].toString();
            let newColors = colorChanger[red];

            myImageData.data[i] = newColors[0];
            myImageData.data[i+1] = newColors[1];
            myImageData.data[i+2] = newColors[2];
            myImageData.data[i+3] = 255;

        }
        context.putImageData(myImageData, 0, 0);

    }
  }, [colorChanger])
  
  return <canvas width="420" height="420" ref={canvasRef} {...props}/>
}

export default Canvas

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