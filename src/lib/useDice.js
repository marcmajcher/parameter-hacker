export default function useDice(n) {
  if (n>0) {
    return () => Math.ceil(Math.random() * n);
  }
  return (num) => Math.ceil(Math.random() * num);
}
