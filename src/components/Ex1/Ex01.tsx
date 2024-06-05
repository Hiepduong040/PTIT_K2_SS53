
export default function Ex01() {
  function calculate(a: number, b: number, callback: (result: number) => void) {
    let result: number;
    result = a + b;
    callback(result);
  }

  calculate(1, 2, (result) => {
    console.log("Kết quả của phép tính là:", result);
  });
  return (
    <div></div>
  )
}


