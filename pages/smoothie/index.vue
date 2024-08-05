<template>
    <div class="flex w-4/5 mx-auto justify-center items-start">
        <div class="flex flex-col items-center gap-4">
            <h1 class="text-3xl font-bold">Smoothies</h1>

            <div class="flex justify-start items-center">
                <button v-auto-animate :disabled="isLoading" @click="fetchSmoothies"
                    class="bg-blue-500 text-white p-2 rounded-md flex items-center justify-center">
                    <span>Retrieve</span>
                    <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white ml-2"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                </button>

                <NuxtLink to="/smoothie/new"
                    class="bg-green-500 text-white p-2 rounded-md flex items-center justify-center ml-4">
                    <span>Create</span>
                </NuxtLink>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="smoothie in smoothies" :key="smoothie.id">
                    <SmoothieCard :data="smoothie" @delete="handleDelete" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Smoothie } from "~/types/Smoothie";

const client = useSupabaseClient();
const smoothies = ref([] as Smoothie[]);
const isLoading = ref(false);

async function fetchSmoothies() {
    isLoading.value = true;

    // Create a one-second delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const { data, error } = await client.from('smoothies').select('*');
    if (error) {
        console.error(error.message);
    } else {
        smoothies.value = data;
    }

    isLoading.value = false;
}

async function handleDelete(id: number) {
    const { error } = await client.from('smoothies').delete().eq('id', id);
    if (error) {
        console.error(error.message);
    } else {
        smoothies.value = smoothies.value.filter(smoothie => smoothie.id !== id);
    }
}
</script>

<style></style>