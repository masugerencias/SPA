#DROP DATABASE proyectspa;

    CREATE DATABASE proyectspa;
    
    USE proyectspa;
    
    
    #DROP TABLE usuarios;
    CREATE TABLE usuarios(
        id_usuario INT AUTO_INCREMENT,
        nombre VARCHAR(100),
        apellido VARCHAR(200),
        email VARCHAR(100),
        contrasena VARCHAR(100) NOT NULL,
        username VARCHAR (20) NOT NULL,
        empleado boolean,
		PRIMARY KEY(id_usuario)

    ); 
    
   
    CREATE TABLE pruebas(
        id_prueba INT AUTO_INCREMENT,
        fechainicio DATE,
        fechafin DATE,
        nombreprueba VARCHAR(200),
        precio INT,
        tipo VARCHAR(30),
        descripcion VARCHAR (1000),
        participantes_max int,
		PRIMARY KEY(id_prueba)
    );
    
    #DROP TABLE usuario_pruebas;
    CREATE TABLE usuario_pruebas(
        id_usuario_pruebas INT AUTO_INCREMENT, #tambien se utiliza como codigo de inscripcion
        fk_usuario INT,
		fk_pruebas INT,
        tarjeta BIGINT(100),
        dorsal INT(100),
        estado boolean,				#para saber si el dorsal ha sido entregado o no
		PRIMARY KEY(id_usuario_pruebas),
        FOREIGN KEY (fk_usuario) REFERENCES usuarios(id_usuario),
		FOREIGN KEY (fk_pruebas) REFERENCES pruebas(id_prueba)
    ); 
    
         SELECT * FROM usuarios;
		SELECT * FROM usuario_pruebas;
SELECT * FROM pruebas;
    INSERT INTO pruebas VALUES (NULL, "2022-01-15","2022-01-16", "RUN Race 2022", "50", "running", "El test consiste en correr durante 6 minutos en llano a la máxima intensidad posible. Prepara tu pulsómetro GPS, calienta… ¡y a por ello! ","10");
	INSERT INTO pruebas VALUES (NULL, "2022-04-05","2022-04-7", "NAT Race 2022", "60", "natación", "Se utilizan cuatro estilos de natación en las competiciones olímpicas: libre, espalda, braza y mariposa. Las competiciones de mariposa, espalda y braza tienen distancias de 100 y 200 m.","10");
	INSERT INTO pruebas VALUES (NULL, "2022-06-20","2022-06-25", "TRI Race 2022", "100", "triatlón", "on tres actividades deportivas incluidas en el triatlón: natación, bicicleta y las carreras a pie. Este es el orden de las disciplinas que se deben de desarrollar. La primera prueba del triatlón, la natación, se realiza en aguas abiertas, donde se debe delimitar el recorrido, que es de aproximadamente 1.500 metros, según el triatlón olímpico.","4");
SELECT * FROM usuarios;
INSERT INTO usuarios VALUES (null, "juan","vale", "javier@gmail.com", "$2a$10$lj3VOkVSqGz.WZUd8fFm6.PxDN8XnmYw4uUS6eccmdduX9mRQIb3m", "javier", true);
    INSERT INTO usuario_pruebas values (NULL, 1, 1, 1234567812345678, 1, true);
    INSERT INTO usuario_pruebas values (NULL, 1, 2, 1234567812345678, 2, false);
    INSERT INTO usuario_pruebas values (NULL, 1, 2, 1234567812345678, 3, false);