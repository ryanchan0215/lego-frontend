import { Search, Filter } from 'lucide-react';

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
            💰 出售
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
            🛒 求購
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="searchbar-filters-wrapper">
        <div className="searchbar-filters-content">
          <div className="searchbar-filters-grid">
            {/* 搜尋框 */}
            <div style={{ position: 'relative' }}>
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
                  padding: '12px 12px 12px 42px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* ✅ 產品資料篩選 (item_description) */}
            <input
              type="text"
              placeholder="🧱 產品資料"
              value={filters.itemDescription || ''}
              onChange={(e) => onFilterChange({ ...filters, itemDescription: e.target.value })}
              style={{
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
            />

            {/* ✅ 種類篩選 (category) */}
            <select
              value={filters.category || ''}
              onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
              style={{
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
                backgroundColor: 'white',
                outline: 'none'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
            >
              <option value="">📂 所有種類</option>
              <option value="電子產品">電子產品</option>
              <option value="家居用品">家居用品</option>
              <option value="服裝配飾">服裝配飾</option>
              <option value="運動用品">運動用品</option>
              <option value="書籍文具">書籍文具</option>
              <option value="其他">其他</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;