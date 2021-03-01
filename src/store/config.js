import { env, blog, starport, blocks, bank, wallet } from '@starport/vuex'

export default function init(store) {
	store.registerModule(['chain'], { namespaced: true })
	bank(store)
	starport(store)
	blocks(store)
	blog(store)
	env(store)
	wallet(store)
}
