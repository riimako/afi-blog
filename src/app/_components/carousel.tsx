"use client";

import { Carousel } from "flowbite-react";

export function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          src="/assets/img/gracies-festa.jpg"
          alt="..."
          style={{ width: "60%" }}
        />
        <img src="/assets/img/festa1.jpg" alt="..." />
        <img src="/assets/img/festa2.jpg" alt="..." />
        <img src="/assets/img/festa3.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
