//usuarios comunes
db.usuarios.insertOne({nombre:'Diego',apellido:'Estrada',dpi:'3137307680901',usuario:'diegoe',password:'diego12',tipo_usuario:3,tarjeta:{numero:1001,monto:10500}})
db.usuarios.insert({nombre:'Jose',apellido:'Avila',dpi:'566589780901',usuario:'josea',password:'jose12',tipo_usuario:3})
db.usuarios.insert({nombre:'Anthony',apellido:'Ordoñez',dpi:'874125680901',usuario:'tonyo',password:'tony12',tipo_usuario:3})
db.usuarios.insert({nombre:'Alex',apellido:'Santos',dpi:'741457890901',usuario:'alexs',password:'alex12',tipo_usuario:3})
db.usuarios.insert({nombre:'Maria',apellido:'Palacios',dpi:'8541250901',usuario:'mariap',password:'maria12',tipo_usuario:3,tarjeta:{numero:2001,monto:8500}})


//productos del usuario diegoe
db.productos.insertMany([
    {
      id: 1,
      usuario:"3137307680901",
      nombre: "Camiseta",
      descripcion: "Camiseta de algodón de alta calidad",
      categoria: "Ropa",
      precio: 29.99
    },
    {
      id: 2,
      usuario:"3137307680901",
      nombre: "Zapatos",
      descripcion: "Zapatos deportivos para hombre",
      categoria: "Calzado",
      precio: 79.99
    },
    {
      id: 3,
      usuario:"3137307680901",
      nombre: "Mochila",
      descripcion: "Mochila resistente y duradera",
      categoria: "Accesorios",
      precio: 49.99
    },
    {
      id: 4,
      usuario:"3137307680901",
      nombre: "Pantalón",
      descripcion: "Pantalón de mezclilla para mujer",
      categoria: "Ropa",
      precio: 39.99
    },
    {
      id: 5,
      usuario:"3137307680901",
      nombre: "Reloj",
      descripcion: "Reloj digital con cronómetro",
      categoria: "Accesorios",
      precio: 19.99
    },
    {
      id: 6,
      usuario:"3137307680901",
      nombre: "Gorra",
      descripcion: "Gorra de béisbol ajustable",
      categoria: "Accesorios",
      precio: 14.99
    },
    {
      id: 7,
      usuario:"3137307680901",
      nombre: "Playera",
      descripcion: "Playera de algodón para niños",
      categoria: "Ropa",
      precio: 9.99
    },
    {
      id: 8,
      usuario:"3137307680901",
      nombre: "Sudadera",
      descripcion: "Sudadera con capucha y cierre completo",
      categoria: "Ropa",
      precio: 59.99
    },
    {
      id: 9,
      usuario:"3137307680901",
      nombre: "Calcetines",
      descripcion: "Calcetines deportivos unisex",
      categoria: "Accesorios",
      precio: 7.99
    },
    {
      usuario:"3137307680901",  id: 10,
    
      nombre: "Botas",
      descripcion: "Botas de trabajo para hombre",
      categoria: "Calzado",
      precio: 119.99
    }
  ])


