import React,{useRef,useState} from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [done,setDone]=useState(false)

    const formRef=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_widvxtp', 'template_a0kl2y9', formRef.current, '8QI_hWw7xpo0cQZuf')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    
  return (
    <div className='c'>
     <div className="c-bg"></div>
     <div className="c-wrapper">
         <div className="c-left">
             <h1 className='c-title' id="contact">CONTACT ME</h1>
                 <div className="c-info-item">
                   <img src="/assets/image/phone-116.svg" alt="phone icon" className="c-icon" />9500374199
                      </div>
                       <div className="c-info-item">
                    <img src="/assets/image/mail-272.svg" alt="mail icon" className="c-icon" />saransamikannu@gmail.com
                </div>
           </div>
         <div className="c-right">
             <p>Send E-mail</p>
                  <form ref={formRef} onSubmit={handleSubmit}>
                      <input type="text" placeholder='Name' name="user_name" />
                      <input type="mail" placeholder='E-mail' name="user_email"/>
                      <input type="text" placeholder='Subject' name="user_subject" className='c-subject'/>
                      <textarea placeholder='Message' name="message" />
                      <button>Submit</button>
                  </form>
                {done && <div className='c-mail-sent'>Your mail is sent. Thank you...</div>}
            </div>
        </div>
    </div>
  )
}

export default Contact
