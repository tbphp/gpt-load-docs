import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/reference/errors");
}

const TOC = [
  { id: "namespaces", label: "先分清三套信息" },
  { id: "management", label: "管理 API 错误" },
  { id: "data-plane", label: "数据面错误" },
  { id: "request-logs", label: "请求日志错误" },
  { id: "log-fields", label: "请求日志字段" },
  { id: "example", label: "完整案例" },
  { id: "route-reasons", label: "路由检查原因码" },
  { id: "recovery", label: "重试与恢复" },
];

type ErrorRow = readonly [code: string, status: string, meaning: string, action: string];
type FieldRow = readonly [field: string, values: string, meaning: string];
type DataRow = readonly [code: string, fields: string, when: string];

const MANAGEMENT_COMMON: ErrorRow[] = [
  ["BAD_REQUEST", "400", "请求参数或路径不合法", "修正请求后再试"],
  ["INVALID_JSON", "400", "JSON 格式、字段或请求体结构不合法", "按接口要求修正 JSON"],
  ["VALIDATION_FAILED", "400", "请求通过解析，但业务校验失败", "检查 data 中的字段定位信息"],
  ["REQUEST_TOO_LARGE", "413", "管理请求体超过大小限制", "减小请求体或拆分操作"],
  ["UNAUTHORIZED", "401", "管理凭据无效", "检查 AUTH_KEY 或访问密钥"],
  ["FORBIDDEN", "403", "当前身份没有该操作权限", "改用 AUTH_KEY 或缩小操作范围"],
  ["AUTH_LOCKED", "429", "同一直接对端连续认证失败后被临时锁定", "按 Retry-After 等待，不要继续重试错误密钥"],
  ["NOT_FOUND", "404", "目标资源不存在", "刷新资源列表并核对 ID"],
  ["ROUTE_NOT_FOUND", "404", "请求的管理路由不存在或已经退役", "核对路径和当前版本的路由合同"],
  ["METHOD_NOT_ALLOWED", "405", "管理路由存在，但 HTTP 方法不受支持", "改用该路由声明的方法"],
  ["DUPLICATE_RESOURCE", "409", "唯一资源已经存在", "复用现有资源或修改唯一字段"],
  ["BAD_GATEWAY", "502", "管理操作依赖的上游请求失败", "检查 data 和上游状态后再试"],
  ["DATABASE_ERROR", "500", "数据库操作失败", "检查服务日志和数据库可用性"],
  ["INTERNAL_SERVER_ERROR", "500", "未归类的内部错误", "使用服务日志定位；写操作不要盲目重放"],
];

const MANAGEMENT_CONSISTENCY: ErrorRow[] = [
  ["IDEMPOTENCY_KEY_REQUIRED", "428", "该写操作要求 Idempotency-Key", "生成规范 UUID v4 并随请求发送"],
  ["INVALID_IDEMPOTENCY_KEY", "400", "Idempotency-Key 不是规范的小写 UUID v4", "更换为规范 UUID v4"],
  ["IDEMPOTENCY_KEY_REUSED", "409", "同一幂等键被用于不同请求", "为新的逻辑操作生成新键"],
  ["IDEMPOTENCY_RESULT_EXPIRED", "410", "幂等结果已过保留期，但操作身份仍可识别", "根据 data 核对已完成资源，不要直接重复创建"],
  ["CONTROL_OPERATION_INCOMPLETE", "503", "数据库已提交，但运行态恢复尚未完成", "保留同一幂等键并等待自动协调"],
  ["CONTROL_RECOVERY_PENDING", "503", "更早的已提交操作仍在恢复", "按 data.retry_after_ms 等待后重试"],
  ["SETTINGS_PRECONDITION_REQUIRED", "428", "更新设置缺少 If-Match", "先读取设置和 ETag，再带 If-Match 更新"],
  ["SETTINGS_VERSION_CONFLICT", "412", "设置在读取后已被其他请求修改", "使用 data 中的新设置重新合并"],
];

