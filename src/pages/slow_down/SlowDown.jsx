import React from "react";
import { supabase } from "../../utils/supabase";
import { useEffect } from "react";
import { useState } from "react";

function SlowDown() {
  const [lol, setLol] = useState([])
  useEffect(() => {
    const channelA = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "toi-slow-down",
        },
        (payload) => setLol(payload)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channelA);
    };
  }, [supabase]);
  console.log(lol);
  return <div>Slow Down</div>;
}

export default SlowDown;
