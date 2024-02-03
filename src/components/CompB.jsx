import React from "react";
import { clientA } from "../utils/supabase";
import { useState } from "react";
import { useEffect } from "react";

function CompB() {
  // Join a room/topic. Can be anything except for 'realtime'.
  const [count, setCount] = useState(0);
  const [realNumber, setRealNumber] = useState(null);

  useEffect(() => {
    const channelB = clientA.channel("room-1");

    channelB.subscribe((status) => {
      // Wait for successful connection
      if (status !== "SUBSCRIBED") {
        return null;
      }

      // Send a message once the client is subscribed
      channelB.send({
        type: "broadcast",
        event: "test",
        payload: { message: "hello, world", number: count },
      });
    });
  }, [count]);

  useEffect(() => {
    // Join a room/topic. Can be anything except for 'realtime'.
    const channelA = clientA.channel("room-1");

    // Simple function to log any messages we receive
    function messageReceived(payload) {
      setRealNumber(payload.payload.number);
      console.log(payload);
    }

    // Subscribe to the Channel
    channelA
      .on("broadcast", { event: "test" }, (payload) => messageReceived(payload))
      .subscribe();

    return () => {
      clientA.removeChannel(channelA);
    };
  }, [clientA, realNumber]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>add +1</button>
      <p>Real Time Number</p>
      <p>{realNumber}</p>
    </div>
  );
}

export default CompB;
