var express = require('express');
var router = express.Router();
var connection = require('../connection/sql');
var passport = require('../config/passport');
var app = require('../app');


/* GET users listing. */

var user_id = 3;
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});



router.get('/login', function (req, res, next) {
  // console.log(req)
  console.log(app.name);
  console.log("Errors" + req.flash('loginMessage'));
  console.log("Passport Errors" + req.flash('error'));
  // res.json({ status: 'Succesful' });
  res.render('login.hbs');
});

router.post('/login', function (req, res, next) {
  passport.authenticate('local-login', { session: true }, function (err, user, info) {
    if (err) { console.log('dsafds'); return next(err); }
    if (!user) { return res.send({ loginState: 'false', message: req.flash('loginMessage') }); }
    req.logIn(user, function (err) {
      if (err) { console.log('dsafds2'); return next(err); }
      return res.send({ loginState: 'true', sessionID: req.sessionID, user_id: req.user.id });
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
  var picture = req.body.picture;
  var cv = req.body.cv;
  // console.log("INSERT INTO `user` (`firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`) VALUES " + `( '${firstname}', '${lastname}', '${email}', '${password}', '${address}',  ${phonenumber}, '${field}','${picture}');`);
  connection.query("INSERT INTO `user` (`firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`,`cv`) VALUES " + `( '${firstname}', '${lastname}', '${email}', '${password}', '${address}',  ${phonenumber}, '${field}','${picture}','${cv}');`, function (error, results, fields) {
    if (error) {
      console.log('cannot insert the user\n' + error);
      res.json({ loginState: 'false' });


    } else
      res.json({ loginState: 'true' });


  });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.redirect('/')
})
router.post('/isauthenticated', (req, res, next) => {
  console.log(req.body.sessionID);
  if (typeof req.body.sessionID !== undefined) {
    connection.query(`select * from sessions where session_id =  '${req.body.sessionID}'`, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        if (results.length > 0) {
          res.json({
            status: true
          })
        } else {
          res.json({
            status: false
          })
        }
      }
    })
  }
  // console.log(req.isAuthenticated());

});
router.post('/timeline', (req, res, next) => {
  var user_id = req.body.user_id;
  connection.query(`select j.id as job_id,j.company_id ,j.name as job_name,j.field,j.status,c.name as company_name ,c.picture ,c.website,j.description from jobposting j,company c where c.id = j.company_id and j.status = 'pending' and j.id not in (select job_id from jobapplication where user_id=${user_id});`, function (error, results, fields) {
    if (error) {
      console.log('cannot Load the timeline\n' + error);

    } else {
      console.log(results[0])
      var final = {
        timeline_result: results
      }
      res.json(final);

    }
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

router.post('/getcompany', (req, res, next) => {
  var company_id = req.body.company_id;
  console.log(company_id)
  connection.query(`select * from company where id = ${company_id}`, function (error, results, fields) {
    if (error) {
      console.log('cannot Find any Company\n' + error);

    } else
      if (results.length >= 0) {
        res.json(results[0]);
      }
    // res.json({ status: 'Succesful' });


  });
});
router.post('/getuser', (req, res, next) => {
  var user_id = req.body.user_id;
  console.log(user_id)
  connection.query(`select * from user where id = ${user_id}`, function (error, results, fields) {
    if (error) {
      console.log('cannot Find any Users\n' + error);

    } else
      if (results.length >= 0) {
        res.json(results[0]);
      }
    // res.json({ status: 'Succesful' });


  });
});
router.post('/getuserbymail', (req, res, next) => {
  var user_id = req.body.email;
  console.log(user_id)
  connection.query(`select * from user where email = '${user_id}'`, function (error, results, fields) {
    if (error) {
      res.send({ loginState: 'false'})
      // console.log('cannot Find any Users\n' + error);

    } else
      if (results.length > 0) {
        res.send({ loginState: 'true'})
      }else{
      res.send({ loginState: 'false'})
        
      }
    // res.json({ status: 'Succesful' });


  });
});
router.post('/getalluser', (req, res, next) => {
  var user_id = req.body.user_id;
  console.log(user_id)
  connection.query(`select * from user where id not in (select follower_id from userfollowing where user_id = ${user_id}) and id !=${user_id} ;`, function (error, results, fields) {
    if (error) {
      console.log('cannot Find any Users\n' + error);

    } else
      if (results.length >= 0) {
        res.json(results);
      }
    // res.json({ status: 'Succesful' });


  });
});

router.post('/getskills', (req, res, next) => {
  var job_id = req.body.job_id;
  job_id = 3;
  console.log(job_id);
  connection.query(`select DISTINCT(skill) from jobposting j, jobskills s where s.job_id =j.id and j.id =${job_id}`, function (error, results, fields) {
    if (error) {
      console.log('cannot Find any Users\n' + error);

    } else
      if (results.length > 0) {
        res.json(results);
      }
    // res.json({ status: 'Succesful' });


  });
});

router.post('/ctimeline', (req, res, next) => {
  var user_id = req.body.user_id;
  connection.query(`select j.id as job_id,j.company_id ,j.name as job_name,j.field,j.status,j.description from jobposting j where company_id in (select distinct(id) from company c, following f where c.id = f.company_id and user_id = ${user_id} and f.status = 'approved'  ) and status = 'pending' and id not in (select job_id from jobapplication where user_id=${user_id}); `, function (error, results, fields) {
    if (error) {
      console.log('Error fetching Followed Companies \n' + error);

    } else
      if (results.length > 0) {
        console.log(results);
        res.json(results);
      } else {
        console.log('sdf')
        res.json([{ 'company_name': 'notfound' }]);
      }
    // res.json({ status: 'Succesful' });


  });
});
router.post('/apply', (req, res, next) => {

  var user_id = req.body.user_id;
  var job_id = req.body.job_id;
  var refrential = req.body.refrential;

  console.log(job_id);
  console.log(user_id);
  // connection.query(`SELECT 'Hello world' FROM DUAL;`, function (error, results, fields) {
  connection.query(`insert into jobapplication (user_id,job_id,reference) Values (${user_id},${job_id},${refrential});`, function (error, results, fields) {
    if (error) {
      console.log('Error Inserting job application \n' + error);
      res.json({ status: 'UnSuccesful', error: error });

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
      console.log('Error Inserting into Company Following Table\n' + error);
      res.json({ status: 'UnSuccesful', error: error });

    } else
      res.json({ status: 'Succesful' });
  });
});

router.post('/followuser', (req, res, next) => {

  var user_id = req.body.user_id;
  var follower_id = req.body.follower_id;
  console.log(follower_id);
  console.log(user_id);
  if (user_id !== follower_id) {

    // connection.query(`SELECT 'Hello world' FROM DUAL;`, function (error, results, fields) {
    connection.query(`insert into userfollowing (user_id,follower_id) Values (${user_id},${follower_id});`, function (error, results, fields) {
      if (error) {
        console.log('Error Inserting into User Following Table\n' + error);
        res.json({ status: 'UnSuccesful', error: error });

      } else
        res.json({ status: 'Succesful' });
    });
  } else {
    res.json({ status: 'UnSuccesful', error: 'user and follower id is same' });

  }

});


router.post('/uprofile', (req, res, next) => {

  var user_id = req.body.user_id;
  console.log(user_id);
  connection.query(`select * from user where id = ${user_id};`, function (error, results, fields) {
    if (error) {
      console.log('Error Getting user Profile Data\n' + error);

    } else
      if (results.length >= 0) {
        // console.log(results);
        res.json(results[0]);
      }
  });
});
router.post('/uappliedjobs', (req, res, next) => {

  var user_id = req.body.user_id;
  console.log(user_id);
  connection.query(`select j.id as job_id,j.company_id ,j.name as job_name,j.field,j.status,c.name as company_name ,c.picture ,c.website,j.description from jobposting j,company c where c.id = j.company_id  and j.id in (select job_id from jobapplication where user_id=${user_id});`, function (error, results, fields) {
    console.log(`select j.id as job_id,j.company_id ,j.name as job_name,j.field,j.status,c.name as company_name ,c.picture ,c.website,j.description from jobposting j,company c where c.id = j.company_id  and j.id in (select job_id from jobapplication where user_id=${user_id});`)
    if (error) {
      console.log('Error Getting user Applied Jobs Data\n' + error);

    } else
      if (results.length > 0) {
        console.log(results);
        res.json(results);
      } else {
        res.json(['company_name:notfound']);
      }
  });
});
router.post('/changepassword', (req, res, next) => {

  var user_id = req.body.user_id;
  var password = req.body.password;
  console.log(user_id);
  console.log(password);
  connection.query(`update user set password = '${password}' where id=${user_id};`, function (error, results, fields) {
    if (error) {
      console.log('Error Updating the password\n' + error);
      res.json('false');
    } else
      res.json('true');
  });
});

module.exports = router;
