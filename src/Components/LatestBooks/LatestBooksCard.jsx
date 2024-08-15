/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const LatestBooksCard = ({famouse}) => {
    const {_id, books_image, books_name, author_name, category, Rating} = famouse || {};

    return (
        <div>
            <div className="card w-96 ml-5 bg-base-100 shadow-xl mb-10">
                <figure>
                    <img className="h-80" src={books_image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold lg:text-2xl text-xl font-serif"> {books_name}</h2>
                  <h2 className="font-medium italic lg:text-xl text-xs"><span className="font-bold font-serif">Author:</span> {author_name}</h2>
                  <div className="flex justify-between gap-10">
                  <p className=" italic text-gray-700 text-xl">Category: {category}</p>
                  <p className=" italic text-gray-700 text-xl">Rating: {Rating}</p>
                  </div>
                  <div className="card-actions justify-end mt-5">
                    <Link to={`/famouse/${_id}`}><button className="btn bg-green-600 font-serif uppercase hover:text-green-600 hover:bg-white text-white">Details</button></Link>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBooksCard;