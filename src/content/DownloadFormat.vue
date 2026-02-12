<template>
  <div>
    <p class="muted" style="margin-bottom: 24px;">支援回傳檔名或直接二進位串流。</p>

    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: #4f46e5;">回傳格式：</h3>
      
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
              <td><strong style="font-size: 1.1rem;">Base64</strong></td>
              <td>
                <div style="margin-bottom: 16px;">
                  <strong style="color: #10b981;">適合小型檔案下載</strong>
                </div>
                
                <div style="margin-bottom: 12px;">
                  <strong>優點</strong>
                  <ul style="margin: 8px 0; padding-left: 20px;">
                    <li>可以回傳其他資訊 ex:成功訊息</li>
                  </ul>
                </div>

                <div style="margin-bottom: 12px;">
                  <strong>缺點</strong>
                  <ul style="margin: 8px 0; padding-left: 20px;">
                    <li>檔案變大 33%</li>
                    <li>記憶體負擔大</li>
                  </ul>
                </div>

                <div style="margin-top: 16px;">
                  <strong style="color: #1f2a37;">回傳範例格式：</strong>
                  <pre style="margin-top: 8px;">{
  "statusCode": "200",
  "messageCode": null,
  "message": "執行成功",
  "data": {
    "exportFileData": "77u/LCwsLCzlpKfkuovntIDs...,
    "exportFileName": "大書紀資料明細資料表.csv",
  }
}</pre>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong style="font-size: 1.1rem;">application/octet-stream</strong></td>
              <td>
                <div style="margin-bottom: 16px;">
                  <strong style="color: #10b981;">適合大型檔案下載(需要額外處理 response header Content-Disposition 來取得檔名)</strong>
                </div>
                
                <div style="margin-bottom: 12px;">
                  <strong>優點</strong>
                  <ul style="margin: 8px 0; padding-left: 20px;">
                    <li>效能最佳</li>
                    <li>支援大檔案</li>
                    <li>下載體驗好</li>
                  </ul>
                </div>

                <div style="margin-bottom: 12px;">
                  <strong>缺點</strong>
                  <ul style="margin: 8px 0; padding-left: 20px;">
                    <li>無法回傳其他訊息</li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
