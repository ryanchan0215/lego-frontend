import { X, UserPlus } from 'lucide-react';
import { useState } from 'react';

function RegisterModal({ onClose, onRegister, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isRegistering, setIsRegistering] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (isRegistering) return;
  
  if (!formData.username || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
    alert('請填寫所有欄位！');
    return;
  }
  
  if (formData.password !== formData.confirmPassword) {
    alert('密碼唔一致！');
    return;
  }

  if (formData.password.length < 6) {
    alert('密碼至少要 6 個字符！');
    return;
  }
  
  setIsRegistering(true);
  
  try {
    await onRegister(formData);
    // ✅ 如果成功，Modal 會自動關閉，唔使 reset
  } catch (error) {
    // ✅ 如果失敗，一定要 reset，等用家可以再改
    setIsRegistering(false);
    // 錯誤訊息應該已經由 onRegister 處理咗（alert 或者其他方式）
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
          maxWidth: '450px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '24px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
            🧱 註冊新帳號
          </h2>
          <button
            onClick={onClose}
            disabled={isRegistering}
            style={{
              padding: '8px',
              border: 'none',
              background: 'transparent',
              cursor: isRegistering ? 'not-allowed' : 'pointer',
              borderRadius: '8px',
              opacity: isRegistering ? 0.5 : 1
            }}
            onMouseOver={(e) => {
              if (!isRegistering) {
                e.target.style.backgroundColor = '#fee2e2';
              }
            }}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <X size={24} color="#dc2626" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
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
              required
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              disabled={isRegistering}
              placeholder="your_username"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isRegistering ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isRegistering) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151'
            }}>
              電郵地址
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isRegistering}
              placeholder="your@email.com"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isRegistering ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isRegistering) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151'
            }}>
              電話號碼
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isRegistering}
              placeholder="12345678"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isRegistering ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isRegistering) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
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
              required
              minLength="6"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              disabled={isRegistering}
              placeholder="至少 6 個字符"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isRegistering ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isRegistering) {
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
              確認密碼
            </label>
            <input
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              disabled={isRegistering}
              placeholder="再次輸入密碼"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isRegistering ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isRegistering) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <button
            type="submit"
            disabled={isRegistering}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: isRegistering ? '#d1d5db' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: isRegistering ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              opacity: isRegistering ? 0.6 : 1
            }}
            onMouseOver={(e) => {
              if (!isRegistering) {
                e.target.style.backgroundColor = '#2563eb';
              }
            }}
            onMouseOut={(e) => {
              if (!isRegistering) {
                e.target.style.backgroundColor = '#3b82f6';
              }
            }}
          >
            <UserPlus size={20} />
            {isRegistering ? '註冊中...' : '註冊'}
          </button>

          <p style={{
            marginTop: '16px',
            fontSize: '12px',
            color: '#6b7280',
            textAlign: 'center'
          }}>
            註冊即可獲得 <strong style={{ color: '#3b82f6' }}>3 次免費發佈機會</strong>！
          </p>

          <p style={{
            marginTop: '12px',
            fontSize: '14px',
            color: '#6b7280',
            textAlign: 'center'
          }}>
            已有帳號？{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              disabled={isRegistering}
              style={{
                background: 'none',
                border: 'none',
                color: isRegistering ? '#9ca3af' : '#3b82f6',
                fontWeight: '600',
                cursor: isRegistering ? 'not-allowed' : 'pointer',
                textDecoration: 'underline',
                padding: 0
              }}
            >
              立即登入
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;