import { Package, Heart, Info } from 'lucide-react';

function PostCard({ post, currentUser, onLike, onShowDetail }) {
  const totalValue = post.items.reduce(
    (sum, item) => sum + item.price_per_unit,
    0
  );

  const formatDate = (dateString) => {
    if (!dateString) return 'Invalid Date';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid Date';
      
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      
      return `${month}-${day} ${hours}:${minutes}`;
    } catch (e) {
      return 'Invalid Date';
    }
  };

  const getConditionDisplay = (condition) => {
    if (!condition) return null;
    return `📋 ${condition}`;
  };

  const postItColor = post.type === 'sell' ? '#fef3c7' : '#dbeafe';
  const borderColor = post.type === 'sell' ? '#fbbf24' : '#60a5fa';
  const textColor = post.type === 'sell' ? '#92400e' : '#1e3a8a';

  const isLiked = post.is_liked || false;
  const likesCount = post.likes_count || 0;

  return (
    <div style={{
      backgroundColor: postItColor,
      border: `3px solid ${borderColor}`,
      borderRadius: '4px',
      padding: '50px',
      boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s',
      position: 'relative',
      minHeight: '320px',
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.boxShadow = '6px 6px 12px rgba(0, 0, 0, 0.2)';
      e.currentTarget.style.transform = 'rotate(1deg) translateY(-4px)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.boxShadow = '4px 4px 8px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.transform = 'rotate(0deg) translateY(0)';
    }}>
      
      <div style={{
        position: 'absolute',
        top: '-8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: '#ef4444',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
        border: '2px solid #b91c1c'
      }}></div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
        paddingBottom: '10px',
        borderBottom: `2px dashed ${borderColor}`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: textColor,
            color: postItColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            border: `2px solid ${borderColor}`
          }}>
            {post.username ? post.username.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <div style={{ 
              fontSize: '14px',
              fontWeight: '700', 
              color: textColor,
              fontFamily: 'Arial, sans-serif'
            }}>
              {post.username || '未知用戶'}
            </div>
            <div style={{ 
              fontSize: '11px',
              color: textColor,
              opacity: 0.7,
              marginTop: '2px'
            }}>
              {formatDate(post.created_at)}
            </div>
          </div>
        </div>
        
        <div style={{
          padding: '4px 10px',
          backgroundColor: borderColor,
          color: 'white',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '700',
          boxShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          {post.type === 'sell' ? '💰 出售' : '🛒 求購'}
        </div>
      </div>

      {/* ✅ 配件列表（新 DB 欄位名） */}
      <div style={{ 
        flex: 1,
        marginBottom: '12px',
        maxHeight: '180px',
        overflowY: 'auto',
        paddingRight: '4px'
      }}>
        {post.items.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '8px 10px',
              marginBottom: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '6px',
              borderLeft: `4px solid ${borderColor}`,
              fontSize: '13px',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '4px',
              flexWrap: 'wrap',
              gap: '4px'
            }}>
              <span style={{ 
                fontWeight: '700',
                color: textColor,
                fontSize: '12px',
                wordBreak: 'break-word'
              }}>
                {item.item_description || '未知產品'}
              </span>
              <span style={{
                backgroundColor: borderColor,
                color: 'white',
                padding: '2px 8px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: '600',
                flexShrink: 0
              }}>
                {item.category}
              </span>
            </div>

            {/* ✅ 顯示品牌（如果有） */}
            {item.brand && (
              <div style={{
                fontSize: '11px',
                color: textColor,
                marginBottom: '4px',
                fontWeight: '600',
                opacity: 0.8
              }}>
                🏷️ {item.brand}
              </div>
            )}

            {/* ✅ 顯示新舊程度（如果有） */}
            {item.condition && getConditionDisplay(item.condition) && (
              <div style={{
                fontSize: '11px',
                color: textColor,
                marginBottom: '4px',
                fontWeight: '600',
                opacity: 0.8
              }}>
                {getConditionDisplay(item.condition)}
              </div>
            )}

            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-end',
              color: textColor,
              fontSize: '14px'
            }}>
              <span style={{ fontWeight: '700' }}>
                ${item.price_per_unit?.toFixed(2) || '0.00'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        paddingTop: '10px',
        borderTop: `2px dashed ${borderColor}`
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            color: textColor,
            fontWeight: '600'
          }}>
            <Package size={16} />
            <span>{post.items.length} 項產品</span>
          </div>

          <div style={{
            fontSize: '18px',
            fontWeight: '900',
            color: textColor,
            fontFamily: 'Arial, sans-serif',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            HK${totalValue.toFixed(2)}
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '8px',
          paddingTop: '8px',
          borderTop: `1px dashed ${borderColor}`
        }}>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onLike(post.id);
            }}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '8px 12px',
              backgroundColor: isLiked ? '#fee2e2' : 'rgba(255, 255, 255, 0.5)',
              border: `2px solid ${isLiked ? '#ef4444' : borderColor}`,
              borderRadius: '8px',
              color: isLiked ? '#dc2626' : textColor,
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = isLiked ? '#fecaca' : 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = isLiked ? '#fee2e2' : 'rgba(255, 255, 255, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Heart 
              size={16} 
              fill={isLiked ? '#dc2626' : 'none'}
              color={isLiked ? '#dc2626' : textColor}
            />
            <span>{likesCount}</span>
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onShowDetail(post);
            }}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '8px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              border: `2px solid ${borderColor}`,
              borderRadius: '8px',
              color: textColor,
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Info size={16} />
            <span>詳細</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;