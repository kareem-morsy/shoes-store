import Link from 'next/link';
import styles from './styles/Footer.module.scss';
import Image  from "next/future/image";
import footerLogo from './assets/images/footerLogo.png'
import Facebook from './assets/images/face.svg'
import Twitter from './assets/images/tweter.svg'
import Instagram from './assets/images/insta.svg'
import Snapchat from './assets/images/snap.svg'
import Mastercard from './assets/images/mastercard.svg'
import Visa from './assets/images/visa.svg'
import Mada from './assets/images/mada.svg'
import Pay from './assets/images/pay.svg'
import Stc from './assets/images/stc.svg'
import Ejada from './assets/images/Ejada.png'

const FooterSection = () => {
  return (
    <>
        <footer className = {styles.footerSection}>
            <div className='container'>

                <div className='row'>

                    <div className='col-xl-4 col-md-12 col-12'>
                        <div className='footer-logo-img'>
                            <Image src={footerLogo}  alt="FooterLogo"/>
                        </div>

                        <p className='footer-intro'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص  ...</p>
                        
                        <div className='socials'>

                            <Link href = "/">
                                <a>
                                    <Facebook/>
                                </a>
                            </Link>

                            <Link href = "/">
                                <a>
                                    <Twitter/>
                                </a>
                            </Link>

                            <Link href = "/">
                                <a>
                                    <Instagram/>
                                </a>
                            </Link>

                            <Link href = "/">
                                <a>
                                    <Snapchat/>
                                </a>
                            </Link>

                        </div>

                    </div>

                    <div className='col-xl-8 col-md-12 col-12'>
                        <div className='row'>
                            <div className='col-xl-5 col-md-6 col-6'>
                                <div className='help-list'>
                                    <h4>مساعدة</h4>
                                    <ul>
                                        <li>
                                            <Link href = "/">
                                                <a>
                                                    تسجيل عميل جديد
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href = "/">
                                                <a>
                                                    متابعة سير عملك
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href = "/">
                                                <a>
                                                    الدعم والمساعدة
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href = "/">
                                                <a>
                                                    طرق الدفع
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href = "/">
                                                <a>
                                                    القوانين والسياسات
                                                </a>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>

                            </div>

                            <div className='col-xl-7 col-md-6 col-6'>
                                <div className='footer-contact'>
                                    <h4>تواصل معنا فى ...</h4>
                                    <ul>
                                        <li className='footer-contact-li'>
                                            <p>عنوان المقر</p>
                                            <span>مركز سلمي التجاري . جدة</span>
                                        </li>

                                        <li className='footer-contact-li'>
                                            <p>الهاتف</p>
                                            <Link href="tel:00(966)595180519">
                                                <a>00(966)595180519</a>
                                            </Link>

                                            <Link href="tel:00(966)507778630">
                                                <a>00(966)507778630</a>
                                            </Link>
                                        </li>

                                        <li className='footer-contact-li'>
                                            <p>البريد الالكتروني</p>
                                            <Link href="mailto:info@yourdomain.com">
                                                <a>info@yourdomain.com</a>
                                            </Link>
                                        </li>

                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>
                
                </div>

                <hr className='line'></hr>

                <div className='rights-section'>

                    <div className='rights-info'>
                        <p>Development BY</p>
                        <div className='ejada-logo'>
                            <Image src={Ejada}  alt="Ejada"/>
                        </div>
                        <p>, All Rights Reserved. I Contact</p>

                    </div>

                    <div className='sponsors'>
                        <div className='sponsor-logo'>
                            <Stc/>
                        </div>

                        <div className='sponsor-logo'>
                            <Pay />
                        </div>

                        <div className='sponsor-logo'>
                            <Mada/>
                        </div>

                        <div className='sponsor-logo'>
                            <Visa/>
                        </div>

                        <div className='sponsor-logo'>
                            <Mastercard/>
                        </div>

                    </div>

                    
                </div>



                

            </div>
        </footer>
    </>
  )
}

export default FooterSection