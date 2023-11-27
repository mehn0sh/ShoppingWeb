import React from "react";
import noteFound from "/004.png";
import { Link } from "react-router-dom";
import "./NoteFound.css";
const NoteFound = () => {
  return (
    <section className="py-28 lg:py-10 mb-[100px] ">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-center">
      <div className="flex-1 flex items-center justify-center">
          <img src={noteFound} className="max-w-[200px] lg:max-w-sm" alt="" />
        </div>
      <div className="flex-1 text-center lg:text-left px-10">
        <p className="text-xl mb-4 leading-relaxed">
          <span className="text-red-800 font-semibold">Oops 404,</span> we can't
          find what you looking for
        </p>
        <div className="block">
          <Link to={"/"}>
            <button className="mt-2 glow-on-hover">Back to Home</button>
          </Link>
        </div>
      </div>

      </div>
    </section>
  );
};

export default NoteFound;
