const productos = [
  {
    id: 1,
    name: "Camiseta Titular Boca 2022",
    price: 13999,
    description:
      "1981. Una leyenda del fútbol hace su debut en Boca Juniors con un uniforme que se convertiría en uno de los más preciados de la historia del club. Cuarenta años después vuelve el clásico escudo de cuatro estrellas. Diseñada para hinchas, esta camiseta brinda comodidad en todo momento gracias a su tecnología AEROREADY.Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.",
    stock: 10,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/167198-1000-1000/GA7545_1.jpg?v=637667066197770000",
  },
  {
    id: 2,
    name: "Camiseta Visitante Boca 2022",
    price: 13999,
    description:
      "La nueva camiseta con vivos grises en formato de disruptivas líneas como aquella recordada camiseta suplente de 1992, tiene el cuello de color azul y amarillo y el escudo centrado a la altura del pecho. Las tres tiras de los hombros son azules y el conjunto se completa con un short gris y medias al tono. Para que sigas esta camiseta Del barrio al mundo. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.",
    stock: 7,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/165651-1000-1000/GU1886_1.jpg?v=637630183276900000",
  },
  {
    id: 3,
    name: "Camiseta Arquero Boca 2022",
    price: 14999,
    description:
      "Ganar partidos requiere de dedicación y destreza. Cuando los arqueros de Boca Juniors visten esta camiseta se preparan para enfocarse únicamente en el juego. El tejido AEROREADY permiten movimientos más fluidos y comodidad en todo momento.",
    stock: 5,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/166887-1000-1000/GA7548_1.jpg?v=637643878568030000",
  },
  {
    id: 4,
    name: "Tercera Camiseta Boca 2022",
    price: 13999,
    description:
      "La camiseta oficial que utilizan los jugadores en la cancha con tecnología HEAT.RDY, que te permite moverte como un profesional. Su distintivo diseño se inspira en la emblemática Caminito, ícono del barrio de La Boca que se ha convertido en un sinónimo de la pasión por el fútbol. Este producto está hecho con material reciclado como parte de nuestra misión de ponerle fin a la contaminación con plástico.",
    stock: 10,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/165311-1000-1000/GK3191_1.jpg?v=637533381589730000",
  },
];

const producto = {
  id: 1,
  name: "Camiseta Titular Boca 2022",
  price: 13999,
  description:
    "1981. Una leyenda del fútbol hace su debut en Boca Juniors con un uniforme que se convertiría en uno de los más preciados de la historia del club. Cuarenta años después vuelve el clásico escudo de cuatro estrellas. Diseñada para hinchas, esta camiseta brinda comodidad en todo momento gracias a su tecnología AEROREADY.Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.•Corte clásico •Cuello redondo acanalado •Tejido de punto doble 100 % poliéster reciclado •Transpirable•Dobladillo con forma•Escudo de Boca Juniors termotransferido",
  stock: 10,
  image:
    "https://bocashop.vteximg.com.br/arquivos/ids/167198-1000-1000/GA7545_1.jpg?v=637667066197770000",
};

export const traerProducto = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(producto);
    }, 1000);
  });
};

export const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};
