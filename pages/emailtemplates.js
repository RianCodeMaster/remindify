import React, {useState} from 'react';
import { Card, Page, DisplayText, Caption, Button, DescriptionList } from "@shopify/polaris";
import MyEditor from './components/richtexteditor';
import {Editor, EditorState, getDefaultKeyBinding, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import TemplateNameField from './components/templateNameField';
import {TemplateList, items} from './components/templateList';

const EmailTemplates = () => {
  const [text, setText] = useState('');
  return (
  <Page>
    <Card>
    <TemplateNameField></TemplateNameField>
    <MyEditor />
    <Button primary className= "SaveTemplate">Save</Button>
    </Card>
    <DisplayText element="h4" size="medium">Email templates 
    
    </DisplayText>
    <DescriptionList items={items}> </DescriptionList>
  </Page>
  );
  };

export default EmailTemplates;
 