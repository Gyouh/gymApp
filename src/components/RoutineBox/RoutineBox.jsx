import "./RoutineBox.css";

const RoutineBox = ( { onClick } ) => {

    return (
        <div onClick={onClick} tabIndex={0}>
            <ul>
                <li><h1>Push</h1></li>
                <li>5 ćwiczeń - Ostatnio: 2 dni temu</li>
            </ul>
        </div>
    )
}

export default RoutineBox;