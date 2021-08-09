import React, { useState, useCallback } from "react";
import {TextField} from '@shopify/polaris';

export default function AttemptsField() {
    const [value, setValue] = useState('1');
  
    const handleChange = useCallback((newValue) => setValue(newValue), []);
  
    return (
      <TextField
        label="Attempts"
        type="number"
        value={value}
        onChange={handleChange}
      />
    );
  }