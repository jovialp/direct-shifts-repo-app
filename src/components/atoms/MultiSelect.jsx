import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultiSelect = ({
  label,
  selectedOptions = [],
  options = [],
  handleChange,
}) => {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id={'multiple-checkbox-' + label}>{label}</InputLabel>
        <Select
          labelId={'multiple-checkbox-' + label}
          id={'multiple-checkbox-' + label}
          multiple
          value={personName}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox checked={selectedOptions.indexOf(option.value) > -1} />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultiSelect;
