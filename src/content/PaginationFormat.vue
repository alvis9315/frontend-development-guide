<template>
  <div>
    <p class="muted" style="margin-bottom: 24px;">分頁功能採用關注點分離設計，分為 usePagination（邏輯層）和 AppPagination（展示層）兩個部分。</p>

    <!-- 前後端協作規範 -->
    <div style="margin-bottom: 48px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">🤝 前後端協作規範</h3>
      
      <div style="margin-bottom: 16px; padding: 16px; background: #eff6ff; border-left: 3px solid #3b82f6; border-radius: 6px;">
        <p style="color: #1e40af; font-weight: 600; margin-bottom: 8px;">📌 Request 參數組成</p>
        <ul style="color: #1e40af; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li><strong>固定參數</strong>：pageNo、pageSize（所有分頁 API 都需要）</li>
          <li><strong>業務參數</strong>：typeId、keyword、startDate 等（視 API 功能需求而定，非必要）</li>
        </ul>
      </div>

      <div class="grid" style="margin-bottom: 24px;">
        <article class="card">
          <h5 style="margin-bottom: 12px; font-size: 1rem; color: #059669;">情境 A：只需分頁</h5>
          <pre>POST /api/users/list

{
  "pageNo": 1,
  "pageSize": 15
}</pre>
          <p style="margin-top: 8px; color: var(--muted); font-size: 0.9rem;">例如：取得所有使用者列表</p>
        </article>
        <article class="card">
          <h5 style="margin-bottom: 12px; font-size: 1rem; color: #2563eb;">情境 B：需查詢條件 + 分頁</h5>
          <pre>POST /api/news/query

