<template>
    <div class="container px-5 py-8 md:py-16 mx-auto">
        <div class="flex-1 flex items-center justify-center bg-white">
            <form @submit.prevent="signUp" class="flex flex-col px-16 py-8 rounded-md shadow-lg max-w-screen-sm w-full">
                <h1 class="text-3xl font-bold mb-4">Sign Up</h1>
                <input v-model="email" type="email" placeholder="Email"
                    class="border border-gray-300 px-3 py-2 rounded-md mb-4" />
                <input v-model="password" type="password" placeholder="Password"
                    class="border border-gray-300 px-3 py-2 rounded-md mb-4" />
                <button type="submit" class="bg-blue-500 text-white py-2 rounded-md">Sign Up</button>
                <p class="text-red-500 mt-4">{{ errorMsg }}</p>
                <p class="text-green-500 mt-4">{{ successMsg }}</p>
                <p class="mt-4">Already have an account? <nuxt-link to="/auth/login"
                        class="text-blue-500">Login</nuxt-link></p>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth']
});

const client = useSupabaseClient();

const email = ref('');
const password = ref('');
const errorMsg = ref('');
const successMsg = ref('');

async function signUp() {
    try {
        const { data, error } = await client.auth.signUp({ email: email.value, password: password.value });
        if (error) {
            throw error;
        }
        successMsg.value = 'Check your email for the confirmation link';
    } catch (error: any) {
        errorMsg.value = error.message;
    }
}
</script>

<style></style>