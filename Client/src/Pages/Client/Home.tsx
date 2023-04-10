import React, { useEffect, useState } from 'react'

const Home = (props:any) => {
    // const [data, setdata] = useState([]);
    // useEffect(() => {
        
    // })
  return (
    <>
  
      <div className="khung-product" style={{backgroundImage: 'url("//cdn.shopify.com/s/files/1/2159/5497/files/bg-pattern.png?v=1613541007")', backgroundPosition: 'center', backgroundColor: '#FFFFFF'}}>
        <div className="title-seler">
          <div className="title-p">
            <p>Just in now</p>
          </div>
          <div className="title-bestseler">
            <h2>Best Sellers</h2>
          </div>
        </div>
        <div className="product">
          {props?.data?.data?.map((data:any) =>
           <div className="grid-item" key={data._id}>
            <div className="grid-item-img">
              <img src={data.image}  />
            </div>
            <div className="eye">
              <i className="fa-solid fa-eye"/>
            </div>
            <div className="grid-item-name">
              <h3>{data.name}</h3>
              <p>$ {data.price}.00</p>
            </div>
            <div className="grid-item-detail">
              <div className="star">
                <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                <i className="fa-solid fa-star" style={{color: '#c7c5b9'}} />
              </div>
              <div className="ingredient">
                <p>xem thêm</p>
                <p>mô tả</p>
                </div>
            </div>
          </div>)}
        </div>
      </div>
              
    </>
  )
}

export default Home