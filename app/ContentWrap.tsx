import React from "react";

type Props = {
  children: React.ReactNode;
  width?: string;
};

function ContentWrap({ children, width = "1200px" }: Props) {
  return (
    <div
      style={{
        width: `min(${width}, 100%)`,
      }}
      className={` px-clamp mx-auto mb-6`}
    >
      {children}
    </div>
  );
}

export default ContentWrap;
