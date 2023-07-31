import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Gallery from  "../Gallery/Gallery"
import Slider from "../Slider/Slider";
import Membership from "../Membership/Membership";
import ContactUs from "../ContactUs/ContactUs";
import useTitle from "../../../hook/useTittle";

const Home = () => {
    //setTittle
    useTitle('Home')
  return (
    <div>
      <Slider></Slider>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      {/* <h1>toy is coming .... a</h1> */}
      <ContactUs> </ContactUs>
      <Membership></Membership>
    </div>
  );
};

export default Home;
