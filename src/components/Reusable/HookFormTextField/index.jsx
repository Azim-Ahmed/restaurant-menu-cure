import { TextField, FormControlLabel, Checkbox } from '@mui/material';
import { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import ErrorMessages from '../ErrorMessages';

const HookFormTextField = ({
  control,
  defaultValue,
  label,
  name,
  style,
  className,
  rules,
  size,
  variant,
  type,
  errors,
  InputProps,
  checkBox,
  checkBoxData,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ? defaultValue : ''}
        rules={
          rules
            ? rules
            : {
                required: {
                  value: true,
                  message: 'This is required',
                },
              }
        }
        render={({ field }) => (
          <>
            {checkBox ? (
              //must pass an array with label and value and need to create defaultValues in useForm hook
              checkBoxData.map((fruitOption) => (
                <FormControlLabel
                  key={fruitOption.label}
                  label={fruitOption.label}
                  control={
                    <Checkbox
                      value={fruitOption.value}
                      checked={field.value.some((existingValue) => existingValue === fruitOption.value)}
                      onChange={(event, checked) => {
                        if (checked) {
                          field.onChange([...field.value, event.target.value]);
                        } else {
                          field.onChange(field.value.filter((value) => value !== event.target.value));
                        }
                      }}
                    />
                  }
                />
              ))
            ) : (
              <TextField
                {...field}
                size={size ? size : 'medium'}
                fullWidth={type === 'checkbox' ? false : true}
                style={style}
                autoComplete={type === 'password' ? 'true' : 'false'}
                className={className}
                label={label}
                variant={variant ? variant : 'outlined'}
                type={type ? type : 'text'}
                InputProps={InputProps}
              />
            )}
          </>
        )}
      />
      {errors && <ErrorMessages errors={errors} name={name} />}
    </>
  );
};

export default HookFormTextField;
