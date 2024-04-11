import React from 'react';
import HighlightSubstring from './HighlightSubstring';
import { SelectOption } from '../MultiSelectInput';
import useKeyboardNavigation from '../../../hooks/useKeyboardNavigation';

type Props = {
  options: any[];
  value: any;
  setValue: any;
  search: string;
  setSearch: any;
  errorMassage: string;
  loading: boolean;
};

export default function SelectList({ options, value, setValue, search, setSearch, errorMassage, loading }: Props) {
  // Custom hook to handle keyboard navigation
  useKeyboardNavigation(setSearch);

  if (errorMassage) {
    return (
      <div
        style={{
          color: '#fff',
          position: 'relative',
          top: '20px',
        }}>
        <p
          style={{
            position: 'absolute',
            top: '50%', // Adjusted positioning to center vertically
            left: '50%', // Adjusted positioning to center horizontally
            transform: 'translate(-50%, -50%)', // Centering the message
            width: '100%', // Make the message full width
            margin: '0', // Remove default margin
            padding: '8px', // Add padding to the message
            backgroundColor: '#f87171',
          }}>
          {errorMassage}
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          color: '#fff',
          position: 'relative',
          top: '20px',
        }}>
        <p
          style={{
            position: 'absolute',
            top: '50%', // Adjusted positioning to center vertically
            left: '50%', // Adjusted positioning to center horizontally
            transform: 'translate(-50%, -50%)', // Centering the message
            width: '100%', // Make the message full width
            margin: '0', // Remove default margin
            padding: '8px', // Add padding to the message
            backgroundColor: '#87CEEB',
          }}>
          Loading...
        </p>
      </div>
    );
  }

  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        position: 'relative',
        width: '100%',
        zIndex: 999,
      }}>
      {search.length > 0 &&
        options.map((option, index) => (
          <button
            id='button'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              backgroundColor: value?.some((opt: any) => opt.value === option.value) ? '#e5e7eb' : '#fff',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              width: '100%',
              position: 'absolute',
              top: `${index * 70}px`,
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
