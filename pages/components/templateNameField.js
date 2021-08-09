import React, { useState, useCallback } from "react";
import {Card, TextField} from '@shopify/polaris';

function TemplateNameField() {
    const [textFieldValue, setTextFieldValue] = useState('');
  
    const handleTextFieldChange = useCallback(
      (value) => setTextFieldValue(value),
      [],
    );
  
    return (
      <TextField
        
        value={textFieldValue}
        onChange={handleTextFieldChange}
        placeholder="Type here the name of your template"
      />
    );
  }

export default TemplateNameField;