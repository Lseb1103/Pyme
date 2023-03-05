
    /**
     * Test the login
     */
    /*
    describe("POST /api/auth/login", () => {
        
        it("Post login respond a json with contain a user", (done) => {
            data = {
              email: "lc@email.com",
              password: "12345678",
            };
            chai.request(server.app)
              .post("/api/auth/login")
              .send(data)
              //.set("Accept", "application/json")
              //.expect("Content-Type", /json/)
              .end((err, response) => {
                response.should.have.status(400);

            done();
          });

        });

    });
*/
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
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq("63c1eb42d4c0de3b0cb26ae2");
                response.body.should.have.property('correo').eq("lc@email.com");
                response.body.should.have.property('password').eq(12345678);
            done();
            });
    });

    it("It should POST change password ", (done) => {
        const task = {
            password: "12345678",
        };
        chai.request(server.app)                
            .post("/api/auth/login")
            .send(task)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq("63c1eb42d4c0de3b0cb26ae2");
                response.body.should.have.property('password').eq(12345678);
            done();
            });
    });
/*
    it("It should NOT POST a new task without the name property", (done) => {
        const task = {
            completed: false
        };
        chai.request(server)                
            .post("/api/tasks")
            .send(task)
            .end((err, response) => {
                response.should.have.status(400);
                response.text.should.be.eq("The name should be at least 3 chars long!");
            done();
            });
    });
*/
});

/**
 * Test the GET route
 */

describe("GET /api/paginas", () => {
    it("It should GET all the tasks", (done) => {
        chai.request(server.app)
            .get("/api/paginas")
            .end((err, response) => {
                response.should.have.status(200);

            done();
            });
    });

    it("It should NOT GET all the tasks", (done) => {
        chai.request(server.app)
            .get("/api/paginas")
            .end((err, response) => {
                response.should.have.status(401);
            done();
            });
    });

});


/**
 * Test the GET (by id) route
 */

describe("GET /api/paginas/:id", () => {
    it("It should GET a task by ID", (done) => {
        const taskId = "63b8316d8098c05608983ba0";
        chai.request(server.app)                
            .get("/api/tasks/" + taskId)
            .end((err, response) => {
                response.should.have.status(404);
                response.body.should.be.a('object');
                //response.body.should.have.property('id');
                //response.body.should.have.property('name');
                //response.body.should.have.property('completed');
                //response.body.should.have.property('id').eq(63b8316d8098c05608983ba0);
            done();
            });
    });

    it("It should NOT GET a task by ID", (done) => {
        const taskId = 123;
        chai.request(server.app)                
            .get("/api/tasks/" + taskId)
            .end((err, response) => {
                response.should.have.status(404);
                response.text.should.be.eq("The task with the provided ID does not exist.");
            done();
            });
    });

});


/**
 * Test the POST route
 */
/*
describe("POST /api/auth", () => {
    it("It should POST a new task", (done) => {
        const task = {
            name: "Task 4",
            completed: false
        };
        chai.request(server)                
            .post("/api/tasks")
            .send(task)
            .end((err, response) => {
                response.should.have.status(201);
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq(4);
                response.body.should.have.property('name').eq("Task 4");
                response.body.should.have.property('completed').eq(false);
            done();
            });
    });

    it("It should NOT POST a new task without the name property", (done) => {
        const task = {
            completed: false
        };
        chai.request(server)                
            .post("/api/tasks")
            .send(task)
            .end((err, response) => {
                response.should.have.status(400);
                response.text.should.be.eq("The name should be at least 3 chars long!");
            done();
            });
    });

});
*/

/**
 * Test the PUT route
 */

