const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'oleksandra.201153@gmail.com', 
        subject: 'Welcome to the Task Manager App',
        text: `Hey there ${name}. Let me know how you get along with the app.`
    })
};

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'oleksandra.201153@gmail.com', 
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}, Thank you for using our app. I hope to see you back sometime soon. Have a nice day!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}