const compose =
  (...fns: ((arg: any) => any)[]) =>
  (x: any) => {
    return fns.reduceRight((acc, fn) => {
      return fn(acc);
    }, x);
  };

console.log(
  compose(
    (a) => a * 2,
    (a) => a * 3
  )(2)
); // 12
