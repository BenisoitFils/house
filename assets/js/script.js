const propiedadesVenta = [
  {
    nombre: 'Apartamento Elegante en Centro',
    src: 'foto1.jpg',
    descripcion: 'Moderno apartamento ubicado en el corazón de la ciudad. Totalmente amueblado y equipado con todas las comodidades para una estancia confortable.',
    ubicacion: 'Centro de la ciudad',
    habitaciones: 2,
    costo: 2500,
    fumadores: false,
    mascotas: true
  },
  {
    nombre: 'Apartamento de Lujo con Vista al Mar',
    src: 'foto6.webp',
    descripcion: 'Exquisito apartamento frente al mar con vistas panorámicas. Diseño elegante y comodidades de alta gama para una experiencia de vida única.',
    ubicacion: 'Frente al mar',
    habitaciones: 3,
    costo: 4500,
    fumadores: false,
    mascotas: false
  },
  {
    nombre: 'Casa Familiar con Jardín Espacioso',
    src: 'foto3.jpeg',
    descripcion: 'Amplia casa familiar con un jardín grande y hermoso. Perfecto para aquellos que buscan un hogar cómodo en un vecindario tranquilo.',
    ubicacion: 'Zona residencial',
    habitaciones: 4,
    costo: 3800,
    fumadores: true,
    mascotas: true
  },
  {
    nombre: 'Piso Moderno en Edificio Histórico',
    src: 'foto4.jpg',
    descripcion: 'Elegante piso ubicado en un edificio histórico restaurado. Combinación perfecta de encanto antiguo y comodidades contemporáneas.',
    ubicacion: 'Centro histórico',
    habitaciones: 2,
    costo: 3200,
    fumadores: false,
    mascotas: false
  },
  {
    nombre: 'Ático Lujoso con Piscina Privada',
    src: 'foto5.webp',
    descripcion: 'Exclusivo ático con una piscina privada en la azotea. Vistas impresionantes de la ciudad y el horizonte.',
    ubicacion: 'Zona exclusiva',
    habitaciones: 3,
    costo: 5500,
    fumadores: false,
    mascotas: true
  },
  {
    nombre: 'Casa de Campo con Vistas a la Montaña',
    src: 'foto2.webp',
    descripcion: 'Encantadora casa de campo con vistas a las montañas. Ideal para los amantes de la naturaleza y la tranquilidad.',
    ubicacion: 'Montañas',
    habitaciones: 3,
    costo: 3000,
    fumadores: true,
    mascotas: true
  }
];

const propiedadesAlquiler = [
  {
    nombre: 'Estudio Moderno en el Centro',
    src: 'foto11.jpg',
    descripcion: 'Acogedor apartamento ubicado en una zona céntrica. Totalmente amueblado y equipado con todas las comodidades para una estancia cómoda.',
    ubicacion: 'Centro de la ciudad',
    habitaciones: 1,
    costo: 1200,
    fumadores: false,
    mascotas: true
  },
  {
    nombre: 'Piso Espacioso con Terraza',
    src: 'foto9.jpg',
    descripcion: 'Amplio piso con una gran terraza privada y vistas panorámicas. Ideal para aquellos que buscan un espacio al aire libre en el centro de la ciudad.',
    ubicacion: 'Zona exclusiva',
    habitaciones: 3,
    costo: 2500,
    fumadores: false,
    mascotas: false
  },
  {
    nombre: 'Chalet Adosado en Urbanización',
    src: 'foto10.jpg',
    descripcion: 'Luminoso chalet adosado situado en una urbanización tranquila. Con jardín privado y piscina comunitaria, perfecto para familias.',
    ubicacion: 'Urbanización',
    habitaciones: 4,
    costo: 3000,
    fumadores: false,
    mascotas: true
  },
  {
    nombre: 'Estudio Acogedor Cerca de la Playa',
    src: 'foto2.webp',
    descripcion: 'Encantador estudio a pocos pasos de la playa. Ideal para parejas o personas que buscan un lugar tranquilo cerca del mar.',
    ubicacion: 'Costa',
    habitaciones: 1,
    costo: 900,
    fumadores: true,
    mascotas: false
  },
  {
    nombre: 'Ático con Vistas al Mar',
    src: 'foto12.jpg',
    descripcion: 'Espectacular ático con vistas al mar en todas las habitaciones. Totalmente amueblado y con amplia terraza, perfecto para disfrutar del clima mediterráneo.',
    ubicacion: 'Costa',
    habitaciones: 2,
    costo: 1800,
    fumadores: false,
    mascotas: true
  },
  {
    nombre: 'Casa Rural con Encanto',
    src: 'foto1.jpg',
    descripcion: 'Acogedora casa rural situada en un entorno natural privilegiado. Ideal para aquellos que buscan desconectar y disfrutar de la tranquilidad del campo.',
    ubicacion: 'Campo',
    habitaciones: 3,
    costo: 2000,
    fumadores: false,
    mascotas: true
  }
];

