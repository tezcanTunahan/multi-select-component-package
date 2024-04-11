import React from 'react';
import HighlightSubstring from './HighlightSubstring';
import { Option } from '../MultiSelectInput';
import useKeyboardNavigation from '../../../hooks/useKeyboardNavigation';
import { cn } from '../../../lib/utils';

type Props = {
  options: any[];
  value: any;
  setValue: any;
  search: string;
  setSearch: any;
  errorMassage?: string;
  loading?: boolean;
};

export default function SelectList({ options, value, setValue, search, setSearch, errorMassage, loading }: Props) {
  // Custom hook to handle keyboard navigation
  useKeyboardNavigation(setSearch);

  if (errorMassage) {
    return <div className='bg-red-400 p-2 text-white'>{errorMassage}</div>;
  }
  if (loading) {
    return <div className='bg-blue-400 p-2 text-white'>Loading...</div>;
  }
  return (
    <ul className='flex flex-col gap-2 relative'>
      {search.length > 0 &&
        options.map((option, index) => (
          <button
            id='button'
            className={cn(
              'flex items-center gap-2 cursor-pointer hover:bg-gray-200 bg-gray-50 p-2 absolute z-10 w-full rounded-md border border-gray-200',
              value?.some((opt: any) => opt.value === option.value) ? 'bg-gray-300' : ''
            )}
            style={{ top: `${index * 4}rem` }}
            key={option.value}
            onClick={() => {
              setValue((prevValue: Option[] | undefined) => {
                setSearch('');
                if (prevValue?.some((opt: Option) => opt.value === option.value)) {
                  return prevValue?.filter((opt: any) => opt.value !== option.value);
                }
                return [...(prevValue || []), option];
              });
            }}>
            <img src={option.img} alt={option.label} className='w-10 h-10 rounded-md' />
            <div className='flex items-start flex-col'>
              <HighlightSubstring mainString={option.label} substring={search} />
              <p className=' text-sm text-gray-500'>{option.subTitle}</p>
            </div>
          </button>
        ))}
    </ul>
  );
}
