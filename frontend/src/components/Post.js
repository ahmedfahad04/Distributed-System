import React from 'react'

function Post() {
    return (
        <div class='mb-5 m-2 border-2 border-slate-500 rounded-lg p-2 shadow-xl bg-gray-50'>
            <div>
                <div >
                    <h1 class='text-2xl font-medium'>
                        John Doe
                    </h1>
                    <h4 class='text-xs font-light'>
                        July 7, 2023 | 11.00 am
                    </h4>
                    <hr
                        style={{
                            background: 'grey',
                            color: 'blue',
                            height: '3px',
                            marginTop: '10px',
                        }}
                    />
                </div>
                <div class='mt-3'>
                    The post will go here.
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>

        </div>
    )
}

export default Post