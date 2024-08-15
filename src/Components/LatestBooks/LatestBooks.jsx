import { useEffect, useState } from "react";
import LatestBooksCard from "./LatestBooksCard";
import { Link } from "react-router-dom";

const LatestBooks = () => {
    const [famouse, setFamouse] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/famouse')
        .then(res => res.json())
        .then(data => setFamouse(data))
    })

    return (
        <div>
            <h2 className="lg:text-4xl text-2xl font-bold text-center font-serif mt-20 text-green-700 mb-10">Our Latest Famous Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    famouse?.map(famouse => <LatestBooksCard key={famouse.id} famouse={famouse}></LatestBooksCard>)
                }
            </div>
            <Link to='/allbooks'><button className="btn bg-green-500 text-white font-bold font-serif lg:ml-[550px] ml-[40%] mt-10 mb-5">More Books</button></Link>
        </div>
    );
};

export default LatestBooks;