{
  "typeId": 4,
  "keyword": "測試",
  "pageNo": 1,
  "pageSize": 15
}</pre>
          <p style="margin-top: 8px; color: var(--muted); font-size: 0.9rem;">例如：根據條件搜尋新聞</p>
        </article>
      </div>

      <div class="table-wrap" style="margin-bottom: 32px;">
        <table>
          <thead>
            <tr>
              <th>參數</th>
              <th>型別</th>
              <th>必填</th>
              <th>說明</th>
              <th>預設值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>pageNo</code></td>
              <td>Integer</td>
              <td>✅</td>
              <td>頁碼（1-based，第一頁 = 1）</td>
              <td>1</td>
            </tr>
            <tr>
              <td><code>pageSize</code></td>
              <td>Integer</td>
              <td>✅</td>
              <td>每頁筆數</td>
              <td>15</td>
            </tr>
            <tr>
              <td colspan="5" style="background: #f9fafb; font-weight: 600; color: #6b7280;">業務參數（依 API 功能而定，選擇性）</td>
            </tr>
            <tr>
              <td><code>typeId</code></td>
              <td>Integer</td>
              <td>❌</td>
              <td>類別 ID（範例）</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>keyword</code></td>
              <td>String</td>
              <td>❌</td>
              <td>搜尋關鍵字（範例）</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>startDate</code></td>
              <td>String</td>
              <td>❌</td>
              <td>開始日期（範例）</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid">
        <article class="card">
          <h5 style="margin-bottom: 12px; font-size: 1rem; color: #059669;">回應格式</h5>
          <pre>{
  "content": [...],
  "number": 1,
  "size": 15,
  "totalPages": 10,
  "total": 150,
  "offset": 0
}</pre>
        </article>
        <article class="card">
          <h5 style="margin-bottom: 12px; font-size: 1rem; color: #2563eb;">欄位說明</h5>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>欄位</th>
                  <th>型別</th>
                  <th>必填</th>
                  <th>說明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>content</code></td>
                  <td>Array</td>
                  <td>✅</td>
                  <td>資料陣列（空時為 []，不可為 null）</td>
                </tr>
                <tr>
                  <td><code>number</code></td>
                  <td>Integer</td>
                  <td>✅</td>
                  <td>當前頁碼（1-based，對應 request.pageNo）</td>
                </tr>
                <tr>
                  <td><code>size</code></td>
                  <td>Integer</td>
                  <td>✅</td>
                  <td>每頁筆數（對應 request.pageSize）</td>
                </tr>
                <tr>
                  <td><code>totalPages</code></td>
                  <td>Integer</td>
                  <td>✅</td>
                  <td>總頁數</td>
                </tr>
                <tr>
                  <td><code>total</code></td>
                  <td>Integer/Long</td>
                  <td>✅</td>
                  <td>總筆數</td>
                </tr>
                <tr>
                  <td><code>offset</code></td>
                  <td>Integer/Long</td>
                  <td>✅</td>
                  <td>起始索引 = (number - 1) × size</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </div>

    <!-- 前端實作指引 -->
    <n-collapse style="margin-bottom: 32px;">
      <n-collapse-item name="frontend-guide">
        <template #header>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 1.3rem; font-weight: 700; color: #059669;">💻 前端實作指引</span>
            <span style="font-size: 0.9rem; color: #6b7280; font-weight: normal;">（點擊展開查看 usePagination、AppPagination 使用方式）</span>
          </div>
        </template>

        <div style="padding: 20px 0;">
          <!-- 架構概述 -->
          <div style="margin-bottom: 32px; padding: 20px; background: #f0f9ff; border-left: 4px solid #0ea5e9; border-radius: 8px;">
            <h4 style="margin-bottom: 12px; color: #0c4a6e; font-size: 1.1rem;">📐 架構概述</h4>
            <p style="color: #0c4a6e; line-height: 1.8; margin-bottom: 12px;">
              分頁功能採用 <strong>關注點分離（Separation of Concerns）</strong> 設計模式，分為兩個層次：
            </p>
            <div style="margin-top: 16px; padding: 16px; background: #e0f2fe; border-radius: 6px;">
              <ul style="color: #0c4a6e; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li><strong>usePagination.js</strong>（邏輯層）：管理分頁狀態、處理 API 參數轉換、解析 API 回應</li>
                <li><strong>AppPagination.vue</strong>（展示層）：渲染分頁按鈕、處理使用者點擊、發送 update:page 事件</li>
              </ul>
            </div>
          </div>

          <!-- usePagination Composable -->
          <div style="margin-bottom: 48px;">
            <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">🔧 usePagination Composable</h3>
            
            <div class="callout" style="margin-bottom: 20px;">
              <p style="margin-bottom: 8px;"><strong>檔案位置：</strong><code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">src/composables/usePagination.js</code></p>
              <p style="margin: 0;"><strong>功能：</strong>提供分頁狀態管理和資料處理的可組合函數</p>
            </div>

            <div class="grid">
              <article class="card">
                <h4 style="margin-bottom: 12px; font-size: 1rem; color: #2563eb;">回傳值</h4>
                <pre>{
  paginationModel,           // 分頁狀態物件
  updatePaginationPage,      // 更新頁碼函數（必須使用此函數處理換頁，才會觸發 API 請求）
  mergePaginationParameter,  // 合併分頁參數到 API 請求
  extractPaginationContent,  // 從 API 回應中提取分頁資料
}</pre>
              </article>
              <article class="card">
                <h4 style="margin-bottom: 12px; font-size: 1rem; color: #059669;">paginationModel 結構</h4>
                <pre>{
  page: 1,           // 當前頁碼（起始值：1）
  pageSize: 15,      // 每頁筆數（預設：15）
  itemCount: 0,      // 總筆數
  pageCount: 0,      // 總頁數
  prefix: Function,  // 分頁前綴文字生成函數
}</pre>
              </article>
            </div>
          </div>

          <!-- 主要方法說明 -->
          <div style="margin-bottom: 48px;">
            <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">📋 主要方法</h3>
            
            <article class="card" style="margin-bottom: 24px;">
              <h4 style="margin-bottom: 12px; font-size: 1rem; color: #7c3aed;">1. mergePaginationParameter(parameter)</h4>
              <p style="margin-bottom: 12px; color: var(--muted);">將分頁參數合併到 API 請求參數中</p>
              <div style="margin-bottom: 12px; padding: 12px; background: #eff6ff; border-left: 3px solid #3b82f6; border-radius: 4px;">
                <p style="margin: 0; color: #1e40af; font-size: 0.9rem;">
                  <strong>內部機制：</strong><code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">pageNo</code> 來自內部的 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">requestPage</code>（而非 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">paginationModel.page</code>），只有透過 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">updatePaginationPage</code> 才會更新 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">requestPage</code>。這確保 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">extractPaginationContent</code> 回寫 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">paginationModel.page</code> 時不會觸發 computed 重算，避免無限 API 循環。
                </p>
              </div>
              <div class="grid">
                <div>
                  <p style="margin-bottom: 8px; font-weight: 600; color: #059669;">輸入</p>
                  <pre>{ keyword: '測試' }</pre>
                </div>
                <div>
                  <p style="margin-bottom: 8px; font-weight: 600; color: #2563eb;">輸出</p>
                  <pre>{
  keyword: '測試',
  pageNo: 1,      // 頁碼（從 1 開始）
  pageSize: 15    // 每頁筆數
}</pre>
                </div>
              </div>
            </article>

            <article class="card">
              <h4 style="margin-bottom: 12px; font-size: 1rem; color: #7c3aed;">2. extractPaginationContent(response)</h4>
              <p style="margin-bottom: 12px; color: var(--muted);">從 API 回應中提取資料並更新分頁狀態</p>
              
              <div style="margin-bottom: 16px;">
                <p style="margin-bottom: 8px; font-weight: 600;">支援兩種 API 回應格式：</p>
                <div class="grid">
                  <div>
                    <p style="margin-bottom: 8px; color: #059669;">✓ 格式 1（推薦）：使用 page/size</p>
                    <pre>// API 回應格式
{
  content: [...],      // 資料陣列
  page: 1,            // 當前頁
  size: 15,           // 每頁筆數
  totalPages: 10,     // 總頁數
  total: 150,         // 總筆數
  offset: 0           // 起始索引（選用）
}</pre>
                  </div>
                  <div>
                    <p style="margin-bottom: 8px; color: #2563eb;">✓ 格式 2：使用 number/pageSize</p>
                    <pre>// API 回應格式
{
  content: [...],      // 資料陣列
  number: 1,          // 當前頁（替代 page）
  pageSize: 15,       // 每頁筆數（替代 size）
  totalPages: 10,     // 總頁數
  total: 150,         // 總筆數
  offset: 0           // 起始索引（選用）
}</pre>
                  </div>
                </div>
              </div>

              <div style="padding: 16px; background: #f0fdf4; border-radius: 6px; border-left: 3px solid #10b981;">
                <p style="margin: 0; color: #166534;">
                  <strong>自動處理：</strong>提取 content 陣列並更新 paginationModel、為每筆資料附加 $$RowNumber（序號）和 $$RowIndex（索引）
                </p>
              </div>
            </article>
          </div>

          <!-- ⚠️ 換頁必須使用 updatePaginationPage -->
          <div style="margin-bottom: 48px;">
            <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">⚠️ 換頁必須使用 updatePaginationPage</h3>
            
            <div style="padding: 20px; background: #fef2f2; border: 2px solid #fca5a5; border-radius: 8px; margin-bottom: 20px;">
              <p style="color: #991b1b; font-size: 1.05rem; font-weight: 700; margin-bottom: 12px;">
                🚨 重要行為規則：所有換頁操作一律使用 updatePaginationPage
              </p>
              <p style="color: #991b1b; line-height: 1.8; margin: 0;">
                不能直接賦值 <code style="background: #fecaca; padding: 2px 6px; border-radius: 4px;">paginationModel.page = page</code>，這樣<strong>只會更新 UI，不會觸發 API 請求</strong>。
              </p>
            </div>

            <div class="grid" style="margin-bottom: 20px;">
              <article class="card" style="border-left: 4px solid #dc2626;">
                <h5 style="margin-bottom: 12px; color: #dc2626;">❌ 錯誤寫法</h5>
                <pre>// 直接賦值 → 只更新 UI，不觸發 API
paginationModel.value.page = 2

// 事件處理中直接賦值 → 同樣不會觸發 API
@update:page="page =&gt; (paginationModel.page = page)"</pre>
              </article>
              <article class="card" style="border-left: 4px solid #059669;">
                <h5 style="margin-bottom: 12px; color: #059669;">✅ 正確寫法</h5>
                <pre>// 使用函數 → 同時更新 requestPage 和 UI，觸發 API
updatePaginationPage(2)

