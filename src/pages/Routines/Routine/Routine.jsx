import { useParams } from "react-router-dom";

const Routine = () => {
    const { id } = useParams();

    return (
        <>
            <h1>Trening:{id}</h1>

            <ul>
                <li>Routine 1</li>
                <li>Routine 2</li>
                <li>Routine 3</li>
            </ul>
        </>
    )
}

export default Routine;