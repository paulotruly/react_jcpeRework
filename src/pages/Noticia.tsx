import { ChatBubbleIcon } from "../assets/ChatBubbleIcon"
import { SaveIcon } from "../assets/SaveIcon"
import { ShareIcon } from "../assets/ShareIcon"

function Noticia() {

    return (
        <div>
            {/* BARRA DA CATEGORIA */}
            <div className="bg-white w-full h-10 relative flex flex-row items-center pl-3 p-1">
                <p className="before:content-['NOTÍCIA_'] before:text-red-500 font-semibold text-sm">| Categoria</p>
            </div>

            {/* DIV DA IMAGEM PRINCIPAL  */}
            <div className="h-[250px] w-full bg-green-400 overflow-hidden relative flex items-center justify-center">
                <img src="https://s2-techtudo.glbimg.com/SkyLTd6VJy8WiUMg5L6EeUwgyMw=/0x0:620x548/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/B/t/limPwzQmSeI4WJO7haZg/2012-08-15-mf1.jpg" alt=""
                     className="object-cover w-full h-full"/>
                {/* publicidade */}
                <div className="absolute bottom-4 bg-gray-200 w-2/3 h-8 flex justify-center items-center text-gray-400 text-sm"> publicidade </div>
            </div>

            <div className="w-full h-auto flex flex-col">
                {/* TÍTULO DA MATÉRIA */}
                <h3 className="text-xl font-bold mx-6 mt-4 mb-3 text-justify leading-tight">
                    Metroviários e CBTU chegam a acordo e greve do Metrô do Recife pode terminar nesta quarta (5)
                </h3>

                {/* INFORMAÇÕES E CRÉDITOS */}
                <div className="flex flex-row justify-between items-center gap-8 text-[12px] mx-6 text-gray-500">
                    <p>por nomeJornalista</p>
                    <p>30 min atrás</p>
                    <p>2 min de leitura</p>
                </div>

                <div className="text-left pl-2 mx-7 mt-4 text-sm border-l-2 border-red-500 font-light">
                    <p>
                        Acordo foi mediado pelo TRT-6 e será votado pelos metroviários em assembleia às 18h desta quarta. Assim, o metrô voltaria a operar às 5h da quinta (6)
                    </p>
                </div>

                <div className="mt-4 mx-6 flex flex-row justify-between items-center gap-2">
                    <div className="bg-[#F5F5F5] rounded-full flex justify-center items-center p-2">
                        <ChatBubbleIcon></ChatBubbleIcon>
                    </div>

                    <div className="bg-[#F5F5F5] rounded-full flex justify-center items-center p-2">
                        <ShareIcon></ShareIcon>
                    </div>

                    <div className="bg-[#F5F5F5] rounded-full flex justify-center items-center p-2">
                        <SaveIcon></SaveIcon>
                    </div>
                </div>
            </div>

            {/* CONTEÚDO */}
            <div className="relative mx-6 text-md mt-4 mb-6">

                <div className="float-right h-[200px] w-[150px] ml-4 mb-5 bg-gray-200 text-gray-400 flex justify-center items-center">
                    publicidade
                </div>

                <p className="text-left">
                Após dois dias de paralisação, a greve do Metrô do Recife pode chegar ao fim nesta quarta-feira (5/11), terceiro dia do movimento. Metroviários e a Companhia Brasileira de Trens Urbanos (CBTU) chegaram a um acordo mediados pelo Tribunal Regional do Trabalho da 6ª Região (TRT-6) durante reunião de conciliação na tarde desta terça (4), mas o entendimento precisa ser validado pela categoria em assembleia prevista para acontecer às 18h desta quarta.

                Quem esteve à frente da negociação foi o desembargador Eduardo Pugliesi, vice-presidente do TRT-6, que tem a função de coordenar ações de conciliação no Tribunal. O desembargador propôs que a CBTU analise, no prazo de 30 dias, o plano emergencial de recuperação do metrô, já produzido pelo Sindicato dos Metroviários. Em seguida, que alguma contraproposta seja levada ao Tribunal.

                Esse plano de recuperação emergencial - que já existe na CBTU, vale destacar - será apresentado à governadora de Pernambuco, Raquel Lyra, que prometeu ser parte da solução da crise financeira do sistema metroferroviário e vem cobrando do governo federal a antecipação de recursos - R$ 1 bilhão - para o metrô, independentemente de ele vir a ser ou não concedido à iniciativa privada.
                </p>
            </div>
            
        </div>
    )
}

export default Noticia