// 事件處理中使用函數
@update:page="updatePaginationPage"</pre>
              </article>
            </div>

            <div style="padding: 16px; background: #eff6ff; border-left: 3px solid #3b82f6; border-radius: 6px;">
              <p style="color: #1e40af; font-weight: 600; margin-bottom: 8px;">為什麼？</p>
              <p style="color: #1e40af; line-height: 1.8; margin-bottom: 12px;">
                <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">mergePaginationParameter</code> 產生 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">pageNo</code> 時，讀取的是內部獨立的 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">requestPage</code>，<strong>不是</strong> <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">paginationModel.page</code>。
              </p>
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>操作</th>
                      <th>更新 requestPage</th>
                      <th>更新 UI (paginationModel.page)</th>
                      <th>觸發 API</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>paginationModel.page = 2</code></td>
                      <td style="color: #dc2626;">❌</td>
                      <td style="color: #059669;">✅</td>
                      <td style="color: #dc2626;">❌</td>
                    </tr>
                    <tr>
                      <td><code>updatePaginationPage(2)</code></td>
                      <td style="color: #059669;">✅</td>
                      <td style="color: #059669;">✅</td>
                      <td style="color: #059669;">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style="color: #1e40af; line-height: 1.8; margin-top: 12px; margin-bottom: 0;">
                這個設計是為了避免無限循環：<code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">extractPaginationContent</code> 會回寫 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">paginationModel.page</code>，如果 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">mergePaginationParameter</code> 也讀取它，就會形成 computed → API → 回寫 → computed 的無限循環。透過 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">requestPage</code> 將兩者分離，徹底切斷循環。
              </p>
            </div>
          </div>

          <!-- AppPagination 元件 -->
          <div style="margin-bottom: 48px;">
            <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">🎨 AppPagination 元件</h3>
            
            <div class="callout" style="margin-bottom: 20px;">
              <p style="margin-bottom: 8px;"><strong>檔案位置：</strong><code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">src/components/AppPagination.vue</code></p>
              <p style="margin: 0;"><strong>功能：</strong><strong>專為無障礙網頁設計的分頁 UI 元件</strong>，符合 WCAG 2.1 AA 無障礙標準，主要用於 <strong>public 頁面（非登入頁面）</strong>以通過無障礙檢測</p>
            </div>

            <div class="table-wrap" style="margin-bottom: 24px;">
              <table>
                <thead>
                  <tr>
                    <th>Props</th>
                    <th>類型</th>
                    <th>必填</th>
                    <th>預設值</th>
                    <th>說明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>page</code></td>
                    <td>Number</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>當前頁碼（1-based）</td>
                  </tr>
                  <tr>
                    <td><code>total</code></td>
                    <td>Number</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>總筆數</td>
                  </tr>
                  <tr>
                    <td><code>pageSize</code></td>
                    <td>Number</td>
                    <td>❌</td>
                    <td>10</td>
                    <td>每頁筆數</td>
                  </tr>
                  <tr>
                    <td><code>maxPageButtons</code></td>
                    <td>Number</td>
                    <td>❌</td>
                    <td>7</td>
                    <td>最多顯示幾個頁碼按鈕</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="table-wrap" style="margin-bottom: 24px;">
              <table>
                <thead>
                  <tr>
                    <th>Events</th>
                    <th>參數</th>
                    <th>說明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>update:page</code></td>
                    <td>(page: Number)</td>
                    <td>當使用者點擊頁碼時觸發</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="padding: 16px; background: #eff6ff; border-radius: 6px; border-left: 3px solid #3b82f6;">
              <p style="margin-bottom: 8px; color: #1e40af; font-weight: 600;">✨ 無障礙特性（WCAG 2.1 AA 標準）</p>
              <div style="margin-bottom: 12px; padding: 10px; background: #dbeafe; border-radius: 4px;">
                <p style="margin: 0; color: #1e40af; font-size: 0.9rem;">
                  <strong>重要提醒：</strong>本元件專為通過政府網站無障礙檢測而設計，確保視障、肢障等使用者也能順利操作分頁功能。
                </p>
              </div>
              <ul style="color: #1e40af; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li><strong>ARIA 標籤：</strong><code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">aria-label</code> 為每個按鈕提供明確說明（如「第 3 頁」、「上一頁」）</li>
                <li><strong>當前頁標示：</strong><code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">aria-current="page"</code> 告知螢幕閱讀器目前所在頁面</li>
                <li><strong>鍵盤導航：</strong>完整支援 Tab 鍵切換、Enter/Space 鍵觸發</li>
                <li><strong>視覺對比：</strong>當前頁高亮、disabled 狀態明確，符合色彩對比度要求</li>
                <li><strong>螢幕閱讀器：</strong>提供完整的頁碼資訊朗讀（如「共 150 筆資料」）</li>
                <li><strong>焦點管理：</strong>清晰的焦點框線，易於追蹤當前位置</li>
              </ul>
            </div>

            <div style="margin-top: 24px; padding: 16px; background: #fef3c7; border-left: 3px solid #f59e0b; border-radius: 6px;">
              <p style="margin-bottom: 8px; color: #92400e; font-weight: 600;">⚠️ 重要觀念：Props ≠ API Request 參數</p>
              <div style="color: #92400e; line-height: 1.8;">
                <p style="margin-bottom: 12px;">AppPagination 是純 UI 元件，只負責顯示分頁介面，<strong>不負責 API 通訊</strong>。</p>
                <ul style="margin: 0; padding-left: 20px;">
                  <li><strong>元件 Props（page, pageSize）</strong>：只是 Vue 元件內部的命名，用於接收資料來顯示 UI</li>
                  <li><strong>API Request 參數</strong>：由 usePagination 的 mergePaginationParameter 產生，實際發送的是 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">pageNo</code> 和 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">pageSize</code></li>
                </ul>
                <div style="margin-top: 12px; padding: 12px; background: #fde68a; border-radius: 4px;">
                  <p style="margin: 0; font-size: 0.9rem;">
                    <strong>簡單來說：</strong>AppPagination 的 <code>:page</code> prop 只是傳資料給 UI 元件，與後端 API 參數無關。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 使用方式 -->
          <div style="margin-bottom: 48px;">
            <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">💡 使用方式</h3>
            
            <n-collapse>
              <n-collapse-item name="method1">
                <template #header>
                  <span style="font-size: 1.05rem; font-weight: 600;">方式一：單獨使用 AppPagination</span>
                </template>
                <div style="padding: 16px 0;">
                  <p style="margin-bottom: 16px; color: var(--muted);">適用於自訂列表佈局的情況</p>
                  <pre>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- 自訂的列表 --&gt;
    &lt;div v-for="item in dataList" :key="item.id"&gt;
      &#123;&#123; item.title &#125;&#125;
    &lt;/div&gt;

    &lt;!-- 分頁元件 --&gt;
    &lt;app-pagination
      :page="paginationModel.page"
      :total="paginationModel.itemCount"
      :page-size="paginationModel.pageSize"
      @update:page="updatePaginationPage"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useGetDataList } from '@/api/example'

