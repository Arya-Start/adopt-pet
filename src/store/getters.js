export default {
  animalsCount: state => {
    return state.cats.length + state.dogs.length;
  },
  testStateFromGetter: state => {
    console.log("Cats State");
    console.log(state.cats.length);
  }
};
