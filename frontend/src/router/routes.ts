import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('src/layouts/main.vue'),
		children: [
			{ path: '', component: () => import('src/pages/index.vue') },
			{ path: '/user/index', component: () => import('src/pages/user/index.vue') },
			{ path: '/user/page/:id?', component: () => import('src/pages/user/page.vue') }
		]
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('src/pages/404.vue')
	}
]

export default routes
