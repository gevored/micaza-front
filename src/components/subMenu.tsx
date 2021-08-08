import '../styled/subMenu.scss'

export function SubMenu(){

    function handleShowMenu(){
        console.log('entrou')
    }

    function handleHideMenu(){
        console.log('saiu')
    }

    return(
        <>
            <div className = 'container-uls'>
                <nav>
                    <div 
                        onMouseEnter = {handleShowMenu}
                        onMouseLeave = {handleHideMenu}
                    >
                        Decoraçao
                    </div>
                    <div>
                        Ilumincação
                    </div>
                    <div>
                        Casa Útil
                    </div>
                    <div>
                        Esculturas
                    </div>
                </nav>
            </div>
            <div className = 'ul-area'>

            </div>
        </>
    )
}