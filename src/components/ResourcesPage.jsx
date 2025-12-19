import { useState, useEffect } from 'react';
import { Upload, Download, FileText, Search, X, Eye, Lock } from 'lucide-react';
import { request } from '../api';

const CATEGORIES = [
  { value: 'writing', label: '✏️ 字帖', color: '#3b82f6' },
  { value: 'parenting', label: '👶 育兒指南', color: '#10b981' },
  { value: 'health', label: '🏥 健康資訊', color: '#ef4444' },
  { value: 'nutrition', label: '🍎 營養飲食', color: '#f59e0b' },
  { value: 'education', label: '📚 教育資源', color: '#8b5cf6' },
  { value: 'safety', label: '🛡️ 安全須知', color: '#ec4899' }
];

// ✅ Supabase 設定
const SUPABASE_URL = 'https://fifgdbgibdclpztlcxog.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZmdkYmdpYmRjbHB6dGxjeG9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNzI4NzQsImV4cCI6MjA4MDk0ODg3NH0.fuaN7rts5nl6sAO8R92FZOk1MJBviN4mVZ7iZVsfxgU';

function ResourcesPage({ currentUser, onLoginRequired }) {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewResource, setPreviewResource] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResources();
  }, []);

  useEffect(() => {
    filterResources();
  }, [resources, searchTerm, selectedCategory]);

  const loadResources = async () => {
    try {
      const data = await request('/resources');
      setResources(data);
    } catch (error) {
      console.error('載入資源失敗:', error);
      alert('載入資源失敗');
    } finally {
      setLoading(false);
    }
  };

  const filterResources = () => {
    let filtered = resources;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(r =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredResources(filtered);
  };

  // ✅ 預覽 PDF（登入才可以）
  const handlePreview = (resource) => {
    if (!currentUser) {
      alert('⚠️ 請先登入才能預覽資源');
      if (onLoginRequired) onLoginRequired();
      return;
    }
    setPreviewResource(resource);
    setShowPreviewModal(true);
  };

  // ✅ 下載 PDF（登入 + 記錄次數）
  const handleDownload = async (resource) => {
    if (!currentUser) {
      alert('⚠️ 請先登入才能下載資源');
      if (onLoginRequired) onLoginRequired();
      return;
    }

    try {
      // ✅ 記錄下載次數
      await request(`/resources/${resource.id}/download`, {
        method: 'POST'
      });

      // ✅ 下載檔案
      const link = document.createElement('a');
      link.href = resource.file_path;
      link.download = resource.file_name;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // ✅ 重新載入（更新下載次數）
      loadResources();

    } catch (error) {
      console.error('下載失敗:', error);
      alert('下載失敗');
    }
  };

  const getCategoryInfo = (category) => {
    return CATEGORIES.find(c => c.value === category) || CATEGORIES[0];
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      {/* Header */}
      <div style={{
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 8px 0'
          }}>
            📚 育兒素材分享
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: 0
          }}>
            {currentUser 
              ? '免費下載育兒資源、字帖、健康指南等' 
              : '🔒 請登入後下載資源'}
          </p>
        </div>

        {currentUser?.is_admin && (
          <button
            onClick={() => setShowUploadModal(true)}
            style={{
              padding: '12px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
          >
            <Upload size={18} />
            上載資源
          </button>
        )}
      </div>

      {/* Search & Filter */}
      <div style={{
        marginBottom: '24px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '12px'
      }}>
        <div style={{ position: 'relative' }}>
          <Search
            size={20}
            color="#9ca3af"
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
          <input
            type="text"
            placeholder="搜尋資源..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 12px 12px 44px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '12px 16px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            minWidth: '180px'
          }}
        >
          <option value="all">📂 全部分類</option>
          {CATEGORIES.map(cat => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Resources Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#9ca3af' }}>
          載入中...
        </div>
      ) : filteredResources.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: '#f9fafb',
          borderRadius: '12px',
          border: '2px dashed #d1d5db'
        }}>
          <FileText size={48} color="#d1d5db" style={{ margin: '0 auto 16px' }} />
          <p style={{ color: '#6b7280', margin: 0 }}>暫無資源</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {filteredResources.map(resource => {
            const category = getCategoryInfo(resource.category);
            return (
              <div
                key={resource.id}
                style={{
                  backgroundColor: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = category.color;
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* ✅ 未登入時顯示鎖定圖示 */}
                {!currentUser && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: '#fee2e2',
                    padding: '6px',
                    borderRadius: '50%'
                  }}>
                    <Lock size={16} color="#dc2626" />
                  </div>
                )}

                <div
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    backgroundColor: category.color,
                    color: 'white',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '12px'
                  }}
                >
                  {category.label}
                </div>

                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#1f2937',
                  margin: '0 0 8px 0'
                }}>
                  {resource.title}
                </h3>

                {resource.description && (
                  <p style={{
                    fontSize: '13px',
                    color: '#6b7280',
                    margin: '0 0 16px 0',
                    lineHeight: '1.5'
                  }}>
                    {resource.description}
                  </p>
                )}

                <div style={{
                  fontSize: '12px',
                  color: '#9ca3af',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}>
                  <FileText size={14} />
                  <span>{resource.file_name}</span>
                  {resource.file_size && (
                    <span>• {(resource.file_size / 1024).toFixed(1)} KB</span>
                  )}
                  {/* ✅ 顯示下載次數 */}
                  <span>• {resource.download_count || 0} 次下載</span>
                </div>

                {/* ✅ 預覽 + 下載按鈕 */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => handlePreview(resource)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      backgroundColor: currentUser ? '#f3f4f6' : '#e5e7eb',
                      color: currentUser ? '#374151' : '#9ca3af',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: currentUser ? 'pointer' : 'not-allowed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                    onMouseOver={(e) => {
                      if (currentUser) {
                        e.currentTarget.style.backgroundColor = '#e5e7eb';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (currentUser) {
                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                      }
                    }}
                  >
                    <Eye size={16} />
                    預覽
                  </button>

                  <button
                    onClick={() => handleDownload(resource)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      backgroundColor: currentUser ? category.color : '#e5e7eb',
                      color: currentUser ? 'white' : '#9ca3af',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: currentUser ? 'pointer' : 'not-allowed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <Download size={16} />
                    下載
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal
          onClose={() => setShowUploadModal(false)}
          onSuccess={() => {
            setShowUploadModal(false);
            loadResources();
          }}
        />
      )}

      {/* ✅ Preview Modal */}
      {showPreviewModal && previewResource && (
        <PreviewModal
          resource={previewResource}
          onClose={() => {
            setShowPreviewModal(false);
            setPreviewResource(null);
          }}
          onDownload={() => handleDownload(previewResource)}
        />
      )}
    </div>
  );
}

