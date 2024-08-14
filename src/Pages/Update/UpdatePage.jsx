import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
    const data = useLoaderData();
    const {_id, books_name, author_name, category, num_of_page, Rating, details, publisher, books_image} = data || {};
    console.log(data);

    const handleUpdateBooks = e =>{
        e.preventDefault();
        const form = e.target;
        const books_name = form?.books_name.value;
        const author_name = form?.author_name.value;
        const category = form?.category.value;
        const num_of_page = form?.num_of_page.value;
        const Rating = form?.Rating.value;
        const details = form?.details.value;
        const publisher = form?.publisher.value;
        const books_image = form?.books_image.value;

        const UpdatedBooks = {books_image, books_name, author_name, category, num_of_page, Rating, details, publisher}
        console.log(UpdatedBooks);

        fetch(`http://localhost:5000/allbooks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedBooks)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Updated book has been success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">  
        <div className=" p-10">
            <h2 className="text-xl lg:text-5xl font-bold font-serif text-center text-green-400 my-5">Update Product</h2>
            <form onSubmit={handleUpdateBooks}>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-around">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">Books Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="books_name"
                    defaultValue={books_name}
                    placeholder="name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
    
              {/* Author Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">Author Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="author_name"
                    defaultValue={author_name}
                    placeholder="brand name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
    
              {/* Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">Category</span>
                </label>
                {/* <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    placeholder="choose type"
                    className="input input-bordered w-full"
                  />
                </label> */}
                <select type="text" name="category" defaultValue={category} className="select select-bordered w-full max-w-xs font-bold font-serif">
                  <option disabled selected>Create Books Category</option>
                  <option className="font-serif font-bold">Novel</option>
                  <option className="font-serif font-bold">Thriller</option>
                  <option className="font-serif font-bold">Sci-Fi</option>
                  <option className="font-serif font-bold">History</option>
                </select>
              </div>
    
              {/* Publisher */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">Year of Publisher</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="publisher"
                    defaultValue={publisher}
                    placeholder="publisher"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
    
              {/* Rating */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="Rating"
                    defaultValue={Rating}
                    placeholder="rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
    
              {/* Number of Page */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">Number of Page</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="num_of_page"
                    defaultValue={num_of_page}
                    placeholder="number page"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* Details */}
            <h2 className="font-serif font-bold">Short Description</h2>
            <textarea name="details" defaultValue={details} className="textarea textarea-bordered w-full"></textarea>
    
            {/* Books Images */}
            <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="books_image"
                    defaultValue={books_image}
                    placeholder="photo"
                    className="input input-bordered w-full"
                  />
                </label>
            </div>

            {/* Update Books */}
            <input type="submit" name="Update Books" className="w-full my-4 btn bg-green-500 text-white"  />
            </div>
            </form>
        </div>
        </div>
    );
};

export default UpdatePage;