let chai = require("chai");
let chaiHttp = require("chai-http");
const Server = require("../models/server");
let server = new Server();



//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Test API', () => {
    
//Test the paginas
    
    describe("GET /api/paginas", () => {
        it("It should GET all home pages", (done) => {
            chai.request(server.app)
                .get("/api/paginas")
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                });
        });

        it("It should NOT GET all home pages", (done) => {
            chai.request(server.app)
                .get("/api/paginas")
                .end((err, response) => {
                    response.should.have.status(401);
                done();
                });
        });

    });

// Test the login

    describe("POST /api/auth/login", () => {
        it("It should POST login", (done) => {
        const task = {
            correo: "lc@email.com",
            password: "12345678",
        };
        chai.request(server.app)                
            .post("/api/auth/login")
            .send(task)
            .end((err, response) => {
                response.should.have.status(201);
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq("63c1eb42d4c0de3b0cb26ae2");
                response.body.should.have.property('correo').eq("lc@email.com");
                response.body.should.have.property('password').eq(12345678);
            done();
            });
    });

        it("It should POST change password", (done) => {
        const task = {
            password: "12345678",
        };
        chai.request(server.app)                
            .post("/api/auth/login")
            //.send(task)
            .end((err, response) => {
                response.should.have.status(400);
                //response.body.should.be.a('object');
                //response.body.should.have.property('id').eq("63c1eb42d4c0de3b0cb26ae2");
                //response.body.should.have.property('password').eq(12345678);
            done();
            });
    });
    });
    

//Test the usuarios (by id) 

    describe("PUT /api/usuarios/:id", () => {
        it("It should PUT a users", (done) => {
        const taskId = "63c702c90391aa2ae4ea238b";
        const task = {
            name: "Luis",
            apellido: "Catota",
            correo: "lkj@email.com",
        };
        chai.request(server.app)                
            .put("/api/usuarios/:id" + taskId)
            //.send(task)
            .end((err, response) => {
                //response.should.have.status(404);
                //response.body.should.have.property('id').eq("63c702c90391aa2ae4ea238b");
                //response.body.should.have.property('name').eq("Luis");
                //response.body.should.have.property('apellido').eq("Catota");
                //response.body.should.have.property('correo').eq("lkj@email.com");
            done();
            });
    });
});

// Test Delete usuarios

    describe("DELETE /api/usuarios/:id", () => {
        it("It should DELETE an existing users", (done) => {
        const taskId = "63c702e90391aa2ae4ea238f";
        chai.request(server.app)                
            .delete("/api/usuarios/:id" + taskId)
            .end((err, response) => {
                response.should.have.status(202);
            done();
            });
    });  
});


// Test get products

    describe("GET /api/productos", () => {
        it("It should GET all productos", (done) => {
        chai.request(server.app)
            .get("/api/productos")
            .end((err, response) => {
                response.should.have.status(200);
            done();
            });
        });
    });

// Test get notificaciones

    describe("GET /api/notificaciones", () => {
        it("It should GET all notificaciones", (done) => {
            chai.request(server.app)
                .get("/api/notificaciones")
                .end((err, response) => {
                    response.should.have.status(200);
    
                done();
                });
        });
    });
// Test get reporte general

    describe("GET /api/stock", () => {
        it("It should GET reporteGeneral", (done) => {
            chai.request(server.app)
                .get("/api/notificaciones")
                .end((err, response) => {
                    response.should.have.status(200);

                done();
                });
        });
});
        

//Test the PUT usuario sucursal


    describe("PUT /api/usuarios/:id", () => {
        it("It should PUT a users", (done) => {
        const taskId = "63c1f057741b2d402cb4d12d";
        const task = {
            name: "Carlos",
            apellido: "Mendez",
        };
        chai.request(server.app)                
            .put("/api/usuarios/:id" + taskId)
            .send(task)
            .end((err, response) => {
                response.should.have.status(401);
                //response.body.should.have.property('id').eq("63c1f057741b2d402cb4d12d");
                //response.body.should.have.property('name').eq("Carlos");
                //response.body.should.have.property('apellido').eq("Mendez");
            done();
            });
    });
});

//Test the POST orden de ingreso

    describe("POST /api/ordenes", () => {
        it("It should POST ordenes de ingreso", (done) => {
        const task = {
            id: "63b88ef0aeeb0c6becbc81ae",
            cantidad: 20,
            operacion: "Ingreso",
            sucursal: "Supermaxi"
        };
        chai.request(server.app)                
            .post("/api/ordenes")
            .send(task)
            .end((err, response) => {
                response.should.have.status(500);
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq("163b88ef0aeeb0c6becbc81ae");
                response.body.should.have.property('cantidad').eq(20);
                response.body.should.have.property('operacion').eq("Ingreso");
                response.body.should.have.property('sucursal').eq("Supermaxi");
            done();
            });
    });
});
// Test get notificaciones del empleado sucursal

    describe("GET /api/notificaciones", () => {
        it("It should GET all notificaciones del empleado sucursal", (done) => {
        chai.request(server.app)
            .get("/api/notificaciones")
            .end((err, response) => {
                response.should.have.status(200);

            done();
            });
    });
});

// Test get de ordenes de ingreso

    describe("GET /api/ordenes/ingreso", () => {
        it("It should GET all ordenes de ingreso", (done) => {
        chai.request(server.app)
            .get("/api/notificaciones")
            .end((err, response) => {
                response.should.have.status(200);

            done();
            });
    });
});


//Test the PUT usuario empleado

    describe("PUT /api/usuarios/:id", () => {
        it("It should PUT a users", (done) => {
        const taskId = "63c702e90391aa2ae4ea238f";
        const task = {
            name: "Esteban",
            apellido: "Tipan",
        };
        chai.request(server.app)                
            .put("/api/usuarios/:id" + taskId)
            .send(task)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.have.property('id').eq("63c702e90391aa2ae4ea238f");
                esponse.body.should.have.property('name').eq("Esteban");
                response.body.should.have.property('apellido').eq("Tipan");
            done();
            });
    });
});
// Test get notificaciones del empleado 

    describe("GET /api/notificaciones", () => {
        it("It should GET all notificaciones del empleado", (done) => {
        chai.request(server.app)
            .get("/api/notificaciones")
            .end((err, response) => {
                response.should.have.status(200);

            done();
            });
         });

    });

//Test the POST orden de salida

    describe("POST /api/ordenes", () => {
        it("It should POST ordenes salida", (done) => {
            const task = {
                id: "63b88ef0aeeb0c6becbc81ae",
                cantidad: 20,
                operacion: "Salida",
                sucursal: "Aki"
            };
            chai.request(server.app)                
                .post("/api/ordenes")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq("163b88ef0aeeb0c6becbc81ae");
                    response.body.should.have.property('cantidad').eq(20);
                    response.body.should.have.property('operacion').eq("Salida");
                    response.body.should.have.property('operacion').eq("Aki");
                done();
                });
        });
    });

    describe("GET /api/ordenes/salida", () => {
        it("It should GET all the salidas", (done) => {
            chai.request(server.app)
                .get("/api/notificaciones")
                .end((err, response) => {
                    response.should.have.status(200);
    
                done();
                });
        });

});

});
