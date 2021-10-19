import f1 from '../assets/images/f1.jpeg';
import f2 from '../assets/images/f2.jpeg';
import f3 from '../assets/images/f3.jpeg';
import f4 from '../assets/images/f4.jpeg';
import f5 from '../assets/images/f5.jpeg';
import f6 from '../assets/images/f6.jpeg';
import f7 from '../assets/images/f7.jpeg';
import f8 from '../assets/images/f8.jpeg';
import f9 from '../assets/images/f9.jpeg';
import f10 from '../assets/images/f10.jpeg';

// logos
import farmacaps from '../assets/images/farmacaps.jpg';
import ccb from '../assets/images/ccb.png';
import uvg from '../assets/images/uvg.jpg';
import SuperSharp from '../assets/images/supersharp.jpg';
import portasoft from '../assets/images/portasoft.jpeg';
import sento from '../assets/images/sento.png';

// contact icons
import location from '../assets/icons/location.svg';
import mail from '../assets/icons/mail.svg';
import phone from '../assets/icons/phone.svg';
import checked from '../assets/icons/checked.svg';
import github from '../assets/icons/github.svg';

// certificados
import htmlCertificate from '../assets/certificates/html.jpg';
import flutterCertificate from '../assets/certificates/fluter.jpg';
import englishCertificate from '../assets/certificates/english.jpg';
import reactCertificate from '../assets/certificates/react.jpg';
import nasaCertificate from '../assets/certificates/nasa.jpeg';

// participacion
import avanproC from '../assets/participacion/avanpro.jpg';
import steam1C from '../assets/participacion/steam_competencia.jpg';
import steam2C from '../assets/participacion/steamc.jpg';
import steamGroup from '../assets/participacion/steam_carta.jpg';

// diplomas universidad
import distincion2020 from '../assets/diplomas/distincion2020.jpg';

// proyectos web
import amazonClonP from '../assets/proyectos-web/primevideo.png';
import calendario from '../assets/proyectos-web/calendario.jpg';
import memoria from '../assets/proyectos-web/memoria.jpg';
import calculadoraIc from '../assets/proyectos-web/calculadora.png';

// proyectos android
// import pMusic from '../assets/proyectos-android/pmusic.webp';
import pBiblie from '../assets/proyectos-android/biblia.webp';
import pMemes from '../assets/proyectos-android/ms.webp';

const homeCarrousel = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];

const educacion = {
  title: 'Educacion',
  elements: [
    {
      time: '2015 - 2018',
      place: 'Colegio Colonial Bilingue',
      logo: ccb,
      doTitle: 'Secundaria y Bachillerato',
      doDescription:
        'En este colegio estudie desde segundo basico a quinto bachillerato. Este colegio esta en la Antigua Guatemala.',
    },
    {
      time: '2019 - 2021',
      place: 'Universidad del Valle de Guatemala',
      logo: uvg,
      doTitle: 'Ciencias de la Computacion y TI',
      doDescription:
        'Estoy estudiando Ingeneria en Ciencia de la Computacion y Tecnologias de la informacion en la Universidad del Valle de Guatemala. Por el momento voy por el tercer año de la carrera.',
    },
  ],
};

const experiencia = {
  title: 'Experiencia',
  elements: [
    {
      time: 'Diciembre 2019',
      place: 'Farmacaps S.A.',
      logo: farmacaps,
      doTitle: 'Software de costos',
      doDescription:
        'Farmacaps S.A. es una empresa farmaceutica de productos naturales. Fabricar y Expender Productos Farmaceuticos en Capsulas de Gelatina blanda.',
    },
    {
      time: 'Junio 2020',
      place: 'Portasoft',
      logo: portasoft,
      doTitle: 'Aplicacion de consultas',
      doDescription:
        'Se creo una aplicación móvil en la cual mediante el consumo de web services, hace consultas de geolocalización de clientes en Guatemala, El Salvador y Honduras',
    },
    {
      time: 'Diciembre 2020',
      place: 'Super Sharp',
      logo: SuperSharp,
      doTitle: 'Aplicacion movil',
      doDescription:
        'Aplicacion para manejo de clientes y control de pago para los trabajadores.',
    },
    {
      time: 'Enero 2021 - Junio 2021',
      place: 'Universidad del Valle de Guatemala',
      logo: uvg,
      doTitle: 'Auxiliar de Programacion Basica',
      doDescription:
        'Junto con el profesor a cargo, preparamos trabajos, laboratorios, así como discutimos y calificamos el progreso de los estudiantes.',
    },
    {
      time: 'Abril 2021',
      place: 'Universidad del Valle de Guatemala',
      logo: uvg,
      doTitle: 'Coordinacion de internalizacion UVG',
      doDescription:
        'Se creo una pagina web para poder mostrar calendario japoneses de forma dinamica.',
    },
    {
      time: 'Septiembre 2021',
      place: 'Sento AI',
      logo: sento,
      doTitle: 'Desarrollador Web',
      doDescription:
        'Trabajo en desarrollo de una plataforma web con el fin de poder brindar una mejor experiencia al cliente.',
    },
  ],
};

