import { X, Gift, Crown, TrendingUp, Megaphone } from 'lucide-react';
import { useState } from 'react';

function PromotionBanner({ onRegisterClick }) {
  const [showMobileModal, setShowMobileModal] = useState(false);

  return (
    <>
      {/* 🖥️ 桌面版：左右兩邊固定 */}
      <div className="promo-banner-desktop">
        <div className="promo-banner-content">
          <div className="promo-badge">🔥 限時優惠 🔥</div>
          
          <h3 className="promo-title">
            前 <span className="promo-number">100</span> 名
          </h3>
          
          <div className="promo-benefits">
            <div className="promo-benefit-item">
              <Gift size={20} color="#f5576c" />
              <span>免費 100 Token</span>
            </div>
            
            <div className="promo-benefit-item">
              <Crown size={20} color="#ffd700" />
              <span>第一代會員</span>
            </div>
            
            <div className="promo-benefit-item">
              <TrendingUp size={20} color="#10b981" />
              <span>輪流置頂</span>
            </div>
            
            <div className="promo-benefit-item">
              <Megaphone size={20} color="#3b82f6" />
              <span>免費廣告</span>
            </div>
          </div>
          
          <button 
            className="promo-cta-btn"
            onClick={onRegisterClick}
          >
            🚀 立即申請
          </button>
          
          <div className="promo-urgency">
            ⏰ 名額有限！
          </div>
        </div>
      </div>

      {/* 📱 手機版：浮動按鈕 */}
      <button 
        className="promo-fab-mobile"
        onClick={() => setShowMobileModal(true)}
      >
        🎁
      </button>

      {/* 📱 手機版：彈出 Modal */}
      {showMobileModal && (
        <div className="promo-modal-overlay" onClick={() => setShowMobileModal(false)}>
          <div className="promo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="promo-modal-close"
              onClick={() => setShowMobileModal(false)}
            >
              <X size={24} />
            </button>

            <div className="promo-modal-badge">🔥 全新網站 🔥</div>
            
            <h2 className="promo-modal-title">
              <span className="promo-modal-number">歡迎大家試用!</span> 
            </h2>

            <div className="promo-modal-benefits">
              <div className="promo-modal-benefit">
                <div className="promo-modal-icon">
                  <Gift size={24} color="white" />
                </div>
                <div className="promo-modal-text">
                  <strong>無限</strong> 發佈次數
                </div>
              </div>

              <div className="promo-modal-benefit">
                <div className="promo-modal-icon">
                  <Crown size={24} color="white" />
                </div>
                <div className="promo-modal-text">
                   <strong>永久會員</strong>
                </div>
              </div>

              <div className="promo-modal-benefit">
                <div className="promo-modal-icon">
                  <TrendingUp size={24} color="white" />
                </div>
                <div className="promo-modal-text">
                  帖子 <strong>輪流置頂</strong>，提高曝光率
                </div>
              </div>

              <div className="promo-modal-benefit">
                <div className="promo-modal-icon">
                  <Megaphone size={24} color="white" />
                </div>
                <div className="promo-modal-text">
                  <strong>期待</strong> 你的帖子!
                </div>
              </div>
            </div>

            <button 
              className="promo-modal-cta"
              onClick={() => {
                setShowMobileModal(false);
                onRegisterClick();
              }}
            >
              🚀 立即申請帳號 🚀
            </button>

            <div className="promo-modal-urgency">
              ⏰ 唔好等喇！
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
  /* 🖥️ 桌面版樣式 */
  .promo-banner-desktop {
    position: sticky;
    top: 100px;
    width: 160px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 20px 12px;
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
    color: white;
    text-align: center;
  }

  .promo-badge {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    padding: 8px 14px; /* ✅ 加大 padding */
    border-radius: 20px;
    font-size: 13px; /* ✅ 原本 11px → 13px */
    font-weight: 900;
    margin-bottom: 16px;
    display: inline-block;
    box-shadow: 0 4px 12px rgba(245, 87, 108, 0.4);
  }

  .promo-title {
    font-size: 18px; /* ✅ 原本 16px → 18px */
    font-weight: 700;
    margin-bottom: 16px;
    line-height: 1.3;
  }

  .promo-number {
    display: block;
    font-size: 42px; /* ✅ 原本 36px → 42px */
    color: #ffd700;
    font-weight: 900;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
    margin: 8px 0;
  }

  .promo-benefits {
    margin-bottom: 16px;
  }

  .promo-benefit-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 13px; /* ✅ 原本 12px → 13px */
    font-weight: 600;
    background: rgba(255, 255, 255, 0.15);
    padding: 8px;
    border-radius: 8px;
  }

  .promo-cta-btn {
    width: 100%;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    border: none;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 15px; /* ✅ 原本 14px → 15px */
    font-weight: 900;
    cursor: pointer;
    box-shadow: 0 6px 16px rgba(245, 87, 108, 0.4);
    transition: transform 0.2s;
    margin-bottom: 12px;
  }

  .promo-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(245, 87, 108, 0.6);
  }

  .promo-urgency {
    font-size: 12px; /* ✅ 原本 11px → 12px */
    color: #ffd700;
    font-weight: 900;
    animation: blink 1.5s infinite;
  }

  @keyframes blink {
    0%, 50%, 100% { opacity: 1; }
    25%, 75% { opacity: 0.5; }
  }
        /* 📱 手機版：浮動按鈕 */
        .promo-fab-mobile {
          display: none;
          position: fixed;
          bottom: 100px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border: none;
          border-radius: 50%;
          font-size: 28px;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(245, 87, 108, 0.5);
          z-index: 999;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* 📱 手機版：Modal */
        .promo-modal-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          padding: 20px;
          overflow-y: auto;
        }

        .promo-modal-content {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          padding: 30px 20px;
          max-width: 400px;
          margin: 50px auto;
          position: relative;
          color: white;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .promo-modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
        }

        .promo-modal-badge {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          display: inline-block;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 20px;
          box-shadow: 0 6px 16px rgba(245, 87, 108, 0.4);
        }

        .promo-modal-title {
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 24px;
          line-height: 1.3;
        }

        .promo-modal-number {
          display: block;
          font-size: 48px;
          color: #ffd700;
          text-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
          margin: 12px 0;
        }

        .promo-modal-benefits {
          margin-bottom: 24px;
        }

        .promo-modal-benefit {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          background: rgba(255, 255, 255, 0.15);
          padding: 12px;
          border-radius: 12px;
        }

        .promo-modal-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .promo-modal-text {
          font-size: 14px;
          line-height: 1.5;
        }

        .promo-modal-text strong {
          color: #ffd700;
          font-weight: 900;
        }

        .promo-modal-cta {
          width: 100%;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border: 3px solid white;
          padding: 16px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(245, 87, 108, 0.5);
          margin-bottom: 16px;
          transition: transform 0.2s;
        }

        .promo-modal-cta:active {
          transform: scale(0.98);
        }

        .promo-modal-urgency {
          font-size: 14px;
          color: #ffd700;
          font-weight: 900;
          text-align: center;
          animation: blink 1.5s infinite;
        }

        /* 📱 手機版 Responsive */
        @media (max-width: 768px) {
          .promo-banner-desktop {
            display: none !important;
          }

          .promo-fab-mobile {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }

          .promo-modal-overlay {
            display: flex !important;
            align-items: center;
          }
        }

        @media (min-width: 769px) {
          .promo-fab-mobile,
          .promo-modal-overlay {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default PromotionBanner; 