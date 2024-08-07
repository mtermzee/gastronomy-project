<template>
    <div class="container mx-auto px-5 pt-8 md:pt-16 h-auto md:h-[calc(100vh-20rem)]">
        <div
            class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full shadow-lg rounded-xl mt-20">
            <div class="px-6">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full flex justify-center">
                        <div class="relative">
                            <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
                                class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                        </div>
                    </div>
                    <div class="w-full text-center mt-20">
                        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div class="p-3 text-center">
                                <span
                                    class="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                                <span class="text-sm text-slate-400">Photos</span>
                            </div>
                            <div class="p-3 text-center">
                                <span
                                    class="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
                                <span class="text-sm text-slate-400">Followers</span>
                            </div>

                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                                <span class="text-sm text-slate-400">Following</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-2">
                    <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Mike Thompson</h3>
                    <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                        <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
                    </div>
                </div>
                <div class="mt-6 py-6 border-t border-slate-200">
                    <div class=" flex flex-wrap justify-start items-center">
                        <p>Welcome, {{ user.email }}</p>
                        <p>Your user id is: {{ user.id }}</p>
                        <p>Your confirmed at: {{ user.confirmed_at }}</p>
                        <p>Your role is: {{ user.role }}</p>
                        <p>Your created at: {{ user.created_at }}</p>
                        <p>Your updated at: {{ user.updated_at }}</p>
                        <p>Your last sign in at: {{ user.last_sign_in_at }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth']
})

const user = useSupabaseUser();
</script>

<style></style>