Recuerden que deben de ejecutar ```npm install``` para reconstruir los módulos de Node.
# El trabajado de integracion curricular consiste en:
La implementación de un backend que permita la gestión 
de inventario para las PYME en base a un proceso de 
investigación y recopilación de funcionalidades. Existen dos
funcionalidades generales: el control de bodega y cadena de 
suministros. Por otra parte, entre las acciones por defecto se 
encuentran: el registro de usuarios, login y gestión de perfiles
(administrador, empleado y empleado sucursal) los cuales 
tienen métodos CRUD para una correcta administración de la
información. 
Cabe destacar que el usuario administrador tiene la 
capacidad de realizar acciones como: 
valoración de inventario, ajustes, notificaciones, distribución, 
reportes y productos (ingreso, salida, alertas). Mientras que 
los usuarios con rol empleado pueden realizar acciones 
como: notificaciones y productos (ingreso y salida), 
los usuarios con rol empleado sucursal pueden acceder 
únicamente a realizar acciones como: notificaciones y 
reportes con sus respectivas restricciones. Por último, 
se asegura la integridad de los datos por parte del backend 
y la base de datos gracias a una serie de perfiles y roles 
previamente establecidos.
 ## Perfiles:
	**Administrador**
	**Empleado**
	**Empleado sucursal**
### Se establece para el perfil administrador:
•	Endpoints que presenten una página informativa.
•	Endpoints que permitan cerrar sesión, iniciar sesión y cambiar la contraseña.
•	Endpoints que permitan modificar los datos personales.
•	Endpoints que permitan la gestión de perfiles de usuarios.
•	Endpoints que permitan crear los productos.
•	Endpoints que permitan observar notificaciones.
•	Endpoints que permitan generar reportes de productos.
### Se establece para el perfil empleado:
•	Endpoints para modificar información personal.
•	Endpoints para el ingreso de productos.
•	Endpoints para observar notificaciones.
•	Endpoints para generar reportes.
### Se establece para el perfil empleado sucursal:
•	Endpoints para modificar información personal.
•	Endpoints que permitan observar notificaciones.
•	Endpoints para la distribución de los productos.
•	Endpoints para crear reportes de productos. 

## Manual de usuario 
[title](https://youtu.be/Ho_ghv5wFBs)
## Despliegue del backend en producción
[title](https://api-pyme-backend-production.up.railway.app/)


