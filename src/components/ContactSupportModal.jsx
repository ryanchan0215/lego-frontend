import { X, Mail, MessageCircle, AlertCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSupportModal({ currentUser, onClose }) {
  const [formType, setFormType] = useState('feedback'); // 'feedback' or 'report'
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailSubject = formType === 'feedback' 
      ? `💡 意見反饋 - ${subject}` 
      : `🚨 問題回報 - ${subject}`;
    
    const emailBody = `
類型: ${formType === 'feedback' ? '意見反饋' : '問題回報'}
主題: ${subject}

${currentUser ? `
用戶資料:
- 用戶名: ${currentUser.username}
- Email: ${currentUser.email}
- Phone: ${currentUser.phone}
- User ID: ${currentUser.id}
` : '訪客留言'}

訊息內容:
${message}

---
發送時間: ${new Date().toLocaleString('zh-HK')}
    `.trim();

    // 建立 mailto link
    const mailtoLink = `mailto:legoparts.vercel.app@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // 打開用戶嘅 email client
    window.location.href = mailtoLink;
    
    // 顯示成功訊息
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (showSuccess) {
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
          zIndex: 10000
        }}
        onClick={onClose}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center',
            maxWidth: '400px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#dcfce7',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Mail size={32} color="#10b981" />
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '12px'
          }}>
            ✅ 已開啟 Email 客戶端
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '1.6'
          }}>
            請檢查您嘅 Email 應用程式<br />
            確認內容後發送即可
          </p>
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
        zIndex: 10000,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          zIndex: 1
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#eff6ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Mail size={20} color="#3b82f6" />
            </div>
            <div>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#1f2937',
                margin: 0
              }}>
                📧 聯絡客服
              </h2>
              <p style={{
                fontSize: '13px',
                color: '#6b7280',
                margin: '4px 0 0 0'
              }}>
                legoparts.vercel.app@gmail.com
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X size={20} color="#6b7280" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
          {/* 類型選擇 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px'
            }}>
              選擇類型
            </label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setFormType('feedback')}
                style={{
                  flex: 1,
                  padding: '16px',
                  backgroundColor: formType === 'feedback' ? '#eff6ff' : 'white',
                  border: formType === 'feedback' ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s'
                }}
              >
                <MessageCircle 
                  size={24} 
                  color={formType === 'feedback' ? '#3b82f6' : '#9ca3af'} 
                />
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: formType === 'feedback' ? '#3b82f6' : '#6b7280'
                }}>
                  💡 意見反饋
                </span>
                <span style={{
                  fontSize: '12px',
                  color: '#9ca3af'
                }}>
                  提供建議或想法
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFormType('report')}
                style={{
                  flex: 1,
                  padding: '16px',
                  backgroundColor: formType === 'report' ? '#fef2f2' : 'white',
                  border: formType === 'report' ? '2px solid #ef4444' : '2px solid #e5e7eb',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s'
                }}
              >
                <AlertCircle 
                  size={24} 
                  color={formType === 'report' ? '#ef4444' : '#9ca3af'} 
                />
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: formType === 'report' ? '#ef4444' : '#6b7280'
                }}>
                  🚨 回報問題
                </span>
                <span style={{
                  fontSize: '12px',
                  color: '#9ca3af'
                }}>
                  回報 Bug 或錯誤
                </span>
              </button>
            </div>
          </div>

          {/* 主題 */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              主題 *
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={formType === 'feedback' ? '例如：建議加入夜間模式' : '例如：無法上傳圖片'}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* 訊息內容 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              詳細內容 *
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={formType === 'feedback' 
                ? '請詳細描述您的建議或想法...\n\n例如：\n- 希望可以...\n- 建議改善...\n- 覺得可以加入...'
                : '請詳細描述遇到的問題...\n\n建議包括：\n- 問題發生時間\n- 操作步驟\n- 錯誤訊息（如有）\n- 使用的瀏覽器/裝置'
              }
              required
              rows={8}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                resize: 'vertical',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* 用戶資料顯示（已登入） */}
          {currentUser && (
            <div style={{
              padding: '16px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              marginBottom: '24px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#374151' }}>
                ℹ️ 您的聯絡資料：
              </p>
              <p style={{ margin: '4px 0' }}>👤 用戶名：{currentUser.username}</p>
              <p style={{ margin: '4px 0' }}>📧 Email：{currentUser.email}</p>
              <p style={{ margin: '4px 0' }}>📱 電話：{currentUser.phone}</p>
            </div>
          )}

          {/* 提交按鈕 */}
          <button
            type="submit"
            disabled={!subject || !message}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: formType === 'feedback' ? '#3b82f6' : '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: (!subject || !message) ? 'not-allowed' : 'pointer',
              opacity: (!subject || !message) ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              if (subject && message) {
                e.currentTarget.style.backgroundColor = formType === 'feedback' ? '#2563eb' : '#dc2626';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = formType === 'feedback' ? '#3b82f6' : '#ef4444';
            }}
          >
            <Send size={18} />
            {formType === 'feedback' ? '發送意見' : '回報問題'}
          </button>

          <p style={{
            marginTop: '16px',
            fontSize: '12px',
            color: '#9ca3af',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            點擊後會開啟您的 Email 客戶端<br />
            我們會盡快回覆您的訊息 📧
          </p>
        </form>
      </div>
    </div>
  );
}