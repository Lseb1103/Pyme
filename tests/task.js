let chai = require("chai");
let chaiHttp = require("chai-http");
const Server = require("../models/server");
let server = new Server();



//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {
/* 
//Test the paginas
    
    describe("GET /api/paginas", () => {
        it("It should GET all home pages", (done) => {
            chai.request(server.app)
                .get("/api/paginas")
                .end((err, response) => {
                    response.should.have.status(401);
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
            //.send(task)
            .end((err, response) => {
                response.should.have.status(400);
                //response.body.should.be.a('object');
                //response.body.should.have.property('id').eq("63c1eb42d4c0de3b0cb26ae2");
                //response.body.should.have.property('correo').eq("lc@email.com");
                //response.body.should.have.property('password').eq(12345678);
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
                response.should.have.status(401);
            done();
            });
    });  */


// Test get products
    describe("GET /api/productos", () => {
        it("It should GET all ", (done) => {
        chai.request(server.app)
            .get("/api/productos")
            .end((err, response) => {
                response.should.have.status(401);
            done();
            });
    }); 

})
});