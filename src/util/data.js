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
        'La Universidad del Valle de Guatemala es la primera universidad de la región en introducir un título en bioinformática y me complace ser parte de la primera promoción de bioinformáticos de América Latina.',
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
        'Se creo una aplicacion movil en la cual se pueden hacer consultas de carros, personas que se encuentran en Guatemala. Se conecto esta aplicacion a una base de datos ya existente',
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
      progress: 1.0,
    },
    {
      title: 'NoSQL',
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

import location from '../assets/icons/location.svg';
import mail from '../assets/icons/mail.svg';
import phone from '../assets/icons/phone.svg';
import checked from '../assets/icons/checked.svg';

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
  }
];

export {
  homeCarrousel,
  educacion,
  experiencia,
  codeSkills,
  languages,
  conoTags,
  contactItems,
};
