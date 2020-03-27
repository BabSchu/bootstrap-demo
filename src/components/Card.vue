<template>
  <div>
    <b-col>
      <b-card
        :title="name"
        :img-src="image"
        img-alt="Katze"
        img-top
        tag="article"
        style="max-width:20rem"
        class="mb-2"
      >
        <b-card-text>
          Lorem ipsum
        </b-card-text>
        <b-button
          v-b-modal="modalId"
          variant="secondary"
          v-b-tooltip.hover
          title="noch mehr Mietzen"
          >Mehr</b-button
        >
        <b-modal
                :id="modalId"
                title="Wichtige Info"
                ok-only
                ok-variant="info"
        >
          <p class="my-4 text-center">Miau</p>
        </b-modal>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["name", "image", "id"],
  computed: {
    modalId() {
      return `modal-${this.id}`;
    }
  },
};
</script>

<style scoped></style>
