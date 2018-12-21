const processMessage = require('../helpers/processMessage');

module.exports = (req, res) => {
    let body = req.body;

    if(body.object === 'page'){
        body.entry.forEach( entry => {
            entry.messaging.forEach( event =>{
                    if(event.message && event.message.text){
                        processMessage(event);
                    }
            })
        });

        res.status(200).end();
    }
};


