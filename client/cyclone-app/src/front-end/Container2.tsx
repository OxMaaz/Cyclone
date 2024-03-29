import Navbar from "./Navbar";
import Header from "./Header";
import Features from "./Features";
import Faq from "./Faq";
import Footer from "./Footer";
import Description from "./Description";


type Props = {};

const Container2 = (props: Props) => {

    
  return (
    <div className="bg-[#000000] ">
   
      <Navbar />
      <Header />
      <Description/>
      <Features />
      <Faq />
      <Footer />
    </div>
  );
};

export default Container2;