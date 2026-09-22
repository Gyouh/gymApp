import { useParams } from "react-router-dom";
import "./Routine.css";

export const exercisesData = {
    push: [
        { name: "Single Arm Lateral Raise (Cable)", sets: 2, reps: "5" },
        { name: "Single Arm Triceps Pushdown (Cable)", sets: 2, reps: "7 - 8" },
        { name: "Shoulder Press (Machine Plates)", sets: 2, reps: "5 - 8" },
        { name: "Incline Bench Press (Smith Machine)", sets: 2, reps: "4 - 6" },
        { name: "Chest Fly (Machine)", sets: 2, reps: "7 - 8" },
        { name: "Preacher Curl (Dumbbell)", sets: 2, reps: "5" },
        { name: "Lat Pulldown (Cable)", sets: 2, reps: "4" },
        { name: "T-bar Row", sets: 2, reps: "8" },
        { name: "Seated Cable Row - V Grip (Cable)", sets: 2, reps: "6" }
    ],
    pull: [
        { name: "Preacher Curl (Dumbbell)", sets: 2, reps: "4 - 7", note: "Unilateral (jednorącz)" },
        { name: "Hammer Curl (Dumbbell)", sets: 2, reps: "6 - 8" },
        { name: "Reverse Fly Single Arm (Cable)", sets: 2, reps: "7" },
        { name: "Lat Pulldown (Cable)", sets: 2, reps: "4", note: "Proste plecy, łopatki spięte, do brody" },
        { name: "T-bar Row", sets: 2, reps: "6 - 9", note: "Szeroki chwyt, 90° łapy" },
        { name: "Seated Cable Row - V Grip (Cable)", sets: 2, reps: "8" },
        { name: "Forearm Meow Meow", sets: 2, reps: "8 - 12" },
        { name: "Romanian Deadlift (Smith Machine)", sets: 2, reps: "8 - 10" }
    ],
    upper: [
        { name: "Preacher Curl (Dumbbell)", sets: 2, reps: "5" },
        { name: "Single Arm Triceps Pushdown (Cable)", sets: 2, reps: "7 - 8" },
        { name: "Chest Fly (Machine)", sets: 2, reps: "7 - 8" },
        { name: "Incline Bench Press (Smith Machine)", sets: 2, reps: "4 - 6" },
        { name: "Lat Pulldown (Cable)", sets: 2, reps: "4" },
        { name: "T-bar Row", sets: 2, reps: "8" },
        { name: "Seated Cable Row - V Grip (Cable)", sets: 2, reps: "6" },
        { name: "Single Arm Lateral Raise (Cable)", sets: 2, reps: "5" },
        { name: "Shoulder Press (Machine Plates)", sets: 2, reps: "5 - 8" }
    ],
    legs: [
        { name: "Reverse Fly Single Arm (Cable)", sets: 2, reps: "7" },
        // Wspólne ćwiczenia (lower / legs):
        { name: "Cable Crunch", sets: 2, reps: "brak danych" }, 
        { name: "Leg Extension (Machine)", sets: 2, reps: "10" },
        { name: "Hip Adduction (Machine)", sets: 2, reps: "12" },
        { name: "Squat (Machine)", sets: 2, reps: "brak danych" }
    ],
    lower: [
        { name: "Reverse Curl (Cable)", sets: 2, reps: "4 - 8" },
        { name: "Forearm Meow Meow", sets: 2, reps: "10" },
        { name: "Romanian Deadlift (Barbell)", sets: 2, reps: "3 - 6" },
        // Wspólne ćwiczenia (lower / legs):
        { name: "Cable Crunch", sets: 2, reps: "brak danych" },
        { name: "Leg Extension (Machine)", sets: 2, reps: "10" },
        { name: "Hip Adduction (Machine)", sets: 2, reps: "12" },
        { name: "Squat (Machine)", sets: 2, reps: "brak danych" }
    ]
};



const Routine = () => {
    const { id } = useParams();

    const currentExercises = exercisesData[id] || [];

    return (
        <>
            <h1>Trening: {id.charAt(0).toUpperCase() + id.slice(1)}</h1>

            {currentExercises.length === 0 ? (<p>Nie znaleziono takiego treningu.</p>) : 
            (
                currentExercises.map((exercise, index) => (
                    <ul key={index}>
                        <li><strong>{exercise.name}</strong></li>
                        <li>{exercise.sets} sets | {exercise.reps} reps</li>
                    </ul>
                ))
            )}

        </>
    )
}

export default Routine;