export default function Ex04() {
    function displayNumbers(callback: (num: number) => void, delay: number) {
      let num = 1;
  
      function printNumber() {
        callback(num);
  
        setInterval(() => {
          callback(++num);
        }, delay);
      }
      printNumber();
    }
  
    function printCallBack(num: number) {
      console.log("Phần tử thứ:", num);
    }
  
    displayNumbers(printCallBack, 1000);
  
    return (
        <div></div>
    );
  }