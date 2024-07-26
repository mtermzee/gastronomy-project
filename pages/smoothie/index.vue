<template>
    <div class="flex w-4/5 mx-auto justify-center items-start py-36 sm:pt-44 sm:pb-60">
        <div class="flex flex-col items-center gap-4">
            <h1 class="text-3xl font-bold">Smoothies</h1>
            <button @click="fetchSmoothies" class="bg-blue-500 text-white p-2 rounded-md">Fetch Smoothies</button>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="smoothie in smoothies" :key="smoothie.id">
                    <SmoothieCard :data="smoothie" />
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Smoothie } from "~/types/Smoothie";

const client = useSupabaseClient();
const smoothies = ref([] as Smoothie[]);

async function fetchSmoothies() {
    const { data, error } = await client.from('smoothies').select('*');
    if (error) {
        console.error(error.message);
    } else {
        smoothies.value = data;
    }
}
</script>

<style></style>