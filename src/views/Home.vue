<template>
  <div class="home home-view-container">
    <h1>New BestFriend</h1>
    <h1>{{ animalsCount }}</h1>

    <button @click="toggleForm" class="btn btn-primary">Add New Pet</button>
    <b-form @submit.prevent="petSubmit" v-if="showForm">
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
          v-model="formData.species"
          :options="animals"
          required
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
        name: "name",
        age: 0,
        species: null
      },
      animals: [{ text: "Select One", value: this.species }, "dogs", "cats"]
    };
  },
  computed: {
    ...mapGetters(["animalsCount", "testStateFromGetter"])
  },
  methods: {
    toggleForm: function() {
      this.showForm = !this.showForm;
    },
    petSubmit() {
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
