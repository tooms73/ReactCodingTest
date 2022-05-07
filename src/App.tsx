import { useState } from 'react';
import './App.css';
import Toggle, { IToggle } from './components/Toggle/toggle';
import ToggleGroup from './components/ToggleGroup/toggleGroup';
import config from './config';

function App() {
  type componentType = {
    id: string;
    type: string;
    label: string;
    numbers?: number[];
    content?: componentType[];
  };

  type groupType = {
    id: string;
    type: string;
    content: componentType[];
  };

  const parseToggle = (toggle: componentType) => (
    <Toggle
      id={toggle.id}
      key={toggle.id}
      label={toggle.label}
      numbers={toggle.numbers && toggle.numbers}
    />
  );

  const parseToggleGroup = (togglegrp: componentType) => (
    <ToggleGroup
      id={togglegrp.id}
      key={togglegrp.id}
      label={togglegrp.label}
      toggles={togglegrp.content as IToggle[]}
    />
  );

  const contentParser = (component: componentType | groupType) => {
    if (component.type === 'grp_normal') {
      const grp = component as groupType;
      return (
        <div key={grp.id} className='togglegrp_normal'>
          {grp.content.map((toggle) => {
            if (toggle.type === 'toggle') {
              return parseToggle(toggle);
            }
            return parseToggleGroup(toggle);
          })}
        </div>
      );
    }

    if (component.type === 'grp_compact') {
      const grp = component as groupType;
      return (
        <div key={grp.id} className='togglegrp_compact'>
          {grp.content.map((toggle) => {
            return parseToggle(toggle);
          })}
        </div>
      );
    }

    if (component.type === 'toggle') {
      return parseToggle(component as componentType);
    }

    if (component.type === 'toggle_dropdown') {
      return parseToggleGroup(component as componentType);
    }
  };

  return (
    <form>
      <div className='row'>
        <div className='col'>
          <h2>{config.row1.col1.title}</h2>
          {config.row1.col1.content.map((com) => contentParser(com))}
        </div>
        <div className='col'>
          <h2>{config.row1.col2.title}</h2>
          {config.row1.col2.content.map((com) => contentParser(com))}
        </div>
        <div className='col'>
          <h2>{config.row1.col3.title}</h2>
          {config.row1.col3.content.map((com) => contentParser(com))}
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>{config.row2.col1.title}</h2>
          {config.row2.col1.content.map((com) => contentParser(com))}
        </div>
        <div className='col'>
          <h2>{config.row2.col2.title}</h2>
          {config.row2.col2.content.map((com) => contentParser(com))}
        </div>
        <div className='col'></div>
      </div>
    </form>
  );
}

export default App;
