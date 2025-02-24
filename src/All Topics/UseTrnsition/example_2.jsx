import { useState, useTransition } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setActiveTab(tab); // Pretend this is slow
    });
  };

  return (
    <div>
      <button onClick={() => handleTabChange('tab1')}>Tab 1</button>
      <button onClick={() => handleTabChange('tab2')}>Tab 2</button>
      {isPending ? (
        <p>Switching...</p>
      ) : (
        <p>Content for {activeTab}</p>
      )}
    </div>
  );
}

export default Tabs;

// What’s Happening:
// Clicking a tab starts a transition.
// isPending shows “Switching…” while the tab change happens.
// The UI stays responsive, even if the update lags.