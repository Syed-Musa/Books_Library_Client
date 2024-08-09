import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LatestMoreBooksCard from "./LatestMoreBooksCard";

const LatestBooksDetails = () => {
    const data = useLoaderData();
    const [moreBooks, setMoreBooks] = useState([]);
    useEffect(()=> {
        fetch('/MoreBooks.json')
        .then(res => res.json())
        .then(data => setMoreBooks(data))
    }, [])

    return (
        <div>
            <div className="mt-10">
                <div className="flex justify-between gap-5">
                    <img className="h-[500px]" src={data?.books_image} alt="" />
                    {/* <div className="flex justify-between text-3xl font-medium font-serif bg-blue-500 p-3 text-white">
                        
                        
                    </div> */}
                    <div>
                        <h2 className="text-3xl font-bold font-serif">{data.books_name}</h2>
                        <h3 className="font-medium my-3 font-serif text-xl">Artist by: <span className="italic ml-2">{data?.author_name}</span></h3>
                        <hr />
                        <h3 className="my-2 font-medium text-xl">{data?.category}</h3>
                        <hr />
                        <p className=" font-serif italic my-5 font-bold">Review: <span className="font-light">{data?.details}</span></p>
                        <p className="font-bold font-serif">Tag <span className="text-blue-600 ml-12">#bookslibrary</span> <span className="text-blue-600">#librarystore</span></p>
                        <hr />
                        <h2 className="font-serif text-xl mt-10 font-medium">Number of Page: <span className="font-bold ml-12">{data?.num_of_page}</span></h2>
                        <h2 className="font-serif text-xl font-medium mt-3">Year of Publishing: <span className="font-bold ml-6">{data?.publisher}</span></h2>
                        <h3 className="font-medium text-xl font-serif mt-3">Rating: <span className="italic font-bold ml-32">{data?.Rating}</span></h3>
                    </div>
                </div>
                <h2 className="text-4xl text-center font-bold font-serif text-blue-700 mt-10 mb-5 ml-2">More Popular Books</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {
                    moreBooks?.map(more => <LatestMoreBooksCard key={more.id} more={more}></LatestMoreBooksCard>)
                }
            </div>
            <Link to='/'><button className="btn bg-blue-700 hover:text-blue-700 hover:bg-white font-bold font-serif uppercase text-white ml-[550px] mb-5">Back</button></Link>
        </div>
    );
};

export default LatestBooksDetails;