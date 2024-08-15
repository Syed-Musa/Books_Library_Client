import { useEffect, useState } from "react";
import AllBooksPerCard from "./AllBooksPerCard";

const AllBooks = () => {
    const [allbooks, setAllBooks] = useState([]);
    useEffect(()=> {
        fetch('https://books-library-server-smoky.vercel.app/allbooks')
        .then(res => res.json())
        .then(data => setAllBooks(data))
    }, [])

    return (
        <div>
            <h2 className="text-5xl font-bold font-serif my-9">All Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allbooks?.map(allbooks => <AllBooksPerCard key={allbooks.id} allbooks={allbooks}></AllBooksPerCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;