//productos del usuario josea
db.productos.insertOne({
    id: 101,
    usuario:"566589780901",
    nombre: "iPhone 13",
    descripcion: "El último modelo de smartphone de Apple con pantalla Super Retina XDR, procesador A15 Bionic y cámara dual de 12 MP.",
    categoria: "Electrónica",
    precio: 999
 })
 db.productos.insertOne({
    id: 102,
    usuario:"566589780901",
    nombre: "Samsung Galaxy S21 Ultra",
    descripcion: "Un smartphone de gama alta con pantalla Dynamic AMOLED 2X, procesador Exynos 2100 y cámara cuádruple de 108 MP.",
    categoria: "Electrónica",
    precio: 1199
 })
 db.productos.insertOne({
    id: 103,
    usuario:"566589780901",
    nombre: "MacBook Air",
    descripcion: "Una laptop ultradelgada con pantalla Retina, procesador M1 de Apple y duración de batería de hasta 18 horas.",
    categoria: "Computadoras",
    precio: 999
 })
 db.productos.insertOne({
    id: 104,
    usuario:"566589780901",
    nombre: "PlayStation 5",
    descripcion: "La última consola de Sony con gráficos en 4K, SSD ultrarrápido y retrocompatibilidad con juegos de PS4.",
    categoria: "Videojuegos",
    precio: 499
 })
 db.productos.insertOne({
    id: 105,
    usuario:"566589780901",
    nombre: "AirPods Pro",
    descripcion: "Auriculares inalámbricos con cancelación activa de ruido, modo de sonido ambiente y resistencia al agua y al sudor.",
    categoria: "Electrónica",
    precio: 249
 })
 db.productos.insertOne({
    id: 106,
    usuario:"566589780901",
    nombre: "Kindle Oasis",
    descripcion: "Un lector de libros electrónicos con pantalla de 7 pulgadas, resistencia al agua y luz ajustable.",
    categoria: "Electrónica",
    precio: 269
 })
 db.productos.insertOne({
    id: 107,
    usuario:"566589780901",
    nombre: "Nike Air Force 1 '07",
    descripcion: "Zapatillas deportivas de cuero con diseño clásico, suela de goma resistente y amortiguación Air.",
    categoria: "Ropa y calzado",
    precio: 90
 })
 db.productos.insertOne({
    id: 108,
    usuario:"566589780901",
    nombre: "Canon EOS R6",
    descripcion: "Una cámara sin espejo de fotograma completo con estabilización de imagen en el cuerpo, enfoque automático avanzado y grabación de video en 4K.",
    categoria: "Fotografía",
    precio: 2499
 })
 db.productos.insertOne({
    id: 109,
    usuario:"566589780901",
    nombre: "Fitbit Charge 5",
    descripcion: "Un rastreador de actividad física con pantalla OLED, monitoreo del ritmo cardíaco y seguimiento del sueño.",
    categoria: "Salud y bienestar",
    precio: 179
 })
 db.productos.insertOne({
    id: 110,
    usuario:"566589780901",
    nombre: "Fitbit plus",
    descripcion: "Un rastreador de actividad física con pantalla OLED, monitoreo del ritmo cardíaco y seguimiento del sueño.",
    categoria: "Salud y bienestar",
    precio: 179
 })
          

//inserciones del usuario tonyo

db.productos.insertOne({
    id: 111,
    usuario:"874125680901",
    nombre: "Camiseta de algodón",
    descripcion: "Camiseta de manga corta hecha de algodón 100% orgánico",
    categoria: "Ropa",
    precio: 25.99
  });
  
  
  db.productos.insertOne({
    id: 112,
    usuario:"874125680901",
    nombre: "Pantalón vaquero",
    descripcion: "Pantalón vaquero ajustado con cinco bolsillos",
    categoria: "Ropa",
    precio: 49.99
  });
  
  
  db.productos.insertOne({
    id: 113,
    usuario:"874125680901",
    nombre: "Gafas de sol",
    descripcion: "Gafas de sol polarizadas con montura de acero inoxidable",
    categoria: "Accesorios",
    precio: 89.99
  });
  
  
  db.productos.insertOne({
    id: 114,
    usuario:"874125680901",
    nombre: "Mochila de senderismo",
    descripcion: "Mochila resistente al agua con capacidad de 50 litros",
    categoria: "Deportes",
    precio: 119.99
  });
  
  
  db.productos.insertOne({
    id: 115,
    usuario:"874125680901",
    nombre: "Batería externa",
    descripcion: "Batería externa de alta capacidad para cargar dispositivos móviles",
    categoria: "Electrónica",
    precio: 39.99
  });
  
  
  db.productos.insertOne({
    id: 116,
    usuario:"874125680901",
    nombre: "Altavoz Bluetooth",
    descripcion: "Altavoz portátil con conectividad Bluetooth y sonido estéreo",
    categoria: "Electrónica",
    precio: 79.99
  });
  
  
  db.productos.insertOne({
    id: 117,
    usuario:"874125680901",
    nombre: "Libro de cocina",
    descripcion: "Libro de recetas de cocina vegetariana",
    categoria: "Libros",
    precio: 29.99
  });
  
  
  db.productos.insertOne({
    id: 118,
    usuario:"874125680901",
    nombre: "Juego de mesa",
    descripcion: "Juego de mesa para toda la familia",
    categoria: "Juegos",
    precio: 19.99
  });
  
  
  db.productos.insertOne({
    id: 119,
    usuario:"874125680901",
    nombre: "Teclado mecánico",
    descripcion: "Teclado mecánico con retroiluminación LED y switches Cherry MX Brown",
    categoria: "Computadoras",
    precio: 99.99
  });
  
  db.productos.insertOne({
    id: 120,
    usuario:"874125680901",
    nombre: "Ratón para gaming",
    descripcion: "Ratón para gaming con sensor óptico de alta precisión y 6 botones programables",
    categoria: "Computadoras",
    precio: 59.99
  });
  


  //inserciones del usuario alexs
  // Inserción #1
