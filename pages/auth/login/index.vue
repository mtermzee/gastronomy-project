<template>
    <div class="h-screen flex">
        <div class="flex-1 flex items-center justify-center bg-white">
            <form @submit.prevent="signIn" class="flex flex-col px-16 py-8 rounded-md shadow-lg max-w-screen-sm w-full">
                <h1 class="text-3xl font-bold mb-4">Login</h1>
                <input v-model="email" type="email" placeholder="Email"
                    class="border border-gray-300 px-3 py-2 rounded-md mb-4" />
                <input v-model="password" type="password" placeholder="Password"
                    class="border border-gray-300 px-3 py-2 rounded-md mb-4" />
                <button type="submit" class="bg-blue-500 text-white py-2 rounded-md">Login</button>
                <p class="text-red-500 mt-4">{{ errorMsg }}</p>
                <p class="mt-4">Don't have an account? <nuxt-link to="/auth/register" class="text-blue-500">Sign
                        Up</nuxt-link>
                </p>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth']
});

const client = useSupabaseClient();
const router = useRouter();

const email = ref('');
const password = ref('');
const errorMsg = ref('');

async function signIn() {
    try {
        const { error } = await client.auth.signInWithPassword({ email: email.value, password: password.value });
        if (error) {
            throw error;
        }
        router.push('/user/profile');
    } catch (error: any) {
        errorMsg.value = error.message;
    }
}
</script>

<style></style>