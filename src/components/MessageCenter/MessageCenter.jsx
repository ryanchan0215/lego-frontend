import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ConversationList from './ConversationList';
import ChatWindow from './ChatWindow';
import { conversationsAPI } from '../../api';

function MessageCenter({ currentUser, initialConversationId, onClose }) {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadConversations();
  }, []);

  useEffect(() => {
    if (initialConversationId && conversations.length > 0) {
      const conversation = conversations.find(c => c.id === initialConversationId);
      if (conversation) {
        handleSelectConversation(conversation);
      }
    }
  }, [initialConversationId]);

  const loadConversations = async () => {
    try {
      setIsLoading(true);
      const data = await conversationsAPI.getAll();
      setConversations(data);
    } catch (error) {
      console.error('載入對話失敗:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectConversation = async (conversation) => {
    setSelectedConversation(conversation);
    
    try {
      await conversationsAPI.markAsRead(conversation.id);
      await loadConversations();
    } catch (error) {
      console.error('標記已讀失敗:', error);
    }
  };

  const handleMessageSent = () => {
    loadConversations();
  };

  return (
    <div 
      className="message-center-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '20px'
      }}
      //onClick={onClose}
    >
      <div 
        className="message-center-modal"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '1200px',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
       // onClick={(e) => e.stopPropagation()}
      >
        {/* 標題欄 */}
        <div 
          className="message-center-header"
          style={{
            padding: '20px',
            borderBottom: '2px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f9fafb'
          }}
        >
          <h2 style={{
            margin: 0,
            fontSize: '20px',
            fontWeight: '700',
            color: '#1f2937'
          }}>
            💬 私聊信箱
          </h2>
          
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <X size={24} color="#6b7280" />
          </button>
        </div>

        {/* 主體區域 */}
        <div 
          className="message-center-main"
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '350px 1fr',
            overflow: 'hidden'
          }}
        >
          {/* 對話列表 */}
          <ConversationList
            conversations={conversations}
            selectedConversation={selectedConversation}
            onSelectConversation={handleSelectConversation}
            isLoading={isLoading}
          />

          {/* 聊天窗口 */}
          <ChatWindow
            conversation={selectedConversation}
            currentUser={currentUser}
            onMessageSent={handleMessageSent}
            onBackClick={() => setSelectedConversation(null)}
          />
        </div>
      </div>
    </div>
  );
}

export default MessageCenter;