const VERIFY_TOKEN = "Cobatics";

module.exports = (req, res) => {
    const hubChallenge = req.query['hub.challenge'];

    const hubMode = req.query['hub.mode'];
    const verifyTokenMatches = (req.query['hub.verify_token'] === 'Cobatics');
   
    if (hubMode && verifyTokenMatches) {
        res.status(200).send(hubChallenge);
    } else {
        res.status(404).end();
    }
// kuNqXt8yCkgdFea
   

};