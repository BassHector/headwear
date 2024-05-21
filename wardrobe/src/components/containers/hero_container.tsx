import React from 'react'
import './hero_container.css'

type Props = {
    children?: React.ReactNode;
    text: string
}

const HeroContainer:React.FC<Props> = ({children, text}) => {
    return (
        <div className={"heroBanner"}>
            {children}
            <div className={"heroBannerText"}>{text}</div>
        </div>
    )
}

export default HeroContainer;