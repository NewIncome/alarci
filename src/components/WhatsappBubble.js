import whatsapp from '../assets/whatsapp.png'

const WhatsappBubble = () => (
  <div className="whatsapp">
    <a className= "whats-link" href="https://wa.me/5569301216" target="_blank">
      <img className="whats-img" src={whatsapp} alt="whatsapp bubble" />
    </a>
  </div>
);

export default WhatsappBubble;
