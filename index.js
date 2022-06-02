//EJEMPLO HTTP 


const http = require('http')
const express = require('express')

//EJERCISIO 1
//const puerto = 8000
// const server = http.createServer((req, res) => {
//     const tiempo = new Date();
//     const hora = tiempo.getHours();
//     if(hora >= 6 && hora <= 12){
//         res.end("buenos dias");
//     }else if(hora >=13 && hora <= 19){
//         res.end("buenas tardes")
//     }else{
//         res.end("buenas noches")
//     }
//     console.log("llego una peticion")
//     res.end('Bienvenido a nuestro servidor http')
// })

// server.listen(puerto, () => {
//     console.log(`servidor esciando puerto: ${puerto}`)
// })

//AHORA VEMOS EXPRESS

const app = express();
const puerto = 8080

// app.get("/",(req,res) =>{
//     res.send("hola")
// })

// app.get("/users/:id/:nombre", (req, res) => {
//     const {id, nombre} = req.params
//     console.log(req.params)
//     res.send(`soy el user: ${id} ${nombre}`)
// })


// app.get("/users/:id", (req, res) => {
//     const id = req.params.id

//     res.send(`soy el user: ${id}`)
// })


// app.listen(puerto, () => {
//     console.log(`El puerto se inicio en el puerto ${puerto}`)
// });

//EJERCISIO 2}

let visitas = 0
app.listen(puerto, ()=>{
    console.log(`Escuchando en el puerto ${puerto}`)
})

app.get("/" ,(req,res) => {
    res.send("<h1 style= color:blue>Bienvenidos al servidor express</h1>")

})

app.get("/visitas", (req,res) => { 
    
    visitas ++;
    res.send(`la cantidad de vistas es ${visitas}`)
})

app.get("/fyh" , (req,res)=>{
    const date = new Date().toLocaleString();
    res.json(`fyh: ${date}`)

})

//MIDDLEWARE
app.use((req, res, next)=>{
    //para contar todas las visitas en todos los endpoints
    visitas++
    next();
})