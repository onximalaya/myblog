module.exports = {
  title: "记录",
  description: 'A simple and beautiful vuepress blog theme .',
  base:'/myblog/dist/',
  //    发布到github pages 配置/myblog/dist/
  //    发布到自己的服务器配置 ./
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },

      { text: 'Back Docs', 
        icon: 'reco-message',
        link: '/docs/back/',
      },
      {
        text: 'Prod Docs',
        icon: 'reco-message',
        link: '/docs/prod/',
      },
      {
        text: 'React Docs',
        icon: 'reco-message',
        link: '/docs/react/',
      },
    ],
    sidebar: {
      '/docs/back/': [
        '',
        '数据验证',
        '错误处理',
        '统一返回体格式',
        '记录日志',
        'show',
      ],
      '/docs/prod/': [
        '',
      ],
      '/docs/react/': [
        '',
        '事件绑定',
        'useState',
        '基础样式和受控组件',
        'react中获取DOM和组件实例',
        'react组件通信',
        '跨层通信Context',
        'useEffect副作用函数',
        '自定义Hook函数',
        'react状态管理',
        'useMemo及Memo',
        'useCallback',
        '组件暴露useImperativeHandle和forwardRef',
        'Class类组件及生命周期',
      ],
      
    },  
    // type: 'blog',
    // 博客设置
    // blogConfig: {
    //   category: {
    //     location: 2, // 在导航栏菜单中所占的位置，默认2
    //     text: 'Category' // 默认 “分类”
    //   },
    //   tag: {
    //     location: 3, // 在导航栏菜单中所占的位置，默认3
    //     text: 'Tag' // 默认 “标签”
    //   }
    // },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'zheng hu',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: '@copyright 110110110',
    // 项目开始时间
    startYear: '2023'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
