const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', './');
app.use('/public', express.static('public'))

var nodemailer = require('nodemailer');


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

app.get('/', (req, res) => res.render('index',{}));

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
  to: 'siddhantkgarg@gmail.com',
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


app.listen(3000, () => console.log('Example app listening on port 3000!'))

