import { Search } from 'lucide-react';

function SearchBar({ 
  activeTab, 
  onTabChange, 
  searchTerm, 
  onSearchChange,
  filters,
  onFilterChange
}) {
  const handleSearch = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <>
      {/* Tabs */}
      <div className="searchbar-tabs">
        <div className="searchbar-tabs-content">
          <button
            onClick={() => onTabChange('')}
            style={{
              padding: '12px 24px',
              backgroundColor: !activeTab ? '#3b82f6' : 'transparent',
              color: !activeTab ? 'white' : '#6b7280',
              border: 'none',
              borderBottom: !activeTab ? '3px solid #2563eb' : '3px solid transparent',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            全部
          </button>
          <button
            onClick={() => onTabChange('sell')}
            style={{
              padding: '12px 24px',
              backgroundColor: activeTab === 'sell' ? '#3b82f6' : 'transparent',
              color: activeTab === 'sell' ? 'white' : '#6b7280',
              border: 'none',
              borderBottom: activeTab === 'sell' ? '3px solid #2563eb' : '3px solid transparent',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            💰 出售 / 免費送出
          </button>
          <button
            onClick={() => onTabChange('buy')}
            style={{
              padding: '12px 24px',
              backgroundColor: activeTab === 'buy' ? '#3b82f6' : 'transparent',
              color: activeTab === 'buy' ? 'white' : '#6b7280',
              border: 'none',
              borderBottom: activeTab === 'buy' ? '3px solid #2563eb' : '3px solid transparent',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            🛒 徵收
          </button>
        </div>
      </div>

      {/* ✅ 一行過篩選器（收窄版） */}
      <div className="searchbar-filters-wrapper">
        <div className="searchbar-filters-content">
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
            {/* ✅ 搜尋框（固定 400px，手機版 100%） */}
            <div style={{ 
              position: 'relative', 
              width: '400px',
              maxWidth: '100%'
            }}>
              <Search 
                size={18} 
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9ca3af'
                }}
              />
              <input
                type="text"
                placeholder="🔍 搜尋產品資料、種類、品牌..."
                value={searchTerm}
                onChange={handleSearch}
                style={{
                  width: '100%',
                  padding: '10px 10px 10px 40px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* ✅ 種類篩選（固定 200px） */}
            <select
              value={filters.category || ''}
              onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
              style={{
                width: '200px',
                padding: '10px 12px',
               
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
                backgroundColor: 'white',
                outline: 'none',
                flexShrink: 0
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
            >
              <option value="">📂 所有種類</option>
              
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
        </div>
      </div>


      {/* ✅ 手機版：變返直排 */}
      <style jsx>{`
        @media (max-width: 768px) {
          .searchbar-filters-content > div {
            flex-direction: column !important;
          }

          .searchbar-filters-content > div > div,
          .searchbar-filters-content select {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}

export default SearchBar;