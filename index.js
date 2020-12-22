var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const debug = require("debug")("server");
const cors = require("cors");

const port = process.env.SERVER_PORT || 4000;

var controller = require("./controller");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
       "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
});
app.use(
    cors({
       origin: "http://localhost:4000",// restrict calls to those this address
        methods: 'GET,PUT,POST,DELETE'
    })
);

app.post('/api/login', (req, res) => {
    // console.log('Got body:', req.body);
   return new controller().userLogin(req,res);
});

app.get('/api/courses',(req,res)=>{
    return new controller().getCourses(req,res);
});


app.post('/api/submit',(req ,res)=>{
   return new controller().submitRegistration(req,res);
});

app.get('/api/view',(req,res)=>{
   return new controller().viewRegistration(req,res);
});

app.put('/api/update',(req,res)=>{
   return new controller().updateRegistration(req,res);
});

app.delete('/api/delete',(req,res)=>{
    return new controller().deleteRegistration(req,res);
});
app.listen(port, () => debug(`Listening on port ${port}`));