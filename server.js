var express = require("express")
var bodyParser = require("body-parser")
var obras = require("./routes/obras")
var actividades = require("./routes/actividades")
var empleados = require("./routes/empleados")
var equipos = require("./routes/equipos")
var materiales = require ("./routes/materiales")
var herramientas = require("./routes/herramientas")
var actividad_materiales = require ("./routes/actividad_materiales")
var actividad_empleados = require ("./routes/actividad_empleados")
var actividad_equipos = require ("./routes/actividad_equipos")
var actividad_herramientas = require("./routes/actividad_herramientas")
var cors = require("cors")
var port = 3000
var app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use("/api",obras)
app.use("/api",actividades)
app.use("/api",empleados)
app.use("/api",equipos)
app.use("/api",materiales)
app.use("/api",herramientas)
app.use("/api",actividad_empleados)
app.use("/api",actividad_materiales)
app.use("/api",actividad_herramientas)
app.use("/api",actividad_equipos);

//Se pone a escucha del servidor 
app.listen(port, function(){
    console.log('Server iniciado en el puerto '+port)
})