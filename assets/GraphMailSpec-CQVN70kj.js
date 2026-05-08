import{_ as e,o,c as d,a as r}from"./index-CWHqyz0E.js";const i={};function a(n,t){return o(),d("div",null,[...t[0]||(t[0]=[r(`<p class="muted" style="margin-bottom:8px;"> 後端透過 Microsoft Graph API（OAuth 2.0 Client Credentials）寄信的共用架構規範。 </p><div class="callout" style="margin-bottom:24px;background:#eff6ff;border-color:#93c5fd;"><p style="color:#1e40af;margin:0;"><strong>📌 定位說明：</strong>本功能是系統共用寄信架構，不是單一 API 專用。後續任何需要寄信的業務功能，都應沿用此流程，不應在各業務 API 中自行呼叫 Graph API 或自行取得 OAuth Token。 </p></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">背景說明</h3><p style="margin-bottom:12px;">原本系統使用 SMTP（Gmail）寄信，改為透過 Microsoft Graph API 以 OAuth 2.0 Client Credentials 流程寄信。</p><div class="table-wrap"><table><thead><tr><th>項目</th><th>舊方式</th><th>新方式</th></tr></thead><tbody><tr><td>協定</td><td>SMTP / STARTTLS</td><td>HTTPS REST API</td></tr><tr><td>驗證</td><td>帳號密碼</td><td>OAuth 2.0 Client Credentials</td></tr><tr><td>寄件人</td><td>Gmail 帳號</td><td>企業信箱（指定 sender mailbox）</td></tr><tr><td>Admin Consent</td><td>不需要</td><td>✅ 需要資訊部門核准</td></tr><tr><td>寄送方式</td><td>SMTP 直接寄送</td><td>Microsoft Graph API sendMail</td></tr></tbody></table></div></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">架構定位</h3><p style="margin-bottom:12px;">後續只要系統有新的寄信功能，原則上都應沿用既有流程：</p><pre style="background:#f8fafc;color:#1e293b;border:1px solid #e2e8f0;border-radius:8px;padding:16px;overflow-x:auto;font-size:0.85rem;line-height:1.7;">業務 API / Service
    ↓
建立 MailInfo
    ↓
透過 DatabaseMailService / MailProcess 寫入 MAIL_INFO
    ↓
排程 ScheduledMailSendJob 掃描待寄信資料
    ↓
GraphMailSender 透過 Microsoft Graph API 寄出</pre><p style="margin-bottom:8px;font-weight:600;margin-top:20px;">核心原則</p><ul style="margin:0;padding-left:20px;line-height:2;"><li>業務 Service <strong>不應</strong>直接呼叫 Microsoft Graph API</li><li>業務 Service <strong>不應</strong>自行取得 OAuth access token</li><li>業務 Service 只負責建立 <code>MailInfo</code> 並寫入 <code>MAIL_INFO</code></li><li>實際寄送統一由 <code>ScheduledMailSendJob</code> 與 <code>GraphMailSender</code> 處理</li><li>OAuth Token 統一由 <code>GraphTokenService</code> 管理與快取</li><li>Graph API Request Body 統一由 <code>GraphMailRequestFactory</code> 轉換</li><li>寄信成功後統一更新 <code>MAIL_INFO.status = &#39;Y&#39;</code></li></ul></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">架構概覽</h3><p style="margin-bottom:12px;font-weight:600;">寄信流程</p><pre style="background:#f8fafc;color:#1e293b;border:1px solid #e2e8f0;border-radius:8px;padding:16px;overflow-x:auto;font-size:0.85rem;line-height:1.7;">業務功能呼叫（例如 sendMailToUnit，或其他需要寄信的 Service）
        ↓
建立 MailInfo
        ↓
DatabaseMailService.apply() / applyReturnId()
        ↓ 寫入 DB
MAIL_INFO (status=&#39;N&#39;)
        ↓ 排程每 20 秒掃描
ScheduledMailSendJob.produceQueue()
        ↓ 排程每 30 秒消費
ScheduledMailSendJob.consumeQueue()
        ↓
GraphMailSender.send(mailInfo)
        ↓
GraphTokenService.getAccessToken()   → OAuth Token（含快取）
        ↓
GraphMailRequestFactory.build()      → MailInfo 轉 Graph API JSON
        ↓
POST https://graph.microsoft.com/v1.0/users/{&#39;{sender}&#39;}/sendMail
        ↓
MAIL_INFO status 更新為 &#39;Y&#39; ✅</pre><p style="margin-bottom:12px;font-weight:600;margin-top:20px;">元件職責一覽</p><div class="table-wrap"><table><thead><tr><th>元件</th><th>位置</th><th>職責</th></tr></thead><tbody><tr><td><code>GraphMailProperties</code></td><td><code>config/properties/</code></td><td>讀取 yml 設定，例如 tenant-id、client-id、client-secret、sender-address</td></tr><tr><td><code>GraphTokenService</code></td><td><code>service/sys/mail/</code></td><td>取得 OAuth access token，含快取與到期前 60 秒更新機制</td></tr><tr><td><code>GraphMailRequestFactory</code></td><td><code>service/sys/mail/</code></td><td>將 MailInfo 轉換成 Graph API sendMail request body</td></tr><tr><td><code>GraphMailSender</code></td><td><code>service/sys/mail/</code></td><td>呼叫 Graph API 實際寄信，含 401 自動重試</td></tr><tr><td><code>ScheduledMailSendJob</code></td><td><code>schedule/</code></td><td>批次排程：生產者每 20 秒掃描，消費者每 30 秒寄送</td></tr><tr><td><code>DatabaseMailService</code></td><td><code>service/sys/</code></td><td>業務層寄信入口，寫入 MAIL_INFO</td></tr><tr><td><code>MailProcess</code></td><td><code>service/sys/</code></td><td>封裝信件模板、資料填充與 MailInfo 建立流程</td></tr></tbody></table></div></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">Azure AD App Registration 資訊</h3><div class="callout" style="margin-bottom:16px;background:#fef2f2;border-color:#f87171;"><p style="color:#991b1b;margin:0;"><strong>🔴 client-secret 為機敏資訊，請勿 commit 進 Git。</strong> 完整憑證清單請參閱 <strong>《azure_graph_mail_server_credentials_inventory_full.md》</strong>，向 <strong>PG Leader 或 PM</strong> 取得。 </p></div><div class="table-wrap"><table><thead><tr><th>項目</th><th>值</th><th>機敏程度</th></tr></thead><tbody><tr><td>Tenant ID</td><td><code>54aa2fea-ecb3-4c71-80b3-de9a356e77c1</code></td><td>🟡 內部資訊</td></tr><tr><td>Client ID</td><td><code>b6df8fec-2fdb-4d95-8838-7f459ebbc891</code></td><td>🟡 內部資訊</td></tr><tr><td>Client Secret</td><td>請向負責人或資訊部門取得「用戶端認證」</td><td>🔴 機敏，勿外洩</td></tr><tr><td>Sender Address</td><td><code>NCATEST@iisigroup.com</code></td><td>🟡 內部資訊</td></tr><tr><td>OAuth Scope</td><td><code>https://graph.microsoft.com/.default</code></td><td>🟡 內部資訊</td></tr><tr><td>Required Permission</td><td><code>Mail.Send</code></td><td>🟡 內部資訊</td></tr><tr><td>Admin Consent 狀態</td><td>✅ Mail.Send 已核准</td><td>—</td></tr></tbody></table></div></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">環境設定</h3><p style="margin-bottom:8px;font-weight:600;">本機開發（application-local.yml）</p><div class="callout" style="margin-bottom:12px;background:#fef3c7;border-color:#fbbf24;"><p style="color:#92400e;margin:0;"><strong>⚠️ 注意：</strong><code>application-local.yml</code> 已加入 <code>.gitignore</code>，不會被 commit。 </p></div><pre style="background:#f8fafc;color:#1e293b;border:1px solid #e2e8f0;border-radius:8px;padding:16px;overflow-x:auto;font-size:0.85rem;line-height:1.7;">microsoft:
  graph:
    enabled: true
    tenant-id: 54aa2fea-ecb3-4c71-80b3-de9a356e77c1
    client-id: b6df8fec-2fdb-4d95-8838-7f459ebbc891
    client-secret: 請向負責人取得後填入此處
    sender-address: NCATEST@iisigroup.com
    scope: https://graph.microsoft.com/.default

scheduling:
  mail:
    enabled: true   # 開啟後排程才會自動寄信，測試完建議改回 false</pre><p style="margin-bottom:8px;font-weight:600;margin-top:20px;">SIT / UAT 環境（application-sit.yml）</p><div class="callout" style="margin-bottom:12px;background:#fef3c7;border-color:#fbbf24;"><p style="color:#92400e;margin:0;"><strong>⚠️ 注意：</strong>SIT 環境排程預設關閉（<code>scheduling.mail.enabled: false</code>），避免誤發信；部署時由 IT / DevOps 手動開啟。 </p></div><pre style="background:#f8fafc;color:#1e293b;border:1px solid #e2e8f0;border-radius:8px;padding:16px;overflow-x:auto;font-size:0.85rem;line-height:1.7;">microsoft:
  graph:
    enabled: true
    tenant-id: 54aa2fea-ecb3-4c71-80b3-de9a356e77c1
    client-id: b6df8fec-2fdb-4d95-8838-7f459ebbc891
    client-secret: \${&#39;{&#39;}GRAPH_CLIENT_SECRET{&#39;}&#39;}   # 環境變數注入，不可明文寫入
    sender-address: NCATEST@iisigroup.com
    scope: https://graph.microsoft.com/.default

scheduling:
  mail:
    enabled: false   # SIT 預設關閉，避免誤發信</pre><p style="margin-bottom:8px;font-weight:600;margin-top:20px;">排程開關說明</p><div class="callout" style="margin-bottom:12px;background:#fef3c7;border-color:#fbbf24;"><p style="color:#92400e;margin:0;"><strong>⚠️ 重要：</strong>排程啟動後，只要 <code>MAIL_INFO</code> 有 <code>status=&#39;N&#39;</code> 的記錄，每次重啟都會繼續寄出，直到 <code>status=&#39;Y&#39;</code> 或被人工作廢為止。 </p></div><div class="table-wrap"><table><thead><tr><th><code>scheduling.mail.enabled</code></th><th>效果</th></tr></thead><tbody><tr><td><code>true</code></td><td>排程啟動，自動掃描 MAIL_INFO 並寄信</td></tr><tr><td><code>false</code></td><td>排程不啟動，信件會寫入 DB 但不會寄出</td></tr></tbody></table></div></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">新增寄信功能實作順序</h3><p style="margin-bottom:16px;">其他業務功能需要寄信時，沿用此流程，不需要直接呼叫 Graph API。</p><div style="display:flex;flex-direction:column;gap:12px;"><div style="background:#f8fafc;border-left:4px solid #4f46e5;border-radius:0 8px 8px 0;padding:14px 16px;"><p style="margin:0 0 4px 0;font-weight:700;color:#4f46e5;">Step 1　確認寄信觸發點</p><p style="margin:0;color:#475569;font-size:0.9rem;">確認哪一個業務事件需要寄信：使用者送出申請、案件審核完成、退件 / 補件通知、批次通知、帳號開通…等</p></div><div style="background:#f8fafc;border-left:4px solid #4f46e5;border-radius:0 8px 8px 0;padding:14px 16px;"><p style="margin:0 0 4px 0;font-weight:700;color:#4f46e5;">Step 2　確認收件人來源</p><p style="margin:0;color:#475569;font-size:0.9rem;">確認 TO / CC / BCC 從哪裡取得（帳號 email、單位窗口、系統參數、DB 查詢…）。<strong>查無收件人時直接回傳訊息，不寫入 MAIL_INFO。</strong></p></div><div style="background:#f8fafc;border-left:4px solid #4f46e5;border-radius:0 8px 8px 0;padding:14px 16px;"><p style="margin:0 0 4px 0;font-weight:700;color:#4f46e5;">Step 3　建立 MailInfo</p><p style="margin:0;color:#475569;font-size:0.9rem;"><code>mailTo</code> 必填；CC / BCC 可選；CC 不可拆成獨立一筆沒有 TO 的 MailInfo；若有附件需先取得 mailInfo.id。</p></div><div style="background:#f8fafc;border-left:4px solid #4f46e5;border-radius:0 8px 8px 0;padding:14px 16px;"><p style="margin:0 0 8px 0;font-weight:700;color:#4f46e5;">Step 4　寫入 MAIL_INFO</p><pre style="background:#1e293b;color:#f1f5f9;border-radius:6px;padding:12px;font-size:0.82rem;line-height:1.6;margin:0;">// 不需要 ID
databaseMailService.apply(mailInfo);

// 需要 ID（例如要新增附件）
databaseMailService.applyReturnId(mailInfo);

// 使用信件模板
mailProcess.execute(&quot;TemplateName&quot;, dataMap);</pre></div><div style="background:#f8fafc;border-left:4px solid #4f46e5;border-radius:0 8px 8px 0;padding:14px 16px;"><p style="margin:0 0 4px 0;font-weight:700;color:#4f46e5;">Step 5　由排程自動寄出</p><p style="margin:0;color:#475569;font-size:0.9rem;">業務功能不需直接呼叫 <code>GraphMailSender</code>。寫入後排程自動掃描，成功 → <code>status=&#39;Y&#39;</code>，異常可人工改為 <code>status=&#39;X&#39;</code>。</p></div><div style="background:#f8fafc;border-left:4px solid #4f46e5;border-radius:0 8px 8px 0;padding:14px 16px;"><p style="margin:0 0 8px 0;font-weight:700;color:#4f46e5;">Step 6　測試與驗證</p><pre style="background:#1e293b;color:#f1f5f9;border-radius:6px;padding:12px;font-size:0.82rem;line-height:1.6;margin:0 0 8px 0;">SELECT ID, MAIL_TO, MAIL_CC, MAIL_SUBJECT, STATUS, CREATION_DATE, MODIFY_DATE
FROM MAIL_INFO
ORDER BY CREATION_DATE DESC;</pre><p style="margin:0;color:#475569;font-size:0.9rem;">確認：MAIL_TO 正確、CC 未被拆成空 TO 的資料、STATUS 由 N → Y、實際信箱收到信、Log 無機敏資訊。</p></div></div></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">開發規範</h3><p style="margin-bottom:8px;font-weight:600;">✅ 正確的 MailInfo 設定方式</p><pre style="background:#f0fdf4;color:#1e293b;border:1px solid #86efac;border-radius:8px;padding:16px;overflow-x:auto;font-size:0.85rem;line-height:1.7;">// ✅ 正確：一筆 MailInfo，TO 和 CC 寫在同一筆
MailInfo mailInfo = new MailInfo();
mailInfo.setMailTo(&quot;receiver@example.com&quot;);
mailInfo.setMailCc(&quot;cc@example.com&quot;);
databaseMailService.setCommonMailInfo(mailInfo);
databaseMailService.apply(mailInfo);</pre><pre style="background:#fef2f2;color:#1e293b;border:1px solid #fca5a5;border-radius:8px;padding:16px;overflow-x:auto;font-size:0.85rem;line-height:1.7;margin-top:12px;">// ❌ 錯誤：將 CC 拆成獨立一筆，且沒有 mailTo
// → mailTo=null 的那筆永遠寄不出去，排程無限重試！
MailInfo ccMailInfo = new MailInfo();
ccMailInfo.setMailCc(&quot;cc@example.com&quot;);
databaseMailService.apply(ccMailInfo);  // ← 沒有 mailTo</pre><p style="margin-bottom:8px;font-weight:600;margin-top:20px;">防呆規範（必須加入）</p><pre style="background:#f8fafc;color:#1e293b;border:1px solid #e2e8f0;border-radius:8px;padding:16px;overflow-x:auto;font-size:0.85rem;line-height:1.7;">// 防呆1：查無收件對象時，提早回傳
if (receiverList == null || receiverList.isEmpty()) {
    log.warn(&quot;查無符合條件的收件者，不寄出任何信件&quot;);
    return ReturnMessage.getFailedInstance(&quot;查無符合條件的收件者，未寄出任何信件&quot;, null);
}

// 防呆2：信箱為空時跳過
for (Receiver receiver : receiverList) {
    if (StringUtils.isBlank(receiver.getEmail())) {
        log.warn(&quot;帳號={} 信箱為空，跳過寄信&quot;, receiver.getAccount());
        continue;  // ← 必須 continue，不可寫入 MAIL_INFO
    }
    // 正常建立 MailInfo
}</pre><p style="margin-bottom:8px;font-weight:600;margin-top:20px;">使用 MailProcess 的流程</p><pre style="background:#f8fafc;color:#1e293b;border:1px solid #e2e8f0;border-radius:8px;padding:16px;overflow-x:auto;font-size:0.85rem;line-height:1.7;">Supplier&lt;List&lt;MailInfo&gt;&gt; mailInfoProcessor = () -&gt; {
    List&lt;MailInfo&gt; list = new ArrayList&lt;&gt;();
    MailInfo mailInfo = new MailInfo();
    mailInfo.setMailTo(receiver.getEmail());
    if (StringUtils.isNotBlank(ccEmail)) {
        mailInfo.setMailCc(ccEmail);
    }
    databaseMailService.setCommonMailInfo(mailInfo);
    list.add(mailInfo);
    return list;
};
mailProcess.setMailInfoProcessor(mailInfoProcessor);

// 優先使用 DB 模板，查無模板時用 fallback
try {
    mailProcess.execute(&quot;TemplateName&quot;, dataMap);
} catch (DataNotFoundException ex) {
    mailProcess.execute(subject, content);
}</pre></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">常見錯誤與排除方式</h3><p style="margin-bottom:8px;font-weight:600;">Graph API 錯誤碼</p><div class="table-wrap" style="margin-bottom:20px;"><table><thead><tr><th>HTTP 狀態碼</th><th>常見原因</th><th>建議處理</th></tr></thead><tbody><tr><td>400 Bad Request</td><td>request body 格式錯誤、收件人格式錯誤、附件 base64 錯誤</td><td>檢查 GraphMailRequestFactory 產出的 JSON、收件人 email、附件內容</td></tr><tr><td>401 Unauthorized</td><td>access token 遺失 / 過期 / 無效，或 client-secret 錯誤</td><td>確認 tenant-id / client-id / client-secret；系統會清除 token cache 後自動重試一次</td></tr><tr><td>403 Forbidden</td><td>Mail.Send 權限不足或未完成 Admin Consent</td><td>請資訊部門至 Azure Portal 確認 Mail.Send 權限與 Admin Consent</td></tr><tr><td>404 Not Found</td><td>sender mailbox 不存在或 sender address 錯誤</td><td>確認 sender-address 是否為可寄信的 Exchange mailbox</td></tr><tr><td>429 Too Many Requests</td><td>短時間內請求過多，Graph API 節流</td><td>依 response header 的 Retry-After 秒數等待後重試</td></tr><tr><td>500 / 502 / 503 / 504</td><td>Microsoft Graph 或 Microsoft 365 服務端暫時異常</td><td>建議 retry with backoff；若持續發生請資訊部門確認 Microsoft 365 服務狀態</td></tr></tbody></table></div><p style="margin-bottom:8px;font-weight:600;">排程無限重試（MAIL_INFO 有 mailTo=null）</p><pre style="background:#f8fafc;color:#1e293b;border:1px solid #e2e8f0;border-radius:8px;padding:16px;overflow-x:auto;font-size:0.85rem;line-height:1.7;">-- 查看待寄出記錄
SELECT ID, MAIL_TO, MAIL_CC, STATUS, CREATION_DATE
FROM MAIL_INFO
WHERE STATUS = &#39;N&#39;
ORDER BY CREATION_DATE DESC;

-- 若確認是異常產生的，將其作廢（建議加日期條件，避免誤改正常資料）
UPDATE MAIL_INFO
SET STATUS = &#39;X&#39;, MODIFY_USER = &#39;MANUAL_CANCEL&#39;, MODIFY_DATE = GETDATE()
WHERE STATUS = &#39;N&#39;
  AND CREATION_DATE &gt;= &#39;2026-05-07&#39;;</pre></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">資安注意事項</h3><div class="callout" style="margin-bottom:16px;background:#fef2f2;border-color:#f87171;"><p style="color:#991b1b;margin:0 0 10px 0;"><strong>🔴 正式提交、截圖、貼 Issue / PR / Teams 或貼給 AI 工具前，請確認不含以下資訊：</strong></p><ul style="margin:0;padding-left:20px;color:#991b1b;"><li>實際 <code>client-secret</code></li><li>完整 <code>access_token</code></li><li>完整 Graph API token response</li><li>完整信件內容或附件 base64</li><li>大量或完整收件人、CC、BCC 個資清單</li></ul></div><div class="table-wrap"><table><thead><tr><th>項目</th><th>規範</th></tr></thead><tbody><tr><td><code>client-secret</code></td><td>🔴 絕對不可 commit 進 Git</td></tr><tr><td><code>access_token</code></td><td>🔴 不可完整寫入 log</td></tr><tr><td><code>application-local.yml</code></td><td>已加入 .gitignore，本機設定不會上傳</td></tr><tr><td><code>GraphManualIntegrationTest.java</code></td><td>若含明文 secret，應加入 .gitignore</td></tr><tr><td>SIT / UAT 的 secret</td><td>透過環境變數 <code>\${&#39;{&#39;}GRAPH_CLIENT_SECRET{&#39;}&#39;}</code> 注入，由 IT / DevOps 設定</td></tr><tr><td>完整憑證清單</td><td>參閱 <strong>azure_graph_mail_server_credentials_inventory_full.md</strong>，向 PG Leader 或 PM 取得</td></tr></tbody></table></div></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">同事交接清單</h3><div class="table-wrap" style="margin-bottom:20px;"><table><thead><tr><th>資訊</th><th>說明</th><th>建議窗口</th></tr></thead><tbody><tr><td>Client Secret / 用戶端認證</td><td>實際填入 client-secret 的值</td><td>負責人、資訊部門</td></tr><tr><td>SIT / UAT <code>GRAPH_CLIENT_SECRET</code> 設定</td><td>部署環境的 secret 注入</td><td>IT / DevOps</td></tr><tr><td>Mail.Send Admin Consent</td><td>確認 Azure 權限已核准</td><td>資訊部門 / Azure AD 管理者</td></tr><tr><td>Sender mailbox 狀態</td><td>確認寄件信箱存在且可使用</td><td>資訊部門 / Exchange 管理者</td></tr><tr><td>排程開關</td><td>確認各環境是否允許自動寄信</td><td>PM / SA / IT / DevOps</td></tr></tbody></table></div></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">測試驗收記錄</h3><div class="table-wrap" style="margin-bottom:16px;"><table><thead><tr><th>階段</th><th>測試類別</th><th>日期</th><th>結果</th></tr></thead><tbody><tr><td>Phase 1：取得 OAuth Token</td><td><code>GraphTokenServiceCacheTest</code>（2 tests）</td><td>2026-05-06</td><td>✅ Token 取得成功，快取機制正常</td></tr><tr><td>Phase 2：完整寄信測試</td><td><code>GraphManualIntegrationTest</code></td><td>2026-05-07</td><td>✅ 202 Accepted，收件信箱確認收到</td></tr><tr><td>整合測試：sendMailToUnit</td><td><code>POST /QSP042b02/sendMailToUnit</code></td><td>2026-05-07</td><td>✅ 寄出完成，CC Bug 已修正，防呆已新增</td></tr></tbody></table></div><div class="callout" style="background:#f0fdf4;border-color:#86efac;"><p style="color:#166534;margin:0;"><strong>📌 說明：</strong><code>sendMailToUnit</code> 是本次驗收使用的業務 API 範例，後續其他寄信功能仍應沿用相同的共用流程。 </p></div></div><div style="margin-bottom:0;"><div class="callout" style="background:#eff6ff;border-color:#93c5fd;"><p style="color:#1e40af;margin:0;"><strong>💡 一句話總結：</strong>後續任何需要寄信的業務功能，建立 <code>MailInfo</code> 並寫入 <code>MAIL_INFO</code>，由排程與 <code>GraphMailSender</code> 統一透過 Microsoft Graph API 寄送即可，不需在各業務 API 中自行呼叫 Graph API 或取得 OAuth Token。 </p></div></div>`,14)])])}const s=e(i,[["render",a]]);export{s as default};
