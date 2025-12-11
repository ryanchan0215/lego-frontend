import { useState, useEffect } from 'react';
import { X, Users, Plus, RefreshCw } from 'lucide-react';
import { request } from '../api';  // ✅ 加呢行

function AdminPanel({ onClose, currentUser }) {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [tokenAmount, setTokenAmount] = useState('');
  const [tokenDescription, setTokenDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      
      // ✅ 改用 request
      const [usersData, statsData] = await Promise.all([
        request('/admin/users'),
        request('/admin/stats/overview')
      ]);

      setUsers(usersData);
      setStats(statsData);
    } catch (error) {
      console.error('載入數據失敗:', error);
      alert('載入失敗：' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTokens = async () => {
    if (!selectedUser || !tokenAmount || tokenAmount <= 0) {
      alert('請填寫有效數量！');
      return;
    }

    try {
      // ✅ 改用 request
      const result = await request(`/admin/users/${selectedUser.id}/add-tokens`, {
        method: 'POST',
        body: JSON.stringify({
          amount: parseInt(tokenAmount),
          description: tokenDescription || `管理員增加 ${tokenAmount} 次發佈機會`
        })
      });

      alert(result.message);
      setTokenAmount('');
      setTokenDescription('');
      setSelectedUser(null);
      await loadData();
    } catch (error) {
      alert('操作失敗：' + error.message);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '從未登入';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return '從未登入';
    }
  };

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          fontSize: '18px',
          fontWeight: '600',
          color: '#3b82f6'
        }}>
          載入中...
        </div>
      </div>
    );
  }

  return (
    <div 
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
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '1400px',
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
          backgroundColor: '#f9fafb'
        }}>
          <div>
            <h2 style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: '700',
              color: '#1f2937'
            }}>
              ⚙️ 管理員後台
            </h2>
            <p style={{
              margin: '4px 0 0 0',
              fontSize: '14px',
              color: '#6b7280'
            }}>
              管理用戶 Token 及查看統計數據
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={loadData}
              style={{
                padding: '10px 16px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              <RefreshCw size={16} />
              重新整理
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X size={24} color="#dc2626" />
            </button>
          </div>
        </div>

        {/* 統計卡片 */}
        {stats && (
          <div style={{
            padding: '24px',
            borderBottom: '2px solid #e5e7eb',
            backgroundColor: '#ffffff'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              <StatCard
                title="總用戶數"
                value={stats.total_users}
                icon="👥"
                color="#3b82f6"
              />
              <StatCard
                title="活躍貼文"
                value={stats.active_posts}
                icon="📝"
                color="#10b981"
              />
              <StatCard
                title="出售貼文"
                value={stats.sell_posts}
                icon="💰"
                color="#f59e0b"
              />
              <StatCard
                title="求購貼文"
                value={stats.buy_posts}
                icon="🛒"
                color="#6366f1"
              />
              <StatCard
                title="剩餘 Token"
                value={stats.total_tokens_remaining}
                icon="🎟️"
                color="#8b5cf6"
              />
              <StatCard
                title="已用 Token"
                value={stats.total_tokens_used}
                icon="📊"
                color="#ef4444"
              />
              <StatCard
                title="7天活躍用戶"
                value={stats.active_users_7d}
                icon="⚡"
                color="#ec4899"
              />
            </div>
          </div>
        )}

        {/* 用戶列表 */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '24px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Users size={20} color="#3b82f6" />
            用戶管理
          </h3>

          <div style={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{
                  backgroundColor: '#f9fafb',
                  borderBottom: '2px solid #e5e7eb'
                }}>
                  <th style={tableHeaderStyle}>用戶</th>
                  <th style={tableHeaderStyle}>電郵</th>
                  <th style={tableHeaderStyle}>電話</th>
                  <th style={tableHeaderStyle}>Token 餘額</th>
                  <th style={tableHeaderStyle}>已用 Token</th>
                  <th style={tableHeaderStyle}>貼文數</th>
                  <th style={tableHeaderStyle}>點讚數</th>
                  <th style={tableHeaderStyle}>最後登入</th>
                  <th style={tableHeaderStyle}>操作</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr 
                    key={user.id}
                    style={{
                      backgroundColor: index % 2 === 0 ? 'white' : '#f9fafb',
                      borderBottom: '1px solid #e5e7eb'
                    }}
                  >
                    <td style={tableCellStyle}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          flexShrink: 0
                        }}>
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div style={{ fontWeight: '600', color: '#1f2937' }}>
                            {user.username}
                          </div>
                          {user.is_admin && (
                            <div style={{
                              fontSize: '10px',
                              color: '#ef4444',
                              fontWeight: '600'
                            }}>
                              👑 管理員
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>
                        {user.email}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '13px', color: '#6b7280', fontFamily: 'monospace' }}>
                        {user.phone}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        backgroundColor: user.tokens > 0 ? '#dcfce7' : '#fee2e2',
                        color: user.tokens > 0 ? '#15803d' : '#dc2626',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '700'
                      }}>
                        {user.tokens}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '600' }}>
                        {user.total_tokens_used}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '600' }}>
                        {user.posts_count}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '600' }}>
                        {user.likes_count}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                        {formatDate(user.last_login)}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <button
                        onClick={() => setSelectedUser(user)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                      >
                        <Plus size={14} />
                        增加
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 增加 Token 彈窗 */}
      {selectedUser && (
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
            zIndex: 9999999
          }}
          onClick={() => setSelectedUser(null)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '32px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '8px'
            }}>
              💰 增加 Token 給 {selectedUser.username}
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '24px'
            }}>
              目前餘額：<strong style={{ color: '#3b82f6', fontSize: '16px' }}>{selectedUser.tokens}</strong> 次
            </p>

            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                增加數量 *
              </label>
              <input
                type="number"
                min="1"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
                placeholder="輸入數量"
                autoFocus
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                備註（可選）
              </label>
              <input
                type="text"
                value={tokenDescription}
                onChange={(e) => setTokenDescription(e.target.value)}
                placeholder="例如：客戶購買 10 次發佈機會"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <button
                onClick={() => setSelectedUser(null)}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              >
                取消
              </button>
              <button
                onClick={handleAddTokens}
                disabled={!tokenAmount || tokenAmount <= 0}
                style={{
                  flex: 2,
                  padding: '12px',
                  backgroundColor: tokenAmount > 0 ? '#10b981' : '#d1d5db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: tokenAmount > 0 ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  if (tokenAmount > 0) {
                    e.currentTarget.style.backgroundColor = '#059669';
                  }
                }}
                onMouseOut={(e) => {
                  if (tokenAmount > 0) {
                    e.currentTarget.style.backgroundColor = '#10b981';
                  }
                }}
              >
                <Plus size={18} />
                確認增加
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 統計卡片組件
function StatCard({ title, value, icon, color }) {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      transition: 'all 0.2s'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        backgroundColor: `${color}15`,
        color: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px'
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontSize: '12px',
          color: '#6b7280',
          fontWeight: '500',
          marginBottom: '4px'
        }}>
          {title}
        </div>
        <div style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1f2937'
        }}>
          {value}
        </div>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
  padding: '12px 16px',
  textAlign: 'left',
  fontSize: '12px',
  fontWeight: '700',
  color: '#374151',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const tableCellStyle = {
  padding: '16px',
  fontSize: '14px',
  color: '#1f2937'
};

export default AdminPanel;