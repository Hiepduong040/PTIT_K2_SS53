

export default function Ex02() {
  function delayedCallback(callback: (result: number) => void, delay: number) {
    setTimeout(() => {
      console.log("Hàm delay đã được gọi sau", delay, "ms");
      callback(0); 
    }, delay);
  }
  
  delayedCallback((result) => {
    console.log("Hàm delay đã được gọi sau 3s");
  }, 3000);
  return (
    <div></div>
  )
}
