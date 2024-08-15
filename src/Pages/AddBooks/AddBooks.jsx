import Swal from "sweetalert2";

const AddBooks = () => {
    const handleAddBooks = (e) => {
        e.preventDefault();
        const form = e.target;
        const books_name = form.books_name.value;
        const author_name = form.author_name.value;
        const category = form.category.value;
        const num_of_page = form.num_of_page.value;
        const Rating = form.Rating.value;
        const details = form.details.value;
        const publisher = form.publisher.value;
        const books_image = form.books_image.value;

        // Validate inputs
        if (!books_name || !author_name || !category || !num_of_page || !Rating || !details || !publisher || !books_image) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all the fields!',
            });
            return;
        }

        const newBooks = { books_name, author_name, category, num_of_page, Rating, details, publisher, books_image };
        console.log(newBooks);

        fetch('https://books-library-server-smoky.vercel.app/allbooks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooks)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added product has been success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

        // try {
        //     const response = await fetch('https://books-library-server-smoky.vercel.app/allbooks', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(newBooks)
        //     });

        //     const data = await response.json();
        //     console.log(data);

        //     if (data.insertedId) {
        //         Swal.fire({
        //             position: 'top-end',
        //             icon: 'success',
        //             title: 'Book added successfully',
        //             showConfirmButton: false,
        //             timer: 1500
        //         });

        //         // Reset the form
        //         form.reset();
        //     }
        // } catch (error) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Error',
        //         text: 'Failed to add the book. Please try again.',
        //     });
        //     console.error('Error adding book:', error);
        // }
    };

    return (
        <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <div className="p-10">
                <h2 className="text-xl lg:text-5xl font-bold font-serif text-center text-green-400 my-5">Add books</h2>
                <form onSubmit={handleAddBooks}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-around">
                        {/* Books Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">Books Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="books_name"
                                    placeholder="Books name"
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
                                    placeholder="Author name"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">Category</span>
                            </label>
                            <select type="text" name="category" className="select select-bordered w-full max-w-xs font-bold font-serif">
                                <option disabled selected>Select Book Category</option>
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
                                    placeholder="Year of publication"
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
                                    placeholder="Rating"
                                    className="input input-bordered w-full"
                                    min="0"
                                    max="9"
                                    step="0.1"
                                />
                            </label>
                        </div>

                        {/* Number of Page */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">Number of Pages</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="number"
                                    name="num_of_page"
                                    placeholder="Number of pages"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Details */}
                    <h2 className="font-bold mt-4">Details</h2>
                    <textarea name="details" className="textarea textarea-bordered w-full" placeholder="Details about the book"></textarea>

                    {/* Photo URL */}
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-bold font-serif">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="books_image"
                                placeholder="Photo URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Add Books */}
                    <input type="submit" name="Add Books" value="Add Books" className="w-full my-4 btn bg-green-400 text-white" />
                </form>
            </div>
        </div>
    );
};

export default AddBooks;