db.productos.insertOne({
    id: 121,
    usuario:"741457890901",
    nombre: "Laptop Dell XPS 13",
    descripcion: "La laptop Dell XPS 13 es una de las mejores opciones para usuarios exigentes que buscan un equipo portátil de alta calidad y rendimiento.",
    categoria: "Electrónica",
    precio: 1500
  })
  
  db.productos.insertOne({
    id: 122,
    usuario:"741457890901",
    nombre: "Reloj Samsung Galaxy Watch 4",
    descripcion: "El Samsung Galaxy Watch 4 es un reloj inteligente con diseño moderno, pantalla táctil, múltiples funcionalidades y duración de batería de hasta 40 horas.",
    categoria: "Tecnología",
    precio: 400
  })
  
  db.productos.insertOne({
    id: 123,
    usuario:"741457890901",
    nombre: "Bicicleta de Montaña Trek",
    descripcion: "La bicicleta de montaña Trek es ideal para aventuras off-road, con suspensión delantera, cuadro de aluminio y frenos de disco hidráulicos.",
    categoria: "Deportes",
    precio: 900
  })
  
  db.productos.insertOne({
    id: 124,
    usuario:"741457890901",
    nombre: "Smartphone iPhone 13 Pro",
    descripcion: "El iPhone 13 Pro es uno de los mejores smartphones del mercado, con cámara triple, pantalla Super Retina XDR, procesador A15 Bionic y diseño elegante.",
    categoria: "Electrónica",
    precio: 1200
  })
  
  db.productos.insertOne({
    id: 125,
    usuario:"741457890901",
    nombre: "Smart TV LG 4K",
    descripcion: "La Smart TV LG 4K es una de las mejores opciones para disfrutar de contenido en resolución Ultra HD, con sistema operativo webOS, control por voz y conectividad WiFi.",
    categoria: "Electrónica",
    precio: 800
  })
  
  db.productos.insertOne({
    id: 126,
    usuario:"741457890901",
    nombre: "Consola PlayStation 5",
    descripcion: "La consola PlayStation 5 es el nuevo lanzamiento de Sony, con gráficos de alta calidad, juegos exclusivos y control inalámbrico DualSense.",
    categoria: "Videojuegos",
    precio: 500
  })
  
  db.productos.insertOne({
    id: 127,
    usuario:"741457890901",
    nombre: "Zapatillas Nike Air Max",
    descripcion: "Las zapatillas Nike Air Max son un clásico de la marca, con diseño cómodo, estilo retro y tecnología Air para una amortiguación óptima.",
    categoria: "Ropa y Accesorios",
    precio: 120
  })
  
  db.productos.insertOne({
    id: 128,
    usuario:"741457890901",
    nombre: "Cámara Fotográfica Canon EOS R",
    descripcion: "La cámara fotográfica Canon EOS R es una opción avanzada para fotógrafos profesionales, con sensor full-frame, sistema de enfoque automático y grabación de video en 4K.",
    categoria: "Fotografía",
    precio: 2000
  })
  
  
  db.productos.insertOne({
    id: 129,
    usuario:"741457890901",
    nombre: "Cámara Fotográfica Canon EOS R",
    descripcion: "La cámara fotográfica Canon EOS R es una opción avanzada para fotógrafos profesionales, con sensor full-frame, sistema de enfoque automático y grabación de video en 4K.",
    categoria: "Fotografía",
    precio: 2000
  })

  db.productos.insertOne({
    id: 130,
    usuario:"741457890901",
    nombre: "Cámara Fotográfica Canon EOS R",
    descripcion: "La cámara fotográfica Canon EOS R es una opción avanzada para fotógrafos profesionales, con sensor full-frame, sistema de enfoque automático y grabación de video en 4K.",
    categoria: "Fotografía",
    precio: 2000
  })

  
  
  //productos de mariap
  db.productos.insertOne({
    id: 131,
    usuario:"8541250901",
    nombre: "Camisa Polo",
    descripcion: "Camisa de algodón con cuello y botones.",
    categoria: "Ropa",
    precio: 25.99
  })
  
  db.productos.insertOne({
    id: 132,
    usuario:"8541250901",
    nombre: "Zapatos Deportivos",
    descripcion: "Zapatillas deportivas con suela antideslizante.",
    categoria: "Calzado",
    precio: 39.99
  })
  
  db.productos.insertOne({
    id: 133,
    usuario:"8541250901",
    nombre: "Laptop Acer Aspire 5",
    descripcion: "Laptop con procesador Intel Core i5 y 8 GB de RAM.",
    categoria: "Electrónica",
    precio: 799.99
  })
  
  db.productos.insertOne({
    id: 134,
    usuario:"8541250901",
    nombre: "Cámara Canon EOS Rebel T7",
    descripcion: "Cámara digital con sensor de 24.1 megapíxeles y lente EF-S 18-55mm.",
    categoria: "Electrónica",
    precio: 649.99
  })
  
  db.productos.insertOne({
    id: 135,
    usuario:"8541250901",
    nombre: "Reloj Casio G-Shock",
    descripcion: "Reloj resistente a golpes y al agua hasta 200 metros.",
    categoria: "Accesorios",
    precio: 129.99
  })
  
  db.productos.insertOne({
    id: 136,
    usuario:"8541250901",
    nombre: "Libro 'El Quijote'",
    descripcion: "Edición conmemorativa de la obra maestra de Miguel de Cervantes.",
    categoria: "Libros",
    precio: 19.99
  })
  
  db.productos.insertOne({
    id: 137,
    usuario:"8541250901",
    nombre: "Perfume Chanel No. 5",
    descripcion: "Fragancia icónica con notas de rosa y jazmín.",
    categoria: "Belleza",
    precio: 129.99
  })
  
  db.productos.insertOne({
    id: 138,
    usuario:"8541250901",
    nombre: "Maleta Samsonite Spinner",
    descripcion: "Maleta con cuatro ruedas giratorias y cerradura TSA.",
    categoria: "Equipaje",
    precio: 179.99
  })
  
  db.productos.insertOne({
    id: 139,
    usuario:"8541250901",
    nombre: "Guitarra Acústica Yamaha F310",
    descripcion: "Guitarra acústica con cuerpo de abeto y fondo y lados de meranti.",
    categoria: "Instrumentos",
    precio: 169.99
  })


  db.productos.insertOne({
    id: 149,
    usuario:"8541250901",
    nombre: "Guitarra Eléctrica SONY",
    descripcion: "Guitarra eleectrica con cuerpo de abeto y fondo y lados de meranti.",
    categoria: "Instrumentos",
    precio: 870
  })


// 2 usuarios de paqueteria
db.usuarios.insertOne({nombre:'Pedro',apellido:'Meono',dpi:'8526640901',usuario:'pedrom',password:'pedro12',tipo_usuario:2})
db.usuarios.insert({nombre:'Juan',apellido:'Munoz',dpi:'321458720901',usuario:'juanm',password:'juan12',tipo_usuario:2})


//1 administrador
db.usuarios.insert({nombre:'Javier',apellido:'Estacuy',dpi:'2147980901',usuario:'javie',password:'javi12',tipo_usuario:1})