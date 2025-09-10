<script setup lang="ts">
  import { ref } from 'vue';
  import { BDataTable, BButton, type IColumnAttributes, type IPaginationAttributes, type TSortDirection } from '../../lib/b1ui.es.js';
  import type { IProduct, SelectedModel } from '@/models/index.js';

  const props = defineProps<{
    title: string;
    columns: IColumnAttributes[];
    tableNumber: number;
  }>();

  const emit = defineEmits<{
    (e: 'reset-data'): void;
    (e: 'move-rows', data: { selected: SelectedModel[]; tableNumber: number }): void;
  }>();

  const dataModel = defineModel<IProduct[]>('dataModel');
  const selected = ref<SelectedModel[]>([]);
  const paginationProps1 = ref<IPaginationAttributes>({
    visible: true,
    totalRows: dataModel.value?.length,
  });

  const onChangeFilters = (filters: any[]) => {
    if (filters.length === 0) {
      emit('reset-data');
      return;
    }
    dataModel.value = dataModel.value?.filter(product => {
      return filters.every(filter => {
        return (product[filter.field as keyof IProduct] as string).toLowerCase().includes((filter.value as string).toLowerCase());
      });
    });
  };

  const moveRows = () => {
    emit('move-rows', { selected: selected.value, tableNumber: props.tableNumber });
    selected.value = [];
  };

  const onChangeSort = (sort: TSortDirection[]) => {
    if (sort.length === 0) {
      emit('reset-data');
      return;
    }
    dataModel.value = dataModel.value?.sort((a, b) => {
      if (sort[0].direction === 'asc') {
        return a[sort[0].field as keyof IProduct] > b[sort[0].field as keyof IProduct] ? 1 : -1;
      } else {
        return a[sort[0].field as keyof IProduct] < b[sort[0].field as keyof IProduct] ? 1 : -1;
      }
    });
  };
</script>
<template>
  <div>
    <div class="flex justify-between mb-20">
      <div>{{ props.title }}</div>
      <BButton :disabled="selected.length === 0" @click="moveRows">Move rows</BButton>
    </div>

    <b-data-table
      :value="dataModel"
      :columns="columns"
      :multi-sort="false"
      :multi-select="true"
      :draggable-column="true"
      :pagination="paginationProps1"
      :show-filters="true"
      show-selection
      show-footer
      :selected
      @selected-rows="selected = $event"
      @change-filters="onChangeFilters"
      @change-sort="onChangeSort"
    >
    </b-data-table>
  </div>
</template>

<style scoped></style>
