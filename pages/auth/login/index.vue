<template>
    <div class="bg-gray-900">
        <div class="flex justify-center h-[calc(100vh-18rem)] md:h-[calc(100vh-10rem)]">
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
                        <p class="mt-3 text-gray-300">Sign in to access your account</p>
                    </div>

                    <div class="mt-8">
                        <form @submit.prevent="signIn">
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-300">Email
                                    Address</label>
                                <input type="email" name="email" id="email" v-model="email"
                                    placeholder="example@example.com"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-300">Password</label>
                                    <a href="#"
                                        class="text-sm text-gray-400 focus:text-lime-500 hover:text-lime-500 hover:underline">Forgot
                                        password?</a>
                                </div>

                                <input type="password" name="password" id="password" v-model="password"
                                    placeholder="Your Password"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <button
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-500 rounded-md hover:bg-lime-400 focus:outline-none focus:bg-lime-400 focus:ring focus:ring-lime-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <NuxtLink
                                to="/auth/register"
                                class="text-lime-500 focus:outline-none focus:underline hover:underline">Sign up
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