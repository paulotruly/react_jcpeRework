import { MenuIcon } from "../assets/MenuIcon"
import { SearchIcon } from "../assets/SearchIcon"

function Header() {

    return (
        <>
            <div className="flex flex-col">

                <div className="flex flex-row justify-center items-center h-14 bg-black">
                    <img
                    className="w-auto h-5"
                    src="https://vitorbotega.com.br/wp-content/uploads/2022/12/negativo.png"
                    alt=""
                    />
                </div>
                
                <div className="flex flex-row items-center h-16 p-4 bg-[#F3F2F2]">

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
            </div>
        </>
    )
}

export default Header