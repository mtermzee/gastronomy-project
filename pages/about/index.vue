<template>
    <div class="w-4/5 mx-auto flex justify-center">
        <div class="flex flex-col justify-center items-start">
            <h1>About page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                perferendis ipsa quae non incidunt, officia dolor ducimus hic corporis.
                Repudiandae.
            </p>
            <NuxtLink to="/products">Products</NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth']
})
</script>

<style scoped></style>
