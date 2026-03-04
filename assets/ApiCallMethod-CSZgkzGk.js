import{_ as t,o as e,c as r,a as i}from"./index-BS8oQtX3.js";const n={};function l(s,o){return e(),r("div",null,[...o[0]||(o[0]=[i(`<p class="muted" style="margin-bottom:24px;">遵循 SSDLC 安全原則，統一使用 POST 方法傳遞參數。</p><div style="margin-bottom:32px;padding:20px;background:#eff6ff;border-left:4px solid #3b82f6;border-radius:8px;"><h4 style="margin-bottom:12px;color:#1e40af;font-size:1.1rem;">🔒 SSDLC 安全原則</h4><p style="color:#1e40af;line-height:1.8;margin-bottom:12px;"> 基於 Secure Software Development Lifecycle（安全軟體開發生命週期）原則，<strong>所有 API 請求統一使用 POST 方法</strong>，避免敏感資料暴露於 URL 中。 </p><div style="margin-top:16px;padding:16px;background:#dbeafe;border-radius:6px;"><p style="color:#1e40af;font-weight:600;margin-bottom:8px;">為何不可使用 POST 以外的方法？</p><ul style="color:#1e40af;line-height:1.8;margin-left:20px;"><li><strong>GET 方法</strong>：參數暴露在 URL，容易被瀏覽器歷史記錄、伺服器 log、代理伺服器記錄，造成資料外洩風險</li><li><strong>PUT/PATCH 方法</strong>：雖然參數在 Body，但語義上不適合查詢操作，且部分防火牆或代理可能阻擋</li><li><strong>DELETE 方法</strong>：通常不支援 Request Body，重要參數需放在 URL，同樣有安全疑慮</li><li><strong>安全性考量</strong>：POST + Body 可確保所有參數加密傳輸（HTTPS），不會留存於任何 URL 記錄中</li></ul></div><p style="margin-top:12px;padding:12px;background:#fef3c7;border-left:3px solid #f59e0b;border-radius:4px;color:#92400e;font-size:0.95rem;"> ⏱️ <strong>註記</strong>：現有系統若使用非 POST 方法，請於未來排程時間逐步修正為符合 SSDLC 規範的 POST 方法。 </p></div><div style="margin-bottom:48px;"><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">📋 實作規範</h3><div class="grid"><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#059669;">✓ 查詢類 API</h4><p style="margin-bottom:12px;color:var(--muted);">使用 <strong>POST + Body</strong></p><ul><li>查詢條件放在 Request Body</li><li>分頁參數（page、size）也放在 Body</li><li>避免在 URL 中暴露查詢條件</li></ul><pre style="margin-top:16px;">POST /api/user/query

{
  &quot;keyword&quot;: &quot;搜尋關鍵字&quot;,
  &quot;page&quot;: 1,
  &quot;size&quot;: 15
}</pre></article><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#2563eb;">✓ 操作類 API</h4><p style="margin-bottom:12px;color:var(--muted);">使用 <strong>POST + Body</strong></p><ul><li>新增、修改、刪除統一用 POST</li><li>所有參數放在 Request Body</li><li>確保資料傳輸安全性</li></ul><pre style="margin-top:16px;">POST /api/user/save

{
  &quot;name&quot;: &quot;使用者名稱&quot;,
  &quot;email&quot;: &quot;user@example.com&quot;,
  &quot;status&quot;: &quot;active&quot;
}</pre></article></div></div><div><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">⚠️ 注意事項</h3><div class="callout"><ul><li><strong>禁止使用 GET 方法</strong>：即使是單純查詢，也應使用 POST + Body</li><li><strong>URL 參數限制</strong>：避免將任何業務參數放在 Query String 中</li><li><strong>API 命名規範</strong>：建議使用動詞命名，如 <code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">/query</code>、<code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">/save</code>、<code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">/delete</code></li><li><strong>文件化</strong>：每支 API 都需明確記錄 Request Body 結構</li></ul></div></div><div style="margin-top:48px;padding:24px;background:#fef2f2;border-radius:12px;border:1px solid #fecaca;"><h4 style="margin-bottom:16px;font-size:1.1rem;color:#991b1b;">❌ 不符合 SSDLC 原則</h4><pre style="background:#7f1d1d;color:#fecaca;margin-bottom:0;">// 錯誤示範：使用 GET 方法
GET /api/user/list?keyword=測試&amp;status=active&amp;page=1&amp;size=15

// 問題：
// 1. 查詢條件暴露在 URL 中
// 2. 可能包含敏感資訊
// 3. 有長度限制
// 4. 容易被記錄在 log 中</pre></div><div style="margin-top:16px;padding:24px;background:#f0fdf4;border-radius:12px;border:1px solid #bbf7d0;"><h4 style="margin-bottom:16px;font-size:1.1rem;color:#166534;">✓ 符合 SSDLC 原則</h4><pre style="background:#14532d;color:#d1fae5;margin-bottom:0;">// 正確示範：使用 POST 方法
POST /api/user/query

{
  &quot;keyword&quot;: &quot;測試&quot;,
  &quot;status&quot;: &quot;active&quot;,
  &quot;page&quot;: 1,
  &quot;size&quot;: 15
}

// 優點：
// 1. 參數不暴露在 URL
// 2. 無長度限制
// 3. 提升安全性
// 4. 符合 SSDLC 規範</pre></div>`,6)])])}const d=t(n,[["render",l]]);export{d as default};
