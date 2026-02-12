<template>
  <div>
    <p class="muted" style="margin-bottom: 24px;">先確認資料結構、欄位命名與錯誤訊息的統一規範。要做為使用者的角度來檢測message的值是否清楚明確，不可有提示文字以外的內容如: 錯誤代碼、內部訊息等。</p>

    <!-- 儲存/修改 API -->
    <div style="margin-bottom: 48px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">📝 儲存/修改 API</h3>
      <div class="grid">
        <article class="card">
          <h4 style="margin-bottom: 12px; font-size: 1rem;">規範要點</h4>
          <ul>
            <li>成功與失敗的回應格式一致</li>
            <li>欄位命名一致（camelCase / snake_case）</li>
            <li>缺少欄位是否回傳空值</li>
          </ul>
        </article>
      </div>
      <div class="grid" style="margin-top: 16px;">
        <article class="card">
          <h4 style="margin-bottom: 12px; font-size: 1rem; color: #059669;">✓ 成功 response</h4>
          <pre>{
  "statusCode": "200",
  "message": "儲存成功",
  "success": "true",
  "data": { ... }
}</pre>
        </article>
        <article class="card">
          <h4 style="margin-bottom: 12px; font-size: 1rem; color: #dc2626;">✗ 失敗 response</h4>
          <pre>{
  "statusCode": "400",
  "message": "XX欄位應輸入....",
  "success": "false",
  "data": { ... }
}</pre>
        </article>
      </div>
    </div>

    <!-- 查詢 API -->
    <div>
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">🔍 查詢 API</h3>
      <div class="grid">
        <article class="card">
          <h4 style="margin-bottom: 12px; font-size: 1rem;">規範要點</h4>
          <ul>
            <li>成功與失敗的回應格式一致</li>
            <li>欄位命名一致（camelCase / snake_case）</li>
            <li>缺少欄位是否回傳空值</li>
          </ul>
        </article>
      </div>
      <div class="grid" style="margin-top: 16px;">
        <article class="card">
          <h4 style="margin-bottom: 12px; font-size: 1rem; color: #059669;">✓ 成功 response</h4>
          <pre>{
  "statusCode": "200",
  "message": "查詢成功",
  "success": "true",
  "data": { ... }
}</pre>
        </article>
        <article class="card">
          <h4 style="margin-bottom: 12px; font-size: 1rem; color: #dc2626;">✗ 失敗 response</h4>
          <pre>{
  "statusCode": "400",
  "message": "該帳號尚未通過XX流程",
  "success": "false",
  "data": { ... }
}</pre>
        </article>
      </div>
    </div>

    <!-- 前端彈窗處理邏輯 -->
    <div style="margin-top: 48px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">💬 前端彈窗處理邏輯</h3>
      
      <div class="callout" style="margin-bottom: 24px; background: #eff6ff; border-color: #93c5fd;">
        <p style="color: #1e40af; margin-bottom: 12px;">
          <strong>📌 為何需要 message 和 success 參數？</strong>
        </p>
        <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #1e40af;">
          <li><strong>message：</strong>前端透過此參數接收後端回傳的提示訊息，用於顯示彈窗內容</li>
          <li><strong>success：</strong>前端根據此參數判斷下一步行為（如導向列表頁、停留編輯頁等）</li>
        </ul>
      </div>

      <article class="card" style="background: #f9fafb; margin-bottom: 24px;">
        <h4 style="margin-bottom: 12px; color: #1f2a37;">前端判斷邏輯</h4>
        
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
          <p style="margin: 0; color: #6b7280; flex-shrink: 0;">
            以操作邏輯來說，肯定且正面的狀態時使用 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px; color: #059669;">success()</code>
          </p>
          <img src="/success範例.png" alt="success() 彈窗範例" style="max-width: 400px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        </div>

        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
          <p style="margin: 0; color: #6b7280; flex-shrink: 0;">
            反之則使用 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px; color: #dc2626;">failure()</code>
          </p>
          <img src="/failure範例.png" alt="failure() 彈窗範例" style="max-width: 400px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        </div>

        <pre>// main.js - MutationCache 配置
