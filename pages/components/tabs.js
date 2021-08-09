import React, { useState, useCallback } from "react";
import {Card, Tabs} from '@shopify/polaris';


export default function MainTabs() {
    const [selected, setSelected] = useState(0);
  
    const handleTabChange = useCallback(
      (selectedTabIndex) => setSelected(selectedTabIndex),
      [],
    );
  
    const tabs = [
      {
        id: 'RemindersSend',
        content: 'Overview Reminders send',
        accessibilityLabel: 'Reminders-send',
        panelID: 'Reminders-send-1',
      },
      {
        id: 'ApproveReminders',
        content: 'Approve sending reminders',
        panelID: 'Approve-reminders-1',
      },
    ];
  
    return (
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <Card.Section title={tabs[selected].content}>
            <p>Tab {selected} selected</p>
          </Card.Section>
        </Tabs>
      </Card>
    );
  }

