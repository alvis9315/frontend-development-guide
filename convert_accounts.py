import re

# 讀取檔案
with open('src/content/TestAccounts.vue', 'r', encoding='utf-8') as f:
    content = f.read()

# 替換規則
replacements = [
    # env 替換
    (r"env: '新系統'", "env: 1"),
    (r"env: '舊系統'", "env: 2"),
    (r"env: '新/舊系統皆可'", "env: 3"),
    
    # unit 替換
    (r"unit: '新申請'", "unit: 1"),
    (r"unit: '原用人'", "unit: 2"),
    (r"unit: '績優'", "unit: 3"),
    (r"unit: '自創事業'", "unit: 4"),
    (r"unit: '最高管理員'", "unit: 5"),
    (r"unit: '審查單位'", "unit: 6"),
    (r"unit: '審查委員'", "unit: 7"),
]

# 執行替換
for pattern, replacement in replacements:
    content = re.sub(pattern, replacement, content)

# 寫回檔案
with open('src/content/TestAccounts.vue', 'w', encoding='utf-8') as f:
    f.write(content)

print("轉換完成！")
