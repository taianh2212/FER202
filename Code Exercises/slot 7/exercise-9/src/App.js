import React from 'react';
import SimpleCard from './SimpleCard';

function App() {
  const item = {
    title: 'FPT University',
    description: 'Hoai Nguyen - FPT DaNang\nMobile: 0982827763.',
    imageUrl: 'fptlogo.webp'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <SimpleCard item={item} />
    </div>
  );
}

export default App;