const codeSkills = {
  title: 'Coding skills',
  elements: [
    {
      title: 'Python',
      progress: 0.9,
    },
    {
      title: 'Java',
      progress: 0.9,
    },
    {
      title: 'Javascript',
      progress: 0.8,
    },
    {
      title: 'Dart',
      progress: 0.9,
    },
    {
      title: 'SQL',
      progress: 0.7,
    },
    {
      title: 'C++',
      progress: 0.5,
    },
    {
      title: 'HTML/CSS',
      progress: 0.8,
    },
    {
      title: 'React',
      progress: 0.7,
    },
    {
      title: 'Flutter',
      progress: 0.8,
    },
    {
      title: 'NoSQL',
      progress: 0.7,
    },
    {
      title: 'PostgreSQL',
      progress: 0.7,
    },
    {
      title: 'Node js',
      progress: 0.7,
    },
  ],
};

const languages = {
  title: 'Idiomas',
  elements: [
    {
      title: 'Español',
      progress: 1.0,
    },
    {
      title: 'Ingles',
      progress: 0.7,
    },
  ],
};

const conoTags = {
  title: 'Conocimientos',
  tags: [
    'SQL',
    'Python',
    'Git',
    'HTML',
    'CSS',
    'Web hosting',
    'Linux',
    'Windows',
    'OSX',
    'Solucion de problemas',
    'Flexibilidad',
    'Multidisciplinario',
  ],
};

const contactItems = [
  {
    icon: location,
    title: 'Guatemala',
  },
  {
    icon: phone,
    title: '(502) 50569551',
  },
  {
    icon: mail,
    title: 'andreifan123@gmail.com',
  },
  {
    icon: checked,
    title: 'Freelance disponible',
  }, {
    icon: github,
    title: 'Andrei-Portales',
  },
];

const certificados = {
  title: 'Certificados',
  items: [
    {
      title: 'React Udemy',
      image: reactCertificate,
    },
    {
      title: 'HTML5 Udemy',
      image: htmlCertificate,
    },
    {
      title: 'Flutter y Dart Udemy',
      image: flutterCertificate,
    },
    {
      title: 'English Language Skills',
      image: englishCertificate,
    },
    {
      title: 'Nasa Space Apps Hackathon',
      image: nasaCertificate,
    }
  ],
};

const diplomasUniversidad = {
  title: 'Universidad del Valle de Guatemala',
  items: [
    {
      title: 'Distincion Academica 2020',
      image: distincion2020,
    },
  ],
};

const participacionCert = {
  title: 'Cetificados de Participacion',
  items: [
    {
      title: 'Avanpro',
      image: avanproC,
    },
    {
      title: 'Steam Robotics',
      image: steam1C,
    },
    {
      title: 'Steam Robotics',
      image: steam2C,
    },
    {
      title: 'Steam Group',
      image: steamGroup,
    },
  ],
};

const dataProyectosWeb = {
  title: 'Proyectos Web',
  items: [
    {
      title: 'Clone Amazon Prime',
      description:
        'Este clone se realizo en la clase de Tecnologias Web. Este fue parte de un proyecto que habia que realizar en la clase. Este sirvio para concretar los conocimientos de React y estilos con css.',
      link: 'http://stw-uvg.site:3169',
      image: amazonClonP,
    },
    {
      title: 'Calendario Japones',
      description:
        'Este pagina se realizo para el departamente de internalizacion de la Universidad del Valle de Guatemala. El fin de esta pagina era poder mostrar los diferentes calendario japoneses. Para esto se utilizo React.',
      link: 'https://andrei-portales.github.io/calendario-japon',
      image: calendario,
    },
    {
      title: 'Juego de memoria',
      description:
        'Este juego se realizo como parte de un laboratorio del curso de Sistemas y tecnologias web.',
      link: 'http://stw-uvg.site/labs/lab08/Portales19825',
      image: memoria,
    },
    {
      title: 'Calculadora',
      description:
        'Este juego se realizo como parte de un laboratorio del curso de Sistemas y tecnologias web.',
      link: 'http://stw-uvg.site/labs/lab10/Portales19825',
      image: calculadoraIc,
    },
  ],
};

const dataProyectosAndroid = {
  title: 'Proyectos Android - Flutter',
  items: [
    // {
    //   title: 'Portales Music',
    //   description:
    //     'Esta aplicacion la hice para que las personas puedan escuchar musica facil y gratuitamente sin tener que pagar subscripcion en otra aplicacion. Es libre de anuncios y pagos dentro de la misma.',
    //   link: 'https://play.google.com/store/apps/details?id=com.portales.PortalesMusic',
    //   image: pMusic,
    // },
    {
      title: 'La biblia MV',
      description:
        'Esta aplicacion es para poder leer la biblia gratuitamente y sin anuncios. Tiene varias versiones de la misma y tambien ofrece opcion para poder escuchar los capitulos. En esta se pueden realizar comentarios al igual que subrayar los textos importantes.',
      link: 'https://play.google.com/store/apps/details?id=com.portales.biblia',
      image: pBiblie,
    },
    {
      title: 'MEME Studio',
      description:
        'Esta aplicacion la hice para poder crear memes facilmente. La cual tambien ofrece plantilla que se pueden utilizar. Al igual que un editor de imagenes',
      link: 'https://play.google.com/store/apps/details?id=com.portales.memestudio',
      image: pMemes,
    },
  ],
};

export {
  homeCarrousel,
  educacion,
  experiencia,
  codeSkills,
  languages,
  conoTags,
  contactItems,
  certificados,
  diplomasUniversidad,
  participacionCert,
  dataProyectosWeb,
  dataProyectosAndroid,
};
