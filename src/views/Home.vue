<template>
  <div class="home">
    <h1>{{ animalsCount }}</h1>

    <button @click="toggleForm" class="btn btn-primary">Add New Pet</button>
    <b-form @submit.prevent="onSubmit" v-if="showForm">
      <b-form-group id="input-group-1" label="Pet name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="formData.name"
          type="text"
          required
          placeholder="Enter Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          required
          v-model="formData.species"
          :options="animals"
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      showForm: false,
      formData: {
        name: "",
        age: 0,
        species: null
      },
      animals: [{ text: "Select One", value: null }, "Dogs", "Cats"]
    };
  },
  computed: {
    ...mapGetters(["animalsCount"])
  },
  methods: {
    toggleForm: function() {
      this.showForm = !this.showForm;
    },
    onSubmit: function() {
      const { species, name, age } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          age
        }
      };
      this.addPet(payload);
      this.formData = { name: "", age: 0, species: null };
    },
    ...mapActions(["addPet"])
  }
};
</script>
<style>
.home {
  text-align: left;
}
</style>
