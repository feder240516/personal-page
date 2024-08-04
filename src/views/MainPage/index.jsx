import React, { useState } from 'react';
import Bio from '../../components/Bio';
import Gallery from '../../components/Gallery';
import Switch from '../../components/Switch';
import SimplePhoto from '../../components/Photo/Simple';
import './style.scss';
import projectTypes from '../../core/constants/projectTypes';
import { projects } from '../../core/constants/projects';

export default function MainPage() {
  const [selectedSwitchValue, setSelectedSwitchValue] = useState(projectTypes.WORK);

  const onChangeProjectType = (projectTypeId) => {
    setSelectedSwitchValue(projectTypeId);
  };

  return (
    <main className="main-page">
      {/* <CornerMenu /> */}
      <section id="about-me" className="page-1">
        <Bio />
        <SimplePhoto />
      </section>
      <section id="projects-list" className="page-2">
        <Switch
          groupName="project-types"
          options={[
            { name: 'Work Projects', id: projectTypes.WORK },
            { name: 'Personal Projects', id: projectTypes.OWN },
          ]}
          onSelection={onChangeProjectType}
        />
        <Gallery
          items={projects[selectedSwitchValue]}
          andMore={selectedSwitchValue === projectTypes.WORK}
        />
      </section>
    </main>
  );
}