const MANAGEMENT_DOMAIN: ErrorRow[] = [
  ["GROUP_IN_USE", "409", "分组仍被访问密钥引用", "先解除 data 中列出的引用"],
  ["INVALID_CREDENTIAL_STATE", "409", "凭据当前状态不允许恢复", "刷新凭据状态后选择允许的操作"],
  ["CHANNEL_TARGET_CONFLICT", "409", "已有分组使用相同渠道目标", "复用现有分组或显式确认重复目标"],
  ["MODEL_NAME_CONFLICT", "409", "同一分组内客户端模型名冲突", "根据 data.conflicts 修正模型名或别名"],
  ["NO_ACTIVE_CREDENTIAL", "409", "分组没有可用于执行操作的凭据", "添加、启用或重新授权凭据"],
  ["MODEL_PRICE_UNPRICED_CONFIRMATION_REQUIRED", "409", "将模型标记为未定价需要显式确认", "确认后重新提交"],
  ["MODEL_PRICE_REFERENCED", "409", "模型价格仍被分组引用", "先解除引用，再删除价格"],
  ["MODEL_PRICE_AUTOMATIC_DELETE_FORBIDDEN", "409", "自动同步的模型价格不能手动删除", "修改同步来源或等待后续同步"],
  ["OAUTH_FILE_INVALID", "400", "OAuth JSON 无法识别或字段无效", "重新导出并导入完整文件"],
  ["OAUTH_FILE_TOO_LARGE", "413", "OAuth 文件超过大小限制", "只保留所需凭据内容"],
  ["AUTHORIZATION_UNAVAILABLE", "503", "浏览器授权、设备码授权或订阅凭据刷新暂不可用", "检查渠道能力、网络和服务日志"],
  ["AUTHORIZATION_STATE_INVALID", "400", "授权回调状态无效或不匹配", "重新发起一次授权"],
  ["AUTHORIZATION_EXCHANGE_FAILED", "502", "授权码交换凭据失败", "检查上游状态后重新授权"],
  ["STAGED_CREDENTIAL_NOT_READY", "409", "暂存凭据尚未完成授权", "完成授权后再连接"],
  ["STAGED_CREDENTIAL_EXPIRED", "410", "暂存凭据已经过期", "重新导入或授权"],
  ["STAGED_CREDENTIAL_CONSUMED", "409", "暂存凭据已经被使用", "刷新列表，不要重复连接"],
  ["STAGED_CREDENTIAL_MISMATCH", "409", "暂存凭据与目标分组不匹配", "选择匹配的渠道和分组"],
  ["DUPLICATE_CREDENTIAL_IDENTITY", "409", "同一订阅账号已存在于分组中", "使用现有账号或连接到其他分组"],
  ["CREDENTIAL_REAUTHORIZATION_REQUIRED", "409", "凭据需要重新授权", "重新完成 OAuth 授权"],
  ["CREDENTIAL_AUTH_OUTCOME_UNKNOWN", "409", "无法确认授权是否完成", "先刷新状态，不要立即重复授权"],
  ["CREDENTIAL_REFRESH_TEMPORARILY_UNAVAILABLE", "503", "凭据暂时无法刷新", "稍后重试或改用其他凭据"],
  ["CREDENTIAL_VERSION_CONFLICT", "409", "凭据在操作期间已被修改", "刷新凭据后重新操作"],
  ["RESET_CREDIT_UNAVAILABLE", "409", "当前没有可用的额度重置机会", "等待上游提供新的重置机会"],
  ["RESET_CREDIT_REJECTED", "502", "上游拒绝了额度重置", "查看账号状态并联系上游"],
  ["RESET_CREDIT_OUTCOME_UNKNOWN", "503", "无法确认额度重置结果", "必须使用相同 Idempotency-Key 重试"],
];

