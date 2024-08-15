import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const {user, logOut} = useAuth();

  const handleSignOut = ()=>{
    logOut()
    .then()
    .catch()
  }

    const navItems = <>
        <li className="font-bold font-serif text-xs"><Link to='/'>Home</Link></li>
        <li className="font-bold font-serif text-xs"><Link to='/addbooks'>Add Books</Link></li>
        <li className="font-bold font-serif text-xs"><Link to='/allbooks'>All Books</Link></li>
        <li className="font-bold font-serif text-xs"><Link to='/borrowedbooks'>Borrowed Books</Link></li>
        
    </>

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
                <div className="drawer-content flex flex-col">
                  {/* Navbar */}
                  <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                      <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                      </label>
                    </div> 
                    <div className="flex-1 px-2 mx-2">
                      <img className="w-20" src="../../public/Images/images-removebg-preview.png" alt="" />
                      <p className="text-3xl font-extrabold font-serif gap-2 text-black">Books_Gallery</p>
                    </div>
                    <div className="mr-20 hidden lg:block">
                      <ul className="menu menu-horizontal">
                        {navItems}
                        <div className="ml-28">
                        {
                          user ? <>
                            {/* <span className="font-bold">{user?.email}</span> */}
                            <div className="flex gap-2">
                            <img className="w-4 lg:w-10 rounded-full" src={user?.photoURL} />
                            <button onClick={handleSignOut} className="btn text-white bg-green-500 font-serif">Sign Out</button>
                            </div>
                            </>
                            :
                          <Link to="/login"><button className="btn text-white bg-green-500 font-serif">Login</button></Link>
                        }  
                        </div>
                      </ul>
                    </div>
                  </div>
                  
                </div> 
                <div className="drawer-side">
                  <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                  <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {navItems}
                    {
                      user ? <>
                        <span className="font-bold">{user?.email}</span>
                        <img className="w-8 ml-10 lg:w-10 rounded-full" src={user?.photoURL} />
                        <button onClick={handleSignOut} className="btn text-white bg-gradient-to-r from-blue-600 to-sky-400 italic">Sign Out</button>
                        </>
                        :
                      <Link to="/login"><button className="btn text-white bg-green-500 font-serif">Login</button></Link>
                    }  
                  </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;