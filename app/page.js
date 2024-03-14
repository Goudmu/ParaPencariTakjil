"use client"
import dynamic from "next/dynamic";

const DynamicMaps = dynamic(() => import('./maps/maps'), {
  ssr: false
})

export default function Home() {
  return (
    <div>
      <h2>SISTEM INFORMASI PERSEBARAN TAKJIL</h2>
      <div>
        <DynamicMaps />
      </div>
    </div>
  );
}