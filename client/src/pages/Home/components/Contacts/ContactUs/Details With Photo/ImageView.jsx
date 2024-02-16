import React from "react";

function ImageView({ Image }) {
  return (
    <div class="size-44 w-flex justify-center items-center m-5">
      <img
        src={Image}
        alt="Profile Image"
        className="w-50% rounded-full border-4 border-primary-50"
      />
    </div>
  );
}

export default ImageView;
