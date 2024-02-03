import React from "react";
import { supabase } from "../utils/supabase";
import { useEffect } from "react";

function CompA() {
  useEffect(() => {
    // Join a room/topic. Can be anything except for 'realtime'.
    // const channelA = clientA.channel("slow_down");
    // const chat = clientA.channel("slow_down").on('postgres_changes', {
    //     event: 'INSERT', schema: 'public', table:'posts'
    // });
    const channelA = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "toi-slow-down",
        },
        (payload) => console.log(payload)
      )
      .subscribe();

    // Simple function to log any messages we receive
    // function messageReceived(payload) {
    //   console.log(payload);
    // }

    // Subscribe to the Channel
    // channelA
    //   .on("broadcast", { event: "test" }, (payload) => messageReceived(payload))
    //   .subscribe();

    return () => {
      supabase.removeChannel(channelA);
    };
  }, [supabase]);

  return <div>CompA</div>;
}

export default CompA;
