<template>
  <div>
    <p class="muted" style="margin-bottom: 24px;">前後端欄位長度驗證需保持一致，確保資料完整性。</p>

    <!-- 驗證原則 -->
    <div style="margin-bottom: 48px;">
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">📋 驗證原則</h3>
      <div class="grid">
        <article class="card">
          <h4 style="margin-bottom: 12px; font-size: 1rem; color: #059669;">前端驗證</h4>
          <ul>
            <li>使用 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">max</code> 規則限制最大長度</li>
            <li>提供即時錯誤提示訊息</li>
            <li>在表單送出前阻擋不符規範的資料</li>
            <li>提升使用者體驗</li>
          </ul>
        </article>
        <article class="card">
          <h4 style="margin-bottom: 12px; font-size: 1rem; color: #2563eb;">後端驗證</h4>
          <ul>
            <li>使用 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">@Size</code> 或 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">@Length</code> 註解驗證</li>
            <li>防止透過 Swagger 或 API 工具繞過前端驗證</li>
            <li>確保資料庫欄位不會溢位</li>
            <li>回傳明確的錯誤訊息</li>
          </ul>
        </article>
      </div>
    </div>

    <!-- 重要說明 -->
    <div style="margin-bottom: 48px; padding: 20px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px;">
      <h4 style="margin-bottom: 12px; color: #92400e; font-size: 1.1rem;">⚠️ 前後端雙重驗證的必要性</h4>
      <p style="color: #92400e; line-height: 1.8; margin-bottom: 12px;">
        理論上，<strong>前端已做長度限制，後端可不必重複驗證</strong>。但實務上，開發者可能透過 Swagger、Postman 等工具直接測試 API，
        <strong>若後端未設定驗證規則，可能會寫入不符合規範的資料至資料庫</strong>，造成資料品質問題。
      </p>
      <p style="color: #92400e; line-height: 1.8; font-weight: 600;">
        ✓ 建議：前後端都應設定相同的長度限制，形成雙重防護機制。
      </p>
    </div>

    <!-- 實際使用範例 -->
    <n-collapse style="margin-bottom: 24px;">
      <n-collapse-item name="example">
        <template #header>
          <span style="font-size: 1.1rem; font-weight: 600;">💡 前端實際使用範例</span>
        </template>
        <div style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--text);">範例 1：主要營業項目（限 200 字）</h4>
          <pre style="margin: 0;">&lt;app-form-row label="主要營業項目"&gt;
  &lt;app-form-item
    :path="getWorkItemPath"
    :rule="[
      { required: saveType === 1, message: '請輸入營業項目' },
      { max: 200, message: '主要營業項目不可超過200個中文字' },
    ]"
  &gt;
    &lt;app-form-chinese-textarea 
      v-model:value="getWorkItem" 
      placeholder="營業項目" 
    /&gt;
    &lt;template #notice&gt;以條列式簡述之，限200個中文字以內&lt;/template&gt;
  &lt;/app-form-item&gt;
&lt;/app-form-row&gt;</pre>
        </div>

        <div style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--text);">範例 2：產品競爭力說明（限 600 字）</h4>
          <pre style="margin: 0;">&lt;app-form-row :label="false"&gt;
  &lt;app-form-item
    path="commerce.potentialDesc"
    :rule="[
      { required: saveType === 1, message: '請輸入產品競爭力說明' },
      { max: 600, message: '產品競爭力說明不可超過600個中文字' },
    ]"
  &gt;
    &lt;app-form-chinese-textarea 
      v-model:value="model.commerce.potentialDesc" 
      placeholder="產品競爭力說明" 
    /&gt;
    &lt;template #notice&gt;以條列式簡述之，限200個中文字以內&lt;/template&gt;
  &lt;/app-form-item&gt;
&lt;/app-form-row&gt;</pre>
        </div>

        <div style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--text);">範例 3：其他說明（非必填，限 200 字）</h4>
          <pre style="margin: 0;">&lt;app-form-item
  path="commerce.shareratioDesc"
  :rule="[{ max: 200, message: '其他地區市場佔有率說明不可超過200個中文字' }]"
