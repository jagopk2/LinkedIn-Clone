var fs = require('fs');
var path = require('path')
var config = JSON.parse(fs.readFileSync("config.json"));

var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service : 'gmail',
    secure : false,
    port : 25,
    auth :{
        user:'jagopk2@gmail.com',
        pass:config.password
    },
    tls:{
        rejectUnauthorized:false
    }
});

let HelperOptions = {
    from:`"Junaid Ahmed" <jagop2@gmail.com`,
    to: 'jagopk2@gmail.com',
    subject:'Check Nodemailer',
    text:'this is body'
};

transporter.sendMail(HelperOptions,(error,info)=>{
    if(error){
        return console.log(error)
    }
    console.log("This message is sent")
    console.log(info)
})