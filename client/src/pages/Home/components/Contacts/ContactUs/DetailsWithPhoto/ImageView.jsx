import React from 'react'

function ImageView({ Image }) {
  return (
    <div class="w-flex justify-center items-center">
      <img
        src={Image}
        alt="Profile Image"
        className="w-70% rounded-full border-4 border-primary-500"
      />
    </div>
  );
}

export default ImageView
