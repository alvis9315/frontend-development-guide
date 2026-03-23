import{_ as o,o as e,c as r,a as s}from"./index-DqN47yuv.js";const a="/frontend-development-guide/success%E7%AF%84%E4%BE%8B.png",n="/frontend-development-guide/failure%E7%AF%84%E4%BE%8B.png",l={};function i(d,t){return e(),r("div",null,[...t[0]||(t[0]=[s(`<p class="muted" style="margin-bottom:24px;">先確認資料結構、欄位命名與錯誤訊息的統一規範。要做為使用者的角度來檢測message的值是否清楚明確，不可有提示文字以外的內容如: 錯誤代碼、內部訊息等。</p><div style="margin-bottom:48px;"><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">📝 儲存/修改 API</h3><div class="grid"><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;">規範要點</h4><ul><li>成功與失敗的回應格式一致</li><li>欄位命名一致（camelCase / snake_case）</li><li>缺少欄位是否回傳空值</li></ul></article></div><div class="grid" style="margin-top:16px;"><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#059669;">✓ 成功 response</h4><pre>{
  &quot;message&quot;: &quot;儲存成功&quot;,
  &quot;success&quot;: true,
  &quot;data&quot;: { ... }
}</pre></article><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#dc2626;">✗ 失敗 response</h4><pre>{
  &quot;message&quot;: &quot;XX欄位應輸入....&quot;,
  &quot;success&quot;: false,
  &quot;data&quot;: { ... }
}</pre></article></div></div><div><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">🔍 查詢 API</h3><div class="grid"><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;">規範要點</h4><ul><li>成功與失敗的回應格式一致</li><li>欄位命名一致（camelCase / snake_case）</li><li>缺少欄位是否回傳空值</li></ul></article></div><div class="grid" style="margin-top:16px;"><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#059669;">✓ 成功 response</h4><pre>{
  &quot;message&quot;: &quot;查詢成功&quot;,
  &quot;success&quot;: true,
  &quot;data&quot;: { ... }
}</pre></article><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#dc2626;">✗ 失敗 response</h4><pre>{
  &quot;message&quot;: &quot;該帳號尚未通過XX流程&quot;,
  &quot;success&quot;: false,
  &quot;data&quot;: { ... }
}</pre></article></div></div><div style="margin-top:48px;"><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">💬 前端彈窗處理邏輯</h3><div class="callout" style="margin-bottom:24px;background:#eff6ff;border-color:#93c5fd;"><p style="color:#1e40af;margin-bottom:12px;"><strong>📌 為何需要 message 和 success 參數？</strong></p><ul style="margin:0;padding-left:20px;line-height:1.8;color:#1e40af;"><li><strong>message：</strong>前端透過此參數接收後端回傳的提示訊息，用於顯示彈窗內容</li><li><strong>success：</strong>前端根據此參數判斷下一步行為（如導向列表頁、停留編輯頁等）</li></ul></div><article class="card" style="background:#f9fafb;margin-bottom:24px;"><h4 style="margin-bottom:12px;color:#1f2a37;">前端判斷邏輯</h4><div style="display:flex;align-items:center;gap:20px;margin-bottom:20px;"><p style="margin:0;color:#6b7280;flex-shrink:0;"> 以操作邏輯來說，肯定且正面的狀態時使用 <code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;color:#059669;">success()</code></p><img src="`+a+'" alt="success() 彈窗範例" style="max-width:400px;border-radius:8px;box-shadow:0 2px 8px rgba(0, 0, 0, 0.1);"></div><div style="display:flex;align-items:center;gap:20px;margin-bottom:20px;"><p style="margin:0;color:#6b7280;flex-shrink:0;"> 反之則使用 <code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;color:#dc2626;">failure()</code></p><img src="'+n+`" alt="failure() 彈窗範例" style="max-width:400px;border-radius:8px;box-shadow:0 2px 8px rgba(0, 0, 0, 0.1);"></div><pre>// main.js - MutationCache 配置
mutationCache: new MutationCache({
  onSuccess: (data) =&gt; {
    destroyAll()
    // 根據 success 判斷彈窗類型，但先前都是使用failed，所以暫時先保留兩種判斷方式
    if (data?.failed || !data?.success) {
      failure(data?.message)  // 顯示失敗彈窗
    } else if (data?.message?.length &gt; 0 || data?.success) {
      success(data?.message)  // 顯示成功彈窗
    }
  },
  onError: (error) =&gt; {
    destroyAll()
    if (error?.displayMessage) {
      failure(error?.displayMessage)  // 顯示錯誤彈窗
    }
  }
})</pre></article><article class="card" style="background:#f0fdf4;border-color:#86efac;"><h4 style="margin-bottom:12px;color:#15803d;">實際應用流程</h4><ol style="margin:0;padding-left:20px;line-height:2;color:#166534;"><li>前端發送 API 請求（儲存/修改/查詢）</li><li>後端處理完畢後回傳 response（包含 message、success、data）</li><li>前端 MutationCache 接收 response</li><li>根據 <code style="background:white;padding:2px 6px;border-radius:4px;">data?.failed</code> 或 <code style="background:white;padding:2px 6px;border-radius:4px;">data?.success</code> 決定彈窗類型</li><li>顯示 <code style="background:white;padding:2px 6px;border-radius:4px;">message</code> 內容給使用者</li><li>根據 <code style="background:white;padding:2px 6px;border-radius:4px;">success</code> 參數執行下一步行為（如：成功時導向列表頁）</li></ol></article><div class="callout" style="margin-top:24px;background:#fef2f2;border-color:#fca5a5;"><p style="color:#991b1b;margin:0;"><strong>⚠️ 重要：</strong>所有 API response 都必須包含 <code style="background:white;padding:2px 6px;border-radius:4px;">message</code> 和 <code style="background:white;padding:2px 6px;border-radius:4px;">success</code> 參數，否則前端無法正確判斷操作結果並給予使用者回饋。 </p></div></div><div style="margin-top:48px;"><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">💬 Message 格式規範</h3><div class="callout" style="margin-bottom:24px;background:#eff6ff;border-color:#93c5fd;"><p style="margin-bottom:12px;"><strong>⚠️ 重要原則</strong></p><p style="margin:0;line-height:1.8;"> 後端在制訂 message 時，<strong>必須符合情境回復相應的中文內容</strong>。使用者不需要看到工程師才看得懂的程式碼或技術訊息，只需要<strong>簡單明瞭的中文說明</strong>。 </p></div><div class="grid"><article class="card" style="background:#fef2f2;border-color:#fca5a5;"><h4 style="margin-bottom:16px;color:#991b1b;">❌ 錯誤範例</h4><div style="margin-bottom:16px;"><p style="color:#7f1d1d;margin-bottom:8px;font-weight:600;">1. 包含程式碼或技術訊息</p><pre>{
  &quot;success&quot;: false,
  &quot;message&quot;: &quot;unexpected: 會員資格不符&quot;
}</pre><div style="margin-top:8px;padding:10px;background:#fee2e2;border-radius:4px;"><p style="color:#991b1b;margin:0;font-size:0.9rem;"> ⚠️ 問題：使用者不需要知道「unexpected」這種技術訊息 </p></div></div><div style="margin-bottom:16px;"><p style="color:#7f1d1d;margin-bottom:8px;font-weight:600;">2. 包含陣列格式</p><pre>{
  &quot;success&quot;: false,
  &quot;message&quot;: &quot;[會員資格不符]&quot;
}</pre><div style="margin-top:8px;padding:10px;background:#fee2e2;border-radius:4px;"><p style="color:#991b1b;margin:0;font-size:0.9rem;"> ⚠️ 問題：使用者不需要看到中括號這種程式符號 </p></div></div><div><p style="color:#7f1d1d;margin-bottom:8px;font-weight:600;">3. 包含錯誤代碼或內部訊息</p><pre>{
  &quot;success&quot;: false,
  &quot;message&quot;: &quot;Error Code 4001: 使用者資格驗證失敗&quot;
}</pre><div style="margin-top:8px;padding:10px;background:#fee2e2;border-radius:4px;"><p style="color:#991b1b;margin:0;font-size:0.9rem;"> ⚠️ 問題：錯誤代碼應該記錄在 log 中，而非顯示給使用者 </p></div></div></article><article class="card" style="background:#f0fdf4;border-color:#86efac;"><h4 style="margin-bottom:16px;color:#15803d;">✓ 正確範例</h4><div style="margin-bottom:16px;"><p style="color:#166534;margin-bottom:8px;font-weight:600;">1. 清楚明確的中文說明</p><pre>{
  &quot;success&quot;: false,
  &quot;message&quot;: &quot;會員資格不符&quot;
}</pre><div style="margin-top:8px;padding:10px;background:#dcfce7;border-radius:4px;"><p style="color:#166534;margin:0;font-size:0.9rem;"> ✓ 直接說明問題，使用者一看就懂 </p></div></div><div style="margin-bottom:16px;"><p style="color:#166534;margin-bottom:8px;font-weight:600;">2. 提供解決方向的說明</p><pre>{
  &quot;success&quot;: false,
  &quot;message&quot;: &quot;手機號碼格式錯誤，請輸入10位數字&quot;
}</pre><div style="margin-top:8px;padding:10px;background:#dcfce7;border-radius:4px;"><p style="color:#166534;margin:0;font-size:0.9rem;"> ✓ 不僅說明錯誤，還告訴使用者如何修正 </p></div></div><div><p style="color:#166534;margin-bottom:8px;font-weight:600;">3. 符合情境的友善訊息</p><pre>{
  &quot;success&quot;: false,
  &quot;message&quot;: &quot;檔案大小超過限制，請上傳5MB以下的檔案&quot;
}</pre><div style="margin-top:8px;padding:10px;background:#dcfce7;border-radius:4px;"><p style="color:#166534;margin:0;font-size:0.9rem;"> ✓ 明確說明限制條件，幫助使用者立即調整 </p></div></div></article></div><div class="callout" style="margin-top:24px;background:#f0f9ff;border-color:#7dd3fc;"><p style="color:#0c4a6e;margin-bottom:12px;"><strong>💡 撰寫 Message 的原則</strong></p><ul style="margin:0;padding-left:20px;line-height:2;color:#0c4a6e;"><li><strong>使用純中文：</strong>避免英文技術用語、程式碼或符號</li><li><strong>說明問題：</strong>清楚告知使用者發生了什麼事</li><li><strong>提供方向：</strong>盡可能告訴使用者如何解決或修正</li><li><strong>保持簡潔：</strong>一句話說清楚，不要冗長或過於技術性</li><li><strong>站在使用者角度：</strong>確保一般使用者能夠理解訊息內容</li></ul></div></div><div style="margin-top:48px;"><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">🔄 例外狀況：什麼時候不用回傳 data?</h3><div class="callout" style="margin-bottom:24px;background:#fef3c7;border-color:#fbbf24;"><p style="color:#92400e;margin-bottom:12px;"><strong>📌 原則說明</strong></p><p style="color:#92400e;margin:0;line-height:1.8;"> 針對「上傳檔案」或「新增/修改資料」的 API，如果操作完成後<strong>不需要進一步的行為</strong>，則成功時可以<strong>不回傳 data 參數</strong>，僅回傳 success 和 message 即可。 </p></div><div class="grid" style="margin-bottom:24px;"><article class="card" style="background:#f0fdf4;border-color:#86efac;"><h4 style="margin-bottom:16px;color:#15803d;">✓ 成功時：不需要 data</h4><p style="color:#166534;margin-bottom:12px;font-size:0.95rem;"> 上傳成功後如果沒有需要前端進一步處理的資料，直接回傳操作結果即可 </p><pre>{
  &quot;success&quot;: true,
  &quot;message&quot;: &quot;上傳成功&quot;
}</pre><div style="margin-top:12px;padding:12px;background:#dcfce7;border-radius:6px;"><p style="color:#166534;margin:0;font-size:0.9rem;"><strong>適用情境：</strong>單純的上傳、新增或修改操作，只單純告知使用者操作結果即可 </p></div></article><article class="card" style="background:#fef2f2;border-color:#fca5a5;"><h4 style="margin-bottom:16px;color:#991b1b;">✗ 失敗時：不需要 data</h4><p style="color:#991b1b;margin-bottom:12px;font-size:0.95rem;"> 操作失敗時回傳明確的錯誤訊息，讓使用者了解失敗原因 </p><pre>{
  &quot;success&quot;: false,
  &quot;message&quot;: &quot;XXX並未符合資格&quot;
}

// 或

{
  &quot;success&quot;: false,
  &quot;message&quot;: &quot;XXX並未依照指定格式輸入&quot;
}</pre><div style="margin-top:12px;padding:12px;background:#fee2e2;border-radius:6px;"><p style="color:#991b1b;margin:0;font-size:0.9rem;"><strong>注意：</strong>message 需要清楚說明失敗原因，讓使用者知道如何修正 </p></div></article></div><article class="card" style="background:#eff6ff;border-color:#93c5fd;"><h4 style="margin-bottom:16px;color:#1e40af;">📦 什麼時候需要回傳 data？</h4><p style="color:#1e3a8a;margin-bottom:12px;"> 如果上傳或新增修改成功後，<strong>前端需要進一步的行為</strong>，則必須回傳 data 參數： </p><ul style="margin:0;padding-left:20px;line-height:2;color:#1e3a8a;"><li>需要顯示剛上傳檔案的資訊（如檔案 ID、檔案路徑等）</li><li>需要導向至新建立的資料詳細頁（需要資料 ID）</li><li>需要更新畫面上的其他資訊（如更新後的完整資料）</li><li>需要下載或預覽剛上傳的檔案</li></ul><pre style="margin-top:16px;">{
  &quot;success&quot;: true,
  &quot;message&quot;: &quot;上傳成功&quot;,
  &quot;data&quot;: {
    &quot;fileId&quot;: &quot;12345&quot;,
    &quot;filePath&quot;: &quot;/uploads/document.pdf&quot;,
    &quot;uploadTime&quot;: &quot;2026-03-19 10:30:00&quot;
  }
}</pre></article><div class="callout" style="margin-top:24px;background:#f0f9ff;border-color:#7dd3fc;"><p style="color:#0c4a6e;margin:0;"><strong>💡 設計建議：</strong>在設計 API 時，先確認前端在操作成功後是否需要額外的資料。如果只需要顯示「成功」訊息並關閉彈窗或返回列表頁，則不需要回傳 data，可以簡化 response 結構。 </p></div></div><div style="margin-top:48px;"><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">⚠️ Error Code 定義</h3><div class="callout" style="margin-bottom:24px;background:#fef3c7;border-color:#fbbf24;"><p style="color:#92400e;margin-bottom:12px;"><strong>📌 重要說明</strong></p><p style="color:#92400e;margin:0;line-height:1.8;"> 新系統初期未採用元件化架構，受限於開發時程暫無法全面重構。<br> 目前策略是明確定義各 Error Code 的意義，後端實作細節可另行討論，但<strong>前端必須能依 Error Code 進行問題排查</strong>。 </p></div><div class="table-wrap"><table><thead><tr><th>Error Code</th><th>定義</th><th>說明</th></tr></thead><tbody><tr><td><strong style="color:#059669;font-size:1.05rem;">200</strong></td><td><strong>成功 (OK)</strong></td><td>請求成功，伺服器已正確處理並回傳資料</td></tr><tr><td><strong style="color:#dc2626;font-size:1.05rem;">400</strong></td><td><strong>錯誤的請求 (Bad Request)</strong></td><td>前端請求參數錯誤</td></tr><tr><td><strong style="color:#dc2626;font-size:1.05rem;">401</strong></td><td><strong>未授權 (Unauthorized)</strong></td><td>未登入或 Token 失效，需要重新登入驗證身份</td></tr><tr><td><strong style="color:#dc2626;font-size:1.05rem;">403</strong></td><td><strong>禁止存取 (Forbidden)</strong></td><td>已登入但無權限執行此操作，可能是角色權限不足</td></tr><tr><td><strong style="color:#dc2626;font-size:1.05rem;">404</strong></td><td><strong>找不到API (Not Found)</strong></td><td>API 路徑不存在</td></tr><tr><td><strong style="color:#dc2626;font-size:1.05rem;">405</strong></td><td><strong>不允許的方法 (Method Not Allowed)</strong></td><td>HTTP 方法錯誤，例如該 API 只支援 POST 但使用了 GET</td></tr><tr><td><strong style="color:#dc2626;font-size:1.05rem;">422</strong></td><td><strong>無法處理的實體 (Unprocessable Entity)</strong></td><td>前端請求(request)格式正確，但因語義錯誤無法處理，例如資料驗證失敗</td></tr><tr><td><strong style="color:#dc2626;font-size:1.05rem;">500</strong></td><td><strong>伺服器內部錯誤 (Internal Server Error)</strong></td><td>後端程式發生未預期的錯誤，需要後端工程師檢查 log 排查問題</td></tr></tbody></table></div><article class="card" style="margin-top:24px;background:#eff6ff;border-color:#93c5fd;"><h4 style="margin-bottom:12px;color:#1e40af;">前端 Debug 建議</h4><ul style="margin:0;padding-left:20px;line-height:2;"><li><strong>400：</strong>檢查前端傳送的參數是否符合後端要求（欄位名稱、資料型別、必填欄位）</li><li><strong>401：</strong>檢查 Token 是否過期或未正確帶入 Authorization header</li><li><strong>403：</strong>確認使用者角色權限，是否該功能需要更高權限</li><li><strong>404：</strong>確認 API 路徑是否正確，或資料 ID 是否存在於資料庫</li><li><strong>405：</strong>確認 HTTP Method（GET/POST/PUT/DELETE）是否使用正確</li><li><strong>500：</strong>聯繫後端工程師查看 server log，通常是後端程式邏輯錯誤</li></ul></article></div>`,7)])])}const g=o(l,[["render",i]]);export{g as default};
