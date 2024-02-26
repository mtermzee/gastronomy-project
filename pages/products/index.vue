<template>
	<div class="flex flex-col w-4/5 m-auto justify-center items-start">
		<h1>Products page</h1>
		<div class="grid grid-cols-3 gap-4">
			<div v-for="product in products" :key="product.id">
				<ProductCard :data="product" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/Product";

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