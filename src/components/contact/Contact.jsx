import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Vui lòng' title='Để lại thông tin cá nhân để được hỗ trợ nhanh nhất. ' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Điền thông tin</h4> <br />
            <div>
              <input type='text' placeholder='Tên' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Số điện thoại' />
            <textarea cols='30' rows='10'></textarea>
            <button>Gửi</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
