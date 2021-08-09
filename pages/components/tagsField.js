import React, { useState, useCallback } from "react";
import {AppProvider, Card, OptionList} from '@shopify/polaris';

function TagSelection() {
  const [selected, setSelected] = useState([]);
  const tags =[
  {value: 'all', label: 'All orders'},
  {value: 'messenger', label: 'Messenger'},
  {value: 'facebook', label: 'Facebook'},
  {value: 'wholesale', label: 'Wholesale'},
  {value: 'buzzfeed', label: 'BuzzFeed'},]

  return (
    <Card>
      <OptionList
        title="Apply to orders with the following tags"
        onChange={setSelected}
        options={tags}
        selected={selected}
        allowMultiple
      />
    </Card>
  );
}

export default TagSelection