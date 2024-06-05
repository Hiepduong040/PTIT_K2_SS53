export default function Ex08() {
  const numbers: number[] = [1, 2, 3, 4, 5];

  function myFind(numbers: number[], numberFind: number, callback: (element: number | null) => void) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === numberFind) {
        callback(numbers[i]);
        return;
      }
    }
    callback(null);
  }

  function callback(element: number | null) {
    if (element === null) {
      console.log("Không tìm thấy phần tử");
    } else {
      console.log(`Phần tử tìm thấy là: ${element}`);
    }
  }

  myFind(numbers, 2, callback);
  

  return (
    <div></div>
    );
}