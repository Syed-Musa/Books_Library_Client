import { useEffect, useState } from "react";
import ThrillerBooksCard from "./ThrillerBooksCard";

const ThrillerBooks = () => {
    const [thrillerBooks, setThrillerBooks] = useState([]);
    useEffect(()=> {
        fetch('/Thriller.json')
        .then(res => res.json())
        .then(data => setThrillerBooks(data))
    }, []);

    return (
        <div>
            <h2 className="lg:text-4xl text-2xl mb-10 font-bold font-serif mt-14 my-5 lg:text-right text-center mr-5">Thriller Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    thrillerBooks?.map(thriller => <ThrillerBooksCard key={thriller.id} thriller={thriller}></ThrillerBooksCard>)
                }
            </div>
        </div>
    );
};

export default ThrillerBooks;