import "./RoutineBox.css";

const RoutineBox = ( { onClick, title, exercisesCount  } ) => {

    return (
        <div onClick={onClick} tabIndex={0}>
            <ul>
                <li><h1>{title}</h1></li>
                <li>{exercisesCount} ćwiczeń - Ostatnio: X dni temu</li>
            </ul>
        </div>
    )
}

export default RoutineBox;