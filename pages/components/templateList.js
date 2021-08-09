import React, { useState, useCallback } from "react";
import {Card, ResourceList, ResourceItem, TextStyle} from '@shopify/polaris';
import parse from 'html-react-parser';
import { hydrate } from "react-dom";

export var items= [
  {
    term: 'Logistics',
    description:
      'The management of products or other resources as they travel between a point of origin and a destination.',
  },
  {
    term: 'Sole proprietorship',
    description:
      'A business structure where a single individual both owns and runs the company.',
  },
  {
    term: 'Discount code',
    description:
      'A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.',
  }
]


export default function TemplateList() {
    const [selectedItems, setSelectedItems] = useState([]);
  

    const resourceName = {
      singular: 'template',
      plural: 'templates',
    };
  
    
    const promotedBulkActions = [
      {
        content: 'Edit templates',
        onAction: () => console.log('Todo: implement bulk edit'),
      },
    ];
  
    const bulkActions = [
      {
        content: 'Add tags',
        onAction: () => console.log('Todo: implement bulk add tags'),
      },
      {
        content: 'Remove tags',
        onAction: () => console.log('Todo: implement bulk remove tags'),
      },
      {
        content: 'Delete templates',
        onAction: () => console.log('Todo: implement bulk delete'),
      },
    ];
  
    return (
      <Card>
        <ResourceList
          resourceName={resourceName}
          items={items}
          renderItem={renderItem}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          name='Created email templates'
        //   promotedBulkActions={promotedBulkActions}
        //   bulkActions={bulkActions}
          
        />
      </Card>
    );
  
   function renderItem(item) {
      const {id, url, name, templateText} = item;
     
  
      return (
        <ResourceItem
          id={id}
          resourceName={resourceName}

          url={url}
          
          accessibilityLabel={`View details for ${name}`}
        >
          <h3>
            <TextStyle variation="strong">{name}</TextStyle>
          </h3>
          <div>{parse(templateText)}</div>
        </ResourceItem>
      );
    }
  }