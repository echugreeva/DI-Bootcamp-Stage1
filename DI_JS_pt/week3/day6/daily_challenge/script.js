let a = ["*"];

for (let i = 0; i < 7; i++) {
    a.push((`${a[i]}${a[0]}`));
}


a.forEach(function(a) {
    console.log(a);
})


// nested

let b = ["*"];

for (let i=0; i<7; i++) {
    console.log(b[i]);

    for (let i = 0; i < 7; i++) {
        b.push((`${b[i]}${b[0]}`));
       
    }
}

// 1 loop

let c = ["*", "**", "***", "****", "*****","******"];
let i=0;

while (i < c.length) {
    console.log(c[i]);
    i++
}