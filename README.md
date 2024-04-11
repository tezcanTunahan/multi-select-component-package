# multi-select-component-package

This is a simple multi-select component package for Next.js typescript tailwindcss projects.

## Installation

```bash
npm install multi-select-input
```

## Usage

```tsx
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
  const [filterOptions, setFilterOptions] = useState<SelectOption[]>(options);

  return (
    <div>
      <MultiSelectInput
        value={value}
        setValue={setValue}
        options={filteredOptions}
        errorMessage={''}
        loading={false}
        onChange={(e) => {
          setFilteredOptions([...options]);
          setFilteredOptions((prev) => {
            return prev.filter((option) => option.label.includes(e.target.value));
          });
        }}
      />
    </div>
  );
}
```
