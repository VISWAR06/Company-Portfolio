// src/components/ShinyEffect.jsx
import React from "react";

const ShinyEffect = ({ children }) => {
  return (
    <div className="relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
      {children}
    </div>
  );
};

export default ShinyEffect;
