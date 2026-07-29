import React, { CSSProperties } from "react";

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <button
      className={`slide-arrow prev-arrow ${className || ""}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="feather-arrow-left" />
    </button>
  );
};

export default PrevArrow;