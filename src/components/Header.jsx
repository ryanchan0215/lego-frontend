import { User, Plus, LogOut, LogIn, UserPlus, Mail, ChevronDown, FileText, Settings, Gift, HelpCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { conversationsAPI, tokensAPI, authAPI } from '../api';
import AdminPanel from './AdminPanel';
import MyPostsModal from './MyPostsModal';
import EarnTokenModal from './EarnTokenModal';
import ContactSupportModal from './ContactSupportModal';  // ← 新增

function Header({ 
  currentUser, 
  onLoginClick,
  onRegisterClick,
  onLogout, 
  onCreatePostClick,
  onMessageCenterClick,
  onUserUpdate
}) {
  const [unreadCount, setUnreadCount] = useState(0);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showMyPosts, setShowMyPosts] = useState(false);
  const [showEarnToken, setShowEarnToken] = useState(false);
  const [showContactSupport, setShowContactSupport] = useState(false);  // ← 新增
  const intervalRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (currentUser) {
      loadUnreadCount();
      
      intervalRef.current = setInterval(loadUnreadCount, 30000);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setUnreadCount(0);
    }
  }, [currentUser?.id]);

  const loadUnreadCount = async () => {
    try {
      const data = await conversationsAPI.getUnreadCount();
      setUnreadCount(data.count);
    } catch (error) {
      console.error('獲取未讀數失敗:', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  const handleTokenEarned = async () => {
    try {
      const freshUser = await authAPI.getCurrentUser();
      if (onUserUpdate) {
        onUserUpdate(freshUser);
      }
    } catch (error) {
      console.error('更新用戶資料失敗:', error);
    }
  };

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <h1>🧱 樂高產品交易平台</h1>
          </div>

          <div className="header-buttons">
            {currentUser ? (
              <>
                {/* 聯絡客服按鈕 - 放喺最左 */}
                <button
                  onClick={() => setShowContactSupport(true)}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#f3f4f6',
                    color: '#4b5563',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#e5e7eb';
                    e.currentTarget.style.borderColor = '#9ca3af';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.borderColor = '#d1d5db';
                  }}
                >
                  <HelpCircle size={18} />
                  聯絡客服
                </button>

                <button
                  onClick={() => setShowEarnToken(true)}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#fbbf24',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s',
                    boxShadow: '0 2px 4px rgba(251, 191, 36, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#f59e0b';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#fbbf24';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Gift size={18} />
                  賺 Token
                </button>

                <div style={{ position: 'relative' }} ref={menuRef}>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      backgroundColor: '#eff6ff',
                      borderRadius: '8px',
                      border: '1px solid #bfdbfe',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dbeafe'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#eff6ff'}
                  >
                    <User size={18} color="#3b82f6" />
                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#1e40af' }}>
                      {currentUser.username}
                    </span>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '2px 8px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'white'
                    }}>
                      🎟️ {currentUser.tokens}
                    </div>
                    <ChevronDown 
                      size={16} 
                      color="#3b82f6"
                      style={{
                        transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                      }}
                    />
                  </button>

                  {showUserMenu && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        marginTop: '8px',
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        minWidth: '220px',
                        zIndex: 10000,
                        overflow: 'hidden'
                      }}
                    >
                      <div style={{
                        padding: '16px',
                        borderBottom: '1px solid #e5e7eb',
                        backgroundColor: '#f9fafb'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '8px'
                        }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            fontWeight: 'bold'
                          }}>
                            {currentUser.username.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div style={{
                              fontSize: '14px',
                              fontWeight: '700',
                              color: '#1f2937'
                            }}>
                              {currentUser.username}
                            </div>
                            {currentUser.is_admin && (
                              <div style={{
                                fontSize: '11px',
                                color: '#ef4444',
                                fontWeight: '600'
                              }}>
                                👑 管理員
                              </div>
                            )}
                          </div>
                        </div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>
                          📧 {currentUser.email}
                        </div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>
                          📱 {currentUser.phone}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          setShowMyPosts(true);
                        }}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: 'white',
                          border: 'none',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '14px',
                          color: '#374151',
                          fontWeight: '500'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >
                        <FileText size={16} color="#3b82f6" />
                        我的貼文
                      </button>

                      {currentUser.is_admin && (
                        <button
                          onClick={() => {
                            setShowUserMenu(false);
                            setShowAdminPanel(true);
                          }}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            backgroundColor: 'white',
                            border: 'none',
                            borderTop: '1px solid #e5e7eb',
                            textAlign: 'left',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '14px',
                            color: '#374151',
                            fontWeight: '500'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fef3c7'}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                        >
                          <Settings size={16} color="#f59e0b" />
                          ⚙️ 管理後台
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          onLogout();
                        }}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: 'white',
                          border: 'none',
                          borderTop: '1px solid #e5e7eb',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '14px',
                          color: '#dc2626',
                          fontWeight: '500'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >
                        <LogOut size={16} />
                        登出
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onMessageCenterClick();
                  }}
                  style={{
                    position: 'relative',
                    padding: '10px',
                    backgroundColor: '#eff6ff',
                    color: '#3b82f6',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dbeafe'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#eff6ff'}
                >
                  <Mail size={18} />
                  {unreadCount > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-4px',
                      right: '-4px',
                      backgroundColor: '#ef4444',
                      color: 'white',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      padding: '2px 6px',
                      borderRadius: '10px',
                      minWidth: '18px',
                      textAlign: 'center'
                    }}>
                      {unreadCount > 99 ? '99+' : unreadCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={onCreatePostClick}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#059669'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
                >
                  <Plus size={18} />
                  發佈交易
                </button>
              </>
            ) : (
              <>
                {/* 未登入狀態都可以聯絡客服 */}
                <button
                  onClick={() => setShowContactSupport(true)}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#f3f4f6',
                    color: '#4b5563',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#e5e7eb';
                    e.currentTarget.style.borderColor = '#9ca3af';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.borderColor = '#d1d5db';
                  }}
                >
                  <HelpCircle size={18} />
                  聯絡客服
                </button>

                <button
                  onClick={onLoginClick}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                >
                  <LogIn size={18} />
                  登入
                </button>

                <button
                  onClick={onRegisterClick}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: 'white',
                    color: '#3b82f6',
                    border: '2px solid #3b82f6',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#eff6ff'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <UserPlus size={18} />
                  註冊
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {showAdminPanel && (
        <AdminPanel
          currentUser={currentUser}
          onClose={() => setShowAdminPanel(false)}
        />
      )}

      {showMyPosts && (
        <MyPostsModal
          currentUser={currentUser}
          onClose={() => setShowMyPosts(false)}
        />
      )}

      {showEarnToken && (
        <EarnTokenModal
          currentUser={currentUser}
          onClose={() => setShowEarnToken(false)}
          onSuccess={handleTokenEarned}
        />
      )}

      {/* 新增：聯絡客服 Modal */}
      {showContactSupport && (
        <ContactSupportModal
          currentUser={currentUser}
          onClose={() => setShowContactSupport(false)}
        />
      )}
    </>
  );
}

export default Header;