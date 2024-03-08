<template>
	<div class="w-4/5 mx-auto flex justify-center">
		<div class="flex flex-col justify-center items-start">
			<h1>Products page</h1>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div v-for="product in products" :key="product.id">
					<ProductCard :data="product" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Product } from "~/types/Product";

definePageMeta({
	middleware: ['auth']
})

const products = ref<Product[]>([]);

const fetchProducts = async () => {
	const res = await fetch("https://fakestoreapi.com/products");
	const data = await res.json();
	products.value = data;
};

onMounted(() => {
	fetchProducts();
});
</script>

<style scoped></style>