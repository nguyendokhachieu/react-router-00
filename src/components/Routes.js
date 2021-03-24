import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Course from './Course';
import LeaveMe from './LeaveMe';
import NotFound from './NotFound';

export default function Routes(props) {
    return (<div>
        <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route exact path="/about" component={ About }></Route>
            <Route exact path="/leaveme" component={ LeaveMe }></Route>
            <Route path="/course" component={ Course }></Route>
            <Route component={ NotFound }></Route>
        </Switch>
    </div>);
}