<template>
	<div class="q-mt-sm">
		<q-table class="bg-transparent horizontal-table-spacing" separator="none" flat :rows="rows" :columns="columns" row-key="name" hide-bottom>
			<template v-slot:header="props">
				<q-tr class="bg-blue-5 text-white" :props="props">
					<q-th v-for="col in props.cols" :key="col.name" :props="props">
						{{ col.label }}
					</q-th>
				</q-tr>
			</template>
			<template v-slot:body="props">
				<q-tr class="relative-position cursor-pointer bg-grey-3" v-ripple :props="props">
					<q-td v-for="col in props.cols" :key="col.name" :props="props">
						{{ col.value || '-' }}
					</q-td>
				</q-tr>
			</template>
		</q-table>
		<!--<div class="q-py-sm q-px-md flex justify-end">
			<q-pagination v-model="pagination.page" color="dark" size="sm" flat active-design="outline" outline :max="pagination.totalPages" :max-pages="10" boundary-numbers boundary-links direction-links @click="changePage" />
		</div>-->
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		pagination: {
			type: Object,
			required: true
		},
		rows: {
			type: Array,
			required: true
		},
		columns: {
			type: Array,
			required: true
		}
	},
	setup(_, { emit }) {
		const changePage = () => {
			emit('changePage')
		}

		return {
			changePage
		}
	}
})
</script>

<style lang="scss" scoped>
tr {
	border-radius: 8px;
	height: 36px !important;
}
td {
	height: 36px !important;
}
th:first-child {
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
}
th:last-child {
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
}
td:first-child {
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
}
td:last-child {
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
}
</style>
