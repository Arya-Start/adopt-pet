export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet);
  },
  shiftPet: (state, { species }) => {
    state[species].pop();
  }
};