describe("PUT /api/usuarios/:id", () => {
    it("It should PUT a users", (done) => {
        const taskId = "63c702c90391aa2ae4ea238b";
        const task = {
            name: "Luis",
            apellido: "Catota",
            correo: "lkj@email.com",
        };
        chai.request(server.app)                
            .put("/api/tasks/" + taskId)
            .send(task)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.have.property('id').eq("63c702c90391aa2ae4ea238b");
                response.body.should.have.property('name').eq("Luis");
                response.body.should.have.property('apellido').eq("Catota");
                response.body.should.have.property('correo').eq("lkj@email.com");
            done();
            });
    });

    it("It should NOT PUT an existing task with a name with less than 3 characters", (done) => {
        const taskId = 1;
        const task = {
            name: "Ta",
            completed: true
        };
        chai.request(server)                
            .put("/api/tasks/" + taskId)
            .send(task)
            .end((err, response) => {
                response.should.have.status(400);
                response.text.should.be.eq("The name should be at least 3 chars long!");
            done();
            });
    });        
});


/**
 * Test the PATCH route
 */
/*
describe("PATCH /api/tasks/:id", () => {
    it("It should PATCH an existing task", (done) => {
        const taskId = 1;
        const task = {
            name: "Task 1 patch"
        };
        chai.request(server)                
            .patch("/api/tasks/" + taskId)
            .send(task)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq(1);
                response.body.should.have.property('name').eq("Task 1 patch");
                response.body.should.have.property('completed').eq(true);
            done();
            });
    });

    it("It should NOT PATCH an existing task with a name with less than 3 characters", (done) => {
        const taskId = 1;
        const task = {
            name: "Ta"
        };
        chai.request(server)                
            .patch("/api/tasks/" + taskId)
            .send(task)
            .end((err, response) => {
                response.should.have.status(400);
                response.text.should.be.eq("The name should be at least 3 chars long!");
            done();
            });
    });        
});

*/
/**
 * Test the DELETE route
 */

describe("DELETE /api/usuarios/:id", () => {
    it("It should DELETE an existing task", (done) => {
        const taskId = "63c702e90391aa2ae4ea238f";
        chai.request(server.app)                
            .delete("/api/usuarios/:id" + taskId)
            .end((err, response) => {
                response.should.have.status(217);
            done();
            });
    });

    it("It should NOT DELETE a task that is not in the database", (done) => {
        const taskId = 145;
        chai.request(server)                
            .delete("/api/tasks/" + taskId)
            .end((err, response) => {
                response.should.have.status(404);
                response.text.should.be.eq("The task with the provided ID does not exist.");
            done();
            });
    });

});

/**
 * Test the GET productos
 */

describe("GET /api/productos/", () => {
    it("It should GET all the tasks", (done) => {
        chai.request(server.app)
            .get("/api/productos/")
            .end((err, response) => {
                response.should.have.status(200);

            done();
            });
    });

    it("It should NOT GET all the tasks", (done) => {
        chai.request(server.app)
            .get("/api/paginas")
            .end((err, response) => {
                response.should.have.status(401);
            done();
            });
    });

});        

/**
 * Test GET notificaciones 
 */

describe("GET /api/notificaciones", () => {
    it("It should GET all the tasks", (done) => {
        chai.request(server.app)
            .get("/api/notificaciones")
            .end((err, response) => {
                response.should.have.status(201);

            done();
            });
    });

    it("It should NOT GET all the tasks", (done) => {
        chai.request(server.app)
            .get("/api/paginas")
            .end((err, response) => {
                response.should.have.status(401);
            done();
            });
    });

}); 
    /**
 * Test the GET reporte general
 */

    describe("GET /api/stock", () => {
        it("It should GET reporteGeneral", (done) => {
            chai.request(server.app)
                .get("/api/reporte/reporteGeneral")
                .end((err, response) => {
                    response.should.have.status(200);

                done();
                });
        });

        it("It should NOT GET all the tasks", (done) => {
            chai.request(server.app)
                .get("/api/paginas")
                .end((err, response) => {
                    response.should.have.status(401);
                done();
                });
        });

    }); 

/**
 * Test the PUT usuario sucursal
 */

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
                    response.should.have.status(200);
                    response.body.should.have.property('id').eq("63c1f057741b2d402cb4d12d");
                    response.body.should.have.property('name').eq("Carlos");
                    response.body.should.have.property('apellido').eq("Mendez");
                done();
                });
        });

        it("It should NOT PUT an existing task with a name with less than 3 characters", (done) => {
            const taskId = 1;
            const task = {
                name: "Ta",
                completed: true
            };
            chai.request(server)                
                .put("/api/tasks/" + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq("The name should be at least 3 chars long!");
                done();
                });
        });        
    });

