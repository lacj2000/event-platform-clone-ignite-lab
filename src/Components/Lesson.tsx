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
  const { slug: SelectedSlug } = useParams<{slug : string}>();
  
  const availableDataFormated = format(props.availableAt,"EEEE' • 'd' de 'LLLL' • 'kk'h'mm", {
    locale:ptBR,
  });
  const isLessonAvailable = isPast(props.availableAt);
  

  return (
    <>
      {isLessonAvailable?(
        <Link to={`/event/lesson/${props.slug}`} className="group" >
          
          <span className="text-gray-300">
            {availableDataFormated[0].toUpperCase()+availableDataFormated.slice(1)}
          </span>
          
          <div 
           className={props?.slug===SelectedSlug ? 
            "bg-green-300 rounded border border-green-300   p-4 gap-4 mt-2 "
            :
            "rounded border border-gray-600 p-4 gap-4 mt-2 group-hover:border-green-300 transition-colors"
           }
          >
            <header className="flex items-center justify-between">  
              {isLessonAvailable?(
                <span 
                 className={props?.slug===SelectedSlug ?
                  "text-sm text-white font-medium flex items-center gap-2"
                  :
                  "text-sm text-blue-500 font-medium flex items-center gap-2"
                 }
                >
                  <CheckCircle size={20} />
                  Conteúdo Liberado
                </span>
              ):(
                <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                  <LockKey size={20} />
                  Em breve
                </span>
              )}
                
              
              {props.type === 'live'? (
                <span 
                 className={props?.slug===SelectedSlug ?
                  "text-xs rounded py-[0.125rem] px-2  border border-white p-[1px] text-white"
                  :
                  "text-xs rounded py-[0.125rem] px-2  border border-green-300 p-[1px] text-white"
                 }
                >
                  AO VIVO
                </span>
              ) : (
                <span 
                 className={props?.slug===SelectedSlug ?
                  "text-xs rounded py-[0.125rem] px-2  border border-white p-[1px] text-white"
                  :
                  "text-xs rounded py-[0.125rem] px-2  border border-green-300 p-[1px] text-white"
                 }
                >
                AULA PRÁTICA
                </span>
              )}
            </header>
            
            <strong 
             className={props?.slug===SelectedSlug ? 
              "text-white mt-4 block":
              "text-gray-200 mt-4 block"
             }
            >
              {props.title}
            </strong>
          </div>
        </Link>
      ):(
        // blocked
        <Link 
         to={`/event/lesson/${props.slug}`} 
         className="group"  
         onClick={(e)=>e.preventDefault()}
        >
          
          <span className="text-gray-300">
            {availableDataFormated[0].toUpperCase()+availableDataFormated.slice(1)}
          </span>
          
          <div className="rounded border border-gray-600 p-4 gap-4 mt-2 ">
            <header className="flex items-center justify-between">  
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <LockKey size={20} />
                Em breve
              </span>
              
              {props.type === 'live'? (
                <span className="text-xs rounded py-[0.125rem] px-2  border border-green-300 p-[1px] text-white">
                  AO VIVO
                </span>
              ) : (
                  <span className="text-xs rounded py-[0.125rem] px-2  border border-green-300 p-[1px] text-white">
                  AULA PRÁTICA
                </span>
              )}
            </header>
            
            <strong className="text-gray-200 mt-4 block">
              {props.title}
            </strong>
          </div>
        </Link>
      )}
    </>
  )
} 