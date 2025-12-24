import "../src/style.css"; // 引入样式
import { navData } from './js/data.js'; // 引入数据
import { renderNavbar } from './js/components/Navbar.js'; // 引入渲染函数

// 1. 获取挂载点
const navContainer = document.getElementById('global-nav');
const mask = document.getElementById('blur-mask');

// 2. 渲染 HTML
navContainer.innerHTML = renderNavbar(navData);

// 3. 添加交互逻辑 (事件委托)
// 我们监听整个导航栏的鼠标移动，而不是给每个 LI 加监听
navContainer.addEventListener('mouseover', (e) => {
  // 查找鼠标当前悬停的元素是不是 .nav-item
  const item = e.target.closest('.nav-item');
  
  if (item) {
    // 检查这个 item 里面有没有下拉菜单
    const dropdown = item.querySelector('.nav-dropdown');
    if (dropdown) {
      navContainer.classList.add('is-hovering'); // 让导航栏背景变白
      mask.classList.add('is-visible'); // 显示遮罩
    }
  }
});

navContainer.addEventListener('mouseleave', () => {
  navContainer.classList.remove('is-hovering');
  mask.classList.remove('is-visible');
});