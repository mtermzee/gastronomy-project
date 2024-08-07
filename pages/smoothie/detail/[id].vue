<template>
    <div class="container px-5 py-8 md:py-16 mx-auto">
        <div class="flex flex-col justify-center items-start">
            <SmoothieDetails :data="smoothie" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Smoothie } from "~/types/Smoothie";

definePageMeta({
    middleware: ['auth']
})

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