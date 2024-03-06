import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
	state: () => ({
		count: 0,
		name: "Eduardo",
	}),
	getters: {
		doubleCount: (state) => state.count * 2,
	},
	actions: {
		increment() {
			this.count++;
		},
		decrement() {
			this.count--;
		},
		reset() {
			this.count = 0;
		},
	},
	persist: {
		storage: persistedState.localStorage,
	},
});

/*
 * Option Stores (we using) & Setup Stores
 * https://pinia.vuejs.org/core-concepts/
 * https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
 */
