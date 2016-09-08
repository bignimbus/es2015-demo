export const closest = (arr, num) => {
  let [head, ...tail] = arr;
  if (arr.length < 2) return head;
  let closestTail = closest(tail, num);
  return Math.abs(num - head) < Math.abs(num - closestTail) ?
    head :
    closestTail
};

