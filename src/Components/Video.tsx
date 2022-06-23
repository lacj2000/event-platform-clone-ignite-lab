import { DefaultUi, Player, Youtube } from "@vime/react";
import { ArrowRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";

// Default theme. ~960B
import '@vime/core/themes/default.css';



export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center ">
        {/*  video player */}
        <div className="h-full w-full max-w-[1100px] max-h-[68vh] aspect-video">
          <Player >
            <Youtube videoId="Ox_zb2cs9zM" />
            <DefaultUi />
          </Player>
        </div>
      </div>
      
      {/* video data */}
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            {/*  title */}
            <h1 className="text-2xl font-bold">
              Abertura do Evento Fictício
            </h1>
            {/*  describes */}
            <p className="mt-4 text-gray-200 leading-relaxed">
              Essa é a aula 02 de um evento fictício
            </p>

            {/* profile */}
            <div className="flex items-center gap-4 mt-6">
              <img 
               className="h-16 w-16 rounded-full border-2 border-blue-500"
               src="https://github.com/lacj2000.png" 
               alt="" 
              />

              <div className="leading-relaxed">
                <strong
                 className="font-bold text-2xl block"
                 > 
                  Luiz Junior
                </strong>
                <span
                 className="text-gray-200 text-sm block"
                >
                  Web Developer e Student
                </span>
              </div>
            </div>
          </div>
       
          {/*  buttons */}
          <div className="flex flex-col gap-4">
            <a 
             href="#" 
             className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24}/>
              Comunidade do Discord
            </a>
            <a 
             href="#" 
             className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24}/>
              Acesse o desafio
            </a>
          </div>
        </div>

        {/* cards */}
        <div className="gap-8 mt-20 grid grid-cols-2">
          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6">
              <strong className="text-2xl">Material Complementar</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <ArrowRight size={24} />
            </div>
          </a>

          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6">
              <strong className="text-2xl">Wallpappers Exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <ArrowRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
};