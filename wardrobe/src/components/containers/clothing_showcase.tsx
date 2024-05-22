import React, {useState} from 'react'
import "./general_container_styles.css"


type Props = {
    children?: React.ReactNode;
    imageSrc: string[];
    brands: string[];
}

const ImageGallery:React.FC<Props> = ({children, imageSrc ,brands}) => {
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = React.useState<string | null>(null);

    const handleImagePreviewClick = (brand: string, src: string) => {
        setSelectedBrand(brand)
        setSelectedItem(src)
    }

    const closePreview = () => {
        setSelectedItem(null)
        setSelectedBrand(null)
    }

    return (
        <div className="gallery">
            {imageSrc.map((imageSrc, index:number) => (
                <div key={index} className={"gallery_item"} onClick={() => handleImagePreviewClick(imageSrc, brands[index])} >
                    <img className={"gallery_image"} src={imageSrc} alt={"Hat"} key={index}/>
                    <p className={"brandText"}><strong>Brand:</strong> {brands[index]}</p>
                </div>
            ))
            }

        {selectedItem && selectedBrand && (
            <div className={"preview_overlay"} onClick={closePreview}>
                <div className={"preview_content"}>
                    <img className={"preview_image"} src={selectedItem} alt={"BigHat"} />
                    <p className={"preview_text"}>{selectedBrand}</p>
                </div>
            </div>
        )}
        </div>
        )
}

export default ImageGallery