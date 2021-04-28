import Vue from 'vue'
import App from './App'

import {
	myRequest
} from 'untils/api.js'

Vue.prototype.$myRequest = myRequest

Vue.filter("forDate", (date) => {
	const nDate = new Date(date)
	const y = nDate.getFullYear()
	const m = nDate.getMonth().toString().padStart(2, 0)
	const d = nDate.getDay().toString().padStart(2, 0)
	return y + '-' + m + '-' + d
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
