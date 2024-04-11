import React from 'react';
import InputSelectedElement from './InputSelectedElement';
import { SelectOption } from '../MultiSelectInput';

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption[];
  setValue: React.Dispatch<React.SetStateAction<SelectOption[] | undefined>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setFilteredOptions: React.Dispatch<React.SetStateAction<SelectOption[]>>;
};

export default function SearchBar({ options, value, setValue, search, setSearch, setFilteredOptions }: SelectProps) {
  return (
    <div
      style={{
        border: '1px solid #d1d5db',
        padding: '0.5rem',
        borderRadius: '0.375rem',
        minHeight: '3.5rem',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.5rem',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', flexWrap: 'wrap' }}>
        {value?.map((option) => (
          <InputSelectedElement key={option.value} value={option} setValue={setValue} />
        ))}

        <input
          style={{
            border: 'none',
            outline: 'none',
            minWidth: '33.333%',
            backgroundColor: 'transparent',
            borderRadius: '0.375rem',
            padding: '0.5rem 0.75rem',
          }}
          value={search}
          placeholder='Search...'
          onChange={(e) => {
            setSearch(e.target.value);
            setFilteredOptions(options.filter((option) => option.label.toLowerCase().includes(e.target.value.toLowerCase())));
          }}
        />
      </div>
    </div>
  );
}
