import "./Routines.css";
import { useNavigate } from 'react-router-dom';


import RoutineBox from "../../../components/RoutineBox/RoutineBox.jsx";

const Routines = () => {
const navigate = useNavigate();
    return (
        <>
            <RoutineBox onClick={() => navigate('/routine/push')} title="Push" />
            <RoutineBox onClick={() => navigate('/routine/pull')} title="Pull" />
            <RoutineBox onClick={() => navigate('/routine/legs')} title="Legs" />
            <RoutineBox onClick={() => navigate('/routine/shoulders')} title="Shoulders" />
            <RoutineBox onClick={() => navigate('/routine/chest')} title="Chest" />

            <div id="create-routine">
                <h2>+ Stwórz nową rutynę</h2>
            </div>
        </>
    )
}

export default Routines;