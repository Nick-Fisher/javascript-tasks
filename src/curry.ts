const curry = (fn: (...args: any) => any) => {
  return function curried(...args: any) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...newArgs: any) => curried(...[...args, ...newArgs]);
    }
  };
};

// const curry = (fn: (...args: any) => any) => {
//   return function curried(...args: any) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...args2: any) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// };

const join = (a: any, b: any, c: any) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'

console.log(curriedJoin(1)(2, 3)); // '1_2_3'

console.log(curriedJoin(1, 2)(3)); // '1_2_3'
