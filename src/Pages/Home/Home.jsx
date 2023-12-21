import Footer from "../../Components/Footer";
import Navber from "../../Components/Navber";
import OurUser from "../../Components/OurUser";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Navber/>
            <Banner/>
            <OurUser/>
            <Footer/>
        </div>
    );
};

export default Home;