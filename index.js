var pdf = require("html-pdf");
var ejs = require("ejs");

var nomeUsuario = "PAULO";
var curso = "Análise e Desenvolv. de Sistemas";
var categoria = "Tecnólogo";

ejs.renderFile("./index.ejs",{nome: nomeUsuario, curso: curso, categoria: categoria}, (err, html) => {
    if(err){
        console.log(err);
    }
    else{
        pdf.create(html,{}).toFile("./meupdf.pdf",(err, res) => {
        if(err){
            console.log("Houver um erro...");
        }
        else{
            console.log(res);
        }
    });
    }
});

