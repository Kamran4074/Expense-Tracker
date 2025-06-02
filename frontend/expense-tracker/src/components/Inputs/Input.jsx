import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder, label, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="text-[13px] text-slate-900">{label}</label>

      <div className="input-box flex items-center border border-gray-300 px-2 py-1 rounded">
        <input
          type={type == 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={onChange}
        />

        {type === "password" && (
          showPassword ? (
            <FaRegEye
              size={22}
              className="text-primary cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FaRegEyeSlash
              size={22}
              className="text-slate-400 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Input;
