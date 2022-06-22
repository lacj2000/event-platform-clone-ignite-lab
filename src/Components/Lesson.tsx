import { CheckCircle, LockKey } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'; 
}

export function Lesson(props: LessonProps) {
  const availableDataFormated = format(props.availableAt,"EEEE' • 'd' de 'LLLL' • 'kk'h'mm", {
    locale:ptBR,
  });
  

  const isLessonAvailable = isPast(props.availableAt);
  
  return (
    <a href="#">
      
      <span className="text-gray-300">
        {availableDataFormated[0].toUpperCase()+availableDataFormated.slice(1)}
      </span>
      
      <div className="rounded border border-gray-600 p-4 gap-4 mt-2">
        <header className="flex items-center justify-between">  
          {isLessonAvailable?(
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
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
            <span className="text-xs rounded py-[0.125rem] px-2  border border-green-300 p-[1px] text-green-300">
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
    </a>
  )
} 