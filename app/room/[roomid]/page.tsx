"use client";

import { useParams } from "next/navigation";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useRef, useEffect } from "react";

const Page = () => {
  const { roomid } = useParams();
  const containerRef = useRef<HTMLInputElement>(null);
  const myMeeting = async (element: HTMLDivElement) => {
    const appID = 902657710;
    const serverSecret = "cdf8e5034b743ea9c041c16e1de30921";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid?.toString() || "",
      Date.now().toString(),
      "Root"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomid,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  useEffect(() => {
    if (!containerRef.current) {
      console.log("Container not found");
      return;
    }

    myMeeting(containerRef.current);
  }, [roomid]);
  return <div style={{ height: "100vh", width: "100vw" }} ref={containerRef} />;
};

export default Page;
