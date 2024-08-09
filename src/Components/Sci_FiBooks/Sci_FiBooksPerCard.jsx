/* eslint-disable react/prop-types */

const Sci_FiBooksPerCard = ({ficitons}) => {
    const {fiction_books_name, fiction_books_image, author_name} = ficitons || {};

    return (
        <div className="ml-2">
            <div className="card w-96 bg-base-100 shadow-xl mb-10">
                <figure>
                    <img className="h-80" src={fiction_books_image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold"> {fiction_books_name}</h2>
                  <h2 className=""><span className="font-bold font-serif">Author:</span> {author_name}</h2>
                  {/* <p className="font-serif italic text-gray-600">{short_description}</p> */}
                  <div className="card-actions justify-end">
                    <button className="btn bg-green-600 hover:text-green-600 hover:bg-white text-white">Buy Now</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Sci_FiBooksPerCard;