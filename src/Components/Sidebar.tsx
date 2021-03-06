import { useParams, Navigate } from "react-router-dom";
import { useGetLessonsQuery } from "../graphql/schemas";
import { Lesson } from "./Lesson";


export function Sidebar() {
  const { data } = useGetLessonsQuery();
  const { slug: selectedSlug } = useParams<{slug : string}>(); 

  if (!selectedSlug && !!data){
    console.log(`redirecting to /event/lesson/${data.lessons[0].slug}` )
    return (
      <Navigate to={`/event/lesson/${data.lessons[0].slug}`} />
    );
  }

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Conograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson=>{
          return(
            <Lesson 
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
        
      </div>
    </aside>
  )
} 