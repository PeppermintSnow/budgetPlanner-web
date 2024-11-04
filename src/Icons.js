import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faCheck, faCoins, faCommentsDollar, faCreditCard, faCrow, faDeleteLeft, faFontAwesome, faMoneyBill, faMoneyBills, faMoneyCheckDollar, faPen, faPiggyBank, faReceipt, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faGithub, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

const moneyBill = <FontAwesomeIcon icon={faMoneyBill} />
const moneyBills = <FontAwesomeIcon icon={faMoneyBills} />
const commentsDollar = <FontAwesomeIcon icon={faCommentsDollar} />
const crow = <FontAwesomeIcon icon={faCrow} />
const pen = <FontAwesomeIcon icon={faPen} />
const coins = <FontAwesomeIcon icon={faCoins} />
const creditCard = <FontAwesomeIcon icon={faCreditCard} />
const receipt = <FontAwesomeIcon icon={faReceipt} />
const moneyCheckDollar = <FontAwesomeIcon icon={faMoneyCheckDollar} />
const arrowsRotate = <FontAwesomeIcon icon={faArrowsRotate} />
const deleteLeft = <FontAwesomeIcon icon={faDeleteLeft} />
const check = <FontAwesomeIcon icon={faCheck} />
const piggyBank = <FontAwesomeIcon icon={faPiggyBank} />
const sackDollar = <FontAwesomeIcon icon={faSackDollar} />
const react = <FontAwesomeIcon icon={faReact} />
const github = <FontAwesomeIcon icon={faGithub} />
const bootstrap = <FontAwesomeIcon icon={faBootstrap} />
const sass = <FontAwesomeIcon icon={faSass} />
const fontAwesome = <FontAwesomeIcon icon={faFontAwesome} />

const icons = {
        moneyBill: moneyBill, 
        moneyBills: moneyBills,
        commentsDollar: commentsDollar,
        crow: crow,
        pen: pen,
        coins: coins,
        creditCard: creditCard,
        receipt: receipt,
        moneyCheckDollar: moneyCheckDollar,
        arrowsRotate: arrowsRotate,
        deleteLeft: deleteLeft,
        check: check,
        piggyBank: piggyBank,
        sackDollar: sackDollar,
        react: react,
        github: github,
        bootstrap: bootstrap,
        sass: sass,
        fontAwesome: fontAwesome
}

export default icons;