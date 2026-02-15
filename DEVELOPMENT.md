# 开发与更新文档

本文档为 **luojing94.github.io** 个人学术网站的开发与更新指南，帮助后续对网站进行维护和内容更新。

---

## 一、项目架构概览

### 1.1 构建工具

- **Hugo 0.121.2**：静态网站生成器
- **Tranquilpeak 0.5.3-BETA**：Hugo 博客主题

### 1.2 当前仓库说明

当前目录 (`luojing94.github.io-main/`) 存放的是 **Hugo 构建后的静态 HTML 文件**，直接部署在 GitHub Pages 上。

Hugo 源代码项目（包含 `config.toml`、`content/`、`themes/` 等）位于另一个目录。修改网站需要两步：

1. 在 Hugo 源代码项目中编辑内容
2. 运行 `hugo` 构建，将生成的 `public/` 目录内容复制到本仓库

### 1.3 部署方式

网站通过 **GitHub Pages** 从 `main` 分支部署，访问地址：`https://luojing94.github.io/`

---

## 二、Hugo 源项目结构（用于编辑）

Hugo 源项目的典型结构如下：

```
luo_boke/
├── config.toml              # Hugo 全局配置文件
├── content/                 # 内容文件（Markdown）
│   ├── _index.md            # 首页内容
│   └── posts/               # 文章/页面
│       ├── activities.md    # 科普活动
│       ├── productions.md   # 作品集汇总
│       ├── scientificresearch.md  # 科研工作
│       ├── stonehouse.md    # 石屋设计
│       ├── tinyhouse.md     # 极小住宅
│       ├── zhonganbridge.md # 中安桥设计
│       ├── dayangmountain.md# 大阳山慢行系统
│       └── fengxiancountry.md # 奉贤乡村规划
├── static/                  # 静态资源
│   └── img/
├── themes/                  # Hugo 主题
│   └── tranquilpeak/        # Tranquilpeak 主题
├── layouts/                 # 自定义布局覆盖
│   ├── index.html           # 首页布局
│   └── shortcodes/          # 自定义短代码
└── archetypes/              # 文章模板
    └── default.md
```

---

## 三、日常内容更新指南

### 3.1 更新个人简历

**文件位置**：Hugo 源项目中对应简历页面的 Markdown 文件

**常见更新项**：
- 新发表的论文 → 添加到发表论文列表
- 新获批的项目 → 添加到科研项目列表
- 新获得的奖项 → 添加到荣誉获奖列表
- 新的专利/软著 → 添加到专利与软件著作权列表
- 教学成果更新 → 添加到教学成果列表

**直接编辑静态文件**（如果不通过 Hugo 构建）：
- 中文简历：`cv/index.html`
- 英文简历：`research/index.html`（及 `en/research/index.html`）

### 3.2 添加新的作品

1. 创建作品详情页面（参考 `stone-house/index.html` 石屋设计页面格式）
2. 在作品集汇总页 `works/index.html` 中添加链接
3. 如有英文版，同步更新 `en/` 目录下的对应页面

### 3.3 添加新的科普活动

编辑 `activities/index.html`，在活动列表中添加新的活动条目。格式参考已有条目：

```html
<h3>活动名称</h3>
<p>活动日期，活动描述...</p>
<p>来源：来源说明</p>
```

### 3.4 添加新的诗歌作品

编辑 `poems/index.html`，在诗歌列表中添加新作品。

### 3.5 更新联系方式

涉及文件（需全部修改）：
- `index.html`（首页联系方式区域）
- `cv/index.html`（简历页联系信息）
- `en/` 下的对应英文页面

---

## 四、页面通用模板结构

每个页面都遵循 Tranquilpeak 主题的统一结构：

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <!-- Schema.org JSON-LD 结构化数据 -->
    <script type="application/ld+json">{ ... }</script>

    <!-- Meta 信息：charset, viewport, author, description -->
    <!-- Open Graph / Twitter Card 社交分享标签 -->
    <!-- CSS：Font Awesome, Fancybox, 主题样式 -->
</head>
<body>
    <div id="blog">
        <!-- header：顶部导航栏 + 头像 -->
        <!-- sidebar：侧边栏导航菜单 -->

        <div id="main">
            <article class="post">
                <!-- post-header：文章标题 -->
                <div class="post-content markdown">
                    <div class="main-content-wrap">
                        <!-- ===== 页面主要内容区域 ===== -->
                        <!-- 在这里编辑具体内容 -->
                    </div>
                </div>
            </article>
            <!-- footer -->
        </div>

        <!-- 分享按钮 -->
        <!-- About 弹窗卡片 -->
        <!-- 封面背景图 -->
        <!-- JavaScript：jQuery, highlight.js, Fancybox, 主题脚本 -->
    </div>
</body>
</html>
```

**核心编辑区域**：只需修改 `<div class="main-content-wrap">` 内的 HTML 内容。

---

## 五、修改侧边栏导航

侧边栏导航在 **每个页面** 中都有重复定义。如需添加/修改导航项，需要在所有页面中同步修改。

导航项 HTML 格式：

```html
<li class="sidebar-button">
    <a class="sidebar-button-link" href="https://luojing94.github.io/路径/" title="标题">
        <i class="sidebar-button-icon fas fa-lg fa-图标名" aria-hidden="true"></i>
        <span class="sidebar-button-desc">显示文字</span>
    </a>
