/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const ProductDetails = () => {

    const { user } = useContext(AuthContext);

    const [singleProduct, setSingleProduct] = useState([])

    const {id} = useParams();
    const product = useLoaderData();

    useEffect(() => {
        const findProduct = product?.find((singleProduct) => singleProduct._id === id)
        setSingleProduct(findProduct)
    },[id, singleProduct])

    const { image, name, brand, type, desc, rating, price } = singleProduct;

    // send add to cart product details to the server
    const handleAddToCart = () => {
        if (user) {
            const newCartProduct = { name, brand, image, type, price, rating, desc, userEmail: user.email};
            // console.log(newCartProduct)

            fetch('https://blushify-server-n4u453k6t-sumiya-islams-projects.vercel.app/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newCartProduct)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Congratulations!',
                    text: 'Added to Cart Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
        }
    }

  return (
    <div className='px-6 md:px-8 lg:px-12 py-20'>
        <div className='flex flex-col md:flex-row gap-4 rounded-xl shadow items-center'>
            <div>
                <img src={image} alt="" className='h-[400px] md:h-[480px] lg:h-[420px] w-[400px] bg-white rounded-t-xl md:rounded-se-none md:rounded-l-xl shadow'/>
            </div>
            <div className='px-10 py-10 md:w-1/2'>
                <h5 className="uppercase text-base text-[#F44545] font-semibold mb-2">
                {brand}
                </h5>
                <h2 className="font-semibold text-xl mb-1">{name}</h2>
                <p className='font-medium text-lg mb-6 text-zinc-600'>Price: <span>${price}</span></p>
                <p className="text-sm md:text-xs lg:text-sm text-zinc-500 text-justify mb-2">{desc}</p>
                <h3 className="uppercase font-semibold text-sm md:text-xs lg:text-sm mb-3">
                Category: <span className='text-zinc-500'>{type}</span>
                </h3>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 gap-5 mb-4 lg:mb-8">
                    <Rating
                    emptySymbol={
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-[#F44545]"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                        </svg>
                    }
                    fullSymbol={
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-[#F44545]"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                        </svg>
                    }
                    initialRating={rating}
                    readonly
                    />
                </p>
                <button onClick={handleAddToCart} className='uppercase text-base flex items-center gap-1 font-semibold'>
                    <p>Add to Cart</p>
                    <i><BsArrowRightShort className='text-3xl'></BsArrowRightShort></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
