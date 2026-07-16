import React, { useRef, useState } from 'react';
import Select from './Select';

function SelectExample() {
  const [formData, setFormData] = useState({
    country: '',
    category: '',
    priority: '',
    skills: []
  });
  const [errors, setErrors] = useState({});
  const countryRef = useRef(null);

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'in', label: 'India' }
  ];

  const categoryOptions = [
    { value: 'technology', label: 'Technology' },
    { value: 'business', label: 'Business' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'finance', label: 'Finance' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'urgent', label: 'Urgent' }
  ];

  const skillOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'css', label: 'CSS' }
  ];

  const handleChange = (e) => {
    const { name, value, multiple, options } = e.target;
    
    let finalValue = value;
    if (multiple) {
      finalValue = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: finalValue
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
    
    if (!formData.country) {
      newErrors.country = 'Country is required';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    if (!formData.priority) {
      newErrors.priority = 'Priority is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const focusCountry = () => {
    countryRef.current?.focus();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem' }}>
      <h2>Select Component Example</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Basic select with label and options */}
        <Select
          ref={countryRef}
          label="Country"
          name="country"
          placeholder="Select your country"
          options={countryOptions}
          value={formData.country}
          onChange={handleChange}
          error={errors.country}
          helperText="Choose your country of residence"
          required
        />

        {/* Required select with validation */}
        <Select
          label="Category"
          name="category"
          placeholder="Select a category"
          options={categoryOptions}
          value={formData.category}
          onChange={handleChange}
          error={errors.category}
          helperText="Select the category that best fits"
          required
        />

        {/* Select with error state */}
        <Select
          label="Priority"
          name="priority"
          placeholder="Select priority level"
          options={priorityOptions}
          value={formData.priority}
          onChange={handleChange}
          error={errors.priority}
          required
        />

        {/* Multiple select example */}
        <Select
          label="Skills (Multiple)"
          name="skills"
          options={skillOptions}
          value={formData.skills}
          onChange={handleChange}
          helperText="Hold Ctrl/Cmd to select multiple skills"
          multiple
        />

        {/* Select with helper text only */}
        <Select
          label="Department (Optional)"
          name="department"
          placeholder="Select your department"
          options={[
            { value: 'engineering', label: 'Engineering' },
            { value: 'sales', label: 'Sales' },
            { value: 'hr', label: 'Human Resources' },
            { value: 'operations', label: 'Operations' }
          ]}
          helperText="Optional field"
        />

        {/* Disabled select field */}
        <Select
          label="Status"
          name="status"
          options={[
            { value: 'active', label: 'Active' },
            { value: 'inactive', label: 'Inactive' }
          ]}
          value="active"
          disabled
          helperText="This field is disabled"
        />

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            Submit
          </button>
          <button type="button" onClick={focusCountry} style={{ padding: '0.5rem 1rem' }}>
            Focus Country
          </button>
        </div>
      </form>
    </div>
  );
}

export default SelectExample;

