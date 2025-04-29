import React from 'react';

export default function CallModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h2>Вы действительно хотите позвонить?</h2>
        <div style={{ marginTop: '20px' }}>
          <button onClick={onConfirm} style={styles.button}>Позвонить</button>
          <button onClick={onClose} style={{ ...styles.button, backgroundColor: '#ccc', marginLeft: '10px' }}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
    backdrop: {
      fontfamily: "Arial Narrow serif",
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      fontfamily: "Arial Narrow serif",
      backgroundColor: '#fff', padding: '30px', borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '340px', textAlign: 'center'
    },
    title: {
      fontfamily: "Arial Narrow serif",
      fontSize: '18px',
      marginBottom: '20px'
    },
    buttons: {
      fontfamily: "Arial Narrow serif",
      display: 'flex',
      justifyContent: 'center',
    }
  };
