<script setup lang="ts">
  import { h, ref } from 'vue';
  import { BFilterComponentInput, type IColumnAttributes } from '../lib/b1ui.es.js';
  import productData from '@/mocks/data.json';
  import type { IProduct, SelectedModel } from './models/index';
  import CustomTable from './components/CustomTable.vue';

  interface DataModel {
    data1: IProduct[];
    data2: IProduct[];
  }

  const initialData = ref<DataModel>({
    data1: productData.data.slice(0, 10) as unknown as IProduct[],
    data2: productData.data.slice(10, 20) as unknown as IProduct[],
  });
  const products1 = ref(initialData.value.data1);
  const products2 = ref(initialData.value.data2);
  const columns = ref<IColumnAttributes[]>([
    {
      field: 'name',
      header: 'Name',
      dataType: 'string',
      width: 300,
      filterComponent: () =>
        h(BFilterComponentInput, {
          placeholder: 'Search by name',
          clearWithText: true,
          showOperation: true,
        }),
    },
    {
      field: 'code',
      header: 'Code',
      dataType: 'string',
      width: 250,
      filterComponent: () =>
        h(BFilterComponentInput, {
          placeholder: 'Search by code',
          clearWithText: true,
          showOperation: true,
        }),
    },
  ]);

  const onMoveRows = (data: { selected: SelectedModel[]; tableNumber: number }) => {
    const selectedIds = data.selected.map(p => p.data.id);
    if (data.tableNumber === 1) {
      // Переносим из таблицы 1 в таблицу 2
      products2.value.push(...data.selected.map(s => s.data));
      products1.value = products1.value.filter(p => !selectedIds.includes(p.id));
    } else if (data.tableNumber === 2) {
      // Переносим из таблицы 2 в таблицу 1
      products1.value.push(...data.selected.map(s => s.data));
      products2.value = products2.value.filter(p => !selectedIds.includes(p.id));
    }
  };
</script>

<template>
  <section class="container">
    <div class="flex justify-between">
      <CustomTable
        :columns="columns"
        v-model:data-model="products1"
        title="Table 1"
        :table-number="1"
        @reset-data="products1 = [...initialData.data1]"
        @move-rows="onMoveRows"
      />
      <CustomTable
        :columns="columns"
        v-model:data-model="products2"
        title="Table 2"
        :table-number="2"
        @reset-data="products2 = [...initialData.data2]"
        @move-rows="onMoveRows"
      />
    </div>
  </section>
</template>

<style scoped></style>
