const admin = require('firebase-admin')
const express = require('express')
const app = express()


var serviceAccount = require("./olxclonereact-78e3a-firebase-adminsdk-70s1l-a1df840a3f.json");
app.use(express.json())

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://olxclonereact-78e3a-default-rtdb.firebaseio.com"
});

app.post('/send-noti',(req,res)=>{
    console.log(req.body)
    const message = {
        notification:{
            title:"new ad",
            body:"new ad posted click to open"
        },
        tokens:req.body.tokens
    }
    
    admin.messaging().sendMulticast(message).then(res=>{
        console.log('send success')
    }).catch(err=>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log('surver running')
})