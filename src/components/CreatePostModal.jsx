import { X, Plus, Trash2, DollarSign, ShoppingCart, Upload, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { COLORS } from '../data/mockData';
import { compressImage, uploadToSupabase } from '../utils/imageCompression';
import ImageLightbox from './ImageLightbox';

function CreatePostModal({ onClose, onCreatePost, currentUser }) {
  const [type, setType] = useState('sell');
  const [items, setItems] = useState([
    { 
      id: 1, 
      partNumber: '', 
      color: '', 
      quantity: '', 
      pricePerUnit: '',
      condition: '',
      imageUrl: null,
      imageFile: null,
      uploading: false
    }
  ]);
  
  const [customColors, setCustomColors] = useState({});
  const [customConditions, setCustomConditions] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const addItem = () => {
    setItems([
      ...items,
      { 
        id: Date.now(), 
        partNumber: '', 
        color: '', 
        quantity: '', 
        pricePerUnit: '',
        condition: '',
        imageUrl: null,
        imageFile: null,
        uploading: false
      }
    ]);
  };

  const removeItem = (id) => {
    if (items.length === 1) {
      alert('至少要有一個配件！');
      return;
    }
    setItems(items.filter(item => item.id !== id));
    
    const newCustomColors = {...customColors};
    const newCustomConditions = {...customConditions};
    delete newCustomColors[id];
    delete newCustomConditions[id];
    setCustomColors(newCustomColors);
    setCustomConditions(newCustomConditions);
  };

  // ✅ 改用 prevItems callback
  const updateItem = (id, field, value) => {
    setItems(prevItems =>
      prevItems.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // ✅ 重寫 handleImageUpload - 一次過 update 晒
  const handleImageUpload = async (id, file) => {
    if (!file) return;

    // 檢查檔案類型
    if (!file.type.startsWith('image/')) {
      alert('請上傳圖片檔案！');
      return;
    }

    // ✅ 先設定 uploading = true
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, uploading: true } : item
      )
    );

    try {
      // 1. 壓縮圖片
      const originalSizeKB = (file.size / 1024).toFixed(2);
      console.log(`原始大小: ${originalSizeKB} KB`);

      let processedFile = file;
      if (file.size > 1000 * 1024) { // 如果大過 1MB
        console.log('圖片太大，開始壓縮...');
        processedFile = await compressImage(file, 1000);
        const compressedSizeKB = (processedFile.size / 1024).toFixed(2);
        console.log(`壓縮後大小: ${compressedSizeKB} KB`);
      }

      // 2. Upload 到 Supabase
      const imageUrl = await uploadToSupabase(processedFile);
      console.log('✅ Upload 成功:', imageUrl);

      // 3. ✅ 一次過 update 晒所有 fields
      setItems(prevItems => {
        const updated = prevItems.map(item =>
          item.id === id 
            ? { 
                ...item, 
                imageUrl: imageUrl,
                imageFile: processedFile,
                uploading: false 
              }
            : item
        );
        
        console.log('📝 更新後的 items:', updated.map(i => ({
          id: i.id,
          partNumber: i.partNumber,
          imageUrl: i.imageUrl,
          uploading: i.uploading
        })));
        
        return updated;
      });

    } catch (error) {
      console.error('❌ Upload 失敗:', error);
      alert('圖片上傳失敗：' + error.message);
      
      // ✅ 失敗時都要 set uploading = false
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, uploading: false } : item
        )
      );
    }
  };

  // ✅ 改用 prevItems callback
  const handleRemoveImage = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id 
          ? { ...item, imageUrl: null, imageFile: null }
          : item
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    // ✅ 檢查有無圖片仍在上傳中
    const hasUploadingImages = items.some(item => item.uploading);
    if (hasUploadingImages) {
      alert('⏳ 請等待圖片上傳完成！');
      return;
    }
    
    const isValid = items.every(item => 
      item.partNumber && 
      item.color && 
      item.quantity && 
      item.pricePerUnit &&
      item.condition
    );
    
    if (!isValid) {
      alert('請填寫所有欄位！');
      return;
    }

    for (const item of items) {
      if (item.color === '其他' && !customColors[item.id]) {
        alert('請輸入自訂顏色！');
        return;
      }
      if (item.condition === '其他' && !customConditions[item.id]) {
        alert('請輸入新舊狀況！');
        return;
      }
    }

    // ✅ Debug: 睇下 submit 時嘅 items state
    console.log('🔍 Submit 時的 items:', items.map(item => ({
      id: item.id,
      partNumber: item.partNumber,
      imageUrl: item.imageUrl,
      uploading: item.uploading
    })));

    const postData = {
      type: type,
      items: items.map(item => ({
        part_number: item.partNumber,
        color: item.color === '其他' ? customColors[item.id] : item.color,
        quantity: parseInt(item.quantity),
        price_per_unit: parseFloat(item.pricePerUnit),
        condition: item.condition === '其他' ? customConditions[item.id] : item.condition,
        image_url: item.imageUrl || null
      })),
      contact_info: null,
      notes: null
    };

    console.log('📤 發送到後端的數據:', JSON.stringify(postData, null, 2));
    
    setIsSubmitting(true);
    
    try {
      await onCreatePost(postData);
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div 
        className="create-post-overlay"
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
          padding: '20px',
          overflowY: 'auto'
        }}
      >
        <div 
          className="create-post-modal"
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '1000px',
            width: '100%',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}
        >
          {/* Header */}
          <div className="modal-header" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '16px',
            gap: '12px'
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: 'bold', 
                color: '#1f2937', 
                margin: 0,
                wordBreak: 'break-word'
              }}>
                發佈交易
              </h2>
              <p style={{ 
                fontSize: '14px', 
                color: '#6b7280', 
                marginTop: '4px',
                wordBreak: 'break-word'
              }}>
                可以一次過發佈多個配件
              </p>
            </div>
            <button
              onClick={onClose}
              disabled={isSubmitting}
              style={{
                padding: '8px',
                border: 'none',
                background: 'transparent',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                borderRadius: '8px',
                flexShrink: 0,
                opacity: isSubmitting ? 0.5 : 1
              }}
              onMouseOver={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = '#fee2e2';
                }
              }}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <X size={24} color="#dc2626" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 出售/求購切換 */}
            <div className="type-selector" style={{ 
              display: 'flex', 
              gap: '12px', 
              marginBottom: '24px',
              padding: '16px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px'
            }}>
              <button
                type="button"
                onClick={() => setType('sell')}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: type === 'sell' ? '#10b981' : 'white',
                  color: type === 'sell' ? 'white' : '#6b7280',
                  border: type === 'sell' ? 'none' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap'
                }}
              >
                <DollarSign size={20} />
                出售
              </button>
              <button
                type="button"
                onClick={() => setType('buy')}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: type === 'buy' ? '#3b82f6' : 'white',
                  color: type === 'buy' ? 'white' : '#6b7280',
                  border: type === 'buy' ? 'none' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap'
                }}
              >
                <ShoppingCart size={20} />
                求購
              </button>
            </div>

            {/* ✅ 桌面版：Table Header */}
            <div className="table-header-desktop" style={{
              display: 'grid',
              gridTemplateColumns: '80px 1.5fr 1fr 0.8fr 0.8fr 1fr 60px',
              gap: '12px',
              marginBottom: '12px',
              padding: '12px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#374151'
            }}>
              <div>圖片</div>
              <div>配件編號</div>
              <div>顏色</div>
              <div>新舊</div>
              <div>數量</div>
              <div>{type === 'sell' ? '售價' : '求購價'}/1 (HK$)</div>
              <div></div>
            </div>

            {/* 配件列表 */}
            <div style={{ marginBottom: '16px' }}>
              {items.map((item, index) => (
                <div key={item.id} className="item-row-wrapper">
                  {/* ✅ 桌面版：Grid Layout */}
                  <div 
                    className="item-row-desktop"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 1.5fr 1fr 0.8fr 0.8fr 1fr 60px',
                      gap: '12px',
                      marginBottom: '8px',
                      padding: '12px',
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      alignItems: 'center'
                    }}
                  >
                    {/* ✅ 圖片上傳區 */}
                    <div style={{ position: 'relative' }}>
                      {item.imageUrl ? (
                        <div style={{ position: 'relative' }}>
                          <img
                            src={item.imageUrl}
                            alt="配件圖片"
                            style={{
                              width: '80px',
                              height: '80px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                              border: '2px solid #e5e7eb',
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
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '14px',
                              fontWeight: 'bold'
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <label
                          style={{
                            width: '80px',
                            height: '80px',
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
                            <div style={{ fontSize: '10px', color: '#6b7280', textAlign: 'center' }}>
                              上傳中...
                            </div>
                          ) : (
                            <>
                              <Upload size={20} color="#9ca3af" />
                              <span style={{ fontSize: '10px', color: '#9ca3af', marginTop: '4px' }}>
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

                    {/* 配件編號 */}
                    <input
                      type="text"
                      required
                      value={item.partNumber}
                      onChange={(e) => updateItem(item.id, 'partNumber', e.target.value)}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        width: '100%'
                      }}
                      placeholder="例如：3001"
                    />

                    {/* 顏色 */}
                    <select
                      required
                      value={item.color}
                      onChange={(e) => {
                        const value = e.target.value;
                        updateItem(item.id, 'color', value);
                        
                        if (value !== '其他') {
                          const newCustomColors = {...customColors};
                          delete newCustomColors[item.id];
                          setCustomColors(newCustomColors);
                        }
                      }}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        width: '100%'
                      }}
                    >
                      <option value="">選擇...</option>
                      {COLORS.map(color => (
                        <option key={color} value={color}>{color}</option>
                      ))}
                      <option value="不適用">不適用</option>
                      <option value="其他">其他</option>
                    </select>

                    {/* 新舊 */}
                    <select
                      required
                      value={item.condition}
                      onChange={(e) => {
                        const value = e.target.value;
                        updateItem(item.id, 'condition', value);
                        
                        if (value !== '其他') {
                          const newCustomConditions = {...customConditions};
                          delete newCustomConditions[item.id];
                          setCustomConditions(newCustomConditions);
                        }
                      }}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        width: '100%'
                      }}
                    >
                      <option value="">選擇...</option>
                      <option value="全新">全新</option>
                      <option value="9成新">9成新</option>
                      <option value="8成新">8成新</option>
                      <option value="7成新">7成新</option>
                      <option value="6成新">6成新</option>
                      <option value="5成新或以下">5成新或以下</option>
                      <option value="其他">其他</option>
                    </select>

                    {/* 數量 */}
                    <input
                      type="number"
                      required
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        width: '100%'
                      }}
                      placeholder="0"
                    />

                    {/* 價錢 */}
                    <input
                      type="number"
                      required
                      min="0.01"
                      step="0.01"
                      value={item.pricePerUnit}
                      onChange={(e) => updateItem(item.id, 'pricePerUnit', e.target.value)}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        width: '100%'
                      }}
                      placeholder="0.00"
                    />

                    {/* 刪除按鈕 */}
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      disabled={items.length === 1}
                      style={{
                        padding: '8px',
                        border: 'none',
                        backgroundColor: items.length === 1 ? '#f3f4f6' : '#fee2e2',
                        color: items.length === 1 ? '#9ca3af' : '#dc2626',
                        borderRadius: '6px',
                        cursor: items.length === 1 ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        minHeight: '42px'
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* ✅ 手機版：Card Layout */}
                  <div 
                    className="item-row-mobile"
                    style={{
                      display: 'none',
                      padding: '16px',
                      marginBottom: '12px',
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb'
                    }}
                  >
                    {/* 圖片上傳區（手機版） */}
                    <div style={{ marginBottom: '12px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        配件圖片
                      </label>
                      {item.imageUrl ? (
                        <div style={{ position: 'relative', width: 'fit-content' }}>
                          <img
                            src={item.imageUrl}
                            alt="配件圖片"
                            style={{
                              width: '100px',
                              height: '100px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                              border: '2px solid #e5e7eb',
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
                            <div style={{ fontSize: '12px', color: '#6b7280', textAlign: 'center' }}>
                              上傳中...
                            </div>
                          ) : (
                            <>
                              <Upload size={24} color="#9ca3af" />
                              <span style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
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

                    {/* 配件編號 */}
                    <div style={{ marginBottom: '12px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        配件編號
                      </label>
                      <input
                        type="text"
                        required
                        value={item.partNumber}
                        onChange={(e) => updateItem(item.id, 'partNumber', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px',
                          fontSize: '14px',
                          boxSizing: 'border-box'
                        }}
                        placeholder="例如：3001"
                      />
                    </div>

                    {/* 顏色 + 新舊 (2欄) */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px',
                      marginBottom: '12px'
                    }}>
                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '6px'
                        }}>
                          顏色
                        </label>
                        <select
                          required
                          value={item.color}
                          onChange={(e) => {
                            const value = e.target.value;
                            updateItem(item.id, 'color', value);
                            
                            if (value !== '其他') {
                              const newCustomColors = {...customColors};
                              delete newCustomColors[item.id];
                              setCustomColors(newCustomColors);
                            }
                          }}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                          }}
                        >
                          <option value="">選擇...</option>
                          {COLORS.map(color => (
                            <option key={color} value={color}>{color}</option>
                          ))}
                          <option value="不適用">不適用</option>
                          <option value="其他">其他</option>
                        </select>
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '6px'
                        }}>
                          新舊
                        </label>
                        <select
                          required
                          value={item.condition}
                          onChange={(e) => {
                            const value = e.target.value;
                            updateItem(item.id, 'condition', value);
                            
                            if (value !== '其他') {
                              const newCustomConditions = {...customConditions};
                              delete newCustomConditions[item.id];
                              setCustomConditions(newCustomConditions);
                            }
                          }}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                          }}
                        >
                          <option value="">選擇...</option>
                          <option value="全新">全新</option>
                          <option value="9成新">9成新</option>
                          <option value="8成新">8成新</option>
                          <option value="7成新">7成新</option>
                          <option value="6成新">6成新</option>
                          <option value="5成新或以下">5成新或以下</option>
                          <option value="其他">其他</option>
                        </select>
                      </div>
                    </div>

                    {/* 數量 + 價錢 (2欄) */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px',
                      marginBottom: '12px'
                    }}>
                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '6px'
                        }}>
                          數量
                        </label>
                        <input
                          type="number"
                          required
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                          }}
                          placeholder="0"
                        />
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '6px'
                        }}>
                          {type === 'sell' ? '售價' : '求購價'}/1
                        </label>
                        <input
                          type="number"
                          required
                          min="0.01"
                          step="0.01"
                          value={item.pricePerUnit}
                          onChange={(e) => updateItem(item.id, 'pricePerUnit', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                          }}
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    {/* 刪除按鈕 */}
                    {items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: 'none',
                          backgroundColor: '#fee2e2',
                          color: '#dc2626',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}
                      >
                        <Trash2 size={16} />
                        移除此配件
                      </button>
                    )}
                  </div>

                  {/* 自訂顏色輸入框 */}
                  {item.color === '其他' && (
                    <div className="custom-input" style={{
                      marginTop: '-4px',
                      marginBottom: '8px',
                      paddingLeft: '12px'
                    }}>
                      <input
                        type="text"
                        required
                        value={customColors[item.id] || ''}
                        onChange={(e) => setCustomColors({
                          ...customColors,
                          [item.id]: e.target.value
                        })}
                        placeholder="✏️ 請輸入顏色名稱（例如：淺灰色）"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '2px solid #3b82f6',
                          borderRadius: '6px',
                          fontSize: '14px',
                          boxSizing: 'border-box',
                          backgroundColor: '#eff6ff'
                        }}
                      />
                    </div>
                  )}

                  {/* 自訂新舊輸入框 */}
                  {item.condition === '其他' && (
                    <div className="custom-input" style={{
                      marginTop: '-4px',
                      marginBottom: '8px',
                      paddingLeft: '12px'
                    }}>
                      <input
                        type="text"
                        required
                        value={customConditions[item.id] || ''}
                        onChange={(e) => setCustomConditions({
                          ...customConditions,
                          [item.id]: e.target.value
                        })}
                        placeholder="✏️ 請輸入新舊狀況（例如：輕微刮痕）"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '2px solid #10b981',
                          borderRadius: '6px',
                          fontSize: '14px',
                          boxSizing: 'border-box',
                          backgroundColor: '#f0fdf4'
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 新增配件按鈕 */}
            <button
              type="button"
              onClick={addItem}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#f3f4f6',
                color: '#374151',
                border: '2px dashed #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '24px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#e5e7eb';
                e.target.style.borderColor = '#9ca3af';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#f3f4f6';
                e.target.style.borderColor = '#d1d5db';
              }}
            >
              <Plus size={20} />
              新增配件
            </button>

            {/* 底部按鈕 */}
            <div className="modal-footer" style={{
              borderTop: '2px solid #e5e7eb',
              paddingTop: '16px',
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  minWidth: '120px',
                  padding: '12px',
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.6 : 1
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#e5e7eb';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#f3f4f6';
                  }
                }}
              >
                取消
              </button>
              <button
                type="submit"
                disabled={isSubmitting || items.some(item => item.uploading)}
                style={{
                  flex: 2,
                  minWidth: '160px',
                  padding: '12px',
                  backgroundColor: (isSubmitting || items.some(item => item.uploading)) 
                    ? '#d1d5db' 
                    : (type === 'sell' ? '#10b981' : '#3b82f6'),
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: (isSubmitting || items.some(item => item.uploading)) 
                    ? 'not-allowed' 
                    : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Plus size={20} />
                <span>
                  {items.some(item => item.uploading) 
                    ? '⏳ 圖片上傳中...' 
                    : isSubmitting 
                      ? '發佈中...' 
                      : `發佈${type === 'sell' ? '出售' : '求購'} (${items.length} 個配件)`
                  }
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ 圖片放大 Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          imageUrl={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}

export default CreatePostModal;