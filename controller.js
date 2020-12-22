var service = require("./service");



class Controller {

    userLogin = ((req,res) => {
        const data = JSON.stringify({
            username: req.body.username,
            password: req.body.password
        });
        new service().login(data).then(response=>{

            res.send(response);
        }).catch(err=>{console.log(err)
        res.send(err);
        });
        });

    getCourses = ((req,res)=>{
        const studentId = req.query.studentId;
        new service().getCourses(studentId).then(response=>{
            console.log(response);
            res.send(response);
        }).catch(err=>{console.log(err)
        res.send(err);
        });
    });

    submitRegistration = ((req,res)=> {
        console.log("API"+ req);
        const data = JSON.stringify({
            studentId: req.body.studentId,
            courseList:req.body.courseList
        });
        new service().postRegistration(data).then(response=>{
            res.send(response);
        }).catch(err=>{console.log(err);
        res.send(err);
        })
    })

    viewRegistration = ((req,res)=>{
        const studentId = req.query.studentId;

        new service().viewRegis(studentId).then(response=>{
            console.log(response);
            res.send(response);
        }).catch(err=>{console.log(err)
        res.send(err);
        });
    });

    updateRegistration=((req,res)=>{
        const studentId = req.query.studentId
        const data= JSON.stringify(req.body)
       new service().putRegis(studentId,data).then(response=>{
           res.send(response);
       }).catch(err=>{res.send(err);});
    });

    deleteRegistration = ((req,res)=>{
    const studentId = req.query.studentId;
        new service().deleteRegis(studentId).then(response=>{
            console.log(response);
            res.send(response);
        }).catch(err=>{console.log(err)
            res.send(err);
        });
    });

}

module.exports = Controller;
