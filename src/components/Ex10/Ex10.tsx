export default function Ex10() {
  const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];

  function myFindIndex(arr: number[], number: number, callback: (index: number) => void) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      if (number === arr[i]) {
        index = i;
        break;
      }
    }
    callback(index);
  }

  function callback(index: number) {
    console.log(index);
  }

  myFindIndex(numbers, 2, callback);
  myFindIndex(numbers, 10, callback);

  return (
    <div></div>
    );
}