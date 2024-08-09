import { useEffect, useState } from "react";
import PopularBooksCard from "./PopularBooksCard";

const PopularBooks = () => {
    const [popularBooks, setPopularBooks] = useState([]);
    useEffect(()=> {
        fetch('/Popular.json')
        .then(res => res.json())
        .then(data => setPopularBooks(data))
    }, [])

    return (
        <div>
            <h3 className="text-4xl font-bold font-serif mt-14 my-6 text-left ml-5">Popular Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    popularBooks?.map(popular => <PopularBooksCard key={popular.id} popular={popular}></PopularBooksCard>)
                }
            </div>
        </div>
    );
};

export default PopularBooks;