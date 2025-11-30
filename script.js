const byteSize = (str) => {
  // write your code here
 let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
};
// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
