import { useEffect, useState } from "react";
import LatestBooksCard from "./LatestBooksCard";

const LatestBooks = () => {
    const [famouse, setFamouse] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/famouse')
        .then(res => res.json())
        .then(data => setFamouse(data))
    })

    return (
        <div>
            <h2 className="text-4xl font-bold text-center font-serif mt-20 text-green-700 mb-10">Our Latest Famous Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    famouse?.map(famouse => <LatestBooksCard key={famouse.id} famouse={famouse}></LatestBooksCard>)
                }
            </div>
        </div>
    );
};

export default LatestBooks;