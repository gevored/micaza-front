import '../styled/menu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faYoutube, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { BsChatSquare  } from "react-icons/bs";
import { AiOutlineUser , AiOutlineShoppingCart} from "react-icons/ai";
import { SubMenu } from './subMenu';
import {useState} from 'react'


import logoMicaza from '../assets/images/logo-micaza.jpg'


export function Menu(){

    const [ valueSearch, setValuerSearch] = useState('')
    return (
        <div className = "containerMenu">
            <div className="title-menu">
                <div className="item-icons">
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className="item-title">
                    Tudo sem taxa de importação em 6x sem juros ou 10% de desconto  
                </div>  
                <div></div>   
            </div>     

            <nav className="menu-busca">
                <div className="img-logo">
                    <img src={logoMicaza} alt="Micaza" />
                </div>
                <div className="busca">
                    <input 
                        type="text"  
                        placeholder = "O que voce está buscando?"
                        onChange = {e => setValuerSearch(e.target.value)}    
                        value = {valueSearch}
                    />
                </div>
                <div className="sub-menu">
                    <div className="sub-menu-item">
                        <BsChatSquare size = "40px"/>
                        <span>Atendimento</span>    
                    </div>
                    <div className="sub-menu-item">
                        <AiOutlineUser size = "40px"/>
                        <span>Minha Conta</span>    
                    </div>
                    <div className="sub-menu-item">
                        <AiOutlineShoppingCart size = "40px"/>
                        <span>Meu Carrinho</span>    
                    </div>
                    
                </div>
            </nav>  

            <SubMenu/>  
        </div>
    )
}