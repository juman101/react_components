import React from 'react'

import UseFetch from './index.js'

const Uf = () => {
   const url ='https://dummyjson.com/products';

    const {data,pending,error}=UseFetch(url,{});

    console.log(data,pending,error);

  return (
    <div>
      {
        pending?(
<h1>
    Wait its loading
</h1>
        )
        :(
            <div>
            {data&&data.products && data.products.length
              ? data.products.map((item) => (
                  <div key={item.id}>
                    
                    <p>{item.title}</p>
                  </div>
                ))
              : null}
          </div>    
        )
      }
    </div>
  )
}

export default Uf
