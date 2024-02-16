import React from "react";

function ImageText({ Image, name, lead, campus, email, number }) {
  return (
    <div class="w-full flex flex-row justify-center items-center">
      <div class="w- flex justify-center items-center">
        <img
          src={Image}
          alt="Your Image"
          className="w-70% rounded-full
          border-4 border-primary-500"
        />
      </div>
      <div>
        <div class="m-0 uppercase">{name}</div>
        <div class="text-left translate-x-[-6px]">
          <p>{lead}</p>
          <p>{campus}</p>
          <p>{email}</p>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageText;
