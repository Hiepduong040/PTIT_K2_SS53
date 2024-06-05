export default function Ex07() {
  const numbers: number[] = [1, 2, 3, 4, 5];

  function myForEach(numbers: number[], callback: (index: number, item: number, arr: number[]) => void) {
    for (let i = 0; i < numbers.length; i++) {
      callback(i, numbers[i], numbers);
    }
  }

  function callback(index: number, item: number, arr: number[]) {
    console.log(`vị trí: ${index} | phần tử: ${item} | Mảng: [${arr}]`);
  }

  myForEach(numbers, callback);

  return (
    <div></div>
    );
}