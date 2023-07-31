import slider1 from "../../../assets/Home/Slider/1.jpg"
import slider2 from "../../../assets/Home/Slider/2.jpg"
import slider3 from "../../../assets/Home/Slider/3.jpg"
import slider4 from "../../../assets/Home/Slider/4.jpg"
const Slider = () => {
  return (
    <div className="px-10 md:px-0 mt-10 md:mt-16">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full h-full md:h-96">
          <img
            src={slider1}
            className="w-5/6 mx-auto"
          />
        </div>
        <div id="item2" className="carousel-item w-full mx-auto h-full md:h-96">
          <img
           src={slider2}
            className="w-5/6 mx-auto"
          />
        </div>
        <div id="item3" className="carousel-item w-full  h-full md:h-96">
          <img
            src={slider3}
            className="w-5/6 mx-auto"
          />
        </div>
        <div id="item4" className="carousel-item w-full  h-full md:h-96">
          <img
            src={slider4}
            className="w-5/6 mx-auto"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Slider;
