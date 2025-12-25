import './style.css';
import { navData } from './js/data.js';
import { renderNavbar } from './js/components/Navbar.js';

// 1. 获取 DOM
const navContainer = document.getElementById('apple-nav');
const mask = document.getElementById('blur-mask');

// 2. 渲染 HTML (确保在获取 navItems 之前)
if (navContainer) {
    navContainer.innerHTML = renderNavbar(navData);
} else {
    console.error("找不到 ID 为 'apple-nav' 的元素");
}

// 3. 获取生成的节点
const navItems = document.querySelectorAll('.nav-item');
const allDropdowns = document.querySelectorAll('.nav-dropdown');

let activeDropdown = null;
let closeTimer = null;

// 清除关闭定时器
const clearCloseTimer = () => {
    if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
    }
};

// 遍历导航项
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        clearCloseTimer();
        
        const targetDropdown = item.querySelector('.nav-dropdown');

        // 核心逻辑：如果有下拉菜单
        if (targetDropdown) {
            // 如果之前有别的菜单开着，且不是当前这个
            if (activeDropdown && activeDropdown !== targetDropdown) {
                // 关闭旧的 (CSS 设置了旧菜单关闭很快，所以不会重叠)
                activeDropdown.classList.remove('is-active');
            }
            
            // 打开新的
            targetDropdown.classList.add('is-active');
            activeDropdown = targetDropdown;
            
            // 确保遮罩显示
            if (mask) mask.classList.add('is-visible');
            
            // 设置导航栏背景变白 (触发 CSS 中的 is-hovering 样式)
            // 这会导致后续切换菜单时 transform 被禁用，实现平滑切换
            navContainer.classList.add('is-hovering');

        } else {
            // 如果移入的是没有菜单的项（如搜索、Logo）
            // 1. 关闭当前激活的菜单
            if (activeDropdown) {
                activeDropdown.classList.remove('is-active');
                activeDropdown = null;
            }
            
            // 2. 隐藏遮罩
            if (mask) mask.classList.remove('is-visible');
            
            // 注意：这里不立刻移除 navContainer 的 is-hovering
            // 这样鼠标在导航栏内快速划过时，背景保持白色，体验更好
        }
    });
});

// 监听鼠标离开整个导航栏区域
if (navContainer) {
    navContainer.addEventListener('mouseleave', () => {
        // 延时关闭，防止鼠标只是稍微滑出一点点
        closeTimer = setTimeout(() => {
            // 1. 恢复背景透明
            navContainer.classList.remove('is-hovering');
            
            // 2. 隐藏遮罩
            if (mask) mask.classList.remove('is-visible');
            
            // 3. 关闭激活的菜单
            if (activeDropdown) {
                activeDropdown.classList.remove('is-active');
                activeDropdown = null;
            }
        }, 200); // 200ms 缓冲
    });

    // 防止鼠标从页面内容滑回导航栏时触发关闭逻辑
    navContainer.addEventListener('mouseenter', clearCloseTimer);
}

// 监听下拉菜单本身的进入
// 防止 DOM 层级问题导致鼠标进入绝对定位菜单时被判定为 leave
allDropdowns.forEach(dd => {
    dd.addEventListener('mouseenter', clearCloseTimer);
});