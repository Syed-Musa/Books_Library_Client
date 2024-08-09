import { useEffect, useState } from "react";
import HistoricalBooksCard from "./HistoricalBooksCard";

const HistoricalBooks = () => {
    const [historicalBooks, setHistoricalBooks] = useState([]);
    useEffect(()=> {
        fetch("/History.json")
        .then(res => res.json())
        .then(data => setHistoricalBooks(data))
    }, []);

    return (
        <div>
            <h2 className="text-4xl font-bold font-serif text-left ml-5 mt-10 mb-5">Historical Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    historicalBooks?.map(history => <HistoricalBooksCard key={history.id} history={history}></HistoricalBooksCard>)
                }
            </div>
        </div>
    );
};

export default HistoricalBooks;