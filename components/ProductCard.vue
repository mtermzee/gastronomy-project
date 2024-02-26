<template>
	<div v-if="data"
		class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
		<img class="p-8 rounded-t-lg" :src="data?.image" :alt="data?.title" />

		<div class="px-5 pb-5">
			<h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
				{{ data?.title }}
			</h5>

			<div class="flex items-center mt-2.5 mb-5">
				<!-- Generate dynamic SVG stars based on data.rating.rate -->
				<div v-for="i in 5" :key="i">
					<svg class="w-4 h-4" :class="{
						'text-yellow-300': i <= data?.rating.rate,
						'text-gray-200 dark:text-gray-600': i > data?.rating.rate,
					}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
						<path
							d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
					</svg>
				</div>

				<span
					class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
					{{ data?.rating.rate }}
				</span>
			</div>
			<div class="flex items-center justify-between">
				<span class="text-3xl font-bold text-gray-900 dark:text-white">${{ data?.price }}
				</span>
				<NuxtLink :to="'/products/' + data?.id">
					<p href="#"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						View Details
					</p>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/Product";

defineProps({
	data: {
		type: Object as PropType<Product>,
	},
});
</script>

<style scoped>
img {
	width: 20rem;
	height: 20rem;
	object-fit: fill;
}
</style>