// call the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

var port = process.env.PORT || 8080;

var router = express.Router();
router.get('/people', function(req, res) {
    var people = [
        {name: 'wschae', url: 'assets/wschae.jpg'},
        {name: 'eyyoun', url: 'assets/eyyoun.gif'},
        {name: 'gla', url: 'assets/gla.gif'},
        {name: 'hwanjoyu', url: 'assets/hwanjoyu.gif'},
        {name: 'hyelee', url: 'assets/hyelee.jpg'},
        {name: 'Jieun', url: 'assets/Jieun.jpg'},
        {name: 'jinhyoukim', url: 'assets/jinhyoukim.png'},
        {name: 'jwkhong', url: 'assets/jwkhong.jpg'},
        {name: 'dwkim', url: 'assets/dwkim.jpg'},
        {name: 'slee', url: 'assets/slee.jpg'},
        {name: 'klee', url: 'assets/klee.jpg'},
        {name: 'syjung', url: 'assets/syjung.png'},
        {name: 'dhson', url: 'assets/dhson.jpg'},
        {name: 'joonhan', url: 'http://cse.postech.ac.kr/eng/wp-content/uploads/2017/05/professor18-168x191.jpg'},        
        {name: 'mscha', url: 'assets/mscha.jpg'},
        {name: 'leesy', url: 'http://cse.postech.ac.kr/eng/wp-content/uploads/2017/05/professor12-168x191.jpg'},
        {name: 'jhlee', url: 'assets/jhlee.jpg'},
    ];
    res.json(people);
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
