import { MenuIcon } from "../assets/MenuIcon"
import { SearchIcon } from "../assets/SearchIcon"

function Header() {

    return (
        <div>
            <div className="flex flex-row items-center h-16 p-4 bg-[#DF1E26]">
                <img
                    className="mr-auto w-auto h-[45px]"
                    src="https://jc.uol.com.br/img/edicao.png"
                    alt=""
                />

                <img
                    className="ml-6 w-auto h-10"
                    src="https://blogdomagno.com.br/wp-content/uploads/2024/07/1_logo_jc-27530572.png"
                    alt=""
                />

                <nav className="ml-auto flex flex-row gap-4">
                    <a href="">
                        <MenuIcon width={25}></MenuIcon>
                    </a>
                    <a href="">
                        <SearchIcon width={25}></SearchIcon>
                    </a>
                </nav>
            </div>

            <ul className="group flex flex-row items-center justify-center min-w-screen h-auto text-sm bg-[#F1F0F0]">
                <a className="text-[#DF1E26] p-2 hover:bg-[#DF1E26] hover:text-white" href=""> Política </a>
                <a className="text-[#DF1E16] p-2 hover:bg-[#DF1E26] hover:text-white" href=""> Mundo </a>
                <a className="text-[#DF1E16] p-2 hover:bg-[#DF1E26] hover:text-white" href=""> Economia </a>
                <a className="text-[#DF1E16] p-2 hover:bg-[#DF1E26] hover:text-white" href=""> Ciência e Tecnologia </a>

                <li> <button className="text-[#DF1E26] text-right p-2 font-semibold hover:bg-[#DF1E26] hover:text-white"> Mais </button> </li>
            </ul>

        </div>
    )
}

export default Header