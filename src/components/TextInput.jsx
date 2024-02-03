import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { supabase } from "../utils/supabase";

function TextInput({tableName}) {
  const [message, setMessage] = useState('')

  function handleChange(e){
    let newMessage = e.target.value
    setMessage(newMessage)
  }

  function uploadMessage(e) {
    e.preventDefault();
    if(message === '')return
    // Define the data you want to post
    const dataToPost = {
      message: message,
      // Add more columns and values as needed
    };

    // Post the data to the table
    async function postData() {
      const { data, error } = await supabase
        .from(tableName)
        .upsert([dataToPost]);

      if (error) {
        console.error("Error posting data:", error);
        return;
      }

      console.log("Data posted successfully:", data);
    }

    // Call the postData function to post your data
    postData();
    setMessage('')
  }

  return (
    <form
      action=""
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 w-[50%] grid gap-2 grid-cols-[1fr,auto] text-2xl "
      onSubmit={uploadMessage}
    >
      <input type="text" className="p-2 bg-[#872341] shadow-xl text-white" onChange={handleChange} value={message} />
      <button className="bg-[#872341] grid place-content-center text-white p-4">
        <IoMdSend size={32} />
      </button>
    </form>
  );
}

export default TextInput;
