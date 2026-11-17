const express = require('express')

const app = express()

const port = 3000;

// app.use(session({
//     secret: 'We are the champions',
//     resave: false,
//     saveUninitialized: false
// }))

app.listen(port, function (){
    console.log(`Listening on port: ${port}`)
})