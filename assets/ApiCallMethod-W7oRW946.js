import{_ as p,o as d,c as l,a as n,b as s,w as o,u as a,N as c,d as r,f as x}from"./index-BGmSuorv.js";const b={},g={class:"space-y-8"};function u(i,e){return d(),l("div",g,[...e[0]||(e[0]=[n(`<section><h3 class="text-lg font-bold text-slate-700 mb-3">適用規範依據</h3><p class="text-sm text-gray-600 mb-3">本文件依據以下資安規範中的輸入驗證控制措施要求撰寫：</p><div class="overflow-x-auto"><table class="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-slate-100"><tr><th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">規範</th><th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">對應條文 / 說明</th></tr></thead><tbody><tr class="border-b"><td class="px-4 py-2 font-medium">SSDLC（安全軟體開發生命週期）</td><td class="px-4 py-2">輸入驗證（Input Validation）控制措施，要求於伺服器端驗證所有輸入之語法、語義、長度及字元集</td></tr><tr class="border-b bg-gray-50"><td class="px-4 py-2 font-medium">OWASP Top 10 A03:2021 – Injection</td><td class="px-4 py-2">防止 SQL Injection、XSS、Command Injection 等注入攻擊，建議以白名單驗證輸入</td></tr><tr class="border-b"><td class="px-4 py-2 font-medium">行政院「資通系統防護基準」</td><td class="px-4 py-2">資通系統應驗證使用者輸入之有效語法與語義（字元集、長度、數值範圍、可接受值），並建立輸入白名單或以黑名單過濾惡意資料</td></tr><tr class="bg-gray-50"><td class="px-4 py-2 font-medium">ISO/IEC 27002:2022 — 8.28 安全程式設計</td><td class="px-4 py-2">要求對所有外部輸入進行驗證，避免已知弱點（如 Injection、Buffer Overflow）</td></tr></tbody></table></div><p class="text-sm text-gray-600 mt-3">本文件整理目前後端已實作內容與待補強之處，並提供對應實作指引。</p></section><section><h3 class="text-lg font-bold text-slate-700 mb-3">一、目前已實作（可參考）</h3><div class="overflow-x-auto"><table class="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-slate-100"><tr><th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">機制</th><th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">實作位置</th><th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">說明</th></tr></thead><tbody><tr class="border-b"><td class="px-4 py-2 font-medium">Bean Validation @Valid</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">DTO + Controller</code></td><td class="px-4 py-2">欄位必填、格式驗證</td></tr><tr class="border-b bg-gray-50"><td class="px-4 py-2 font-medium">XSS 黑名單過濾</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">XssStringJsonDeserializer + XssProtectionUtils</code></td><td class="px-4 py-2">全域套用於 JSON Body</td></tr><tr class="border-b"><td class="px-4 py-2 font-medium">密碼字元集白名單</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">PWordUtils.checkPWordRule()</code></td><td class="px-4 py-2">限制可用字元與長度</td></tr><tr class="bg-gray-50"><td class="px-4 py-2 font-medium">統一例外處理</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">RestApiExceptionHandler</code></td><td class="px-4 py-2">驗證失敗回傳 400</td></tr></tbody></table></div></section><section><h3 class="text-lg font-bold text-slate-700 mb-3">二、待補強項目與實作方式</h3><div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6"><h4 class="font-bold text-blue-800 mb-2">📌 SSDLC 架構方向說明</h4><p class="text-sm text-blue-900 mb-3"> 依據 SSDLC 規範，建議將現有使用 <code class="bg-blue-100 px-1 rounded">GET + @RequestParam</code> 的 API 全面改為 <code class="bg-blue-100 px-1 rounded">POST + Request Body</code>。此方式可同時解決以下問題，且不需額外補強 XSS 過濾與 Bean Validation： </p><div class="overflow-x-auto"><table class="min-w-full text-sm border border-blue-200 rounded-lg overflow-hidden"><thead class="bg-blue-100"><tr><th class="px-4 py-2 text-left font-semibold text-blue-800 border-b">問題</th><th class="px-4 py-2 text-center font-semibold text-blue-800 border-b">GET + @RequestParam</th><th class="px-4 py-2 text-center font-semibold text-blue-800 border-b">POST + Request Body</th></tr></thead><tbody><tr class="border-b"><td class="px-4 py-2">參數暴露於 URL / Log</td><td class="px-4 py-2 text-center text-red-500">❌</td><td class="px-4 py-2 text-center text-green-600">✅ 參數在 Body，不出現於 URL</td></tr><tr class="border-b bg-blue-50/50"><td class="px-4 py-2">XSS 自動過濾</td><td class="px-4 py-2 text-center text-red-500">❌ 需額外處理</td><td class="px-4 py-2 text-center text-green-600">✅ 全域 XssStringJsonDeserializer 自動覆蓋</td></tr><tr class="border-b"><td class="px-4 py-2">Bean Validation</td><td class="px-4 py-2 text-center text-red-500">❌ 需加 @Validated</td><td class="px-4 py-2 text-center text-green-600">✅ @Valid 直接作用於 DTO</td></tr><tr><td class="px-4 py-2">敏感資料（身分證、帳號）外洩風險</td><td class="px-4 py-2 text-center text-red-500">❌ 容易被 access log 記錄</td><td class="px-4 py-2 text-center text-green-600">✅ 不出現在 log</td></tr></tbody></table></div></div><div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-6"><h4 class="font-bold text-amber-800 mb-2">@RequestParam 僅保留於以下無法改變的情境</h4><div class="overflow-x-auto"><table class="min-w-full text-sm border border-amber-200 rounded-lg overflow-hidden"><thead class="bg-amber-100"><tr><th class="px-4 py-2 text-left font-semibold text-amber-800 border-b">情境</th><th class="px-4 py-2 text-left font-semibold text-amber-800 border-b">說明</th><th class="px-4 py-2 text-left font-semibold text-amber-800 border-b">範例</th></tr></thead><tbody><tr class="border-b"><td class="px-4 py-2 font-medium">第三方 OAuth / SSO 回調</td><td class="px-4 py-2">第三方規範強制使用 URL 參數，後端無法控制格式</td><td class="px-4 py-2"><code class="bg-amber-100 px-1 rounded text-xs">/callback?code=xxx&amp;state=yyy</code></td></tr><tr class="border-b bg-amber-50/50"><td class="px-4 py-2 font-medium">瀏覽器直接觸發的檔案下載</td><td class="px-4 py-2">需讓瀏覽器直接開啟 URL，不能用 POST Body</td><td class="px-4 py-2"><code class="bg-amber-100 px-1 rounded text-xs">/file/download?token=xxx</code></td></tr><tr class="border-b"><td class="px-4 py-2 font-medium">Spring Actuator 內建端點</td><td class="px-4 py-2">框架自己定義，開發者無法修改</td><td class="px-4 py-2"><code class="bg-amber-100 px-1 rounded text-xs">/actuator/health</code></td></tr><tr><td class="px-4 py-2 font-medium">符合 RESTful 語意的識別用路徑</td><td class="px-4 py-2">@PathVariable 用於資源識別（非查詢條件），屬例外但須補上長度驗證</td><td class="px-4 py-2"><code class="bg-amber-100 px-1 rounded text-xs">/api/users/{id}</code></td></tr></tbody></table></div><p class="text-sm text-amber-800 mt-3 font-medium"> ⚠️ 以上例外情境若出現敏感資料（身分證號、帳號等），仍應避免使用 URL 參數，改以 POST Body 傳遞。 </p></div><div class="mb-6"><h4 class="font-bold text-slate-700 mb-2">❶ 現有 GET + @RequestParam API 改為 POST + Request Body</h4><p class="text-sm text-gray-600 mb-3"><code class="bg-gray-100 px-1 rounded">@RequestParam</code> 參數出現在 URL 中，會被伺服器 access log、瀏覽器歷史、Proxy 記錄， 且不受全域 <code class="bg-gray-100 px-1 rounded">XssStringJsonDeserializer</code> 保護，需額外補強。 </p><div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-3"><p class="text-sm font-semibold text-red-700 mb-2">❌ 問題範例（Pnr014b02Controller.java）</p><pre class="bg-red-100 p-3 rounded text-xs overflow-x-auto text-gray-800"><code>// ❌ 參數暴露於 URL，無 XSS 過濾，無長度驗證
@GetMapping(&quot;/list&quot;)
public ResponseEntity&lt;?&gt; getList(
    @RequestParam String status,
    @RequestParam String applyStage,
    @RequestParam(required = false) String seqNo,
    @RequestParam(required = false) String idNo,
    @RequestParam(required = false) String yy
)</code></pre></div><div class="bg-green-50 border border-green-200 rounded-lg p-4"><p class="text-sm font-semibold text-green-700 mb-2">✅ 修正方式：改為 POST + DTO</p><p class="text-sm font-medium text-green-800 mb-2">Step 1：建立對應的 Request DTO</p><pre class="bg-green-100 p-3 rounded text-xs overflow-x-auto mb-3 text-gray-800"><code>import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class GetListReq {

    @NotBlank(message = &quot;status 不能為空&quot;)
    @Pattern(regexp = &quot;^[0-9]$&quot;, message = &quot;status 格式錯誤，應為單一數字&quot;)
    private String status;

    @NotBlank(message = &quot;applyStage 不能為空&quot;)
    @Size(max = 10, message = &quot;applyStage 長度不可超過10字元&quot;)
    private String applyStage;

    @Size(max = 20, message = &quot;seqNo 長度不可超過20字元&quot;)
    private String seqNo;

    @Size(max = 10, message = &quot;idNo 長度不可超過10字元&quot;)
    private String idNo;

    @Pattern(regexp = &quot;^[0-9]{3,4}$&quot;, message = &quot;yy 格式錯誤，應為3~4位數字&quot;)
    private String yy;
}</code></pre><p class="text-sm font-medium text-green-800 mb-2">Step 2：Controller 改為 @PostMapping + @RequestBody</p><pre class="bg-green-100 p-3 rounded text-xs overflow-x-auto text-gray-800"><code>// ✅ 改為 POST + Request Body
@PostMapping(&quot;/list&quot;)
public ResponseEntity&lt;?&gt; getList(@Valid @RequestBody GetListReq req) {
    // 原本 @RequestParam 的使用改為 req.getStatus() 等
}</code></pre></div></div><div class="mb-6"><h4 class="font-bold text-slate-700 mb-2">❷ 若仍有無法移除的 @RequestParam，需補強驗證與 XSS 過濾</h4><p class="text-sm text-gray-600 mb-3">當確實無法改為 POST Body 時（如上述例外情境），需手動補強。</p><div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-3"><p class="text-sm font-semibold text-green-700 mb-2">修正方式 A：補上 @Validated + 驗證標註</p><pre class="bg-green-100 p-3 rounded text-xs overflow-x-auto mb-3 text-gray-800"><code>import org.springframework.validation.annotation.Validated;

@Validated  // ← 加上此標註，@RequestParam 驗證才會生效
@RestController
public class SomeController {

    @GetMapping(&quot;/download&quot;)
    public ResponseEntity&lt;?&gt; download(
        @RequestParam @Size(max = 50, message = &quot;token 長度不可超過50字元&quot;) String token
    ) { ... }
}</code></pre><p class="text-sm font-medium text-green-800 mb-2">在 RestApiExceptionHandler 補上對應例外處理：</p><pre class="bg-green-100 p-3 rounded text-xs overflow-x-auto text-gray-800"><code>import jakarta.validation.ConstraintViolationException;

@ExceptionHandler(ConstraintViolationException.class)
public ResponseEntity&lt;CustomApiResponse&lt;?&gt;&gt; handleConstraintViolation(
        ConstraintViolationException e) {
    String errorMessage = e.getConstraintViolations().stream()
            .map(v -&gt; v.getMessage())
            .collect(Collectors.joining(&quot;, &quot;));
    return ResponseEntity.badRequest()
            .body(CustomApiResponse.failure(&quot;請求參數錯誤: &quot; + errorMessage));
}</code></pre></div><div class="bg-green-50 border border-green-200 rounded-lg p-4"><p class="text-sm font-semibold text-green-700 mb-2">修正方式 B：補上 XSS 過濾（新增全域 Filter）</p><p class="text-sm text-green-800 mb-2">新增 <code class="bg-green-100 px-1 rounded">XssRequestParameterFilter.java</code>，包裝 HttpServletRequest 覆寫 getParameter：</p><pre class="bg-green-100 p-3 rounded text-xs overflow-x-auto text-gray-800"><code>package moi.rdss.platform.config.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;
import jakarta.servlet.http.HttpServletResponse;
import moi.rdss.platform.utils.XssProtectionUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.Arrays;

@Component
public class XssRequestParameterFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {
        filterChain.doFilter(new XssRequestWrapper(request), response);
    }

    static class XssRequestWrapper extends HttpServletRequestWrapper {
        public XssRequestWrapper(HttpServletRequest request) { super(request); }

        @Override
        public String getParameter(String name) {
            return XssProtectionUtils.cleanXSS(super.getParameter(name));
        }

        @Override
        public String[] getParameterValues(String name) {
            String[] values = super.getParameterValues(name);
            if (values == null) return null;
            return Arrays.stream(values)
                    .map(XssProtectionUtils::cleanXSS)
                    .toArray(String[]::new);
        }
    }
}</code></pre></div></div><div class="mb-6"><h4 class="font-bold text-slate-700 mb-2">❸ DTO 欄位缺乏細部驗證（只有 @NotBlank，無長度/格式限制）</h4><p class="text-sm text-gray-600 mb-3"> 部分 DTO 只標註 <code class="bg-gray-100 px-1 rounded">@NotBlank</code>，但未限制最大長度或字元集，導致可傳入超長字串造成資料庫異常或服務拒絕。 </p><div class="bg-green-50 border border-green-200 rounded-lg p-4"><p class="text-sm font-semibold text-green-700 mb-2">修正方式：在 DTO 欄位補上對應驗證標註</p><pre class="bg-green-100 p-3 rounded text-xs overflow-x-auto text-gray-800"><code>import jakarta.validation.constraints.*;

@NotBlank(message = &quot;帳號不能為空&quot;)
@Size(max = 15, message = &quot;帳號長度不可超過15字元&quot;)
@Pattern(regexp = &quot;^[a-zA-Z0-9_-]+$&quot;, message = &quot;帳號只能包含英數字、底線、橫線&quot;)
private String account;

@NotBlank(message = &quot;姓名不能為空&quot;)
@Size(max = 50, message = &quot;姓名長度不可超過50字元&quot;)
private String name;

@Size(max = 200, message = &quot;備註長度不可超過200字元&quot;)
private String remark;</code></pre></div></div><div class="mb-6"><h4 class="font-bold text-slate-700 mb-2">常用驗證標註對照表</h4><div class="overflow-x-auto"><table class="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-slate-100"><tr><th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">標註</th><th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">說明</th><th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">範例</th></tr></thead><tbody><tr class="border-b"><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@NotBlank</code></td><td class="px-4 py-2">不可為空白字串</td><td class="px-4 py-2">必填文字欄位</td></tr><tr class="border-b bg-gray-50"><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@NotNull</code></td><td class="px-4 py-2">不可為 null</td><td class="px-4 py-2">必填數值/物件欄位</td></tr><tr class="border-b"><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@Size(min, max)</code></td><td class="px-4 py-2">限制字串或集合長度</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@Size(max = 50)</code></td></tr><tr class="border-b bg-gray-50"><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@Min / @Max</code></td><td class="px-4 py-2">限制數值範圍</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@Min(0) @Max(9999)</code></td></tr><tr class="border-b"><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@Pattern(regexp)</code></td><td class="px-4 py-2">正則表達式格式驗證</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@Pattern(regexp = &quot;^[0-9]+$&quot;)</code></td></tr><tr class="border-b bg-gray-50"><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@Email</code></td><td class="px-4 py-2">Email 格式驗證</td><td class="px-4 py-2">Email 欄位</td></tr><tr><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@Digits(integer, fraction)</code></td><td class="px-4 py-2">限制數字位數</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded">@Digits(integer = 4, fraction = 0)</code></td></tr></tbody></table></div></div></section><section><h3 class="text-lg font-bold text-slate-700 mb-3">三、驗證原則總結</h3><div class="bg-indigo-50 border border-indigo-200 rounded-lg p-4"><ol class="list-decimal list-inside space-y-2 text-sm text-indigo-900"><li>✅ 所有驗證必須在 Server 端（後端）執行，不可只依賴前端</li><li>✅ JSON Body → 使用 <code class="bg-indigo-100 px-1 rounded">@Valid</code> + DTO 標註</li><li>✅ @RequestParam / @PathVariable → 使用 <code class="bg-indigo-100 px-1 rounded">@Validated</code> + 標註於參數</li><li>✅ 字串輸入 → 使用白名單（<code class="bg-indigo-100 px-1 rounded">@Pattern</code> 限制字元集）優先於黑名單</li><li>✅ XSS 過濾需同時涵蓋 JSON Body 與 URL 參數</li><li>✅ 驗證失敗統一由 <code class="bg-indigo-100 px-1 rounded">RestApiExceptionHandler</code> 回傳 400 Bad Request</li></ol></div></section><section><h3 class="text-lg font-bold text-slate-700 mb-3">四、相關檔案位置</h3><div class="overflow-x-auto"><table class="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-slate-100"><tr><th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">檔案</th><th class="px-4 py-2 text-left font-semibold text-slate-700 border-b">路徑</th></tr></thead><tbody><tr class="border-b"><td class="px-4 py-2 font-medium">XSS 過濾工具</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded text-xs">moi.rdss.platform.utils.XssProtectionUtils</code></td></tr><tr class="border-b bg-gray-50"><td class="px-4 py-2 font-medium">XSS JSON Deserializer</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded text-xs">moi.rdss.platform.config.databind.XssStringJsonDeserializer</code></td></tr><tr class="border-b"><td class="px-4 py-2 font-medium">密碼規則驗證</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded text-xs">moi.rdss.platform.utils.PWordUtils</code></td></tr><tr class="border-b bg-gray-50"><td class="px-4 py-2 font-medium">統一例外處理</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded text-xs">moi.rdss.platform.exception.handler.RestApiExceptionHandler</code></td></tr><tr><td class="px-4 py-2 font-medium">安全設定</td><td class="px-4 py-2"><code class="bg-gray-100 px-1 rounded text-xs">moi.rdss.platform.config.SecurityConfig</code></td></tr></tbody></table></div></section><section><h3 class="text-lg font-bold text-slate-700 mb-3">📌 優先修正建議</h3><div class="bg-rose-50 border border-rose-200 rounded-lg p-4"><ol class="list-decimal list-inside space-y-3 text-sm text-rose-900"><li><span class="font-bold">（首選）</span> 將現有 <code class="bg-rose-100 px-1 rounded">GET + @RequestParam</code> API 全面改為 <code class="bg-rose-100 px-1 rounded">POST + Request Body + DTO</code>，同時解決 XSS 過濾與 Bean Validation 問題 </li><li><span class="font-bold">（無法改 POST 時）</span> 補上 <code class="bg-rose-100 px-1 rounded">@Validated</code> + 驗證標註，並新增 <code class="bg-rose-100 px-1 rounded">XssRequestParameterFilter</code></li><li> 逐一檢視既有 DTO 欄位是否補上 <code class="bg-rose-100 px-1 rounded">@Size</code> 長度限制與 <code class="bg-rose-100 px-1 rounded">@Pattern</code> 字元集白名單 </li></ol></div></section>`,6)])])}const m=p(b,[["render",u]]),f={__name:"ApiCallMethod",setup(i){return(e,t)=>(d(),l("div",null,[t[1]||(t[1]=n(`<p class="muted" style="margin-bottom:24px;">遵循 SSDLC 安全原則，統一使用 POST 方法傳遞參數。</p><div style="margin-bottom:32px;padding:20px;background:#eff6ff;border-left:4px solid #3b82f6;border-radius:8px;"><h4 style="margin-bottom:12px;color:#1e40af;font-size:1.1rem;">🔒 SSDLC 安全原則</h4><p style="color:#1e40af;line-height:1.8;margin-bottom:12px;"> 基於 Secure Software Development Lifecycle（安全軟體開發生命週期）原則，<strong>所有 API 請求統一使用 POST 方法</strong>，避免敏感資料暴露於 URL 中。 </p><div style="margin-top:16px;padding:16px;background:#dbeafe;border-radius:6px;"><p style="color:#1e40af;font-weight:600;margin-bottom:8px;">為何不可使用 POST 以外的方法？</p><ul style="color:#1e40af;line-height:1.8;margin-left:20px;"><li><strong>GET 方法</strong>：參數暴露在 URL，容易被瀏覽器歷史記錄、伺服器 log、代理伺服器記錄，造成資料外洩風險</li><li><strong>PUT/PATCH 方法</strong>：雖然參數在 Body，但語義上不適合查詢操作，且部分防火牆或代理可能阻擋</li><li><strong>DELETE 方法</strong>：通常不支援 Request Body，重要參數需放在 URL，同樣有安全疑慮</li><li><strong>安全性考量</strong>：POST + Body 可確保所有參數加密傳輸（HTTPS），不會留存於任何 URL 記錄中</li></ul></div><p style="margin-top:12px;padding:12px;background:#fef3c7;border-left:3px solid #f59e0b;border-radius:4px;color:#92400e;font-size:0.95rem;"> ⏱️ <strong>註記</strong>：現有系統若使用非 POST 方法，請於未來排程時間逐步修正為符合 SSDLC 規範的 POST 方法。 </p></div><div style="margin-bottom:48px;"><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">📋 實作規範</h3><div class="grid"><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#059669;">✓ 查詢類 API</h4><p style="margin-bottom:12px;color:var(--muted);">使用 <strong>POST + Body</strong></p><ul><li>查詢條件放在 Request Body</li><li>分頁參數（page、size）也放在 Body</li><li>避免在 URL 中暴露查詢條件</li></ul><pre style="margin-top:16px;">POST /api/user/query

{
  &quot;keyword&quot;: &quot;搜尋關鍵字&quot;,
  &quot;page&quot;: 1,
  &quot;size&quot;: 15
}</pre></article><article class="card"><h4 style="margin-bottom:12px;font-size:1rem;color:#2563eb;">✓ 操作類 API</h4><p style="margin-bottom:12px;color:var(--muted);">使用 <strong>POST + Body</strong></p><ul><li>新增、修改、刪除統一用 POST</li><li>所有參數放在 Request Body</li><li>確保資料傳輸安全性</li></ul><pre style="margin-top:16px;">POST /api/user/save

{
  &quot;name&quot;: &quot;使用者名稱&quot;,
  &quot;email&quot;: &quot;user@example.com&quot;,
  &quot;status&quot;: &quot;active&quot;
}</pre></article></div></div><div><h3 style="font-size:1.25rem;margin-bottom:20px;color:var(--text);">⚠️ 注意事項</h3><div class="callout"><ul><li><strong>禁止使用 GET 方法</strong>：即使是單純查詢，也應使用 POST + Body</li><li><strong>URL 參數限制</strong>：避免將任何業務參數放在 Query String 中</li><li><strong>API 命名規範</strong>：建議使用動詞命名，如 <code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">/query</code>、<code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">/save</code>、<code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;">/delete</code></li><li><strong>文件化</strong>：每支 API 都需明確記錄 Request Body 結構</li></ul></div></div><div style="margin-top:48px;padding:24px;background:#fef2f2;border-radius:12px;border:1px solid #fecaca;"><h4 style="margin-bottom:16px;font-size:1.1rem;color:#991b1b;">❌ 不符合 SSDLC 原則</h4><pre style="background:#7f1d1d;color:#fecaca;margin-bottom:0;">// 錯誤示範：使用 GET 方法
GET /api/user/list?keyword=測試&amp;status=active&amp;page=1&amp;size=15

// 問題：
// 1. 查詢條件暴露在 URL 中
// 2. 可能包含敏感資訊
// 3. 有長度限制
// 4. 容易被記錄在 log 中</pre></div><div style="margin-top:16px;padding:24px;background:#f0fdf4;border-radius:12px;border:1px solid #bbf7d0;"><h4 style="margin-bottom:16px;font-size:1.1rem;color:#166534;">✓ 符合 SSDLC 原則</h4><pre style="background:#14532d;color:#d1fae5;margin-bottom:0;">// 正確示範：使用 POST 方法
POST /api/user/query

{
  &quot;keyword&quot;: &quot;測試&quot;,
  &quot;status&quot;: &quot;active&quot;,
  &quot;page&quot;: 1,
  &quot;size&quot;: 15
}

// 優點：
// 1. 參數不暴露在 URL
// 2. 無長度限制
// 3. 提升安全性
// 4. 符合 SSDLC 規範</pre></div>`,6)),s(a(x),{style:{"margin-top":"48px"}},{default:o(()=>[s(a(c),{name:"backend-validation"},{header:o(()=>[...t[0]||(t[0]=[r("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[r("span",{style:{"font-size":"1.3rem","font-weight":"700",color:"#7c3aed"}},"🔒 後端輸入驗證實作"),r("span",{style:{"font-size":"0.9rem",color:"#6b7280","font-weight":"normal"}},"（點擊展開查看 Bean Validation、XSS 過濾、DTO 驗證規範）")],-1)])]),default:o(()=>[s(m)]),_:1})]),_:1})]))}};export{f as default};