const DATA_PLANE_ERRORS: ErrorRow[] = [
  ["invalid_access_key", "401", "访问密钥不存在、已停用、已过期或来源地址不允许", "检查客户端使用的访问密钥；这类失败不会进入请求日志"],
  ["protocol_endpoint_not_found", "404", "请求路径不属于已启用的数据面端点", "核对基础 URL、协议和路径"],
  ["method_not_allowed", "405", "端点存在，但 HTTP 方法不受支持", "使用该端点声明的方法"],
  ["invalid_protocol_request", "400", "请求体或协议字段无法解析", "按客户端协议修正请求"],
  ["model_required_by_filter", "400", "访问密钥限制了模型，但请求没有模型名", "指定模型或移除模型过滤"],
  ["no_available_candidate", "503", "当前没有可路由的分组或凭据", "先用路由检查定位具体 reason_code"],
  ["upstream_connect_failed", "502", "无法连接到任何可用上游", "检查网络、代理和上游地址后再试"],
  ["upstream_timeout", "504", "上游请求超时", "检查请求日志的派发和提交状态，非幂等请求不要盲目重放"],
  ["upstream_protocol_error", "502", "上游响应无法安全处理", "检查上游响应格式、Content-Encoding 和服务日志"],
  ["protocol_conversion_unsupported", "422", "没有路由能够原生执行或安全转换请求", "更换协议、Operation 或渠道"],
  ["request_too_large", "413", "数据面请求体超过大小限制", "减小请求体"],
  ["unsupported_content_encoding", "415", "请求使用了不支持的 Content-Encoding", "改用 identity、gzip、br、deflate 或 zstd"],
  ["invalid_content_encoding", "400", "压缩请求体无法解码", "重新编码请求体并核对请求头"],
  ["not_acceptable", "406", "客户端不接受 identity 编码的响应", "允许 identity 响应"],
  ["model_list_too_large", "500", "可见模型列表超过安全响应限制", "缩小访问密钥可见的模型范围"],
  ["access_key_rate_limited", "429", "访问密钥超过 RPM 限制", "按 Retry-After 等待"],
  ["access_key_cost_limit_exceeded", "429", "访问密钥触发估算成本限制", "检查 data.recoverable、next_available_at_ms 和 blocking_rules"],
  ["configuration_changed", "503", "请求使用的配置快照已经失效", "按 Retry-After 短暂等待后重试"],
];

const LOG_ONLY_ERRORS: readonly (readonly [code: string, meaning: string, action: string])[] = [
  ["upstream_rate_limited", "上游对本次尝试限流", "查看 Retry-After、冷却时间和后续尝试"],
  ["upstream_model_unavailable", "上游模型或候选当前不可用", "检查模型配置和后续候选"],
  ["upstream_invalid_key", "上游拒绝了渠道凭据", "更新凭据，并检查是否累计失败或拉黑"],
  ["upstream_authentication_required", "订阅凭据需要刷新或重新授权", "查看重试决策并重新授权"],
  ["upstream_host_error", "上游返回服务端错误", "检查是否跳过分组以及是否实际重试"],
  ["upstream_client_error", "上游认为请求本身有问题", "检查错误摘要和请求参数；通常不应换凭据重试"],
  ["upstream_error", "无法进一步归类的上游失败", "结合状态码、摘要和命中规则判断"],
  ["upstream_sse_error", "上游通过 SSE 事件报告错误", "查看流是否已提交；已输出时不能重试"],
  ["upstream_stream_terminated", "上游流在完成前断开", "检查网络和流空闲超时"],
  ["upstream_stream_idle_timeout", "上游流长时间没有数据", "调整流空闲超时或检查上游"],
  ["upstream_response_incomplete", "上游明确返回未完成状态", "检查错误摘要和上游请求 ID"],
  ["downstream_write_failed", "向客户端写响应失败", "检查客户端断开、反向代理和网络"],
  ["client_canceled", "客户端取消了请求", "通常无需处理"],
  ["server_shutdown", "服务关闭时取消了请求", "服务恢复后由调用方决定是否重试"],
  ["internal_error", "请求没有形成可归类的正常结果", "查看同一 Request ID 的服务日志"],
  ["credential_decrypt_failed", "候选凭据无法解密", "恢复匹配的 ENCRYPTION_KEY 或重新录入凭据"],
  ["credential_normalization_failed", "候选凭据无法转换为执行格式", "重新录入合法凭据"],
  ["credential_proxy_prepare_failed", "凭据级代理无法初始化", "修正该凭据的代理配置"],
  ["group_proxy_prepare_failed", "分组级代理无法初始化", "修正分组代理配置"],
  ["server_is_overloaded", "上游明确表示服务过载", "查看重放安全性和后续候选"],
  ["rate_limit_exceeded", "上游明确表示容量限流", "查看冷却和后续候选"],
];

