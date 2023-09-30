import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

const InputField = ({ setJoke }) => {
  const [inputValue, setInputValue] = useState("");
  const url = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${
    import.meta.env.VITE_BARD_API_KEY
  }`;
  const headers = {
    "Content-Type": "application/json",
  };

  const payload = {
    prompt: {
      text: `Tell me a joke of ${inputValue}`,
    },
  };

  const data = JSON.stringify(payload);

  const getJoke = useMutation({
    mutationFn: async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: data,
      });
      const responseData = await response.json();
      return responseData;
    },
    onSuccess: (data) => {
      setJoke(data?.candidates[0].output);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
        return toast.error("Please type a subject of your joke.",{position: 'bottom-right',})
    }
    getJoke.mutate();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mt-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 p-2 bg-white border border-[#F47959] rounded-l-md outline-[#F47959]"
            placeholder="Subject of your joke"
          />
          <button
            type="submit"
            className={`${
              getJoke.isLoading
                ? "bg-white border-[#F47959] text-[#F47959] cursor-not-allowed"
                : "bg-[#F47959] border border-[#F47959] text-white cursor-pointer"
            } p-2 rounded-r-md`}
          >
            {getJoke.isLoading ? (
              <div>
                <div className="w-5 h-5 border-4 border-[#F47959] border-dashed rounded-full animate-spin"></div>
              </div>
            ) : (
              " ➡️"
            )}
          </button>
        </div>
      </form>
      <Toaster />
    </>
  );
};

export default InputField;
