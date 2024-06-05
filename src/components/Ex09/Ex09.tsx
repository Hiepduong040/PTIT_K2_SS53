export default function Ex09() {
  const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];

  function myFilter(arr: number[], number: number, callback: (filteredArr: number[]) => void) {
    const filteredArr: number[] = arr.filter((item) => item === number);
    callback(filteredArr);
  }

  function callback(filteredArr: number[]) {
    if (filteredArr.length === 0) {
      console.log([]);
    } else {
      console.log(filteredArr);
    }
  }

  myFilter(numbers, 2, callback);

  return (
    <div></div>
);
}