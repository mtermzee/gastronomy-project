<template>
    <div class="flex w-4/5 mx-auto justify-center items-start py-36 sm:pt-44 sm:pb-60">
        <div class="flex flex-col items-center">
            <h1 class="text-3xl font-bold mb-4">Smoothie Details</h1>
            <p>{{ smoothie.title }}</p>
            <p>{{ smoothie.method }}</p>
            <p>{{ smoothie.created_at }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Smoothie } from "~/types/Smoothie";

const { id } = useRoute().params;
const client = useSupabaseClient();
const smoothie = ref({} as Smoothie);

onMounted(async () => {
    const { data, error } = await client.from('smoothies').select('*').eq('id', id).single();
    if (error) {
        console.error(error.message);
    } else {
        smoothie.value = data;
    }
});

</script>

<style></style>