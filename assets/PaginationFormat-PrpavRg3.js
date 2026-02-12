import{o as l,c as s,a as p,b as t,w as e,u as a,N as i,d as o,e as r}from"./index-DA_ol711.js";const c={__name:"PaginationFormat",setup(d){return(u,n)=>(l(),s("div",null,[n[4]||(n[4]=p(`<p class="muted" style="margin-bottom:24px;">前後端分頁參數與回應結構的統一規範。</p><div style="margin-bottom:48px;"><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">🔍 查詢時（前端 → 後端）</h3><div class="grid"><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#059669;">前端送出參數</h4><p style="margin-bottom:12px;color:var(--muted);">使用 <code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">mergePaginationParameter</code> 方法合併：</p><pre>{
  &quot;page&quot;: 1,        // 當前頁碼（從 1 開始）
  &quot;size&quot;: 15,       // 每頁筆數
  ...其他查詢參數
}</pre></article><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#2563eb;">後端接收規範</h4><p style="margin-bottom:16px;color:var(--muted);">後端需接收以下參數：</p><ul><li><code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">page</code> - 頁碼（從 1 開始）</li><li><code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">size</code> - 每頁筆數</li><li>其他業務查詢條件</li></ul></article></div></div><div style="margin-bottom:48px;"><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">📦 回應時（後端 → 前端）</h3><div class="grid"><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#2563eb;">後端回傳結構</h4><p style="margin-bottom:12px;color:var(--muted);">必要欄位：</p><pre>{
  &quot;content&quot;: [...],    // 資料陣列
  &quot;number&quot;: 1,         // 當前頁碼
  &quot;size&quot;: 15,          // 每頁筆數
  &quot;total&quot;: 35,         // 總筆數
  &quot;offset&quot;: 0          // 位移量（選填）
}</pre></article><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#059669;">前端處理方式</h4><p style="margin-bottom:12px;color:var(--muted);">使用 <code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">extractPaginationContent</code> 自動解析：</p><ul><li>提取 <code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">content</code> 資料陣列</li><li>自動計算並附加 <code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">$$RowNumber</code>（序號）</li><li>自動附加 <code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">$$RowIndex</code>（索引）</li><li>更新分頁控制器狀態</li></ul></article></div></div>`,3)),t(a(r),{style:{"margin-bottom":"24px"}},{default:e(()=>[t(a(i),{name:"component"},{header:e(()=>[...n[0]||(n[0]=[o("span",{style:{"font-size":"1.1rem","font-weight":"600"}},"📄 分頁元件完整程式碼",-1)])]),default:e(()=>[n[1]||(n[1]=o("pre",{style:{margin:"0"}},`import { toValue } from '@vueuse/core'
import { cloneDeep, forEach, get, isNil, map, pick } from 'lodash-es'

// 預設分頁初始值
const defaultInitialModel = {
  page: 1,
  pageSize: 15,
  itemCount: 0,
}
const defaultPaginationModelKeys = Object.keys(defaultInitialModel)

/**
 * 分頁管理 Composable
 * @param {Object} initialValue - 初始化參數（可覆蓋 pageSize 等預設值）
 * @returns {Object} 分頁相關方法與狀態
 */
export const usePagination = initialValue => {
  const showPrefix = ref(false)
  
  // 合併初始化參數
  const initialModel = Object.assign(
    {},
    {
      // 分頁前綴文字（顯示於分頁器上方）
      prefix: ({ page, pageCount, itemCount }) => {
        if (showPrefix.value) {
          return itemCount > 0 
            ? \`目前顯示第\${page}頁，共有\${pageCount}頁\${itemCount}筆資料 \` 
            : '共有0筆資料'
        }
        return ''
      },
    },
    defaultInitialModel,
    pick(toValue(initialValue), defaultPaginationModelKeys),
  )
  const paginationModel = ref(initialModel)

  /**
   * 更新當前頁碼
   * @param {Number} currentPage - 新的頁碼
   */
  const updatePaginationPage = currentPage => {
    paginationModel.value.page = currentPage
  }

  /**
   * 合併分頁參數到查詢條件中
   * @param {Object} parameter - 其他查詢參數
   * @returns {Object} 合併後的查詢物件（包含 page 和 size）
   */
  const mergePaginationParameter = parameter => {
    const paginationValue = toValue(paginationModel)
    return Object.assign(
      {},
      {
        page: paginationValue.page,
        size: paginationValue.pageSize,
      },
      toValue(parameter),
    )
  }

  /**
   * 重置分頁狀態為初始值
   */
  const resetPaginationModel = () => {
    forEach(defaultPaginationModelKeys, key => {
      paginationModel.value[key] = defaultInitialModel[key]
    })
  }

  /**
   * 從後端回應中提取並處理分頁資料
   * @param {Object} paginationWrap - 後端回傳的分頁包裝物件
   * @returns {Array} 處理後的資料陣列（附加 $$RowNumber 和 $$RowIndex）
   */
  const extractPaginationContent = paginationWrap => {
    const value = toValue(paginationWrap)
    if (isNil(value)) {
      return []
    }
    
    // 深拷貝資料陣列
    const content = cloneDeep(get(value, 'content'))
    const offset = (value?.offset || 0) + 1
    
    // 為每筆資料附加序號和索引
    const list = map(content, (item, index) => {
      const safe = item ?? {}
      safe.$$RowNumber = index + offset  // 全局序號（跨頁）
      safe.$$RowIndex = index            // 當前頁索引
      return safe
    })
    
    showPrefix.value = !isNil(content)
    
    // 更新分頁模型狀態
    if (list.length > 0) {
      paginationModel.value.page = value.number
      paginationModel.value.pageSize = value.size
      paginationModel.value.itemCount = value.total
    } else {
      resetPaginationModel()
    }
    
    return list
  }

  return {
    paginationModel,           // 分頁狀態物件
    updatePaginationPage,      // 更新頁碼
    mergePaginationParameter,  // 合併分頁參數
    extractPaginationContent,  // 提取分頁資料
    resetPaginationModel,      // 重置分頁
  }
}`,-1))]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(i),{name:"example"},{header:e(()=>[...n[2]||(n[2]=[o("span",{style:{"font-size":"1.1rem","font-weight":"600"}},"💡 使用範例",-1)])]),default:e(()=>[n[3]||(n[3]=o("pre",{style:{margin:"0"}},`// 1. 初始化分頁（可自訂每頁筆數）
const { paginationModel, updatePaginationPage, extractPaginationContent } = usePagination({
  pageSize: 10  // 預設 15，這裡改為 10
})

// 2. 在 DataTable 中綁定分頁模型
<app-data-table
  remote
  :columns="columns"
  :data="list"
  :pagination="paginationModel"
  :row-key="rowData => rowData.id"
  @update:page="updatePaginationPage"
>
</app-data-table>

// 3. 監聽分頁變化並重新查詢
watch(() => paginationModel.value.page, () => {
  refreshData()  // 觸發資料重新載入
})

// 4. 處理後端回應資料
const data = ref({
  content: [...],  // 資料陣列
  number: 1,       // 當前頁碼
  size: 10,        // 每頁筆數
  total: 30,       // 總筆數
  offset: 0        // 起始索引
})

// 5. 使用 extractPaginationContent 解析
const list = computed(() => extractPaginationContent(toValue(data)))
// 結果：資料會自動附加 $$RowNumber（序號）和 $$RowIndex（索引）
// 並自動更新 paginationModel 的狀態`,-1))]),_:1})]),_:1})]))}};export{c as default};
