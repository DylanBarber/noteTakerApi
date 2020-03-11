const router = require('express').Router();

router.post('/note', (req,res) => {

    // THIS IS WHERE CALL TO CREATE A NOTE ON SERVICE WILL BE
    res.end();
})

router.get('/note', (req,res) => {

    // THIS IS WHERE CALL TO GET ON SERVICE WILL BE
    res.end();
})

router.put('/note', (req, res) => {

    // THIS IS WHERE CALL TO UPDATE NOTE ON SERVICE WILL BE
    res.end();
})

router.delete('/note', (req, res) => {

    // THIS IS WHERE CALL TO DELETE NOTE ON SERVICE WILL BE
    res.end();
})

module.exports = router;