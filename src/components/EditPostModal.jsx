import { useState } from 'react';
import { X, Save } from 'lucide-react';
import { request } from '../api';

function EditPostModal({ post, currentUser, onClose, onSuccess }) {
  const [items, setItems] = useState(post.items.map(item => ({
    id: item.id,
    item_description: item.item_description,
    category: item.category,
    price_per_unit: item.price_per_unit,
    originalPrice: item.price_per_unit
  })));

  const updatePrice = (id, value) => {
    setItems(prevItems =>
      prevItems.map(item => 
        item.id === id ? { ...item, price_per_unit: value } : item
      )
    );
  };

  const hasChanges = () => {
    return items.some(item => 
      parseFloat(item.price_per_unit) !== parseFloat(item.originalPrice)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hasChanges()) {
      alert('沒有任何修改！');
      return;
    }

    if (!confirm('確定要儲存修改嗎？')) {
      return;
    }

    try {
      const updateData = {
        items: items.map(item => ({
          id: item.id,
          price_per_unit: parseFloat(item.price_per_unit)
        }))
      };

      const result = await request(`/posts/${post.id}/edit`, {
        method: 'PUT',
        body: JSON.stringify(updateData)
      });

      alert('✅ 修改成功！');
      onSuccess();
    } catch (error) {
      console.error('❌ 編輯失敗:', error);
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
    >
      <div
        className="edit-post-modal"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '600px',
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
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
            💰 修改價錢
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

        {/* Form */}
        <form onSubmit={handleSubmit} style={{
          flex: 1,
          overflow: 'auto',
          padding: '20px'
        }}>
          <div style={{ display: 'grid', gap: '12px' }}>
            {items.map((item) => {
              const priceChanged = parseFloat(item.price_per_unit) !== parseFloat(item.originalPrice);

              return (
                <div
                  key={item.id}
                  className="edit-item-card"
                  style={{
                    padding: '16px',
                    backgroundColor: priceChanged ? '#eff6ff' : '#f9fafb',
                    border: priceChanged ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                >
                  {/* 產品資料（不可編輯） */}
                  <div style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#1f2937',
                    marginBottom: '8px'
                  }}>
                    {item.item_description}
                  </div>

                  <div style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                    color: 'white',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '12px'
                  }}>
                    {item.category}
                  </div>

                  {/* 價錢（可編輯） */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#6b7280',
                      marginBottom: '8px'
                    }}>
                      價錢 {priceChanged && '✏️ (已修改)'}
                    </label>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.price_per_unit}
                        onChange={(e) => updatePrice(item.id, e.target.value)}
                        required
                        style={{
                          flex: 1,
                          padding: '12px',
                          border: priceChanged ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '16px',
                          fontWeight: '700',
                          boxSizing: 'border-box',
                          backgroundColor: priceChanged ? '#eff6ff' : 'white'
                        }}
                      />

                      {priceChanged && (
                        <div style={{
                          fontSize: '13px',
                          color: '#6b7280'
                        }}>
                          原價: <span style={{ textDecoration: 'line-through' }}>
                            ${item.originalPrice}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
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
            >
              <Save size={18} />
              {hasChanges() ? '儲存修改' : '沒有修改'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPostModal;