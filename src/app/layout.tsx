"use client"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmokeyCursor from "@/components/lightswind/smokey-cursor";
import React,{ useState, useRef } from "react";
import { MousePointerClick } from "lucide-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [cursorEnabled, setCursorEnabled] = useState(false);
  // Avoid using window during SSR
  const [dragPos, setDragPos] = useState({ x: 24, y: 200 }); // default y
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // Set dragPos to bottom left corner on client only
  React.useEffect(() => {
    setDragPos((pos) => ({ 
      x: 24, 
      y: window.innerHeight - 100 
    }));
  }, []);

  // Drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    dragOffset.current = {
      x: e.clientX - dragPos.x,
      y: e.clientY - dragPos.y,
    };
    document.body.style.userSelect = "none";
  };
  const onMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setDragPos({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    }
  };
  const onMouseUp = () => {
    setDragging(false);
    document.body.style.userSelect = "";
  };
  // Attach/remove listeners
  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
    // eslint-disable-next-line
  }, [dragging]);

  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        {/* Draggable floating toggle button for cursor animation */}
        <button
          onClick={() => setCursorEnabled((v) => !v)}
          onMouseDown={onMouseDown}
          style={{
            position: "fixed",
            left: dragPos.x,
            top: dragPos.y,
            zIndex: 50,
            cursor: dragging ? "grabbing" : "grab",
            transition: dragging ? "none" : "box-shadow 0.2s",
          }}
          className="bg-black/80 hover:bg-black text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all border border-white/10 backdrop-blur-lg"
        >
          <MousePointerClick size={28} />
        </button>
        {/* Show SmokeyCursor only if enabled */}
        {cursorEnabled && <SmokeyCursor />}
        {/* Navbar, main, footer */}
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <main>{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
