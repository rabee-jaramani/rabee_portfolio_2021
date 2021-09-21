import React from "react";
import Image from "./Image";
import { images_list } from "./images_data";
const MemoryTest = () => {
  return (
    <div className="memory-test-cont">
      <h1 className="title">Memory test</h1>
      <div className="difficulty-form">
        <label for="difficulty">Choose difficulty:</label>
        <select name="difficulty" id="difficulty">
          <option value="easy">Easy</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="timer">0</div>
      <div className="start-btn">Start</div>
      <div className="images-grid">
        {images_list.map((e) => {
          return (
            <Image
              id={e.id}
              key={e.id}
              name={e.name}
              src={e.src}
              className={e.className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MemoryTest;
