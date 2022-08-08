const nextElementInList = (list, value) => {
  // Figure out where we're starting in the list
  const currentIndex = list.indexOf(value);
  // Length-agnostic way to cycle through indices
  const nextIndex = (currentIndex + 1) % list.length;
  const nextValue = list[nextIndex];
  // Return next item in the array
  return nextValue;
};

export default nextElementInList;
