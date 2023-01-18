import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Bạn có câu hỏi gì ?</h1>
              <p>Chúng tôi có thể giúp hỗ trợ cho bạn.</p>
            </div>
            <button className='btn5'>Liên hệ ngay</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logolight.png' alt='' />
              <h2>Bạn có cần giúp đỡ gì không ?</h2>
              <p>Nhận thông tin cập nhật, ưu đãi hấp dẫn, giảm giá được gửi vào hộp thư đến của bạn mỗi tháng.</p>

              <div className='input flex'>
                <input type='text' placeholder='Địa chỉ Email' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© thietkethicongnoithat</span>
      </div>
    </>
  )
}

export default Footer
