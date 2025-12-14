import { Search, ShoppingCart, DollarSign } from 'lucide-react';
import { COLORS } from '../data/mockData';

function SearchBar({ activeTab, onTabChange, searchTerm, onSearchChange, filters, onFilterChange }) {
  return (
    <div>
      {/* Tab Navigation */}
      <div className="searchbar-tabs">
        <div className="searchbar-tabs-content">
          {/* 出售 Tab */}
          <button
            onClick={() => onTabChange('sell')}
            style={{
              padding: '14px 24px',
              backgroundColor: activeTab === 'sell' ? '#10b981' : 'transparent',
              color: activeTab === 'sell' ? 'white' : '#6b7280',
              border: 'none',
              borderBottom: activeTab === 'sell' ? '3px solid #059669' : '3px solid transparent',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              if (activeTab !== 'sell') {
                e.target.style.backgroundColor = '#f3f4f6';
              }
            }}
            onMouseOut={(e) => {
              if (activeTab !== 'sell') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            <DollarSign size={18} />
            出售
          </button>

          {/* 求購 Tab */}
          <button
            onClick={() => onTabChange('buy')}
            style={{
              padding: '14px 24px',
              backgroundColor: activeTab === 'buy' ? '#3b82f6' : 'transparent',
              color: activeTab === 'buy' ? 'white' : '#6b7280',
              border: 'none',
              borderBottom: activeTab === 'buy' ? '3px solid #2563eb' : '3px solid transparent',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              if (activeTab !== 'buy') {
                e.target.style.backgroundColor = '#f3f4f6';
              }
            }}
            onMouseOut={(e) => {
              if (activeTab !== 'buy') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            <ShoppingCart size={18} />
            求購
          </button>
        </div>
      </div>

      {/* 搜尋 + 篩選區 */}
      <div className="searchbar-filters-wrapper">
        <div className="searchbar-filters-content">
          <div className="searchbar-filters-grid">
            {/* 關鍵字搜尋 */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                🔍 關鍵字搜尋
              </label>
              <div style={{ position: 'relative' }}>
                <Search 
                  size={20} 
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
                  placeholder="搜尋產品編號、顏色或用戶..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 40px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
            </div>

            {/* 配件編號篩選 */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                🧩 產品編號
              </label>
              <input
                type="text"
                placeholder="例如：3001"
                value={filters.partNumber || ''}
                onChange={(e) => onFilterChange({ ...filters, partNumber: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            {/* 顏色篩選 */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                🎨 顏色
              </label>
              <select
                value={filters.color || ''}
                onChange={(e) => onFilterChange({ ...filters, color: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  cursor: 'pointer'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              >
                <option value="">全部顏色</option>
                {COLORS.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 清除篩選按鈕 */}
          {(searchTerm || filters.partNumber || filters.color) && (
            <button
              onClick={() => {
                onSearchChange('');
                onFilterChange({ partNumber: '', color: '' });
              }}
              style={{
                marginTop: '12px',
                padding: '8px 16px',
                backgroundColor: '#f3f4f6',
                color: '#6b7280',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e5e7eb'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            >
              ✕ 清除所有篩選
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;