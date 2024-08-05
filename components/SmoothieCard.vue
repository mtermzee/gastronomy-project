<template>
    <div class="bg-green-50 shadow-lg rounded-lg p-6 relative">
        <NuxtLink :to="'/smoothie/detail/' + data?.id">
            <ul v-auto-animate>
                <li class="text-2xl font-extrabold mb-4 text-green-800">{{ data.title }}</li>
                <li class="text-gray-800 mb-3">{{ data.method }}</li>
                <li class="text-yellow-500 mb-3 font-medium">{{ data.rating }}</li>
                <li class="text-gray-500 text-xs">{{ data.created_at }}</li>
            </ul>
        </NuxtLink>
        <div class="absolute bottom-4 right-4 flex space-x-2">
            <button @click="editItem" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
            </button>
            <button @click="deleteItem" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(['edit', 'delete']);
const router = useRouter();

const editItem = () => {
    router.push(`/smoothie/${props.data.id}`);
};

const deleteItem = () => {
    emit('delete', props.data.id);
    // Or, you can handle deletion directly here, e.g. with an API call
    // makeApiCallToDeleteItem(props.data.id);
};
</script>

<style>
/* Add any additional styles here if needed */
</style>
