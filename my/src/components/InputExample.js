import React, { useRef, useState } from 'react';
import Input from './components/Input';

function InputExample() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const usernameRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const focusUsername = () => {
    usernameRef.current?.focus();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem' }}>
      <h2>Input Component Example</h2>
      
      <form onSubmit={handleSubmit}>
        <Input
          ref={usernameRef}
          label="Username"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
          helperText="Choose a unique username"
          required
        />

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          helperText="We'll never share your email"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          helperText="Must be at least 6 characters"
          required
        />

        <Input
          label="Phone (Optional)"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          helperText="Format: (123) 456-7890"
        />

        <Input
          label="Disabled Input"
          value="This field is disabled"
          disabled
        />

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            Submit
          </button>
          <button type="button" onClick={focusUsername} style={{ padding: '0.5rem 1rem' }}>
            Focus Username
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputExample;

