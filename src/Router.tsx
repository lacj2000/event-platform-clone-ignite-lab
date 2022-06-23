import { Route, Routes, Navigate } from "react-router-dom";
import { Event } from "./pages/Event";

export function Router(){
  return (
    <Routes>
      <Route path="/event/lesson/:slug" element={<Event />}/>
      <Route path="/event" element={<Event />}/>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route
        path="*"
        element={<Navigate to="/home" />}
      />
    </Routes>
  );
}