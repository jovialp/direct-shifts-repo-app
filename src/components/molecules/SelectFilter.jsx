import React from 'react';
import Box from '@mui/joy/Box';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';

const SelectFilter = ({
  name = 'Filter',
  onChange,
  filterOptions = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'C' },
  ],
  currentValue = 'a',
}) => {
  // console.log('filterOptions,', filterOptions);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography id={name} fontWeight="lg" fontSize="sm">
        {name}:
      </Typography>
      <Select
        name={name}
        defaultValue={currentValue}
        onChange={(event) => {
          // console.log('ss->', event.target);
          // onChange(event.target.value);
        }}
      >
        {filterOptions.map((option) => (
          <Option
            key={option.value}
            value={option.value}
            onClick={() => {
              onChange(option.value);
            }}
          >
            {option.label}
          </Option>
        ))}
      </Select>
    </Box>
  );
};
export default SelectFilter;