const MANAGEMENT_DATA: DataRow[] = [
  ["VALIDATION_FAILED", "entry, field, reason_code", "部分凭据字段校验失败时"],
  ["AUTH_LOCKED", "retry_after_seconds", "认证锁定时，同时返回 Retry-After 响应头"],
  ["BAD_GATEWAY", "trigger, checked_at_ms, successful_fetch_at_ms, not_modified, skipped, error_code", "手动同步 Models.dev 失败时"],
  ["IDEMPOTENCY_KEY_REUSED", "operation_id, operation_kind", "幂等键对应另一请求时"],
  ["IDEMPOTENCY_RESULT_EXPIRED", "operation_id, operation_kind, resource_identity, completed_at_ms", "幂等结果已经压缩时"],
  ["CONTROL_OPERATION_INCOMPLETE", "operation_id, operation_kind, last_completed_stage, failed_stage, can_reconcile", "数据库提交后运行态恢复未完成时"],
  ["CONTROL_RECOVERY_PENDING", "operation_id, operation_kind, failed_stage, retry_after_ms", "更早的提交阻塞当前写入时"],
  ["SETTINGS_VERSION_CONFLICT", "settings, settings_etag", "If-Match 已经过期时"],
  ["GROUP_IN_USE", "access_keys[] { id, name }", "删除仍被访问密钥引用的分组时"],
  ["CHANNEL_TARGET_CONFLICT", "groups[] { id, name }", "创建相同渠道目标且没有确认时"],
  ["MODEL_NAME_CONFLICT", "conflicts[] { client_model, indexes }", "分组模型名或别名冲突时"],
  ["MODEL_PRICE_UNPRICED_CONFIRMATION_REQUIRED", "id", "未确认就把价格全部设为空时"],
  ["MODEL_PRICE_REFERENCED", "id, reference_count, reference_group_count", "删除仍被分组引用的价格时"],
  ["MODEL_PRICE_AUTOMATIC_DELETE_FORBIDDEN", "id", "删除自动同步价格时"],
];

const TOP_LEVEL_LOG_FIELDS: FieldRow[] = [
  ["request_id", "UUID v4", "GPT-Load 请求 ID；用于关联请求详情和服务日志"],
  ["status", "success / error / incomplete / canceled", "整个请求的最终状态"],
  ["status_code", "0 / HTTP 状态码", "整个请求最终结果的状态码；没有形成 HTTP 响应时可以为 0"],
  ["error_code", "归一化错误码", "程序筛选和聚合使用；不要从 error_summary 反推"],
  ["error_summary", "已脱敏、长度受限的摘要", "用于人工排障，不保证保留上游原文"],
  ["attempt_count", "非负整数", "实际记录的上游或本地执行尝试数量"],
];

const ATTEMPT_LOG_FIELDS: FieldRow[] = [
  ["sequence", "从 1 开始的整数", "尝试在本次请求中的顺序"],
  ["status_code", "0 / HTTP 状态码", "这一次尝试的结果状态码；上游未响应时可以为 0"],
  ["error_code", "归一化错误码", "这一次尝试的失败原因；成功时为空字符串"],
  ["error_summary", "已脱敏、长度受限的摘要", "只用于人工排障"],
  ["failure_category", "ok / rate_limited / model_unavailable / invalid_key / upstream_host_error / client_error / conversion_unsupported / downstream_cancel / authentication_required / ambiguous", "稳定业务分类，成功尝试为 ok"],
  ["failure_origin", "client / upstream / downstream / internal / null", "错误责任域；旧记录可能为 null"],
  ["failure_scope", "request / model / credential / group / null", "错误影响的最小资源范围；不适用或旧记录为 null"],
  ["retry_directive", "none / refresh_credential / next_candidate / null", "Judge 作出的重试意图；旧记录可能为 null"],
  ["effect", "none / cooldown_credential / record_credential_failure / skip_group / null", "本次尝试对运行态产生的唯一效果；旧记录可能为 null"],
  ["rule_id", "稳定规则标识 / null", "产生决定的规则；旧记录可能为 null"],
  ["will_retry", "true / false", "之后是否真的开始了另一轮上游尝试"],
  ["dispatch_state", "not_sent / maybe_sent / local / null", "确定未发送、可能已到上游、完全在 GPT-Load 本地完成，或旧记录未知"],
  ["response_started", "true / false", "本次尝试是否已经形成响应；local 也可以为 true"],
  ["committed", "true / false", "是否已经开始向客户端输出；提交后不能安全切换候选"],
  ["upstream_request_id", "上游请求 ID / null", "联系上游排障时使用；本地执行或上游未返回时为 null"],
  ["action", "terminate / retry / cooldown_credential / fail_credential / skip_group", "兼容展示字段；精确判断应读取 retry_directive 和 effect"],
];

