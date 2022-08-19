const sitemap = {
  path: '/sitemap.xml', //生成的文件路径
  hostname: 'https://www.cmerdental.com', //网站的网址
  cacheTime: 1000 * 60 * 60 * 24, //一天的更新频率，只在generate:false有用
  gzip: true, //生成.xml.gz的sitemap
  generate: false,
  defaults: {
    changefred: 'always',
    lastmod: new Date()
  },
  //   需要生成的xml数据，return 返回需要给出的xml数据
  routes:()=>{
      const routes = [{
          url:"/",
          changefred:'always',
          lastmod:new Date()
      }]
      return routes
  }

}
export default sitemap;

