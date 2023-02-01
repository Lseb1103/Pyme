
const faker = require('@faker-js/faker');
//import { faker } from '@faker-js/faker';

const Usuario = require('../../models/usuario');

module.exports = async() => {
    for (let i=0 ;i <= 10; i++){
        const usuarios = new Usuario ({
            nombre: faker.name.FirstName()
           // apellido: faker.name.lasttName(),
            //correo: faker.random.number(50),
        });
        //console.log(newUsuario);
        await new Usuario.save
    }
    
};
