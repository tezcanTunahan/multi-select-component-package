import React from 'react';
import HighlightSubstring from './HighlightSubstring';
import { SelectOption } from '../MultiSelectInput';
import useKeyboardNavigation from '../../../hooks/useKeyboardNavigation';

type SelectOptionProps = {
  filteredOptions: any[];
  value: any;
  setValue: any;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SelectList({ filteredOptions, value, setValue, search, setSearch }: SelectOptionProps) {
  // Custom hook to handle keyboard navigation
  useKeyboardNavigation(setSearch);

  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        position: 'relative',
        width: '100%',
        zIndex: 999,
        backgroundColor: '#fff',
      }}>
      {search.length > 0 &&
        filteredOptions.map((option) => (
          <button
            id='button'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              backgroundColor: value?.some((opt: any) => opt.value === option.value) ? '#e5e7eb' : '',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              width: '100%',
            }}
            key={option.value}
            onClick={() => {
              setValue((prevValue: SelectOption[] | undefined) => {
                if (prevValue?.some((opt: SelectOption) => opt.value === option.value)) {
                  return prevValue?.filter((opt: any) => opt.value !== option.value);
                }
                setSearch('');
                return [...(prevValue || []), option];
              });
            }}>
            {option.img && (
              <img
                src={option.img}
                alt={option.label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            )}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
              <HighlightSubstring mainString={option.label} substring={search} />
              <p
                style={{
                  fontSize: '12px',
                  color: '#6b7280',
                }}>
                {option.episode} Episodes
              </p>
            </div>
          </button>
        ))}
    </ul>
  );
}
