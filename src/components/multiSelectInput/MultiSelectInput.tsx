import React, { useState } from 'react';
import SelectList from './subComponents/SelectList';
import SearchBar from './subComponents/SearchBar';

export type Option = {
  value: string;
  label: string;
  img?: string;
  subTitle?: string;
};

type Props = {
  options: Option[];
  value: Option[];
  setValue: React.Dispatch<React.SetStateAction<Option[]>>;
  errorMessage?: string;
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MultiSelectSearch({ options, value, setValue, errorMessage, loading, onChange }: Props) {
  const [search, setSearch] = useState('');

  return (
    <div className='w-full'>
      <SearchBar value={value} setValue={setValue} search={search} setSearch={setSearch} onChange={onChange} />
      <SelectList
        options={options}
        value={value}
        setValue={setValue}
        search={search}
        setSearch={setSearch}
        errorMassage={errorMessage}
        loading={loading}
      />
    </div>
  );
}
