<template>
    <div>
        <h1 class="text-3xl font-bold mb-4">Smoothie Details</h1>
        <p>{{ data.title }}</p>
        <p>{{ data.ingredients }}</p>
        <p>{{ data.preparation }}</p>
        <p>{{ data.created_at }}</p>
        <p v-if="data.user_id !== user?.id" class="text-red-500">You are not allowed to edit this smoothie</p>
        <p v-else class="text-green-500">You can edit this smoothie</p>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    data: {
        type: Object,
        required: true,
    },
});
const user = useSupabaseUser();
</script>

<style></style>