mutationCache: new MutationCache({
  onSuccess: (data) => {
    destroyAll()
    // 根據 success 判斷彈窗類型，但先前都是使用failed，所以暫時先保留兩種判斷方式
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
})</pre>
      </article>

      <article class="card" style="background: #f0fdf4; border-color: #86efac;">
        <h4 style="margin-bottom: 12px; color: #15803d;">實際應用流程</h4>
        <ol style="margin: 0; padding-left: 20px; line-height: 2; color: #166534;">
          <li>前端發送 API 請求（儲存/修改/查詢）</li>
          <li>後端處理完畢後回傳 response（包含 statusCode、message、success、data）</li>
          <li>前端 MutationCache 接收 response</li>
          <li>根據 <code style="background: white; padding: 2px 6px; border-radius: 4px;">data?.failed</code> 或 <code style="background: white; padding: 2px 6px; border-radius: 4px;">data?.success</code> 決定彈窗類型</li>
          <li>顯示 <code style="background: white; padding: 2px 6px; border-radius: 4px;">message</code> 內容給使用者</li>
          <li>根據 <code style="background: white; padding: 2px 6px; border-radius: 4px;">success</code> 參數執行下一步行為（如：成功時導向列表頁）</li>
        </ol>
      </article>

      <div class="callout" style="margin-top: 24px; background: #fef2f2; border-color: #fca5a5;">
        <p style="color: #991b1b; margin: 0;">
          <strong>⚠️ 重要：</strong>所有 API response 都必須包含 <code style="background: white; padding: 2px 6px; border-radius: 4px;">message</code> 和 <code style="background: white; padding: 2px 6px; border-radius: 4px;">success</code> 參數，否則前端無法正確判斷操作結果並給予使用者回饋。
        </p>
      </div>
    </div>

    <!-- Error Code 定義 -->
    <div style="margin-top: 48px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">⚠️ Error Code 定義</h3>
      
      <div class="callout" style="margin-bottom: 24px; background: #fef3c7; border-color: #fbbf24;">
        <p style="color: #92400e; margin-bottom: 12px;">
          <strong>📌 重要說明</strong>
        </p>
        <p style="color: #92400e; margin: 0; line-height: 1.8;">
          新系統初期未採用元件化架構，受限於開發時程暫無法全面重構。<br>
          目前策略是明確定義各 Error Code 的意義，後端實作細節可另行討論，但<strong>前端必須能依 Error Code 進行問題排查</strong>。
        </p>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Error Code</th>
              <th>定義</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="color: #059669; font-size: 1.05rem;">200</strong></td>
              <td><strong>成功 (OK)</strong></td>
              <td>請求成功，伺服器已正確處理並回傳資料</td>
            </tr>
            <tr>
              <td><strong style="color: #dc2626; font-size: 1.05rem;">400</strong></td>
              <td><strong>錯誤的請求 (Bad Request)</strong></td>
              <td>請求參數錯誤、格式不正確、缺少必填欄位，或業務邏輯驗證失敗</td>
            </tr>
            <tr>
              <td><strong style="color: #dc2626; font-size: 1.05rem;">401</strong></td>
              <td><strong>未授權 (Unauthorized)</strong></td>
              <td>未登入或 Token 失效，需要重新登入驗證身份</td>
            </tr>
            <tr>
              <td><strong style="color: #dc2626; font-size: 1.05rem;">403</strong></td>
              <td><strong>禁止存取 (Forbidden)</strong></td>
              <td>已登入但無權限執行此操作，可能是角色權限不足</td>
            </tr>
            <tr>
              <td><strong style="color: #dc2626; font-size: 1.05rem;">404</strong></td>
              <td><strong>找不到資源 (Not Found)</strong></td>
              <td>API 路徑不存在，或請求的資源（如特定 ID 的資料）不存在</td>
            </tr>
            <tr>
              <td><strong style="color: #dc2626; font-size: 1.05rem;">405</strong></td>
              <td><strong>不允許的方法 (Method Not Allowed)</strong></td>
              <td>HTTP 方法錯誤，例如該 API 只支援 POST 但使用了 GET</td>
            </tr>
            <tr>
              <td><strong style="color: #dc2626; font-size: 1.05rem;">500</strong></td>
              <td><strong>伺服器內部錯誤 (Internal Server Error)</strong></td>
              <td>後端程式發生未預期的錯誤，需要後端工程師檢查 log 排查問題</td>
            </tr>
          </tbody>
        </table>
      </div>

      <article class="card" style="margin-top: 24px; background: #eff6ff; border-color: #93c5fd;">
        <h4 style="margin-bottom: 12px; color: #1e40af;">前端 Debug 建議</h4>
        <ul style="margin: 0; padding-left: 20px; line-height: 2;">
          <li><strong>400：</strong>檢查前端傳送的參數是否符合後端要求（欄位名稱、資料型別、必填欄位）</li>
          <li><strong>401：</strong>檢查 Token 是否過期或未正確帶入 Authorization header</li>
          <li><strong>403：</strong>確認使用者角色權限，是否該功能需要更高權限</li>
          <li><strong>404：</strong>確認 API 路徑是否正確，或資料 ID 是否存在於資料庫</li>
          <li><strong>405：</strong>確認 HTTP Method（GET/POST/PUT/DELETE）是否使用正確</li>
          <li><strong>500：</strong>聯繫後端工程師查看 server log，通常是後端程式邏輯錯誤</li>
        </ul>
      </article>
    </div>
  </div>
</template>
