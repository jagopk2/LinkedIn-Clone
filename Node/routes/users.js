var express = require('express');
var router = express.Router();
var connection = require('../connection/sql');
var passport = require('../config/passport');
/* GET users listing. */

var user_id = 3;
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
  // console.log(req)
  console.log("Errors" + req.flash('loginMessage'));
  console.log("Passport Errors" + req.flash('error'));
      // res.json({ status: 'Succesful' });
  res.render('login.hbs');
});
hello wokrl
router.post('/login', function (req, res, next) {
  passport.authenticate('local-login', { session: true }, function (err, user, info) {
    if (err) { console.log('dsafds'); return next(err); }
    if (!user) { return res.send({ loginState: 'unsucessful', message: req.flash('loginMessage') }); }
    req.logIn(user, function (err) {
      if (err) { console.log('dsafds2'); return next(err); }
      return res.send({ loginState: 'successfull' });
    });
  })(req, res, next);
});
router.get('/signup', function (req, res, next) {
  console.log("Errors" + req.flash('loginMessage'));
  res.render('signup.hbs');
});
router.post('/signup', (req, res, next) => {

  var firstname = req.body.firstname
  var lastname = req.body.lastname
  var phonenumber = req.body.phonenumber
  var address = req.body.address
  var field = req.body.field
  var email = req.body.email
  var password = req.body.password
  console.log("INSERT INTO `user` (`firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`) VALUES " + `( '${firstname}', '${lastname}', '${email}', '${password}', '${address}',  ${phonenumber}, '${field}');`);
  connection.query("INSERT INTO `user` (`firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`) VALUES " + `( '${firstname}', '${lastname}', '${email}', '${password}', '${address}',  ${phonenumber}, '${field}');`, function (error, results, fields) {
    if (error) {
      console.log('cannot insert the user\n' + error);

    } else
      res.json({ status: 'Succesful' });


  });
});

router.get('/logout',(req,res,next)=>{
  req.logout();
  req.session.destroy();
  res.redirect('/')
})

router.post('/timeline', (req, res, next) => {

  connection.query(`select j.id as job_id,j.company_id ,j.name as job_name,j.field,j.status,c.name as company_name ,c.website,j.description from jobposting j,company c where c.id = j.company_id and j.status = 'pending' and j.id not in (select job_id from jobapplication where user_id=${user_id});`, function (error, results, fields) {
    if (error) {
      console.log('cannot Load the timeline\n' + error);

    } else
      res.json(results);
    // res.json({ status: 'Succesful' });


  });
});
router.post('/companies', (req, res, next) => {

  connection.query(`select * from company where id not in (select company_id from following where user_id =${user_id})`, function (error, results, fields) {
    if (error) {
      console.log('cannot Find any Company\n' + error);

    } else
      if (results.length >= 0) {
        console.log(results);
        res.json(results);
      }
    // res.json({ status: 'Succesful' });


  });
});

router.post('/ctimeline', (req, res, next) => {

  connection.query(`select j.id as job_id,j.company_id ,j.name as job_name,j.field,j.status,j.description from jobposting j where company_id in (select distinct(id) from company c, following f where c.id = f.company_id and user_id = ${user_id} and f.status = 'approved'  ) and status = 'pending' and id not in (select job_id from jobapplication where user_id=${user_id}); `, function (error, results, fields) {
    if (error) {
      console.log('Error fetching Followed Companies \n' + error);

    } else
      if (results.length >= 0) {
        console.log(results);
        res.json(results);
      }
    // res.json({ status: 'Succesful' });


  });
});
router.post('/apply', (req, res, next) => {

  var user_id = req.body.user_id;
  var job_id = req.body.job_id;
  console.log(job_id);
  console.log(user_id);
  // connection.query(`SELECT 'Hello world' FROM DUAL;`, function (error, results, fields) {
  connection.query(`insert into jobapplication (user_id,job_id) Values (${user_id},${job_id});`, function (error, results, fields) {
    if (error) {
      console.log('Error Inserting job application \n' + error);
      res.json({ status: 'UnSuccesful' ,error:error});

    } else
        res.json({ status: 'Succesful' });

  });
});

router.post('/followcompany', (req, res, next) => {

  var user_id = req.body.user_id;
  var company_id = req.body.company_id;
  console.log(company_id);
  console.log(user_id);
  // connection.query(`SELECT 'Hello world' FROM DUAL;`, function (error, results, fields) {
  connection.query(`insert into following (user_id,company_id) Values (${user_id},${company_id});`, function (error, results, fields) {
    if (error) {
      console.log('Error Inserting Following Table\n' + error);
      res.json({ status: 'UnSuccesful' ,error:error});

    } else
        res.json({ status: 'Succesful' });
  });
});

module.exports = router;
