export default function Ex03() {
  function processArray(arr: number[], callback: (element: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        callback(arr[i]);
      }, (i + 1) * 1000);
    }
  }

  function printIndex(element: number) {
    console.log("Phần tử thứ:", element);
  }

  processArray([1, 2, 3, 4, 5], printIndex);

  return (
    <div></div>
  )
}
