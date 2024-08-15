/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LatestMore from "./LatestMore";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const AllBooksDtl = () => {
    const data = useLoaderData();
    const {user} = useAuth();
    const [moreBooks, setMoreBooks] = useState([]);
    useEffect(()=> {
        fetch('/MoreBooks.json')
        .then(res => res.json())
        .then(data => setMoreBooks(data))
    }, [])

    const BorrowedBooks = ()=>{
        const value = { email:user.email, books_name: user.books_name, books_image: user.books_image, category: user.category, author_name: user.author_name }
        fetch('http://localhost:5000/borrowedbooks',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(value)
        })
        .then( res => res.json())
        .then( data => {
          console.log('Success')
          Swal.fire(
            'Added!',
            'The selected product have been added!',
            'success'
          )
        })
    }

    return (
        <div>
            <div className="mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <img className="h-[500px]" src={data?.books_image} alt="" />
                    {/* <div className="flex justify-between text-3xl font-medium font-serif bg-blue-500 p-3 text-white">
                        
                        
                    </div> */}
                    <div className="ml-5">
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
                    <button onClick={BorrowedBooks} className="btn bg-green-500 font-bold font-serif my-10 text-white ml-[45%]">Borrwed</button>
                <h2 className="text-4xl text-center font-bold font-serif text-blue-700 mt-10 mb-5 ml-2">More Popular Books</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                    {
                        moreBooks?.map(more => <LatestMore key={more.id} more={more}></LatestMore>)
                    }
                </div>
                <Link to='/'><button className="btn bg-green-500 hover:text-blue-700 hover:bg-white font-bold font-serif uppercase text-white lg:ml-[550px] ml-[45%] mb-5">Back</button></Link>
            </div>
        </div>
    );
};

export default AllBooksDtl;