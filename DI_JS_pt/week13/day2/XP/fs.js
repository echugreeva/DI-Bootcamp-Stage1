//EX1
const fs = require('fs');
fs.readFile('text.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

//EX2

fs.writeFile('blah.txt', 'Blah blah!', function (err) { 
    if (err){ 
        console.log(err);
    }
    else{
        console.log('Write operation complete.');
    }
});


let newContent = "More blabla";

fs.appendFile('blah.txt', `\n ${newContent}`, function (err) {
    if (err) {
        console.error(err)
        return
    }
});

fs.readFile('blah.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

// fs.unlink('blah.txt', function (err) {
//     console.log('write operation complete.');
// });