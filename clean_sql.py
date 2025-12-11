import re

# 讀取原始 SQL
with open('sql.sql', 'r', encoding='utf-8') as f:
    sql = f.read()

# 刪除所有 \ 開頭嘅指令
sql = re.sub(r'^\\.*\n', '', sql, flags=re.MULTILINE)

# 刪除 Owner 相關語句
sql = re.sub(r'-- Name:.*Owner: -\n', '', sql, flags=re.MULTILINE)

# 刪除 TOC entry 註釋
sql = re.sub(r'-- TOC entry.*\n', '', sql, flags=re.MULTILINE)

# 刪除 Dependencies 註釋
sql = re.sub(r'-- Dependencies:.*\n', '', sql, flags=re.MULTILINE)

# 刪除空白行（多於兩行）
sql = re.sub(r'\n{3,}', '\n\n', sql)

# 儲存清理後的檔案
with open('supabase_ready.sql', 'w', encoding='utf-8') as f:
    f.write(sql)

print("✅ SQL 檔案已清理！")
print("📁 新檔案：supabase_ready.sql")