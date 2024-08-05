<template>
    <div class="flex w-4/5 mx-auto justify-center items-start py-36 sm:pt-44 sm:pb-60">
        <div class="flex flex-col items-center">
            <h1 class="text-3xl font-bold mb-4">Smoothie Details</h1>
            <p>{{ data.title }}</p>
            <p>{{ data.method }}</p>
            <p>{{ data.created_at }}</p>
            <p v-if="data.user_id !== user?.id" class="text-red-500">You are not allowed to edit this smoothie</p>
            <p v-else class="text-green-500">You can edit this smoothie</p>
        </div>
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