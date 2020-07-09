<template>
  <div>
    <h1>{{ animals.name }}</h1>
    <p>{{ animals.age }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      animals: {}
    };
  },
  beforeCreate() {
    console.log("beforeCreated");
  },
  created() {
    console.log("create");
  },
  beforeMount() {
    console.log("bMount");
  },
  computed: {
    ...mapState(["dogs", "cats"])
  },
  mounted() {
    const animals = this[this.$route.params.species][this.$route.params.id];
    this.animals = animals;
  }
};
</script>
