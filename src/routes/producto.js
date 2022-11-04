const express = require("express");
const productoSchema = require("../models/producto");
const produ = require("../controllers/producto.controller.js");

const router = express.Router();

// create user
//esto es general para lo que tiene que ver productos y aplica lo mismo para las otras entidades
//en las properties coloca todos campos que son de los productos a excepcion del id que imagino que es automatico
//ten en cuenta la identación
/**
 * @swagger
 * components:
 *  schemas:
 *      Producto:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: nombre del producto
 *              cantidad:
 *                  type: integer
 *                  description: cantidad disponible
 *              precio:
 *                  type: double
 *                  description: precio
 *          required:
 *              - name
 *              - cantidad
 *              - precio
 *          example:
 *              name: papas
 *              cantidad: 50
 *              precio: 2.40          
 */


/**
 * @swagger
 *  /api/producto:
 *      post:
 *          summary: agregar un nuevo producto
 *          tags: [Productos]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Producto'
 *          responses:
 *              200:
 *                  description: producto creado
 *              500:
 *                  description: hubo un error en su peticion
 *                  
 */

router.post("/producto", produ.post);

// get all users
// puedes aplicar de la misma manera para los demas métodos para ir documentando todo.
/**
 * @swagger
 * /api/producto:
 *  get:
 *      summary: retorna todos los productos
 *      tags: [Productos]
 *      responses:
 *          200:
 *              description: todos los productos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Producto'
 */
router.get("/producto", produ.get);


// get a user
router.get("/producto/:id", produ.get);

// delete a user
router.delete("/producto/:id", produ.delete);

// update a user
router.put("/producto/:id", produ.put);

module.exports = router;