<template>
  <div>
    <div class="section-header">
      <h2>4. 訊息顯示策略</h2>
      <p class="muted">定義成功、警告、錯誤的顯示規則與內容結構。</p>
    </div>
    <div class="grid">
      <article class="card">
        <h3>成功訊息</h3>
        <pre>{
  "statusCode": "200",
  "message": "新增成功",
  "data": { ... }
}</pre>
      </article>
      <article class="card">
        <h3>錯誤訊息</h3>
        <pre>{
  "statusCode": "400",
  "message": "資料驗證失敗",
  "data": { ... }
}</pre>
      </article>
    </div>
  </div>
</template>
