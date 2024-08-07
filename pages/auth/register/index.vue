<template>
    <div class="bg-gray-900">
        <div class="flex justify-center h-[calc(100vh-18rem)] md:h-[calc(100vh-11rem)]">
            <div class="hidden lg:block lg:w-2/3 relative">
                <img class="h-full w-full object-cover" src="~/assets/images/brenda-godinez-CrK843Pl9a4-unsplash.jpg"
                    alt="Background Image">
                <div class="absolute inset-0 flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 class="text-4xl font-bold text-white">Brand</h2>
                        <p class="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam
                            temporibus molestiae</p>
                    </div>
                </div>
            </div>

            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold text-center text-white">Brand</h2>
                        <p class="mt-3 text-gray-300">Sign up to access your account</p>
                    </div>

                    <div class="mt-8">
                        <form @submit.prevent="signUp">
                            <div v-if="errorMsg" class="mb-4 text-sm text-red-600">
                                {{ errorMsg }}
                            </div>
                            <div v-if="successMsg" class="mb-4 text-sm text-green-600">
                                {{ successMsg }}
                            </div>

                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-300">Email
                                    Address</label>
                                <input type="email" name="email" id="email" v-model="email"
                                    placeholder="example@example.com"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <input type="password" name="password" id="password" v-model="password"
                                    placeholder="Your Password"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <button
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign up
                                </button>
                            </div>
                        </form>

                        <p class="mt-6 text-sm text-center text-gray-400">Already have an account? <NuxtLink
                                to="/auth/login"
                                class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign in
                            </NuxtLink>.
                        </p>
                    </div>
                </div>
            </div>
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
    errorMsg.value = '';
    successMsg.value = '';
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
