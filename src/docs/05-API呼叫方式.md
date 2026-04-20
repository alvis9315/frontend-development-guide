# 5. API 呼叫方式

遵循 SSDLC 安全原則，統一使用 POST 方法傳遞參數。

---

## 🔒 SSDLC 安全原則

基於 Secure Software Development Lifecycle（安全軟體開發生命週期）原則，**所有 API 請求統一使用 POST 方法**，避免敏感資料暴露於 URL 中。

### 為何不可使用 POST 以外的方法？
- **GET 方法**：參數暴露在 URL，容易被瀏覽器歷史記錄、伺服器 log、代理伺服器記錄，造成資料外洩風險
- **PUT/PATCH 方法**：雖然參數在 Body，但語義上不適合查詢操作，且部分防火牆或代理可能阻擋
- **DELETE 方法**：通常不支援 Request Body，重要參數需放在 URL，同樣有安全疑慮
- **安全性考量**：POST + Body 可確保所有參數加密傳輸（HTTPS），不會留存於任何 URL 記錄中

> ⏱️ **註記**：現有系統若使用非 POST 方法，請於未來排程時間逐步修正為符合 SSDLC 規範的 POST 方法。

---

## 📋 實作規範

### ✓ 查詢類 API
使用 **POST + Body**
- 查詢條件放在 Request Body
- 分頁參數（page、size）也放在 Body
- 避免在 URL 中暴露查詢條件

```
POST /api/user/query

{
  "keyword": "搜尋關鍵字",
  "page": 1,
  "size": 15
}
```

### ✓ 操作類 API
使用 **POST + Body**
- 新增、修改、刪除統一用 POST
- 所有參數放在 Request Body
- 確保資料傳輸安全性

```
POST /api/user/save

{
  "name": "使用者名稱",
  "email": "user@example.com",
  "status": "active"
}
```

---

## ⚠️ 注意事項
- **禁止使用 GET 方法**：即使是單純查詢，也應使用 POST + Body
- **URL 參數限制**：避免將任何業務參數放在 Query String 中
- **API 命名規範**：建議使用動詞命名，如 `/query`、`/save`、`/delete`
- **文件化**：每支 API 都需明確記錄 Request Body 結構

---

## 範例對比

### ❌ 不符合 SSDLC 原則
```
// 錯誤示範：使用 GET 方法
GET /api/user/list?keyword=測試&status=active&page=1&size=15

// 問題：
// 1. 查詢條件暴露在 URL 中
// 2. 可能包含敏感資訊
// 3. 有長度限制
// 4. 容易被記錄在 log 中
```

### ✓ 符合 SSDLC 原則
```
// 正確示範：使用 POST 方法
POST /api/user/query

{
  "keyword": "測試",
  "status": "active",
  "page": 1,
  "size": 15
}

// 優點：
// 1. 參數不暴露在 URL
// 2. 無長度限制
// 3. 提升安全性
// 4. 符合 SSDLC 規範
```
