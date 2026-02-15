# luojing94.github.io - 罗晶个人学术网站

## 项目简介

本项目是 **罗晶博士** 的个人学术网站，部署于 GitHub Pages，访问地址为：

- 中文站：`https://luojing94.github.io/`
- 英文站：`https://luojing94.github.io/en/`

罗晶，同济大学工学博士，上海师范大学讲师，上海市青年科技扬帆人才。主要从事木结构、塔桅结构等领域的研究。

## 技术栈

| 技术 | 版本/说明 |
|------|-----------|
| 静态网站生成器 | Hugo 0.121.2 |
| 主题 | Tranquilpeak 0.5.3-BETA |
| 部署平台 | GitHub Pages |
| 图片托管 | Cloudinary CDN |
| 前端库 | jQuery 3.6.0、highlight.js 11.1.0、Fancybox 3.5.7 |
| 图标库 | Font Awesome 5.15.3 |
| 语言支持 | 中文 (zh-cn)、English (en) |

## 网站结构

```
luojing94.github.io/
├── index.html              # 首页（个人简介、关于我、联系方式）
├── 404.html                # 404 错误页面
├── sitemap.xml             # 站点地图索引
├── index.xml               # RSS 订阅源
│
├── cv/                     # 📄 个人简历（中文详细版）
│   ├── index.html
│   ├── fengxian/            # 奉贤乡村规划（简历子页面）
│   ├── shiwu/               # 食物相关页面
│   ├── zhongan/             # 中安桥相关页面
│   ├── jixiao/              # 绩效相关页面
│   └── poem/                # 诗歌相关页面
│
├── poems/                   # 📝 诗歌作品集
│   ├── index.html           # 诗歌汇总页
│   ├── toc/                 # 诗歌目录
│   ├── toc2/                # 诗歌目录2
│   ├── activity/            # 活动相关
│   └── work/                # 作品相关
│
├── works/                   # 🏗️ 作品集汇总页
├── research/                # 🔬 科研工作
├── activities/              # 🧪 科普活动展示
├── tiny-house/              # 🏠 极小住宅设计
├── fengxian-village/         # 🏘️ 奉贤区新桥村乡村规划设计
├── dayang-mountain/          # 🏔️ 大阳山慢行系统设计
├── zhongan-bridge/           # 🌉 中安桥设计
├── stone-house/              # 🪨 石屋设计
├── dayangshan-slow/          # 大阳山慢行系统补充页
│
├── en/                      # 🌐 英文版（镜像中文站结构）
│   ├── index.html
│   ├── 404.html
│   ├── cv/                  # 英文简历页
│   ├── poems/               # 英文诗歌页
│   ├── works/               # 英文作品页
│   ├── research/            # 英文科研页
│   ├── activities/          # 英文活动页
│   ├── tiny-house/          # 英文极小住宅页
│   ├── fengxian-village/    # 英文乡村规划页
│   ├── dayang-mountain/     # 英文大阳山页
│   ├── zhongan-bridge/      # 英文中安桥页
│   └── stone-house/         # 英文石屋页
│
├── css/                     # 样式文件
│   └── style-*.min.css      # Tranquilpeak 主题压缩样式
│
├── js/                      # JavaScript 文件
│   └── script-*.min.js      # Tranquilpeak 主题压缩脚本
│
├── images/                  # 主题默认图片
│   ├── cover.jpg
│   └── cover-v1.2.0.jpg
│
├── img/                     # 自定义图片
│   └── sunmountain.jpg
│
├── archives/                # 归档页面
├── categories/              # 分类页面
├── tags/                    # 标签页面
├── posts/                   # 文章列表（分页）
└── zh-cn/                   # 中文站点地图
    └── sitemap.xml
```

## 页面内容说明

### 首页 (`/`)
- 个人头像与姓名展示
- 个人简介：学术背景、研究领域概述
- 联系方式：邮箱 `luojing94@shnu.edu.cn`
- 侧边栏导航至各子页面

### 简历页 (`/cv/`)
- 教育背景（同济大学本科、硕博连读）
- 工作经历（上海师范大学讲师）
- 研究方向：低碳木结构、结构抗火设计理论、历史建筑、AI 在建筑领域的应用
- 科研项目（国家自然科学基金等 8 项）
- 发表论文（14 篇学术论文 + 6 篇会议论文）
- 专利与软件著作权（3 项）
- 荣誉获奖（10 项）
- 教学工作与教学成果

### 科研工作页 (`/research/`)
- 英文版详细学术简历
- 包含完整的学术发表列表

### 作品集 (`/works/`)
- 石屋设计、极小住宅设计、中安桥设计
- 大阳山慢行系统设计、奉贤区乡村规划设计

### 诗歌页 (`/poems/`)
- 古体诗词创作集
- 包含多首词作（喝火令、烛影摇红、苏幕遮、清平乐等）

### 科普活动页 (`/activities/`)
- 上海师范大学营造文化节（第一届、第二届）
- 贯木飞虹科普教育实践
- 上海教育博览会参展
- 香港教育交流团座谈
- 人生导师主题沙龙

## 侧边栏导航

| 导航项 | 图标 | 路径 |
|--------|------|------|
| 首页 | `fa-home` | `/` |
| 作品 | `fa-bookmark` | `/works/` |
| 诗歌 | `fa-feather-alt` | `/poems` |
| 科普活动 | `fa-flask` | `/activities/` |
| 简历 | `fa-id-card` | `/cv` |
| 科研工作 | `fa-microscope` | `/research/` |
| 切换英文 | `fa-globe` | `/en/` |

## 外部服务依赖

| 服务 | 用途 |
|------|------|
| Cloudinary | 图片托管与变换（头像、封面图等） |
| cdnjs.cloudflare.com | jQuery、highlight.js、Fancybox、Font Awesome CDN |
| GitHub Pages | 网站托管与部署 |

## 重要说明

**本目录包含的是 Hugo 构建后的静态输出文件**（即 `public/` 目录的内容），而非 Hugo 源代码文件。Hugo 源代码（包含 `config.toml`、`content/` 目录、`themes/` 目录等）位于单独的项目目录中。要修改网站内容，需要编辑 Hugo 源代码并重新构建。
