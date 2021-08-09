import React, { useState, useCallback } from "react";
import {Select, SelectProps} from '@shopify/polaris';
import {items} from './templateList'



// export default function OptionListTemplates() {
//   const [selected, setSelected] = useState([]);
//   const items =[TemplateList.items];
//   return (
//     <Card>
//       <OptionList
//         title="Choose template"
//         onChange={setSelected}
//         options={[
//           {value: 'byward_market', label: 'Byward Market'},
//           {value: 'centretown', label: 'Centretown'},
//           {value: 'hintonburg', label: 'Hintonburg'},
//           {value: 'westboro', label: 'Westboro'},
//           {value: 'downtown', label: 'Downtown'},
//         ]}
//         selected={selected}
//       />
//     </Card>
//   );
// }
// newitems = items;
const testitems = [
  {
    id: 104,
    url: 'templates/341',
    label: 'Mae Jemison',
    value: `<p>Dear [client name],</p>
    <p>I’m contacting you on behalf of [your company] with regard to the following invoice:</p>
    <p>[invoice ref number] / [invoice balance]</p>
    <P>This invoice is due for payment on [invoice due date]. It would be greatly appreciated if you could confirm receipt of this invoice and advise as to whether payment has been scheduled.</P>
    <P>I have attached a copy of the invoice for your reference. If you require any further information from our side, please let me know.</P>
    <P>Best wishes,</P>
    <P>[sender name]</P>`,
  },
  {
    id: 204,
    url: 'templates/256',
    label: 'Ellen Ochoa',
    value: `<p>Dear [client name],</P>
    <P>I’m contacting you on behalf of [your company] with regard to the following invoice:</P>
    <P>[invoice ref number] / [invoice balance]</P>
    <P>This invoice is due for payment on [invoice due date]. It would be greatly appreciated if you could confirm receipt of this invoice and advise as to whether payment has been scheduled.</P>
    <P>I have attached a copy of the invoice for your reference. If you require any further information from our side, please let me know.</P>
    <P>Best wishes,</P>
    <P>[sender name]</P>`,
  },
];

export default function TemplateSelect() {

  const [selected, setSelected] = useState('newestUpdate');

  const handleSelectChange = useCallback((value) => setSelected(value), []);


  return (
    <Select
      label="Template"
      labelAction
      options={testitems}
      onChange={handleSelectChange}
      value={selected}
    
    />
  );
}