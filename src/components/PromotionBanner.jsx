import { Mail, Heart, Recycle, Sparkles } from 'lucide-react';

function BulkSalePromo({ onRegisterClick }) {
  return (
    <>
      {/* 🖥️ 桌面版：右側固定 */}
      <div className="bulk-promo-desktop">
        <div className="bulk-promo-content">
          <div className="bulk-promo-badge">
            <Sparkles size={16} />
            <span>平台使命</span>
          </div>
          
          <h3 className="bulk-promo-title">
            🍼 延續BB用品<br/>嘅生命
          </h3>

          <div className="bulk-promo-steps">
            <div className="bulk-promo-step">
              <Heart size={20} color="#fff" fill="#fff" />
              <p>集中交易<br/>更方便搵到</p>
            </div>

            <div className="bulk-promo-step">
              <Recycle size={20} color="#fff" />
              <p>減少浪費<br/>環保育兒</p>
            </div>

            <div className="bulk-promo-step">
              <Mail size={20} color="#fff" />
              <p>互助社群<br/>幫助家庭</p>
            </div>
          </div>

          <div className="bulk-promo-format">
            <div>
              <strong>💚 支持我哋</strong>
              <p>一齊打造可持續育兒文化，讓每件BB用品發揮最大價值</p>
            </div>
          </div>

          <button 
            className="bulk-promo-btn"
            onClick={onRegisterClick}
          >
            <Sparkles size={16} />
            立即加入
          </button>
        </div>
      </div>

      {/* 📱 手機版：彈出訊息（可選） */}
      <style jsx>{`
        .bulk-promo-desktop {
          position: sticky;
          top: 100px;
          width: 180px;
          margin-right: 20px;
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
          border-radius: 16px;
          padding: 24px 16px;
          box-shadow: 0 8px 32px rgba(236, 72, 153, 0.3);
          color: white;
          text-align: center;
        }

        .bulk-promo-badge {
          background: rgba(255, 255, 255, 0.25);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 900;
          margin-bottom: 12px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          backdrop-filter: blur(10px);
        }

        .bulk-promo-title {
          font-size: 17px;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .bulk-promo-steps {
          margin-bottom: 20px;
        }

        .bulk-promo-step {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          background: rgba(255, 255, 255, 0.2);
          padding: 12px 10px;
          border-radius: 10px;
          text-align: left;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .bulk-promo-step p {
          font-size: 11px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
        }

        .bulk-promo-format {
          background: rgba(255, 255, 255, 0.25);
          padding: 14px 12px;
          border-radius: 10px;
          margin-bottom: 20px;
          text-align: left;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .bulk-promo-format strong {
          display: block;
          font-size: 12px;
          margin-bottom: 6px;
          font-weight: 900;
        }

        .bulk-promo-format p {
          font-size: 10px;
          line-height: 1.5;
          margin: 0;
          opacity: 0.95;
        }

        .bulk-promo-btn {
          width: 100%;
          background: white;
          color: #ec4899;
          border: none;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 900;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          transition: all 0.3s;
        }

        .bulk-promo-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          background: #fff;
        }

        .bulk-promo-btn:active {
          transform: translateY(-1px);
        }

        /* 📱 手機版隱藏 */
        @media (max-width: 768px) {
          .bulk-promo-desktop {
            display: none !important;
          }
        }

        @media (max-width: 1024px) {
          .bulk-promo-desktop {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default BulkSalePromo;