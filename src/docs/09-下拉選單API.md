# 9. 下拉選單 API

因專案使用 Naive UI 元件庫，前端下拉選單必須使用 `label` 及 `value` 格式接收資料。

---

## 📌 重要規範

後端提供的下拉選單 API 必須確保前端能直接轉換成 `{ label, value }` 格式，以符合 Naive UI 元件需求。

---

## 資料格式轉換

### 後端 API 回傳範例
```json
[
  { "dcName": "類別一", "depName": "部門一", "dcCode": "A001" },
  { "dcName": "類別二", "depName": "部門二", "dcCode": "A002" }
]
```

### 前端轉換處理
```javascript
const originalOptions = computed(() =>
  map(toValue(data), item => ({
    value: item.dcCode,
    label: item.dcName,
    name: item.depName
  }))
)
```

### 最終使用格式
```json
[
  { "value": "A001", "label": "類別一", "name": "部門一" },
  { "value": "A002", "label": "類別二", "name": "部門二" }
]
```

---

## 實際應用範例

### 下拉選單元件使用
```vue
<template>
  <app-form-item :label="label" :path="path" :rule="rule">
    <app-form-select
      v-model:value="valueModel"
      :options="options"
      :loading="isFetching"
      @search="value => (searchText = value)"
    />
  </app-form-item>
</template>

<script setup>
import { useCategoryCodeList } from '@/api/ptm/ptm031u11'
import { map } from 'lodash-es'

// 呼叫 API 取得資料
const { isFetching, data } = useCategoryCodeList()

// 轉換成 Naive UI 需要的 { value, label } 格式
const originalOptions = computed(() =>
  map(toValue(data), item => ({
    value: item.dcCode,
    label: item.dcName,
    name: item.depName
  }))
)

const options = computed(() => [
  { label: '請選擇', value: '' },
  ...toValue(originalOptions)
])
</script>
```

---

## 注意事項
- **value**：唯一識別值，用於提交表單
- **label**：顯示文字，呈現給使用者
- 後端 API 應提供清楚的欄位名稱，方便前端轉換
- 前端實作時，轉換邏輯統一使用 `computed` 處理，確保響應式更新
