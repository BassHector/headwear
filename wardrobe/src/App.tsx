import React from 'react';
import {NavBody, NavSelector} from "./components/navigation";
import {HeroContainer, ClothesTypeContainer, ImageGallery} from "./components/containers";
import flowerHatImage from "./images/hatFlower.png"
import shirtPlaceHolder from "./images/shirtPlaceHolder.png"
import shoesPlaceHolder from "./images/shoesPlaceHolder.jpg"
import {hatsImages, brandsStringArray} from "./images/index";
import './App.css';

function App() {
    const hatsAppImages:string[] = hatsImages();
    const brandsAppString:string[] = brandsStringArray();

    const clothesSelectorImages:React.CSSProperties[] = [
        {backgroundImage: `url(${flowerHatImage})`},
        {backgroundImage: `url(${shirtPlaceHolder})`},
        {backgroundImage: `url(${shoesPlaceHolder})`}
    ]


  return (
    <div className="App">
      <NavBody>
        <a className={"LogoSmall"} href="/"></a>
          <NavSelector text={["Hats", "Shirts", "Shoes"]}/>
      </NavBody>
        <div className={'mainContainer'}>
            <HeroContainer text={"Find Your Design"}/>
        </div>
        <ClothesTypeContainer text={["Hats", "Shirts", "Shoes"]} style={clothesSelectorImages}/>
        <div className={'divider_black'}/>
        <div className={'GalleryContainer'}>
        <ImageGallery imageSrc={hatsAppImages} brands={brandsAppString}/>
        </div>
    </div>
  );
}

export default App;
