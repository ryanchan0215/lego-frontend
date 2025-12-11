import { useState, useEffect } from 'react';
import { X, Trash2, Edit, Package, Shield } from 'lucide-react';
import EditPostModal from './EditPostModal';
import { request } from '../api';  // ✅ 加呢行

function MyPostsModal({ currentUser, onClose }) {
  const [myPosts, setMyPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingPost, setEditingPost] = useState(null);

  const isAdmin = currentUser?.is_admin === true;

  useEffect(() => {
    loadMyPosts();
  }, []);

  const loadMyPosts = async () => {
    try {
      setIsLoading(true);
      // ✅ 改用 request
      const endpoint = isAdmin ? '/posts/all-posts' : '/posts/my-posts';
      const data = await request(endpoint);
      setMyPosts(data);
    } catch (error) {
      console.error('載入我的貼文失敗:', error);
      alert('載入失敗：' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (postId, postUsername) => {
    const isOwnPost = postUsername === currentUser.username;
    const confirmMessage = isOwnPost
      ? '確定要刪除這個貼文嗎？刪除後無法復原！'
      : `⚠️ 管理員操作：確定要刪除 ${postUsername} 的貼文嗎？`;

    if (!confirm(confirmMessage)) {
      return;
    }

    try {
      // ✅ 改用 request
      await request(`/posts/${postId}`, {
        method: 'DELETE'
      });

      alert('刪除成功！');
      await loadMyPosts();
    } catch (error) {
      alert('刪除失敗：' + error.message);
    }
  };

  const getTotalQuantity = (items) => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalValue = (items) => {
    return items.reduce((sum, item) => sum + (item.quantity * item.price_per_unit), 0);
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return dateString;
    }
  };

  const getConditionDisplay = (condition) => {
    const map = {
      'new': '🆕 全新',
      'like_new': '✨ 如新',
      'good': '👍 良好',
      'fair': '👌 尚可',
      'other': '❓ 其他'
    };
    return map[condition] || condition;
  };

  return (
    <div
      className="my-posts-modal-overlay"
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
        padding: '20px',
        overflowY: 'auto'
      }}
    >
      <div
        className="my-posts-modal"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '1200px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Header */}
        <div className="my-posts-header" style={{
          padding: '24px',
          borderBottom: '2px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: isAdmin ? '#fef3c7' : '#f9fafb'
        }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <h2 style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: '700',
              color: '#1f2937',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap'
            }}>
              {isAdmin ? '👑 管理員 - 所有貼文' : '📦 我的貼文'}
              {isAdmin && (
                <span style={{
                  fontSize: '12px',
                  padding: '4px 8px',
                  backgroundColor: '#fbbf24',
                  color: 'white',
                  borderRadius: '6px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Shield size={12} />
                  ADMIN
                </span>
              )}
            </h2>
            <p style={{
              margin: '4px 0 0 0',
              fontSize: '14px',
              color: '#6b7280',
              wordBreak: 'break-word'
            }}>
              共 <strong>{myPosts.length}</strong> 個貼文
              {!isAdmin && (
                <>
                  {' | 剩餘發佈次數：'}
                  <strong style={{ color: '#3b82f6' }}> {currentUser.tokens}</strong>
                </>
              )}
            </p>
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
          {isLoading ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '300px',
              color: '#9ca3af',
              fontSize: '16px'
            }}>
              載入中...
            </div>
          ) : myPosts.length === 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '300px',
              color: '#9ca3af'
            }}>
              <Package size={48} style={{ marginBottom: '16px', opacity: 0.3 }} />
              <p style={{ fontSize: '16px' }}>
                {isAdmin ? '目前沒有任何貼文' : '你還沒有發佈任何貼文'}
              </p>
              {!isAdmin && (
                <p style={{ fontSize: '14px', marginTop: '8px' }}>
                  點擊右上角「發佈交易」開始發佈
                </p>
              )}
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gap: '16px'
            }}>
              {myPosts.map((post) => {
                const isOwnPost = post.username === currentUser.username;

                return (
                  <div
                    key={post.id}
                    className="post-card"
                    style={{
                      backgroundColor: post.type === 'sell' ? '#fef3c7' : '#dbeafe',
                      border: `2px solid ${post.type === 'sell' ? '#fbbf24' : '#60a5fa'}`,
                      borderRadius: '8px',
                      padding: '20px',
                      boxShadow: isAdmin && !isOwnPost ? '0 0 0 2px #ef4444' : 'none'
                    }}
                  >
                    {/* 頂部資訊區 */}
                    <div className="post-card-header" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '16px',
                      gap: '12px',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{ flex: 1, minWidth: '200px' }}>
                        {isAdmin && (
                          <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 10px',
                            backgroundColor: isOwnPost ? '#10b981' : '#6b7280',
                            color: 'white',
                            borderRadius: '12px',
                            fontSize: '12px',
                            fontWeight: '700',
                            marginBottom: '8px',
                            marginRight: '8px'
                          }}>
                            👤 {post.username}
                            {isOwnPost && ' (你)'}
                          </div>
                        )}

                        <div style={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                          color: 'white',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '700',
                          marginBottom: '8px'
                        }}>
                          {post.type === 'sell' ? '💰 出售' : '🛒 求購'}
                        </div>

                        <div style={{
                          fontSize: '12px',
                          color: '#6b7280',
                          marginBottom: '4px'
                        }}>
                          🕒 發佈時間：{formatDate(post.created_at)}
                        </div>
                        {post.updated_at !== post.created_at && (
                          <div style={{
                            fontSize: '12px',
                            color: '#6b7280'
                          }}>
                            ✏️ 更新時間：{formatDate(post.updated_at)}
                          </div>
                        )}
                        <div style={{
                          fontSize: '12px',
                          color: '#6b7280',
                          marginTop: '4px'
                        }}>
                          ❤️ 點讚數：<strong>{post.likes_count || 0}</strong>
                        </div>
                        {post.condition && (
                          <div style={{
                            fontSize: '12px',
                            color: '#6b7280',
                            marginTop: '4px'
                          }}>
                            📋 產品新舊：<strong>{getConditionDisplay(post.condition)}</strong>
                          </div>
                        )}
                      </div>

                      {/* 操作按鈕 */}
                      <div className="post-actions" style={{
                        display: 'flex',
                        gap: '8px',
                        flexWrap: 'wrap'
                      }}>
                        {isOwnPost && (
                          <button
                            onClick={() => setEditingPost(post)}
                            style={{
                              padding: '8px 16px',
                              backgroundColor: '#3b82f6',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '13px',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              whiteSpace: 'nowrap'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                          >
                            <Edit size={14} />
                            編輯
                          </button>
                        )}

                        {(isOwnPost || isAdmin) && (
                          <button
                            onClick={() => handleDelete(post.id, post.username)}
                            style={{
                              padding: '8px 16px',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '13px',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              whiteSpace: 'nowrap'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
                          >
                            <Trash2 size={14} />
                            {isAdmin && !isOwnPost ? '🔨 強制刪除' : '刪除'}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* 配件列表 */}
                    <div style={{
                      display: 'grid',
                      gap: '8px'
                    }}>
                      {post.items.map((item, index) => (
                        <div
                          key={index}
                          className="item-card"
                          style={{
                            padding: '12px',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            borderRadius: '6px',
                            border: '1px solid rgba(0,0,0,0.05)'
                          }}
                        >
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '12px',
                            flexWrap: 'wrap'
                          }}>
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              flexWrap: 'wrap'
                            }}>
                              <span style={{
                                fontWeight: '700',
                                fontFamily: 'monospace',
                                color: '#1f2937',
                                fontSize: '14px'
                              }}>
                                #{item.part_number}
                              </span>
                              <span style={{
                                display: 'inline-block',
                                padding: '2px 10px',
                                backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                                color: 'white',
                                borderRadius: '8px',
                                fontSize: '11px',
                                fontWeight: '600'
                              }}>
                                {item.color}
                              </span>
                            </div>
                            <div style={{
                              fontSize: '14px',
                              color: '#1f2937',
                              fontWeight: '600'
                            }}>
                              ×{item.quantity} @ ${item.price_per_unit}/件
                              {' '}
                              <strong style={{ marginLeft: '8px', color: '#10b981' }}>
                                = ${(item.quantity * item.price_per_unit).toFixed(2)}
                              </strong>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* 總計 */}
                      <div style={{
                        padding: '14px',
                        backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                        borderRadius: '6px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: 'white',
                        fontWeight: '700',
                        gap: '12px',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ fontSize: '14px' }}>
                          📦 總計：{getTotalQuantity(post.items)} 件
                        </span>
                        <span style={{ fontSize: '20px' }}>
                          HK${getTotalValue(post.items).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 編輯貼文彈窗 */}
      {editingPost && (
        <EditPostModal
          post={editingPost}
          currentUser={currentUser}
          onClose={() => setEditingPost(null)}
          onSuccess={async () => {
            setEditingPost(null);
            await loadMyPosts();
            window.location.reload();
          }}
        />
      )}
    </div>
  );
}

export default MyPostsModal;