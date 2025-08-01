import One from "./assets/one.jpg"
import Two from "./assets/two.jpg"
import Three from "./assets/three.jpg"
import Four from "./assets/four.jpg"
import Five from "./assets/five.jpg"
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { ReactTyped } from "react-typed";
import Pone from "./assets/p (1).jpg"
import Ptwo from "./assets/p (2).jpg"
import Pthree from "./assets/p (3).jpg"
import Pfour from "./assets/p (4).jpg"
import Pfive from "./assets/p (5).jpg"
import { useEffect, useState } from "react";
import axios from "axios";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[50%] right-8 z-[1] bg-[red] h-[40px] w-[40px] text-center leading-[40px] rounded-full text-[#fff] translate-y-[-50%] cursor-pointer hover:bg-[green]"

      onClick={onClick}
    >
      <MdNavigateNext className="inline-block" />
    </div>
  );
}


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[50%] left-8 z-[1] bg-[red] h-[40px] w-[40px] text-center leading-[40px] rounded-full text-[#fff] translate-y-[-50%] cursor-pointer hover:bg-[green]"
      onClick={onClick}
    >
      <GrFormPrevious className="inline-block" />
    </div>
  );
}



function App() {
  let [info, setInfo] = useState([])
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setInfo(response.data.products);

    })
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(info);



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  var pslide = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  }


  return (

    <>

      <Slider {...settings}>

        <div className="w-full h-[600px]">
          <img className="w-full h-full" src={Three} alt="" />
        </div>
        <div className="w-full h-[600px]">
          <img className="w-full h-full" src={Two} alt="" />
        </div>
        <div className="w-full h-[600px]">
          <img className="w-full h-full" src={One} alt="" />
        </div>

      </Slider>
      <div className="bg-[#000] text-[#0ef099] text-center py-75 text-[56px]">
        <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} backSpeed={50} loop={true} />
      </div>



      <Slider {...pslide}>


        {info.map((item) => (

          <div className="w-full h-[600px] py-10">
            <h1 className="flex justify-center items-center text-[#000] font-bold text-[40px]">{item.id}</h1>
            <h2 className="flex justify-center text-[26px]">{item.title}</h2>
            <img className="w-full" src={item.thumbnail} alt="" />
            <p className="flex justify-between text-center text-[12px] w-[350px] items-center">{item.description}</p>

          </div>
        ))}

      </Slider>
    </>
  )
}

export default App
