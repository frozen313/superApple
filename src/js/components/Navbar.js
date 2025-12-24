function createDropdown(columns) {
    if (!columns || columns.length === 0) return '';

    const columnsHtml = columns.map(col => `
        <div class="nav-column">
            <h3>${col.title}</h3>
                <ul>
                    ${col.items.map(item => `<li><a herf="#">${item}</a></li>`).join('')}
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
    const logoHtml = `<li class="nav-item"><a href="#" class="icon-apple"></a></li>`;

    const linksHtml = data.map(item => `
    <li class="nav-item">
        <a href="${item.href}" class="nav-link">${item.text}</a>
        
        <!-- 这里调用函数，生成的 div 必须紧跟在 a 标签后面，且在 li 内部 -->
        ${createDropdown(item.children)} 
    </li>
`).join('');

    const iconsHtml = `
    <li class="nav-item"><a href="#" class="icon-search"></a></li>
    <li class="nav-item"><a href="#" class="icon-bag"></a></li>
  `;

return `
    <div class="nav-content">
      <ul class="nav-list">
        ${logoHtml}
        ${linksHtml}
        ${iconsHtml}
      </ul>
    </div>
  `;
}
