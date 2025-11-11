
import { NewYork } from "../../fonts/newyork";


export default function ThankYou() {
  return (
    <div className="flex flex-col	 justify-center items-center h-[50vh] text-center  ">
      <h1
        className={`${NewYork.className} font-newYork text-[60px] lg:text-[125px] text-center leading-none`}
      >
        Thanks for scrolling
      </h1>

      {/* <p className="text-[10px]">made with stress</p> */}
    </div>
  );
}
