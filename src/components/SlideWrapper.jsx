import React from "react";

const SlideWrapper = ({ children }) => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth relative z-10">
      {React.Children.map(children, (child, i) => (
        <section
          key={i}
          className="h-screen flex items-center justify-center snap-start px-6 bg-transparent"
        >
          {child}
        </section>
      ))}
    </div>
  );
};

export default SlideWrapper;
