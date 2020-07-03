const express = require('express');
const router = express.Router();



//home route
router.get("/", (req, res) => {
    console.log(process.env.SEND_GRID_API_KEY)
    //express can see only what is in VIEWS
    res.render("general/home", {
        title: "Home Page"
    });
});

router.get("/contact-us", (req, res) => {
    res.render("general/contactUs", {
        title: "Contact-Us Form"
    });
});

router.post("/contact-us", (req, res)=> {
    
    const {firstName, lastName, email, message} = req.body;
  
    const sgMail = require('@sendgrid/mail');
    
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
   
    const msg = {
        to: `chervonnye@gmail.com`,
        from: `${email}`,
        subject: 'Contact Us Form Submit',
        html: 
        `Vistor's Full Name ${firstName} ${lastName} <br>
         Vistor's Email Address ${email} <br>
         Vistor's message : ${message}<br>
        `,
        };
    
        //Asynchornous operation (who don't know how long this will take to execute)
        sgMail.send(msg)
        .then(()=>{
            res.redirect("/");
        })
        .catch(err=>{
            console.log(`Error ${err}`);
        });



/*

    const msg = {
      to: `achervonnaya@myseneca.ca`,
      from: `${email}`,
      subject: 'Contact-us form submit',
      html: 
      `Visitor's Full Name ${firstName} ${lastName}
      Visitor's Email Address ${email}
      Visitor's message: ${message}
      `
      };
      //asynchronous operation
    sgMail.send(msg)
    .then(()=>{
        //if succeeds then it will call thisfunction
        res.redirect("/");
    })
    //an error will be caught here
    .catch(err =>{
        console.log(`Error ${err}`);
    })
    */
})


module.exports = router;