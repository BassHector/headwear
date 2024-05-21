import React, {ReactNode} from 'react'
import './nav_body.css'

type Props= {
    children?:ReactNode;
    text: string[];

}

const NavSelector:React.FC<Props> = ({children, text}) => {
    return (
        <div className={"selector"}>
            {text.map((text, index) => (
            <a key={index} className={"menuButton"}>{text}</a>
        ))}
        </div>
    )
}

export default NavSelector