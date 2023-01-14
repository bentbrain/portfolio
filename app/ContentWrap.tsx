import React from "react";

function ContentWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className=" px-clamp w-[min(100%,1200px)] mx-auto mb-6">
      {children}
    </div>
  );
}

export default ContentWrap;
