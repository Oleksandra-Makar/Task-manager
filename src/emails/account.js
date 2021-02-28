const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'oleksandra.201153@gmail.com', 
        subject: 'Welcome to the Task Manager App',
        text: `Hey there ${name}. Let me know how you get along with the app.`
    })
};

module.exports = {
    sendWelcomeEmail
}