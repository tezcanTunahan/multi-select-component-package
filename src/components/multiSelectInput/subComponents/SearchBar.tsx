import React from 'react';
import InputSelectedElement from './InputSelectedElement';
import { SelectOption } from '../MultiSelectInput';

type Props = {
  value?: SelectOption[];
  setValue: React.Dispatch<React.SetStateAction<SelectOption[]>>;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ value, setValue, search, onChange, setSearch }: Props) {
  return (
    <div className='border border-gray-600 p-2 rounded-md min-h-14 mb-4 flex flex-row  items-center justify-between gap-2  shadow-md'>
      <div className='flex flex-wrap gap-2'>
        {/* Show the selected elements in the input */}
        {value?.map((option) => (
          <InputSelectedElement key={option.value} value={option} setValue={setValue} />
        ))}

        <input
          className='border-none outline-none min-w-1/3'
          value={search}
          placeholder='Search...'
          onChange={(e) => {
            setSearch(e.target.value);
            onChange(e);
          }}
        />
      </div>
    </div>
  );
}