const { paginationModel, updatePaginationPage, mergePaginationParameter, extractPaginationContent } = usePagination()

const queryParams = computed(() =&gt; mergePaginationParameter({}))
const { data: apiResponse } = useGetDataList(queryParams)
const dataList = computed(() =&gt; extractPaginationContent(apiResponse.value))
&lt;/script&gt;</pre>
                </div>
              </n-collapse-item>

              <n-collapse-item name="method2">
                <template #header>
                  <span style="font-size: 1.05rem; font-weight: 600;">方式二：搭配 AppTable 使用 ✅ 推薦</span>
                </template>
                <div style="padding: 16px 0;">
                  <p style="margin-bottom: 16px; color: var(--muted);">適用於需要表格展示的情況，分頁會自動整合在表格下方</p>
                  <pre>&lt;template&gt;
  &lt;app-table
    striped
    single-line
    accessible
    :pagination="paginationModel"
    @update:page="updatePaginationPage"
  &gt;
    &lt;tbody&gt;
      &lt;tr v-for="item in dataList" :key="item.id"&gt;
        &lt;td&gt;&#123;&#123; item.title &#125;&#125;&lt;/td&gt;
        &lt;td&gt;&#123;&#123; item.date &#125;&#125;&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/app-table&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useGetDataList } from '@/api/example'

const { paginationModel, updatePaginationPage, mergePaginationParameter, extractPaginationContent } = usePagination()

const queryParams = computed(() =&gt; mergePaginationParameter({}))
const { data: apiResponse } = useGetDataList(queryParams)
const dataList = computed(() =&gt; extractPaginationContent(apiResponse.value))
&lt;/script&gt;</pre>
                  
                  <div style="margin-top: 16px; padding: 16px; background: #fef3c7; border-left: 3px solid #f59e0b; border-radius: 4px;">
                    <p style="color: #92400e; font-weight: 600; margin-bottom: 8px;">⚠️ AppTable 重點說明</p>
                    <ul style="color: #92400e; line-height: 1.8; margin: 0; padding-left: 20px;">
                      <li>必須加上 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">accessible</code> prop（public 頁面使用無障礙版本）</li>
                      <li>傳入 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">:pagination="paginationModel"</code>（將整個分頁狀態傳入）</li>
                      <li>監聽 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">@update:page</code> 事件並呼叫 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">updatePaginationPage</code></li>
                      <li><strong>必須使用 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">updatePaginationPage</code> 處理換頁事件，直接修改 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">paginationModel.page</code> 不會觸發 API 請求！</strong></li>
                    </ul>
                  </div>
                </div>
              </n-collapse-item>
            </n-collapse>
          </div>

          <!-- 完整範例 -->
          <div style="margin-bottom: 48px;">
            <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">📝 完整範例</h3>
            
            <n-collapse>
              <n-collapse-item name="example1">
                <template #header>
                  <span style="font-size: 1.05rem; font-weight: 600;">搭配搜尋功能（AppTable）</span>
                </template>
                <pre style="margin: 0;">&lt;template&gt;
  &lt;div&gt;
    &lt;!-- 搜尋表單 --&gt;
    &lt;div class="mb-4"&gt;
      &lt;input v-model="searchModel.keyword" placeholder="請輸入關鍵字" /&gt;
      &lt;button @click="handleSearch"&gt;搜尋&lt;/button&gt;
      &lt;button @click="handleReset"&gt;清除&lt;/button&gt;
    &lt;/div&gt;

    &lt;!-- 表格 + 分頁 --&gt;
    &lt;app-table
      striped
      single-line
      accessible
      :pagination="paginationModel"
      @update:page="updatePaginationPage"
    &gt;
      &lt;tbody&gt;
        &lt;tr v-for="item in dataList" :key="item.id"&gt;
          &lt;td&gt;&#123;&#123; item.title &#125;&#125;&lt;/td&gt;
          &lt;td&gt;&#123;&#123; item.date &#125;&#125;&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/app-table&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { cloneDeep } from 'lodash-es'
import { useGetNewsList } from '@/api/news'

// 搜尋條件
const searchModel = ref({
  keyword: '',
})

// 實際送出的查詢參數
const queryParams = ref({})

// 分頁管理
const { paginationModel, updatePaginationPage, mergePaginationParameter, extractPaginationContent } = usePagination()

// 合併分頁參數
const apiParams = computed(() =&gt; mergePaginationParameter(queryParams.value))

// 呼叫 API
const { data: apiResponse } = useGetNewsList(apiParams)

// 提取資料
const dataList = computed(() =&gt; extractPaginationContent(apiResponse.value))

// 執行搜尋
const handleSearch = () => {
  queryParams.value = cloneDeep(searchModel.value)
}

// 清除條件
const handleReset = () => {
  searchModel.value = { keyword: '' }
  queryParams.value = {}
}
&lt;/script&gt;</pre>
              </n-collapse-item>

              <n-collapse-item name="example2">
                <template #header>
                  <span style="font-size: 1.05rem; font-weight: 600;">自訂每頁筆數</span>
                </template>
                <pre style="margin: 0;">&lt;script setup&gt;
// 初始化時設定每頁 20 筆
const { paginationModel, updatePaginationPage } = usePagination({
  pageSize: 20
})
&lt;/script&gt;

&lt;template&gt;
  &lt;app-table
    accessible
    :pagination="paginationModel"
    @update:page="updatePaginationPage"
  &gt;
    &lt;!-- 表格內容 --&gt;
  &lt;/app-table&gt;
