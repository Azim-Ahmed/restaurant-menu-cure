import { Autocomplete } from '@mui/material';
import { Controller } from 'react-hook-form';
/**
 *@function MUIAutoComplete.jsx
 *@author Azim
 *
 **/
function MUIAutoComplete({
  options,
  getOptionLabel,
  renderOption,
  renderInput,
  name,
  control,
  size,
  value,
  style,
  close,
}) {
  return (
    <Controller
      render={({ field: { onChange, ..._field } }) => (
        <Autocomplete
          fullWidth={true}
          id="blur-on-select"
          blurOnSelect
          style={style}
          size={size}
          options={options}
          getOptionLabel={getOptionLabel}
          renderOption={renderOption}
          renderInput={renderInput}
          onChange={
            close
              ? (e, data) => {
                  onChange(data);
                  close();
                }
              : (e, data) => onChange(data)
          }
          {..._field}
        />
      )}
      defaultValue={value}
      name={name}
      control={control}
    />
  );
}

export default MUIAutoComplete;
