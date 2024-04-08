const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'url_de_la_imagen',
      descripcion: 'Descripción del apartamento',
      ubicacion: 'Ubicación del apartamento',
      habitaciones: 2,
      costo: 2000,
      smoke: false,
      pets: true
    },
    // Agregar más propiedades en alquiler...
  ];
  
  const propiedades_venta = [
    {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src: 'url_de_la_imagen',
      descripcion: 'Descripción del apartamento',
      ubicacion: 'Ubicación del apartamento',
      habitaciones: 4,
      costo: 5000,
      smoke: false,
      pets: false
    },
    // Agregar más propiedades en venta...
  ];
  

  // Para propiedades en alquiler
const propiedadesAlquilerContainer = document.getElementById('propiedades_alquiler');

propiedades_alquiler.forEach(propiedad => {
  const card = `
    <div class="card">
      <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
      <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        ${propiedad.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
        ${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
      </div>
    </div>
  `;
  propiedadesAlquilerContainer.innerHTML += card;
});

// Para propiedades en venta
const propiedadesVentaContainer = document.getElementById('propiedades_venta');

propiedades_venta.forEach(propiedad => {
  // Crear el HTML para cada propiedad similar al ejemplo anterior
});
