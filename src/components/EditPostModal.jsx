import { useState } from 'react';
import { X, Save, AlertCircle, Upload } from 'lucide-react';
import { compressImage, uploadToSupabase } from '../utils/imageCompression';
import ImageLightbox from './ImageLightbox';
import { request } from '../api';

function EditPostModal({ post, currentUser, onClose, onSuccess }) {
  const [items, setItems] = useState(post.items.map(item => ({
    id: item.id,
    item_description: item.item_description,
    category: item.category,
    brand: item.brand,
    price_per_unit: item.price_per_unit,
    condition: item.condition || '',
    imageUrl: item.image_url || null,
    originalBrand: item.brand,
    originalPrice: item.price_per_unit,
    originalCondition: item.condition || '',
    originalImageUrl: item.image_url || null,
    uploading: false
  })));

  const [lightboxImage, setLightboxImage] = useState(null);

  const updateItem = (id, field, value) => {
    setItems(prevItems =>
      prevItems.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleImageUpload = async (id, file) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('請上傳圖片檔案！');
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, uploading: true } : item
      )
    );

    try {
      const originalSizeKB = (file.size / 1024).toFixed(2);
      console.log(`原始大小: ${originalSizeKB} KB`);

      let processedFile = file;
      if (file.size > 1000 * 1024) {
        console.log('圖片太大，開始壓縮...');
        processedFile = await compressImage(file, 1000);
        const compressedSizeKB = (processedFile.size / 1024).toFixed(2);
        console.log(`壓縮後大小: ${compressedSizeKB} KB`);
      }

      const imageUrl = await uploadToSupabase(processedFile);
      console.log('✅ Upload 成功:', imageUrl);

      setItems(prevItems => {
        const updated = prevItems.map(item =>
          item.id === id 
            ? { 
                ...item, 
                imageUrl: imageUrl,
                uploading: false 
              }
            : item
        );
        
        console.log('📝 更新後的 items:', updated);
        return updated;
      });

    } catch (error) {
      console.error('❌ Upload 失敗:', error);
      alert('圖片上傳失敗：' + error.message);
      
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, uploading: false } : item
        )
      );
    }
  };

  const handleRemoveImage = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id 
          ? { ...item, imageUrl: null }
          : item
      )
    );
  };

  const hasChanges = () => {
    return items.some(item => 
      item.brand !== item.originalBrand ||
      item.price_per_unit !== item.originalPrice ||
      item.condition !== item.originalCondition ||
      item.imageUrl !== item.originalImageUrl
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasUploadingImages = items.some(item => item.uploading);
    if (hasUploadingImages) {
      alert('⏳ 請等待圖片上傳完成！');
      return;
    }

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
      const updateData = {
        items: items.map(item => ({
          id: item.id,
          brand: item.brand || null, // ✅ 改名
          price_per_unit: parseFloat(item.price_per_unit),
          condition: item.condition || null,
          image_url: item.imageUrl || null
        }))
      };

      console.log('📤 發送到後端的編輯數據:', updateData);

      const result = await request(`/posts/${post.id}/edit`, {
        method: 'PUT',
        body: JSON.stringify(updateData)
      });

      console.log('✅ 編輯成功，後端回傳:', result);

      alert(`✅ 修改成功！\n剩餘發佈次數：${result.remaining_tokens}`);
      onSuccess();
    } catch (error) {
      console.error('❌ 編輯失敗:', error);
      alert('修改失敗：' + error.message);
    }
  };

  return (
    <>
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
            maxWidth: '900px',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
        >
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
              <strong>⚠️ 注意：</strong>修改品牌、價錢、新舊程度或圖片需要消耗 <strong>1 次發佈機會</strong>。
              產品資料和種類不能修改。
            </div>
          </div>

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
                    item.brand !== item.originalBrand || 
                    item.price_per_unit !== item.originalPrice ||
                    item.condition !== item.originalCondition ||
                    item.imageUrl !== item.originalImageUrl
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
                        gridTemplateColumns: '100px 1.5fr 1fr 1fr 1fr',
                        gap: '12px',
                        alignItems: 'center',
                        transition: 'all 0.2s'
                      }}
                    >
                      {/* ✅ 圖片區 */}
                      <div className="edit-item-image">
                        {item.imageUrl ? (
                          <div style={{ position: 'relative' }}>
                            <img
                              src={item.imageUrl}
                              alt="產品圖片"
                              style={{
                                width: '100px',
                                height: '100px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                border: item.imageUrl !== item.originalImageUrl ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                                cursor: 'pointer'
                              }}
                              onClick={() => setLightboxImage(item.imageUrl)}
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(item.id)}
                              style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                backgroundColor: '#ef4444',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px',
                                fontWeight: 'bold'
                              }}
                            >
                              ×
                            </button>
                          </div>
                        ) : (
                          <label
                            style={{
                              width: '100px',
                              height: '100px',
                              border: '2px dashed #d1d5db',
                              borderRadius: '8px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: item.uploading ? 'not-allowed' : 'pointer',
                              backgroundColor: item.uploading ? '#f3f4f6' : '#fafafa',
                              opacity: item.uploading ? 0.6 : 1
                            }}
                          >
                            {item.uploading ? (
                              <div style={{ fontSize: '11px', color: '#6b7280', textAlign: 'center' }}>
                                上傳中...
                              </div>
                            ) : (
                              <>
                                <Upload size={20} color="#9ca3af" />
                                <span style={{ fontSize: '10px', color: '#9ca3af', marginTop: '4px', textAlign: 'center' }}>
                                  上傳圖片
                                </span>
                              </>
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              style={{ display: 'none' }}
                              disabled={item.uploading}
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  handleImageUpload(item.id, file);
                                }
                              }}
                            />
                          </label>
                        )}
                      </div>

                      {/* ✅ 產品資料 + 種類（不可編輯） */}
                      <div className="edit-item-field">
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          color: '#1f2937',
                          marginBottom: '6px',
                          wordBreak: 'break-word'
                        }}>
                          {item.item_description}
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
                          {item.category}
                        </div>
                      </div>

                      {/* ✅ 品牌（可編輯） */}
                      <div className="edit-item-field">
                        <label style={{
                          display: 'block',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6b7280',
                          marginBottom: '6px'
                        }}>
                          品牌 {item.brand !== item.originalBrand && '✏️'}
                        </label>
                        <input
                          type="text"
                          value={item.brand || ''}
                          onChange={(e) => updateItem(item.id, 'brand', e.target.value)}
                          placeholder="選填"
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: item.brand !== item.originalBrand 
                              ? '2px solid #3b82f6' 
                              : '2px solid #e5e7eb',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: '700',
                            boxSizing: 'border-box',
                            backgroundColor: item.brand !== item.originalBrand 
                              ? '#eff6ff' 
                              : 'white'
                          }}
                        />
                      </div>

                      {/* ✅ 單價（可編輯） */}
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

                      {/* ✅ 新舊（可編輯） */}
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
                    </div>
                  );
                })}
              </div>

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
                  disabled={!hasChanges() || items.some(item => item.uploading)}
                  style={{
                    flex: 2,
                    minWidth: '120px',
                    padding: '12px',
                    backgroundColor: (hasChanges() && !items.some(item => item.uploading)) 
                      ? '#10b981' 
                      : '#d1d5db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: (hasChanges() && !items.some(item => item.uploading)) 
                      ? 'pointer' 
                      : 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Save size={18} />
                  {items.some(item => item.uploading) 
                    ? '⏳ 圖片上傳中...' 
                    : hasChanges() 
                      ? '儲存修改（需要 1 Token）' 
                      : '沒有修改'
                  }
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {lightboxImage && (
        <ImageLightbox
          imageUrl={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}

export default EditPostModal;