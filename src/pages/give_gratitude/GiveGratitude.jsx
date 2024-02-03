import React from "react";
import { supabase } from "../../utils/supabase";
import { useEffect } from "react";
import { useState } from "react";
import TextInput from "../../components/TextInput";
import ChatBubble from "../../components/ChatBubbles";

function GiveGratitude() {
  const [messages, setMessages] = useState([]);
  const [positions, setPositions] = useState([]);

  function getChatPosition() {
    let newPositions = [];
    for (let i = 0; i < messages?.length; i++) {
      if (!positions[i]) {
        newPositions[i] = {
          x_pos: Math.random() * window.innerWidth,
          y_pos: Math.random() * window.innerHeight,
        };
      }else{
        newPositions[i] = positions[i]
      }
    }
    console.log(newPositions);
    setPositions(newPositions);
  }

  useEffect(() => {
    getMessages("toi-give-gratitude");
    return () => {};
  }, []);

  useEffect(() => {
    getChatPosition();
    return () => {};
  }, [messages]);

  useEffect(() => {
    const channelA = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "toi-give-gratitude",
        },
        (payload) => setMessages([ ...messages, payload.new])
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channelA);
    };
  }, [supabase, messages]);

  const getMessages = async (tableName) => {
    let { data, error } = await supabase.from(tableName).select("*");
    if (error) {
      console.log(error);
    } else {
      setMessages(data);
    }
  };

  console.log(positions);

  return (
    <div className="h-[100dvh] bg-[#22092C] relative text-white pri-font">
      <p className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl ">
        What Are You Grateful For?
      </p>
        <section className="overflow-auto h-screen">
        <div className="h-[5000px]">
        {messages && (
        <div>
          {messages.map((message, index) => (
            <ChatBubble
              textMessage={message.message}
              delay={2}
              id={message.id}
              x_pos={positions[index]?.x_pos}
              y_pos={positions[index]?.y_pos}
            />
            // <div key={index}>{message.message}</div>
          ))}
        </div>
      )}
        </div>
        </section>
      <TextInput tableName={"toi-give-gratitude"} />
    </div>
  );
}

export default GiveGratitude;
