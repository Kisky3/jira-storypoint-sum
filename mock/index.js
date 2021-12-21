const app = require('express')();
const adminLogin = require('./data/admin_login.json');
const vipLogin = require('./data/vip_login.json');
const url = require("url");

app.get("/login", (req, res) => {
    const userType = url.parse(req.url, true).query.user;
    switch (userType) {
        case 'vip': 
            res.send(vipLogin);
            break
        case 'admin':
            res.send(adminLogin);
            break
    }
})
app.listen(3300, ()=> {
    console.log("run serve at 3300〜");
})
