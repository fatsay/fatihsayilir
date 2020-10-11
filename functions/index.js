const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const nodemailer = require('nodemailer');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.sendMail= functions.https.onCall((data, context) => {
   return data.name+' your mail is received!!'
});
/* Get the data from sendMail and save it in firestore
    so firestore can trigger the redirectMail to me!!
//function write firestore

//transporter
 let transporter = nodemailer.createTransport({
   service:'gmail',
   port: '2525',
   auth: {
     //Mail address and paa
   }
})
export.redirectMail=functions.https.onRequest((req,res)=>{
//mail options
 const mailOptions={
 from:senders mail
 to: fatih_sayilir@hotmail.com
 subject:data.subject
 html: '<b>Text</b>'
 }
 return transporter.sendMail(mailOptions, (error, info)=>{
    if(error){return res.send(error.toString());}
    return res.send('Email sent successfully!!')
 })
})
*/
