import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if(!context){
    throw Error("useworkoutContext must be used inside an workoutContextProvider");
  }

  return context;
};
