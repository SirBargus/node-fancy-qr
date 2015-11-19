[Original project](https://github.com/heartnetkung/node-fancy-qr)

## Fancy QR
Create QR code with logo or a change of color. The data capacity is up to ~1200 bytes. Here is the example of your output:


![alt text](https://raw.githubusercontent.com/wiki/heartnetkung/node-fancy-qr/out.png "Screenshot 1")
![alt text](https://raw.githubusercontent.com/wiki/heartnetkung/node-fancy-qr/out2.png "Screenshot 2")

## Installation
Then, read how to install native dependency [here](https://github.com/LearnBoost/node-canvas/wiki).

## Usage
You can see an example in test/test.js

## API
```javascript
//save the image output as png
fancyQR.save(pngOutputPath,text,options,callback(err));

//output as internal canvas object for further modification (see API from node-canvas)
fancyQR.draw(text,options,callback(err,canvasObject));
```
Options can have the following fields:
* r: red color of the qr output (logo unaffected) [0-255]
* g: green color [0-255]
* b: blue color [0-255]
* max: level of errorCorrectLevel
* logoPath: path of the logo, recommended 30 x 30 or smaller
