import { forwardRef, useId } from "react";

function Input({ label, ...prop }, ref) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 font-semibold text-lg text-black "
      >
        {label}
      </label>
      <input
        id={id}
        className="bg-gray-100 font-semibold border border-gray-300 text-black rounded-lg  w-full p-4 text-base  "
        ref={ref}
        {...prop}
      />
    </div>
  );
}

export default forwardRef(Input);
