import './contact.scss'

export default function Contact() {
  return (
    <div className='contact'>
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>tahsin3194@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Sahiwal, Punjab Pakistan</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+92 302 0620626</span>
        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input type="text" required placeholder='Name' />
          <input type="email" required placeholder='Email' />
          <textarea rows={8} placeholder='Message'/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
