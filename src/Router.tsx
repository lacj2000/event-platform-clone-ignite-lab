import { Route, Routes, Navigate } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router(){
  return (
    <Routes>
      <Route path="/event/lesson/:slug" element={<Event />}/>
      <Route path="/event" element={<Event />}/>
      <Route path="/subscribe" element={<Subscribe />}/>
      <Route
        path="*"
        element={<Navigate to="/subscribe" />}
      />
    </Routes>
  );
}