<template>
	<div style="display: flex; min-height: 100vh; flex-direction: column">
		<NavAppHeader />

		<main>
			<slot />
		</main>

		<div style="flex-grow: 1"></div>

		<NavAppFooter />
	</div>
</template>
