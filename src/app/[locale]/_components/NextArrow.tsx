import React, { CSSProperties } from "react";

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <button
      className={`slide-arrow next-arrow ${className || ""}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="feather-arrow-right" />
    </button>
  );
};

export default NextArrow;