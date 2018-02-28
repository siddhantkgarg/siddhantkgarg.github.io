const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', './');
app.use('/public', express.static('public',{ maxAge: 86400000 }))
app.use('/dist', express.static('dist',{ maxAge: 86400000 }))


var nodemailer = require('nodemailer');


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

app.get('/', (req, res) => res.render('index',{}));

//TODO : Add timestamp to gulp and change here for differenct versions.
app.get('/public',function(req,res){
    res.setHeader("Cache-Control", "public, max-age=14400");
    res.setHeader("Expires", new Date(Date.now() + 14400000).toUTCString());

})

const transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'urbanstraw@gmail.com',
	    pass: '1strawRevolution'
	  }
});
app.get('/email',function(req,res){
	var name = req.params.name;
	var email = req.params.email;
	var msg_subject = req.params.msg_subject;
    

var mailOptions = {
  from: email,
  to: 'urban.straw@gmail.com',
  subject: 'Query Email from website',
  text: msg_subject
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.send('success');
  }
});

});


app.listen(80, () => console.log('Example app listening on port 3000!'))

