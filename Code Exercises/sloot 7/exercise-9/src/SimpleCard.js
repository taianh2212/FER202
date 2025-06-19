import React from 'react';

const Title = ({ text }) => {
  return <h2 style={{ marginBottom: '8px' }}>{text}</h2>;
};

const Description = ({ text }) => {
  const [line1, line2] = text.split('\n');
  return (
    <div style={{ textAlign: 'right' }}>
      <p style={{ fontWeight: 'bold', margin: 0 }}>{line1}</p>
      <p style={{ margin: 0 }}>{line2}</p>
    </div>
  );
};


const Image = ({ url }) => {
  return (
    <img
      src={url}
      alt="Card visual"
      style={{ width: '150px', height: 'auto', marginRight: '16px' }}
    />
  );
};

const SimpleCard = ({ item }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      width: '600px',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div>
        <Image url={item.imageUrl} />
        <Title text={item.title} />
      </div>
      <Description text={item.description} />
    </div>
  );
};

export default SimpleCard;