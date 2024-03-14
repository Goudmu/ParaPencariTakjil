"use client"
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";


const position = [-7.7744, 110.3851]
const datas = [
{loc : [-7.7633, 110.4079], name: "Masjid UPN", jam: "17:00 - Maghrib", maps:"https://maps.app.goo.gl/5hdvtU5uMmvM1hD48", menu:"Ayam goreng"},
{loc : [-7.7744, 110.3851], name: "Masjid Al Mujahidin", jam: "17:00 - Maghrib", maps:"https://maps.app.goo.gl/xKDaJmXjjF9HUcYR9", menu:"Mie goreng + telor"},
{loc : [-7.7735, 110.3803], name: "Masjid Kampus UGM", jam: "16:00 - Maghrib", maps:"https://maps.app.goo.gl/JuKkFmY961zZv8mG7", menu:"Seblak"},
]

const customIcons = new Icon ({
  iconUrl: "./placeholder.png",
  iconSize: [40,40]
})

const Maps = async () => {
    
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className=" h-96">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        datas.map(data => (
        <Marker position={data.loc} key={data.name} icon={customIcons} >
          <Popup>
            <h2> {data.name}</h2>
            <h5>Menu : {data.menu} pada waktu {data.jam} </h5>
            <a href={data.maps} target="_blank">GOOGLE MAPS</a>
          </Popup>
        </Marker>
        ))
      }
    </MapContainer>
  )
}

export default Maps