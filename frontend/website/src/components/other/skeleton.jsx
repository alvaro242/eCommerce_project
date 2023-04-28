import React from "react";

export default function LoadingSkeleton() {
  return (
    <div>
      <p className="placeholder-glow">
        <span className="placeholder col-12"></span>
      </p>

      <p className="placeholder-wave">
        <span className="placeholder col-12"></span>
      </p>
    </div>
  );
}
