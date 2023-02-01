
const express = require("express");
const { response } = require('express');
const Reporte = require("../models/reporte");
//const axios = require('axios');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const stock = require("../models/stock");
const router = require("../routes/reporte");
const fetch = require('node-fetch-commonjs');
const { Producto } = require("../models");

//db.createCollection('reporte');

/*
let listar = (req, res) => {
   Venta.find({})
       .populate("productos.productos")
       .exec((err, data) => {
           res.json(data);
       });
}
*/
const reporteGeneral = async (req, res = response) => {

    //consultar stock
    let response = await fetch("http://localhost:8080/api/stock");

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let  RG= await response.json();
        //generarPdfGeneral({ mensaje: json });
        // console.log('json: ', json)
        res.json(RG); 
    } else {
        alert("HTTP-Error: " + response.status);
    }
    

}

const generarPdfGeneral= ({ mensaje }) => {
    //1. Consultar a stock y obtener el json que nos responde  (stock) typeof: object 
    //2. iterar en el total que nos trae el objeto (stock.total)
    try {
        let string ="----------------------------- REPORTE GENERAL -------------------------\nProductos y cantidad en existencias";

    for (let i = 0; i < mensaje.total; i++) {
        string =string.concat("\n",mensaje.stock[i].nombre," : ", mensaje.stock[i].cantidad,"\n","-".repeat(40));        
     }
     let timestamp = Date.now();
     const doc = new PDFDocument();
     doc.pipe(fs.createWriteStream( `../pdfs/RG-${timestamp}.pdf`));
     doc.fontSize(15).text(` \n \n${string}`, 100, 100);
     doc.end();
    //console.log(mensaje);
       
    } catch (error) {
        console.error("Error al generar pdf: ", error)
    }

}


const reporteCompras = async(req, res = response) => {

    const query = {cantidad: 0}
    
    const [productos] = await Promise.all([
        Producto.find(query)
    ])
    

    const comprasPdf = {
        total: productos.length,
        stock: [
            productos[0]
        ]
    }
    res.json(comprasPdf);
    try {
        let string ="----------------------------- REPORTE COMPRA -------------------------\nProductos por comprar";
        string =string.concat("\n",comprasPdf.stock[0].nombre,"\n","-".repeat(40))

     let timestamp = Date.now();
     const doc = new PDFDocument();
     doc.pipe(fs.createWriteStream( `../pdfs/RC-${timestamp}.pdf`));
     doc.fontSize(15).text(` \n \n${string}`, 100, 100);
     doc.end();
    //console.log(mensaje);
       
    } catch (error) {
        console.error("Error al generar pdf: ", error)
    }
    res.json( msg =" PDF RC creado"); 
    
    //console.log('productos cero: ', productos)
    //console.log('comprasPdf: ', comprasPdf)
    //const prueba = comprasPdf.stock;
    
    //console.log('salida: ', comprasPdf.stock[0].nombre)

    // generarPdf(comprasPdf)
/*
    res.status(201).json({msg: "ok"})
    // res.status(201).json(msg = "ok")
   */ 
}
const reporteSalida = async (req, res = response) => {

let response = await fetch("http://localhost:8080/api/ordenes");

    if (response.ok) { 

        //let RS = await Promise.all();
        //generarPdfSalida({ salidas: json });
        // console.log('json: ', json)
        let  RS= await response.json();
        res.json(RS); 

    } 
    //else {
     //   alert("HTTP-Error: " + response.status);
   // }
    

};

const generarPdfSalida = ({ salidas }) => {

    try {
        let string ="----------------------------- REPORTE DE SALIDA -------------------------\nProductos y cantidad que salio";
        for (let i = 0; i < salidas.length; i++) {
            string =string.concat("\n",salidas[i].productoNombre," : ", salidas[i].cantidad,"\n","-".repeat(40));        
         }

     let timestamp = Date.now();
     const doc = new PDFDocument();
     doc.pipe(fs.createWriteStream( `../pdfs/RS-${timestamp}.pdf`));
     doc.fontSize(15).text(` \n \n${string}`, 100, 100);
     doc.end();
    //console.log(salidas);
       
    } catch (error) {
        console.error("Error al generar pdf: ", error)
    }
    
    //console.log('productos cero: ', productos)
    //console.log('comprasPdf: ', comprasPdf)
    //const prueba = comprasPdf.stock;
    
    //console.log('salida: ',salida.ordenes[0].nombre)

    // generarPdf(comprasPdf)
/*
    res.status(201).json({msg: "ok"})
    // res.status(201).json(msg = "ok")
   */ 
}

module.exports = {
    reporteGeneral,
    reporteCompras,
    reporteSalida,
    generarPdfGeneral,
    generarPdfSalida
}
