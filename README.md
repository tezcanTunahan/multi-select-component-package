# multi-select-component-package

This is a simple multi-select component package for Next.js typescript tailwind projects. easy to use 
you can change what you want to do with the manipulate the onChange function I just filter the array you can make an API call etc..

https://github.com/tezcanTunahan/multi-select-component-package/assets/84778158/254c426a-ce5b-49d2-9cd5-578624a010bc

![image](https://github.com/tezcanTunahan/multi-select-component-package/assets/84778158/05f73354-6138-470d-aa3d-e40dd13665a3)
![image](https://github.com/tezcanTunahan/multi-select-component-package/assets/84778158/33b35a27-72e2-4fd6-9803-66403dc56ce1)




## Installation

```bash
npm install multi-select-input
```


Uploading Create Next App - Google Chrome 2024-04-13 01-38-40.mp4…


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
