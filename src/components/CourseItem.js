export default function CourseItem(props) {
    let { name } = props.match.params;
    return (
        <h5>CourseItem: { name }</h5>
    );
}