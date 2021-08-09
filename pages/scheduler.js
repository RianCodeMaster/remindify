import { Page, Card, AppProvider } from "@shopify/polaris";
import TemplateSelect from "./components/templateSelectList";
import React, {useState} from 'react';
import IntervalField from "./components/intervalField";
import AttemptsField from "./components/attemptsField";
import TagSelection from "./components/tagsField";

const Scheduler =  () => {
  const [text, setText] = useState('');
  return (
  <Page>
    <AppProvider>
    <Card>
      <TemplateSelect></TemplateSelect>
    </Card>
    <Card><IntervalField/></Card>
    <Card><AttemptsField/></Card>
    <Card><TagSelection/></Card>
    </AppProvider>
  </Page>
);
}

export default Scheduler;
