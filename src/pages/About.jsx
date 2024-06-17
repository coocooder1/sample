import React from 'react'
import './About.css';
import AboutChef1 from '../utils/img/aboutchef1.jpg'
import AboutChef2 from '../utils/img/aboutchef2.jpg'
import AboutChef3 from '../utils/img/aboutchef3.jpg'
import { ImageGallery } from '../components/ImageGallery';
function About() {
  return (
    <div className='about-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>About</h1>
        </div>
      </header>
      <div className='container my-5'>
        <p>中式餐廳的歷史可以追溯到遠古時代，但現代中式餐廳的發展主要可以分為兩個時期：一是中國移民帶來的中國傳統菜餚和烹飪技術，二是在外國菜餐廳中的中國菜館的興起。

        早期移民時期：**中式餐廳的興起與華裔移民有著密切關係。19世紀後期至20世紀初，大量的中國移民來到美國、歐洲和其他地區，他們將自己的烹飪技術和飲食文化帶到了新的家園。這些早期的中式餐廳主要是為了滿足當地的中國移民，提供他們熟悉的家鄉菜肴。

        中國菜在西方的普及：**隨著時間的推移，西方人對中國菜的興趣逐漸增加，這也促成了更多的中式餐廳的出現。20世紀中葉以後，中國菜在西方國家變得越來越受歡迎，中式餐廳開始在世界各地如雨後春筍般湧現。這些餐廳通常將中國菜進行了一定程度的調整，以適應當地人的口味，同時也保留了一些傳統的菜式和烹飪技術。

        中式快餐的崛起：**近年來，隨著生活節奏的加快，人們對於快捷方便的餐飲服務的需求也在增加。因此，中式快餐店也開始在各大城市中出現，提供快速而美味的中式飲食選擇。

        </p>
        <div className='col-lg-6'>
          <img src={AboutChef1} className='img-fluid my-4' alt=""/>
        </div>
        <div className='col-lg-6'>
          <img src={AboutChef2} className='img-fluid my-4' alt=""/>
        </div>
        <div className='col-lg-6'>
          <img src={AboutChef3} className='img-fluid my-4' alt=""/>
        </div>
        <p>
          老乾媽是一個知名的中國調味品品牌，以其獨特的辣椒醬而聞名。以下是老乾媽醬汁的歷史：

        **創始人背景：**老乾媽的創始人陳太太（陳秀珍）是湖南人，生於1955年。她在湖南的小鎮開始製作辣椒醬，並將其銷售給當地居民。

        **傳統製作方法：**老乾媽醬汁的製作使用當地的傳統方法，包括將新鮮的辣椒、花生、豆瓣醬等食材混合，再經過特殊的發酵和熬煮過程，製成具有濃郁風味的醬汁。

        **發展與成功：**在陳太太的努力下，老乾媽的辣椒醬漸漸受到了更廣泛的認可和喜愛。它的口味獨特，風靡了中國各地，並逐漸擴展到海外市場。老乾媽的成功也得益於口口相傳的效應，許多人因為親友的介紹而開始品嘗這種美味的醬汁。

        **產品線擴展：**隨著品牌的成長，老乾媽也開始推出更多不同口味和種類的調味品，包括豆瓣醬、蒜蓉辣椒醬等，滿足不同消費者的需求。

        **品牌影響力：**老乾媽已經成為了中國甚至全球知名的調味品品牌之一，其獨特的風味和故事也使其在消費者心中有著特殊的地位。

        總的來說，老乾媽醬汁的成功得益於其獨特的口味和傳統的製作工藝，以及創始人陳太太的努力和堅持。它不僅是一種美食，更是一種文化符號，代表著中國農村的美食傳統和創業精神。
        </p>

      </div>
      <div className='bg-dark text-light'>
        <ImageGallery/>

      </div>
      
    </div>
  )
}

export default About