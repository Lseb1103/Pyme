const PDFDocument =require('pdfkit');
const fs =require( 'fs');

const generarPdf =({mensaje})=>{
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream("./ejemplo.pdf"));
    doc.fontSize(27).text("Este es un mensaje de prueba para generar pdf"+{mensaje},100,100);
    
    doc.end();
}

module.exports={
    generarPdf,
}
