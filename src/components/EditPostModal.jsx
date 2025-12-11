import { useState } from 'react';
import { X, Save, AlertCircle } from 'lucide-react';

function EditPostModal({ post, currentUser, onClose, onSuccess }) {
  const [items, setItems] = useState(post.items.map(item => ({
    id: item.id,
    part_number: item.part_number,
    color: item.color,
    quantity: item.quantity,
    price_per_unit: item.price_per_unit,
    condition: item.condition || '',
    originalQuantity: item.quantity,
    originalPrice: item.price_per_unit,
    originalCondition: item.condition || ''
  })));

  const updateItem = (id, field, value) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const hasChanges = () => {
    return items.some(item => 
      item.quantity !== item.originalQuantity ||
      item.price_per_unit !== item.originalPrice ||
      item.condition !== item.originalCondition
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hasChanges()) {
      alert('沒有任何修改！');
      return;
    }

    if (currentUser.tokens < 1) {
      alert('你的發佈次數不足，無法編輯貼文！');
      return;
    }

    if (!confirm(`修改貼文需要消耗 1 次發佈機會\n你目前有 ${currentUser.tokens} 次機會\n確定要繼續嗎？`)) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/posts/${post.id}/edit`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          items: items.map(item => ({
            id: item.id,
            quantity: parseInt(item.quantity),
            price_per_unit: parseFloat(item.price_per_unit),
            condition: item.condition || null
          }))
        })
      });

      const result = await response.json();

      if (response.ok) {
        alert(`✅ 修改成功！\n剩餘發佈次數：${result.remaining_tokens}`);
        onSuccess();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      alert('修改失敗：' + error.message);
    }
  };

  return (
    <div
      className="edit-post-overlay"
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
      //onClick={onClose}
    >
      <div
        className="edit-post-modal"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '700px',
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
       // onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="edit-modal-header"
          style={{
            padding: '20px',
            borderBottom: '2px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f9fafb'
          }}
        >
          <h2 style={{
            margin: 0,
            fontSize: '20px',
            fontWeight: '700',
            color: '#1f2937'
          }}>
            ✏️ 編輯貼文
          </h2>

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

        {/* Warning */}
        <div 
          className="edit-modal-warning"
          style={{
            padding: '16px 20px',
            backgroundColor: '#fef3c7',
            border: '1px solid #fbbf24',
            margin: '20px',
            borderRadius: '8px',
            display: 'flex',
            gap: '12px'
          }}
        >
          <AlertCircle size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '13px', color: '#92400e' }}>
            <strong>⚠️ 注意：</strong>修改配件數量、價錢或新舊程度需要消耗 <strong>1 次發佈機會</strong>。
            配件編號和顏色不能修改。
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{
          flex: 1,
          overflow: 'auto'
        }}>
          <div 
            className="edit-modal-content"
            style={{
              padding: '0 20px 20px 20px'
            }}
          >
            <div style={{ display: 'grid', gap: '12px' }}>
              {items.map((item) => {
                const hasItemChanges = (
                  item.quantity !== item.originalQuantity || 
                  item.price_per_unit !== item.originalPrice ||
                  item.condition !== item.originalCondition
                );

                return (
                  <div
                    key={item.id}
                    className="edit-item-card"
                    style={{
                      padding: '16px',
                      backgroundColor: '#f9fafb',
                      border: hasItemChanges ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      display: 'grid',
                      gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                      gap: '12px',
                      alignItems: 'center',
                      transition: 'all 0.2s'
                    }}
                  >
                    {/* 📱 手機版 Header（桌面隱藏） */}
                    <div className="edit-item-header" style={{ display: 'none' }}>
                      <div>
                        <div 
                          className="edit-item-part-number"
                          style={{
                            fontSize: '16px',
                            fontWeight: '700',
                            fontFamily: 'monospace',
                            color: '#1f2937',
                            marginBottom: '6px'
                          }}
                        >
                          #{item.part_number}
                        </div>
                        <div 
                          className="edit-item-color-badge"
                          style={{
                            display: 'inline-block',
                            padding: '4px 10px',
                            backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                            color: 'white',
                            borderRadius: '8px',
                            fontSize: '11px',
                            fontWeight: '600'
                          }}
                        >
                          {item.color}
                        </div>
                      </div>
                    </div>

                    {/* 桌面版 + 手機版共用欄位 */}
                    <div className="edit-item-fields" style={{ display: 'contents' }}>
                      {/* 配件編號 + 顏色（桌面版顯示，手機版隱藏） */}
                      <div className="edit-item-field" style={{ display: window.innerWidth >= 768 ? 'block' : 'none' }}>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          fontFamily: 'monospace',
                          color: '#1f2937',
                          marginBottom: '6px'
                        }}>
                          #{item.part_number}
                        </div>
                        <div style={{
                          display: 'inline-block',
                          padding: '4px 10px',
                          backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                          color: 'white',
                          borderRadius: '8px',
                          fontSize: '11px',
                          fontWeight: '600'
                        }}>
                          {item.color}
                        </div>
                      </div>

                      {/* 數量 */}
                      <div className="edit-item-field">
                        <label style={{
                          display: 'block',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6b7280',
                          marginBottom: '6px'
                        }}>
                          數量 {item.quantity !== item.originalQuantity && '✏️'}
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: item.quantity !== item.originalQuantity 
                              ? '2px solid #3b82f6' 
                              : '2px solid #e5e7eb',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: '700',
                            boxSizing: 'border-box',
                            backgroundColor: item.quantity !== item.originalQuantity 
                              ? '#eff6ff' 
                              : 'white'
                          }}
                        />
                      </div>

                      {/* 單價 */}
                      <div className="edit-item-field">
                        <label style={{
                          display: 'block',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6b7280',
                          marginBottom: '6px'
                        }}>
                          單價 {item.price_per_unit !== item.originalPrice && '✏️'}
                        </label>
                        <input
                          type="number"
                          min="0.01"
                          step="0.01"
                          value={item.price_per_unit}
                          onChange={(e) => updateItem(item.id, 'price_per_unit', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: item.price_per_unit !== item.originalPrice 
                              ? '2px solid #3b82f6' 
                              : '2px solid #e5e7eb',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: '700',
                            boxSizing: 'border-box',
                            backgroundColor: item.price_per_unit !== item.originalPrice 
                              ? '#eff6ff' 
                              : 'white'
                          }}
                        />
                      </div>

                      {/* 新舊 */}
                      <div className="edit-item-field">
                        <label style={{
                          display: 'block',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6b7280',
                          marginBottom: '6px'
                        }}>
                          新舊 {item.condition !== item.originalCondition && '✏️'}
                        </label>
                        <select
                          value={item.condition}
                          onChange={(e) => updateItem(item.id, 'condition', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: item.condition !== item.originalCondition 
                              ? '2px solid #3b82f6' 
                              : '2px solid #e5e7eb',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: '700',
                            boxSizing: 'border-box',
                            backgroundColor: item.condition !== item.originalCondition 
                              ? '#eff6ff' 
                              : 'white',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="">未設定</option>
                          <option value="全新">全新</option>
                          <option value="9成新">9成新</option>
                          <option value="8成新">8成新</option>
                          <option value="7成新">7成新</option>
                          <option value="6成新">6成新</option>
                          <option value="5成新或以下">5成新或以下</option>
                        </select>
                      </div>

                      {/* 小計 */}
                      <div className="edit-item-field edit-item-total">
                        <label style={{
                          display: 'block',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6b7280',
                          marginBottom: '6px'
                        }}>
                          小計
                        </label>
                        <div 
                          className="edit-item-total-value"
                          style={{
                            padding: '10px 12px',
                            backgroundColor: '#dcfce7',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#15803d'
                          }}
                        >
                          ${(item.quantity * item.price_per_unit).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Buttons */}
            <div 
              className="edit-modal-footer"
              style={{
                marginTop: '24px',
                padding: '20px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                display: 'flex',
                gap: '12px'
              }}
            >
              <button
                type="button"
                onClick={onClose}
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
                type="submit"
                disabled={!hasChanges()}
                style={{
                  flex: 2,
                  padding: '12px',
                  backgroundColor: hasChanges() ? '#10b981' : '#d1d5db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: hasChanges() ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  if (hasChanges()) {
                    e.currentTarget.style.backgroundColor = '#059669';
                  }
                }}
                onMouseOut={(e) => {
                  if (hasChanges()) {
                    e.currentTarget.style.backgroundColor = '#10b981';
                  }
                }}
              >
                <Save size={18} />
                {hasChanges() ? '儲存修改（需要 1 Token）' : '沒有修改'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPostModal;