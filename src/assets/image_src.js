const photos = [
  {
    src: require('./photos/Spain/Banderas(Granada)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 0',
    caption: 'La Alhambra. Granada, Spain'
  },
  {
    src: require('./photos/Spain/Bendición(Sevilla)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 1',
    caption: 'Sevilla, Spain'
  },
  {
    src: require('./photos/Spain/Callejón(Barcelona)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 2',
    caption: 'Barcelona, Spain'
  },
  {
    src: require('./photos/Spain/Gitanos(Granada)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 4',
    caption: 'Mountainside slums overlooking Granada, Spain'
  },
  {
    src: require('./photos/Spain/Iglesia(Sevilla)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 5',
    caption: 'Sevilla, Spain'
  },
  {
    src: require('./photos/Spain/LaMujerBlanca(Sevilla)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 6',
    caption: 'A street performer preparing for a day of work. Sevilla, Spain'
  },
  {
    src: require('./photos/Spain/Merienda(Sevilla)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 8',
    caption: 'Sevilla, Spain'
  },
  {
    src: require('./photos/Spain/MiHogar(Madrid)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 9',
    caption: 'Madrid, Spain'
  },
  {
    src: require('./photos/Spain/Músico(Granada)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 10',
    caption: 'Granada, Spain'
  },
  {
    src: require('./photos/Spain/Paraguas(Escorial)-min.jpg'),
    width: 2272,
    height: 1704,
    alt: 'image 11',
    caption: 'Escorial, Spain'
  },
  {
    src: require('./photos/Spain/Rastro(Madrid)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 12',
    caption: 'El Rastro. Madrid, Spain'
  },
  {
    src: require('./photos/Spain/Sol(Madrid)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 13',
    caption: 'Plaza del Sol. Madrid, Spain'
  },
  {
    src: require('./photos/Spain/Techos(Sevilla)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 14',
    caption: 'Sevilla, Spain'
  },
  {
    src: require('./photos/Spain/Vendedor(Sevilla)-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 15',
    caption: 'Vendedor de las castañas. Sevilla, Spain'
  },
  {
    src: require('./photos/Spain/IMG_5034-min.JPG'),
    width: 1704,
    height: 2272,
    alt: 'image 17',
    caption: 'Madrid, Spain'
  },
  {
    src: require('./photos/Spain/IMG_6831-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 18',
    caption: 'Madrid, Spain'
  },
  {
    src: require('./photos/Spain/IMG_7013-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 19',
    caption: 'Paris, France'
  },
  {
    src: require('./photos/Spain/IMG_7026-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 20',
    caption: 'Rome, Italy'
  },
  {
    src: require('./photos/Spain/IMG_7081-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 21',
    caption: 'Vatican City'
  },
  {
    src: require('./photos/Wilderness/IMG_8456-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 22',
    caption: 'Pactific Crest Trail. Wenatchee National Forest. Washington'
  },
  {
    src: require('./photos/Wilderness/IMG_8463-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 23',
    caption: 'Pactific Crest Trail. Wenatchee National Forest. Washington'
  },
  {
    src: require('./photos/Wilderness/IMG_8656-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 24',
    caption: 'Pactific Crest Trail. Glacier Peak Wilderness. Washington'
  },
  {
    src: require('./photos/Wilderness/IMG_8705-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 25',
    caption: 'Pactific Crest Trail. Glacier Peak Wilderness. Washington'
  },
  {
    src: require('./photos/Wilderness/IMG_8720-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 26',
    caption: 'Pactific Crest Trail. Glacier Peak Wilderness. Washington'
  },
  {
    src: require('./photos/Wilderness/IMG_8731-min.JPG'),
    width: 1704,
    height: 2272,
    alt: 'image 27',
    caption: 'Pactific Crest Trail. Glacier Peak Wilderness. Washington'
  },
  {
    src: require('./photos/Wilderness/IMG_8742-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 28',
    caption: 'Pactific Crest Trail. Glacier Peak Wilderness. Washington'
  },
  {
    src: require('./photos/Wilderness/IMG_8791-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 29',
    caption: 'Pactific Crest Trail. North Cascades National Park. Washington'
  },
  {
    src: require('./photos/Wilderness/IMG_9115-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 30',
    caption: 'Pactific Crest Trail. North Cascades National Park. Washington'
  },
  {
    src: require('./photos/Wilderness/IMG_9501-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 31',
    caption: 'Emigrant Wilderness. Stanislaus National Forest. California'
  },
  {
    src: require('./photos/Wilderness/IMG_9574-min.JPG'),
    width: 1704,
    height: 2272,
    alt: 'image 32',
    caption: 'Emigrant Wilderness. Stanislaus National Forest. California',
    sizes:[
			'(min-width: 480px) 50vw',
			'(min-width: 1024px) 33.3vw',
			'100vw'
		]
  },
  {
    src: require('./photos/Wilderness/IMG_9580-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 33',
    caption: 'Emigrant Wilderness. Stanislaus National Forest. California'
  },
  {
    src: require('./photos/Wilderness/IMG_9712-min.JPG'),
    width: 1704,
    height: 2272,
    alt: 'image 34',
    caption: 'Chugach State Park. Alaska'
  },
  {
    src: require('./photos/Wilderness/IMG_9762-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 35',
    caption: 'Chugach State Park. Alaska'
  },
  {
    src: require('./photos/Wilderness/IMG_9818-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 36',
    caption: 'Chugach National Forest. Alaska'
  },
  {
    src: require('./photos/Wilderness/IMG_9868-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 37',
    caption: 'Kenai Fjords National Park. Alaska'
  },
  {
    src: require('./photos/Wilderness/IMG_9926-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 38',
    caption: 'Kenai Fjords National Park. Alaska'
  },
  {
    src: require('./photos/Wilderness/IMG_9970-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 39',
    caption: 'Homer, Alaska'
  },
  {
    src: require('./photos/Wilderness/IMG_0185.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 40',
    caption: 'Mono Lake. Inyo National Forest. California'
  },
  {
    src: require('./photos/Wilderness/IMG_0332-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 41',
    caption: 'Zion National Park. Utah'
  },
  {
    src: require('./photos/Wilderness/IMG_0385-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 42',
    caption: 'Zion National Park. Utah'
  },
  {
    src: require('./photos/Wilderness/IMG_0553.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 43',
    caption: 'North Rim. Grand Canyon National Park. Arizona'
  },
  {
    src: require('./photos/Wilderness/IMG_0564-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 44',
    caption: 'North Rim. Grand Canyon National Park. Arizona'
  },
  {
    src: require('./photos/Wilderness/IMG_0628-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 46',
    caption: 'North Rim. Grand Canyon National Park. Arizona'
  },
  {
    src: require('./photos/Wilderness/IMG_0591-min.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 45',
    caption: 'North Rim. Grand Canyon National Park. Arizona'
  },
  {
    src: require('./photos/Wilderness/IMG_0699.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 47',
    caption: 'Oljato-Monument Valley. Arizona'
  },
  {
    src: require('./photos/Wilderness/IMG_1045.JPG'),
    width: 2272,
    height: 1704,
    alt: 'image 48',
    caption: 'Island in the Sky. Canyonlands National Park. Utah'
  }
]

export default photos;
