import React, { forwardRef, useId } from 'react';
import './Input.css';

const Input = forwardRef((props, ref) => {
  const {
    type = 'text',
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
    ...rest
  } = props;

  const uniqueId = useId();
  const inputId = rest.id || `input-${uniqueId}`;
  const errorId = error ? `${inputId}-error` : undefined;
  const helperTextId = helperText ? `${inputId}-helper` : undefined;

  const ariaDescribedBy = [errorId, helperTextId].filter(Boolean).join(' ') || undefined;

  const inputClassName = [
    'input-field',
    error ? 'input-error' : '',
    disabled ? 'input-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required" aria-label="required">*</span>}
        </label>
      )}
      
      <input
        ref={ref}
        id={inputId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        className={inputClassName}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={ariaDescribedBy}
        {...rest}
      />
      
      {error && (
        <span id={errorId} className="input-error-message" role="alert">
          {error}
        </span>
      )}
      
      {helperText && !error && (
        <span id={helperTextId} className="input-helper-text">
          {helperText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

