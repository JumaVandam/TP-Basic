import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
	app.config.globalProperties.$gender = 'wewe'
	app.provide('gender', 2 as number)
})
