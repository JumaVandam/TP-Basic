<template>
	<q-layout class="bg-grey-3" view="lHh LpR fFf">
		<q-header class="q-px-md q-py-sm bg-white flex items-center justify-between no-wrap" reveal>
			<q-toolbar class="q-pa-none flex items-center justify-between no-wrap">
				<div class="flex items-center no-wrap q-gutter-x-md">
					<q-btn dense flat round icon="menu" color="primary" @click="sidebar = !sidebar" />
					<q-btn dense flat round icon="west" color="primary" @click="$router.back()" />
					<q-btn dense flat round icon="refresh" color="primary" @click="pageKey++" />
				</div>
				<div class="flex items-center no-wrap q-gutter-x-sm">
					<q-btn-dropdown class="icon-primary" :class="{ 'hide-dropdown-icon icon-primary': $q.screen.lt.md }" :ripple="false" flat dense no-caps no-wrap color="dark" icon="language" :label="$q.screen.lt.md ? '' : 'Language'">
						<q-list>
							<q-item class="bg-white" clickable v-close-popup>
								<q-item-section>
									<q-item-label>English</q-item-label>
								</q-item-section>
							</q-item>
							<q-item class="bg-white" clickable v-close-popup>
								<q-item-section>
									<q-item-label>Russian</q-item-label>
								</q-item-section>
							</q-item>
						</q-list>
					</q-btn-dropdown>
					<q-btn-dropdown class="text-weight-bold" :class="{ 'hide-dropdown-icon': $q.screen.lt.md }" :ripple="false" flat dense color="dark" label="SUPERVISOR">
						<q-list>
							<q-item class="bg-white" clickable v-close-popup>
								<q-item-section>
									<q-item-label>Profile</q-item-label>
								</q-item-section>
							</q-item>
							<q-item class="bg-white" clickable v-close-popup>
								<q-item-section>
									<q-item-label>Settings</q-item-label>
								</q-item-section>
							</q-item>
						</q-list>
					</q-btn-dropdown>
				</div>
			</q-toolbar>
		</q-header>
		<q-drawer class="bg-primary" show-if-above v-model="sidebar" side="left">
			<q-item class="bg-white" :style="{ height: '66px' }" clickable v-ripple to="/">
				<q-item-section>
					<img class="fit" :src="require('../assets/logo.svg')" />
				</q-item-section>
			</q-item>
			<q-list class="text-white">
				<q-item :class="{ 'bg-blue-5': activeLinks.user }" clickable v-ripple active-class to="/user/index">
					<q-item-section avatar>
						<q-icon color="white" name="person" size="24px" />
					</q-item-section>
					<q-item-section class="text-weight-medium">USERS</q-item-section>
				</q-item>
			</q-list>
		</q-drawer>
		<q-page-container>
			<router-view :key="pageKey" />
		</q-page-container>
	</q-layout>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
	setup() {
		const route = useRoute()

		const sidebar = ref(false)
		const pageKey = ref(0)

		const activeLinks = computed(() => {
			return {
				user: route.fullPath.includes('user')
			}
		})

		return {
			sidebar,
			pageKey,
			activeLinks
		}
	}
}
</script>

<style lang="scss">
.icon-primary .on-left {
	color: $primary;
}
.hide-dropdown-icon .q-btn-dropdown__arrow {
	display: none;
}
</style>
