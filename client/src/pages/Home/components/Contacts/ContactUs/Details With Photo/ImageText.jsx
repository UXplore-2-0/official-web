import React from "react";

function ImageText({ name, lead, campus, email, number }) {
  return (
    <div>
      <div
        class="m-2 text-lg font-bold"      >
        {name}
      </div>
      <div class="text-left translate-x-[-6px]">
        <p>{lead}</p>
        <p>{campus}</p>
        <p>{email}</p>
        <p>{number}</p>
      </div>
    </div>
  );
}

export default ImageText;
