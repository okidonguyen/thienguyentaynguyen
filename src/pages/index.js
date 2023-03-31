import Slider from "@/components/Slider/Slider";
import Mission from "@/components/Mission/Mission";
import Wedo from "@/components/Wedo/Wedo";
import TrustBy from "@/components/TrustBy/TrustBy";
import Project from "@/components/Project/Project";
import People from "@/components/People/People";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Mission/>
            <Wedo/>
            <Project/>
            <People/>
            <TrustBy/>
        </div>
    );
};
export default Home;
