/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AuthContext } from '../providers/AuthProvider';

const MyCart = () => {

  const { user } = useContext(AuthContext);

  const cartDetails = useLoaderData();
  const [cartProducts, setCartProducts] = useState(cartDetails);
  const [filteredCartProducts, setFilteredCartProducts] = useState(cartProducts);

  // delete product from cart
  const handleProductDelete = id => {
    fetch(`https://blushify-server-n4u453k6t-sumiya-islams-projects.vercel.app/cart/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount > 0) {
        console.log(data)
        const remainingProducts = cartProducts.filter(cart => cart._id !== id);
        setCartProducts(remainingProducts);
      }
    });
  }

  useEffect(() => {
    if (user) {
      const userCartProducts = cartProducts.filter((cart) => cart.userEmail === user.email);
      setFilteredCartProducts(userCartProducts);
    }
  }, [cartProducts, user]);


  return (
    <div>
      <div className='pt-20'>
        <h1 className="text-center uppercase font-semibold text-lg mb-2">My Shopping cart</h1>
        <hr className="w-14 border-[1.5px] border-[#F44545] mb-14 mx-auto" />
      </div>
      <div className='pb-20'>
        {filteredCartProducts.length === 0 ? (
          <p className='text-center'>Your cart is empty</p>
        ) : (
          filteredCartProducts.map((cart) => (
            <div key={cart._id} className='px-6 md:px-8 lg:px-72 pb-5'>
              <div className='rounded-xl border-[1.5px]'>
                <div className='flex gap-4 md:gap-8 items-center p-4'>
                  <div>
                    <img src={cart.image} alt="" className='h-40 w-36 md:w-40 rounded-xl shadow bg-white' />
                  </div>
                  <div>
                    <h5 className="uppercase text-xs text-[#F44545] font-semibold mb-1">{cart.brand}</h5>
                    <h2 className='font-semibold text-base md:text-xl mb-1'>{cart.name}</h2>
                    <p className='font-medium text-sm md:text-base mb-4 text-zinc-600'>Price: <span>${cart.price}</span></p>
                    <button onClick={() => handleProductDelete(cart._id)} className='flex gap-2 items-center font-semibold text-xs md:text-sm bg-black text-white rounded-lg uppercase px-6 py-1.5 border-2 border-black hover:bg-white hover:text-black'>
                      <i><RiDeleteBin6Line></RiDeleteBin6Line></i>
                      <p>DELETE</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default MyCart
