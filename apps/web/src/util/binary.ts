export const binaryToRepeatArray = (binary: number) => {
  const repeat = Array(7).fill(false);
  for (let i = 6; i >= 0; i--) {
    repeat[i] = binary % 2 === 1;
    binary = Math.floor(binary / 2);
  }
  return repeat;
};

export const repeatArrayToBinary = (repeat: Array<boolean>) =>
  repeat.reduce((acc, cur, index) => (acc += cur ? Math.pow(2, 6 - index) : 0), 0);
