import { X, Heart, MessageCircle, Clock, Package } from 'lucide-react';
import { useState } from 'react';
import QuickChatModal from './MessageCenter/QuickChatModal';
import ImageLightbox from './ImageLightbox';

function PostDetailModal({ post, currentUser, onClose, onLike }) {
  const [showQuickChat, setShowQuickChat] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const getTotalQuantity = () => {
    return post.items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalValue = () => {
    return post.items.reduce((sum, item) => sum + (item.quantity * item.price_per_unit), 0);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getConditionDisplay = (condition) => {
    if (!condition) return null;
    
    const standardConditions = ['new', 'like_new', 'good', 'fair', 'other'];
    
    if (!standardConditions.includes(condition)) {
      return condition;
    }
    
    const map = {
      'new': '🆕 全新',
      'like_new': '✨ 如新',
      'good': '👍 良好',
      'fair': '👌 尚可',
      'other': '❓ 其他'
    };
    return map[condition] || condition;
  };

  const handleContactSeller = () => {
    if (!currentUser) {
      alert('請先登入！');
      return;
    }
    if (currentUser.id === post.user_id) {
      alert('你不能同自己聊天！');
      return;
    }
    setShowQuickChat(true);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999999,
          padding: '20px',
          overflowY: 'auto'
        }}
        onClick={onClose}
      >
        <div
          className="post-detail-modal"
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '800px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{
            padding: '24px',
            borderBottom: '2px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: post.type === 'sell' ? '#fef3c7' : '#dbeafe'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                {post.username.charAt(0).toUpperCase()}
              </div>
              <div style={{ minWidth: 0 }}>
                <h2 style={{
                  margin: 0,
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#1f2937',
                  wordBreak: 'break-word'
                }}>
                  {post.username} 的
                  <span style={{
                    color: post.type === 'sell' ? '#f59e0b' : '#3b82f6',
                    marginLeft: '8px'
                  }}>
                    {post.type === 'sell' ? '💰 出售貼文' : '🛒 求購貼文'}
                  </span>
                </h2>
                <p style={{
                  margin: '4px 0 0 0',
                  fontSize: '13px',
                  color: '#6b7280',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  flexWrap: 'wrap'
                }}>
                  <Clock size={13} />
                  發佈時間：{formatDate(post.created_at)}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                flexShrink: 0
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X size={24} color="#dc2626" />
            </button>
          </div>

          {/* 內容區 */}
          <div style={{
            flex: 1,
            overflow: 'auto',
            padding: '24px'
          }}>
            {/* 配件列表 */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Package size={18} color="#3b82f6" />
                配件清單
              </h3>

              <div style={{ display: 'grid', gap: '12px' }}>
                {post.items.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '16px',
                      backgroundColor: post.type === 'sell' ? '#fef3c7' : '#dbeafe',
                      border: `2px solid ${post.type === 'sell' ? '#fbbf24' : '#60a5fa'}`,
                      borderRadius: '8px'
                    }}
                  >
                    {/* ✅ 圖片區（如果有圖片） */}
                    {item.image_url && (
                      <div style={{ marginBottom: '12px' }}>
                        <img
                          src={item.image_url}
                          alt={`配件 ${item.part_number}`}
                          style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            border: '2px solid rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer'
                          }}
                          onClick={() => setLightboxImage(item.image_url)}
                        />
                      </div>
                    )}

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '8px',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      <span style={{
                        fontWeight: '700',
                        fontFamily: 'monospace',
                        color: '#1f2937',
                        fontSize: '16px'
                      }}>
                        #{item.part_number}
                      </span>
                      <span style={{
                        padding: '4px 12px',
                        backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        {item.color}
                      </span>
                    </div>

                    {item.condition && getConditionDisplay(item.condition) && (
                      <div style={{
                        fontSize: '13px',
                        color: '#1f2937',
                        marginBottom: '8px',
                        fontWeight: '600',
                        padding: '4px 8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '4px',
                        display: 'inline-block'
                      }}>
                        📋 {getConditionDisplay(item.condition)}
                      </div>
                    )}

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                      gap: '8px',
                      fontSize: '14px',
                      color: '#1f2937'
                    }}>
                      <span>數量：<strong>×{item.quantity}</strong></span>
                      <span>單價：<strong>${item.price_per_unit}/件</strong></span>
                      <span style={{
                        fontWeight: '700',
                        color: '#10b981',
                        fontSize: '16px'
                      }}>
                        ${(item.quantity * item.price_per_unit).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}

                {/* 總計 */}
                <div style={{
                  padding: '20px',
                  backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                  borderRadius: '8px',
                  color: 'white'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '18px',
                    fontWeight: '700',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    <span>📦 總計：{getTotalQuantity()} 件</span>
                    <span style={{ fontSize: '24px' }}>
                      HK${getTotalValue().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 操作按鈕區 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              marginTop: '24px'
            }}>
              {/* 點讚按鈕 */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onLike(post.id);
                }}
                style={{
                  padding: '14px',
                  backgroundColor: post.is_liked ? '#ef4444' : '#f3f4f6',
                  color: post.is_liked ? 'white' : '#6b7280',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  if (!post.is_liked) {
                    e.currentTarget.style.backgroundColor = '#fecaca';
                  }
                }}
                onMouseOut={(e) => {
                  if (!post.is_liked) {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                  }
                }}
              >
                <Heart size={18} fill={post.is_liked ? 'white' : 'none'} />
                {post.is_liked ? '已點讚' : '點讚'} ({post.likes_count || 0})
              </button>

              {/* 私聊按鈕 */}
              {currentUser && currentUser.id !== post.user_id && (
                <button
                  onClick={handleContactSeller}
                  style={{
                    padding: '14px',
                    backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = post.type === 'sell' ? '#f59e0b' : '#3b82f6';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = post.type === 'sell' ? '#fbbf24' : '#60a5fa';
                  }}
                >
                  <MessageCircle size={18} />
                  私聊賣家
                </button>
              )}
            </div>

            {/* ✅ 底部廣告位 */}
            <div style={{
              marginTop: '24px',
              width: '100%',
              height: '150px',
              backgroundColor: '#f3f4f6',
              border: '2px dashed #d1d5db',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9ca3af',
              fontSize: '14px',
              textAlign: 'center',
              padding: '20px'
            }}>
              🖼️ 廣告位（待售）
            </div>
          </div>
        </div>
      </div>

      {/* 私聊彈窗 */}
      {showQuickChat && (
        <QuickChatModal
          post={post}
          otherUser={{ id: post.user_id, username: post.username }}
          currentUser={currentUser}
          onClose={() => setShowQuickChat(false)}
        />
      )}

      {/* ✅ 圖片放大 Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          imageUrl={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}

export default PostDetailModal;