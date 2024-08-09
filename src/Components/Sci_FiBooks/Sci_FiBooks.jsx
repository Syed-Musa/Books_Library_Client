import { useEffect, useState } from "react";
import Sci_FiBooksPerCard from "./Sci_FiBooksPerCard";

const Sci_FiBooks = () => {
    const [fictionBooks, setFictionBooks] = useState([]);
    useEffect(()=> {
        fetch('/Fiction.json')
        .then(res => res.json())
        .then(data => setFictionBooks(data))
    }, [])

    return (
        <div>
            <h2 className="font-bold font-serif text-4xl mt-14 my-6 text-right mr-5">Sci-Fi Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    fictionBooks?.map(fictions => <Sci_FiBooksPerCard key={fictions.id} ficitons={fictions}></Sci_FiBooksPerCard>)
                }
            </div>
        </div>
    );
};

export default Sci_FiBooks;