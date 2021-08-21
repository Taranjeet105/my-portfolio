const express=require('express')
const router=express.Router()
const nodemailer=require("nodemailer")
router.get('/',(req,res)=>{
    res.render("index")
  })
  
router.post('/contact',(req,res)=>{
    console.log(req.body)

    var message=req.body.message;
    var senderEmail=req.body.email;
    var name=req.body.name;

   
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
         
        },
    });

    var mailOptions = {
        from: 'shantys502@gmail.com',
        to: 'shantys502@gmail.com',
        subject: "User Query on Taranjeet singh portfolio",
        html: `
        Name of the sender : ${name}
        <br/>
        Email of the sender : ${senderEmail}
        <br/>
        Message : ${message}
        `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          return res.json({success:false,message:error})
        } else {
          console.log("Email sent: " + info.response);
        return res.json({success:true,message:"message sent"})
        }
    });



    // res.json("thanks for contacting")
})


module.exports=router