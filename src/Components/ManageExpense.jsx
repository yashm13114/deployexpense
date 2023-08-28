import React from 'react'

const ManageExpense = () => {
    return (
        <>
        
            <div class="flex flex-col mt-20 lg:w-3/4 w-4/5 lg:ml-72 ml-10">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">Sr no.</th>
                                        <th scope="col" class="px-6 py-4">Expense Item</th>
                                        <th scope="col" class="px-6 py-4">Expense Cost</th>
                                        <th scope="col" class="px-6 py-4">Expense Date</th>
                                        <th scope="col" class="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td class="whitespace-nowrap px-6 py-4">Mark</td>
                                        <td class="whitespace-nowrap px-6 py-4">Otto</td>
                                        <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                                        <td class="whitespace-nowrap px-6 py-4 text-red-600">Delete</td>
                                    </tr>
                                    <tr
                                        class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                                        <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                                        <td class="whitespace-nowrap px-6 py-4">@fat</td>
                                        <td class="whitespace-nowrap px-6 py-4 text-red-600">Delete</td>
                                    </tr>
                                    <tr
                                        class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                        <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                        <td class="whitespace-nowrap px-6 py-4">Wild</td>
                                        <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                                        <td class="whitespace-nowrap px-6 py-4 text-red-600">Delete</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageExpense