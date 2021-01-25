module.exports = [
  {text: '首页', link: '/index/'},
  {
    text: '后端',
    link: '',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
	   // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
     //  java.html
     // 注意link结尾有斜杠和没有斜杠的区别
    {text: 'Java', link: '/index/'},    
    {text: 'JVM', link: '/index/'},
    {text: '算法', link: '/index/'},
    {text: 'Spring', link: '/index/'},
    {text: 'Spring Boot', link: '/index/'},
    {text: 'Spring Cloud', link: '/index/'},
    {text: '数据库', link: '/index/'},
    {text: '设计模式', link: '/index/'},
    {text: '架构', items: [
      {text: '微服务', link: '/index/'}, 
      {text: '敏捷开发', link: '/index/'},
      {text: '领域驱动设计', link: '/index/'},
  ]},
    ]
  },

  {
    text: '大数据',
    link: '/index/',
    items: [
      // {text: '数据开发', link: '/index/'},
      // {text: '数据挖掘', link: '/index/'},
      // {text: '数据分析', link: '/index/'},
    ]
  },
  {
    text: '更多', 
    link: '',
    items: [
      // 链接此分类文件夹里第一个文章，其余的自动生成，在目录里显示
      {text: '运维', items: [
          {text: 'Docker', link: '/index/'}, 
          {text: 'DevOps', link: '/index/'},
          {text: 'Linux', link: '/index/'},
      ]},
      {text: '职场', items: [
          {text: '面试', link: '/index/'}, // 注意link结尾有斜杠和没有斜杠的区别
          {text: '个人提升', link: '/index/'},
      ]},   
      {text: '其他', items: [
          {text: '收藏夹', link: '/collects/'},
      ]},
    ]
  },

  // {
  //   text: '索引',
  //   link: '',
  //   items: [
      // {text: '分类', link: '/categories/'},
      // {text: '标签', link: '/tags/'},
      // {text: '归档', link: '/archives/'},
  //   ]
  // },
  // {text: '归档', link: '/archives/'},
  {text: '归档', link: '/archives/'},
  {text: '关于', link: '/about/'}
]
