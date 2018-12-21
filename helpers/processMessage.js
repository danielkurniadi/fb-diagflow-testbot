const API_AI_TOKEN = '4da4ffa98a934a1d96b21f469e8675de';
const apiAiClient = require('apiai')(API_AI_TOKEN);
const FACEBOOK_ACCESS_TOKEN = 'EAAC6PMEYsZCcBAGOtbMxZBUaFLZCPMsJ9VowGKkLWi3XQigIBe3bT8p548B1waxyLaZC9LjU7KimQmtvQOwQBZAwdEC4GADGSrjTKyQvBrWHNgMQY8yCa5NEZBt0MB3abWYOa4cIVqxm27n5j0aSt0EnrOkSHOXzvLw83hsQLeOwZDZD';
const request = require('request');
const sendTextMessage = (senderId, text) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json: {
        recipient: { id: senderId },
        message: { text }
        }
    });
};

module.exports = (event) => {
    const senderId = event.sender.id;
    const message = event.message.text;
    const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'cobatics-bot'});

    apiaiSession.on('response', (response) => {
        const result = response.result.fulfillment.speech;
        sendTextMessage(senderId, result);
    });

    apiaiSession.on('error', error => console.log(error));
    apiaiSession.end();
};