const ROUTE_REASONS: readonly (readonly [code: string, level: string, meaning: string, action: string])[] = [
  ["access_key_disabled", "访问密钥", "访问密钥被停用", "去访问密钥页启用它"],
  ["access_key_expired", "访问密钥", "访问密钥已过期", "新建一把或延长有效期"],
  ["protocol_filtered", "访问密钥", "这把密钥没勾选该协议", "在密钥里补勾对应协议"],
  ["model_filtered", "访问密钥", "请求的模型不在允许范围", "检查密钥的模型限制"],
  ["model_required_by_filter", "访问密钥", "密钥限制了模型范围，但请求没带模型名", "请求里显式指定模型，或去掉密钥的模型限制"],
  ["operation_unsupported", "请求", "当前协议下没有渠道支持这个 Operation", "换一个支持该能力的分组"],
  ["no_route_target", "请求", "找不到这个模型或 Operation 的路由目标", "确认模型已在至少一个分组中开放"],
  ["no_available_group", "请求", "存在路由目标，但没有可用分组", "查看各分组的 reason_code"],
  ["native_route_required", "分组", "该请求要求原生路由，这个分组只能靠转换提供", "改用与客户端协议一致的分组"],
  ["group_disabled", "分组", "分组被停用", "启用该分组"],
  ["group_filtered", "分组", "分组不在这把密钥的授权范围", "在密钥里补上该分组"],
  ["no_credentials", "分组", "分组里一个凭据都没有", "往分组里添加凭据"],
  ["group_weight_zero", "分组", "旧配置中的分组权重为 0", "改为自动权重或 1–100 的手动权重"],
  ["no_available_credential", "分组", "分组内所有凭据都不可用", "继续查看凭据级 reason_code"],
  ["credential_disabled", "凭据", "凭据被停用", "启用它，或依赖其他凭据"],
  ["credential_auth_unavailable", "凭据", "订阅账号授权失效", "重新授权，见订阅账号页"],
  ["credential_blacklisted", "凭据", "凭据已被拉黑", "确认凭据有效后恢复它"],
  ["credential_cooldown", "凭据", "凭据正在冷却", "等待自动恢复，或加更多凭据分担"],
  ["credential_weight_zero", "凭据", "旧配置中的凭据权重为 0", "改为自动权重或 1–100 的手动权重"],
];

