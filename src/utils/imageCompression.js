/**
 * 壓縮圖片到指定大小
 * @param {File} file - 原始圖片 file
 * @param {number} maxSizeKB - 最大 KB（預設 1000KB = 1MB）
 * @returns {Promise<File>} 壓縮後嘅 file
 */
export async function compressImage(file, maxSizeKB = 1000) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // 計算壓縮比例
        const maxDimension = 1920; // 最大邊長
        if (width > height && width > maxDimension) {
          height = (height * maxDimension) / width;
          width = maxDimension;
        } else if (height > maxDimension) {
          width = (width * maxDimension) / height;
          height = maxDimension;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        // 逐步降低質量直到符合大小
        let quality = 0.9;
        const tryCompress = () => {
          canvas.toBlob(
            (blob) => {
              if (blob.size <= maxSizeKB * 1024 || quality <= 0.1) {
                const compressedFile = new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now()
                });
                resolve(compressedFile);
              } else {
                quality -= 0.1;
                tryCompress();
              }
            },
            'image/jpeg',
            quality
          );
        };
        
        tryCompress();
      };
      
      img.onerror = reject;
      img.src = e.target.result;
    };
    
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Upload 圖片到 Supabase
 * @param {File} file - 要 upload 嘅 file
 * @param {string} folder - 資料夾名稱（預設 'post-images'）
 * @returns {Promise<string>} 返回圖片 URL
 */
export async function uploadToSupabase(file, folder = 'post-images') {
  // ⚠️ 記得改做你嘅 Supabase URL 同 Key
  const SUPABASE_URL = 'https://fifgdbgibdclpztlcxog.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZmdkYmdpYmRjbHB6dGxjeG9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNzI4NzQsImV4cCI6MjA4MDk0ODg3NH0.fuaN7rts5nl6sAO8R92FZOk1MJBviN4mVZ7iZVsfxgU';
  
  const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`;
  const filePath = `${folder}/${fileName}`;
  
  const response = await fetch(
    `${SUPABASE_URL}/storage/v1/object/${folder}/${fileName}`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': file.type
      },
      body: file
    }
  );
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Upload 失敗: ${error}`);
  }
  
  return `${SUPABASE_URL}/storage/v1/object/public/${filePath}`;
}