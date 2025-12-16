import { X, Plus, Trash2, DollarSign, ShoppingCart, Upload } from 'lucide-react';
import { useState } from 'react';
import { CATEGORIES, CONDITIONS } from '../data/mockData';  // ✅ 移除 COLORS
import { compressImage, uploadToSupabase } from '../utils/imageCompression';
import ImageLightbox from './ImageLightbox';

function CreatePostModal({ onClose, onCreatePost, currentUser }) {
  const [type, setType] = useState('sell');
  const [items, setItems] = useState([
    { 
      id: 1, 
      itemDescription: '',     // ✅ 改
      category: '',            // ✅ 改
      brand: '',               // ✅ 改（非必填）
      condition: '',
      pricePerUnit: '',        // ✅ 改
      imageUrl: null,
      imageFile: null,
      uploading: false
    }
  ]);
  
  const [customCategories, setCustomCategories] = useState({});  // ✅ 改
  const [customConditions, setCustomConditions] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const addItem = () => {
    setItems([
      ...items,
      { 
        id: Date.now(), 
        itemDescription: '', 
        category: '', 
        brand: '',
        condition: '',
        pricePerUnit: '',
        imageUrl: null,
        imageFile: null,
        uploading: false
      }
    ]);
  };

  const removeItem = (id) => {
    if (items.length === 1) {
      alert('至少要有一個物品！');
      return;
    }
    setItems(items.filter(item => item.id !== id));
    
    const newCustomCategories = {...customCategories};
    const newCustomConditions = {...customConditions};
    delete newCustomCategories[id];
    delete newCustomConditions[id];
    setCustomCategories(newCustomCategories);
    setCustomConditions(newCustomConditions);
  };

  const updateItem = (id, field, value) => {
    setItems(prevItems =>
      prevItems.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // ✅ handleImageUpload 保持不變
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
                imageFile: processedFile,
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
          ? { ...item, imageUrl: null, imageFile: null }
          : item
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    const hasUploadingImages = items.some(item => item.uploading);
    if (hasUploadingImages) {
      alert('⏳ 請等待圖片上傳完成！');
      return;
    }
    
    // ✅ 驗證：產品資料、種類、新舊、價錢 必填；品牌非必填
    const isValid = items.every(item => 
      item.itemDescription &&    // ✅ 改
      item.category &&           // ✅ 改
      item.condition &&
      item.pricePerUnit !== ''   // ✅ 改：允許 $0
    );
    
    if (!isValid) {
      alert('請填寫所有必填欄位（品牌可留空）！');
      return;
    }

    for (const item of items) {
      if (item.category === '其他' && !customCategories[item.id]) {
        alert('請輸入自訂種類！');
        return;
      }
      if (item.condition === '其他' && !customConditions[item.id]) {
        alert('請輸入新舊狀況！');
        return;
      }
    }

    const postData = {
      type: type,
      items: items.map(item => ({
        item_description: item.itemDescription,  // ✅ 改
        category: item.category === '其他' ? customCategories[item.id] : item.category,  // ✅ 改
        brand: item.brand || null,               // ✅ 改：品牌可以係 null
        condition: item.condition === '其他' ? customConditions[item.id] : item.condition,
        price_per_unit: parseFloat(item.pricePerUnit),  // ✅ 改：移除 quantity
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
          {/* Header - 保持不變 */}
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
                🍼 發佈親子用品
              </h2>
              <p style={{ 
                fontSize: '14px', 
                color: '#6b7280', 
                marginTop: '4px',
                wordBreak: 'break-word'
              }}>
                可以一次過發佈多個物品
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
            {/* 出售/求購切換 - 保持不變 */}
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
              gridTemplateColumns: '80px 2fr 1fr 1fr 1fr 1fr 60px',  // ✅ 改
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
              <div>產品資料</div>          {/* ✅ 改 */}
              <div>種類</div>              {/* ✅ 改 */}
              <div>品牌（如有）</div>      {/* ✅ 改 */}
              <div>新舊</div>
              <div>{type === 'sell' ? '售價' : '求購價'} (HK$)</div>  {/* ✅ 改 */}
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
                      gridTemplateColumns: '80px 2fr 1fr 1fr 1fr 1fr 60px',  // ✅ 改
                      gap: '12px',
                      marginBottom: '8px',
                      padding: '12px',
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      alignItems: 'center'
                    }}
                  >
                    {/* 圖片上傳區 - 保持不變 */}
                    <div style={{ position: 'relative' }}>
                      {item.imageUrl ? (
                        <div style={{ position: 'relative' }}>
                          <img
                            src={item.imageUrl}
                            alt="物品圖片"
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

                    {/* ✅ 產品資料（大輸入框） */}
                    <textarea
                      required
                      value={item.itemDescription}
                      onChange={(e) => updateItem(item.id, 'itemDescription', e.target.value)}
                      rows="2"
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        width: '100%',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                      placeholder="例如：Chicco 嬰兒車，輕便可摺疊，帶遮陽罩"
                    />

                    {/* ✅ 種類 */}
                <select
  required
  value={item.category}
  onChange={(e) => {
    const value = e.target.value;
    updateItem(item.id, 'category', value);
    
    if (value !== '其他') {
      const newCustomCategories = {...customCategories};
      delete newCustomCategories[item.id];
      setCustomCategories(newCustomCategories);
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
  
  {/* 🚼 大件用品 */}
  <optgroup label="🚼 大件用品">
    <option value="嬰兒車">🚼 嬰兒車</option>
    <option value="嬰兒床">🛏️ 嬰兒床</option>
    <option value="安全座椅">🚗 安全座椅</option>
    <option value="揹帶 / 腰凳">👶 揹帶 / 腰凳</option>
  </optgroup>

  {/* 🍼 飲食類 */}
  <optgroup label="🍼 飲食類">
    <option value="奶粉">🥛 奶粉</option>
    <option value="嬰兒食品">🍚 嬰兒食品</option>
    <option value="奶樽 / 奶咀">🍼 奶樽 / 奶咀</option>
    <option value="餵食用具">🍴 餵食用具</option>
  </optgroup>

  {/* 🧸 玩具 & 學習 */}
  <optgroup label="🧸 玩具 & 學習">
    <option value="玩具">🧸 玩具</option>
    <option value="圖書">📚 圖書</option>
  </optgroup>

  {/* 👕 衣物類 */}
  <optgroup label="👕 衣物類">
    <option value="衣服">👕 衣服</option>
    <option value="鞋襪">👟 鞋襪</option>
  </optgroup>

  {/* 🧷 清潔護理 */}
  <optgroup label="🧷 清潔護理">
    <option value="尿片">🧷 尿片</option>
    <option value="清潔用品">🧼 清潔用品</option>
    <option value="洗護用品">🛁 洗護用品</option>
  </optgroup>

  {/* 📦 其他 */}
  <option value="其他">📦 其他</option>
</select>

                    {/* ✅ 品牌（非必填） */}
                    <input
                      type="text"
                      value={item.brand}
                      onChange={(e) => updateItem(item.id, 'brand', e.target.value)}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        width: '100%'
                      }}
                      placeholder="例如：Chicco"
                    />

                    {/* 新舊 - 保持不變 */}
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
                      {CONDITIONS.map(cond => (
                        <option key={cond} value={cond}>{cond}</option>
                      ))}
                    </select>

                    {/* ✅ 價錢（允許 $0） */}
                    <input
                      type="number"
                      required
                      min="0"
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

                    {/* 刪除按鈕 - 保持不變 */}
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
                        物品圖片
                      </label>
                      {item.imageUrl ? (
                        <div style={{ position: 'relative', width: 'fit-content' }}>
                          <img
                            src={item.imageUrl}
                            alt="物品圖片"
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

                    {/* ✅ 產品資料 */}
                    <div style={{ marginBottom: '12px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        產品資料
                      </label>
                      <textarea
                        required
                        value={item.itemDescription}
                        onChange={(e) => updateItem(item.id, 'itemDescription', e.target.value)}
                        rows="3"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px',
                          fontSize: '14px',
                          boxSizing: 'border-box',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                        placeholder="例如：Chicco 嬰兒車，輕便可摺疊，帶遮陽罩"
                      />
                    </div>

                    {/* ✅ 種類 + 品牌 (2欄) */}
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
                          種類
                        </label>
                        <select
  required
  value={item.category}
  onChange={(e) => {
    const value = e.target.value;
    updateItem(item.id, 'category', value);
    
    if (value !== '其他') {
      const newCustomCategories = {...customCategories};
      delete newCustomCategories[item.id];
      setCustomCategories(newCustomCategories);
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
  
  {/* 🚼 大件用品 */}
  <optgroup label="🚼 大件用品">
    <option value="嬰兒車">🚼 嬰兒車</option>
    <option value="嬰兒床">🛏️ 嬰兒床</option>
    <option value="安全座椅">🚗 安全座椅</option>
    <option value="揹帶 / 腰凳">👶 揹帶 / 腰凳</option>
  </optgroup>

  {/* 🍼 飲食類 */}
  <optgroup label="🍼 飲食類">
    <option value="奶粉">🥛 奶粉</option>
    <option value="嬰兒食品">🍚 嬰兒食品</option>
    <option value="奶樽 / 奶咀">🍼 奶樽 / 奶咀</option>
    <option value="餵食用具">🍴 餵食用具</option>
  </optgroup>

  {/* 🧸 玩具 & 學習 */}
  <optgroup label="🧸 玩具 & 學習">
    <option value="玩具">🧸 玩具</option>
    <option value="圖書">📚 圖書</option>
  </optgroup>

  {/* 👕 衣物類 */}
  <optgroup label="👕 衣物類">
    <option value="衣服">👕 衣服</option>
    <option value="鞋襪">👟 鞋襪</option>
  </optgroup>

  {/* 🧷 清潔護理 */}
  <optgroup label="🧷 清潔護理">
    <option value="尿片">🧷 尿片</option>
    <option value="清潔用品">🧼 清潔用品</option>
    <option value="洗護用品">🛁 洗護用品</option>
  </optgroup>

  {/* 📦 其他 */}
  <option value="其他">📦 其他</option>
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
                          品牌（如有）
                        </label>
                        <input
                          type="text"
                          value={item.brand}
                          onChange={(e) => updateItem(item.id, 'brand', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                          }}
                          placeholder="例如：Chicco"
                        />
                      </div>
                    </div>

                    {/* ✅ 新舊 + 價錢 (2欄) */}
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
                          {CONDITIONS.map(cond => (
                            <option key={cond} value={cond}>{cond}</option>
                          ))}
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
                          {type === 'sell' ? '售價' : '求購價'}
                        </label>
                        <input
                          type="number"
                          required
                          min="0"
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
                        移除此物品
                      </button>
                    )}
                  </div>

                  {/* ✅ 自訂種類輸入框 */}
                  {item.category === '其他' && (
                    <div className="custom-input" style={{
                      marginTop: '-4px',
                      marginBottom: '8px',
                      paddingLeft: '12px'
                    }}>
                      <input
                        type="text"
                        required
                        value={customCategories[item.id] || ''}
                        onChange={(e) => setCustomCategories({
                          ...customCategories,
                          [item.id]: e.target.value
                        })}
                        placeholder="✏️ 請輸入種類名稱（例如：揹巾）"
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

                  {/* 自訂新舊輸入框 - 保持不變 */}
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

            {/* 新增物品按鈕 */}
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
              新增物品
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
                      : `發佈${type === 'sell' ? '出售' : '求購'} (${items.length} 件物品)`
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