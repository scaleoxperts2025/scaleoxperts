"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Mohd Sameer",
    designation: "Co-Founder & Head of Operations",
    image:
      "/images/team/mohd.jpeg",
  },
  {
    id: 2,
    name: "Nousheen Fatima",
    designation: "Co-Founder & Advisory Partner",
    image:
      "/images/team/nousheen.jpeg",
  },
  {
    id: 3,
    name: "Gaurav Kumar",
    designation: "Senior Strategy Expert",
    image:"/images/team/gaurav.webp",
  },
];
 
export default function Tooltip() {
  return (
    <div className="flex flex-row mx-auto">
      <AnimatedTooltip items={people} />
    </div>
  );
}