function errorTable(rows: ErrorRow[]) {
  return (
    <div className="tbl-wrap">
      <table className="tbl">
        <thead>
          <tr>
            <th style={{ width: "28%" }}>错误码</th>
            <th style={{ width: "10%" }}>HTTP</th>
            <th style={{ width: "29%" }}>含义</th>
            <th>怎么处理</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([code, status, meaning, action]) => (
            <tr key={code}>
              <td className="m">{code}</td>
              <td>{status}</td>
              <td>{meaning}</td>
              <td>{action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function fieldTable(rows: FieldRow[]) {
  return (
    <div className="tbl-wrap">
      <table className="tbl">
        <thead>
          <tr>
            <th style={{ width: "24%" }}>字段</th>
            <th style={{ width: "38%" }}>取值</th>
            <th>如何理解</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([field, values, meaning]) => (
            <tr key={field}>
              <td className="m">{field}</td>
              <td>{values}</td>
              <td>{meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ErrorsReference() {
  return (
    <DocsPage
      path="/docs/reference/errors"
      title="错误与恢复参考"
      lede="统一解释客户端响应、路由检查和请求日志中的错误信息，以及应该重试、恢复还是修改配置。"
      toc={TOC}
    >
      <Heading id="namespaces">先分清三套信息</Heading>
      <p>同一次失败可能同时出现三种代码，它们用途不同：</p>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "22%" }}>字段</th>
              <th style={{ width: "28%" }}>在哪里看到</th>
              <th>用途</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="m">code</td>
              <td>客户端 HTTP 响应</td>
              <td>告诉调用方这次请求为什么失败</td>
            </tr>
            <tr>
              <td className="m">error_code</td>
              <td>请求日志及尝试链</td>
              <td>把不同上游失败归一化，便于筛选和排障</td>
            </tr>
            <tr>
              <td className="m">reason_code</td>
              <td>路由检查</td>
              <td>解释访问密钥、分组或凭据为什么不能成为候选</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Notice label="不要把三套代码互相替代" tone="amber">
        路由检查可能显示 <code>no_available_group</code>，真实请求最终可能返回
        <code>no_available_candidate</code>；请求日志还可能记录最后一次上游尝试的
        <code>upstream_client_error</code>。自动化程序必须读取当前接口自己的字段。
      </Notice>
      <Notice label="不要解析 message" tone="blue">
        管理 API 的 <code>message</code> 会本地化，上游错误消息也可能改变。
        程序判断使用 <code>code</code> 和结构化 <code>data</code>；
        <code>message</code> 与 <code>error_summary</code> 只用于人工阅读。
      </Notice>

      <Heading id="management">管理 API 错误</Heading>
      <p>
        管理 API 的错误码使用大写下划线格式。响应结构、认证方式和主要资源见
        <Link href="/docs/reference/api">管理 API</Link>。
      </p>

      <h3>通用、认证与资源</h3>
      {errorTable(MANAGEMENT_COMMON)}

      <h3>幂等、并发与运行态恢复</h3>
      {errorTable(MANAGEMENT_CONSISTENCY)}

      <h3>分组、模型与订阅凭据</h3>
      {errorTable(MANAGEMENT_DOMAIN)}

      <Notice label="data 是错误合同的一部分" tone="blue">
        只有调用方需要据此作决定时才会返回 <code>data</code>。常见内容包括冲突资源、
        字段定位、当前设置与 ETag、操作 ID、失败阶段、重试时间以及额度限制明细。
        未声明的错误通常没有 <code>data</code>。
      </Notice>
      <h3>管理错误的结构化 data</h3>
      <p>
        下表只列有稳定结构的管理错误；同一个错误码在其他场景仍可能不带 <code>data</code>。
      </p>
      <div className="tbl-wrap">
        <table className="tbl" style={{ minWidth: 900 }}>
          <thead>
            <tr>
              <th style={{ width: "30%" }}>错误码</th>
              <th style={{ width: "42%" }}>data 字段</th>
              <th>何时返回</th>
            </tr>
          </thead>
          <tbody>
            {MANAGEMENT_DATA.map(([code, fields, when]) => (
              <tr key={code}>
                <td className="m">{code}</td>
                <td className="m">{fields}</td>
                <td>{when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Heading id="data-plane">数据面错误</Heading>
      <p>
        GPT-Load 自己产生的数据面错误使用小写下划线格式，基础结构为
        <code>{`{ "code": "...", "message": "..." }`}</code>。
        成本限制会额外返回结构化 <code>error</code> 和 <code>data</code>。
      </p>
      {errorTable(DATA_PLANE_ERRORS)}

      <p>
        <code>access_key_cost_limit_exceeded</code> 的 <code>error</code> 包含
        <code>type</code>、<code>code</code>、<code>message</code> 和可选的
        <code>resets_at</code>（Unix 秒）；<code>data</code> 包含 <code>recoverable</code>、
        <code>next_available_at_ms</code>（Unix 毫秒）与 <code>blocking_rules</code>。每条阻塞规则包含
        <code>id</code>、<code>kind</code>、<code>limit_usd</code>、<code>used_usd</code>，
        周期规则还会给出 <code>period_seconds</code> 和 <code>window_ends_at_ms</code>。
      </p>

      <Notice label="上游错误不一定使用这套结构" tone="amber">
        原生路由会在脱敏和安全检查后返回上游错误体；转换路由会投影成客户端协议的错误结构。
        因此 OpenAI、Anthropic 和 Gemini 客户端看到的字段可能不同，不能假设所有失败都只有
        <code>code</code> 与 <code>message</code>。
      </Notice>

      <Heading id="request-logs">请求日志错误</Heading>
      <p>
        请求日志的顶层 <code>error_code</code> 表示整个请求的最终结果；
        <code>attempts[].error_code</code> 表示某一次上游尝试。一次请求重试后成功时，
        顶层可以没有错误，但前面的尝试仍会保留错误码。
      </p>
      <p>
        下表只列请求日志额外使用的归一化码。与数据面固定错误同名的码以上一节为准，不重复列出。
      </p>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "31%" }}>错误码</th>
              <th style={{ width: "31%" }}>含义</th>
              <th>怎么处理</th>
            </tr>
          </thead>
          <tbody>
            {LOG_ONLY_ERRORS.map(([code, meaning, action]) => (
              <tr key={code}>
                <td className="m">{code}</td>
                <td>{meaning}</td>
                <td>{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Notice label="请求日志保存的是安全摘要" tone="blue">
        <code>error_summary</code> 会脱敏并限制长度，原始错误体不会写入请求日志。
        访问密钥认证失败发生在 RequestLog 建立之前，只会返回
        <code>invalid_access_key</code> 并写入限频安全事件。
      </Notice>

      <Heading id="log-fields">请求日志字段</Heading>
      <h3>请求顶层</h3>
      {fieldTable(TOP_LEVEL_LOG_FIELDS)}
      <h3><code>attempts[]</code> 中的尝试字段</h3>
      {fieldTable(ATTEMPT_LOG_FIELDS)}

      <Heading id="example">完整案例</Heading>
      <CodeBlock caption="请求日志中的一次失败尝试">
        status_code: <span className="s">400</span>{"\n"}
        error_code: <span className="s">upstream_client_error</span>{"\n"}
        failure_category: <span className="s">client_error</span>{"\n"}
        failure_origin: <span className="s">upstream</span>{"\n"}
        failure_scope: <span className="s">request</span>{"\n"}
        retry_directive: <span className="s">none</span>{"\n"}
        effect: <span className="s">none</span>{"\n"}
        rule_id: <span className="s">fallback.http_client_error</span>{"\n"}
        will_retry: <span className="s">false</span>{"\n"}
        response_started: <span className="s">true</span>{"\n"}
        committed: <span className="s">false</span>
      </CodeBlock>
      <p>
        这表示上游已经返回 400，并认为问题只影响当前请求。网关不会换凭据重试，
        也不会冷却、拉黑凭据或跳过分组；应检查已脱敏的错误摘要和客户端请求参数。
      </p>

      <Heading id="route-reasons">路由检查原因码</Heading>
      <p>
        路由检查是当前配置和运行态的只读模拟，不会发送上游请求、消耗 Token、锁定凭据或写入请求日志。
        顶层原因说明整体为什么不可路由，分组和凭据行会给出更具体的原因。
      </p>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "28%" }}>原因码</th>
              <th style={{ width: "14%" }}>层级</th>
              <th style={{ width: "28%" }}>含义</th>
              <th>怎么处理</th>
            </tr>
          </thead>
          <tbody>
            {ROUTE_REASONS.map(([code, level, meaning, action]) => (
              <tr key={code}>
                <td className="m">{code}</td>
                <td>{level}</td>
                <td>{meaning}</td>
                <td>{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Notice label="内部排除原因不会出现在当前路由检查里" tone="blue">
        调度器还定义了 <code>credential_not_allowed</code>，用于把真实请求的候选限制在请求开始时捕获的凭据集合内。
        当前 <code>/api/route/inspect</code> 不接收这类请求级凭据集合，因此不会返回这个原因码。
      </Notice>
      <p>
        修改配置后回到<Link href="/docs/monitor">路由检查</Link>重新执行，即可验证当前状态，
        不需要发送真实模型请求。
      </p>

      <Heading id="recovery">重试与恢复</Heading>
      <ul>
        <li><strong>请求错误</strong>——修正请求，不换凭据重试，也不改变凭据健康。</li>
        <li><strong>限流</strong>——遵守 Retry-After；凭据级限流通常会触发冷却并尝试其他候选。</li>
        <li><strong>无效凭据</strong>——记录凭据失败；连续达到阈值后拉黑。</li>
        <li><strong>上游主机错误</strong>——跳过当前分组；只有只读操作或上游明确拒绝处理时才安全重放。</li>
        <li><strong>流式响应</strong>——开始向客户端输出后不能切换候选，避免重复或错乱内容。</li>
        <li><strong>管理写操作结果不明</strong>——保留并复用原 Idempotency-Key，先确认操作状态。</li>
      </ul>
      <p><Link href="/docs/internals/scheduling">查看完整的调度、冷却与拉黑机制 →</Link></p>
    </DocsPage>
  );
}
