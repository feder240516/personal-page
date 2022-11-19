import React, { useState } from 'react';
import Bio from '../../components/Bio';
import Photo from '../../components/Photo';
import CornerMenu from '../../components/CornerMenu';
import Gallery from '../../components/Gallery';
import Switch from '../../components/Switch';
import './style.scss';
import healthAppImg from '../../assets/img/health app.jpg';
import letterImg from '../../assets/img/letter.jpg';
import slidePuzzleImg from '../../assets/img/slidePuzzle.jpg';
import sunBeachImg from '../../assets/img/SunBeach mobile.png';
import sunBeachDesktopImg from '../../assets/img/SunBeach desktop.jpg';
import todoAppImg from '../../assets/img/TodoApp.jpg';
import projectTypes from '../../core/constants/projectTypes';
import porImg from '../../assets/img/por.jpg';
import cat1Img from '../../assets/img/cat1.jpg';
import cat2Img from '../../assets/img/cat2.jpg';
import cat3Img from '../../assets/img/cat3.jpg';
import cat4Img from '../../assets/img/cat4.jpg';

const projects = {
  [projectTypes.OWN]: [
    {
      name: 'Healthcoach',
      img: [healthAppImg],
      url: 'https://www.figma.com/proto/ZdExCsfBlBubPsm4ShKcSr/Healthcoach?node-id=591%3A5716&scaling=scale-down&page-id=0%3A1&starting-point-node-id=591%3A5716',
      technologies: ['Figma'],
    },
    {
      name: 'Sunbeach (Desktop version)',
      img: [sunBeachDesktopImg],
      url: 'https://www.figma.com/proto/0s09B2kRdkuE1l2k9hpYH6/Sunbeach-Desktop---Orbit-Design-System?node-id=3%3A3370&scaling=scale-down&page-id=3%3A3370&starting-point-node-id=3%3A3475',
      technologies: ['Figma'],
    },
    {
      name: 'Sunbeach (Mobile version)',
      img: [sunBeachImg],
      url: 'https://www.figma.com/proto/gizIbEfUyfhvpAlTXCMEYT/Sunbeach-(using-Orbit-design-system)?node-id=155%3A1295&scaling=scale-down&page-id=42%3A0&starting-point-node-id=155%3A1295',
      technologies: ['Figma'],
    },
    {
      name: 'Letter',
      img: [letterImg],
      url: 'https://feder240516.github.io/celebration-letter/',
      technologies: ['React', 'Sass', 'HTML', 'Javascript'],
    },
    {
      name: 'Slide Puzzle',
      img: [slidePuzzleImg],
      url: 'https://feder240516.github.io/SlidePuzzle/',
      technologies: ['Javascript', 'CSS', 'HTML'],
    },
    {
      name: 'Todo App',
      img: [todoAppImg],
      url: 'https://feder240516.github.io/TodoApp/',
      technologies: ['Javascript', 'React', 'Sass', 'HTML'],
    },
  ],
  [projectTypes.WORK]: [
    {
      name: 'Porvenir App',
      img: [porImg],
      url: 'https://play.google.com/store/apps/details?id=co.com.porvenir.appmobile&hl=es_CO&gl=US',
      technologies: ['React', 'Ionic', 'Sass', 'Typescript', 'HTML'],
    },
    {
      name: 'MC Union',
      img: [porImg],
      url: '',
      technologies: ['Angular', 'C#', '.NET Core', 'Sass', 'HTML', 'Typescript'],
    },
    {
      name: 'Waitlist Catixa',
      img: [cat1Img, cat2Img, cat3Img, cat4Img],
      url: '',
      technologies: ['Javascript', 'React', 'Node.js', 'Firebase', 'Sass', 'HTML'],
    },
  ],
};

export default function MainPage() {
  const [selectedSwitchValue, setSelectedSwitchValue] = useState(projectTypes.OWN);

  const onChangeProjectType = (projectTypeId) => {
    setSelectedSwitchValue(projectTypeId);
  };

  return (
    <main className="main-page">
      <CornerMenu />
      <section className="page-1">
        <Bio />
        <Photo />
      </section>
      <section className="page-2">
        <Switch
          groupName="project-types"
          options={[
            { name: 'Own Projects', id: projectTypes.OWN },
            { name: 'Work Projects', id: projectTypes.WORK },
          ]}
          onSelection={onChangeProjectType}
        />
        <Gallery items={projects[selectedSwitchValue]} />
      </section>
    </main>
  );
}
