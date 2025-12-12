import { X, LogIn } from 'lucide-react';
import { useState } from 'react';

function LoginModal({ onClose, onLogin, onSwitchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (isLoggingIn) return;
  
  if (!username || !password) {
    alert('請填寫所有欄位！');
    return;
  }
  
  setIsLoggingIn(true);
  
  try {
    await onLogin(username, password);
  } catch (error) {
    setIsLoggingIn(false); // ✅ 一定要 reset
  }
};

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          position: 'relative'
        }}
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '24px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
            🧱 登入帳戶
          </h2>
          <button
            onClick={onClose}
            disabled={isLoggingIn}
            style={{
              padding: '8px',
              border: 'none',
              background: 'transparent',
              cursor: isLoggingIn ? 'not-allowed' : 'pointer',
              borderRadius: '8px',
              opacity: isLoggingIn ? 0.5 : 1
            }}
            onMouseOver={(e) => {
              if (!isLoggingIn) {
                e.target.style.backgroundColor = '#fee2e2';
              }
            }}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <X size={24} color="#dc2626" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151'
            }}>
              用戶名稱
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoggingIn}
              placeholder="輸入用戶名稱"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isLoggingIn ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isLoggingIn) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151'
            }}>
              密碼
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoggingIn}
              placeholder="輸入密碼"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isLoggingIn ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isLoggingIn) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <button
            type="submit"
            disabled={isLoggingIn}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: isLoggingIn ? '#d1d5db' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: isLoggingIn ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              opacity: isLoggingIn ? 0.6 : 1
            }}
            onMouseOver={(e) => {
              if (!isLoggingIn) {
                e.target.style.backgroundColor = '#2563eb';
              }
            }}
            onMouseOut={(e) => {
              if (!isLoggingIn) {
                e.target.style.backgroundColor = '#3b82f6';
              }
            }}
          >
            <LogIn size={20} />
            {isLoggingIn ? '登入中...' : '登入'}
          </button>

          <p style={{
            marginTop: '16px',
            fontSize: '14px',
            color: '#6b7280',
            textAlign: 'center'
          }}>
            還沒有帳號？{' '}
            <button
              type="button"
              onClick={onSwitchToRegister}
              disabled={isLoggingIn}
              style={{
                background: 'none',
                border: 'none',
                color: isLoggingIn ? '#9ca3af' : '#3b82f6',
                fontWeight: '600',
                cursor: isLoggingIn ? 'not-allowed' : 'pointer',
                textDecoration: 'underline',
                padding: 0
              }}
            >
              立即註冊
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;