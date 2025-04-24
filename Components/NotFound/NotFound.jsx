import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px',
      minHeight: '70vh'
    }}>
      <img 
        src="https://i.pinimg.com/originals/01/b7/11/01b711fe30b2e8214a4814473829c73e.jpg" 
        alt="Error 404 - Gohan" 
        style={{ 
          maxWidth: '500px', 
          width: '100%', 
          height: 'auto', 
          borderRadius: '10px',
          marginBottom: '20px'
        }} 
      />
      
      <Link to="/">
        <button 
          style={{
            backgroundColor: '#ff6600',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#ff4500'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ff6600'}
        >
          Volver al inicio
        </button>
      </Link>
    </div>
  );
};

export default NotFound;