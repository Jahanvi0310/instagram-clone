import React from 'react'
// import fs from 'fs';

const storyInput = () => {
    // const fs = require('fs');
  return (
    
<div  className='flex justify-center items-center'>
<div className="p-4 w-full max-w-sm bg-white rounded-lg border mt-5 border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">UPLOAD YOUR STORY</h5>
        <div>
            <label htmlFor="type" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Type</label>
            <input type="type" name="type" id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>
        <div>
            <label htmlFor="ImageLink" className="block mb-1  mt-0 text-sm font-medium text-gray-900 dark:text-gray-300">Your Image Link</label>
            <input type="ImageLink" name="ImageLink" id="ImageLink"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div>
            <label htmlFor="Caption" className="block mb-1 mt-0 text-sm font-medium text-gray-900 dark:text-gray-300">Caption</label>
            <input type="Caption" name="Caption" id="Caption"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div>
            <label htmlFor="textColor" className="block mb-1 mt-0 text-sm font-medium text-gray-900 dark:text-gray-300">Text Color</label>
            <input type="textColor" name="textColor" id="textColor"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div>
            <label htmlFor="backgroundColor" className="block mb-1 mt-0 text-sm font-medium text-gray-900 dark:text-gray-300">Background Color</label>
            <input type="backgroundColor" name="backgroundColor" id="backgroundColor"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div>
            <label htmlFor="text" className="block mb-1 text-sm mt-0 font-medium text-gray-900 dark:text-gray-300">Text</label>
            <input type="text" name="text" id="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div>
            <label htmlFor="backgroundColor" className="block mb-1 mt-0  text-sm font-medium text-gray-900 dark:text-gray-300">Background Color</label>
            <input type="backgroundColor" name="backgroundColor" id="tebackgroundColorxt"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        {/* <div className="flex items-start"> */}
            {/* <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div> */}
            {/* <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Image Link?</a> */}
        {/* </div> */}
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPLOAD</button>
        {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div> */}
    </form>
</div>
</div>

  )
}

export default storyInput
