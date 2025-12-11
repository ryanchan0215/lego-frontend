function MessageBubble({ message, isOwnMessage }) {
  
  const formatTime = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    } catch (e) {
      return '';
    }
  };

  return (
    <div 
      className="message-bubble-container"
      style={{
        display: 'flex',
        justifyContent: isOwnMessage ? 'flex-end' : 'flex-start',
        marginBottom: '8px'
      }}
    >
      <div 
        className="message-bubble-wrapper"
        style={{
          maxWidth: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isOwnMessage ? 'flex-end' : 'flex-start'
        }}
      >
        {/* 發送者名稱（只顯示對方的） */}
        {!isOwnMessage && (
          <div 
            className="message-sender-name"
            style={{
              fontSize: '11px',
              color: '#6b7280',
              marginBottom: '4px',
              paddingLeft: '12px'
            }}
          >
            {message.sender_username}
          </div>
        )}

        {/* 訊息氣泡 */}
        <div 
          className="message-bubble"
          style={{
            padding: '10px 14px',
            borderRadius: isOwnMessage ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
            backgroundColor: isOwnMessage ? '#3b82f6' : '#f3f4f6',
            color: isOwnMessage ? 'white' : '#1f2937',
            fontSize: '14px',
            lineHeight: '1.5',
            wordBreak: 'break-word',
            whiteSpace: 'pre-wrap',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
          }}
        >
          {message.content}
        </div>

        {/* 時間 */}
        <div 
          className="message-time"
          style={{
            fontSize: '10px',
            color: '#9ca3af',
            marginTop: '4px',
            paddingLeft: isOwnMessage ? '0' : '12px',
            paddingRight: isOwnMessage ? '12px' : '0'
          }}
        >
          {formatTime(message.created_at)}
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;