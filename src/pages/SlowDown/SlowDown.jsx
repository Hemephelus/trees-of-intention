import React from "react";
import { supabase } from "../../utils/supabase";
import { useEffect } from "react";

function SlowDown() {
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
        (payload) => console.log(payload)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channelA);
    };
  }, [supabase]);

  return <div>Slow Down</div>;
}

export default SlowDown;
