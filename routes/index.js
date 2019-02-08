var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('pages/index');
});

router.post('/contact', (req, res)=>{
  console.log(req.body);
  res.render('pages/index', {sentContactForm: true});
})

module.exports = router;
