import { env, starport, blocks, wallet } from '@starport/vuex'

export default function init(store) {
	store.registerModule(['chain'], { namespaced: true })
	starport(store)
	blocks(store)
	env(store)
	wallet(store)
}
