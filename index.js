const http = require('http'); // core module import
const ex=require('./module');
const exam=require('./objectexport');
const nodemailer =require('nodemailer');
const { info } = require('console');
const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'yashwantappidi@gmail.com',
        pass:'SANthosh@195'
    }
});
var mailoption={
    from:'yashwantappidi@gmail.com',
    to:'swethaappidi999@gmail.com',
    subject:'remainder for job',
    text:'hi swetha go through our compan jobs'
}
transport.sendMail(mailoption, function (error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('the message sent '+ info.response);
    }
});
http.createServer((req,res)=>{
    res.send('hello world');

}).listen(8000,()=>{
    console.log('hi');
})
console.log(exam.add(2,4));
console.log(ex.add(9,8));// local module import
