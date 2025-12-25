export const navData = [
    {
        type: 'link', text: '商店', href: '#',
        // 下拉菜单数据
        children: [
            { title: '选购', items: ['选购好礼', 'Mac', 'iPad', 'iPhone', 'Watch'] },
            { title: '快速链接', items: ['查找零售店', '订单状态', '分期付款'] }
        ]
    },
    {
        type: 'link', text: 'Mac', href: '#',
        children: [
            { title: '探索 Mac', items: ['MacBook Air', 'MacBook Pro', 'iMac', 'Mac mini'] },
            { title: '选购 Mac', items: ['选购 Mac', 'Mac 配件'] }
        ]
    },
    { type: 'link', text: 'iPad', href: '#', children: [] },
    { type: 'link', text: 'iPhone', href: '#', children: [] },
    { type: 'link', text: 'Watch', href: '#', children: [] },
    { type: 'link', text: 'AirPods', href: '#', children: [] },
    { type: 'link', text: '家居', href: '#', children: [] },
    { type: 'link', text: '娱乐', href: '#', children: [] },
    { type: 'link', text: '配件', href: '#', children: [] },
    { type: 'link', text: '技术支持', href: '#', children: [] }
];