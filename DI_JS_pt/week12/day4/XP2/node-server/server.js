
// EX 1
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use('/', express.static(__dirname + `./public` ));

app.get('/', (req, res)=>{
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
   res.send(JSON.stringify(user));

   

})
app.listen(3000,()=>{
    console.log(`server runs`)
})


//EX 2 

// const express = require('express');
// const app = express();
// const cors = require('cors');
// app.use(cors());
// app.use('/', express.static(__dirname + `./public` ));

// app.get('/:id', (req, res)=>{
//     const id = req.params.id;
//     console.log(req.params.id);
//    //in express i dont nee to stringify
//    res.send(`{"id": "${id}}"`);


// })
// app.listen(3000,()=>{
//     console.log(`server runs`)
// })

//EX 3

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const path = require('path');
// app.use(cors());
// app.use('/', express.static(path.join(__dirname, 'public')));

// app.get('/',(req, res)=>{
//     res.sendFile(path.join(__dirname + "/public/index.html"));
// })
// app.listen(3000,()=>{
//     console.log(`server runs`)
// })