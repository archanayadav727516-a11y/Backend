const express = require('express');
const router = express.Router();


function routeLevelMW(req, res, next){
    console.log("User level MW");
    next();
}
function authMW(req,res ,next){
    console.log("Auth Middleware");
    next();
}

// router.use(routeLevelMW);
router.get('/', authMW, (req, res) => {
    res.send("User Route Working ✅");
});

router.post('/',  (req, res) => {
    const body = req.body;
    console.log(JSON>stringfy(body))
    res.send(JSON.stringfy(body));
});



module.exports = router; 