import React from 'react'

function Friend({name, image}) {
    return (
        <div>

            <div class='mb-5 m-2 border-2 border-slate-300 rounded-lg p-2 flex flex-low'>

                {/* Image */}
                <div>
                    <img src={image} class='w-20 h-20 rounded-full border-2 border-white-500' alt='avater' />
                </div>

                <div className='ml-5 flex justify-center items-center flex-col'>

                    {name}

                </div>

            </div>

        </div>
    )
}

export default Friend