&lt;/template&gt;</pre>
              </n-collapse-item>

              <n-collapse-item name="example3">
                <template #header>
                  <span style="font-size: 1.05rem; font-weight: 600;">調整最大顯示按鈕數</span>
                </template>
                <pre style="margin: 0;">&lt;template&gt;
  &lt;!-- 最多顯示 5 個頁碼按鈕（預設 7 個） --&gt;
  &lt;app-pagination
    :page="paginationModel.page"
    :total="paginationModel.itemCount"
    :page-size="paginationModel.pageSize"
    :max-page-buttons="5"
    @update:page="updatePaginationPage"
  /&gt;
&lt;/template&gt;

&lt;!-- 顯示效果：&lt; 1 ... 3 4 5 ... 19 &gt; 共 279 筆資料 --&gt;</pre>
              </n-collapse-item>

              <n-collapse-item name="example4">
                <template #header>
                  <span style="font-size: 1.05rem; font-weight: 600;">換頁時捲動到頂部</span>
                </template>
                <pre style="margin: 0;">&lt;script setup&gt;
import { useAppScroll } from '@/composables/useAppScroll'

const { scrollToTop } = useAppScroll()
const { paginationModel } = usePagination()

// 監聽 page 變化，換頁時自動捲動到頂部
watchEffect(() => {
  if (paginationModel.value.page) {
    scrollToTop()
  }
})
&lt;/script&gt;</pre>
              </n-collapse-item>
            </n-collapse>
          </div>

          <!-- 常見問題 -->
          <div>
            <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">❓ 常見問題</h3>
            
            <div class="callout" style="margin-bottom: 16px;">
              <p style="font-weight: 600; margin-bottom: 8px;">Q1: 應該使用哪種方式？</p>
              <p style="margin: 0;">
                <strong style="color: #059669;">有表格展示</strong> → 使用方式二（AppTable + pagination prop）✅ 推薦<br>
                <strong style="color: #2563eb;">自訂列表佈局</strong> → 使用方式一（單獨 AppPagination）
              </p>
            </div>

            <div class="callout" style="margin-bottom: 16px;">
              <p style="font-weight: 600; margin-bottom: 8px;">Q2: 為什麼 AppTable 的分頁點擊沒反應？</p>
              <p style="margin-bottom: 12px;">忘記監聽 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">@update:page</code> 事件！必須這樣寫：</p>
              <pre style="margin-bottom: 16px;">&lt;!-- ❌ 錯誤：沒有監聽事件 --&gt;
&lt;app-table :pagination="paginationModel"&gt;

&lt;!-- ❌ 錯誤：直接修改 paginationModel.page，不會觸發 API 請求 --&gt;
&lt;app-table :pagination="paginationModel" @update:page="page =&gt; (paginationModel.page = page)"&gt;

&lt;!-- ✅ 正確：使用 updatePaginationPage --&gt;
&lt;app-table
  :pagination="paginationModel"
  @update:page="updatePaginationPage"
&gt;</pre>
              <div style="padding: 12px; background: #f0fdf4; border-left: 3px solid #10b981; border-radius: 4px;">
                <p style="color: #166534; font-weight: 600; margin-bottom: 8px;">運作原理：</p>
                <ol style="color: #166534; margin: 0; padding-left: 20px; line-height: 1.8;">
                  <li>使用者點擊頁碼按鈕</li>
                  <li>AppPagination 元件發出 <code style="background: #bbf7d0; padding: 2px 4px; border-radius: 3px;">update:page</code> 事件</li>
                  <li>AppTable 接收到事件後，再次發出 <code style="background: #bbf7d0; padding: 2px 4px; border-radius: 3px;">update:page</code> 事件</li>
                  <li>父元件透過 <code style="background: #bbf7d0; padding: 2px 4px; border-radius: 3px;">updatePaginationPage</code> 同時更新內部 <code style="background: #bbf7d0; padding: 2px 4px; border-radius: 3px;">requestPage</code> 和 <code style="background: #bbf7d0; padding: 2px 4px; border-radius: 3px;">paginationModel.page</code></li>
                  <li><code style="background: #bbf7d0; padding: 2px 4px; border-radius: 3px;">requestPage</code> 更新後，<code style="background: #bbf7d0; padding: 2px 4px; border-radius: 3px;">mergePaginationParameter</code> 的 computed 重新計算，觸發 API 請求</li>
                </ol>
              </div>
            </div>

            <div class="callout" style="margin-bottom: 16px;">
              <p style="font-weight: 600; margin-bottom: 8px;">Q3: AppTable 的 accessible prop 是什麼？</p>
              <p style="margin-bottom: 8px;">控制使用哪一種分頁元件：</p>
              <ul style="margin-bottom: 12px; padding-left: 20px; line-height: 1.8;">
                <li><code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">accessible</code> - 使用 <strong>AppPagination 無障礙版本</strong>（符合 WCAG AA 標準）</li>
                <li>不加或 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">accessible=false</code> - 使用 Naive UI 的 n-pagination（無障礙不合規）</li>
              </ul>
              <pre>&lt;!-- ✅ Public 頁面（對外服務，必須符合無障礙標準） --&gt;
&lt;app-table accessible :pagination="paginationModel"&gt;

&lt;!-- ❌ Private 頁面（內部管理系統，不需無障礙檢測） --&gt;
&lt;app-table :pagination="paginationModel"&gt;</pre>
              <div style="margin-top: 12px; padding: 12px; background: #fef3c7; border-left: 3px solid #f59e0b; border-radius: 4px;">
                <p style="margin: 0; color: #92400e; font-size: 0.9rem;">
                  <strong>📌 重要提醒：</strong>所有 <strong>public 資料夾下的頁面</strong>都必須加上 <code style="background: #fde68a; padding: 2px 4px; border-radius: 3px;">accessible</code>，政府網站無障礙檢測會檢查這些頁面。
                </p>
              </div>
            </div>

            <div class="callout" style="margin-bottom: 16px;">
              <p style="font-weight: 600; margin-bottom: 8px;">Q4: 為什麼要分成兩個部分（usePagination + AppPagination）？</p>
              <p style="margin-bottom: 8px;">遵循 Vue 3 Composition API 的最佳實踐：</p>
              <ul style="margin-bottom: 12px; padding-left: 20px; line-height: 1.8;">
                <li><strong>usePagination</strong>：可重複使用的邏輯（純 JavaScript，可用於不同的 UI）</li>
                <li><strong>AppPagination</strong>：可自訂的展示層（Vue 元件，可替換成其他 UI）</li>
              </ul>
              <p style="margin-bottom: 8px;">這樣的設計讓你可以：</p>
              <ol style="margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>在不同元件間共用分頁邏輯</li>
                <li>輕鬆替換 UI 元件而不影響邏輯</li>
                <li>更容易測試和維護</li>
              </ol>
            </div>

            <div class="callout" style="margin-bottom: 16px;">
              <p style="font-weight: 600; margin-bottom: 8px;">Q5: 可以不使用 AppPagination 元件嗎？</p>
              <p style="margin-bottom: 8px;">可以！<code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">usePagination</code> 是獨立的，你可以：</p>
              <ol style="margin-bottom: 12px; padding-left: 20px; line-height: 1.8;">
                <li>使用其他分頁 UI 元件</li>
                <li>自己手刻分頁 HTML</li>
                <li>使用第三方套件</li>
              </ol>
              <p style="margin: 0;">只要透過 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">updatePaginationPage</code> 更新頁碼即可（不能直接修改 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">paginationModel.page</code>）。</p>
            </div>

            <div class="callout" style="margin-bottom: 16px;">
              <p style="font-weight: 600; margin-bottom: 8px;">Q6: API 回應格式不符合怎麼辦？</p>
              <div style="padding: 12px; background: #fef2f2; border-left: 3px solid #dc2626; border-radius: 4px; margin-bottom: 12px;">
                <p style="color: #991b1b; margin: 0;">
                  <strong>⚠️ 重要：</strong>後端應該遵循統一的分頁格式規範。如果發現格式不符合，請<strong>優先回報後端團隊修正</strong>，而不是前端自行轉換。
                </p>
              </div>
              <p style="margin-bottom: 8px;">正常情況下<strong>不需要特殊處理</strong>，因為：</p>
              <ul style="margin-bottom: 12px; padding-left: 20px; line-height: 1.8;">
                <li>✅ <strong>後端應遵循標準格式</strong>：專案後端 API 已統一使用標準分頁格式</li>
                <li>✅ <strong>前端自動適配</strong>：<code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">extractPaginationContent</code> 已支援兩種常見格式</li>
              </ul>
              <div class="grid" style="margin-bottom: 12px;">
                <div>
                  <p style="margin-bottom: 8px; color: #059669; font-weight: 600;">格式 1（推薦）：使用 page/size</p>
                  <pre>{
  content: [...],
  page: 1,
  size: 15,
  totalPages: 10,
  total: 150
}</pre>
                </div>
                <div>
                  <p style="margin-bottom: 8px; color: #2563eb; font-weight: 600;">格式 2：使用 number/pageSize</p>
                  <pre>{
  content: [...],
  number: 1,
  pageSize: 15,
  totalPages: 10,
  total: 150
}</pre>
                </div>
              </div>
              <p style="margin-bottom: 8px;"><strong>⚠️ 如果遇到格式不符合的情況：</strong></p>
              <ol style="margin-bottom: 12px; padding-left: 20px; line-height: 1.8;">
                <li><strong>優先做法</strong>：聯繫後端團隊調整 API 回應格式，統一使用標準格式</li>
                <li><strong>臨時方案</strong>（不推薦，會增加維護成本）</li>
              </ol>
              <details style="margin-top: 12px;">
                <summary style="cursor: pointer; color: #6b7280; font-size: 0.9rem;">臨時轉換方案（僅供緊急使用，不建議長期保留）</summary>
                <pre style="margin-top: 8px;">// 臨時方案範例（不推薦）
const { data: apiResponse } = useGetDataList(apiParams)

const dataList = computed(() =&gt; {
  if (!apiResponse.value) return []
  
  // 將非標準格式轉換為標準格式
  const standardFormat = {
    content: apiResponse.value.items,
    page: apiResponse.value.currentPage,
    size: apiResponse.value.perPage,
    totalPages: apiResponse.value.pages,
    total: apiResponse.value.totalItems
  }
  
  return extractPaginationContent(standardFormat)
})</pre>
                <p style="margin-top: 8px; color: #6b7280; font-size: 0.9rem;">💡 發現格式不符時，請回報給後端團隊統一調整，避免每個頁面都要寫轉換邏輯。</p>
              </details>
            </div>

            <div class="callout" style="margin-bottom: 16px;">
              <p style="font-weight: 600; margin-bottom: 8px;">Q7: 如何在頁碼變更時觸發額外動作？</p>
              <p style="margin-bottom: 8px;">使用 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">watchEffect</code> 或 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">watch</code>：</p>
              <pre>import { useAppScroll } from '@/composables/useAppScroll'

const { scrollToTop } = useAppScroll()

watchEffect(() =&gt; {
  // 當 page 改變時，捲動到頂部
  if (paginationModel.value.page) {
    scrollToTop()
    console.log('切換到第', paginationModel.value.page, '頁')
  }
})</pre>
            </div>

            <div class="callout" style="margin-bottom: 16px;">
              <p style="font-weight: 600; margin-bottom: 8px;">Q8: AppTable 沒有 pagination prop 怎麼辦？</p>
              <p style="margin-bottom: 8px;">這種情況表示這個 app-table 只用來展示靜態資料，不需要分頁功能：</p>
              <pre>&lt;!-- 靜態表格，只需要 accessible --&gt;
&lt;app-table accessible&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;資料1&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;資料2&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/app-table&gt;</pre>
              <p style="margin-top: 8px; margin-bottom: 0;">只有需要分頁功能的表格才需要加上 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">:pagination</code> 和 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">@update:page</code>。</p>
            </div>

            <div class="callout">
              <p style="font-weight: 600; margin-bottom: 8px;">Q9: 為什麼不能直接用 paginationModel.page = page 處理換頁？</p>
              <p style="margin-bottom: 12px;">因為 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">mergePaginationParameter</code> 內部使用獨立的 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">requestPage</code> 來產生 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">pageNo</code>，而非讀取 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">paginationModel.page</code>。</p>
              <p style="margin-bottom: 12px;">直接修改 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">paginationModel.page</code> 只會更新 UI 顯示，<strong>不會觸發 API 請求</strong>。必須透過 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">updatePaginationPage</code> 同時更新 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">requestPage</code> 和 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">paginationModel.page</code>：</p>
              <pre>// ❌ 錯誤：只更新 UI，不觸發 API
paginationModel.value.page = 2

// ✅ 正確：同時更新 requestPage 和 UI，觸發 API
updatePaginationPage(2)</pre>
              <div style="margin-top: 16px; padding: 12px; background: #eff6ff; border-left: 3px solid #3b82f6; border-radius: 4px;">
                <p style="color: #1e40af; font-weight: 600; margin-bottom: 8px;">設計原因：</p>
                <p style="color: #1e40af; margin-bottom: 8px; line-height: 1.6;"><code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">extractPaginationContent</code> 會從 API 回應中回寫 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">paginationModel.page</code>（同步總頁數、總筆數等 UI 狀態）。如果 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">mergePaginationParameter</code> 直接讀取 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">paginationModel.page</code>，就會形成無限循環：</p>
                <pre style="margin-bottom: 12px;">extractPaginationContent 寫入 paginationModel.page
  → mergePaginationParameter 的 computed 重算
  → 產生新物件觸發 vue-query
  → API 請求 → 回應
  → extractPaginationContent 又寫入
  → 無限循環 ♻️</pre>
                <p style="color: #1e40af; margin: 0; line-height: 1.6;">透過 <code style="background: #dbeafe; padding: 2px 4px; border-radius: 3px;">requestPage</code> 將「API 請求用的頁碼」和「UI 顯示用的頁碼」分離，徹底切斷循環。</p>
              </div>
            </div>
          </div>
        </div>
      </n-collapse-item>
    </n-collapse>

    <!-- 後端實作指引 -->
    <n-collapse>
      <n-collapse-item name="backend-guide">
        <template #header>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 1.3rem; font-weight: 700; color: #dc2626;">⚙️ 後端實作指引</span>
            <span style="font-size: 0.9rem; color: #6b7280; font-weight: normal;">（點擊展開查看 Pagination&lt;T&gt; 實作規範）</span>
          </div>
        </template>

        <div style="padding: 20px 0;">
          <div style="margin-bottom: 32px; padding: 20px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px;">
            <h4 style="margin-bottom: 12px; color: #92400e; font-size: 1.1rem;">📌 統一規範</h4>
            <p style="color: #92400e; line-height: 1.8; margin-bottom: 12px;">
              本專案統一採用以下兩項<strong>強制規定</strong>，其餘 Service / Repository 的實作方式不限制：
            </p>
            <ul style="color: #92400e; line-height: 1.8; margin: 0; padding-left: 20px;">
              <li><strong>Request：</strong>含有分頁參數的 Request 物件，一律繼承 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">DefaultPageParams</code></li>
              <li><strong>Response：</strong>分頁查詢的回應，一律回傳 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">Pagination&lt;T&gt;</code></li>
            </ul>
          </div>

          <!-- 核心類別說明 -->
          <div style="margin-bottom: 32px;">
            <h4 style="font-size: 1.1rem; margin-bottom: 16px; color: #7c3aed;">1. 核心類別說明</h4>
            
            <div style="margin-bottom: 20px;">
              <h5 style="font-size: 1rem; margin-bottom: 12px; color: #059669;">Request 端</h5>
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>類別</th>
                      <th>路徑</th>
                      <th>說明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>PageParams</code></td>
                      <td>moi.rdss.platform.paging.PageParams</td>
                      <td>分頁參數介面，定義 getPageNo() / getPageSize()</td>
                    </tr>
                    <tr>
                      <td><code>DefaultPageParams</code></td>
                      <td>moi.rdss.platform.paging.DefaultPageParams</td>
                      <td>分頁參數基礎類，預設 pageNo=1、pageSize=10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <h5 style="font-size: 1rem; margin-bottom: 12px; color: #2563eb;">Response 端</h5>
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>類別</th>
                      <th>路徑</th>
                      <th>說明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>Pagination&lt;T&gt;</code></td>
                      <td>moi.rdss.platform.paging.Pagination</td>
                      <td>統一分頁回應物件（自訂），所有分頁 API 均回傳此型別</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h5 style="font-size: 1rem; margin-bottom: 12px; color: #7c3aed;">工具類（選用）</h5>
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>類別</th>
                      <th>方法</th>
                      <th>說明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>RequestUtils</code></td>
                      <td>getPageRequest(PageParams)</td>
                      <td>將 Request 轉為 Spring 的 PageRequest，自動處理頁碼從 1 → 0 的轉換</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Request 規範 -->
          <div style="margin-bottom: 32px;">
            <h4 style="font-size: 1.1rem; margin-bottom: 16px; color: #7c3aed;">2. Request：繼承 DefaultPageParams</h4>
            
            <div class="callout" style="margin-bottom: 16px; background: #dcfce7; border-color: #86efac;">
              <p style="color: #166534; margin: 0;">
                <strong>✅ 強制規範：</strong>需要分頁的 Request 物件，一律繼承 <code style="background: #bbf7d0; padding: 2px 6px; border-radius: 4px;">DefaultPageParams</code>，不可自行重複定義 pageNo / pageSize 欄位。
              </p>
            </div>

            <article class="card">
              <h5 style="margin-bottom: 12px; font-size: 1rem;">正確範例</h5>
              <pre>@Data
@SuperBuilder
@NoArgsConstructor
public class FooListReq extends DefaultPageParams {

    @Schema(description = "名稱關鍵字")
    private String name;

