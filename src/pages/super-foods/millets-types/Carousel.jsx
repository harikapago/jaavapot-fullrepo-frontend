import React from 'react'
import img1 from '../../../assets/img/menu/menu-item-4.png'
import img2 from '../../../assets/img/menu/menu-item-5.png'
import img3 from '../../../assets/img/menu/menu-item-6.png'
function Carousel() {
//     const img1 = "https://rachelcooksthai.com/wp-content/uploads/2013/12/jok-91-1.jpg";
//    const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrR9oMMHaLa2XgqiL-UHn7PI5QSbrOLCQiA&usqp=CAU";
//    const img3 = "https://cdn.cdnparenting.com/articles/2020/02/05112114/Millet-Moongdal-Soup-Recipe-1024x700.webp";

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        height:'30rem',
        opecity:'0.9'
      };
    
  return (

<div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{brigtness:'50%',objectFit:"contain !importent"}}>

<div className="carousel-inner " id='carousel'>
    
    <div className="carousel-item active" >
        <img src={img1} className="d-block w-100  " style={imageStyle} alt="..." />
    </div>
    <div className="carousel-item">
        <img src={img2} className="d-block w-100 " style={imageStyle} alt="..." />
    </div>
    <div className="carousel-item">
        <img src={img3} className="d-block w-100 " style={imageStyle} alt="..." />
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
</div>

  )
}

export default Carousel
