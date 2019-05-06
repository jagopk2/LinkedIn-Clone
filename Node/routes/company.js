var express = require('express');
var router = express.Router();
var connection = require('../connection/sql');
var passport = require('../config/passport');
/* GET users listing. */

router.post('/viewProfile', function (req, res, next) {
    console.log(req.body.data);
    let email = req.body.data;
    var query = "select * from company where email = \"" + email + "\" ";
    console.log(query)
    connection.query(query, function (err, result) {
        console.log('rows', result);
        if (result) {
            res.send(JSON.stringify(result));
        } else {
            console.log(error)
            res.send('error')
        }
    });
});

router.post('/viewJobs', function (req, res, next) {
    console.log(req.body.data);
    let id = req.body.data;
    var query = 'select * from company c, jobPosting j where c.id = j.company_id and c.id = ' + id + ' and j.status != "approved"';
    console.log(query)
    connection.query(query, function (err, result) {
        console.log('rows', result);
        if (result) {
            console.log('here')
            res.send(JSON.stringify(result))
        } else {
            console.log(error)
            res.send('error')
        }
    });
});

function fetchSkillsOfJob(res, job_id, job) {
    var query = 'select * from jobSkills where job_id = ' + job_id;
    console.log(query)
    connection.query(query, function (err, result) {
        console.log('rows', result);
        if (result) {
            console.log('here in view post')
            job.skills = result;
            console.log(job)
            res.send(JSON.stringify(job));
        } else {
            console.log(error)
            res.send('error')
        }
    });

}

router.post('/viewJobPostDetails', function (req, res, next) {
    console.log(req.body.data);
    let job_id = req.body.data;

    job = {
        jobDetails: '',
        skills: '',
    }

    var query = 'select * from jobPosting j, company c where c.id = j.company_id and  j.id = "' + job_id + '"';
    console.log(query)
    connection.query(query, function (err, result) {
        console.log('rows', result);
        if (result) {
            job.jobDetails = result[0];
            console.log('completed till here')
            fetchSkillsOfJob(res, job_id, job);

        } else {
            console.log(error)
            res.send('error')
        }
    });
});


function insertSkills(job_id, connection, skills) {

    console.log('insert skills')
    for (i = 0; i < skills.length; i++) {
        var query = 'insert into jobskills values(' + job_id + ',"' + skills[i] + '")';
        console.log(query);
        connection.query(query, function (err, result) {
            if (result) {
                //       res.send(JSON.stringify(result))
                console.log(result, connection);
            } else {
                console.log(error)
                res.send('error')
            }
        });
    }
}

router.post('/createJob', function (req, res, next) {
    console.log(req.body.data);
    let job = req.body.data;

    var query = 'Insert into jobposting (company_id, title, description, field) values('
        + job.comp_id + ',"' + job.title + '","' + job.description + '","' + job.field + '")';
    console.log(query);
    connection.query(query, function (err, result) {
        console.log('rows', result.insertId);
        if (result) {
            //       res.send(JSON.stringify(result))
            insertSkills(result.insertId, connection, job.skills);
        } else {
            console.log(error)
            res.send('error')
        }
    });
});

router.post('/fetchJobApplicants', function (req, res) {
    console.log('fetch job applicants', req.body.data)
    let job_id = req.body.data;
    var query = 'select * from jobapplication j, user u where j.user_id = u.id and  j.job_id = ' + job_id;
    console.log('jasklfjklsajf');
    connection.query(query, function (err, result) {
        if (result) {
            res.send(JSON.stringify(result))
        } else {
            console.log(error)
            res.send('error')
        }
    });
});


router.post('/login', function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    console.log(email)
    console.log(password)
    var query = `select * from company where email = '${email}' and password = '${password}' `;
    console.log(query)
    connection.query(query, function (error, result) {
        console.log('rows', result);

        if (error) {
            console.log('Error Username and Email cannot be found\n' + error);

        } else if(result && result.length < 1){
        
            res.json({ loginState: 'false', message:'Wrong Username or Password' });

        }else{
            res.json({ loginState: 'true' });
        }

    });
});
function fetchSkillsOfUser(res, user_id, user) {
    var query = 'select * from skills where user_id = ' + user_id;
    console.log(query)
    connection.query(query, function (error, result) {
        console.log('rows', result);
        if (result) {
            user.skills = result;
            console.log(user)
            res.send(JSON.stringify(user));
        } else {
            console.log(error)
            res.send('error')
        }
    });

}


