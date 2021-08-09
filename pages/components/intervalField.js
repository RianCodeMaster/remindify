import React, { useState, useCallback } from "react";
import {TextField} from '@shopify/polaris';

export default function IntervalField() {
    const [value, setValue] = useState('1');
  
    const handleChange = useCallback((newValue) => setValue(newValue), []);
  
    return (
      <TextField
        label="Interval"
        type="number"
        value={value}
        onChange={handleChange}
      />
    );
  }