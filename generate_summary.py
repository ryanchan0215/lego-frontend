import os
from pathlib import Path

def generate_project_summary(root_dir='.', output_file='PROJECT_SUMMARY.md'):
    """
    自動生成項目摘要，包括：
    1. 文件結構樹
    2. 所有 .jsx 和 .js 文件的內容
    3. package.json 內容
    """
    
    # 要忽略的目錄
    IGNORE_DIRS = {'node_modules', 'dist', 'build', '.git', '__pycache__', '.vscode'}
    
    # 要包含的文件類型
    INCLUDE_EXTENSIONS = {'.jsx', '.js', '.json', '.html', '.css'}
    
    summary = []
    
    # ============ 1. 項目標題 ============
    summary.append("# 🧱 樂高配件交易平台 - Project Summary\n")
    summary.append(f"**生成時間**: {Path.cwd()}\n\n")
    
    # ============ 2. 文件結構樹 ============
    summary.append("## 📁 Project Tree\n\n```\n")
    
    def print_tree(directory, prefix="", is_last=True):
        """遞歸打印目錄樹"""
        items = []
        try:
            items = sorted(Path(directory).iterdir(), key=lambda x: (not x.is_dir(), x.name))
        except PermissionError:
            return
        
        for i, item in enumerate(items):
            # 跳過忽略的目錄
            if item.name in IGNORE_DIRS:
                continue
                
            is_last_item = i == len(items) - 1
            current_prefix = "└── " if is_last_item else "├── "
            summary.append(f"{prefix}{current_prefix}{item.name}\n")
            
            if item.is_dir():
                extension = "    " if is_last_item else "│   "
                print_tree(item, prefix + extension, is_last_item)
    
    print_tree(root_dir)
    summary.append("```\n\n")
    
    # ============ 3. 文件內容 ============
    summary.append("## 📄 File Contents\n\n")
    
    def collect_files(directory, files_dict):
        """收集所有需要的文件"""
        try:
            for item in Path(directory).rglob('*'):
                # 跳過目錄和忽略的文件
                if item.is_dir():
                    continue
                if any(ignore in item.parts for ignore in IGNORE_DIRS):
                    continue
                if item.suffix not in INCLUDE_EXTENSIONS:
                    continue
                    
                # 相對路徑
                rel_path = item.relative_to(root_dir)
                files_dict[str(rel_path)] = item
        except Exception as e:
            print(f"Error collecting files: {e}")
    
    files_dict = {}
    collect_files(root_dir, files_dict)
    
    # 按路徑排序
    for file_path in sorted(files_dict.keys()):
        file = files_dict[file_path]
        
        summary.append(f"### 📄 `{file_path}`\n\n")
        
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # 根據文件類型選擇語法高亮
            if file.suffix == '.jsx':
                lang = 'jsx'
            elif file.suffix == '.js':
                lang = 'javascript'
            elif file.suffix == '.json':
                lang = 'json'
            elif file.suffix == '.html':
                lang = 'html'
            elif file.suffix == '.css':
                lang = 'css'
            else:
                lang = ''
                
            summary.append(f"```{lang}\n{content}\n```\n\n")
            
        except Exception as e:
            summary.append(f"```\n⚠️ 無法讀取文件: {e}\n```\n\n")
    
    # ============ 4. 功能清單（需要手動填寫） ============
    summary.append("## ✅ 已實現功能\n\n")
    summary.append("- [ ] 用戶登入/登出\n")
    summary.append("- [ ] 出售/求購分類顯示\n")
    summary.append("- [ ] 一個 Post 包含多個配件\n")
    summary.append("- [ ] 搜尋功能（配件編號、顏色、用戶）\n")
    summary.append("- [ ] 發佈交易（出售/求購）\n")
    summary.append("- [ ] 響應式設計\n\n")
    
    # ============ 5. 待開發功能 ============
    summary.append("## 🚀 待開發功能\n\n")
    summary.append("- [ ] ...\n\n")
    
    # ============ 6. 技術棧 ============
    summary.append("## 🛠️ 技術棧\n\n")
    summary.append("- **前端框架**: React + Vite\n")
    summary.append("- **UI 組件**: 手寫 inline styles\n")
    summary.append("- **圖標**: lucide-react\n")
    summary.append("- **數據管理**: useState (本地狀態)\n\n")
    
    # 寫入文件
    with open(output_file, 'w', encoding='utf-8') as f:
        f.writelines(summary)
    
    print(f"✅ Summary 已生成: {output_file}")
    print(f"📊 共收集了 {len(files_dict)} 個文件")

if __name__ == "__main__":
    # 在項目根目錄運行
    generate_project_summary(root_dir='.', output_file='PROJECT_SUMMARY.md')