<template>
    <div class="container px-5 py-8 md:py-16 mx-auto">
        <div class="flex flex-col justify-center items-center">
            <h1 class="text-3xl font-bold">{{ isEditing ? 'Edit Item' : 'Create Item' }}</h1>

            <form @submit.prevent="handleSubmit" class="w-full">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_title" id="floating_title" v-model="smoothie.title"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="floating_title"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_method" id="floating_method" v-model="smoothie.method"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="floating_method"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Method</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="number" name="rating" id="floating_rating" v-model="smoothie.rating"
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

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import type { Smoothie } from "~/types/Smoothie";

definePageMeta({
    middleware: ['auth']
})

const router = useRouter();
const route = useRoute();

const id = route.params.id;
const isEditing = id !== 'new';

const client = useSupabaseClient();
const smoothie = ref({} as Smoothie);


onMounted(async () => {
    if (isEditing) {
        const { data, error } = await client.from('smoothies').select('*').eq('id', id).single();
        if (error) {
            console.error(error.message);
        } else {
            smoothie.value = data;
        }
    }
});

const handleSubmit = async () => {
    try {
        // Prepare the smoothie object with updated timestamp for editing
        const smoothieData = ref({
            ...smoothie.value,
            updated_at: new Date().toISOString()
        });

        let response;

        if (isEditing) {
            // Update existing smoothie
            const { data, error } = await client.from('smoothies').update([smoothieData.value]).eq('id', id);
            if (error) {
                throw new Error(error.message);
            }
            response = data;
        } else {
            // Create new smoothie
            const { data, error } = await client.from('smoothies').insert([smoothie.value]);
            if (error) {
                throw new Error(error.message);
            }
            response = data;
        }

        // Show success message and redirect
        alert(`Smoothie ${isEditing ? 'updated' : 'created'} successfully`);
        router.push('/smoothie'); // Redirect to the desired route

    } catch (error) {
        console.error('An error occurred:', error.message);
        alert('Failed to save smoothie. Please try again.');
    }
};


</script>

<style scoped>
/* Add any necessary styles */
</style>