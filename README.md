# multi-select-component-package

This is a simple multi-select component package for Next.js typescript tailwind projects. easy to use 
you can change what you want to do with the manipulate the onChange function I just filter the array you can make an API call etc..

how it looks
![multi-select-input](https://github.com/tezcanTunahan/multi-select-component-package/assets/84778158/2a02a317-1476-4726-ae8a-8d97d767a6e3)


## Installation

```bash
npm install multi-select-input
```

## Usage

```tsx
'use client';
import React, { useState } from 'react';
import { MultiSelectInput } from 'multi-select-input';

type SelectOption = {
  value: string;
  label: string;
  img?: string;
  subTitle?: string;
};
const options: SelectOption[] = [
  {
    value: '1',
    label: 'Option 1',
    img: 'https://via.placeholder.com/150',
    subTitle: 'Sub Title 1',
  },
  {
    value: '2',
    label: 'Option 2',
    img: 'https://via.placeholder.com/150',
    subTitle: 'Sub Title 2',
  },
  {
    value: '3',
    label: 'Option 3',
    img: 'https://via.placeholder.com/150',
    subTitle: 'Sub Title 3',
  },
];

export default function Home() {
  const [value, setValue] = useState<SelectOption[]>([]);
  const [filteredOptions, setFilteedrOptions] = useState<SelectOption[]>(options);

  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
      <MultiSelectInput
        value={value}
        setValue={setValue}
        options={filteredOptions}
        errorMessage={''}
        loading={false}
        onChange={(e) => {
          setFilteedrOptions([...options]);
          setFilteedrOptions((prev) => {
            return prev.filter((option) => {
              return option.label.toLowerCase().includes(e.target.value.toLowerCase());
            });
          });
        }}
        className='w-1/2'
      />
    </div>
  );
}
```
