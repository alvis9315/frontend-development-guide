# 1. API 協作規則

先確認資料結構、欄位命名與錯誤訊息的統一規範。要做為使用者的角度來檢測 message 的值是否清楚明確，不可有提示文字以外的內容如：錯誤代碼、內部訊息等。

---

## 📝 儲存/修改 API

### 規範要點
- 成功與失敗的回應格式一致
- 欄位命名一致（camelCase / snake_case）
- 缺少欄位是否回傳空值

### ✓ 成功 response
```json
{
  "message": "儲存成功",
  "success": true,
  "data": { ... }
}
```

### ✗ 失敗 response
```json
{
  "message": "XX欄位應輸入....",
  "success": false,
  "data": { ... }
}
```

---

## 🔍 查詢 API

### 規範要點
- 成功與失敗的回應格式一致
- 欄位命名一致（camelCase / snake_case）
- 缺少欄位是否回傳空值

### ✓ 成功 response
```json
{
  "message": "查詢成功",
  "success": true,
  "data": { ... }
}
```

### ✗ 失敗 response
```json
{
  "message": "該帳號尚未通過XX流程",
  "success": false,
  "data": { ... }
}
```

---

## 💬 前端彈窗處理邏輯

### 📌 為何需要 message 和 success 參數？
- **message：** 前端透過此參數接收後端回傳的提示訊息，用於顯示彈窗內容
- **success：** 前端根據此參數判斷下一步行為（如導向列表頁、停留編輯頁等）

### 前端判斷邏輯
- 以操作邏輯來說，肯定且正面的狀態時使用 `success()`
- 反之則使用 `failure()`

```javascript
// main.js - MutationCache 配置
mutationCache: new MutationCache({
  onSuccess: (data) => {
    destroyAll()
    // 根據 success 判斷彈窗類型
    if (data?.failed || !data?.success) {
      failure(data?.message)  // 顯示失敗彈窗
    } else if (data?.message?.length > 0 || data?.success) {
      success(data?.message)  // 顯示成功彈窗
    }
  },
  onError: (error) => {
    destroyAll()
    if (error?.displayMessage) {
      failure(error?.displayMessage)  // 顯示錯誤彈窗
    }
  }
})
```

### 實際應用流程
1. 前端發送 API 請求（儲存/修改/查詢）
2. 後端處理完畢後回傳 response（包含 message、success、data）
3. 前端 MutationCache 接收 response
4. 根據 `data?.failed` 或 `data?.success` 決定彈窗類型
5. 顯示 `message` 內容給使用者
6. 根據 `success` 參數執行下一步行為（如：成功時導向列表頁）

> ⚠️ **重要：** 所有 API response 都必須包含 `message` 和 `success` 參數，否則前端無法正確判斷操作結果並給予使用者回饋。

---

## 💬 Message 格式規範

> ⚠️ **重要原則：** 後端在制訂 message 時，必須符合情境回復相應的中文內容。使用者不需要看到工程師才看得懂的程式碼或技術訊息，只需要簡單明瞭的中文說明。

### ❌ 錯誤範例

**1. 包含程式碼或技術訊息**
```json
{
  "success": false,
  "message": "unexpected: 會員資格不符"
}
```
> ⚠️ 問題：使用者不需要知道「unexpected」這種技術訊息

**2. 包含陣列格式**
```json
{
  "success": false,
  "message": "[會員資格不符]"
}
```
> ⚠️ 問題：使用者不需要看到中括號這種程式符號

**3. 包含錯誤代碼或內部訊息**
```json
{
  "success": false,
  "message": "Error Code 4001: 使用者資格驗證失敗"
}
```
> ⚠️ 問題：錯誤代碼應該記錄在 log 中，而非顯示給使用者

### ✓ 正確範例

**1. 清楚明確的中文說明**
```json
{
  "success": false,
  "message": "會員資格不符"
}
```

**2. 提供解決方向的說明**
```json
{
  "success": false,
  "message": "手機號碼格式錯誤，請輸入10位數字"
}
```

