# Ulearn-Helper

优学院 Tampermonkey 脚本，当前版本 **4.17.0**。

## 安装与更新

1. 在 Edge/Chrome 安装 Tampermonkey 并允许用户脚本运行。
2. [安装 Ulearn-Helper](https://raw.githubusercontent.com/ghost0190/Ulearn-Helper/main/Ulearn-Helper.user.js)。已有本地版本选择“更新”，原安装名称和 namespace 保留以沿用配置。
3. 刷新课程或考试页面加载新版。

Tampermonkey 根据脚本的 updateURL 与 downloadURL 自动检测和安装更新；检查频率及自动更新开关由扩展设置决定。脚本启动时最多每 6 小时获取一次版本元数据，失败后 30 分钟可再试；发现新版会在悬浮窗版本按钮提示，点击进入安装页。设置 → 关于可手动检查、关闭启动检查及打开仓库。启动检查不直接替换运行中的脚本。

## 功能与设置

- 课程与考试/作业页面分别显示学习和答题工具。
- AI 接口可添加、重命名、删除、启停；名称校验、单步撤销、模型搜索和服务商文档入口。
- AI 请求采用有限并发和取消保护；题目及答案支持折叠，悬浮窗可拖动调整尺寸。
- 本地题库、远程题库与自建服务端均为可选来源。

接口密钥和用户配置由 Tampermonkey 保存在本机，公开仓库不包含浏览器连接令牌、个人密钥、题库或课程抓取记录。更新检查仅下载公开版本元数据。GitHub 不可达时检查会显示失败，已安装的功能继续运行。

## 维护发布

默认发布分支为 main。修改 Ulearn-Helper.user.js 并递增 @version；将其完整元数据头同步到 Ulearn-Helper.meta.js，然后把两个文件在同一提交中发布。保留 @name 与 @namespace，确保原安装和存储延续。发布前执行 node --check Ulearn-Helper.user.js 并验证两个文件的 @version 一致。

后续版本必须同步更新脚本和元数据，不能只修改仓库标签。用户更新周期取决于扩展设置、缓存与网络；不会即时强制更新。

## 来源

保留原脚本 Miss. 作者标识及安装标识，UI 品牌为 Ulearn-Helper。本仓库暂未添加新的开源许可证；不改写原有代码权属声明。
