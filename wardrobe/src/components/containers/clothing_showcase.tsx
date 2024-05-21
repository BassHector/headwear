import React from 'react'
import "./general_container_styles.css"

type Props = {
    children?: React.ReactNode;
    imageSrc: string[];
    brands: string[];
}

const ImageGallery:React.FC<Props> = ({children, imageSrc ,brands}) => {
    return (
        <div className="gallery">
            {imageSrc.map((imageSrc, index:number) => (
                <img className={"gallery_image"} src={imageSrc[index]} alt={"image goes here"} key={index} />
            ))
            }
            {brands.map((brand, index:number) => (
                <p className={"brands_font"}>{brand[index]}</p>
            ))}
        </div>
        )
}

export default ImageGallery