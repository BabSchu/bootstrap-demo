<template>
  <div class="about p-5">
    <h1>This is an about page</h1>

    <template>
      <div>
        <b-table striped hover :items="katzen" :fields="fields"></b-table>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
      fields: [
        {
          key: 'name',
          label: 'Name',
          sortable: true
        },
        {key: 'id',
        label: 'ID'}
      ],
      katzen: [ ]
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetch("katze.json");
      const val = await res.json();
      this.katzen = val;
      this.rows = this.katzen.length;
    }
  }
};
</script>
