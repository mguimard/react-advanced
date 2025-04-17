export const add = (a: number, b: number) => {
  console.log("hello from worker", self);
  return a + b;
};