const ruta = window.location.pathname;
const directorio = ruta.substring(0, ruta.lastIndexOf('/'));

const contenedorPropiedadesVenta = document.getElementById('propiedades_venta');
const contenedorPropiedadesAlquiler = document.getElementById('propiedades_alquiler');

if (ruta.includes('propiedades_venta.html')) {
  mostrarPropiedades(propiedadesVenta, "V");
} else if (ruta.includes('propiedades_alquiler.html')) {
  mostrarPropiedades(propiedadesAlquiler, "A");
} else {
  mostrarPropiedades(propiedadesVenta.slice(0, 3), "V");
  mostrarPropiedades(propiedadesAlquiler.slice(0, 3), "A");
}

function mostrarPropiedades(propiedades, tipo) {
  if (tipo == "V") {
    contenedorPropiedadesVenta.innerHTML = `<h2>Propiedades en venta</h2><div class="row"></div>`;
    const fila = document.querySelector('.row');
    for (let articulo of propiedades) {
      fila.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${directorio}/assets/img/${articulo.src}" class="card-img-top" alt="${articulo.nombre}" />
                <div class="card-body">
                    <h5 class="card-title">${articulo.nombre}</h5>
                    <p class="card-text">${articulo.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${articulo.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${articulo.habitaciones} Habitaciones</p>
                    <p><i class="fas fa-dollar-sign"></i> ${articulo.costo}</p>
                    ${articulo.fumadores ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                    ${articulo.mascotas ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
                </div>
            </div>
        </div>`;
    }
    if (!ruta.includes('propiedades_venta.html')) {
      contenedorPropiedadesVenta.innerHTML += `<div class="contenedor-btn">
       <a href="./propiedades_venta.html" class="btn btn-dark btn-personalizado">Ver todas las propiedades en venta</a></div>`;
    }
  } else {
    contenedorPropiedadesAlquiler.innerHTML = `<div class="row"></div>`;
    const fila = document.querySelector('#propiedades_alquiler .row');
    fila.insertAdjacentHTML('beforebegin', `<h2>Propiedades en alquiler</h2>`);
    for (let articulo of propiedades) {
      fila.innerHTML += `
      <div class="col-md-4 mb-4">
          <div class="card">
              <img src="${directorio}/assets/img/${articulo.src}" class="card-img-top" alt="${articulo.nombre}" />
              <div class="card-body">
                  <h5 class="card-title">${articulo.nombre}</h5>
                  <p class="card-text">${articulo.descripcion}</p>
                  <p><i class="fas fa-map-marker-alt"></i> ${articulo.ubicacion}</p>
                  <p><i class="fas fa-bed"></i> ${articulo.habitaciones} Habitaciones</p>
                  <p><i class="fas fa-dollar-sign"></i> ${articulo.costo}</p>
                  ${articulo.fumadores ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                  ${articulo.mascotas ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
              </div>
          </div>
      </div>`;
    }
    if (!ruta.includes('propiedades_alquiler.html')) {
      contenedorPropiedadesAlquiler.innerHTML += `<div class="contenedor-btn">
      <a href="./propiedades_alquiler.html" class="btn btn-dark btn-personalizado">Ver todas las propiedades en alquiler</a></div>`;
    }

  }
}

