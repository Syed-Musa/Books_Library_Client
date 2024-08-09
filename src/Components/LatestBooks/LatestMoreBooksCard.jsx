/* eslint-disable react/prop-types */

const LatestMoreBooksCard = ({more}) => {
    const {more_books_name, more_books_image, author_name, Rating} = more || {};
    console.log(more);

    return (
        <div>
            <div className="card w-96 ml-3 bg-base-100 shadow-xl mb-10">
                <figure>
                    <img className="h-80" src={more_books_image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold text-2xl font-serif"> {more_books_name}</h2>
                  <h2 className="font-medium italic text-xl"><span className="font-bold font-serif">Author:</span> {author_name}</h2>
                  <div className="flex justify-between gap-10">
                  <p className=" italic text-gray-700 text-xl">Rating: {Rating}</p>
                  </div>
                  <div className="card-actions justify-end mt-5">
                    <button className="btn bg-green-600 font-serif uppercase hover:text-green-600 hover:bg-white text-white">Details</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default LatestMoreBooksCard;