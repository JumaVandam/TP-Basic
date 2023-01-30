<template>
	<q-page class="q-pa-md">
		<div class="q-pa-md bg-white br-8">
			<div class="flex items-center justify-between q-gutter-md">
				<div class="fs-24 text-weight-medium ellipsis">User create</div>
				<div>
					<div class="flex q-gutter-md">
						<q-btn color="primary" unelevated no-caps no-wrap icon="close" label="Close" @click="$router.back()" />
						<q-btn color="secondary" unelevated no-caps no-wrap icon="save" label="Save" @click="save" />
					</div>
				</div>
			</div>
			<div class="q-mt-lg">
				<q-form class="row q-col-gutter-md" ref="form" greedy no-error-focus>
					<div class="q-mt-lg col-12 fs-18 text-weight-medium">
						User information
						<q-separator />
					</div>
					<div class="col-xl-2 col-lg-3 col-sm-4 col-12">
						<q-input class="q-pa-none field-36" v-model="user.name" color="primary" bg-color="grey-3" borderless dense label="Name" no-error-icon :rules="[(val) => !!val || '']" />
					</div>
					<div class="q-mt-lg col-12 fs-18 text-weight-medium">Contacts</div>
					<div class="col-xl-2 col-lg-3 col-sm-4 col-12">
						<q-input class="q-pa-none field-36" v-model="user.name" color="primary" bg-color="grey-3" borderless dense label="Phone" no-error-icon :rules="[(val) => !!val || '']" />
					</div>
					<div class="col-xl-2 col-lg-3 col-sm-4 col-12">
						<q-input class="q-pa-none field-36" v-model="user.name" color="primary" bg-color="grey-3" borderless dense label="Email" no-error-icon :rules="[(val) => !!val || '']" />
					</div>
				</q-form>
			</div>
		</div>
	</q-page>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
	setup() {
		const form = ref(null)
		const user = reactive({
			name: null,
			login: null
		})

		const save = async () => {
			await form.value.validate()
		}

		return {
			user,
			form,
			save
		}
	}
})
</script>
