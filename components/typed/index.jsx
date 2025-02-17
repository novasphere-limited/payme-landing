import React, { useEffect } from "react";
import Typed from "typed.js";

const Typer = () => {
  useEffect(() => {
    const options = {
      strings: ["PayyMe", "Sanwo mi", "Biya ni", "kwuo m ugwo"],
      typeSpeed: 400,
      backSpeed: 400,
      loop: true,
      cursorChar: "|",
    };

    const typed = new Typed(".element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="element text-5xl font-medium text-[#075134]"></span>;
};

export default Typer;