&gt;
  &lt;app-form-chinese-textarea
    v-model:value="model.commerce.shareratioDesc"
    placeholder="其他地區市場佔有率說明"
  /&gt;
  &lt;template #notice&gt;以條列式簡述之，限200個中文字以內&lt;/template&gt;
&lt;/app-form-item&gt;</pre>
        </div>

        <div style="padding: 16px; background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0;">
          <h5 style="margin-bottom: 8px; color: #166534; font-weight: 600;">關鍵說明</h5>
          <ul style="color: #166534; line-height: 1.8; margin-left: 20px;">
            <li><code style="background: #dcfce7; padding: 2px 6px; border-radius: 4px;">:rule</code> - 驗證規則陣列</li>
            <li><code style="background: #dcfce7; padding: 2px 6px; border-radius: 4px;">required</code> - 必填驗證（通常依 saveType 動態判斷）</li>
            <li><code style="background: #dcfce7; padding: 2px 6px; border-radius: 4px;">max</code> - 最大字數限制</li>
            <li><code style="background: #dcfce7; padding: 2px 6px; border-radius: 4px;">message</code> - 錯誤提示訊息</li>
            <li><code style="background: #dcfce7; padding: 2px 6px; border-radius: 4px;">#notice slot</code> - 顯示輔助說明文字</li>
          </ul>
        </div>
      </n-collapse-item>
    </n-collapse>

    <!-- 常見長度規範 -->
    <div>
      <h3 style="font-size: 1.25rem; margin-bottom: 20px; color: var(--text);">📏 常見長度規範參考</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>欄位類型</th>
              <th>建議長度</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>標題（Title）</td>
              <td style="text-align: center;">50 字</td>
              <td>適合短標題、名稱</td>
            </tr>
            <tr>
              <td>摘要（Summary）</td>
              <td style="text-align: center;">200 字</td>
              <td>簡短描述、條列說明</td>
            </tr>
            <tr>
              <td>內容（Content）</td>
              <td style="text-align: center;">500 ~ 1000 字</td>
              <td>詳細描述、長文內容</td>
            </tr>
            <tr>
              <td>備註（Remark）</td>
              <td style="text-align: center;">200 ~ 500 字</td>
              <td>補充說明</td>
            </tr>
            <tr>
              <td>姓名（Name）</td>
              <td style="text-align: center;">20 ~ 50 字</td>
              <td>人名、公司名稱</td>
            </tr>
            <tr>
              <td>地址（Address）</td>
              <td style="text-align: center;">100 ~ 200 字</td>
              <td>完整地址資訊</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 後端驗證範例 -->
    <n-collapse style="margin-top: 24px;">
      <n-collapse-item name="backend">
        <template #header>
          <span style="font-size: 1.1rem; font-weight: 600;">🔧 後端驗證範例（Java）</span>
        </template>
        <pre style="margin: 0;">public class CommerceDTO {
    
    // 主要營業項目 - 最長 200 字
    @Size(max = 200, message = "主要營業項目不可超過200個中文字")
    private String workItem;
    
    // 主要獲利來源 - 最長 200 字
    @Size(max = 200, message = "主要獲利來源不可超過200個中文字")
    private String psource;
    
    // 產品競爭力說明 - 必填且最長 600 字
    @NotBlank(message = "請輸入產品競爭力說明")
    @Size(max = 600, message = "產品競爭力說明不可超過600個中文字")
    private String potentialDesc;
    
    // 其他說明 - 非必填，最長 200 字
    @Size(max = 200, message = "其他地區市場佔有率說明不可超過200個中文字")
    private String shareratioDesc;
}</pre>
        <div style="margin-top: 16px; padding: 12px; background: #dbeafe; border-radius: 6px;">
          <p style="color: #1e40af; font-size: 0.95rem; line-height: 1.7;">
            <strong>註：</strong>使用 <code style="background: #bfdbfe; padding: 2px 6px; border-radius: 4px;">@Size</code> 
            或 <code style="background: #bfdbfe; padding: 2px 6px; border-radius: 4px;">@Length</code> 註解，
            確保即使透過 Swagger 測試也無法寫入超長資料。
          </p>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script setup>
import { NCollapse, NCollapseItem } from 'naive-ui'
</script>
