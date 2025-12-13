import { Mail, FileSpreadsheet, Package, Sparkles } from 'lucide-react';

function BulkSalePromo({ onRegisterClick }) {
  return (
    <>
      {/* 🖥️ 桌面版：右側固定 */}
      <div className="bulk-promo-desktop">
        <div className="bulk-promo-content">
          <div className="bulk-promo-badge">
            <Sparkles size={16} />
            <span>批量上架</span>
          </div>
          
          <h3 className="bulk-promo-title">
            大量配件出售？
          </h3>

          <div className="bulk-promo-steps">
            <div className="bulk-promo-step">
              <div className="step-number">1</div>
              <p>先申請帳號</p>
            </div>

            <div className="bulk-promo-step">
              <div className="step-number">2</div>
              <p>準備 Excel 清單</p>
            </div>

            <div className="bulk-promo-step">
              <div className="step-number">3</div>
              <p>Email 交俾我哋</p>
            </div>

            <div className="bulk-promo-step">
              <div className="step-number">4</div>
              <p>我哋幫你砌 Post！</p>
            </div>
          </div>

          <div className="bulk-promo-format">
            <FileSpreadsheet size={18} color="#10b981" />
            <div>
              <strong>Excel 格式：</strong>
              <p>配件編號 / 名稱<br/>顏色 | 數量 | 價錢</p>
            </div>
          </div>

          <button 
            className="bulk-promo-btn"
            onClick={onRegisterClick}
          >
            <Mail size={16} />
            立即申請
          </button>
        </div>
      </div>

      {/* 📱 手機版：彈出訊息（可選） */}
      <style jsx>{`
        .bulk-promo-desktop {
          position: sticky;
          top: 100px;
          width: 160px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 12px;
          padding: 20px 12px;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
          color: white;
          text-align: center;
        }

        .bulk-promo-badge {
          background: rgba(255, 255, 255, 0.25);
          color: white;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 900;
          margin-bottom: 12px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .bulk-promo-title {
          font-size: 16px;
          font-weight: 900;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .bulk-promo-steps {
          margin-bottom: 16px;
        }

        .bulk-promo-step {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          background: rgba(255, 255, 255, 0.15);
          padding: 8px;
          border-radius: 8px;
          text-align: left;
        }

        .step-number {
          width: 24px;
          height: 24px;
          background: white;
          color: #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 12px;
          flex-shrink: 0;
        }

        .bulk-promo-step p {
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          margin: 0;
        }

        .bulk-promo-format {
          background: rgba(255, 255, 255, 0.2);
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 16px;
          display: flex;
          gap: 8px;
          text-align: left;
        }

        .bulk-promo-format strong {
          display: block;
          font-size: 10px;
          margin-bottom: 4px;
          color: #fef3c7;
        }

        .bulk-promo-format p {
          font-size: 9px;
          line-height: 1.4;
          margin: 0;
          opacity: 0.95;
        }

        .bulk-promo-btn {
          width: 100%;
          background: white;
          color: #10b981;
          border: none;
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.2s;
        }

        .bulk-promo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
          background: #f0fdf4;
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