
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/category/category","pages/profile/profile","pages/cart/cart","pages/home/children/product-detail","pages/location/location","pages/receive-address/receive-address","pages/login/login","pages/reg/reg","pages/pwd/pwd"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#BBFFFF","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#7A7E83","borderStyle":"black","backgroundColor":"#BBFFFF","list":[{"pagePath":"pages/home/home","iconPath":"static/tabIcon/home_2.png","selectedIconPath":"static/tabIcon/home.png","text":"主页"},{"pagePath":"pages/category/category","iconPath":"static/tabIcon/category_2.png","selectedIconPath":"static/tabIcon/category.png","text":"发现"},{"pagePath":"pages/cart/cart","iconPath":"static/tabIcon/order_2.png","selectedIconPath":"static/tabIcon/order.png","text":"订单"},{"pagePath":"pages/profile/profile","iconPath":"static/tabIcon/me_2.png","selectedIconPath":"static/tabIcon/me.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"finalproject","compilerVersion":"2.7.9","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"searchInput":{"align":"left","placeholder":"搜索商家、商品名称","borderRadius":"50px","backgroundColor":"#ffffff","placeholderColor":"#95826d"},"buttons":[{"text":"","fontSrc":"/static/iconfont/iconfont.ttf","float":"left","fontSize":"27px"},{"text":"","fontSrc":"/static/iconfont/iconfont.ttf","float":"right","fontSize":"26px"},{"text":"","fontSrc":"/static/iconfont/iconfont.ttf","float":"right","fontSize":"30px","color":"#EAC100"}]}}},{"path":"/pages/category/category","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"searchInput":{"align":"left","placeholder":"请输入搜索关键词","borderRadius":"50px","backgroundColor":"#ffffff","placeholderColor":"#95826d"},"buttons":[{"text":"发现","float":"left","fontSize":"16px","width":"56px"}]}}},{"path":"/pages/profile/profile","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"titleText":"饿了么","titleSize":"16px","backgroundColor":"#F1F1F1","buttons":[{"text":"","fontSrc":"/static/iconfont/iconfont.ttf","float":"right","fontSize":"19px","width":"30px"},{"text":"","fontSrc":"/static/iconfont/iconfont.ttf","float":"right","fontSize":"20px","width":"30px"}]}}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"titleText":"订单","buttons":[{"float":"left","fontSize":"22px","type":"back"},{"text":"删除","float":"right","fontSize":"16px"}]}}},{"path":"/pages/home/children/product-detail","meta":{},"window":{"titleNView":{"titleText":"商品详情","buttons":[{"text":"","fontSrc":"/static/iconfont/iconfont.ttf","fontSize":"23px","float":"right"}]}}},{"path":"/pages/location/location","meta":{},"window":{"titleNView":{"titleText":"我的收货地址","titleSize":"16px","buttons":[{"text":"地图","float":"right","fontSize":"16px","width":"56px"}]}}},{"path":"/pages/receive-address/receive-address","meta":{},"window":{"titleNView":{"titleText":"添加或更改收货地址"}}},{"path":"/pages/login/login","meta":{},"window":{"titleNView":{"titleText":"登录","titleSize":"16px"}}},{"path":"/pages/reg/reg","meta":{},"window":{"titleNView":{"titleText":"注册账号","titleSize":"16px"}}},{"path":"/pages/pwd/pwd","meta":{},"window":{"titleNView":{"titleText":"忘记密码"}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
