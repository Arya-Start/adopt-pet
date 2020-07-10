<template>
  <div class="dogs ">
    <PetTable species="dogs" :pets="dogs" />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import PetTable from "@/components/PetTable.vue";
export default {
  components: {
    PetTable
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["dogs"])
  },
  methods: {
    removePet() {
      const payload = { species: "dogs" };
      this.deletePet(payload);
    },
    ...mapActions(["deletePet"])
  }
};
</script>
<style>
.dogs {
  text-align: left;
}
</style>
