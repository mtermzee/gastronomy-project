<template>
    <NuxtLink :to="'/smoothie/' + data?.id">
        <div class="bg-green-50 shadow-lg rounded-lg p-6">
            <ul v-auto-animate>
                <li class="text-2xl font-extrabold mb-4 text-green-800">{{ data.title }}</li>
                <li class="text-gray-800 mb-3">{{ data.method }}</li>
                <li class="text-yellow-500 mb-3 font-medium">{{ data.rating }}</li>
                <li class="text-gray-500 text-xs">{{ data.created_at }}</li>
            </ul>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<style></style>
