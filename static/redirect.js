export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  if (isHMR) return; //用来判断热更新
  // 页面均放在_lang文件夹下，即lang为动态路由参数;
  /* if (!params.lang) { //此写法会出现路由重定向次数过多的问题；
  return redirect('/' + defaultLocale + '' + route.fullPath)} */
  console.log('route.fullPath============',route.fullPath)
  if (route.fullPath == '/about' || route.fullPath == '/about_ENG') {
    return redirect('/about-us')
  }else if(route.fullPath == '/contact_ENG' || route.fullPath == '/contact'){
      return redirect('/contact-us')
    }else if(route.fullPath == '/primary' ){
      return redirect('/general-oral-examination')
    }else if(route.fullPath == '/cosmetic' ){
      return redirect('/teeth-whitening')
    }else if(route.fullPath == '/home' ){
      return redirect('/')
    }else if(route.fullPath == '/advanced' ){
      return redirect('/implant')
    }
  }

