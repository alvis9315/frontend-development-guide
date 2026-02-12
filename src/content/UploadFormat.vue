<template>
  <div>
    <p class="muted" style="margin-bottom: 24px;">依檔案大小選擇 FormData 或 Base64。</p>

    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: #4f46e5;">上傳格式：</h3>
      
      <div class="table-wrap" style="margin-bottom: 24px;">
        <table>
          <thead>
            <tr>
              <th>格式</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FormData</td>
              <td>
                <ul style="margin: 8px 0; padding-left: 20px;">
                  <li>適合上傳檔案，支援多種資料類型</li>
                  <li>其他夾帶資料請後端包成一個 Object</li>
                </ul>
                
                <div style="margin-top: 16px;">
                  <strong style="color: #1f2a37;">有包物件</strong>
                  <pre style="margin-top: 8px;">formData.set('req', new Blob([JSON.stringify(omit(modelValue, ['files']))], { type: 'application/json' }))
formData.set('file', modelValue.files[0])</pre>
                </div>

                <div style="margin-top: 16px;">
                  <strong style="color: #1f2a37;">沒包物件</strong>
                  <pre style="margin-top: 8px;">formData.set('newsSubject', model.value.newsSubject)
formData.set('newsContent', model.value.newsContent)
formData.set('newsStartDate', useFormatDate(model.value.newsStartDate))</pre>
                </div>
              </td>
            </tr>
            <tr>
              <td>Base64</td>
              <td>適合小型檔案，將檔案轉為字串格式</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
