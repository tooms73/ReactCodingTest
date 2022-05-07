import React, { useEffect, useRef } from 'react';
import './toggle.css';

export interface IToggle {
  id: string;
  label: string;
  numbers?: number[];
  disabled?: boolean;
  isToggled?: boolean;
  onToggle?: () => void;
}

const Toggle = ({
  id,
  label,
  numbers,
  disabled,
  isToggled,
  onToggle,
}: IToggle) => {
  const inputProps: { checked?: boolean; onChange?: () => void } = {};
  if (isToggled !== undefined && onToggle) {
    inputProps.checked = isToggled;
    inputProps.onChange = onToggle;
  }

  const toggleRef = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    if (!disabled) return;
    if (toggleRef.current) {
      (toggleRef.current as HTMLInputElement).checked = false;
    }
    if (selectRef.current) {
      (selectRef.current as HTMLSelectElement).value = '0';
    }
  }, [disabled]);

  return (
    <div className='toggle'>
      <label htmlFor={id} className='toggle__label'>
        {label}
      </label>
      {numbers && numbers.length > 0 && (
        <select
          ref={selectRef}
          disabled={disabled}
          title='numbers'
          className='toggle__select'
        >
          {numbers.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      )}
      <input
        id={id}
        ref={toggleRef}
        type='checkbox'
        disabled={disabled}
        className='toggle__checkbox'
        {...inputProps}
      />
    </div>
  );
};

export default Toggle;
