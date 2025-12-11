import { useState, useEffect, useRef } from 'react';
import { X, Send, Package } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { conversationsAPI } from '../../api';

function QuickChatModal({ post, otherUser, currentUser, onClose }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    loadOrCreateConversation();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadOrCreateConversation = async () => {
    try {
      setIsLoading(true);
      
      const conversations = await conversationsAPI.getAll();
      
      const existing = conversations.find(c => 
        c.post_id === post.id && c.other_user.id === otherUser.id
      );

      if (existing) {
        setConversationId(existing.id);
        const msgs = await conversationsAPI.getMessages(existing.id);
        setMessages(msgs);
        await conversationsAPI.markAsRead(existing.id);
      } else {
        setConversationId(null);
        setMessages([]);
      }
    } catch (error) {
      console.error('載入對話失敗:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim() || isSending) return;
    
    try {
      setIsSending(true);
      
      if (conversationId) {
        await conversationsAPI.sendMessage(conversationId, newMessage.trim());
      } else {
        const response = await conversationsAPI.startOrGet(post.id);
        setConversationId(response.conversation_id);
        await conversationsAPI.sendMessage(response.conversation_id, newMessage.trim());
      }
      
      setNewMessage('');
      await loadOrCreateConversation();
    } catch (error) {
      alert('發送訊息失敗：' + error.message);
    } finally {
      setIsSending(false);
    }
  };

  const getItemInfo = () => {
    if (post.items && post.items.length > 0) {
      const firstItem = post.items[0];
      return {
        partNumber: firstItem.part_number,
        color: firstItem.color,
        condition: firstItem.condition,
        quantity: post.items.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: post.items.reduce((sum, item) => sum + (item.quantity * item.price_per_unit), 0)
      };
    }
    return null;
  };

  const itemInfo = getItemInfo();

  return (
    <div 
      className="quick-chat-overlay"
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
        zIndex: 9999999,
        padding: '20px'
      }}
     // onClick={onClose}
    >
      <div 
        className="quick-chat-modal"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '600px',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
        //onClick={(e) => e.stopPropagation()}
      >
        {/* 標題欄 */}
        <div 
          className="quick-chat-header"
          style={{
            padding: '16px 20px',
            borderBottom: '2px solid #e5e7eb',
            backgroundColor: '#f9fafb'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <h3 style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: '700',
              color: '#1f2937'
            }}>
              💬 與 {otherUser.username} 對話
            </h3>
            
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X size={20} color="#6b7280" />
            </button>
          </div>

          {itemInfo && (
            <div 
              className="quick-chat-item-info"
              style={{
                display: 'flex',
                gap: '12px',
                padding: '12px',
                backgroundColor: '#eff6ff',
                borderRadius: '8px',
                border: '1px solid #bfdbfe'
              }}
            >
              <div 
                className="quick-chat-item-icon"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '6px',
                  backgroundColor: '#dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #93c5fd',
                  flexShrink: 0
                }}
              >
                <Package size={30} color="#3b82f6" />
              </div>
              
              <div 
                className="quick-chat-item-details"
                style={{ flex: 1, minWidth: 0 }}
              >
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1e40af',
                  marginBottom: '6px',
                  fontFamily: 'monospace'
                }}>
                  #{itemInfo.partNumber} {itemInfo.color}
                </div>
                
                {itemInfo.condition && (
                  <div style={{
                    fontSize: '11px',
                    color: '#10b981',
                    fontWeight: '600',
                    marginBottom: '6px'
                  }}>
                    ✨ {itemInfo.condition}
                  </div>
                )}
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    fontSize: '12px',
                    color: '#3b82f6',
                    fontWeight: '600'
                  }}>
                    ×{itemInfo.quantity} 件
                  </div>
                  
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#3b82f6'
                  }}>
                    ${itemInfo.totalPrice.toFixed(2)}
                  </div>
                  
                  <div style={{
                    fontSize: '11px',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: post.type === 'sell' ? '#dcfce7' : '#fef3c7',
                    color: post.type === 'sell' ? '#15803d' : '#a16207',
                    fontWeight: '600'
                  }}>
                    {post.type === 'sell' ? '🏷️ 出售' : '🔍 求購'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 訊息列表 */}
        <div 
          className="quick-chat-messages"
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
              <Package size={48} style={{ marginBottom: '12px', opacity: 0.3 }} />
              <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: '500' }}>開始新對話</p>
              <p style={{ fontSize: '12px' }}>發送第一條訊息給 {otherUser.username}</p>
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

        {/* 廣告位 */}
        <div 
          className="quick-chat-ad"
          style={{
            padding: '20px',
            backgroundColor: '#f3f4f6',
            border: '2px dashed #d1d5db',
            borderTop: '2px solid #e5e7eb',
            textAlign: 'center',
            color: '#9ca3af',
            fontSize: '13px'
          }}
        >
          🖼️ 廣告位（待售）
        </div>

        {/* 輸入框 */}
        <form 
          onSubmit={handleSendMessage}
          className="quick-chat-input-form"
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
              autoFocus
              className="quick-chat-textarea"
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
              className="quick-chat-send-btn"
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
                  e.currentTarget.style.backgroundColor = '#2563eb';
                }
              }}
              onMouseOut={(e) => {
                if (newMessage.trim() && !isSending) {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                }
              }}
            >
              <Send size={16} />
              {isSending ? '發送中...' : '發送'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuickChatModal;