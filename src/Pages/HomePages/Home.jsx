import BestLibraries from "../../Components/BestLibraries/BestLibraries";
import HistoricalBooks from "../../Components/HistoricalBooks/HistoricalBooks";
import LatestBooks from "../../Components/LatestBooks/LatestBooks";
import PopularBooks from "../../Components/PopularBooks/PopularBooks";
import Sci_FiBooks from "../../Components/Sci_FiBooks/Sci_FiBooks";
import ThrillerBooks from "../../Components/ThrillerBooks/ThrillerBooks";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularBooks></PopularBooks>
            <ThrillerBooks></ThrillerBooks>
            <HistoricalBooks></HistoricalBooks>
            <Sci_FiBooks></Sci_FiBooks>
            <BestLibraries></BestLibraries>
            <LatestBooks></LatestBooks>
        </div>
    );
};

export default Home;