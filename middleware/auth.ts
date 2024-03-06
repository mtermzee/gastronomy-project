export default defineNuxtRouteMiddleware((to, from) => {
	const user = useSupabaseUser();

	if (!user) {
		return navigateTo("/login");
	}
});

/*
* supabase middleware is dynamic and can be used in all pages without defining it. So it doesn't need to be defined in the pageMeta or auth middleware
* to use middleware in a page
definePageMeta({
    middleware: ['auth']
});
 */
