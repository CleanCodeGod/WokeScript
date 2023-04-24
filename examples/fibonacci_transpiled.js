const woke_fibonacci = (woke_num) => {
  return Array(woke_num)
    .fill(0)
    .reduce((acc, curr, i) => {
      const woke_next = acc[i] + (i > 0 ? acc[i - 1] : 1);
      return [...acc, woke_next];
    }, [])
    .slice(0, woke_num);
};

console.log(woke_fibonacci(woke_sanitize(woke_num)));

