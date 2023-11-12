/* eslint-disable no-unused-vars */
import React from 'react'
import Swal from 'sweetalert2';

const AddProduct = () => {

  const handleAddProduct = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const image = form.image.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const desc = form.desc.value;

    const newProduct = { name, brand, image, type, price, rating, desc }
    // console.log(newProduct);

    // send products to the server
    fetch('https://blushify-server-n4u453k6t-sumiya-islams-projects.vercel.app/products', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        Swal.fire({
          title: 'Congratulations!',
          text: 'Product Added Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
    
        form.reset();
    })
  }

  return (
    <div>
       <div className="px-8 md:px-12 lg:px-60 py-20">
        <div className="border-[1.5px] rounded-xl px-8 lg:px-12 py-14">
          <h1 className="text-2xl text-center mb-2 font-semibold">
              Add New Product
          </h1>
          <h1 className='w-16 border-[1.5px] border-[#F44545] mx-auto mb-14'></h1>
          <form onSubmit={handleAddProduct}>
            <div className="md:flex gap-7 md:mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-semibold">Name</span>
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    className="input bg-zinc-100 placeholder:text-zinc-500 text-zinc-500 text-sm w-full outline-none focus:outline-none"
                    required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-semibold">Brand Name</span>
                </label>
                <select 
                name="brand"
                className="select bg-zinc-100 w-full max-w-xs outline-none focus:outline-none text-zinc-500"
                required
                >
                  <option value="Select brand">Select brand</option>
                  <option value="CHANEL">CHANEL</option>
                  <option value="Dior">Dior</option>
                  <option value="L'Oréal Paris">L'Oréal Paris</option>
                  <option value="M·A·C Cosmetics">M·A·C Cosmetics</option>
                  <option value="Revlon">Revlon</option>
                  <option value="Urban Decay Cosmetics">Urban Decay Cosmetics</option>
                </select>
              </div>
            </div>
            <div className="md:flex gap-7 md:mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-semibold">Image</span>
                </label>
                <input
                    type="text"
                    name="image"
                    placeholder="Enter image url"
                    className="input bg-zinc-100 placeholder:text-zinc-500 text-zinc-500  text-sm w-full outline-none focus:outline-none"
                    required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-semibold">Type</span>
                </label>
                <select 
                name="type"
                className="select bg-zinc-100 w-full max-w-xs outline-none focus:outline-none text-zinc-500"
                required
                >
                  <option value="Select category">Select category</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Skin Care">Skin Care</option>
                  <option value="Hair Care">Hair Care</option>
                  <option value="Body Care">Body Care</option>
                  <option value="Nail Care">Nail Care</option>
                  <option value="Fragrance">Fragrance</option>
                </select>
              </div>
            </div>
            <div className="md:flex gap-7 md:mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-semibold">Price</span>
                </label>
                <input
                    type="text"
                    name="price"
                    placeholder="Enter price"
                    className="input bg-zinc-100 placeholder:text-zinc-500 text-zinc-500  text-sm w-full outline-none focus:outline-none"
                    required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-semibold">Rating</span>
                </label>
                <input
                    type="text"
                    name="rating"
                    placeholder="Enter rating"
                    className="input bg-zinc-100 placeholder:text-zinc-500 text-zinc-500  text-sm w-full outline-none focus:outline-none"
                    required
                />
              </div>
            </div>

            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-semibold">Short Description</span>
                </label>
                <textarea 
                    className="textarea bg-zinc-100 placeholder:text-zinc-500 text-zinc-500  resize-none h-24 text-sm w-full outline-none focus:outline-none mb-4" 
                    type="text"
                    name="desc"
                    placeholder="Enter short description"
                    required
                    >
                </textarea>
              </div>
            </div>
            <div className="my-5">
              <button className="bg-[#F44545] w-full font-display text-white p-3 rounded-md text-base font-medium">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
