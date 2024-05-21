import './clothes_type_container.css'
import React from 'react'

type ContainerProps= {
    text:string[];
    id?: string;
    style: React.CSSProperties[];
}

const ClothesTypeContainer:React.FC<ContainerProps> = ({text, style, id}) => {
    return (
        <div className="clothes_type_container" id={id}>
            {text.map((text, index:number) => (
                <div className={"wrapper"}>
                    <div className="clothesTypeContainerChild" key={index} style={style[index]}/>
                    <span className="clothesTypeContainerText">{text}</span>
                </div>
                )
            )}
        </div>
    )
}

export default ClothesTypeContainer;