// ========================================
// 👁️ Preview Modal
// ========================================
function PreviewModal({ resource, onClose, onDownload }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '900px',
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 20px',
          borderBottom: '2px solid #e5e7eb'
        }}>
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#1f2937',
              margin: '0 0 4px 0'
            }}>
              {resource.title}
            </h3>
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              margin: 0
            }}>
              {resource.file_name}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={onDownload}
              style={{
                padding: '8px 16px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              <Download size={16} />
              下載
            </button>

            <button
              onClick={onClose}
              style={{
                padding: '8px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '8px'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X size={24} color="#dc2626" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <iframe
            src={`${resource.file_path}#toolbar=0`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            title={resource.title}
          />
        </div>
      </div>
    </div>
  );
}

// ========================================
// 📤 Upload Modal
// ========================================
function UploadModal({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'writing'
  });
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('請選擇檔案！');
      return;
    }

    if (file.type !== 'application/pdf') {
      alert('只接受 PDF 檔案！');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('檔案不能超過 10MB！');
      return;
    }

    setUploading(true);

    try {
      console.log('📤 開始上載 PDF 到 Supabase...');

      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.pdf`;
      const bucket = 'baby-resources';
      const subfolder = 'resources';
      const filePath = `${subfolder}/${fileName}`;
      
      const uploadResponse = await fetch(
        `${SUPABASE_URL}/storage/v1/object/${bucket}/${filePath}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': file.type
          },
          body: file
        }
      );

      if (!uploadResponse.ok) {
        const error = await uploadResponse.text();
        throw new Error(`Supabase Upload 失敗: ${error}`);
      }

      const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${filePath}`;

      console.log('✅ Supabase 上載成功:', publicUrl);

      await request('/resources/upload', {
        method: 'POST',
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          category: formData.category,
          file_name: file.name,
          file_path: publicUrl,
          file_size: file.size
        })
      });

      alert('✅ 上載成功！');
      onSuccess();

    } catch (error) {
      console.error('❌ 上載失敗:', error);
      alert('上載失敗：' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
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
        zIndex: 9999,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '500px',
          padding: '24px'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#1f2937',
            margin: 0
          }}>
            📤 上載資源
          </h2>
          <button
            onClick={onClose}
            disabled={uploading}
            style={{
              background: 'none',
              border: 'none',
              cursor: uploading ? 'not-allowed' : 'pointer',
              padding: '8px',
              borderRadius: '8px',
              opacity: uploading ? 0.5 : 1
            }}
            onMouseOver={(e) => {
              if (!uploading) {
                e.currentTarget.style.backgroundColor = '#fee2e2';
              }
            }}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X size={24} color="#dc2626" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              資源標題 *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              disabled={uploading}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: uploading ? 0.6 : 1
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              描述
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              disabled={uploading}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                resize: 'vertical',
                opacity: uploading ? 0.6 : 1
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              分類 *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
              disabled={uploading}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: uploading ? 0.6 : 1
              }}
            >
              {CATEGORIES.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              PDF 檔案 * （最大 10MB）
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              required
              disabled={uploading}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: uploading ? 0.6 : 1
              }}
            />
            {file && (
              <div style={{
                marginTop: '8px',
                fontSize: '12px',
                color: file.size > 10 * 1024 * 1024 ? '#ef4444' : '#6b7280'
              }}>
                已選擇: {file.name} ({(file.size / 1024).toFixed(1)} KB)
                {file.size > 10 * 1024 * 1024 && ' ⚠️ 超過 10MB！'}
              </div>
            )}
          </div>

          <div style={{
            display: 'flex',
            gap: '12px'
          }}>
            <button
              type="button"
              onClick={onClose}
              disabled={uploading}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#f3f4f6',
                color: '#374151',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: uploading ? 'not-allowed' : 'pointer',
                opacity: uploading ? 0.6 : 1
              }}
            >
              取消
            </button>
            <button
              type="submit"
              disabled={uploading}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: uploading ? '#d1d5db' : '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: uploading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Upload size={16} />
              {uploading ? '上載中...' : '上載'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResourcesPage;