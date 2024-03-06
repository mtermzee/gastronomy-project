// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,
	css: ["~/assets/styles/tailwind.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: [
		"@nuxtjs/supabase",
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
	],
	supabase: {
		redirect: false,
	},
});
