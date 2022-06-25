import { CheckCircle, LockKey } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import { useParams } from 'react-router-dom';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';


interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'; 
}

export function Lesson(props: LessonProps) {
  const { slug: selectedSlug } = useParams<{slug : string}>();
  
  const availableDataFormated = format(props.availableAt,"EEEE' • 'd' de 'LLLL' • 'kk'h'mm", {
    locale:ptBR,
  });
  const isLessonAvailable = isPast(props.availableAt);
  
  const isSelectedSlug = selectedSlug === props.slug;



  return (
    <Link 
     to={`${isLessonAvailable ? `/event/lesson/${props.slug}`:""}`} 
     className={`group`} 
    >
      <div className={`${isSelectedSlug ?"relative  right-[7.5px] top-[85px] rotate-45 h-[15px] w-[15px] bg-green-300": "bg-transparent " } transition-colors`} ></div>
      <span className="text-gray-300" >
        {availableDataFormated}
      </span>
      <div 
       className={`rounded border border-gray-300 mt-2 p-4 gap-4 m-0 w-full ${isLessonAvailable?"group-hover:border-green-300":"group-hover:border-gray-300"} ${
        isSelectedSlug? "border-green-300 bg-green-300  " 
        : ""} transition-colors`}
      >
        <header className='flex items-center justify-between '>
          <span 
          className={`text-sm flex font-medium gap-2 items-center ${isLessonAvailable? "text-blue-500":"text-orange-500"} ${isSelectedSlug&&"text-white"}`}
          >
            {isLessonAvailable?(
              <>
                <CheckCircle />
                {"Conteúdo Liberado"}
              </>
            ):(
              <>
                <LockKey size={24}/>
                {"Em breve"}
              </>
            )}
          </span>

          <span
          className={`text-xs uppercase font-bold text-white py-[0.125rem] px-2 border rounded ${isSelectedSlug? "border-white": "border-green-300"}`}
          >
            {props.type==="class"?
              "Aula prática"
            :
              "Ao vivo"
            }
          </span>
        </header>
        <strong className={`mt-4 text-gray-200 ${isSelectedSlug&&"text-white"} block`}>
          {props.title}
        </strong>
      </div>
    </Link>
  );
}