import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const TopHeader = () => {
  return (
    <>
      <section className='py-2 bg-slate-50'>
        <div className="container sm:flex items-center justify-between">
          <div className='sm:flex items-center space-x-8'>
            <div className='flex items-center justify-center sm:justify-normal'>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className='ml-2'>info@domainname.com</span>
            </div>
            <div className='flex items-center justify-center sm:justify-normal'>
              <FontAwesomeIcon icon={faPhone} />
              <span className='ml-2'>+89678968967</span>
            </div>
          </div>
          <div className='hidden sm:flex items-center space-x-4'>
            <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
            <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
            <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopHeader;