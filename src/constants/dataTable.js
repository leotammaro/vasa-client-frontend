export const dataMateriales = (materiales) => {
  return materiales.map((vidrio) => {
    const { material, ancho, alto, espesor, color } = vidrio;
    return { col1: material, col2: ancho, col3: alto, col4: espesor, col5: color };
  });
}

export const dataUsuarios = (usuarios) => {
  return usuarios.map((usuario) => {
    const { nombre, rol, sector, legajo } = usuario;
    return { col1: nombre, col2: rol, col3: sector, col4: legajo };
  });

}
