import React from "react";

export const TextField = ({ label, type, placeholder, X, setX }) => {
  return (
    <div className="form-group mb-3">
      <label className="form-label text-white">{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={X}
        onChange={(e) => setX(e.target.value)}
      />
    </div>
  );
};
