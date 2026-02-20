# SMS 验证码

实时查看短信验证码的 Web 应用。通过 iPhone 快捷指令自动推送短信，在网页上即时显示。

## 功能

- 收到短信后自动提取验证码并高亮显示
- 网页每 5 秒自动刷新，页面隐藏时暂停轮询
- 点击即可一键复制验证码
- 最多保留 100 条历史记录

## 部署

### 1. 部署到 Vercel

将代码推送到 GitHub，然后在 Vercel 导入项目，框架会自动识别为 Next.js。

### 2. 创建数据库

在 Vercel 项目 → Storage → 选择 **Upstash for Redis** → Create，连接到项目后会自动注入以下环境变量：

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

### 3. 配置环境变量

在 Vercel 项目 → Settings → Environment Variables 添加：

| 变量 | 说明 |
|------|------|
| `API_TOKEN` | 接收短信的鉴权 Token（自定义，供快捷指令使用） |
| `VIEW_TOKEN` | 访问网页的鉴权 Token（自定义） |

### 4. 访问网页

```
https://你的域名.vercel.app/?token=YOUR_VIEW_TOKEN
```

---

## iPhone 快捷指令配置

### 创建推送短信的快捷指令

1. 打开「快捷指令」App → 点击右上角 **+** 新建
2. 点击「添加操作」，搜索「**获取 URL 内容**」并添加
3. 按如下配置该操作：

**URL：**
```
https://你的域名.vercel.app/api/sms
```

**方法：** POST

**请求头（Headers）：** 点击「添加新请求头」，添加以下两条：

| 键 | 值 |
|----|----|
| `Authorization` | `Bearer YOUR_API_TOKEN` |
| `Content-Type` | `application/json` |

**请求正文（Body）：** 选择 JSON 类型，添加以下字段：

| 键 | 值 |
|----|-----|
| `body` | 「快捷指令输入」中的「短信内容」变量 |
| `sender` | 「快捷指令输入」中的「发件人」变量 |

4. 为快捷指令命名，例如「推送短信验证码」，保存

---

### 创建自动化（收到短信时自动触发）

1. 打开「快捷指令」App → 切换到底部「**自动化**」标签
2. 点击右上角 **+** → 选择「**信息**」
3. 配置触发条件：
   - **发件人**：可留空（所有短信），或指定号码（如 `10086`、`95588`）
   - **包含**：可留空，或填入关键词（如「验证码」）以过滤
4. 关闭「运行前询问」开关（这样收到短信后无需手动确认）
5. 点击「下一步」→ 选择「**运行快捷指令**」→ 选择刚才创建的「推送短信验证码」
6. 点击「下一步」→「完成」

---

### 测试

用 curl 手动发送一条测试短信：

```bash
curl -X POST https://你的域名.vercel.app/api/sms \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"body": "您的验证码是 123456，5分钟内有效。", "sender": "10086"}'
```

成功后打开网页，验证码会立即显示。

---

## 本地开发

```bash
npm install
npm run dev
```

在 `.env.local` 中配置环境变量：

```
KV_REST_API_URL=你的 Upstash Redis URL
KV_REST_API_TOKEN=你的 Upstash Redis Token
API_TOKEN=自定义 Token
VIEW_TOKEN=自定义 Token
```

访问 [http://localhost:3000/?token=YOUR_VIEW_TOKEN](http://localhost:3000)
