import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base: '/blog/',
  lang: 'zh-CN',
  title: "zx2881的技术博客文档",
  description: "zx2881夯爆了喵！",
  head: [
    ['link',{ rel: 'icon', href: '/nyan_logo.jpg'}],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ]
  ],
  cleanUrls: true,
  markdown:{ math : true},
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/nyan_logo.jpg',
    
    search: { 
      provider: 'local'
    }, 
    outline:{
    level:2
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '课程',
        items:[
          { text: '数据库原理', link: '/database/'},
          { text: 'python', link: '/'}
        ]
      },
      { text: '个人简介', link: '/jianjieshi' }
    ],

    sidebar: {
      '/database/': [
        {
          text: '数据库系统概论',
          collapsed: false, // false 表示默认展开，true 表示默认折叠
          items: [
            { text: '1. 绪论与基本概念', link: '/database/' }, // 对应 docs/database/index.md
            { text: '2. 关系数据库', link: '/database/第二章.md' }, 
            { text: '3. SQL 语言详解', link: '/database/第三章.md' },
            { text: '6.关系数据理论' , link: '/database/第六章.md' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zx2881' }
      
    ]
  }
})
