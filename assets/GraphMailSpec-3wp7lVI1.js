import{_ as e,o,c as d,a as r}from"./index-BGmSuorv.js";const i={};function n(a,t){return o(),d("div",null,[...t[0]||(t[0]=[r(`<p class="muted" style="margin-bottom:8px;"> 後端透過 Microsoft Graph API（OAuth 2.0 Client Credentials）寄信的共用架構規範。 </p><div class="callout" style="margin-bottom:24px;background:#eff6ff;border-color:#93c5fd;"><p style="color:#1e40af;margin:0;"><strong>📌 定位說明：</strong>本功能是系統共用寄信架構，不是單一 API 專用。後續任何需要寄信的業務功能，都應沿用此流程，不應在各業務 API 中自行呼叫 Graph API 或自行取得 OAuth Token。 </p></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">背景說明</h3><p style="margin-bottom:12px;">原本系統使用 SMTP（Gmail）寄信，改為透過 Microsoft Graph API 以 OAuth 2.0 Client Credentials 流程寄信。</p><div class="table-wrap"><table><thead><tr><th>項目</th><th>舊方式</th><th>新方式</th></tr></thead><tbody><tr><td>協定</td><td>SMTP / STARTTLS</td><td>HTTPS REST API</td></tr><tr><td>驗證</td><td>帳號密碼</td><td>OAuth 2.0 Client Credentials</td></tr><tr><td>寄件人</td><td>Gmail 帳號</td><td>企業信箱（指定 sender mailbox）</td></tr><tr><td>Admin Consent</td><td>不需要</td><td>✅ 需要資訊部門核准</td></tr><tr><td>寄送方式</td><td>SMTP 直接寄送</td><td>Microsoft Graph API sendMail</td></tr></tbody></table></div></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">架構定位</h3><p style="margin-bottom:12px;">後續只要系統有新的寄信功能，原則上都應沿用既有流程：</p><pre style="background:#f8fafc;color:#1e293b;border:1px solid #e2e8f0;border-radius:8px;padding:16px;overflow-x:auto;font-size:0.85rem;line-height:1.7;">業務 API / Service
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
  AND CREATION_DATE &gt;= &#39;2026-05-07&#39;;</pre></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">資安注意事項</h3><div class="callout" style="margin-bottom:16px;background:#fef2f2;border-color:#f87171;"><p style="color:#991b1b;margin:0 0 10px 0;"><strong>🔴 正式提交、截圖、貼 Issue / PR / Teams 或貼給 AI 工具前，請確認不含以下資訊：</strong></p><ul style="margin:0;padding-left:20px;color:#991b1b;"><li>實際 <code>client-secret</code></li><li>完整 <code>access_token</code></li><li>完整 Graph API token response</li><li>完整信件內容或附件 base64</li><li>大量或完整收件人、CC、BCC 個資清單</li></ul></div><div class="table-wrap"><table><thead><tr><th>項目</th><th>規範</th></tr></thead><tbody><tr><td><code>client-secret</code></td><td>🔴 絕對不可 commit 進 Git</td></tr><tr><td><code>access_token</code></td><td>🔴 不可完整寫入 log</td></tr><tr><td><code>application-local.yml</code></td><td>已加入 .gitignore，本機設定不會上傳</td></tr><tr><td><code>GraphManualIntegrationTest.java</code></td><td>若含明文 secret，應加入 .gitignore</td></tr><tr><td>SIT / UAT 的 secret</td><td>透過環境變數 <code>\${&#39;{&#39;}GRAPH_CLIENT_SECRET{&#39;}&#39;}</code> 注入，由 IT / DevOps 設定</td></tr><tr><td>完整憑證清單</td><td>參閱 <strong>azure_graph_mail_server_credentials_inventory_full.md</strong>，向 PG Leader 或 PM 取得</td></tr></tbody></table></div></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">同事交接清單</h3><div class="table-wrap" style="margin-bottom:20px;"><table><thead><tr><th>資訊</th><th>說明</th><th>建議窗口</th></tr></thead><tbody><tr><td>Client Secret / 用戶端認證</td><td>實際填入 client-secret 的值</td><td>負責人、資訊部門</td></tr><tr><td>SIT / UAT <code>GRAPH_CLIENT_SECRET</code> 設定</td><td>部署環境的 secret 注入</td><td>IT / DevOps</td></tr><tr><td>Mail.Send Admin Consent</td><td>確認 Azure 權限已核准</td><td>資訊部門 / Azure AD 管理者</td></tr><tr><td>Sender mailbox 狀態</td><td>確認寄件信箱存在且可使用</td><td>資訊部門 / Exchange 管理者</td></tr><tr><td>排程開關</td><td>確認各環境是否允許自動寄信</td><td>PM / SA / IT / DevOps</td></tr></tbody></table></div></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">測試驗收記錄</h3><div class="table-wrap" style="margin-bottom:16px;"><table><thead><tr><th>階段</th><th>測試類別</th><th>日期</th><th>結果</th></tr></thead><tbody><tr><td>Phase 1：取得 OAuth Token</td><td><code>GraphTokenServiceCacheTest</code>（2 tests）</td><td>2026-05-06</td><td>✅ Token 取得成功，快取機制正常</td></tr><tr><td>Phase 2：完整寄信測試</td><td><code>GraphManualIntegrationTest</code></td><td>2026-05-07</td><td>✅ 202 Accepted，收件信箱確認收到</td></tr><tr><td>整合測試：sendMailToUnit</td><td><code>POST /QSP042b02/sendMailToUnit</code></td><td>2026-05-07</td><td>✅ 寄出完成，CC Bug 已修正，防呆已新增</td></tr><tr><td>完整排程流程測試：sendMailToUnit</td><td><code>POST /QSP042b02/sendMailToUnit</code></td><td>2026-05-11</td><td>✅ 排程完整流程驗收通過（詳見下方補充說明）</td></tr></tbody></table></div><div class="callout" style="background:#f0fdf4;border-color:#86efac;"><p style="color:#166534;margin:0;"><strong>📌 說明：</strong><code>sendMailToUnit</code> 是本次驗收使用的業務 API 範例，後續其他寄信功能仍應沿用相同的共用流程。 </p></div></div><div style="margin-bottom:32px;"><h3 style="font-size:1.3rem;margin-bottom:16px;color:#4f46e5;">測試操作補充說明</h3><p style="margin-bottom:4px;color:#475569;font-size:0.85rem;">版本：1.0.0　建立日期：2026-05-11　適用環境：local / SIT</p><div style="margin-bottom:28px;margin-top:20px;"><p style="font-weight:700;font-size:1rem;margin-bottom:12px;color:#1e293b;">排程運作機制釐清</p><p style="margin-bottom:8px;color:#475569;font-size:0.9rem;">排程（<code>ScheduledMailSendJob</code>）<strong>不負責產生信件</strong>，只負責把已寫入 DB 的信寄出。</p><pre style="background:#f8fafc;color:#1e293b;border:1px solid #e2e8f0;border-radius:8px;padding:14px;overflow-x:auto;font-size:0.82rem;line-height:1.8;">按下 API 按鈕
  → 信件寫入 MAIL_INFO（status=&#39;N&#39;）  ← 同步，立即完成
  → 排程每 20 秒掃描一次 status=&#39;N&#39;   ← 非同步，背景執行
  → 撈到後透過 Graph API 寄出
  → 寄成功 → status 更新為 &#39;Y&#39;</pre><p style="margin-top:10px;margin-bottom:10px;color:#475569;font-size:0.9rem;">對使用者來說感覺是「按了就寄」，但底層實際上是非同步排程，最長等待約 20～30 秒。</p><div class="table-wrap" style="margin-bottom:10px;"><table><thead><tr><th><code>scheduling.mail.enabled</code></th><th>按下 API</th><th>信件最終狀態</th></tr></thead><tbody><tr><td><code>true</code></td><td>信寫入 DB，排程 20～30 秒內自動寄出</td><td>最終變 <code>&#39;Y&#39;</code></td></tr><tr><td><code>false</code></td><td>信寫入 DB，但排程不啟動，永遠寄不出</td><td>卡在 <code>&#39;N&#39;</code></td></tr></tbody></table></div><div class="callout" style="background:#fef2f2;border-color:#f87171;"><p style="color:#991b1b;margin:0;font-size:0.9rem;"><strong>⚠️ 重要：</strong><code>enabled=true</code> 重啟服務後，排程會自動撈出 DB 裡所有 <code>status=&#39;N&#39;</code> 的舊資料寄出，包含歷史測試殘留的資料。<br> 正式上線後 <code>scheduling.mail.enabled</code> 應常駐 <code>true</code>，使用者按下按鈕後排程才能自動把信寄出。 </p></div></div><div style="margin-bottom:28px;"><p style="font-weight:700;font-size:1rem;margin-bottom:12px;color:#1e293b;">測試前置作業</p><p style="margin-bottom:8px;font-weight:600;color:#475569;">每次測試前必做：確認 DB 乾淨</p><p style="margin-bottom:8px;color:#475569;font-size:0.9rem;">每次測試前，必須先確認 DB 裡沒有殘留的 <code>status=&#39;N&#39;</code> 舊資料，否則開啟排程時會把舊資料一起寄出。</p><pre style="background:#1e293b;color:#f1f5f9;border-radius:6px;padding:12px;font-size:0.82rem;line-height:1.6;margin-bottom:10px;">-- 確認目前 status=&#39;N&#39; 的筆數
SELECT COUNT(*), MIN(ID), MAX(ID), MIN(CREATION_DATE), MAX(CREATION_DATE)
FROM MAIL_INFO
WHERE STATUS = &#39;N&#39;;</pre><pre style="background:#1e293b;color:#f1f5f9;border-radius:6px;padding:12px;font-size:0.82rem;line-height:1.6;margin-bottom:16px;">-- 若有殘留且確認不需要寄出，全部作廢（此操作不可復原）
UPDATE MAIL_INFO
SET STATUS = &#39;X&#39;,
    MODIFY_USER = &#39;MANUAL_CANCEL&#39;,
    MODIFY_DATE = GETDATE()
WHERE STATUS = &#39;N&#39;;</pre><p style="margin-bottom:8px;font-weight:600;color:#475569;">測試時只寄給測試信箱的做法</p><div style="display:flex;flex-direction:column;gap:10px;"><div style="background:#f8fafc;border-left:3px solid #4f46e5;padding:10px 14px;border-radius:0 6px 6px 0;"><p style="margin:0 0 6px 0;font-size:0.88rem;font-weight:600;color:#4f46e5;">Step 1　呼叫 API，讓信件寫入 DB</p></div><div style="background:#f8fafc;border-left:3px solid #4f46e5;padding:10px 14px;border-radius:0 6px 6px 0;"><p style="margin:0 0 6px 0;font-size:0.88rem;font-weight:600;color:#4f46e5;">Step 2　查出剛才 API 寫入的這批信</p><pre style="background:#1e293b;color:#f1f5f9;border-radius:6px;padding:10px;font-size:0.82rem;line-height:1.6;margin:0;">SELECT ID, MAIL_TO, MAIL_SUBJECT, STATUS, CREATION_DATE
FROM MAIL_INFO
WHERE STATUS = &#39;N&#39;
  AND MAIL_SUBJECT LIKE &#39;%114%&#39;        -- 依年度調整
  AND CREATION_DATE &gt;= &#39;2026-05-11&#39;    -- 依測試日期調整
ORDER BY CREATION_DATE DESC;</pre></div><div style="background:#f8fafc;border-left:3px solid #4f46e5;padding:10px 14px;border-radius:0 6px 6px 0;"><p style="margin:0 0 6px 0;font-size:0.88rem;font-weight:600;color:#4f46e5;">Step 3　選定一筆改成測試信箱，其餘作廢</p><pre style="background:#1e293b;color:#f1f5f9;border-radius:6px;padding:10px;font-size:0.82rem;line-height:1.6;margin:0 0 8px 0;">-- 將選定的那筆改成測試信箱
UPDATE MAIL_INFO
SET MAIL_TO = &#39;NCATEST@iisigroup.com&#39;,
    MAIL_CC = NULL,
    MAIL_BCC = NULL
WHERE ID = {ID};

-- 其餘全部作廢
UPDATE MAIL_INFO
SET STATUS = &#39;X&#39;,
    MODIFY_USER = &#39;MANUAL_CANCEL&#39;,
    MODIFY_DATE = GETDATE()
WHERE STATUS = &#39;N&#39;
  AND MAIL_SUBJECT LIKE &#39;%114%&#39;
  AND CREATION_DATE &gt;= &#39;2026-05-11&#39;
  AND ID &lt;&gt; {ID};</pre></div><div style="background:#f8fafc;border-left:3px solid #4f46e5;padding:10px 14px;border-radius:0 6px 6px 0;"><p style="margin:0 0 6px 0;font-size:0.88rem;font-weight:600;color:#4f46e5;">Step 4　確認只剩一筆 status=&#39;N&#39;</p><pre style="background:#1e293b;color:#f1f5f9;border-radius:6px;padding:10px;font-size:0.82rem;line-height:1.6;margin:0;">SELECT COUNT(*) FROM MAIL_INFO WHERE STATUS = &#39;N&#39;;
-- 結果應為 1</pre></div></div></div><div style="margin-bottom:28px;"><p style="font-weight:700;font-size:1rem;margin-bottom:12px;color:#1e293b;">本機測試完整流程（以 sendMailToUnit 為例）</p><pre style="background:#f8fafc;color:#1e293b;border:1px solid #e2e8f0;border-radius:8px;padding:14px;overflow-x:auto;font-size:0.82rem;line-height:1.9;">1. 確認 DB 乾淨（status=&#39;N&#39; 為 0 筆）
        ↓
2. 將 scheduling.mail.enabled 改為 false，重啟後端
        ↓
3. 呼叫 API：POST /QSP042b02/sendMailToUnit
   Body：{&quot;yy&quot;: 114, &quot;batch&quot;: 135}
        ↓
4. 查 DB 確認信件已寫入（status=&#39;N&#39;）
        ↓
5. 將測試目標那筆改成測試信箱，其餘作廢
        ↓
6. 將 scheduling.mail.enabled 改為 true，重啟後端
        ↓
7. 等 20～30 秒觀察 log
   確認出現：GraphMailSender: 郵件發送成功
        ↓
8. 去測試信箱確認收信
        ↓
9. 測試完畢，將 scheduling.mail.enabled 改回 false</pre><div class="table-wrap" style="margin-top:12px;"><table><thead><tr><th>環境</th><th>yml 檔案</th></tr></thead><tbody><tr><td>本機</td><td><code>src/main/resources/application-local.yml</code></td></tr><tr><td>SIT</td><td><code>src/main/resources/application-sit.yml</code></td></tr><tr><td>UAT</td><td><code>src/main/resources/application-uat.yml</code></td></tr></tbody></table></div><div class="callout" style="margin-top:10px;background:#fef3c7;border-color:#fbbf24;"><p style="color:#92400e;margin:0;font-size:0.9rem;">⚠️ 修改 yml 後必須重啟後端才會生效。</p></div></div><div style="margin-bottom:28px;"><p style="font-weight:700;font-size:1rem;margin-bottom:12px;color:#1e293b;">常用查詢 SQL</p><p style="margin-bottom:6px;font-weight:600;color:#475569;font-size:0.9rem;">查各 yy/batch 的符合單位筆數（找最少的來測試）</p><pre style="background:#1e293b;color:#f1f5f9;border-radius:6px;padding:12px;font-size:0.82rem;line-height:1.6;margin-bottom:14px;">SELECT
    AP.YY,
    AP.BATCH_REGISTER AS BATCH,
    COUNT(DISTINCT AU.ACCOUNT) AS UNIT_COUNT
FROM QSP_APPLY AP
JOIN TRAINING_BATCH_PERIOD TBP ON TBP.BATCH_NO = AP.BATCH_REGISTER AND TBP.YY = AP.YY
JOIN PERSON_WORKING PW ON PW.YY = AP.YY
                       AND PW.ACCOUNT = AP.STD_ACCOUNT
                       AND PW.UNIT_ACC = AP.UNIT_ACCOUNT
                       AND PW.BATCH = AP.BATCH_REGISTER
JOIN ACCOUNT AU ON AU.ACCOUNT = PW.UNIT_ACC
WHERE AP.APPLY_STATUS = 2        -- STATUS_APPLY_CONFIRM
  AND AP.DIPLOMA_EXAMINE = &#39;Y&#39;   -- EXAMINE_PASSED
  AND PW.DUTY_STATUS = 0         -- SD_ONDUTY
  AND PW.WORKING_STATUS = 0      -- SW_UN（未入營）
  AND AU.EMAIL IS NOT NULL
  AND AU.EMAIL &lt;&gt; &#39;&#39;
GROUP BY AP.YY, AP.BATCH_REGISTER
ORDER BY UNIT_COUNT ASC;         -- 筆數最少的排最上面</pre><p style="margin-bottom:6px;font-weight:600;color:#475569;font-size:0.9rem;">MAIL_INFO 狀態查詢</p><pre style="background:#1e293b;color:#f1f5f9;border-radius:6px;padding:12px;font-size:0.82rem;line-height:1.6;margin-bottom:10px;">-- 查待寄出（status=&#39;N&#39;）
SELECT ID, MAIL_TO, MAIL_CC, MAIL_SUBJECT, STATUS, CREATION_DATE
FROM MAIL_INFO
WHERE STATUS = &#39;N&#39;
ORDER BY CREATION_DATE DESC;

-- 查特定時間區間的寄信紀錄
SELECT ID, MAIL_TO, MAIL_SUBJECT, STATUS, CREATION_DATE, MODIFY_DATE
FROM MAIL_INFO
WHERE CREATION_DATE &gt;= &#39;2026-05-11&#39;
ORDER BY ID ASC;

-- 確認特定 ID 的寄信結果
SELECT ID, MAIL_TO, MAIL_CC, MAIL_SUBJECT, STATUS, CREATION_DATE, MODIFY_DATE
FROM MAIL_INFO
WHERE ID BETWEEN {起始ID} AND {結束ID}
ORDER BY ID ASC;</pre><div class="table-wrap"><table><thead><tr><th>STATUS</th><th>說明</th></tr></thead><tbody><tr><td><code>N</code></td><td>待寄出（排程會撈這個）</td></tr><tr><td><code>Y</code></td><td>已成功寄出</td></tr><tr><td><code>X</code></td><td>已作廢（人工標記，排程不會處理）</td></tr></tbody></table></div></div><div style="margin-bottom:28px;"><p style="font-weight:700;font-size:1rem;margin-bottom:12px;color:#1e293b;">注意事項與踩雷記錄</p><div class="callout" style="margin-bottom:12px;background:#fef2f2;border-color:#f87171;"><p style="color:#991b1b;margin:0 0 8px 0;font-size:0.9rem;"><strong>⚠️ 重啟時舊資料會被一起寄出</strong></p><p style="color:#991b1b;margin:0 0 6px 0;font-size:0.9rem;">將 <code>scheduling.mail.enabled</code> 改為 <code>true</code> 重啟後，DB 裡所有歷史殘留的 <code>status=&#39;N&#39;</code> 資料會被排程一次全部寄出。</p><p style="color:#991b1b;margin:0;font-size:0.9rem;"><strong>2026-05-11 實際發生：</strong>DB 裡有 54,008 筆歷史殘留資料（ID 707 ～ 57934），重啟後排程在幾分鐘內全部寄出，實際寄出數千封至真實單位信箱。預防方式：每次開啟排程前務必先執行上方清查步驟。</p></div><ul style="margin:0;padding-left:20px;line-height:2;color:#475569;font-size:0.9rem;"><li><code>status=&#39;N&#39;</code> 是很短暫的過渡狀態，按下 API 後排程 20～30 秒就會改成 <code>&#39;Y&#39;</code>，需要在幾秒內立刻查 DB 才能觀察到。</li><li>若 DB 裡查無 <code>BatchSettingCompleteNotifyMail_TO_UNIT</code> 模板，系統會 fallback 使用程式碼內硬編碼的主旨與內文，仍然可以正常寄出。</li><li><code>NCATEST@iisigroup.com</code> 對應多個測試帳號，無法單靠信箱反查是哪個單位，需透過 <code>MAIL_INFO.MAIL_CONTENT</code> 內文中的單位名稱判斷。</li></ul></div><div><p style="font-weight:700;font-size:1rem;margin-bottom:12px;color:#1e293b;">2026-05-11 完整排程流程測試驗收記錄</p><div class="table-wrap"><table><thead><tr><th>項目</th><th>結果</th></tr></thead><tbody><tr><td>API</td><td><code>POST /QSP042b02/sendMailToUnit</code>　參數：<code>{&quot;yy&quot;: 114, &quot;batch&quot;: 135}</code></td></tr><tr><td>寫入筆數</td><td>44 筆（44 個符合條件的單位）</td></tr><tr><td>測試信箱</td><td><code>NCATEST@iisigroup.com</code></td></tr><tr><td>排程寄出</td><td>✅ log 出現 <code>GraphMailSender: 郵件發送成功</code></td></tr><tr><td>status 更新</td><td>✅ 寄出後 status 由 <code>&#39;N&#39;</code> 更新為 <code>&#39;Y&#39;</code></td></tr><tr><td>收信確認</td><td>✅ 測試信箱收到信（Exchange 政策擋信為 IT 環境問題，非後端問題）</td></tr><tr><td>發現問題</td><td>重啟時 DB 殘留 54,008 筆舊 status=&#39;N&#39; 資料全部被寄出</td></tr><tr><td>處理方式</td><td>手動執行 UPDATE 將殘留資料改為 <code>status=&#39;X&#39;</code></td></tr><tr><td>結論</td><td>✅ 寄信排程完整流程驗收通過</td></tr></tbody></table></div></div></div><div style="margin-bottom:0;"><div class="callout" style="background:#eff6ff;border-color:#93c5fd;"><p style="color:#1e40af;margin:0;"><strong>💡 一句話總結：</strong>後續任何需要寄信的業務功能，建立 <code>MailInfo</code> 並寫入 <code>MAIL_INFO</code>，由排程與 <code>GraphMailSender</code> 統一透過 Microsoft Graph API 寄送即可，不需在各業務 API 中自行呼叫 Graph API 或取得 OAuth Token。 </p></div></div>`,15)])])}const s=e(i,[["render",n]]);export{s as default};
