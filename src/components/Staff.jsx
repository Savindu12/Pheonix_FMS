import React, { useState } from "react";
// import { AiOutlineEnter } from "react-icons/ai";
// import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import bgImg from '../assets/Plogo.png'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { PaperClipIcon } from '@heroicons/react/solid'

const TodoApp = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  
    const handleClose =()=> setNav(!nav)
    

  let [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  // declaring state for todo 
  const [todo, setTodo] = useState([])

  // binding inputs
  let handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // handle submit
  let handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      todoItem: data,
    };

    setTodo([...todo, newTodo]);

    setData({
      ...data,
      firstName: "",
      lastName: "",
      email: "",
      age: "",
    });
  };

 

  return (
    <>
    {/* <div className='w-screen h-[80px] z-10 bg-gradient-to-r from-zinc-900 via-orange-200 to-neutral-100 fixed drop-shadow-lg mb-10'>
      <div className='px-5 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <img className='w-96 h-full px-15 ml-10' src={bgImg} alt="/" />
          <ul className='hidden md:flex text-xl ml-20 pl-20'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link to='/Admin'>Admin</Link></li>
          <li><Link to="/Staff" smooth={true} offset={-100} duration={500}>Staff</Link></li>
          <li><Link to="Contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-20'>
          <button className='border-none bg-transparent text-black mr-4 text-xl'>
            Sign Up
          </button>
          <button className='px-8 py-3 text-xl'>Sign In</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link to="Admin" smooth={true} offset={-50} duration={500}>Admin</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Staff" smooth={true} offset={-100} duration={500}>Packages</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign Up</button>
            <button className='px-8 py-3'>Sign </button>
        </div>
      </ul>
    </div> */}

    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-20">
      <div className="px-5 py-5 sm:px-6">
        <h3 className="text-4xl leading-6 font-medium text-gray-900 text-center underline-offset-8 uppercase">Staff Information</h3>
        <p className="mt-5 max-w-3xl text-lg text-gray-500 text-center">Personal details of Staff.</p>
      </div>
      <div className="border-t border-amber-600">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 ">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Savindu Dhamsara</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Admin Role</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Management</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">SavinduDhamsara@pheonix.com</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Staff Availability</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Daytime and OT Hours</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">Staff_Status.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-amber-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">User_Status.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-amber-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>



    
    <React.Fragment>
      {/* <pre>{JSON.stringify(todo)}</pre> */}
      <section className="mx-5 rounded-lg bg-black mt-10 overflow-hidden md:mx-96">
        {/* header */}
        <div className="flex justify-center items-center h-14 bg-amber">
          <p className="text-2xl uppercase font-bold text-white  ">
            Add User Form
          </p>
        </div>

        {/* form */}
        <div className="">
          <form onSubmit={handleSubmit}>
            <table className="border-separate w-full border-2 border-gray-500 ">
              <tbody>
                <tr>
                  <td className="border border-gray-600 text-white text-center">
                    First Name
                  </td>
                  <td className="border border-gray-600 ">
                    <input
                      name="firstName"
                      value={data.firstName}
                      onChange={handleChange}
                      type="text"
                      placeholder="First Name"
                      className="w-full pl-2 border-2 col-span-2 border-gray-900"
                    />
                  </td>
                </tr>

                {/* lastName */}
                <tr>
                  <td className="border border-gray-600 text-white text-center">
                    Last Name
                  </td>
                  <td className="border border-gray-600">
                    <input
                      name="lastName"
                      value={data.lastName}
                      onChange={handleChange}
                      type="text"
                      placeholder="Last Name"
                      className="w-full pl-2 border-2 col-span-2 border-gray-900"
                    />
                  </td>
                </tr>

                {/* email */}
                <tr>
                  <td className="border border-gray-600 text-white text-center">
                    Email
                  </td>
                  <td className="border border-gray-600">
                    <input
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email"
                      className="w-full pl-2 border-2 col-span-2 border-gray-900"
                    />
                  </td>
                </tr>

                {/* age */}
                <tr>
                  <td className="border border-gray-600 text-white text-center">
                    Age
                  </td>
                  <td className="border border-gray-600">
                    <input
                      name="age"
                      value={data.age}
                      onChange={handleChange}
                      type="number"
                      placeholder="Age"
                      className="w-full pl-2 border-2 col-span-2 border-gray-900"
                    />
                  </td>
                </tr>

                {/* button */}
                <tr>
                  <td colspan="2">
                    <button type='submit' className=" text-center bg-white w-full font-bold text-xl tracking-wide text-gray-600">
                      Add
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </section>

      {/* table 2 */}
      <section className="mx-5 lg:mx-20">
        <table className="border-separate border-2 w-full border-gray-500 bg-black mt-20 ">
          <thead>
            <tr>
            <th className="border border-gray-600 text-white text-center"> First Name </th>
            <th className="border border-gray-600 text-white text-center"> Last Name </th>
            <th className="border border-gray-600 text-white text-center"> Email </th>
            <th className="border border-gray-600 text-white text-center"> Age </th>
            
            </tr>
          </thead>

          <tbody>
           {
             todo.map((item) =>{
               return(
                 
              <tr key={item.id}>
              <td className="border border-gray-600 text-white text-center">{item.todoItem.firstName}</td>
              <td className="border border-gray-600 text-white text-center"> {item.todoItem.lastName}</td>
              <td className="border border-gray-600 text-white text-center"> {item.todoItem.email}</td>
              <td className="border border-gray-600 text-white text-center"> {item.todoItem.age}</td>
            </tr>
                
               )
             })
           }
          </tbody>
        </table>
      </section>
    </React.Fragment>

    </>
  );
};

export default TodoApp;