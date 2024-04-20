import React, { useEffect, useState } from 'react';
import './App.css'
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const handleWindowClose = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };
    
    window.addEventListener('beforeunload', handleWindowClose);
    
    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
    };
  }, []);
  
  const renderTab = () => {
    switch (activeTab) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      default:
        return <Page1 />;
    }
  };

  return (
    <div>
      <div className="tab-content">
        <button onClick={() => setActiveTab(1)}>Page 1</button>
        <button onClick={() => setActiveTab(2)}>Page 2</button>
        <button onClick={() => setActiveTab(3)}>Page 3</button>
      </div>
      <div>
        {renderTab()}
      </div>
      </div>
  );
};

export default App;
