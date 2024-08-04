import healthAppImg from '../../assets/img/health app.jpg';
import healthAppFullImg1 from '../../assets/img/health app full 1.png';
import healthAppFullImg2 from '../../assets/img/health app full 2.png';
import healthAppFullImg3 from '../../assets/img/health app full 3.png';
import healthAppFullImg4 from '../../assets/img/health app full 4.png';
import healthAppFullImg5 from '../../assets/img/health app full 5.png';
import letterImg from '../../assets/img/letter.jpg';
import slidePuzzleImg from '../../assets/img/slidePuzzle.jpg';
import sunBeachImg from '../../assets/img/SunBeach mobile.png';
import sunBeachDesktopImg from '../../assets/img/SunBeach desktop.jpg';
import sunBeachDesktopFullImg1 from '../../assets/img/SunBeach desktop full 1.jpg';
import sunBeachDesktopFullImg2 from '../../assets/img/SunBeach desktop full 2.jpg';
import sunBeachDesktopFullImg3 from '../../assets/img/SunBeach desktop full 3.jpg';
import sunBeachDesktopFullImg4 from '../../assets/img/SunBeach desktop full 4.jpg';
import sunBeachMobileFullImg1 from '../../assets/img/SunBeach mobile full 1.jpg';
import sunBeachMobileFullImg2 from '../../assets/img/SunBeach mobile full 2.jpg';
import sunBeachMobileFullImg3 from '../../assets/img/SunBeach mobile full 3.jpg';
import sunBeachMobileFullImg4 from '../../assets/img/SunBeach mobile full 4.jpg';
import projectTypes from '../../core/constants/projectTypes';
import porImg from '../../assets/img/por.png';
import vusImg from '../../assets/img/vus.png';
import mcImg from '../../assets/img/mc.jpg';
import mcFullImg1 from '../../assets/img/mc full 1.jpg';
import mcFullImg2 from '../../assets/img/mc full 2.jpg';
import mcFullImg3 from '../../assets/img/mc full 3.jpg';
import cat1Img from '../../assets/img/cat1.jpg';
import cat2Img from '../../assets/img/cat2.jpg';
import cat3Img from '../../assets/img/cat3.jpg';
import cat4Img from '../../assets/img/cat4.jpg';
import checksizesImg from '../../assets/img/checksizes.jpg';
import tetrisImg from '../../assets/img/tetris.jpg';
import photoEditorImg from '../../assets/img/photo editor.png';

