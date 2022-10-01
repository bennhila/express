const  express  = require("express");

const app = express ();


app.use(express.static(__dirname + '/views'));


// const requestTime = function (req, res, next) {
//     req.requestTime = Date.now()
//     next()
//   }


//     app.get('/contact',requestTime, (req, res) => {
//         let responseText = 'Hello World!<br>'
//         responseText += `<small>Requested at: ${req.requestTime}</small>`
//         res.send(responseText)
//     })








// app.use((req, res, next) => {

    
//     next()
//   })





app.get ('/',(req, res)=>{ res.sendFile(__dirname + '/homePage.html');});

app.get ('/contact',(req, res)=>{ res.sendFile(__dirname + '/contact.html');});
// app.get ('/style.css',(req, res)=>{
//     res.sendFile(__dirname + '/style.css');
// });

app.listen(5000 ,(err)=>err?console.log(err):console.log('server is runnig on port 5000'));
