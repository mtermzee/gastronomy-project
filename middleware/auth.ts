import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
	const user = useAuth().isAuthenticated();
	const publicRoutes = ["/auth/login", "/auth/register"];

	// If the user is not authenticated can access only public routes
	if (!user && !publicRoutes.includes(to.path)) {
		return navigateTo("/auth/login");
	}

	// If the user is authenticated can't access public routes
	if (user && publicRoutes.includes(to.path)) {
		return navigateTo("/");
	}
});

/*
* supabase middleware is dynamic and can be used in all pages without defining it. So it doesn't need to be defined in the pageMeta or auth middleware
* to use middleware in a page
definePageMeta({
    middleware: ['auth']
});
 */
