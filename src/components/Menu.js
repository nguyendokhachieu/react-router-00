import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (<div>
                <NavLink exact to="/" activeClassName="navLinkActive" >Home</NavLink>
                <NavLink exact to="/about" activeClassName="navLinkActive" >About</NavLink>
                <NavLink to="/course" activeClassName="navLinkActive">Course</NavLink>
                <NavLink to="/leaveme" activeClassName="navLinkActive">Leave Me</NavLink>
        </div>
    );
}