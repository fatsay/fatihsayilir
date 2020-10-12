const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

//get mail object from client and set in to firestore
exports.getMail = functions.https.onCall((data, context) => {
   //firestore
   //creates documents in mails collection
   //document id = client's email address
   //fields = name,email,subject,message (field type=String for each)
   return admin.firestore().collection('/mails').doc(data.email).set({
      name:data.name,
      email:data.email,
      subject:data.subject,
      message:data.message,
   }).then(()=>{
      console.log('New mail written');
      //returns a text to frontend web with client's name
      return 'Thanks! '+data.name +', your mail is received!!';
   })
});
//google account credentials to send email using nodemailer
const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   auth: {
      user: 'user-mail-address',
      pass: 'user-mail-password'
   }
});
//send confirmation mail to client
//firestore triggers the mail transporter
exports.sendMail = functions.firestore
    .document('mails/{mailsId}')
    .onCreate(((snapshot, context) => {
       const mailOptions = {
          from: 'user-mail-address',
          to: snapshot.data().email,   //get client's mail address
          subject: 'response message',
          html: `<h1>Fatih Sayilir</h1>
                    <p>
                       <b>Name: </b>${snapshot.data().name}<br>
                        <br>your email is received!<br>
                        <br>Best regards!
                    </p>`
            };
       //send mail here
       return transporter.sendMail(mailOptions, (error, data) => {
          if (error) {
             console.log(error)
             return
          }
          console.log("Sent!")
       });
    }));