export const projects = {
  [projectTypes.OWN]: [
    {
      name: 'Photo editor',
      img: [photoEditorImg, photoEditorImg],
      url: 'https://photo.federicoreina.com/',
      technologies: ['Vue 3', 'Tailwind', 'Typescript'],
      message:
        '(IN PROGRESS) A lightweight photo editor for quick edits on the fly, designed for mobile and desktop compatibility',
    },
    {
      name: 'Letter',
      img: [letterImg, letterImg],
      url: [
        {
          name: 'Link',
          address: 'https://feder240516.github.io/celebration-letter/',
        },
        {
          name: 'Source Code',
          address: 'https://github.com/feder240516/celebration-letter',
        },
      ],
      technologies: ['React', 'Sass', 'HTML', 'Javascript'],
      message: `A web template of an animated letter to send to a loved one.`,
    },
    {
      name: 'Sunbeach (Desktop version)',
      img: [
        sunBeachDesktopImg,
        sunBeachDesktopFullImg1,
        sunBeachDesktopFullImg2,
        sunBeachDesktopFullImg3,
        sunBeachDesktopFullImg4,
      ],
      url: 'https://www.figma.com/proto/0s09B2kRdkuE1l2k9hpYH6/Sunbeach-Desktop---Orbit-Design-System?node-id=3%3A3370&scaling=scale-down&page-id=3%3A3370&starting-point-node-id=3%3A3475',
      technologies: ['Figma'],
      message: `Prototype for a app for helping informal sellers of the Colombian beaches to sell
        their products and services in a regulated way`,
    },
    {
      name: 'Sunbeach (Mobile version)',
      img: [
        sunBeachImg,
        sunBeachMobileFullImg1,
        sunBeachMobileFullImg2,
        sunBeachMobileFullImg3,
        sunBeachMobileFullImg4,
      ],
      url: 'https://www.figma.com/proto/gizIbEfUyfhvpAlTXCMEYT/Sunbeach-(using-Orbit-design-system)?node-id=155%3A1295&scaling=scale-down&page-id=42%3A0&starting-point-node-id=155%3A1295',
      technologies: ['Figma'],
      message: `Prototype for a app for helping informal sellers of the Colombian beaches to sell
        their products and services in a regulated way`,
    },
    {
      name: 'Slide Puzzle',
      img: [slidePuzzleImg, slidePuzzleImg],
      url: [
        {
          name: 'Link',
          address: 'https://feder240516.github.io/SlidePuzzle/',
        },
        {
          name: 'Source Code',
          address: 'https://github.com/feder240516/SlidePuzzle',
        },
      ],
      technologies: ['Javascript', 'CSS', 'HTML'],
    },
    {
      name: 'Tetris',
      img: [tetrisImg, tetrisImg],
      url: [
        {
          name: 'Download Link',
          address: 'https://github.com/feder240516/tetris-cpp/releases/download/1.0.0/Tetris.rar',
        },
        {
          name: 'Source Code',
          address: 'https://github.com/feder240516/tetris-cpp',
        },
      ],
      technologies: ['C++', 'SFML'],
      message: `A Tetris game made in C++ (Windows app).`,
    },
    {
      name: 'Disk space management app',
      img: [checksizesImg, checksizesImg],
      url: [
        {
          name: 'Download Link',
          address: 'https://github.com/feder240516/check-folder-size/releases',
        },
        {
          name: 'Source Code',
          address: 'https://github.com/feder240516/check-folder-size',
        },
      ],
      technologies: ['Python', 'Tkinter'],
      message: `A project in Python for checking folders and subfolders size. Useful when you are
        running low on disk space and want to identify heavy folders/files.`,
    },
    {
      name: 'Healthcoach',
      img: [
        healthAppImg,
        healthAppFullImg1,
        healthAppFullImg2,
        healthAppFullImg3,
        healthAppFullImg4,
        healthAppFullImg5,
      ],
      url: 'https://www.figma.com/proto/ZdExCsfBlBubPsm4ShKcSr/Healthcoach?node-id=591%3A5716&scaling=scale-down&page-id=0%3A1&starting-point-node-id=591%3A5716',
      technologies: ['Figma'],
      message: 'Prototype for a fitness app',
    },
    // {
    //   name: 'Todo App',
    //   img: [todoAppImg, todoAppImg],
    //   url: [
    //     {
    //       name: 'Link',
    //       address: 'https://feder240516.github.io/TodoApp/',
    //     },
    //     {
    //       name: 'Source Code',
    //       address: 'https://github.com/feder240516/TodoApp',
    //     },
    //   ],
    //   technologies: ['Javascript', 'React', 'Sass', 'HTML'],
    // },
  ],
  [projectTypes.WORK]: [
    {
      name: 'Porvenir App',
      img: [porImg, porImg],
      url: [
        {
          name: 'Play Store',
          address:
            'https://play.google.com/store/apps/details?id=co.com.porvenir.appmobile&hl=es_CO&gl=US',
        },
        {
          name: 'iOS App Store',
          address: 'https://apps.apple.com/co/app/app-porvenir/id1588315170?l=en',
        },
      ],
      technologies: ['React', 'Java', 'Sass', 'Typescript'],
      message: `Porvenir App allows their affiliates to check their products in the app and make
        multiple different money transactions.`,
    },
    {
      name: 'VUS',
      img: [vusImg, vusImg],
      technologies: ['Angular', 'Java', 'Typescript'],
      message: `VUS (Ventanilla Única de servicios) is a digital platform for democratizing digital access to the citizens transit data`,
    },
    {
      name: 'MC Union',
      img: [mcImg, mcImg, mcFullImg1, mcFullImg2, mcFullImg3],
      technologies: ['Angular', 'C#', '.NET Core', 'Sass', 'HTML', 'Typescript'],
      message: `MC Union is a web app for international money transfers. This project is currently
        halted, waiting to be resumed in a near future.`,
    },
    {
      name: 'Waitlist Catixa',
      img: [cat1Img, cat1Img, cat2Img, cat3Img, cat4Img],
      url: '',
      technologies: ['Javascript', 'React', 'Node.js', 'Firebase', 'Sass', 'HTML'],
      message: `Catixa is a web & mobile system for customer support, management, and analytics for restaurants.
      It was created for internal business use, so there is no public link to display`,
    },
  ],
};