</li>
```

常用 Font Awesome 图标：
- `fa-home` 首页 | `fa-bookmark` 书签 | `fa-feather-alt` 羽毛笔
- `fa-flask` 烧瓶 | `fa-id-card` 身份证 | `fa-microscope` 显微镜
- `fa-globe` 地球 | `fa-graduation-cap` 学位帽 | `fa-book` 书本

---

## 六、图片管理

### 6.1 Cloudinary 图片托管

当前所有图片托管在 Cloudinary CDN 上，基础路径：
```
https://res.cloudinary.com/dgcbpbbk3/image/upload/
```

关键图片：
| 用途 | 变换参数 | 文件名 |
|------|----------|--------|
| 头像 | `t_Profile` | `WechatIMG1112_orwe36.png` |
| 个人照片 | 无 | `WechatIMG1113_tmbhjk.jpg` |
| 封面背景 | `t_Banner 9:16` | `28991709741027_.pic_hd_dtgvoj.jpg` |

### 6.2 上传新图片

1. 登录 Cloudinary 控制台
2. 上传图片并获取 URL
3. 在 HTML 中使用完整 URL 引用

### 6.3 本地图片

少量图片存储在本地：
- `images/cover.jpg` - 主题默认封面
- `img/sunmountain.jpg` - 自定义图片

---

## 七、多语言支持

网站支持中文和英文两个语言版本：

| 语言 | 路径前缀 | 标识 |
|------|----------|------|
| 中文（默认） | `/` | `zh-cn` |
| English | `/en/` | `en` |

**更新原则**：修改中文内容后，需同步更新 `en/` 目录下的对应英文页面。

中英文站点之间通过 sitemap 中的 `hreflang` 标签关联：
```xml
<xhtml:link rel="alternate" hreflang="en" href="https://luojing94.github.io/en/" />
<xhtml:link rel="alternate" hreflang="zh-cn" href="https://luojing94.github.io/" />
```

---

## 八、部署更新流程

### 方式一：通过 Hugo 构建（推荐）

```bash
# 1. 进入 Hugo 源代码项目目录
cd /path/to/luo_boke

# 2. 编辑 content/ 目录下的 Markdown 文件

# 3. 本地预览
hugo server -D

# 4. 构建生成静态文件
hugo

# 5. 将 public/ 目录内容复制到部署仓库
cp -r public/* /path/to/luojing94.github.io-main/

# 6. 提交并推送
cd /path/to/luojing94.github.io-main/
git add .
git commit -m "更新说明"
git push origin main
```

### 方式二：直接编辑静态 HTML

适用于小幅内容修改（如添加一篇论文、更新联系方式等）：

```bash
# 1. 直接编辑对应的 index.html 文件

# 2. 本地预览（使用任意 HTTP 服务器）
python3 -m http.server 8000
# 或
npx serve .

# 3. 确认无误后提交
git add 修改的文件
git commit -m "更新说明"
git push origin main
```

---

## 九、注意事项

### 9.1 编辑注意

- **编码**：所有 HTML 文件使用 UTF-8 编码
- **侧边栏同步**：修改导航项时，所有页面（含 `en/` 下的页面）都需同步修改
- **Schema.org 数据**：修改页面信息时，同步更新 `<head>` 中的 JSON-LD 数据
- **Open Graph 标签**：更新页面描述时，需同步更新 OG meta 标签

### 9.2 性能优化建议

- 图片尽量使用 Cloudinary 的变换参数优化尺寸和格式
- CSS 和 JS 文件已压缩，不建议直接修改
- 新增图片建议先压缩后上传

### 9.3 SEO 维护

- 添加新页面后，确认 `sitemap.xml` 已更新（Hugo 构建会自动处理）
- 保持每个页面的 `<meta name="description">` 准确描述页面内容
- 保持 `<title>` 标签的规范性

### 9.4 常见问题

| 问题 | 解决方案 |
|------|----------|
| Cloudinary 图片无法加载 | 检查网络连接及 Cloudinary 账户状态 |
| 样式显示异常 | 检查 CDN 资源是否可访问 |
| 修改后未生效 | GitHub Pages 有缓存延迟（通常几分钟），清除浏览器缓存后重试 |
| 英文版内容过旧 | 检查 `en/` 目录下对应文件是否同步更新 |

---

## 十、关键文件速查表

| 需求 | 文件路径 |
|------|----------|
| 修改首页 | `index.html` |
| 修改中文简历 | `cv/index.html` |
| 修改英文 CV | `en/cv/index.html` |
| 修改作品集 | `works/index.html` |
| 修改诗歌页 | `poems/index.html` |
| 修改科普活动 | `activities/index.html` |
| 修改石屋设计 | `stone-house/index.html` |
| 修改中安桥 | `zhongan-bridge/index.html` |
| 修改大阳山 | `dayang-mountain/index.html` |
| 修改极小住宅 | `tiny-house/index.html` |
| 修改乡村规划 | `fengxian-village/index.html` |
| 修改科研工作 | `research/index.html` |
| 修改英文首页 | `en/index.html` |
| 修改 404 页面 | `404.html` |
| 站点地图 | `sitemap.xml`、`zh-cn/sitemap.xml`、`en/sitemap.xml` |
