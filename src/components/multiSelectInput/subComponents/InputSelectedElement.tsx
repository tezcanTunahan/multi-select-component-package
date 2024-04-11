import React from 'react';
import { SelectOption } from '../MultiSelectInput';
import { getSubString } from '../../../lib/utils';

type InputSelectedElementProps = {
  value: SelectOption;
  setValue: React.Dispatch<React.SetStateAction<SelectOption[] | undefined>>;
};

// Component to show the selected elements in the input
export default function InputSelectedElement({ value, setValue }: InputSelectedElementProps) {
  const removeElement = () => {
    setValue((prevValue: SelectOption[] | undefined) => {
      return prevValue?.filter((opt) => opt.value !== value.value);
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 10px',
        backgroundColor: '#e5e7eb',
        borderRadius: '5px',
      }}>
      <p
        style={{
          display: 'flex',
          minWidth: 'max-content',
          color: '#374151',
          fontSize: '14px',
        }}>
        {getSubString(value.label, 10)}
      </p>

      <button
        onClick={removeElement}
        style={{
          padding: '4px',
          backgroundColor: '#374151',
          borderRadius: '50%',
          border: 'none',
          color: '#ffffff',
        }}>
        x
      </button>
    </div>
  );
}
