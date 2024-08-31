function flat(arr: any, depth = 1) {
  if (depth === 0) {
    return arr;
  }

  return arr.reduce((acc: any[], cur: any) => {
    if (Array.isArray(cur)) {
      return [...acc, ...flat(cur, depth - 1)];
    } else {
      return [...acc, cur];
    }
  }, []);
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr, 2));

console.log(flat(arr));
// [1, 2, 3, [4]]

console.log(flat(arr, 1));
// [1, 2, 3, [4]]

console.log(flat(arr, 2));
// [1, 2, 3, 4]
