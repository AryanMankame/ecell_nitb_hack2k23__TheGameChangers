import React from 'react'
import { useNavigate } from 'react-router-dom'
const ThreeBtn = () => {
    const navigate = useNavigate();
    return (
        <section class="bg-white dark:bg-gray-900 ">
            <div class="container px-6 py-10 mx-auto ">
                <h1
                    class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white text-center px-2 py-2 mx-2 my-2">
                    Welcome to E-Kabad</h1>
                <h4 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white text-center">What do
                    you want to access</h4>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">

                        <h1 class="text-xl font-bold  text-gray-700 capitalize lg:text-2xl dark:text-white text-center">USER
                        </h1>
                        <div class="inline-block text-blue-500 dark:text-blue-400 w-[100%] flex justify-center">
                            <img src="https://img.icons8.com/ios-glyphs/100/null/user--v1.png" class="" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" />
                        </div>

                        <p class="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel
                            non corrupti doloribus voluptatum eveniet
                        </p>

                        <button
                            class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                            onClick={() => navigate('/userland')}>
                            Explore
                        </button>
                    </div>

                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">

                        <h1 class="text-xl font-bold text-gray-700 capitalize lg:text-2xl dark:text-white text-center">WASTE
                            COLLECTOR</h1>
                        <span class="inline-block text-blue-500 dark:text-blue-400 w-[100%] flex justify-center">
                            <img src="https://img.icons8.com/ios-glyphs/100/null/garbage-truck.png" class="" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" />
                        </span>

                        <p class="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel
                            non corrupti doloribus voluptatum eveniet
                        </p>

                        <button
                            class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                            onClick={() => navigate('/info')}>
                            Explore
                        </button>
                    </div>

                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">

                        <h1 class="text-xl font-bold text-gray-700 capitalize lg:text-2xl dark:text-white text-center">BUYER
                        </h1>
                        <div class="inline-block text-blue-500 dark:text-blue-400 w-[100%] flex justify-center">
                            <img src="https://img.icons8.com/external-stick-figures-gan-khoon-lay/100/null/external-buyer-jobs-occupations-careers-stick-figures-gan-khoon-lay.png"
                                class="" fill="none" viewBox="0 0 24 24" stroke="currentColor" />
                        </div>

                        <p class="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel
                            non corrupti doloribus voluptatum eveniet
                        </p>

                        <button
                            class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                            onClick={() => navigate('/list')}>
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThreeBtn