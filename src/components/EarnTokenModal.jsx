import { useState } from 'react';
import { X, Gift, Play, Check } from 'lucide-react';
import { tokensAPI } from '../api';

function EarnTokenModal({ currentUser, onClose, onSuccess }) {
  const [isWatching, setIsWatching] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [hasWatched, setHasWatched] = useState(false);
  
  // ✅ 只加呢一個 state
  const [isClaiming, setIsClaiming] = useState(false);

  const handleWatchAd = () => {
    setIsWatching(true);
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setHasWatched(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleClaim = async () => {
    // ✅ 加呢一行，已經 claiming 就 return
    if (isClaiming) return;
    
    setIsClaiming(true);  // ✅ 設定為 claiming
    
    try {
      const result = await tokensAPI.earnByWatchingAd();
      alert(result.message);
      onSuccess();
      onClose();
    } catch (error) {
      alert('領取失敗：' + error.message);
      setIsClaiming(false);  // ✅ 失敗先 reset
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
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999999,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
          padding: '20px',
          borderBottom: '2px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fef3c7'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '20px',
            fontWeight: '700',
            color: '#92400e'
          }}>
            🎁 睇廣告賺 Token
          </h2>
          
          <button
            onClick={onClose}
            disabled={isWatching && !hasWatched}
            style={{
              background: 'none',
              border: 'none',
              cursor: isWatching && !hasWatched ? 'not-allowed' : 'pointer',
              padding: '8px',
              borderRadius: '8px',
              opacity: isWatching && !hasWatched ? 0.5 : 1
            }}
            onMouseOver={(e) => {
              if (!isWatching || hasWatched) {
                e.currentTarget.style.backgroundColor = '#fee2e2';
              }
            }}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X size={24} color="#dc2626" />
          </button>
        </div>

        <div style={{ padding: '30px' }}>
          {!isWatching && !hasWatched && (
            <>
              <div style={{
                textAlign: 'center',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 16px',
                  borderRadius: '50%',
                  backgroundColor: '#fef3c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '4px solid #fbbf24'
                }}>
                  <Gift size={40} color="#f59e0b" />
                </div>
                
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1f2937',
                  marginBottom: '8px'
                }}>
                  觀看廣告賺取發佈機會
                </h3>
                
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  marginBottom: '20px'
                }}>
                  只需觀看 5 秒廣告，即可獲得 <strong style={{ color: '#f59e0b' }}>1 次發佈機會</strong>
                </p>
              </div>

              <button
                onClick={handleWatchAd}
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: '#fbbf24',
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
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f59e0b'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fbbf24'}
              >
                <Play size={20} />
                開始觀看廣告
              </button>
            </>
          )}

          {isWatching && !hasWatched && (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px'
            }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f3f4f6',
                border: '2px dashed #d1d5db',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                fontSize: '16px',
                color: '#9ca3af'
              }}>
                🎬 廣告播放中...
              </div>
              
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#fbbf24',
                marginBottom: '8px'
              }}>
                {countdown}
              </div>
              
              <p style={{
                fontSize: '14px',
                color: '#6b7280'
              }}>
                請耐心等待...
              </p>
            </div>
          )}

          {hasWatched && (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                backgroundColor: '#dcfce7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid #10b981'
              }}>
                <Check size={50} color="#10b981" strokeWidth={3} />
              </div>
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '12px'
              }}>
                🎉 觀看完成！
              </h3>
              
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '24px'
              }}>
                點擊下方按鈕領取你的發佈機會
              </p>

              <button
                onClick={handleClaim}
                disabled={isClaiming}  {/* ✅ 加 disabled */}
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: isClaiming ? '#d1d5db' : '#10b981',  {/* ✅ claiming 時變灰 */}
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: isClaiming ? 'not-allowed' : 'pointer',  {/* ✅ 改 cursor */}
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: isClaiming ? 0.6 : 1  {/* ✅ 降低透明度 */}
                }}
                onMouseOver={(e) => {
                  if (!isClaiming) {
                    e.currentTarget.style.backgroundColor = '#059669';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isClaiming) {
                    e.currentTarget.style.backgroundColor = '#10b981';
                  }
                }}
              >
                <Gift size={20} />
                {isClaiming ? '領取中...' : '領取 1 次發佈機會'}  {/* ✅ 顯示狀態 */}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EarnTokenModal;