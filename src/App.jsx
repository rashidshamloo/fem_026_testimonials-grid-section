import data from "./data/data.json";
import { useState } from "react";
import Testimonial from "./components/Testimonial";
import randomColor from "./utility/randomColor";

function App() {
  const [isRandomColor, setIsRandomColor] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <main className="flex flex-col items-center justify-center mt-4">
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => {
              setIsRandomColor(true);
              setCount(count + 1);
            }}
            className="bg-white border-[1px] border-white rounded-full w-14 h-14 text-2xl shadow-lg transition-all duration-500 group hover:bg-lightGrayishBlueButton hover:shadow-4xl hover:border-gray-500"
            aria-label="Random Color"
          >
            <i className="bi bi-dice-5 block transition-all duration-500 text-gray-400 group-hover:scale-125 group-hover:rotate-45 group-hover:text-gray-500"></i>
          </button>
          <p className="text-sm mt-2 text-gray-400 font-semibold">
            Random Color
          </p>
        </div>
        <div className="sm:grid sm:grid-areas-small sm:grid-rows-small sm:grid-cols-small md:grid-areas-medium md:grid-rows-medium md:grid-cols-medium lg:grid-areas-large lg:grid-rows-large lg:grid-cols-large sm:gap-4 mt-4 mx-6 sm:mx-4 lg:mx-0 md:max-w-[69.375rem]">
          {data.map((item, index) => {
            return (
              <Testimonial
                author={item.author}
                color={isRandomColor ? randomColor() : item.color}
                backgroundImage={item.backgroundImage ? true : false}
                testimonial={item.testimonial}
                forceUpdate={count}
                area={item.area}
                key={index}
              />
            );
          })}
        </div>
      </main>
      <footer className="my-4 text-gray-400 text-sm text-center">
        <p>Developed by Rashid Shamloo</p>
        <ul className="flex gap-2 justify-center">
          <li>
            <a
              href="https://github.com/rashidshamloo"
              title="GitHub"
              target="_blank"
              className="hover:text-gray-600 transition-all duration-300"
            >
              <i className="bi-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rashid-shamloo/"
              title="LinkedIn"
              target="_blank"
              className="hover:text-gray-600 transition-all duration-300"
            >
              <i className="bi-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/rashidshamloo"
              title="Twitter"
              target="_blank"
              className="hover:text-gray-600 transition-all duration-300"
            >
              <i className="bi-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
