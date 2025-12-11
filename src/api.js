const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export const tokenManager = {
  setToken: (token) => {
    localStorage.setItem('authToken', token);
  },
  getToken: () => {
    return localStorage.getItem('authToken');
  },
  removeToken: () => {
    localStorage.removeItem('authToken');
  },
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  }
};

export const userManager = {
  setUser: (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  },
  getUser: () => {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
  },
  removeUser: () => {
    localStorage.removeItem('currentUser');
  }
};

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const token = tokenManager.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || '請求失敗');
    }

    return data;
  } catch (error) {
    console.error('API 錯誤:', error);
    throw error;
  }
}

export const authAPI = {
  register: async (userData) => {
    const result = await request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    if (result.token) {
      tokenManager.setToken(result.token);
      userManager.setUser(result.user);
    }
    
    return result;
  },

  login: async (credentials) => {
    const result = await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password
      }),
    });
    
    if (result.token) {
      tokenManager.setToken(result.token);
      userManager.setUser(result.user);
    }
    
    return result;
  },

  logout: async () => {
    try {
      await request('/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error('登出錯誤:', error);
    } finally {
      tokenManager.removeToken();
      userManager.removeUser();
    }
  },

  getCurrentUser: async () => {
    return await request('/auth/me');
  }
};

export const postsAPI = {
  getAll: async () => {
    return await request('/posts');
  },

  getById: async (id) => {
    return await request(`/posts/${id}`);
  },

  create: async (postData) => {
    return await request('/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  },

  update: async (id, postData) => {
    return await request(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
  },

  delete: async (id) => {
    return await request(`/posts/${id}`, {
      method: 'DELETE',
    });
  },

  toggleLike: async (id) => {
    return await request(`/posts/${id}/like`, {
      method: 'POST',
    });
  }
};

export const conversationsAPI = {
  getAll: async () => {
    return await request('/conversations');
  },

  startOrGet: async (postId) => {
    return await request('/conversations', {
      method: 'POST',
      body: JSON.stringify({ post_id: postId }),
    });
  },

  getMessages: async (conversationId) => {
    return await request(`/conversations/${conversationId}/messages`);
  },

  sendMessage: async (conversationId, content) => {
    return await request(`/conversations/${conversationId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  },

  markAsRead: async (conversationId) => {
    return await request(`/conversations/${conversationId}/read`, {
      method: 'PUT',
    });
  },

  getUnreadCount: async () => {
    return await request('/conversations/unread-count');
  }
};

// ✅ Token API（新增）
export const tokensAPI = {
  earnByWatchingAd: async () => {
    return await request('/tokens/earn', {
      method: 'POST',
      body: JSON.stringify({})
    });
  }
};

export const statsAPI = {
  getUserStats: async () => {
    return await request('/stats/user');
  },

  getGlobalStats: async () => {
    return await request('/stats/global');
  }
};