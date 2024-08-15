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
            <h3 className="lg:text-4xl text-2xl font-bold font-serif mt-14 my-6 lg:text-left text-center ml-5">Popular Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    popularBooks?.map(popular => <PopularBooksCard key={popular.id} popular={popular}></PopularBooksCard>)
                }
            </div>
        </div>
    );
};

export default PopularBooks;