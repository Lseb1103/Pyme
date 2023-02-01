import pdf, { CreateOptions }from "html-pdf";
import fs from 'fs';
var html = fs.readFileSync('../tpl/formato.html','utf8');

const options: CreateOptions={
    "format": "Letter",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    "orientation": "portrait", // portrait or landscape
}

/*
const generarPDF = () => {
        pdf.create(html, options).toFile('../pdf/html-pdf.pdf', function(err, res) {
            if (err){
                console.log(err);
            } else {
        
                console.log(res);
            }
        });

    };


module.exports = {
    generarPDF
}
*/
