import menu from './routers/menu';
class Router {
	defaultRouter = [
		{
			name: '首页',
			path: '/pages/index/index',
			icon: '/static/index.png',
			
		},
		...menu, // 这里是为了代码简洁，可以放在routers文件下 ，然后引入
		
	];

}

export default new Router();
