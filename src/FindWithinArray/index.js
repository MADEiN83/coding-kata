class Sandbox {
  proceed = (array, iterator) => {
    return array.map(iterator).indexOf(true);
  };
}

export default Sandbox;
