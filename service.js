var http = require('http');

class Service {

    Service(){}

    login(data){
    return new Promise((resolve, reject) =>
        {
            const options = {
                hostname: 'localhost',
                port: 8080,
                path: '/user/login',
                method: 'POST',
                json: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                }
            };
            var req = http.request(options, (res) => {
                console.log('statusCode:', res.statusCode);
                if(res.statusCode!=200){
                    reject(res.statusCode);
                }
                var b = [];
                res.on('data', (d) => {
                    b.push(d);
                    console.log("" + b);
                });

                res.on('end', () => {
                    try {
                        b = JSON.stringify(Buffer.concat(b).toString());
                    } catch (e) {
                        reject(e);
                    }
                    resolve(JSON.parse(b));
                });
            });
            req.on('error', (e) => {
                console.error(e);
                reject(e.message);
            });
            req.write(data);
            req.end();
        });
    }


    getCourses(studentId) {

        return new Promise((resolve, reject) =>
        {
            const options = {
                hostname: 'localhost',
                port: 8080,
                path: '/api/courses?studentId='+studentId,
                method: 'GET',
                json: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            var req = http.request(options, (res) => {
                console.log('statusCode:',res.statusCode);
                if(res.statusCode!=200){
                    reject(res.statusCode);
                }
                var b = [];
                res.on('data', (d) => {
                    b.push(d);

                });

                res.on('end', () => {
                    try {
                        b = JSON.stringify(Buffer.concat(b).toString());
                    } catch (e) {
                        reject(e);
                    }


                    resolve(JSON.parse(b));
                });
            });
            req.on('error', (e) => {
                console.error(e);
                reject(e.message);
            });

            req.write('data');
            req.end();
        });
    }

    postRegistration(data){

            return new Promise((resolve, reject) =>
            {
                const options = {
                    hostname: 'localhost',
                    port: 8080,
                    path: '/api/registration/submit',
                    method: 'POST',
                    json: true,
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': data.length
                    }
                };
                var req = http.request(options, (res) => {
                    console.log('statusCode:', res.statusCode);
                    if(res.statusCode!=200){
                        console.log("************ "+res.body);
                        reject(res.statusCode);
                    }
                    var b = [];
                    res.on('data', (d) => {
                        b.push(d);
                        console.log("" + b);
                    });

                    res.on('end', () => {
                        try {
                            b = JSON.stringify(Buffer.concat(b).toString());
                        } catch (e) {
                            reject(e);
                        }
                        resolve(JSON.parse(b));
                    });
                });
                req.on('error', (e) => {
                    console.error(e);
                    reject(e.message);
                });
                req.write(data);
                req.end();
            });
    }

    viewRegis(studentId){
        return new Promise((resolve, reject) =>
        {
            const options = {
                hostname: 'localhost',
                port: 8080,
                path: '/api/registration?studentId='+studentId,
                method: 'GET',
                json: true,
                query:studentId,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            var req = http.request(options, (res) => {
                console.log('statusCode:',res.statusCode);
                if(res.statusCode!=200){
                    reject(res.statusCode);
                }
                var b = [];
                res.on('data', (d) => {
                    b.push(d);

                });

                res.on('end', () => {
                    try {
                        b = JSON.stringify(Buffer.concat(b).toString());
                    } catch (e) {
                        reject(e);
                    }


                    resolve(JSON.parse(b));
                });
            });
            req.on('error', (e) => {
                console.error(e);
                reject(e.message);
            });

            req.write('data');
            req.end();
        });
    }


    putRegis(studentId,data){
        console.log("$$$$$$$$$$$$$$$ "+data);
        return new Promise((resolve, reject) =>
        {
            const options = {
                hostname: 'localhost',
                port: 8080,
                path: '/api/registration?studentId='+studentId,
                method: 'PUT',
                json: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                }
            };
            var req = http.request(options, (res) => {
                console.log('statusCode:', res.statusCode);
                if(res.statusCode!=200){
                    console.log("************ "+res.body);
                    reject(res.statusCode);
                }
                var b = [];
                res.on('data', (d) => {
                    b.push(d);
                    console.log("" + b);
                });

                res.on('end', () => {
                    try {
                        b = JSON.stringify(Buffer.concat(b).toString());
                    } catch (e) {
                        reject(e);
                    }
                    resolve(JSON.parse(b));
                });
            });
            req.on('error', (e) => {
                console.error(e);
                reject(e.message);
            });
            req.write(data);
            req.end();
        });
    }

    deleteRegis(studentId){
        return new Promise((resolve, reject) =>
        {
            const options = {
                hostname: 'localhost',
                port: 8080,
                path: '/api/registration?studentId='+studentId,
                method: 'DELETE',
                json: true,
                query:studentId,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            var req = http.request(options, (res) => {
                console.log('statusCode:',res.statusCode);
                if(res.statusCode!=200){
                    reject(res.statusCode);
                }
                var b = [];
                res.on('data', (d) => {
                    b.push(d);

                });

                res.on('end', () => {
                    try {
                        b = JSON.stringify(Buffer.concat(b).toString());
                    } catch (e) {
                        reject(e);
                    }


                    resolve(JSON.parse(b));
                });
            });
            req.on('error', (e) => {
                console.error(e);
                reject(e.message);
            });

            req.write('data');
            req.end();
        });
    }

}
module.exports = Service;