import React from 'react';

export default function ResultModal({ isOpen, onClose, onResult }) {
  if (!isOpen) return null;

  const handleClick = (status) => {
    onResult(status);
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h2>Как прошёл звонок?</h2>
        <div style={styles.buttons}>
          <button onClick={() => handleClick('call_missed')} style={{ ...styles.button, backgroundColor: '#ffcc00' }}>
            Не дозвонился
          </button>
          <button onClick={() => handleClick('rejected')} style={{ ...styles.button, backgroundColor: '#ff4d4f' }}>
            Отказ
          </button>
          <button onClick={() => handleClick('accepted')} style={{ ...styles.button, backgroundColor: '#4caf50' }}>
            Успешно
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center'
  },
  modal: {
    backgroundColor: '#fff', padding: '30px', borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '360px', textAlign: 'center'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '20px'
  },
  button: {
    padding: '12px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};
