const a = 5;
const b = 6;
const c = 7;

const supergeron = (a, b, c) => {
  const p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
};

console.log(supergeron(a, b, c));