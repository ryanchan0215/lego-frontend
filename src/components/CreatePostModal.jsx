import { X, Plus, Trash2, DollarSign, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { COLORS } from '../data/mockData';

function CreatePostModal({ onClose, onCreatePost, currentUser }) {
  const [type, setType] = useState('sell');
  const [items, setItems] = useState([
    { 
      id: 1, 
      partNumber: '', 
      color: '', 
      quantity: '', 
      pricePerUnit: '',
      condition: ''
    }
  ]);
  
  const [customColors, setCustomColors] = useState({});
  const [customConditions, setCustomConditions] = useState({});

  const addItem = () => {
    setItems([
      ...items,
      { 
        id: Date.now(), 
        partNumber: '', 
        color: '', 
        quantity: '', 
        pricePerUnit: '',
        condition: ''
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

  const updateItem = (id, field, value) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
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

    const postData = {
      type: type,
      items: items.map(item => ({
        part_number: item.partNumber,
        color: item.color === '其他' ? customColors[item.id] : item.color,
        quantity: parseInt(item.quantity),
        price_per_unit: parseFloat(item.pricePerUnit),
        condition: item.condition === '其他' ? customConditions[item.id] : item.condition
      })),
      contact_info: null,
      notes: null
    };

    console.log('發送到後端的數據:', postData);
    onCreatePost(postData);
  };

  return (
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
      //onClick={onClose}// 
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
        //onClick={(e) => e.stopPropagation()}
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
            style={{
              padding: '8px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              borderRadius: '8px',
              flexShrink: 0
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#fee2e2'}
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
            gridTemplateColumns: '1.8fr 1.2fr 1fr 0.8fr 1fr 60px',
            gap: '12px',
            marginBottom: '12px',
            padding: '12px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '14px',
            color: '#374151'
          }}>
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
                    gridTemplateColumns: '1.8fr 1.2fr 1fr 0.8fr 1fr 60px',
                    gap: '12px',
                    marginBottom: '8px',
                    padding: '12px',
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}
                >
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
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e5e7eb'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            >
              取消
            </button>
            <button
              type="submit"
              style={{
                flex: 2,
                minWidth: '160px',
                padding: '12px',
                backgroundColor: type === 'sell' ? '#10b981' : '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = type === 'sell' ? '#059669' : '#2563eb'}
              onMouseOut={(e) => e.target.style.backgroundColor = type === 'sell' ? '#10b981' : '#3b82f6'}
            >
              <Plus size={20} />
              <span>發佈{type === 'sell' ? '出售' : '求購'} ({items.length} 個配件)</span>
            </button>
          </div>
        </form>
      </div>


    </div>
  );
}

export default CreatePostModal;