/**
 * Test the POST orden de ingreso
 */

describe("POST /api/ordenes", () => {
    it("It should POST a new task", (done) => {
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
                response.should.have.status(201);
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq("163b88ef0aeeb0c6becbc81ae");
                response.body.should.have.property('cantidad').eq(20);
                response.body.should.have.property('operacion').eq("Ingreso");
                response.body.should.have.property('operacion').eq("Supermaxi");
            done();
            });
    });

    it("It should NOT POST a new task without the name property", (done) => {
        const task = {
            completed: false
        };
        chai.request(server)                
            .post("/api/tasks")
            .send(task)
            .end((err, response) => {
                response.should.have.status(400);
                response.text.should.be.eq("The name should be at least 3 chars long!");
            done();
            });
    });

});

/**
 * Test the POST orden de salida
 */

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
                response.should.have.status(201);
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq("163b88ef0aeeb0c6becbc81ae");
                response.body.should.have.property('cantidad').eq(20);
                response.body.should.have.property('operacion').eq("Salida");
                response.body.should.have.property('operacion').eq("Aki");
            done();
            });
    });

    it("It should NOT POST a new task without the name property", (done) => {
        const task = {
            completed: false
        };
        chai.request(server)                
            .post("/api/tasks")
            .send(task)
            .end((err, response) => {
                response.should.have.status(400);
                response.text.should.be.eq("The name should be at least 3 chars long!");
            done();
            });
    });

});

/**
 * Test the PUT usuario sucursal
 */

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
                response.body.should.have.property('name').eq("Esteban");
                response.body.should.have.property('apellido').eq("Tipan");
            done();
            });
    });

    it("It should NOT PUT an existing task with a name with less than 3 characters", (done) => {
        const taskId = 1;
        const task = {
            name: "Ta",
            completed: true
        };
        chai.request(server)                
            .put("/api/tasks/" + taskId)
            .send(task)
            .end((err, response) => {
                response.should.have.status(400);
                response.text.should.be.eq("The name should be at least 3 chars long!");
            done();
            });
    });        
});

describe("GET /api/ordenes/salida", () => {
    it("It should GET all the salidas", (done) => {
        chai.request(server.app)
            .get("/api/ordenes/salida")
            .end((err, response) => {
                response.should.have.status(201);

            done();
            });
    });

    it("It should NOT GET all the tasks", (done) => {
        chai.request(server.app)
            .get("/api/paginas")
            .end((err, response) => {
                response.should.have.status(401);
            done();
            });
    });
})

describe("GET /api/ordenes/salida", () => {
    it("It should GET all ordenes de salida", (done) => {
        chai.request(server.app)
            .get("/api/ordenes/ingreso")
            .end((err, response) => {
                response.should.have.status(201);

            done();
            });
    });

    it("It should NOT GET all the tasks", (done) => {
        chai.request(server.app)
            .get("/api/ordenes/ingreso")
            .end((err, response) => {
                response.should.have.status(401);
            done();
            });
    });
})
/*
 * Test the POST orden de salida


    describe("POST /api/ordenes", () => {
        it("It should POST a new task", (done) => {
            const task = {
                id: "63d30a2abf19000c84b218bf",
                cantidad: 10,
                operacion: "Salida",
                sucursal: "tiendita"
            };
            chai.request(server.app)                
                .post("/api/ordenes")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq("63d30a2abf19000c84b218bf");
                    response.body.should.have.property('Salida').eq(10);
                    response.body.should.have.property('operacion').eq("Salida");
                    response.body.should.have.property('operacion').eq("tiendita");
                done();
                });
        });

        it("It should NOT POST a new task without the name property", (done) => {
            const task = {
                completed: false
            };
            chai.request(server)                
                .post("/api/tasks")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq("The name should be at least 3 chars long!");
                done();
                });
        });

    });
});
*/