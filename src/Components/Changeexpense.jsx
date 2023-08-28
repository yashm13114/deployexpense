import React from 'react'

const Changeexpense = () => {
    return (
        <>
            <div className='lg:ml-96 ml-14'>
                <h1 className='text-3xl pb-5 mt-10'>Expenses</h1>
                <hr />
                <form action="" className='lg:ml-10 mt-5 lg:pr-5 lg:mr-0 ml-10'>
                    <label htmlFor="" className='text-2xl font-semibold lg:pt-2 lg:pr-96 '>Date of expense</label><br />

                    <input
                        type="date"
                        className="border-2 border-rounded-xl border-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleHtmlformControlInput3"
                        name='email'
                        placeholder="Email address" /><br />

                    <label htmlFor="" className='text-2xl font-semibold'>Cost of Item</label><br />
                    <input
                        type="text"
                        className="border-2 border-rounded-xl border-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleHtmlformControlInput3"
                        name='email'
                        placeholder="Enter cost" /><br />
                    <label htmlFor="" className='text-2xl font-semibold lg:pt-12 lg:pb-12 lg:pr-96 w-full'>Item</label><br />
                    <input
                        type="text"
                        className="border-2 border-rounded-xl border-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleHtmlformControlInput3"
                        name='email'
                        placeholder="Email address" /><br />
                    

                    <button type="submit" className='text-2xl bg-black text-white pl-6 pr-6 rounded-full'>Add</button>
                </form>
            </div>


        </>
    )
}

export default Changeexpense