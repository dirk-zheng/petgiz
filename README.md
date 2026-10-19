# Petgiz · Pet Essentials

Petgiz 是一个宠物用品展示与咨询项目，围绕日常遛宠、宠物包、猫包、宠物背包和旅行用品套装组织商品内容。前台包含品牌首页、商品分类与详情、常见问题、实用文章和联系表单。

当前前台支持浏览商品和提交产品咨询；暂未实现消费者购物车与在线支付：

- 商品包含胸背带与牵引绳、宠物包、猫包、宠物背包及旅行套装；
- 商品插画使用项目内原创 SVG 资源，后续可替换为实物摄影；
- 商品、FAQ 和 Field Notes 内容由服务端 JSON 提供；
- 管理端保留商品、文章、FAQ 与用户管理能力。

## 商品方向

- 胸背带与牵引绳组合
- 日常宠物包与猫咪外出包
- 宠物背包与轻装户外包
- 宠物旅行用品套装

商品图片位于 `client/public/pets/`，为原创矢量插画。商品的尺码、重量限制和护理信息应在真实产品资料确认后继续完善。

## 技术栈

- React 18、React Router、Vite、Tailwind CSS
- Node.js、Express、WebSocket
- MySQL 用户数据存储 + JSON 内容数据存储
- JWT、bcryptjs
- Nodemailer SMTP 通知
- SSR 预渲染、Meta、JSON-LD、sitemap 和 robots

## 运行

```bash
npm run install:all
npm run dev:server
npm run dev
```

- 前端开发地址：`http://localhost:5173/`
- 后端：`http://localhost:3001/`
- WebSocket：`ws://localhost:3001/ws`

生产构建：

```bash
npm run build
npm run preview
```

## 主要页面

- `/`：Petgiz 品牌首页与商品推荐
- `/products`：宠物用品分类与搜索
- `/products/:slug`：商品图片、规格、适用说明与咨询入口
- `/services/*`：宠物尺码、出行和用品护理说明
- `/about`：品牌介绍
- `/news-blog/`：宠物出行与日常照护文章
- `/faq`：尺码、外出、旅行和护理答疑
- `/contact`：宠物用品咨询表单
- `/login`、`/quote`：保留的账户和保存清单路由
- `/admin/*`：管理后台
- `/support/inbox`：销售客服工作区

## 联系表单数据

公共询盘 `/api/quotes/public` 收集：

- 姓名、邮箱、国家和联系电话
- 宠物类型、商品类别与产品问题
- 宠物用品尺码、材料、使用和护理咨询

提交成功后生成 `WEB-YYYYMMDD-XXXXXX` 编号，保存到 MySQL `quotes` 表。配置 SMTP 后同步通知管理员。

## 产品数据

`server/data/products.json` 主要字段：

- `id`、`name`、`category`、`image`
- `description`、`specs`、`applications`
- `sizes`、`wash`、`badge`
- `applications`：产品使用说明
- `moq`、`leadTime`、`price` 和 `stock`：兼容后台旧商品结构的字段，前台不展示

商品类别由 `client/src/data/products.js` 配置，并与 `server/routes/products.js` 的管理端校验保持一致。

## 数据存储边界

- MySQL：用户账号与资料、登录/注册等用户行为、RFQ 选品、询盘、客服会话和即时沟通；
- JSON：`server/data/products.json`、`server/data/faqs.json`、`server/data/articles.json`；
- SQL 中不建立产品、FAQ 或文章表，避免内容维护出现双数据源。

安装数据库结构并迁移已有用户相关 JSON 数据：

```bash
cd server
npm run db:install
npm run db:migrate-users
```

首次部署时，数据库管理员可先执行 `server/sql/create.sql` 创建数据库和项目运行账号，再使用该账号执行上述命令。

迁移脚本不会导入或修改产品、FAQ 和文章 JSON。

## 环境变量

```env
VITE_SITE_URL=https://www.petgiz.com
LARK_NOTIFICATIONS_ENABLED=true
LARK_WEBHOOK_URL=https://open.larksuite.com/open-apis/bot/v2/hook/replace-with-your-webhook-id
LARK_WEBHOOK_SECRET=replace-with-your-signing-secret
LARK_REQUEST_TIMEOUT_MS=8000
JWT_SECRET=strong-development-or-production-secret
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=curva_denim_b2b
DB_USER=app-user
DB_PASSWORD=strong-database-password
```

不要提交真实密钥。未配置 Lark Webhook 时，询盘仍会保存，但不会发送群通知。公开询价、登录用户 RFQ、人工客服请求和每个客服会话的首次客户消息会通知 Lark；普通机器人聊天不会逐条通知。

## 固定管理员

管理员账号配置在 `server/config/admin.js`。服务启动时会自动创建或校验该账号，保证工程内配置的固定密码生效。

- Username: `admin`
- Password: `CurvaAdmin@2026`

## 当前边界

- 尚未实现消费者购物车和在线支付；
- 产品、FAQ 和文章继续使用 JSON，适合当前内容规模；用户与询盘数据使用 MySQL；
- 上线前需要核实正式公司信息、生产域名、商品尺码/材料资料、护理说明和适用条款。

## 视觉资产

当前原创商品插画位于 `client/public/pets/`。正式投产时可补充每个 SKU 的实物摄影、尺寸图、材料成分和护理信息。
