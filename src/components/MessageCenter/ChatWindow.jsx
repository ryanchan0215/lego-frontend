import { useState, useEffect, useRef } from 'react';
import { Send, Package, ArrowLeft } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { conversationsAPI } from '../../api';

function ChatWindow({ conversation, currentUser, onMessageSent, onBackClick }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (conversation?.id) {
      loadMessages();
    }
  }, [conversation?.id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadMessages = async () => {
    if (!conversation) return;
    
    try {
      setIsLoading(true);
      const data = await conversationsAPI.getMessages(conversation.id);
      setMessages(data);
    } catch (error) {
      console.error('載入訊息失敗:', error);
    } finally {
      setIsLoading(false);
    }
  };

const handleSendMessage = async (e) => {
  e.preventDefault();
  
  if (!newMessage.trim() || isSending) return;
  
  setIsSending(true);
  
  try {
    await conversationsAPI.sendMessage(conversation.id, newMessage.trim());
    setNewMessage('');
    
    await loadMessages();
    
    if (onMessageSent) {
      onMessageSent();
    }
  } catch (error) {
    alert('發送訊息失敗：' + error.message);
  } finally {
    setIsSending(false); // ✅ 無論成功或失敗都要 reset
  }
};

  if (!conversation) {
    return (
      <div 
        className="chat-window no-selection"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: '#9ca3af'
        }}
      >
        <Package size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
        <p style={{ fontSize: '16px' }}>請選擇一個對話</p>
      </div>
    );
  }

  return (
    <div 
      className="chat-window"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* 對話頂部 */}
      <div 
        className="chat-window-header"
        style={{
          padding: '16px 20px',
          borderBottom: '2px solid #e5e7eb',
          backgroundColor: '#f9fafb'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          {/* 返回按鈕（手機版顯示） */}
          {onBackClick && (
            <button
              onClick={onBackClick}
              className="chat-back-button"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: '#f3f4f6',
                cursor: 'pointer',
                flexShrink: 0
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
            >
              <ArrowLeft size={20} color="#374151" />
            </button>
          )}

          <div 
            className="chat-user-avatar"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
              flexShrink: 0
            }}
          >
            {conversation.other_user.username.charAt(0).toUpperCase()}
          </div>
          
          <div style={{ flex: 1, minWidth: 0 }}>
            <div 
              className="chat-user-name"
              style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '2px'
              }}
            >
              {conversation.other_user.username}
            </div>
            <div 
              className="chat-post-title"
              style={{
                fontSize: '12px',
                color: '#6b7280',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              關於: {conversation.post_title}
            </div>
          </div>
        </div>
      </div>

      {/* 訊息列表 */}
      <div 
        className="chat-messages-container"
        style={{
          flex: 1,
          overflow: 'auto',
          padding: '20px',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {isLoading ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#9ca3af'
          }}>
            載入訊息中...
          </div>
        ) : messages.length === 0 ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#9ca3af',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}>暫時未有訊息</p>
            <p style={{ fontSize: '12px' }}>發送第一條訊息開始對話</p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                isOwnMessage={message.sender_id === currentUser.id}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* 輸入框 */}
      <form 
        onSubmit={handleSendMessage}
        className="chat-input-form"
        style={{
          padding: '16px 20px',
          borderTop: '2px solid #e5e7eb',
          backgroundColor: '#f9fafb'
        }}
      >
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-end'
        }}>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(e);
              }
            }}
            placeholder="輸入訊息... (Enter 發送，Shift+Enter 換行)"
            className="chat-textarea"
            style={{
              flex: 1,
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              resize: 'none',
              minHeight: '50px',
              maxHeight: '120px',
              fontFamily: 'inherit',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
          />
          
          <button
            type="submit"
            disabled={!newMessage.trim() || isSending}
            className="chat-send-btn"
            style={{
              padding: '12px 20px',
              backgroundColor: newMessage.trim() && !isSending ? '#3b82f6' : '#d1d5db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: newMessage.trim() && !isSending ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              if (newMessage.trim() && !isSending) {
                e.target.style.backgroundColor = '#2563eb';
              }
            }}
            onMouseOut={(e) => {
              if (newMessage.trim() && !isSending) {
                e.target.style.backgroundColor = '#3b82f6';
              }
            }}
          >
            <Send size={16} />
            {isSending ? '發送中...' : '發送'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatWindow;