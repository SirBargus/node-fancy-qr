var qr = require('../lib/fancyqr.js'),
    fs = require('fs');

var logo = fs.readFileSync('logo.png');

qr.save('hello world',{
    r: 237,
    g: 127,
    b: 38,
    err: 'max',
    logoPath: logo
}, function(err, buf){
    fs.writeFileSync('test_2.png', buf, 'binary');
});
