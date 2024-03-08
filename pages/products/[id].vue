<template>
	<div class="flex w-4/5 mx-auto justify-center items-start">
		<ProductDetails :data="product" />
	</div>
</template>

<script lang="ts" setup>
import type { Product } from "~/types/Product";

definePageMeta({
	middleware: ['auth']
})

const { id } = useRoute().params;
const product = ref<Product>();
const error = useError();

const fetchProduct = async () => {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);

	try {
		const data = await res.json();
		product.value = data;
	} catch (err: any) {
		error.value = err;
	}
};

onMounted(() => {
	fetchProduct();
});
</script>

<style scoped></style>