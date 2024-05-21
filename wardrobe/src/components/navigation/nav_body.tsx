import React from 'react';
import {ReactNode} from 'react';
import "./nav_body.css"

type NavProps = {
    children: ReactNode;
    id?: "string";
}


const NavBody: React.FC<NavProps> = ({children, id}) => {
    return (
        <div className={"NavBody"} id={id}>
            <div className={"NavContainer"}>
                {children}
            </div>
            <div className={'NavBorderBottom'}/>
        </div>
    )
}

export default NavBody;