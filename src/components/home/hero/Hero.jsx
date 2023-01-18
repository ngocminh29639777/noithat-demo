import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Nội Thất Ngôi Nhà Của Bạn ' subtitle='Tìm kiếm những mẫu sản phẩm phù hợp với phong cách!' />

          <form className='flex'>
            <div className='box'>
              <span>Nội Thất Cổ Điển</span>
              <input type='text' placeholder='Thông tin' />
            </div>
            <div className='box'>
              <span>Nội Thất Hiện Đại</span>
              <input type='text' placeholder='Thông tin' />
            </div>
            <div className='box'>
              <span>Bàn Kệ</span>
              <input type='text' placeholder='Thông tin' />
            </div>
            <div className='box'>
              <h4>Tìm Kiếm</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
