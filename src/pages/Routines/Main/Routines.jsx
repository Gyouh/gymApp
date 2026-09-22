import "./Routines.css";
import { useNavigate } from 'react-router-dom';
import { exercisesData } from "../Routine/Routine.jsx"; 


import RoutineBox from "../../../components/RoutineBox/RoutineBox.jsx";

const Routines = () => {
const navigate = useNavigate();
    return (
        <>
            <RoutineBox onClick={() => navigate('/routine/push')} title="Push" exercisesCount={exercisesData.upper.length}  />
            <RoutineBox onClick={() => navigate('/routine/pull')} title="Pull" exercisesCount={exercisesData.pull.length} />
            <RoutineBox onClick={() => navigate('/routine/legs')} title="Legs" exercisesCount={exercisesData.legs.length} />
            <RoutineBox onClick={() => navigate('/routine/upper')} title="Upper" exercisesCount={exercisesData.upper.length} />
            <RoutineBox onClick={() => navigate('/routine/lower')} title="Lower" exercisesCount={exercisesData.lower.length} />

            <div id="create-routine">
                <h2>+ Stwórz nową rutynę</h2>
            </div>
        </>
    )
}

export default Routines;