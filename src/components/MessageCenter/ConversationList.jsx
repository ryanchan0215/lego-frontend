import { Package, Clock } from 'lucide-react';

function ConversationList({ conversations, selectedConversation, onSelectConversation, isLoading }) {
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    try {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) return '';
      
      const now = new Date();
      const diffInHours = (now - date) / (1000 * 60 * 60);
      
      if (diffInHours < 1) {
        const diffInMins = Math.floor((now - date) / (1000 * 60));
        return diffInMins < 1 ? '剛剛' : `${diffInMins}分鐘前`;
      } else if (diffInHours < 24) {
        return date.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
      } else if (diffInHours < 48) {
        return '昨天';
      } else {
        return date.toLocaleDateString('zh-TW', { month: '2-digit', day: '2-digit' });
      }
    } catch (e) {
      return '';
    }
  };

  if (isLoading) {
    return (
      <div 
        className={`conversation-list ${selectedConversation ? 'has-selection' : ''}`}
        style={{
          borderRight: '2px solid #e5e7eb',
          backgroundColor: '#f9fafb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af'
        }}
      >
        載入對話中...
      </div>
    );
  }

  if (conversations.length === 0) {
    return (
      <div 
        className={`conversation-list ${selectedConversation ? 'has-selection' : ''}`}
        style={{
          borderRight: '2px solid #e5e7eb',
          backgroundColor: '#f9fafb',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          color: '#9ca3af',
          textAlign: 'center'
        }}
      >
        <Package size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
        <p style={{ fontSize: '14px' }}>暫時未有對話</p>
      </div>
    );
  }

  return (
    <div 
      className={`conversation-list ${selectedConversation ? 'has-selection' : ''}`}
      style={{
        borderRight: '2px solid #e5e7eb',
        backgroundColor: '#f9fafb',
        overflowY: 'auto'
      }}
    >
      {conversations.map((conversation) => {
        const isSelected = selectedConversation?.id === conversation.id;
        const item = conversation.post_item || {};
        
        return (
          <div
            key={conversation.id}
            onClick={() => onSelectConversation(conversation)}
            className="conversation-item"
            style={{
              padding: '16px',
              borderBottom: '1px solid #e5e7eb',
              cursor: 'pointer',
              backgroundColor: isSelected ? '#eff6ff' : 'white',
              transition: 'all 0.2s',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              if (!isSelected) {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }
            }}
            onMouseOut={(e) => {
              if (!isSelected) {
                e.currentTarget.style.backgroundColor = 'white';
              }
            }}
          >
            <div style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start'
            }}>
              {/* 商品圖標 */}
              <div 
                className="conversation-icon"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  backgroundColor: '#dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #93c5fd',
                  flexShrink: 0
                }}
              >
                <Package size={24} color="#3b82f6" />
              </div>

              {/* 對話資訊 */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* 用戶名稱 + 時間 */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '4px'
                }}>
                  <div 
                    className="conversation-username"
                    style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#1f2937',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {conversation.other_user.username}
                  </div>
                  
                  <div 
                    className="conversation-time"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '11px',
                      color: '#9ca3af',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={12} />
                    {formatTime(conversation.last_message_time)}
                  </div>
                </div>

                {/* 配件資訊 */}
                {item.part_number && (
                  <div 
                    className="conversation-part-number"
                    style={{
                      fontSize: '12px',
                      color: '#3b82f6',
                      fontWeight: '600',
                      marginBottom: '4px',
                      fontFamily: 'monospace'
                    }}
                  >
                    📦 #{item.part_number} {item.color} ×{item.quantity} | ${(item.quantity * item.price_per_unit).toFixed(2)}
                  </div>
                )}

                {/* 類型標籤 */}
                <div 
                  className="conversation-badge"
                  style={{
                    display: 'inline-block',
                    fontSize: '10px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: conversation.post_type === 'sell' ? '#dcfce7' : '#fef3c7',
                    color: conversation.post_type === 'sell' ? '#15803d' : '#a16207',
                    fontWeight: '600',
                    marginBottom: '6px'
                  }}
                >
                  {conversation.post_type === 'sell' ? '🏷️ 出售' : '🔍 求購'}
                </div>

                {/* 最後訊息 */}
                <div 
                  className="conversation-last-message"
                  style={{
                    fontSize: '13px',
                    color: '#4b5563',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {conversation.last_message || '開始對話...'}
                </div>
              </div>
            </div>

            {/* 未讀標記 */}
            {conversation.unread_count > 0 && (
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: '#ef4444',
                color: 'white',
                fontSize: '11px',
                fontWeight: 'bold',
                padding: '2px 6px',
                borderRadius: '10px',
                minWidth: '18px',
                textAlign: 'center'
              }}>
                {conversation.unread_count > 99 ? '99+' : conversation.unread_count}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ConversationList;