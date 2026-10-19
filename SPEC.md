# Curva Denim B2B 产品规格

## 1. 产品目标

建立面向美国零售商的大码女装牛仔 B2B 独立站，以批发获客、买手资格识别、Line Sheet 索取、样品沟通和多款式 RFQ 为核心转化。

系统不服务消费者直接购买，不应出现公开零售价、消费者购物车、免邮、30 天零售退货或“立即购买”等文案。

## 2. 目标用户

合格买手包括 Independent Boutique、E-commerce Retailer、Plus-size Specialty Chain、Department Store / Marketplace 和 Distributor / Wholesaler。

内部用户包括承接买手会话和 RFQ 的 Seller，以及管理商品、文章、FAQ、用户、角色和客服的 Admin。

## 3. 核心价值

- 14W–34W plus-size block 与 category-specific grading
- 商业化 Straight、Wide-leg、Flare、Slim Bootcut、Barrel、A-line Midi Skirt、Maxi Skirt、Pencil Skirt 和两种长度 Denim Jacket
- 典型 120–150 pcs/style/color 起订方向
- Wholesale 与 Private Label 两类合作路径
- 样品、规格、Wash Standard、Labels、Packing 和 QC 连续管理
- 面向美国零售渠道的买手信息和交付要求收集

## 4. 商品模型

合法分类：`jeans`、`denim-skirts`、`denim-jackets`。

首发商品严格控制为 10 款：

1. Straight Jean
2. Wide-Leg Jean
3. Flare Jean
4. Slim Bootcut Jean
5. Barrel Jean
6. A-Line Midi Denim Skirt
7. Straight Maxi Denim Skirt
8. Stretch Denim Pencil Skirt
9. Soft Structure Denim Jacket
10. Cropped Denim Jacket

组合比例固定为“5 款牛仔裤 + 3 款牛仔裙 + 2 款外套”。新增商品前必须先确认其是否替换现有角色，避免重新扩张为无重点的大目录。

公开商品页展示：

- Style name、Category、Wash、Image
- 14W–34W 可开发尺码段
- Typical MOQ
- Typical production lead time
- Program specifications
- Fit development note
- Request quote & sample
- 登录买手的 Add to RFQ Assortment

不公开显示未经确认的批发价格。价格受面料、水洗、工艺、尺码、数量、辅料、包装和贸易条款影响。

## 5. 转化流程

### 公共 Buyer Inquiry

无需登录，必填 Buyer name、Company、Business email、Country、Business type、Sales channels、Opening units 和 Specifications。

推荐填写 Website、Target retail price、Estimated annual volume、Destination、Target delivery window 和 Private-label/Packaging/Compliance 要求。后端保存买手画像并发送管理员通知。

### 登录 RFQ

1. 买手登录；
2. 在商品详情添加多个程序；
3. 填写各款 indicative units；
4. 填写渠道、客户、尺码、Fit、Wash、Private Label、总数量和交付信息；
5. 提交后生成 `RFQ-YYYYMMDD-XXXXXX`。

## 6. 内容体系

- Wholesale Program：合作、开发、样品、订单和交付
- Fit & Grading：Plus-size block、POM、Tolerance、Grade Rules、Size Curve
- Quality Control：Approved Standard、Inspection、Corrective Action
- Buyer Resources：Assortment Planning、Fit Review、Private Label Checklist
- Buyer FAQ：资格、MOQ、价格、样品、尺码曲线、生产、QC、运输

## 7. B2B 合规表达

- “Typical”“Indicative”“Subject to confirmation”必须用于 MOQ 和交期；
- 网站表单不创建 PO，也不保证价格、产能或交期；
- Importer of Record、Customs、Duties、U.S. labeling/testing/compliance 责任须在订单中确认；
- QC 抽样不替代制造商责任或买手的合规审查；
- 不使用未经验证的认证、可持续性、产地或测试声明。

## 8. 权限

- 公开：首页、Collection、Product、Services、About、Buyer Resources、FAQ、Contact
- 登录 Buyer：RFQ Workspace、Conversation History
- Seller/Admin：Support Inbox
- Admin：商品、用户、角色、内容和 FAQ

私有页面必须 noindex。

## 9. 验收标准

- 公开页面无 DTC 购物、公开零售价、免邮或消费者退货语言；
- 首页第一屏明确 `B2B only` 和 `Serving U.S. retailers`；
- 商品卡和详情显示 MOQ、交期与 Quote-only；
- Collection 只显示 10 款首发商品，并正确呈现 5/3/2 的组合关系；
- Buyer Inquiry 完整收集零售商画像；
- 登录买手可添加商品并建立 RFQ；
- FAQ、文章和客服知识均为美国零售采购主题；
- Product JSON-LD 使用 `BusinessAudience`，不输出虚构价格 Offer；
- 构建、预渲染、JSON 和服务端语法验证通过。
