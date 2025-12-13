import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PostCard from './components/PostCard';
import CreatePostModal from './components/CreatePostModal';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import MessageCenter from './components/MessageCenter/MessageCenter';
import PostDetailModal from './components/PostDetailModal';
import { postsAPI, authAPI, tokenManager, userManager } from './api';

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('sell');
  const [filters, setFilters] = useState({ partNumber: '', color: '' });
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [showMessageCenter, setShowMessageCenter] = useState(false);
  const [selectedPostDetail, setSelectedPostDetail] = useState(null);
  const [selectedConversationId, setSelectedConversationId] = useState(null);

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      if (tokenManager.isAuthenticated()) {
        const user = userManager.getUser();
        setCurrentUser(user);
        
        try {
          const freshUser = await authAPI.getCurrentUser();
          setCurrentUser(freshUser);
          userManager.setUser(freshUser);
        } catch (error) {
          console.error('刷新用戶資料失敗:', error);
          handleLogout();
        }
      }

      await loadPosts();
      
    } catch (error) {
      console.error('初始化失敗:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadPosts = async () => {
    try {
      const data = await postsAPI.getAll();
      setPosts(data);
      setFilteredPosts(data);
    } catch (error) {
      console.error('載入帖子失敗:', error);
      alert('載入帖子失敗，請重新整理頁面');
    }
  };

  useEffect(() => {
    let filtered = posts;

    if (activeTab) {
      filtered = filtered.filter(post => post.type === activeTab);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.username?.toLowerCase().includes(query) ||
        post.items?.some(item => 
          item.part_number?.toLowerCase().includes(query) ||
          item.color?.toLowerCase().includes(query)
        )
      );
    }

    if (filters.partNumber) {
      filtered = filtered.filter(post =>
        post.items?.some(item => 
          item.part_number?.toLowerCase().includes(filters.partNumber.toLowerCase())
        )
      );
    }

    if (filters.color) {
      filtered = filtered.filter(post =>
        post.items?.some(item => item.color === filters.color)
      );
    }

    setFilteredPosts(filtered);
  }, [searchQuery, activeTab, filters, posts]);

const handleLogin = async (username, password) => {
  try {
    const result = await authAPI.login({ username, password });
    setCurrentUser(result.user);
    setShowLogin(false);
    alert(`歡迎返嚟，${result.user.username}！你有 ${result.user.tokens} 次發佈機會`);
    
    // ✅ loadPosts 失敗唔應該影響登入成功
    try {
      await loadPosts();
    } catch (err) {
      console.error('重新載入帖子失敗:', err);
    }
  } catch (error) {
    alert('登入失敗：' + error.message);
    throw error;
  }
};

const handleRegister = async (userData) => {
  try {
    const result = await authAPI.register(userData);
    setCurrentUser(result.user);
    setShowRegister(false);
    alert(`註冊成功！歡迎 ${result.user.username}！你有 ${result.user.tokens} 次發佈機會`);
    
    // ✅ loadPosts 失敗唔應該影響註冊成功
    try {
      await loadPosts();
    } catch (err) {
      console.error('重新載入帖子失敗:', err);
    }
  } catch (error) {
    alert('註冊失敗：' + error.message);
    throw error;
  }
};

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      setCurrentUser(null);
      alert('已成功登出！');
      await loadPosts();
    } catch (error) {
      console.error('登出失敗:', error);
    }
  };

const handleCreatePost = async (postData) => {
  try {
    await postsAPI.create(postData);
    alert('帖子發佈成功！');
    setShowCreatePost(false);
    
    // ✅ 並行執行，一個失敗唔影響另一個
    await Promise.allSettled([
      loadPosts(),
      authAPI.getCurrentUser().then(user => {
        setCurrentUser(user);
        userManager.setUser(user);
      })
    ]);
  } catch (error) {
    alert('發佈失敗：' + error.message);
    throw error;
  }
};

  const handleLike = async (postId) => {
    if (!currentUser) {
      alert('請先登入才能點讚！');
      setShowLogin(true);
      return;
    }

    try {
      const result = await postsAPI.toggleLike(postId);
      
      const updatePost = (post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes_count: result.likes_count,
            is_liked: result.is_liked
          };
        }
        return post;
      };

      setPosts(posts.map(updatePost));
      
      if (selectedPostDetail && selectedPostDetail.id === postId) {
        setSelectedPostDetail({
          ...selectedPostDetail,
          likes_count: result.likes_count,
          is_liked: result.is_liked
        });
      }
    } catch (error) {
      alert('點讚失敗：' + error.message);
    }
  };

  const handleShowDetail = (post) => {
    setSelectedPostDetail(post);
  };

  const handleMessageCenterClick = () => {
    if (!currentUser) {
      alert('請先登入！');
      setShowLogin(true);
      return;
    }
    setSelectedConversationId(null);
    setShowMessageCenter(true);
  };

  const handleUserUpdate = (updatedUser) => {
    setCurrentUser(updatedUser);
    userManager.setUser(updatedUser);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">載入中...</div>
          <div className="text-gray-600">請稍候</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentUser={currentUser}
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
        onLogout={handleLogout}
        onCreatePostClick={() => {
          if (!currentUser) {
            alert('請先登入！');
            setShowLogin(true);
          } else if (currentUser.tokens <= 0) {
            alert('你已經冇發佈機會喇！請聯絡管理員。');
          } else {
            setShowCreatePost(true);
          }
        }}
        onMessageCenterClick={handleMessageCenterClick}
        onUserUpdate={handleUserUpdate}
      />

      <main className="main-container">
        <SearchBar 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          searchTerm={searchQuery}
          onSearchChange={setSearchQuery}
          filters={filters}
          onFilterChange={setFilters}
        />



        <div className="content-grid">
        

          {/* 中間內容區 */}
          <div className="posts-grid">
            {filteredPosts.length === 0 ? (
              <div 
                className="text-center py-12 bg-white rounded-lg shadow" 
                style={{ gridColumn: '1 / -1' }}
              >
                <p className="text-gray-500 text-lg">
                  {searchQuery || filters.partNumber || filters.color ? '搵唔到相關帖子' : '暫時未有帖子'}
                </p>
              </div>
            ) : (
              filteredPosts.map(post => (
                <PostCard
                  key={post.id}
                  post={post}
                  currentUser={currentUser}
                  onLike={handleLike}
                  onShowDetail={handleShowDetail}
                />
              ))
            )}
          </div>

       
        </div>


      </main>

     

      {/* Modals */}
      {showCreatePost && (
        <CreatePostModal
          onClose={() => setShowCreatePost(false)}
          onCreatePost={handleCreatePost}
          currentUser={currentUser}
        />
      )}

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onRegister={handleRegister}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}

      {showMessageCenter && (
        <MessageCenter
          currentUser={currentUser}
          initialConversationId={selectedConversationId}
          onClose={() => {
            setShowMessageCenter(false);
            setSelectedConversationId(null);
          }}
        />
      )}

      {selectedPostDetail && (
        <PostDetailModal
          post={selectedPostDetail}
          currentUser={currentUser}
          onClose={() => setSelectedPostDetail(null)}
          onLike={handleLike}
        />
      )}
    </div>
  );
}

export default App;