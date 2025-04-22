javascript
// 创建基础文档结构
const initPage = () => {
  // 创建文档类型
  const docType = document.implementation.createDocumentType('html', '', '');
  
  // 创建根元素
  const html = document.createElement('html');
  html.lang = 'zh-CN';

  // 构建<head>
  const head = document.createElement('head');
  const metaCharset = document.createElement('meta');
  metaCharset.charset = 'UTF-8';
  
  const metaViewport = document.createElement('meta');
  metaViewport.name = 'viewport';
  metaViewport.content = 'width=device-width, initial-scale=1.0';
  
  const title = document.createElement('title');
  title.textContent = '可以和我和好吗？';
  
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = 'style.css';

  head.append(metaCharset, metaViewport, title, cssLink);

  // 构建<body>
  const body = document.createElement('body');
  
  // 容器div
  const container = document.createElement('div');
  container.className = 'container';
  
  // 心形图片
  const img = document.createElement('img');
  img.id = 'mainImage';
  img.src = 'images/heart.png';
  img.alt = '爱心';
  
  // 标题
  const heading = document.createElement('h1');
  heading.id = 'question';
  heading.textContent = '可以和我和好吗？';
  
  // 按钮容器
  const buttons = document.createElement('div');
  buttons.className = 'buttons';
  
  // 创建按钮
  const createButton = (id, text) => {
    const btn = document.createElement('button');
    btn.id = id;
    btn.textContent = text;
    return btn;
  };
  
  buttons.append(
    createButton('yes', '可以'),
    createButton('no', '不要')
  );
  
  // 组装容器
  container.append(img, heading, buttons);
  
  // 外链脚本
  const script = document.createElement('script');
  script.src = 'script.js';
  
  // 最终组装
  body.append(container, script);
  html.append(head, body);
  
  // 创建新文档
  const newDoc = document.implementation.createDocument('', '', null);
  newDoc.append(docType, html);
  
  // 替换当前文档
  document.replaceChild(newDoc.documentElement, document.documentElement);
};

// 文档加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
```