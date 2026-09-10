import "./Routines.css";

import RoutineBox from "../../components/RoutineBox/RoutineBox.jsx";

const Routines = () => {

    return (
        <>
            <RoutineBox />
            <RoutineBox />
            <RoutineBox />
            <RoutineBox />
            <RoutineBox />

            <div id="create-routine">
                <h2>+ Stwórz nową rutynę</h2>
            </div>
        </>
    )
}

export default Routines;