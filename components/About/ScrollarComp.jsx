import React from 'react';
import InfiniteScroll from "./scroller/index";

const ScrollarComp = () => (
  <div className="scroll-util flex flex-wrap items-start overflow-hidden">
    <div className='scroll-util'>
      .
    </div>
    <div className="infinite-scroll-container">
      <InfiniteScroll duration={25} direction={"up"}>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="img-card flex p-2">
            <img
              className="rounded-lg"
              src={`/assets/about-${index+1}.jpg`}
              width={30}
              height={30}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>

    <div className="infinite-scroll-container">
      <InfiniteScroll duration={29} direction={"up"}>
        {[...Array(15)].map((_, index) => (
          <div key={index} className="img-card flex p-2">
            <img
              className="rounded-lg"
              src="https://placehold.co/600x400"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>

    <div className="infinite-scroll-container">
      <InfiniteScroll duration={25} direction={"up"}>
        {[...Array(15)].map((_, index) => (
          <div key={index} className="img-card flex p-2">
            <img
              className="rounded-lg"
              src="https://placehold.co/600x400"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>

    
  </div>
);

export default ScrollarComp;
