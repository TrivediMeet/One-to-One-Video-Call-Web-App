'use client'

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useRef } from "react";


export default function Home() {
  const roomId = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <div className={styles.main}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter Meeting Id"
        ref={roomId}
      />
      <button className={styles.button} 
      type="submit"
      onClick={()=>router.push(`/room/${roomId.current?.value}`)}  >
       
        Join to
      </button>
    </div>
  );
}
