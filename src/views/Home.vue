<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <Card
          v-for="katze in getDisplayKatzen"
          :key="katze.id"
          :name="katze.name"
          :image="katze.img"
          :id="katze.id"
        ></Card>
      </b-row>
      <b-pagination
        v-model="currentPage"
        :total-rows="getRows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        @input="paginate(currentPage)"
      ></b-pagination>
    </b-container>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      currentPage: 1,
      perPage: 3
    };
  },
  components: {
    Card
  },
  computed: {
    ...mapGetters(["getRows", "getDisplayKatzen"])
  },
  async mounted() {
    this.getRecords();
  },
  methods: {
    paginate(currentPage) {
      this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    },
    async getRecords() {
      await this.$store.dispatch("fetchKatzen");
    }
  }
};
</script>

<style lang="scss">
.page-item.active .page-link{
  background-color: #17a2b8;
  border-color: #17a2b8;
  color: white;
};
  .page-link {
    color: grey;
  }


</style>
