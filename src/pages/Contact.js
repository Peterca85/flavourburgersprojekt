import React from 'react'
import Phone from "@mui/icons-material/Phone";
import Mail from "@mui/icons-material/Mail";
import Home from "@mui/icons-material/Home";
import "../styles/Contact.css";

function Contact() {
  return (
    < section className='contact'>
    <div className='container'>
      <h2>Kontakta oss</h2>
      <div className='contact-wrapper'>
        <div className='contact-form'>
<h3>Skicka oss ett meddelande</h3>
<form>
  <div className='form-group'>
    <input type='text' name='name' placeholder='Ditt Namn'>
      
    </input>
    
  </div>

  <div className='form-group'>
    <input type='email' name='email' placeholder='Din Email'>
      
    </input>
    
  </div>

  <div className='form-group'>
    <textarea name='message' placeholder='Ditt meddelande'></textarea>
      
   
    
  </div>

  <button type='submit'>Skicka meddelande</button>

</form>
        
        </div>
        <div className='contact-info'>
          <h3>Kontakt information</h3>
          <Phone fontSize="large" />
          <p>0920 222222</p>
          <Mail fontSize="large"  />
          <p>Flavourburgers@gmail.com</p>
          <Home fontSize="large"  />
          <p>Storgatan 12 Luleå</p>
        </div>
  </div>
    </div>
    </section>
  )
}

export default Contact
