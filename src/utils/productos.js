const productos = [
  {
    id: 1,
    name: "Camiseta Titular Boca 2022",
    category: "camiseta",
    gender: "male",
    price: 14999,
    description:
      "1981. Una leyenda del fútbol hace su debut en Boca Juniors con un uniforme que se convertiría en uno de los más preciados de la historia del club. Cuarenta años después vuelve el clásico escudo de cuatro estrellas. Diseñada para hinchas, esta camiseta brinda comodidad en todo momento gracias a su tecnología AEROREADY.Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.",
    stock: 10,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/167198-1000-1000/GA7545_1.jpg?v=637667066197770000",
  },
  {
    id: 2,
    name: "Camiseta Visitante Boca 2022",
    category: "camiseta",
    gender: "male",
    price: 14999,
    description:
      "La nueva camiseta con vivos grises en formato de disruptivas líneas como aquella recordada camiseta suplente de 1992, tiene el cuello de color azul y amarillo y el escudo centrado a la altura del pecho. Las tres tiras de los hombros son azules y el conjunto se completa con un short gris y medias al tono. Para que sigas esta camiseta Del barrio al mundo. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.",
    stock: 7,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/165651-1000-1000/GU1886_1.jpg?v=637630183276900000",
  },
  {
    id: 3,
    name: "Camiseta Arquero Boca 2022",
    category: "camiseta",
    gender: "male",
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
    category: "camiseta",
    gender: "male",
    price: 14999,
    description:
      "La camiseta oficial que utilizan los jugadores en la cancha con tecnología HEAT.RDY, que te permite moverte como un profesional. Su distintivo diseño se inspira en la emblemática Caminito, ícono del barrio de La Boca que se ha convertido en un sinónimo de la pasión por el fútbol. Este producto está hecho con material reciclado como parte de nuestra misión de ponerle fin a la contaminación con plástico.",
    stock: 10,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/165311-1000-1000/GK3191_1.jpg?v=637533381589730000",
  },
  {
    id: 5,
    name: "Camiseta Titular Boca 2021",
    category: "camiseta",
    gender: "male",
    price: 14999,
    description:
      "La banda amarilla se roba el show en esta interpretación de adidas del clásico estilo de Boca Juniors que luce esta camiseta de local. Los detalles coloridos en las mangas reflejan la hinchada apasionada que ha apoyado al club en el camino a la victoria. Su tejido suave te mantiene seco Luce el escudo del club y La Mitad +1 tejidos para destacar lo que sentís por tu equipo.",
    stock: 8,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/155688-1000-1000/GL4175_1.png?v=637321717285170000",
  },
  {
    id: 6,
    name: "Camiseta Visitante Boca 2021",
    category: "camiseta",
    gender: "male",
    price: 14999,
    description:
      "La auténtica camiseta que usan los jugadores en la Bombonera. Usá la camiseta oficial que visten los jugadores en la cancha. Hecha con tecnología HEAT.RDY que te mantiene cómodo y fresco en los momentos más intensos de uso. Este producto está hecho con material reciclado",
    stock: 12,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/163284-1000-1000/GI4682_1.jpg?v=637481279145200000",
  },
  {
    id: 7,
    name: "Tercera Camiseta Boca 2021",
    category: "camiseta",
    gender: "male",
    price: 14999,
    description:
      "Camiseta de Juego de la 3° equipación de Boca. Inspirado en el 80° aniversario de la Bombonera",
    stock: 16,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/156661-1000-1000/GH8644_1.png?v=637369120957700000",
  },
  {
    id: 8,
    name: "Cuarta Camiseta Boca 2021",
    category: "camiseta",
    gender: "male",
    price: 14999,
    description:
      "Cuarta Camiseta de Juego de Boca. Esta Camiseta esta inspirada en la Copa Intercontinental que se obtuvo en el año 2000, porque razones para celebrar sobran acá o en cualquier lugar del mundo. Porque Boca fue, es y será Intercontinental.",
    stock: 8,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/163263-1000-1000/GK3122_1.jpg?v=637480473473400000",
  },
  {
    id: 9,
    name: "Camiseta Titular Boca 2022",
    category: "camiseta",
    gender: "female",
    price: 13999,
    description:
      "1981. Una leyenda del fútbol hace su debut en Boca Juniors con un uniforme que se convertiría en uno de los más preciados de la historia del club. Cuarenta años después vuelve el clásico escudo de cuatro estrellas. Diseñada para hinchas, esta camiseta brinda comodidad en todo momento gracias a su tecnología AEROREADY. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.",
    stock: 19,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/167204-1000-1000/GA7546_1.jpg?v=637667070145130000",
  },
  {
    id: 10,
    name: "Camiseta Visitante Boca 2022",
    category: "camiseta",
    gender: "female",
    price: 13999,
    description:
      "La nueva camiseta con vivos grises en formato de disruptivas líneas como aquella recordada camiseta suplente de 1992, tiene el cuello de color azul y amarillo y el escudo centrado a la altura del pecho. Las tres tiras de los hombros son azules y el conjunto se completa con un short gris y medias al tono.Para que sigas esta camiseta Del barrio al mundo.Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.",
    stock: 14,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/165645-1000-1000/GU1887_1.jpg?v=637630183235200000",
  },
  {
    id: 11,
    name: "Tercera Camiseta Boca 2022",
    category: "camiseta",
    gender: "female",
    price: 13999,
    description:
      "La historia de esta camiseta está inspirada en el Barrio de La Boca, entendiendo que es un lugar único y especial que representa el espíritu Xeneize. De esta forma, lo que refleja esta camiseta es el auténtico vínculo entre el club y el barrio. Lo que empezó siendo un barrio, hoy es sinónimo de pasión en cualquier lugar del mundo.",
    stock: 11,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/165088-1000-1000/GK3096_1.jpg?v=637528056628400000",
  },
  {
    id: 12,
    name: "Camiseta Alternativa Boca 2021",
    category: "camiseta",
    gender: "female",
    price: 13999,
    description:
      "Una clásica camiseta de fútbol- actualizada para una nueva era. El diseño en esta camiseta alternativa de Boca Juniors de adidas está inspirada en un clásico uniforme de los 80. Su tejido suave absorbe el sudor para mantenerte cómodo y seguro en el gimnasio o en las tribunas. Luce un escudo tejido que demuestra tu orgullo por el equipo.",
    stock: 12,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/155660-1000-1000/GL4169_1.png?v=637321716792830000",
  },
  {
    id: 13,
    name: "Tercera Camiseta Boca 2021",
    category: "camiseta",
    gender: "female",
    price: 13999,
    description:
      "Camiseta de Juego de la 3° equipación de Boca. Inspirado en el 80° aniversario de la Bombonera",
    stock: 20,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/156666-1000-1000/GH8645_1.png?v=637369130664530000",
  },
  {
    id: 14,
    name: "Cuarta Camiseta Boca 2021",
    category: "camiseta",
    gender: "female",
    price: 13999,
    description:
      "Cuarta Camiseta de Juego de Boca. Esta Camiseta esta inspirada en la Copa Intercontinental que se obtuvo en el año 2000, porque razones para celebrar sobran acá o en cualquier lugar del mundo. Porque Boca fue, es y será Intercontinental.",
    stock: 8,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/163265-1000-1000/GK3276_1.jpg?v=637480478531830000",
  },
  {
    id: 15,
    name: "Short Titular Boca 2022",
    category: "short",
    gender: "male",
    price: 8999,
    description:
      "Esta temporada el uniforme de Boca Juniors rinde homenaje a un jugador legendario. Cuarenta años después de una memorable temporada en 1981, estos shorts lucen el clásico escudo del club de cuatro estrellas. Con tecnología AEROREADY que te mantiene cómodo en todo momento.",
    stock: 16,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/166906-1000-1000/GU1885_1.jpg?v=637643878758070000",
  },
  {
    id: 16,
    name: "Short Visitante Boca 2022",
    category: "short",
    gender: "male",
    price: 8999,
    description:
      "Parte del uniforme que celebra una temporada memorable, con el bicampeonato continental obtenido en 2001. Los shorts de visitante adidas Boca Juniors están hechos con tecnología AEROREADY para tu total comodidad. En la pierna el escudo, ese que llevás con amor y orgullo por el club.Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.",
    stock: 10,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/165662-1000-1000/GU1879_1.jpg?v=637630183392270000",
  },
  {
    id: 17,
    name: "Short Arquero Boca 2022",
    category: "short",
    gender: "male",
    price: 8999,
    description:
      "Ganar partidos requiere de dedicación y destreza. Cuando los jovenes arqueros de Boca Juniors visten esta camiseta se preparan para enfocarse únicamente en el juego. El tejido AEROREADY permiten movimientos más fluidos y comodidad en todo momento. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.",
    stock: 15,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/166896-1000-1000/GU1880_1.jpg?v=637643878656930000",
  },
  {
    id: 18,
    name: "Tercer Short Boca 2022",
    category: "short",
    gender: "male",
    price: 8999,
    description:
      "Este short está inspirado en el Barrio de La Boca, entendiendo que es un lugar único y especial que representa el espíritu Xeneize. De esta forma, lo que refleja esta camiseta es el auténtico vínculo entre el club y el barrio. Lo que empezó siendo un barrio, hoy es sinónimo de pasión en cualquier lugar del mundo. #DELBARRIOALMUNDO",
    stock: 15,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/165076-1000-1000/GK3310_1.jpg?v=637528056474100000",
  },
  {
    id: 19,
    name: "Short Titular Boca 2021",
    category: "short",
    gender: "male",
    price: 8999,
    description:
      "Estos shorts de fútbol adidas son una versión para jóvenes de los que usan los jugadores cuando juegan en La Bombonera. El tejido suave te mantiene seco y cómodo- y el escudo tejido justo arriba del dobladillo destaca lo que sentís por el equipo.",
    stock: 19,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/155645-1000-1000/GL4167_1.png?v=637321716531230000",
  },
  {
    id: 20,
    name: "Short Visitante Boca 2021",
    category: "short",
    gender: "male",
    price: 8999,
    description:
      "Cuando los jugadores de Boca Juniors se presentan ante sus rivales- lucen estos shorts de fútbol de adidas. El escudo del club cosido advierte a los rivales contra quién van a competir. Su tejido suave y absorbente los hace muy cómodos.",
    stock: 15,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/155649-1000-1000/GL4168_1.png?v=637321716607700000",
  },
  {
    id: 21,
    name: "Tercer Short Boca 2021",
    category: "short",
    gender: "male",
    price: 8999,
    description:
      "Short de Juego de la 3° equipación de Boca. Inspirado en el 80° aniversario de la Bombonera",
    stock: 12,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/156659-1000-1000/GH8509_1.png?v=637369115371070000",
  },
  {
    id: 22,
    name: "Cuarto Short Boca 2021",
    category: "short",
    gender: "male",
    price: 8999,
    description:
      "Short Cuarto Uniforme de Juego de Boca. Indumentaria inspirada en la Copa Intercontinental que se obtuvo en el año 2000, porque razones para celebrar sobran acá o en cualquier lugar del mundo. Porque Boca fue, es y será Intercontinental.",
    stock: 12,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/163273-1000-1000/GN8856_1.jpg?v=637480496366600000",
  },
  {
    id: 23,
    name: "Conjunto Boca Titular",
    category: "conjunto",
    gender: "male",
    price: 23999,
    description:
      "Envolvete con los colores de tu club. Este conjunto deportivo de Boca Juniors está confeccionado en un suave tejido de felpa francesa que absorbe la transpiración y aporta máxima comodidad. El escudo del club termosellado demuestra tu pasión por el equipo.",
    stock: 7,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/155781-1000-1000/GL7512_1.png?v=637321718854970000",
  },
  {
    id: 24,
    name: "Conjunto Boca Alternativo",
    category: "conjunto",
    gender: "male",
    price: 23999,
    description:
      "Envolvete con los colores de tu club. Este conjunto deportivo de Boca Juniors está confeccionado en un suave tejido de felpa francesa que absorbe la transpiración y aporta máxima comodidad. El escudo del club termosellado demuestra tu pasión por el equipo.",
    stock: 7,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/155787-1000-1000/GL7513_1.png?v=637321718932600000",
  },
];

export default productos;
