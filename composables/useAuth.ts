export function useAuth() {
	function isAuthenticated() {
		const user = ref(useSupabaseUser());

		return user.value !== null;
	}

	function userData() {
		const user = ref(useSupabaseUser());

		return user.value;
	}

	return {
		isAuthenticated,
		userData,
	};
}
