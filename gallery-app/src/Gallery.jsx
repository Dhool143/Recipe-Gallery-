import { useState } from "react";

export const images = [
    { id: 1, url: "https://i0.wp.com/nutrient-matters.com/wp-content/uploads/2025/03/IMG_5274.jpg?resize=1161%2C2048&ssl=1", 
    
    description: 'Chicken shawarma sandwich ' },

    { id: 2, url: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=900&auto=format&fit=crop&q=60", 

    description:  ' Pasta with  meat' },

    { id: 3, url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38", 

    description:  'Hawaiian Chicken PizzaSmoked' },

    { id: 4, url: "https://viterecipe.com/wp-content/uploads/2024/11/download-8.jpg", 

    description:  'Dubai chocolate' },

    { id: 5, url: "https://happilyhomebaked.com/wp-content/uploads/2025/11/dubai-chocolate-pistachio-cake-1024x847.webp",

    description:  'Chocolate pistachio cake' },




];


function Gallery () {

    const [ currentIndex, setCurrentIndex] = useState(0);

    const handleNext  = () => {
        setCurrentIndex ((prev) => Math.min(prev + 1, images.length - 1)
    
    );

    };

    const handlePrev  = () => {
        setCurrentIndex ((prev) => Math.max(prev - 1, 0)

    );

     };  


    return (

    <div className="gallery">

        <h2>Recipe Gallery</h2>
        <img src={images[currentIndex].url}
        alt={images [currentIndex].description}
        className="gallery-image"
        
        />

        <p>{images[currentIndex].description}</p>
        <p>image {currentIndex + 1} of {images.length}</p>
        {currentIndex === 0 && <p> This is the first image</p>}
        {currentIndex === images.length - 1 && (<p>This is the last images</p>
    
    )}

    <button onClick={handlePrev} disabled={currentIndex === 0}>  
    Previous
    </button>


    <button onClick={handleNext} disabled={currentIndex === images.length - 1}>

   Next

    </button>
        




    </div>




    );


}

export default Gallery;