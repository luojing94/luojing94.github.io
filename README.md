# pure-site

这个文件夹是从 Hugo 项目里提取出来的纯静态站。

文件说明：

- `index.html`：中文版首页
- `en.html`：英文版首页
- `assets/styles.css`：中英文共用样式
- `assets/site-core.js`：中英文共用交互与渲染逻辑
- `assets/page-zh.js`：中文版初始化脚本
- `assets/page-en.js`：英文版初始化脚本
- `.nojekyll`：用于 GitHub Pages
- `data/projects-data.js`：中文版项目数据
- `data/cv-data.js`：中文版简历数据
- `data/en-projects-data.js`：英文版项目数据
- `data/en-cv-data.js`：英文版简历数据
- `data/rewards-data.js`：中文版奖励数据
- `data/courses-data.js`：中文版 K12 课程数据
- `data/publications-data.js`：中文版论文与会议论文数据
- `data/en-rewards-data.js`：英文版奖励数据
- `data/en-courses-data.js`：英文版 K12 课程数据
- `data/en-publications-data.js`：英文版论文与会议论文数据

源文件位置：

- `../cutto/static/pure/index.html`

如果源文件有更新，可以重新覆盖：

```bash
cp cutto/static/pure/index.html pure-site/index.html
touch pure-site/.nojekyll
```
