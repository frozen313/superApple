function createDropNav(columns) {
  if (!columns || columns.length === 0) return ''

  const columnsHtml = columns.map(col => `
    <div class="nav-column">
      <h3>${col.title}</h3>
      <ul>
        ${col.items.map(item => `<li><a href="#">${item}</a></li>`).join('')}
      </ul>
    </div>
    `).join('');

  return `
    <div class="nav-dropdown">
      <div class="nav-dropdown-content">
        ${columnsHtml}
      </div>
    </div>
  `;
}

export function renderNavbar(data) {
  // 1. 生成 Logo (固定在最左)
  const logoHtml = `<li class="nav-item"><a href="#"><span class="iconfont icon-pingguo"></span></a></a></li>`;
  
  // 2. 生成中间的链接
  const linksHtml = data.map(item => `
    <li class="nav-item">
      <a href="${item.href}" class="nav-link">${item.text}</a>
      ${createDropNav(item.children)} 
    </li>
  `).join('');
  
  // 3. 生成搜索和购物袋 (固定在最右)
  const iconsHtml = `
    <li class="nav-item"><a href="#"><span class="iconfont icon-sousuo sousuo"></span></a></li>
    <li class="nav-item"><a href="#"><span class="iconfont icon-a-biheicongouwudai gouwudai"></span></a></li>
  `;

  // 4. 组合并返回完整的 HTML 结构
  return `
      <ul class="nav-list">
        ${logoHtml}
        ${linksHtml}
        ${iconsHtml}
      </ul>
  `;
}