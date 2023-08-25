import React, { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 20px" }}>
      {children}
    </div>
  );
};

export { Container };