**3. 符合情境的友善訊息**
```json
{
  "success": false,
  "message": "檔案大小超過限制，請上傳5MB以下的檔案"
}
```

### 💡 撰寫 Message 的原則
- **使用純中文：** 避免英文技術用語、程式碼或符號
- **說明問題：** 清楚告知使用者發生了什麼事
- **提供方向：** 盡可能告訴使用者如何解決或修正
- **保持簡潔：** 一句話說清楚，不要冗長或過於技術性
- **站在使用者角度：** 確保一般使用者能夠理解訊息內容

---

## 🔄 例外狀況：什麼時候不用回傳 data?

> 📌 **原則說明：** 針對「上傳檔案」或「新增/修改資料」的 API，如果操作完成後不需要進一步的行為，則成功時可以不回傳 data 參數，僅回傳 success 和 message 即可。

### ✓ 成功時：不需要 data
```json
{
  "success": true,
  "message": "上傳成功"
}
```
> 適用情境：單純的上傳、新增或修改操作，只單純告知使用者操作結果即可

### ✗ 失敗時：不需要 data
```json
{
  "success": false,
  "message": "XXX並未符合資格"
}
```

### 📦 什麼時候需要回傳 data？
如果上傳或新增修改成功後，前端需要進一步的行為，則必須回傳 data 參數：
- 需要顯示剛上傳檔案的資訊（如檔案 ID、檔案路徑等）
- 需要導向至新建立的資料詳細頁（需要資料 ID）
- 需要更新畫面上的其他資訊（如更新後的完整資料）
- 需要下載或預覽剛上傳的檔案

```json
{
  "success": true,
  "message": "上傳成功",
  "data": {
    "fileId": "12345",
    "filePath": "/uploads/document.pdf",
    "uploadTime": "2026-03-19 10:30:00"
  }
}
```

> 💡 **設計建議：** 在設計 API 時，先確認前端在操作成功後是否需要額外的資料。如果只需要顯示「成功」訊息並關閉彈窗或返回列表頁，則不需要回傳 data，可以簡化 response 結構。

---

## ⚠️ Error Code 定義

> 📌 **重要說明：** 新系統初期未採用元件化架構，受限於開發時程暫無法全面重構。目前策略是明確定義各 Error Code 的意義，後端實作細節可另行討論，但前端必須能依 Error Code 進行問題排查。

| Error Code | 定義 | 說明 |
|:---:|---|---|
| **200** | 成功 (OK) | 請求成功，伺服器已正確處理並回傳資料 |
| **400** | 錯誤的請求 (Bad Request) | 前端請求參數錯誤 |
| **401** | 未授權 (Unauthorized) | 未登入或 Token 失效，需要重新登入驗證身份 |
| **403** | 禁止存取 (Forbidden) | 已登入但無權限執行此操作，可能是角色權限不足 |
| **404** | 找不到 API (Not Found) | API 路徑不存在 |
| **405** | 不允許的方法 (Method Not Allowed) | HTTP 方法錯誤，例如該 API 只支援 POST 但使用了 GET |
| **422** | 無法處理的實體 (Unprocessable Entity) | 前端請求(request)格式正確，但因語義錯誤無法處理，例如資料驗證失敗 |
| **500** | 伺服器內部錯誤 (Internal Server Error) | 後端程式發生未預期的錯誤，需要後端工程師檢查 log 排查問題 |

### 前端 Debug 建議
- **400：** 檢查前端傳送的參數是否符合後端要求（欄位名稱、資料型別、必填欄位）
- **401：** 檢查 Token 是否過期或未正確帶入 Authorization header
- **403：** 確認使用者角色權限，是否該功能需要更高權限
- **404：** 確認 API 路徑是否正確，或資料 ID 是否存在於資料庫
- **405：** 確認 HTTP Method（GET/POST/PUT/DELETE）是否使用正確
- **500：** 聯繫後端工程師查看 server log，通常是後端程式邏輯錯誤
