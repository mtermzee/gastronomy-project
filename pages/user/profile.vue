<template>
    <div class="h-screen container py-36 sm:pt-44 sm:pb-60">
        <div class="flex flex-col items-center" v-if="user">
            <h1 class="text-3xl font-bold mb-4">Profile</h1>
            <p class="mb-4">Welcome, {{ user.email }}</p>
            <p class="mb-4">Your user id is: {{ user.id }}</p>
            <p class="mb-4">Your confirmed at: {{ user.confirmed_at }}</p>
            <p class="mb-4">Your role is: {{ user.role }}</p>
            <p class="mb-4">Your created at: {{ user.created_at }}</p>
            <p class="mb-4">Your updated at: {{ user.updated_at }}</p>
            <p class="mb-4">Your last sign in at: {{ user.last_sign_in_at }}</p>
            <button @click="logout" class="bg-red-500 text-white py-2 rounded-md">Logout</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth']
})

const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

// console.log(user.value);

async function logout() {
    try {
        const { error } = await client.auth.signOut();
        if (error) {
            throw error;
        }
        router.push('/auth/login');
    } catch (error: any) {
        console.error(error.message);
    }
}
</script>

<style></style>