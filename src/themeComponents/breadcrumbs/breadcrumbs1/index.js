import Link from "next/link"
import style from './styles/BreadCramb.module.scss'
import LeftArrow from './assets/images/left-arrow.svg'
import { FormattedMessage } from 'react-intl';


const BreadCramb = ({pageName}) => {
  return (
    <>

        <div className={style.breadCramb}>
            <div className="container">
                <div className="breadCramb-content">
                    
                    <ul className="bread-links">

                        <li>
                            <Link href='/'>
                                <a><FormattedMessage id="home"/></a>
                            </Link>
                        </li>

                        <li>
                            <span>
                               /
                            </span>
                        </li>
                        

                        <li className="breadtitle">{pageName}</li>

                       
                    </ul>
                </div>
            </div>
        </div>

    </>
  )
}

export default BreadCramb