import React from "react";
import { supabase } from "../../utils/supabase";
import { useEffect } from "react";
import { useState } from "react";
import TextInput from "../../components/TextInput";

function SlowDown() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    
    getMessages('toi-slow-down')
    
    return () => {
      
    }
  }, [])
  
  useEffect(() => {
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

  return <div className="h-[100dvh] bg-[#22092C] relative text-white pri-font">
     <p className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl flex flex-col items-center gap-2">
      <span>Time To Reflect</span>
      <span className="text-2xl">Take Your Time</span>
      </p>
    { messages && <div>
      {
        messages.map((message) => <p>{message.message}</p>)
      }
    </div> }
    <TextInput tableName={"toi-slow-down"}/>
  </div>;
}

export default SlowDown;
