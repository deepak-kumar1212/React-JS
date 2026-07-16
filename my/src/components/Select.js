import React, { forwardRef, useId } from 'react';
import './Select.css';

const Select = forwardRef((props, ref) => {
  const {
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    onFocus,
    disabled = false,
    required = false,
    className = '',
    label,
    error,
    helperText,
    options = [],
    multiple = false,
    ...rest
  } = props;

  const uniqueId = useId();
  const selectId = rest.id || `select-${uniqueId}`;
  const errorId = error ? `${selectId}-error` : undefined;
  const helperTextId = helperText ? `${selectId}-helper` : undefined;

  const ariaDescribedBy = [errorId, helperTextId].filter(Boolean).join(' ') || undefined;

  const selectClassName = [
    'select-field',
    error ? 'select-error' : '',
    disabled ? 'select-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="select-wrapper">
      {label && (
        <label htmlFor={selectId} className="select-label">
          {label}
          {required && <span className="select-required" aria-label="required">*</span>}
        </label>
      )}
      
      <select
        ref={ref}
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        multiple={multiple}
        className={selectClassName}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={ariaDescribedBy}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={option.value || index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {error && (
        <span id={errorId} className="select-error-message" role="alert">
          {error}
        </span>
      )}
      
      {helperText && !error && (
        <span id={helperTextId} className="select-helper-text">
          {helperText}
        </span>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;

