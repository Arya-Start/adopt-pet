export default {
  addPet: ({ commit }, payload) => {
    commit("appendPet", payload);
    console.log("Payload " + payload);
  },
  deletePet: ({ commit }, payload) => {
    commit("shiftPet", payload);
  }
};
