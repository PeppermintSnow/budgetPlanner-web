import icons from './Icons.js'

const Header = () => {
    return (
      <div id="header" className="container-fluid text-center p-5">
        <h1><span className="color-accent1">{icons.commentsDollar}</span> Budget Planner <span className="color-accent1">{icons.moneyBills}</span></h1>
        <p>by <a href="https://github.com/PeppermintSnow" id="github-link">@PeppermintSnow {icons.crow}</a></p>
      </div>
    );
}

export default Header;