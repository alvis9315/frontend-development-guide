<template>
  <div>
    <p class="muted" style="margin-bottom: 24px;">
      因專案使用 Naive UI 元件庫，前端下拉選單必須使用 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px; color: #4f46e5;">label</code> 及 <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px; color: #4f46e5;">value</code> 格式接收資料。
    </p>

    <div class="callout" style="margin-bottom: 24px; background: #fef3c7; border-color: #fbbf24;">
      <p style="color: #92400e; margin-bottom: 8px;">
        <strong>📌 重要規範</strong>
      </p>
      <p style="color: #92400e; margin: 0;">
        後端提供的下拉選單 API 必須確保前端能直接轉換成 <code style="background: white; padding: 2px 6px; border-radius: 4px;">{ label, value }</code> 格式，以符合 Naive UI 元件需求。
      </p>
    </div>

    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: #4f46e5;">資料格式轉換</h3>
      
      <div style="margin-bottom: 20px;">
        <h4 style="margin-bottom: 12px; color: #1f2a37;">後端 API 回傳範例</h4>
        <pre>[
  { "dcName": "類別一", "depName": "部門一", "dcCode": "A001", },
  { "dcName": "類別二", "depName": "部門二", "dcCode": "A002", }
]</pre>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="margin-bottom: 12px; color: #1f2a37;">前端轉換處理</h4>
        <pre>const originalOptions = computed(() =>
  map(toValue(data), item => ({
    value: item.dcCode,
    label: item.dcName,
    name: item.depName
  }))
)</pre>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="margin-bottom: 12px; color: #1f2a37;">最終使用格式</h4>
        <pre>[
  { "value": "A001", "label": "類別一", "name": "部門一" },
  { "value": "A002", "label": "類別二", "name": "部門二" }
]</pre>
      </div>
    </div>

    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: #4f46e5;">實際應用範例</h3>
      
      <article class="card" style="background: #f9fafb;">
        <h4 style="margin-bottom: 12px; color: #1f2a37;">下拉選單元件使用</h4>
        <pre>&lt;template&gt;
  &lt;app-form-item :label="label" :path="path" :rule="rule"&gt;
    &lt;app-form-select
      v-model:value="valueModel"
      :options="options"
      :loading="isFetching"
      @search="value =&gt; (searchText = value)"
    /&gt;
  &lt;/app-form-item&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useCategoryCodeList } from '@/api/ptm/ptm031u11'
import { map } from 'lodash-es'

// 呼叫 API 取得資料
const { isFetching, data } = useCategoryCodeList()

// 轉換成 Naive UI 需要的 { value, label } 格式
const originalOptions = computed(() =&gt;
  map(toValue(data), item =&gt; ({
    value: item.dcCode,
    label: item.dcName,
    name: item.depName
  }))
)

const options = computed(() =&gt; [
  { label: '請選擇', value: '' },
  ...toValue(originalOptions)
])
&lt;/script&gt;</pre>
      </article>
    </div>

    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: #4f46e5;">注意事項</h3>
      
      <article class="card" style="background: #eff6ff; border-color: #93c5fd;">
        <ul style="margin: 0; padding-left: 20px; line-height: 2;">
          <li><strong>value</strong>：唯一識別值，用於提交表單</li>
          <li><strong>label</strong>：顯示文字，呈現給使用者</li>
          <li>後端 API 應提供清楚的欄位名稱，方便前端轉換</li>
          <li>前端實作時，轉換邏輯統一使用 <code style="background: white; padding: 2px 6px; border-radius: 4px;">computed</code> 處理，確保響應式更新</li>
        </ul>
      </article>
    </div>
  </div>
</template>
