import{o as d,c as p,a as s,b as a,w as l,u as o,N as i,d as t,e,f as r}from"./index-D9YKqNxO.js";const g={style:{padding:"20px 0"}},u={style:{"margin-bottom":"48px"}},m={style:{"margin-bottom":"48px"}},f={__name:"PaginationFormat",setup(c){return(b,n)=>(d(),p("div",null,[n[22]||(n[22]=s(`<p class="muted" style="margin-bottom:24px;">分頁功能採用關注點分離設計，分為 usePagination（邏輯層）和 AppPagination（展示層）兩個部分。</p><div style="margin-bottom:48px;"><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">🤝 前後端協作規範</h3><div style="margin-bottom:16px;padding:16px;background:#eff6ff;border-left:3px solid #3b82f6;border-radius:6px;"><p style="color:#1e40af;font-weight:600;margin-bottom:8px;">📌 Request 參數組成</p><ul style="color:#1e40af;line-height:1.8;margin:0;padding-left:20px;"><li><strong>固定參數</strong>：pageNo、pageSize（所有分頁 API 都需要）</li><li><strong>業務參數</strong>：typeId、keyword、startDate 等（視 API 功能需求而定，非必要）</li></ul></div><div class="grid" style="margin-bottom:24px;"><article class="card"><h5 style="margin-bottom:12px;font-size:1rem;color:#059669;">情境 A：只需分頁</h5><pre>POST /api/users/list

{
  &quot;pageNo&quot;: 1,
  &quot;pageSize&quot;: 15
}</pre><p style="margin-top:8px;color:var(--muted);font-size:0.9rem;">例如：取得所有使用者列表</p></article><article class="card"><h5 style="margin-bottom:12px;font-size:1rem;color:#2563eb;">情境 B：需查詢條件 + 分頁</h5><pre>POST /api/news/query

{
  &quot;typeId&quot;: 4,
  &quot;keyword&quot;: &quot;測試&quot;,
  &quot;pageNo&quot;: 1,
  &quot;pageSize&quot;: 15
}</pre><p style="margin-top:8px;color:var(--muted);font-size:0.9rem;">例如：根據條件搜尋新聞</p></article></div><div class="table-wrap" style="margin-bottom:32px;"><table><thead><tr><th>參數</th><th>型別</th><th>必填</th><th>說明</th><th>預設值</th></tr></thead><tbody><tr><td><code>pageNo</code></td><td>Integer</td><td>✅</td><td>頁碼（1-based，第一頁 = 1）</td><td>1</td></tr><tr><td><code>pageSize</code></td><td>Integer</td><td>✅</td><td>每頁筆數</td><td>15</td></tr><tr><td colspan="5" style="background:#f9fafb;font-weight:600;color:#6b7280;">業務參數（依 API 功能而定，選擇性）</td></tr><tr><td><code>typeId</code></td><td>Integer</td><td>❌</td><td>類別 ID（範例）</td><td>-</td></tr><tr><td><code>keyword</code></td><td>String</td><td>❌</td><td>搜尋關鍵字（範例）</td><td>-</td></tr><tr><td><code>startDate</code></td><td>String</td><td>❌</td><td>開始日期（範例）</td><td>-</td></tr></tbody></table></div><div class="grid"><article class="card"><h5 style="margin-bottom:12px;font-size:1rem;color:#059669;">回應格式</h5><pre>{
  &quot;content&quot;: [...],
  &quot;number&quot;: 1,
  &quot;size&quot;: 15,
  &quot;totalPages&quot;: 10,
  &quot;total&quot;: 150,
  &quot;offset&quot;: 0
}</pre></article><article class="card"><h5 style="margin-bottom:12px;font-size:1rem;color:#2563eb;">欄位說明</h5><div class="table-wrap"><table><thead><tr><th>欄位</th><th>型別</th><th>必填</th><th>說明</th></tr></thead><tbody><tr><td><code>content</code></td><td>Array</td><td>✅</td><td>資料陣列（空時為 []，不可為 null）</td></tr><tr><td><code>number</code></td><td>Integer</td><td>✅</td><td>當前頁碼（1-based，對應 request.pageNo）</td></tr><tr><td><code>size</code></td><td>Integer</td><td>✅</td><td>每頁筆數（對應 request.pageSize）</td></tr><tr><td><code>totalPages</code></td><td>Integer</td><td>✅</td><td>總頁數</td></tr><tr><td><code>total</code></td><td>Integer/Long</td><td>✅</td><td>總筆數</td></tr><tr><td><code>offset</code></td><td>Integer/Long</td><td>✅</td><td>起始索引 = (number - 1) × size</td></tr></tbody></table></div></article></div></div>`,2)),a(o(r),{style:{"margin-bottom":"32px"}},{default:l(()=>[a(o(i),{name:"frontend-guide"},{header:l(()=>[...n[0]||(n[0]=[t("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[t("span",{style:{"font-size":"1.3rem","font-weight":"700",color:"#059669"}},"💻 前端實作指引"),t("span",{style:{"font-size":"0.9rem",color:"#6b7280","font-weight":"normal"}},"（點擊展開查看 usePagination、AppPagination 使用方式）")],-1)])]),default:l(()=>[t("div",g,[n[15]||(n[15]=t("div",{style:{"margin-bottom":"32px",padding:"20px",background:"#f0f9ff","border-left":"4px solid #0ea5e9","border-radius":"8px"}},[t("h4",{style:{"margin-bottom":"12px",color:"#0c4a6e","font-size":"1.1rem"}},"📐 架構概述"),t("p",{style:{color:"#0c4a6e","line-height":"1.8","margin-bottom":"12px"}},[e(" 分頁功能採用 "),t("strong",null,"關注點分離（Separation of Concerns）"),e(" 設計模式，分為兩個層次： ")]),t("div",{style:{"margin-top":"16px",padding:"16px",background:"#e0f2fe","border-radius":"6px"}},[t("ul",{style:{color:"#0c4a6e","line-height":"1.8",margin:"0","padding-left":"20px"}},[t("li",null,[t("strong",null,"usePagination.js"),e("（邏輯層）：管理分頁狀態、處理 API 參數轉換、解析 API 回應")]),t("li",null,[t("strong",null,"AppPagination.vue"),e("（展示層）：渲染分頁按鈕、處理使用者點擊、發送 update:page 事件")])])])],-1)),n[16]||(n[16]=t("div",{style:{"margin-bottom":"48px"}},[t("h3",{style:{"font-size":"1.25rem","margin-bottom":"20px",color:"var(--text)"}},"🔧 usePagination Composable"),t("div",{class:"callout",style:{"margin-bottom":"20px"}},[t("p",{style:{"margin-bottom":"8px"}},[t("strong",null,"檔案位置："),t("code",{style:{background:"#f3f4f6",padding:"2px 6px","border-radius":"4px"}},"src/composables/usePagination.js")]),t("p",{style:{margin:"0"}},[t("strong",null,"功能："),e("提供分頁狀態管理和資料處理的可組合函數")])]),t("div",{class:"grid"},[t("article",{class:"card"},[t("h4",{style:{"margin-bottom":"12px","font-size":"1rem",color:"#2563eb"}},"回傳值"),t("pre",null,`{
  paginationModel,           // 分頁狀態物件
  updatePaginationPage,      // 更新頁碼函數
  mergePaginationParameter,  // 合併分頁參數到 API 請求
  extractPaginationContent,  // 從 API 回應中提取分頁資料
}`)]),t("article",{class:"card"},[t("h4",{style:{"margin-bottom":"12px","font-size":"1rem",color:"#059669"}},"paginationModel 結構"),t("pre",null,`{
  page: 1,           // 當前頁碼（起始值：1）
  pageSize: 15,      // 每頁筆數（預設：15）
  itemCount: 0,      // 總筆數
  pageCount: 0,      // 總頁數
  prefix: Function,  // 分頁前綴文字生成函數
}`)])])],-1)),n[17]||(n[17]=t("div",{style:{"margin-bottom":"48px"}},[t("h3",{style:{"font-size":"1.25rem","margin-bottom":"20px",color:"var(--text)"}},"📋 主要方法"),t("article",{class:"card",style:{"margin-bottom":"24px"}},[t("h4",{style:{"margin-bottom":"12px","font-size":"1rem",color:"#7c3aed"}},"1. mergePaginationParameter(parameter)"),t("p",{style:{"margin-bottom":"12px",color:"var(--muted)"}},"將分頁參數合併到 API 請求參數中"),t("div",{class:"grid"},[t("div",null,[t("p",{style:{"margin-bottom":"8px","font-weight":"600",color:"#059669"}},"輸入"),t("pre",null,"{ keyword: '測試' }")]),t("div",null,[t("p",{style:{"margin-bottom":"8px","font-weight":"600",color:"#2563eb"}},"輸出"),t("pre",null,`{
  keyword: '測試',
  pageNo: 1,      // 頁碼（從 1 開始）
  pageSize: 15    // 每頁筆數
}`)])])]),t("article",{class:"card"},[t("h4",{style:{"margin-bottom":"12px","font-size":"1rem",color:"#7c3aed"}},"2. extractPaginationContent(response)"),t("p",{style:{"margin-bottom":"12px",color:"var(--muted)"}},"從 API 回應中提取資料並更新分頁狀態"),t("div",{style:{"margin-bottom":"16px"}},[t("p",{style:{"margin-bottom":"8px","font-weight":"600"}},"支援兩種 API 回應格式："),t("div",{class:"grid"},[t("div",null,[t("p",{style:{"margin-bottom":"8px",color:"#059669"}},"✓ 格式 1（推薦）：使用 page/size"),t("pre",null,`{
  content: [...],      // 資料陣列
  page: 1,            // 當前頁
  size: 15,           // 每頁筆數
  totalPages: 10,     // 總頁數
  total: 150,         // 總筆數
  offset: 0           // 起始索引（選用）
}`)]),t("div",null,[t("p",{style:{"margin-bottom":"8px",color:"#2563eb"}},"✓ 格式 2：使用 number/pageSize"),t("pre",null,`{
  content: [...],      // 資料陣列
  number: 1,          // 當前頁（替代 page）
  pageSize: 15,       // 每頁筆數（替代 size）
  totalPages: 10,     // 總頁數
  total: 150,         // 總筆數
  offset: 0           // 起始索引（選用）
}`)])])]),t("div",{style:{padding:"16px",background:"#f0fdf4","border-radius":"6px","border-left":"3px solid #10b981"}},[t("p",{style:{margin:"0",color:"#166534"}},[t("strong",null,"自動處理："),e("提取 content 陣列並更新 paginationModel、為每筆資料附加 $$RowNumber（序號）和 $$RowIndex（索引） ")])])])],-1)),n[18]||(n[18]=t("div",{style:{"margin-bottom":"48px"}},[t("h3",{style:{"font-size":"1.25rem","margin-bottom":"20px",color:"var(--text)"}},"🎨 AppPagination 元件"),t("div",{class:"callout",style:{"margin-bottom":"20px"}},[t("p",{style:{"margin-bottom":"8px"}},[t("strong",null,"檔案位置："),t("code",{style:{background:"#f3f4f6",padding:"2px 6px","border-radius":"4px"}},"src/components/AppPagination.vue")]),t("p",{style:{margin:"0"}},[t("strong",null,"功能："),e("符合 WCAG AA 標準的分頁 UI 元件，用於替換 Naive UI 的 n-pagination")])]),t("div",{class:"table-wrap",style:{"margin-bottom":"24px"}},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Props"),t("th",null,"類型"),t("th",null,"必填"),t("th",null,"預設值"),t("th",null,"說明")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"page")]),t("td",null,"Number"),t("td",null,"✅"),t("td",null,"-"),t("td",null,"當前頁碼（1-based）")]),t("tr",null,[t("td",null,[t("code",null,"total")]),t("td",null,"Number"),t("td",null,"✅"),t("td",null,"-"),t("td",null,"總筆數")]),t("tr",null,[t("td",null,[t("code",null,"pageSize")]),t("td",null,"Number"),t("td",null,"❌"),t("td",null,"10"),t("td",null,"每頁筆數")]),t("tr",null,[t("td",null,[t("code",null,"maxPageButtons")]),t("td",null,"Number"),t("td",null,"❌"),t("td",null,"7"),t("td",null,"最多顯示幾個頁碼按鈕")])])])]),t("div",{class:"table-wrap",style:{"margin-bottom":"24px"}},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Events"),t("th",null,"參數"),t("th",null,"說明")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"update:page")]),t("td",null,"(page: Number)"),t("td",null,"當使用者點擊頁碼時觸發")])])])]),t("div",{style:{padding:"16px",background:"#eff6ff","border-radius":"6px","border-left":"3px solid #3b82f6"}},[t("p",{style:{"margin-bottom":"8px",color:"#1e40af","font-weight":"600"}},"✨ 無障礙特性"),t("ul",{style:{color:"#1e40af","line-height":"1.8",margin:"0","padding-left":"20px"}},[t("li",null,"aria-label：每個按鈕都有明確標籤"),t("li",null,'aria-current="page"：標示當前頁'),t("li",null,"鍵盤導航：支援 Tab 鍵切換"),t("li",null,"視覺提示：當前頁高亮、disabled 狀態明確"),t("li",null,"螢幕閱讀器友善：提供完整資訊")])]),t("div",{style:{"margin-top":"24px",padding:"16px",background:"#fef3c7","border-left":"3px solid #f59e0b","border-radius":"6px"}},[t("p",{style:{"margin-bottom":"8px",color:"#92400e","font-weight":"600"}},"⚠️ 重要觀念：Props ≠ API Request 參數"),t("div",{style:{color:"#92400e","line-height":"1.8"}},[t("p",{style:{"margin-bottom":"12px"}},[e("AppPagination 是純 UI 元件，只負責顯示分頁介面，"),t("strong",null,"不負責 API 通訊"),e("。")]),t("ul",{style:{margin:"0","padding-left":"20px"}},[t("li",null,[t("strong",null,"元件 Props（page, pageSize）"),e("：只是 Vue 元件內部的命名，用於接收資料來顯示 UI")]),t("li",null,[t("strong",null,"API Request 參數"),e("：由 usePagination 的 mergePaginationParameter 產生，實際發送的是 "),t("code",{style:{background:"#fde68a",padding:"2px 6px","border-radius":"4px"}},"pageNo"),e(" 和 "),t("code",{style:{background:"#fde68a",padding:"2px 6px","border-radius":"4px"}},"pageSize")])]),t("div",{style:{"margin-top":"12px",padding:"12px",background:"#fde68a","border-radius":"4px"}},[t("p",{style:{margin:"0","font-size":"0.9rem"}},[t("strong",null,"簡單來說："),e("AppPagination 的 "),t("code",null,":page"),e(" prop 只是傳資料給 UI 元件，與後端 API 參數無關。 ")])])])])],-1)),t("div",u,[n[5]||(n[5]=t("h3",{style:{"font-size":"1.25rem","margin-bottom":"20px",color:"var(--text)"}},"💡 使用方式",-1)),a(o(r),null,{default:l(()=>[a(o(i),{name:"method1"},{header:l(()=>[...n[1]||(n[1]=[t("span",{style:{"font-size":"1.05rem","font-weight":"600"}},"方式一：單獨使用 AppPagination",-1)])]),default:l(()=>[n[2]||(n[2]=t("div",{style:{padding:"16px 0"}},[t("p",{style:{"margin-bottom":"16px",color:"var(--muted)"}},"適用於自訂列表佈局的情況"),t("pre",null,`<template>
  <div>
    <!-- 自訂的列表 -->
    <div v-for="item in dataList" :key="item.id">
      {{ item.title }}
    </div>

    <!-- 分頁元件 -->
    <app-pagination
      v-model:page="paginationModel.page"
      :total="paginationModel.itemCount"
      :page-size="paginationModel.pageSize"
    />
  </div>
</template>

<script setup>
import { useGetDataList } from '@/api/example'

const { paginationModel, mergePaginationParameter, extractPaginationContent } = usePagination()

const queryParams = computed(() => mergePaginationParameter({}))
const { data: apiResponse } = useGetDataList(queryParams)
const dataList = computed(() => extractPaginationContent(apiResponse.value))
<\/script>`)],-1))]),_:1}),a(o(i),{name:"method2"},{header:l(()=>[...n[3]||(n[3]=[t("span",{style:{"font-size":"1.05rem","font-weight":"600"}},"方式二：搭配 AppTable 使用 ✅ 推薦",-1)])]),default:l(()=>[n[4]||(n[4]=t("div",{style:{padding:"16px 0"}},[t("p",{style:{"margin-bottom":"16px",color:"var(--muted)"}},"適用於需要表格展示的情況，分頁會自動整合在表格下方"),t("pre",null,`<template>
  <app-table
    striped
    single-line
    accessible
    :pagination="paginationModel"
    @update:page="page => (paginationModel.page = page)"
  >
    <tbody>
      <tr v-for="item in dataList" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.date }}</td>
      </tr>
    </tbody>
  </app-table>
</template>

<script setup>
import { useGetDataList } from '@/api/example'

const { paginationModel, mergePaginationParameter, extractPaginationContent } = usePagination()

const queryParams = computed(() => mergePaginationParameter({}))
const { data: apiResponse } = useGetDataList(queryParams)
const dataList = computed(() => extractPaginationContent(apiResponse.value))
<\/script>`),t("div",{style:{"margin-top":"16px",padding:"16px",background:"#fef3c7","border-left":"3px solid #f59e0b","border-radius":"4px"}},[t("p",{style:{color:"#92400e","font-weight":"600","margin-bottom":"8px"}},"⚠️ AppTable 重點說明"),t("ul",{style:{color:"#92400e","line-height":"1.8",margin:"0","padding-left":"20px"}},[t("li",null,[e("必須加上 "),t("code",{style:{background:"#fde68a",padding:"2px 6px","border-radius":"4px"}},"accessible"),e(" prop（public 頁面使用無障礙版本）")]),t("li",null,[e("傳入 "),t("code",{style:{background:"#fde68a",padding:"2px 6px","border-radius":"4px"}},':pagination="paginationModel"'),e("（將整個分頁狀態傳入）")]),t("li",null,[e("監聽 "),t("code",{style:{background:"#fde68a",padding:"2px 6px","border-radius":"4px"}},"@update:page"),e(" 事件並更新 paginationModel.page")]),t("li",null,[t("strong",null,"如果忘記監聽 @update:page 事件，分頁點擊會沒有反應！")])])])],-1))]),_:1})]),_:1})]),t("div",m,[n[14]||(n[14]=t("h3",{style:{"font-size":"1.25rem","margin-bottom":"20px",color:"var(--text)"}},"📝 完整範例",-1)),a(o(r),null,{default:l(()=>[a(o(i),{name:"example1"},{header:l(()=>[...n[6]||(n[6]=[t("span",{style:{"font-size":"1.05rem","font-weight":"600"}},"搭配搜尋功能（AppTable）",-1)])]),default:l(()=>[n[7]||(n[7]=t("pre",{style:{margin:"0"}},`<template>
  <div>
    <!-- 搜尋表單 -->
    <div class="mb-4">
      <input v-model="searchModel.keyword" placeholder="請輸入關鍵字" />
      <button @click="handleSearch">搜尋</button>
      <button @click="handleReset">清除</button>
    </div>

    <!-- 表格 + 分頁 -->
    <app-table
      striped
      single-line
      accessible
      :pagination="paginationModel"
      @update:page="page => (paginationModel.page = page)"
    >
      <tbody>
        <tr v-for="item in dataList" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.date }}</td>
        </tr>
      </tbody>
    </app-table>
  </div>
</template>

<script setup>
import { cloneDeep } from 'lodash-es'
import { useGetNewsList } from '@/api/news'

// 搜尋條件
const searchModel = ref({
  keyword: '',
})

// 實際送出的查詢參數
const queryParams = ref({})

// 分頁管理
const { paginationModel, mergePaginationParameter, extractPaginationContent } = usePagination()

// 合併分頁參數
const apiParams = computed(() => mergePaginationParameter(queryParams.value))

// 呼叫 API
const { data: apiResponse } = useGetNewsList(apiParams)

// 提取資料
const dataList = computed(() => extractPaginationContent(apiResponse.value))

// 執行搜尋
const handleSearch = () => {
  queryParams.value = cloneDeep(searchModel.value)
}

// 清除條件
const handleReset = () => {
  searchModel.value = { keyword: '' }
  queryParams.value = {}
}
<\/script>`,-1))]),_:1}),a(o(i),{name:"example2"},{header:l(()=>[...n[8]||(n[8]=[t("span",{style:{"font-size":"1.05rem","font-weight":"600"}},"自訂每頁筆數",-1)])]),default:l(()=>[n[9]||(n[9]=t("pre",{style:{margin:"0"}},`<script setup>
// 初始化時設定每頁 20 筆
const { paginationModel } = usePagination({
  pageSize: 20
})
<\/script>

<template>
  <app-table
    accessible
    :pagination="paginationModel"
    @update:page="page => (paginationModel.page = page)"
  >
    <!-- 表格內容 -->
  </app-table>
</template>`,-1))]),_:1}),a(o(i),{name:"example3"},{header:l(()=>[...n[10]||(n[10]=[t("span",{style:{"font-size":"1.05rem","font-weight":"600"}},"調整最大顯示按鈕數",-1)])]),default:l(()=>[n[11]||(n[11]=t("pre",{style:{margin:"0"}},`<template>
  <!-- 最多顯示 5 個頁碼按鈕（預設 7 個） -->
  <app-pagination
    v-model:page="paginationModel.page"
    :total="paginationModel.itemCount"
    :page-size="paginationModel.pageSize"
    :max-page-buttons="5"
  />
</template>

<!-- 顯示效果：< 1 ... 3 4 5 ... 19 > 共 279 筆資料 -->`,-1))]),_:1}),a(o(i),{name:"example4"},{header:l(()=>[...n[12]||(n[12]=[t("span",{style:{"font-size":"1.05rem","font-weight":"600"}},"換頁時捲動到頂部",-1)])]),default:l(()=>[n[13]||(n[13]=t("pre",{style:{margin:"0"}},`<script setup>
import { useAppScroll } from '@/composables/useAppScroll'

const { scrollToTop } = useAppScroll()
const { paginationModel } = usePagination()

// 監聽 page 變化，換頁時自動捲動到頂部
watchEffect(() => {
  if (paginationModel.value.page) {
    scrollToTop()
  }
})
<\/script>`,-1))]),_:1})]),_:1})]),n[19]||(n[19]=t("div",null,[t("h3",{style:{"font-size":"1.25rem","margin-bottom":"20px",color:"var(--text)"}},"❓ 常見問題"),t("div",{class:"callout",style:{"margin-bottom":"16px"}},[t("p",{style:{"font-weight":"600","margin-bottom":"8px"}},"Q1: 應該使用哪種方式？"),t("p",{style:{margin:"0"}},[t("strong",{style:{color:"#059669"}},"有表格展示"),e(" → 使用方式二（AppTable + pagination prop）✅ 推薦"),t("br"),t("strong",{style:{color:"#2563eb"}},"自訂列表佈局"),e(" → 使用方式一（單獨 AppPagination） ")])]),t("div",{class:"callout",style:{"margin-bottom":"16px"}},[t("p",{style:{"font-weight":"600","margin-bottom":"8px"}},"Q2: 為什麼 AppTable 的分頁點擊沒反應？"),t("p",{style:{"margin-bottom":"12px"}},[e("忘記監聽 "),t("code",{style:{background:"#f3f4f6",padding:"2px 6px","border-radius":"4px"}},"@update:page"),e(" 事件！")]),t("div",{class:"grid"},[t("div",null,[t("p",{style:{color:"#dc2626","margin-bottom":"8px"}},"❌ 錯誤：沒有監聽事件"),t("pre",null,'<app-table :pagination="paginationModel">')]),t("div",null,[t("p",{style:{color:"#059669","margin-bottom":"8px"}},"✓ 正確：完整的事件監聽"),t("pre",null,`<app-table
  :pagination="paginationModel"
  @update:page="page => (paginationModel.page = page)"
>`)])])]),t("div",{class:"callout",style:{"margin-bottom":"16px"}},[t("p",{style:{"font-weight":"600","margin-bottom":"8px"}},"Q3: AppTable 的 accessible prop 是什麼？"),t("p",{style:{"margin-bottom":"8px"}},"控制使用哪一種分頁元件："),t("ul",{style:{margin:"0","padding-left":"20px","line-height":"1.8"}},[t("li",null,[t("code",{style:{background:"#f3f4f6",padding:"2px 6px","border-radius":"4px"}},"accessible"),e(" - 使用無障礙版本的 AppPagination（public 頁面）")]),t("li",null,[e("不加或 "),t("code",{style:{background:"#f3f4f6",padding:"2px 6px","border-radius":"4px"}},"accessible=false"),e(" - 使用 Naive UI 的 n-pagination（admin 頁面）")])])]),t("div",{class:"callout",style:{"margin-bottom":"16px"}},[t("p",{style:{"font-weight":"600","margin-bottom":"8px"}},"Q4: 為什麼要分成兩個部分（usePagination + AppPagination）？"),t("p",{style:{"margin-bottom":"8px"}},"遵循 Vue 3 Composition API 的最佳實踐："),t("ul",{style:{margin:"0","padding-left":"20px","line-height":"1.8"}},[t("li",null,[t("strong",null,"usePagination"),e("：可重複使用的邏輯（純 JavaScript，可用於不同的 UI）")]),t("li",null,[t("strong",null,"AppPagination"),e("：可自訂的展示層（Vue 元件，可替換成其他 UI）")])])]),t("div",{class:"callout"},[t("p",{style:{"font-weight":"600","margin-bottom":"8px"}},"Q5: API 回應格式不符合怎麼辦？"),t("div",{style:{padding:"12px",background:"#fef2f2","border-left":"3px solid #dc2626","border-radius":"4px","margin-bottom":"12px"}},[t("p",{style:{color:"#991b1b",margin:"0"}},[t("strong",null,"⚠️ 重要："),e("後端應該遵循統一的分頁格式規範。如果發現格式不符合，請"),t("strong",null,"優先回報後端團隊修正"),e("，而不是前端自行轉換。 ")])]),t("p",{style:{"margin-bottom":"8px"}},[t("strong",null,"正常情況：")]),t("ul",{style:{"margin-bottom":"12px","padding-left":"20px","line-height":"1.8"}},[t("li",null,"後端已統一使用標準格式（content、number、size、totalPages、total、offset）"),t("li",null,"前端 extractPaginationContent 會自動解析"),t("li",null,"不需要額外處理")]),t("p",{style:{"margin-bottom":"8px"}},[t("strong",null,"發現不符合的 API 時：")]),t("ol",{style:{"margin-bottom":"12px","padding-left":"20px","line-height":"1.8"}},[t("li",null,[t("strong",null,"回報後端"),e("：請後端團隊調整該 API 為標準格式")]),t("li",null,[t("strong",null,"記錄問題"),e("：將不符合的 API 列入待修正清單")]),t("li",null,[t("strong",null,"臨時方案"),e("（不推薦）：前端暫時轉換格式")])]),t("details",{style:{"margin-top":"12px"}},[t("summary",{style:{cursor:"pointer",color:"#6b7280","font-size":"0.9rem"}},"臨時轉換方案（僅供緊急使用，不建議長期保留）"),t("pre",{style:{"margin-top":"8px"}},`const { data: apiResponse } = useGetDataList(apiParams)

const dataList = computed(() => {
  if (!apiResponse.value) return []
  
  // ⚠️ 臨時方案：手動轉換格式
  // TODO: 請後端修正 API 格式後移除此段程式碼
  paginationModel.value.itemCount = apiResponse.value.totalItems
  paginationModel.value.pageCount = apiResponse.value.totalPages
  
  return apiResponse.value.items
})

// ⚠️ 記得在程式碼中加上 TODO，提醒未來移除`)])])],-1))])]),_:1})]),_:1}),a(o(r),null,{default:l(()=>[a(o(i),{name:"backend-guide"},{header:l(()=>[...n[20]||(n[20]=[t("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[t("span",{style:{"font-size":"1.3rem","font-weight":"700",color:"#dc2626"}},"⚙️ 後端實作指引"),t("span",{style:{"font-size":"0.9rem",color:"#6b7280","font-weight":"normal"}},"（點擊展開查看 Pagination<T> 實作規範）")],-1)])]),default:l(()=>[n[21]||(n[21]=t("div",{style:{padding:"20px 0"}},[t("div",{style:{"margin-bottom":"32px",padding:"20px",background:"#fef3c7","border-left":"4px solid #f59e0b","border-radius":"8px"}},[t("h4",{style:{"margin-bottom":"12px",color:"#92400e","font-size":"1.1rem"}},"📌 統一規範"),t("p",{style:{color:"#92400e","line-height":"1.8","margin-bottom":"12px"}},[e(" 本專案統一採用以下兩項"),t("strong",null,"強制規定"),e("，其餘 Service / Repository 的實作方式不限制： ")]),t("ul",{style:{color:"#92400e","line-height":"1.8",margin:"0","padding-left":"20px"}},[t("li",null,[t("strong",null,"Request："),e("含有分頁參數的 Request 物件，一律繼承 "),t("code",{style:{background:"#fde68a",padding:"2px 6px","border-radius":"4px"}},"DefaultPageParams")]),t("li",null,[t("strong",null,"Response："),e("分頁查詢的回應，一律回傳 "),t("code",{style:{background:"#fde68a",padding:"2px 6px","border-radius":"4px"}},"Pagination<T>")])])]),t("div",{style:{"margin-bottom":"32px"}},[t("h4",{style:{"font-size":"1.1rem","margin-bottom":"16px",color:"#7c3aed"}},"1. 核心類別說明"),t("div",{style:{"margin-bottom":"20px"}},[t("h5",{style:{"font-size":"1rem","margin-bottom":"12px",color:"#059669"}},"Request 端"),t("div",{class:"table-wrap"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"類別"),t("th",null,"路徑"),t("th",null,"說明")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"PageParams")]),t("td",null,"moi.rdss.platform.paging.PageParams"),t("td",null,"分頁參數介面，定義 getPageNo() / getPageSize()")]),t("tr",null,[t("td",null,[t("code",null,"DefaultPageParams")]),t("td",null,"moi.rdss.platform.paging.DefaultPageParams"),t("td",null,"分頁參數基礎類，預設 pageNo=1、pageSize=10")])])])])]),t("div",{style:{"margin-bottom":"20px"}},[t("h5",{style:{"font-size":"1rem","margin-bottom":"12px",color:"#2563eb"}},"Response 端"),t("div",{class:"table-wrap"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"類別"),t("th",null,"路徑"),t("th",null,"說明")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"Pagination<T>")]),t("td",null,"moi.rdss.platform.paging.Pagination"),t("td",null,"統一分頁回應物件（自訂），所有分頁 API 均回傳此型別")])])])])]),t("div",null,[t("h5",{style:{"font-size":"1rem","margin-bottom":"12px",color:"#7c3aed"}},"工具類（選用）"),t("div",{class:"table-wrap"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"類別"),t("th",null,"方法"),t("th",null,"說明")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"RequestUtils")]),t("td",null,"getPageRequest(PageParams)"),t("td",null,"將 Request 轉為 Spring 的 PageRequest，自動處理頁碼從 1 → 0 的轉換")])])])])])]),t("div",{style:{"margin-bottom":"32px"}},[t("h4",{style:{"font-size":"1.1rem","margin-bottom":"16px",color:"#7c3aed"}},"2. Request：繼承 DefaultPageParams"),t("div",{class:"callout",style:{"margin-bottom":"16px",background:"#dcfce7","border-color":"#86efac"}},[t("p",{style:{color:"#166534",margin:"0"}},[t("strong",null,"✅ 強制規範："),e("需要分頁的 Request 物件，一律繼承 "),t("code",{style:{background:"#bbf7d0",padding:"2px 6px","border-radius":"4px"}},"DefaultPageParams"),e("，不可自行重複定義 pageNo / pageSize 欄位。 ")])]),t("article",{class:"card"},[t("h5",{style:{"margin-bottom":"12px","font-size":"1rem"}},"正確範例"),t("pre",null,`@Data
@SuperBuilder
@NoArgsConstructor
public class FooListReq extends DefaultPageParams {

    @Schema(description = "名稱關鍵字")
    private String name;

    @Schema(description = "狀態")
    private String status;
}`)]),t("div",{class:"callout",style:{"margin-top":"16px"}},[t("p",{style:{"margin-bottom":"8px","font-weight":"600"}},"DefaultPageParams 已內建以下欄位："),t("div",{class:"table-wrap"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"欄位"),t("th",null,"預設值"),t("th",null,"說明")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"pageNo")]),t("td",null,"1"),t("td",null,"前端頁碼從 1 開始")]),t("tr",null,[t("td",null,[t("code",null,"pageSize")]),t("td",null,"10"),t("td",null,"每頁預設 10 筆")])])])])])]),t("div",{style:{"margin-bottom":"32px"}},[t("h4",{style:{"font-size":"1.1rem","margin-bottom":"16px",color:"#7c3aed"}},"3. Response：回傳 Pagination<T>"),t("div",{class:"callout",style:{"margin-bottom":"16px",background:"#dcfce7","border-color":"#86efac"}},[t("p",{style:{color:"#166534",margin:"0"}},[t("strong",null,"✅ 強制規範："),e("所有分頁查詢的 API 回應，一律包裝為 "),t("code",{style:{background:"#bbf7d0",padding:"2px 6px","border-radius":"4px"}},"Pagination<T>"),e("，不可直接回傳 Spring 的 "),t("code",{style:{background:"#bbf7d0",padding:"2px 6px","border-radius":"4px"}},"Page<T>"),e(" 給前端。 ")])]),t("article",{class:"card"},[t("h5",{style:{"margin-bottom":"12px","font-size":"1rem"}},"Pagination<T> JSON 回應格式"),t("pre",null,`{
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
}`)])]),t("div",{style:{"margin-bottom":"32px"}},[t("h4",{style:{"font-size":"1.1rem","margin-bottom":"16px",color:"#7c3aed"}},"4. Service / Repository 實作彈性說明"),t("div",{class:"callout",style:{"margin-bottom":"16px"}},[t("p",{style:{"margin-bottom":"8px","font-weight":"600"}},"Service 與 Repository 的實作方式依 SQL 複雜程度自行決定，沒有強制標準寫法：")]),t("div",{class:"table-wrap"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"情境"),t("th",null,"Repository 回傳"),t("th",null,"Service 最終組裝")])]),t("tbody",null,[t("tr",null,[t("td",null,"簡單查詢，條件單純"),t("td",null,[e("Spring Data JPA 的 "),t("code",null,"Page<Entity>")]),t("td",null,[e("轉換後包裝成 "),t("code",null,"Pagination<T>")])]),t("tr",null,[t("td",null,"複雜 SQL，需自組查詢"),t("td",null,[t("code",null,"Page<Entity>"),e(" 或 "),t("code",null,"List<Entity>"),e(" 皆可")]),t("td",null,[e("轉換後包裝成 "),t("code",null,"Pagination<T>")])])])])]),t("div",{style:{"margin-top":"16px",padding:"16px",background:"#eff6ff","border-left":"3px solid #3b82f6","border-radius":"6px"}},[t("p",{style:{color:"#1e40af",margin:"0"}},[t("strong",null,"關鍵原則："),e("不論 Service / Repository 內部怎麼實作，最終在 Controller 回傳給前端的格式一律是 "),t("code",{style:{background:"#dbeafe",padding:"2px 6px","border-radius":"4px"}},"Pagination<T>"),e("，確保前端收到的分頁格式固定一致。 ")])])]),t("div",{style:{"margin-bottom":"32px"}},[t("h4",{style:{"font-size":"1.1rem","margin-bottom":"16px",color:"#7c3aed"}},"5. Pagination<T> 常用建構方式"),t("div",{class:"callout",style:{"margin-bottom":"16px"}},[t("p",{style:{margin:"0"}},"實作時依情境選擇適合的建構子，以下為常見用法供參考：")]),t("article",{class:"card"},[t("h5",{style:{"margin-bottom":"12px","font-size":"1rem"}},"常見建構方式"),t("pre",null,`// 搭配 Spring Data JPA 的 Page<Entity> 使用（最常見）
return new Pagination<>(dtos, pageable, page.getTotalElements());

// 手動指定分頁資訊（複雜 SQL / Native SQL）
return new Pagination<>(dtos, pageNumber, pageSize, total);

// 附加額外欄位（如統計數字、摘要）
Pagination<FooDto> result = new Pagination<>(dtos, pageable, total);
result.addExtra("totalAmount", 99999L);
return result;

// 從現有 Pagination 轉型
return existingPagination.map(entity -> convertToDto(entity));`)]),t("div",{style:{"margin-top":"16px",padding:"16px",background:"#fef3c7","border-left":"3px solid #f59e0b","border-radius":"6px"}},[t("p",{style:{color:"#92400e",margin:"0"}},[t("strong",null,"⚠️ 注意："),e("Spring Data JPA 的頁碼從 0 開始，前端傳入的 pageNo 從 1 開始。可使用 "),t("code",{style:{background:"#fde68a",padding:"2px 6px","border-radius":"4px"}},"RequestUtils.getPageRequest(req)"),e(" 自動轉換，或自行處理 -1 的計算。 ")])])]),t("div",{style:{"margin-bottom":"32px"}},[t("h4",{style:{"font-size":"1.1rem","margin-bottom":"16px",color:"#7c3aed"}},"6. 禁止事項（Do NOT）"),t("div",{class:"table-wrap"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{background:"#fee"}},"❌ 禁止"),t("th",{style:{background:"#f0fdf4"}},"✅ 應改為")])]),t("tbody",null,[t("tr",null,[t("td",null,[e("回傳 Spring 的 "),t("code",null,"Page<T>"),e(" 給前端")]),t("td",null,[e("回傳 "),t("code",null,"Pagination<T>")])]),t("tr",null,[t("td",null,"Request 物件自行重複定義 pageNo / pageSize 欄位"),t("td",null,[e("繼承 "),t("code",null,"DefaultPageParams")])])])])])]),t("div",null,[t("h4",{style:{"font-size":"1.1rem","margin-bottom":"16px",color:"#7c3aed"}},"7. 快速對照表"),t("div",{class:"table-wrap"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"層次"),t("th",null,"Request 型別"),t("th",null,"Response 型別"),t("th",null,"備註")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("strong",null,"Controller")]),t("td",null,[t("code",null,"XxxReq extends DefaultPageParams")]),t("td",null,[t("code",null,"ResponseEntity<Pagination<XxxDto>>")]),t("td",null,"強制規範")]),t("tr",null,[t("td",null,[t("strong",null,"Service")]),t("td",null,"由 PG 自行決定"),t("td",null,[t("code",null,"Pagination<XxxDto>")]),t("td",null,"強制規範")]),t("tr",null,[t("td",null,[t("strong",null,"Repository")]),t("td",null,"由 PG 自行決定"),t("td",null,[t("code",null,"Page<T>"),e(" 或 "),t("code",null,"List<T>"),e(" 皆可")]),t("td",null,"依 SQL 複雜度決定")])])])])])],-1))]),_:1})]),_:1})]))}};export{f as default};
