import React from "react";
import { supabase } from "../../utils/supabase";
import { useEffect } from "react";
import { useState } from "react";
import TextInput from "../../components/TextInput";
import ChatBubble from "../../components/ChatBubbles";
import LatestBubble from "../../components/LatestBubble";
import useStore from "../../stores/useStore";



function Intention({intention = "slow-down"}) {

  
  const intentions = {
    "slow-down": {
      prompt: "Take a Deep Breath",
      table: "toi-slow-down",
    },
    "give-gratitude": {
      prompt: "What Are You Grateful For?",
      table: "toi-give-gratitude",
    },
    "take-responsibility": {
      prompt: "What are you taking responsibility for?",
      table: "toi-take-responsibility",
    },
  };

  const [messages, setMessages] = useState([]);
  const [latestMessages, setLatestMessages] = useState([]);
  const [positions, setPositions] = useState([]);
  console.log(intentions[intention]);
  console.log(intention);

  function getChatPosition() {
    let newPositions = [];
    for (let i = 0; i < messages?.length; i++) {
      if (!positions[i]) {
        newPositions[i] = {
          x_pos: Math.random() * window.innerWidth,
          y_pos: Math.random() * window.innerHeight,
        };
      } else {
        newPositions[i] = positions[i];
      }
    }
    setPositions(newPositions);
  }

  function getLatesMessage() {
    setLatestMessages(messages.slice(messages.length - 3, messages.length));
  }

  useEffect(() => {
    getMessages(intentions[intention]["table"]);
    return () => {};
  }, []);

  useEffect(() => {
    getChatPosition();
    getLatesMessage();
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
          table: intentions[intention]["table"],
        },
        (payload) => setMessages([...messages, payload.new])
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

  return (
    <div className="h-[100dvh] bg-[#22092ce4] relative text-white pri-font m-2 rounded-lg">
      <p className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl ">
        {intentions[intention]["prompt"]}
      </p>
      <section className="overflow-auto h-screen example">
        <div className="h-[5000px] grid gap-4">
          {messages && (
            <div className="absolute top-0 left-0 ">
              {latestMessages.map((message) => (
                <LatestBubble
                  textMessage={message.message}
                  delay={2}
                  id={message.id}
                />
              ))}
            </div>
          )}
          {messages && (
            <div>
              {messages.map((message, index) => (
                <ChatBubble
                  textMessage={message.message}
                  delay={2}
                  id={message.id}
                  x_pos={positions[index]?.x_pos}
                  y_pos={positions[index]?.y_pos}
                  isNew={index === messages.length - 1}
                />
                // <div key={index}>{message.message}</div>
              ))}
            </div>
          )}
        </div>
      </section>
      <TextInput tableName={intentions[intention]["table"]} />
    </div>
  );
}

export default Intention;