router.post('/fetchUserProfile', function (req, res) {
    console.log('fetch user profile', req.body.data)

    user = {
        userDetails: '',
        skills: '',
    }

    let user_id = req.body.data;
    var query = 'select * from user where id = ' + user_id;
    console.log('jasklfjklsajf');
    connection.query(query, function (error, result) {
        if (result) {
            user.userDetails = result[0];
            fetchSkillsOfUser(res, user_id, user);
        } else {
            console.log(error)
            res.send('error')
        }
    });
});

function updateJobApplicanstsStatus(res, user_id, job_id) {
    var query = 'UPDATE jobApplication SET status="approved" WHERE user_id= ' + user_id + ' and job_id = ' + job_id;
    console.log('in job Applicants');
    connection.query(query, function (err, result) {
        if (result) {
            res.send(JSON.stringify("successfull"));
        } else {
            console.log(err)
            res.send('error')
        }
    });
}


function updateJobStatus(res, user_id, job_id) {
    var query = 'UPDATE jobPosting SET status="approved" WHERE id= ' + job_id;
    console.log('jasklfjklsajf');
    connection.query(query, function (err, result) {
        if (result) {
            updateJobApplicanstsStatus(res, user_id, job_id);
        } else {
            console.log(err)
            res.send('error')
        }
    });
}


router.post('/approveUser', function (req, res) {
    console.log('fetch user profile', req.body.data);
    let user_id = req.body.data.user_id;
    let job_id = req.body.data.job_id;
    console.log(user_id, job_id);
    updateJobStatus(res, user_id, job_id)


});


router.post('/viewJobsApproved', function (req, res, next) {
    console.log(req.body.data);
    let id = req.body.data;
    console.log("id", id);
    var query = 'select * from company c, jobPosting j where c.id = j.company_id and c.id = ' + id + ' and j.status = "approved"';
    console.log(query)
    connection.query(query, function (err, result) {
        console.log('rows', result);
        if (result) {
            console.log('here')
            res.send(JSON.stringify(result))
        } else {
            console.log(error)
            res.send('error')
        }
    });
});

router.post('/viewCompanyFollowers', function (req, res, next) {
    console.log(req.body.data);
    let id = req.body.data;
    console.log("id", id);
    var query = 'select * from user u, following f where u.id = f.user_id and f.company_id = ' + id;
    console.log(query)
    connection.query(query, function (err, result) {
        console.log('rows', result);
        if (result) {
            console.log('here')
            res.send(JSON.stringify(result))
        } else {
            console.log(error)
            res.send('error')
        }
    });
});

router.post('/followBlockStatus', function (req, res, next) {
    console.log(req.body.data);
    let data = req.body.data;
    let status = data.status === 'approved' ? "blocked" : "approved";
    console.log(status);
    var query = 'UPDATE following SET status = "' + status + '" where company_id = ' + data.company_id + ' and user_id = ' + data.user_id;
    console.log(query)
    connection.query(query, function (err, result) {
        console.log('rows', result);
        if (result) {
            console.log('here')
            res.send(JSON.stringify(result))
        } else {
            console.log(error)
            res.send('error')
        }
    });
});

router.post('/registerCompany', function (req, res, next) {
    console.log(req.body.data);
    let c_data = req.body.data;
    console.log('company', c_data);
    var query = 'insert into company (name, email, password, address, phoneNumber, website) values ("' + c_data.name + '","' + c_data.email + '","' + c_data.password + '","' + c_data.address + '",' + c_data.phoneNumber + ',"' + c_data.website + '")';
    console.log(query);
    connection.query(query, function (error, result) {
        console.log('rows', result);
        if (result) {
            console.log('here')
            res.send(JSON.stringify(result))
        } else {
            console.log(error)
            res.send(JSON.stringify(error))
        }
    });
});

module.exports = router;
