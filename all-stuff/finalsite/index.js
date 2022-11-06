const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', './');
app.use('/public', express.static('public', { maxAge: 86400000 }))
app.use('/dist', express.static('dist', { maxAge: 86400000 }))


var nodemailer = require('nodemailer');


var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded());


var sm = require('sitemap');

var sitemap = sm.createSitemap({
    hostname: 'http://urbanstraw.com',
    cacheTime: 600000, // 600 sec - cache purge period 
    urls: [
        { url: '/', changefreq: 'daily', priority: 1 }
    ]
});

app.get('/sitemap.xml', function(req, res) {
    sitemap.toXML(function(err, xml) {
        if (err) {
            return res.status(500).end();
        }
        res.header('Content-Type', 'application/xml');
        res.send(xml);
    });
});





app.get('/', (req, res) => res.render('index', {}));


app.get('/farm/nisarg', (req, res) => res.render('farms/nisarg', {}));


app.get('/farm/udbhavam', (req, res) => res.render('farms/udbhavam', {}));

//TODO : Add timestamp to gulp and change here for differenct versions.
app.get('/public', function(req, res) {
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
app.post('/email', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    var mailOptions = {
        from: name + '<' + email + '>',
        to: 'urbanstraw@gmail.com',
        subject: 'Email from ' + name + ' <' + email + '>',
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });

});


app.listen(80, () => console.log('Example app listening on port 80!'))

