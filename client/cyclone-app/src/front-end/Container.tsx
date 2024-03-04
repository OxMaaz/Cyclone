import Navbar from "./Navbar";
import Header from "./Header";
import Features from "./Features";
import Faq from "./Faq";
import Footer from "./Footer";


type Props = {};

const Container = (props: Props) => {

    
  return (
    <div className="bg-[#e9e9f3] ">
   
      <Navbar />
      <Header />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
};

export default Container;