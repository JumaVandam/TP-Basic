<template>
	<div>
		<div class="fs-24 text-weight-medium ellipsis">{{ title }}</div>
		<div class="q-mt-md">
			<div class="flex no-wrap q-gutter-md">
				<slot name="buttons" />
			</div>
		</div>
		<q-expansion-item class="expansion-filter" v-model="expandModel">
			<div class="q-pt-lg">
				<div class="row q-col-gutter-md">
					<slot name="filter" />
				</div>
			</div>
		</q-expansion-item>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
	props: {
		title: {
			type: String,
			default: ''
		},
		expand: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		const expandModel = ref(props.expand)

		watch(
			() => props.expand,
			() => {
				expandModel.value = props.expand
			}
		)

		return {
			expandModel
		}
	}
})
</script>

<style lang="scss">
.expansion-filter .q-item {
	display: none;
}
</style>
