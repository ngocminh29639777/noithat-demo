import React from "react"
import Back from "../common/Back"
import PriceCard from "../home/price/PriceCard"
import img from "../images/pricing.jpg"
import "../home/price/price.css"

const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='Bảng giá' title='Thiết kế thi công trọn gói.' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing
