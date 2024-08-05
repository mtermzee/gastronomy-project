<template>
    <div class="flex w-full mx-auto justify-center items-start">
        <div class="flex flex-col items-center gap-4 w-3/4 sm:w-1/2 lg:w-1/3">
            <h1 class="text-3xl font-bold">{{ isEditing ? 'Edit Item' : 'Create Item' }}</h1>

            <form @submit.prevent="handleSubmit" class="w-full">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_title" id="floating_title"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="floating_title"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_method" id="floating_method"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="floating_method"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Method</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="number" name="rating" id="floating_rating"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="floating_rating"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rating</label>
                </div>

                <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    {{ isEditing ? 'Update' : 'Create' }}
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const id = route.params.id;
const isEditing = id !== 'new';

const item = ref({ title: '', method: '', rating: 0 });

onMounted(async () => {
    if (isEditing) {
        const response = await fetch(`/api/items/${id}`);
        if (response.ok) {
            item.value = await response.json();
        } else {
            console.error('Failed to fetch item data');
        }
    }
});

const handleSubmit = async () => {
    const payload = JSON.stringify(item.value);
    const options = {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
    };

    const response = await fetch(isEditing ? `/api/items/${id}` : '/api/items', options);
    if (response.ok) {
        router.push('/items');
    } else {
        console.error(`Failed to ${isEditing ? 'update' : 'create'} item`);
    }
};
</script>

<style scoped>
/* Add any necessary styles */
</style>