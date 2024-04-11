import React, { useState } from 'react';
import SelectList from './subComponents/SelectList';
import SearchBar from './subComponents/SearchBar';

export type SelectOption = {
  value: string;
  label: string;
  img?: string;
  subTitle?: string;
};

type Props = {
  options: SelectOption[];
  value?: SelectOption[];
  setValue: React.Dispatch<React.SetStateAction<SelectOption[] | undefined>>;
  errorMessage: string;
  loading: boolean;
};

export default function MultiSelectSearch({ options, value, setValue, errorMessage, loading }: Props) {
  // filtered options based on the search value
  const [filteredOptions, setFilteredOptions] = useState(options);

  const [search, setSearch] = useState('');

  return (
    <div
      style={{
        width: '100%',
      }}>
      <SearchBar options={options} value={value} setValue={setValue} search={search} setFilteredOptions={setFilteredOptions} setSearch={setSearch} />
      <SelectList filteredOptions={filteredOptions} value={value} setValue={setValue} search={search} setSearch={setSearch} />
    </div>
  );
}
