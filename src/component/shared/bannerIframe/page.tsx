import React from "react";

const Banneriframe = () => {
  return (
    <div>
      <iframe
        width="450"
        height="315"
        src="https://www.youtube.com/embed/NgrljB7UU34?si=SiWE4gPRlKkBJ2AV"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default Banneriframe;
