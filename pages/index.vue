<template>
	<div class="flex flex-col w-4/5 m-auto justify-center items-start">
		<h1>Index page</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
			perferendis ipsa quae non incidunt, officia dolor ducimus hic corporis.
			Repudiandae.
		</p>
		<div>
			<p>Name: {{ name }}</p>
			<p>Count: {{ store.count }}</p>
			<p>Double Count: {{ doubleCount }}</p>
			<button @click="increment">Increment</button>
			<button @click="decrement">Decrement</button>
			<button @click="reset">Reset</button>
		</div>
		<NuxtLink to="/about">About</NuxtLink>
	</div>
</template>

<script setup>
import { useCounterStore } from '~/store/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()

const { name, doubleCount } = storeToRefs(store)

const { increment, decrement, reset } = store

</script>

<style scoped></style>
