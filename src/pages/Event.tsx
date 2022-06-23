import { useParams } from "react-router-dom";
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/Sidebar";
import { Video } from "../Components/Video";



export function Event() {
  const { slug: selectedSlug } = useParams<{slug:string}>();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {selectedSlug?(
          <Video />
        ):(
          <div className="flex-1"/>
        )}
        <Sidebar />
      </main>
    </div>
  )
} 