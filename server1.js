const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/form',(request,response) =>{
    response.render('form');
});


app.post('/form', (request,response) => {

        const {
            name,
            Mname,
            Lname,
            Email,
            phone,
            gender
             } = request.body;

        console.log(`
            Name : ${name}
            Mname:${Mname}
            Lname:${Lname}
            Email:${Email}
            phone:${phone}
        
            Gender:${gender}
        `);
    response.render("success");
        });


app.listen(9000, () => {
    console.log("my 1st task server is creted successfully...");
});