import React, { useState } from 'react';
import './App.css';
import CallModal from './CallModal';
import ResultModal from './ResultModal';
import { updateCandidateStatus } from './api';


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [candidates, setCandidates] = useState([
    { id: '1', name: 'Иван Иванов', status: 'new' },
    { id: '2', name: 'Ольга Смирнова', status: 'new' },
    { id: '3', name: 'Алексей Петров', status: 'new' },
  ]);
  function getStatusText(status) {
    switch (status) {
      case 'new': return 'Новый';
      case 'accepted': return 'Принят';
      case 'rejected': return 'Отказ';
      case 'call_missed': return 'Не дозвонился';
      default: return status;
    }
  }
  
  const handleCallClick = (userId) => {
    setSelectedUserId(userId);
    setModalOpen(true);
  };

  const handleConfirmCall = () => {
    setModalOpen(false);
    setResultModalOpen(true);
  };

  const handleResult = (status) => {
    setResultModalOpen(false);
    
    // Просто обновляем статус в state — без API
    setCandidates(prev =>
      prev.map(c =>
        c.id === selectedUserId ? { ...c, status } : c
      )
    );
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'new': return { color: 'white', backgroundColor: '#2583f4' };
      case 'accepted': return { backgroundColor: '#4caf50', color: 'white' };
      case 'rejected': return { backgroundColor: '#ff4d4f', color: 'white' };
      case 'call_missed': return { backgroundColor: '#ffcc00', color: 'black' };
      default: return {};
    }
  };

  return (
    <div className="app-container">
      <h1>Список откликов</h1>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Статус</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <span style={{ padding: '4px 8px', borderRadius: '4px', ...getStatusStyle(user.status) }}>
                  {getStatusText(user.status)}
                </span>
              </td>
              <td>
                <button onClick={() => handleCallClick(user.id)}>Позвонить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CallModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmCall}
      />

      <ResultModal
        isOpen={resultModalOpen}
        onClose={() => setResultModalOpen(false)}
        onResult={handleResult}
      />
    </div>
  );
}

export default App;
