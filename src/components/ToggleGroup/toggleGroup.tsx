import React, { useState } from 'react';
import Toggle, { IToggle } from '../Toggle/toggle';
import './toggleGroup.css';

interface IToggleGroup extends IToggle {
  toggles: IToggle[];
}

const ToggleGroup = ({ id, label, toggles }: IToggleGroup) => {
  const [toggled, setToggled] = useState({ toggled: false, opened: false });

  const handleOnToggle = () => {
    setToggled((prev) => {
      return {
        toggled: !prev.toggled,
        opened: !prev.toggled,
      };
    });
  };

  const handleOnClick = () => {
    setToggled((prev) => {
      return {
        toggled: prev.toggled,
        opened: !prev.opened,
      };
    });
  };

  return (
    <div
      className={`togglegroup ${toggled.opened ? 'togglegroup--active' : ''}`}
    >
      <Toggle
        id={id}
        label={label}
        isToggled={toggled.toggled}
        onToggle={handleOnToggle}
      />
      <button
        type='button'
        onClick={handleOnClick}
        className='togglegroup__chevron'
      ></button>
      <div
        className={`togglegroup__accordion ${
          toggled.opened ? 'togglegroup__accordion--active' : ''
        }`}
      >
        {toggles.map((toggle) => {
          return (
            <Toggle
              id={toggle.id}
              key={toggle.id}
              label={toggle.label}
              disabled={!toggled.toggled}
              numbers={toggle.numbers && toggle.numbers}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ToggleGroup;
