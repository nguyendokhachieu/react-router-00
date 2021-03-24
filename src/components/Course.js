import { NavLink, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import CourseItem from './CourseItem';

export default function Course(props) {
    let { path } = props.match;

    return (
        <div>
            <h3>Courses</h3>
            <div>
                <NavLink to={ `${path}/react` }>React</NavLink>
                <NavLink to={ `${path}/angular` }>Angular</NavLink>
            </div>
            <div>
                <Switch>
                    <Route path={ `${path}/:name` } component={ CourseItem }></Route>
                    <Route path={ path } render={() => <h4>Chọn khóa học</h4>}></Route>
                    <Route component={ NotFound }></Route>
                </Switch>
            </div>
        </div>
    );
}