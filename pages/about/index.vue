<template>
    <div class="flex flex-col w-4/5 m-auto justify-center items-start">
        <h1>About page</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            perferendis ipsa quae non incidunt, officia dolor ducimus hic corporis.
            Repudiandae.
        </p>
        <NuxtLink to="/products">Products</NuxtLink>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth']
})
</script>

<style scoped></style>