    @Schema(description = "狀態")
    private String status;
}</pre>
            </article>

            <div class="callout" style="margin-top: 16px;">
              <p style="margin-bottom: 8px; font-weight: 600;">DefaultPageParams 已內建以下欄位：</p>
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>欄位</th>
                      <th>預設值</th>
                      <th>說明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>pageNo</code></td>
                      <td>1</td>
                      <td>前端頁碼從 1 開始</td>
                    </tr>
                    <tr>
                      <td><code>pageSize</code></td>
                      <td>10</td>
                      <td>每頁預設 10 筆</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Response 規範 -->
          <div style="margin-bottom: 32px;">
            <h4 style="font-size: 1.1rem; margin-bottom: 16px; color: #7c3aed;">3. Response：回傳 Pagination&lt;T&gt;</h4>
            
            <div class="callout" style="margin-bottom: 16px; background: #dcfce7; border-color: #86efac;">
              <p style="color: #166534; margin: 0;">
                <strong>✅ 強制規範：</strong>所有分頁查詢的 API 回應，一律包裝為 <code style="background: #bbf7d0; padding: 2px 6px; border-radius: 4px;">Pagination&lt;T&gt;</code>，不可直接回傳 Spring 的 <code style="background: #bbf7d0; padding: 2px 6px; border-radius: 4px;">Page&lt;T&gt;</code> 給前端。
              </p>
            </div>

            <article class="card">
              <h5 style="margin-bottom: 12px; font-size: 1rem;">Pagination&lt;T&gt; JSON 回應格式</h5>
              <pre>{
  "content": [],          // 資料集合
  "total": 100,           // 總筆數
  "size": 10,             // 每頁筆數
  "number": 1,            // 目前頁次（從 1 開始）
  "totalPages": 10,       // 總頁數
  "numberOfElements": 10, // 本頁實際筆數
  "first": true,          // 是否為第一頁
  "last": false,          // 是否為最後一頁
  "offset": 0,            // 分頁位移
  "empty": false,         // 是否有資料
  "extra": {}             // 額外附加資料（選用）
}</pre>
            </article>
          </div>

          <!-- Service / Repository 實作彈性 -->
          <div style="margin-bottom: 32px;">
            <h4 style="font-size: 1.1rem; margin-bottom: 16px; color: #7c3aed;">4. Service / Repository 實作彈性說明</h4>
            
            <div class="callout" style="margin-bottom: 16px;">
              <p style="margin-bottom: 8px; font-weight: 600;">Service 與 Repository 的實作方式依 SQL 複雜程度自行決定，沒有強制標準寫法：</p>
            </div>

            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>情境</th>
                    <th>Repository 回傳</th>
                    <th>Service 最終組裝</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>簡單查詢，條件單純</td>
                    <td>Spring Data JPA 的 <code>Page&lt;Entity&gt;</code></td>
                    <td>轉換後包裝成 <code>Pagination&lt;T&gt;</code></td>
                  </tr>
                  <tr>
                    <td>複雜 SQL，需自組查詢</td>
                    <td><code>Page&lt;Entity&gt;</code> 或 <code>List&lt;Entity&gt;</code> 皆可</td>
                    <td>轉換後包裝成 <code>Pagination&lt;T&gt;</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="margin-top: 16px; padding: 16px; background: #eff6ff; border-left: 3px solid #3b82f6; border-radius: 6px;">
              <p style="color: #1e40af; margin: 0;">
                <strong>關鍵原則：</strong>不論 Service / Repository 內部怎麼實作，最終在 Controller 回傳給前端的格式一律是 <code style="background: #dbeafe; padding: 2px 6px; border-radius: 4px;">Pagination&lt;T&gt;</code>，確保前端收到的分頁格式固定一致。
              </p>
            </div>
          </div>

          <!-- Pagination 建構方式 -->
          <div style="margin-bottom: 32px;">
            <h4 style="font-size: 1.1rem; margin-bottom: 16px; color: #7c3aed;">5. Pagination&lt;T&gt; 常用建構方式</h4>
            
            <div class="callout" style="margin-bottom: 16px;">
              <p style="margin: 0;">實作時依情境選擇適合的建構子，以下為常見用法供參考：</p>
            </div>

            <article class="card">
              <h5 style="margin-bottom: 12px; font-size: 1rem;">常見建構方式</h5>
              <pre>// 搭配 Spring Data JPA 的 Page&lt;Entity&gt; 使用（最常見）
return new Pagination&lt;&gt;(dtos, pageable, page.getTotalElements());

// 手動指定分頁資訊（複雜 SQL / Native SQL）
return new Pagination&lt;&gt;(dtos, pageNumber, pageSize, total);

// 附加額外欄位（如統計數字、摘要）
Pagination&lt;FooDto&gt; result = new Pagination&lt;&gt;(dtos, pageable, total);
result.addExtra("totalAmount", 99999L);
return result;

// 從現有 Pagination 轉型
return existingPagination.map(entity -&gt; convertToDto(entity));</pre>
            </article>

            <div style="margin-top: 16px; padding: 16px; background: #fef3c7; border-left: 3px solid #f59e0b; border-radius: 6px;">
              <p style="color: #92400e; margin: 0;">
                <strong>⚠️ 注意：</strong>Spring Data JPA 的頁碼從 0 開始，前端傳入的 pageNo 從 1 開始。可使用 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">RequestUtils.getPageRequest(req)</code> 自動轉換，或自行處理 -1 的計算。
              </p>
            </div>
          </div>

          <!-- 禁止事項 -->
          <div style="margin-bottom: 32px;">
            <h4 style="font-size: 1.1rem; margin-bottom: 16px; color: #7c3aed;">6. 禁止事項（Do NOT）</h4>
            
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th style="background: #fee;">❌ 禁止</th>
                    <th style="background: #f0fdf4;">✅ 應改為</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>回傳 Spring 的 <code>Page&lt;T&gt;</code> 給前端</td>
                    <td>回傳 <code>Pagination&lt;T&gt;</code></td>
                  </tr>
                  <tr>
                    <td>Request 物件自行重複定義 pageNo / pageSize 欄位</td>
                    <td>繼承 <code>DefaultPageParams</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 快速對照表 -->
          <div>
            <h4 style="font-size: 1.1rem; margin-bottom: 16px; color: #7c3aed;">7. 快速對照表</h4>
            
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>層次</th>
                    <th>Request 型別</th>
                    <th>Response 型別</th>
                    <th>備註</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Controller</strong></td>
                    <td><code>XxxReq extends DefaultPageParams</code></td>
                    <td><code>ResponseEntity&lt;Pagination&lt;XxxDto&gt;&gt;</code></td>
                    <td>強制規範</td>
                  </tr>
                  <tr>
                    <td><strong>Service</strong></td>
                    <td>由 PG 自行決定</td>
                    <td><code>Pagination&lt;XxxDto&gt;</code></td>
                    <td>強制規範</td>
                  </tr>
                  <tr>
                    <td><strong>Repository</strong></td>
                    <td>由 PG 自行決定</td>
                    <td><code>Page&lt;T&gt;</code> 或 <code>List&lt;T&gt;</code> 皆可</td>
                    <td>依 SQL 複雜度決定</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script setup>
import { NCollapse, NCollapseItem } from 'naive-ui'
</script>
