import React from "react";
import { supabase } from "../../utils/supabase";
import { useEffect } from "react";
import { useState } from "react";
import TextInput from "./components/TextInput";

function SlowDown() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    
    getMessages('toi-slow-down')
    
    return () => {
      
    }
  }, [])
  
  useEffect(() => {
    console.log(messages);
    const channelA = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "toi-slow-down",
        },
        (payload) => setMessages([...messages, payload.new])
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channelA);
    };
  }, [supabase, messages]);

  const getMessages = async (tableName) => {
    let { data, error} = await supabase
      .from(tableName)
      .select('*')
      if (error) {
        console.log(error)
      } else {
        setMessages(data)
      }
  }
  
  // console.log(messages)

  return <div className="h-[100dvh] bg-[#22092C] relative text-white">
    {/* <p>{lol.new.message}</p> */}
    { messages && <div>
      {
        messages.map((message) => <p>{message.message}</p>)
      }
    </div> }
    <TextInput/>
  </div>;
}

export default SlowDown;
