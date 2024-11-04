import icons from './Icons.js'

const Footer = () => {
  return (
    <div id="footer" className="container-fluid text-center mt-5 p-3">
      <p>Budget Planner by <a className="footer-link" href="https://github.com/PeppermintSnow">@PeppermintSnow {icons.crow}</a></p>
      <p>Made with <a className="footer-link" href="https://react.dev">{icons.react} React</a> | <a className="footer-link" href="https://getbootstrap.com/">{icons.bootstrap} Bootstrap</a> | <a className="footer-link" href="https://sass-lang.com/">{icons.sass} SASS</a></p>
      <p>Icons by <a className="footer-link" href="https://fontawesome.com/">{icons.fontAwesome} FontAwesome</a> - <a className="footer-link" href="https://github.com/PeppermintSnow/budgetPlanner-web">{icons.github} Code Repository</a></p>
    </div>
  )
}

export default Footer;