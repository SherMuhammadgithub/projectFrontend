import React from "react";
import { useGlobalContext } from "../GlobalData/globalContext";

export default function GoalsAside({ totalGoals }) {
  const { totalBalance, goals } = useGlobalContext();

  const estimateProgress = (goal) => {
    console.warn(
      "Goal object missing 'progress'. Estimating progress based on 'amount'."
    );

    const targetCompletion = 100;
    return Math.min(targetCompletion, (totalBalance() / goal.amount) * 100); // Ensures progress doesn't exceed 100%
  };

  const categorizeGoal = (goal) => {
    const estimatedProgress = estimateProgress(goal);

    const onTrackThreshold = 75;
    const offTrackThreshold = 50;

    if (estimatedProgress >= onTrackThreshold) {
      return "On Track";
    } else if (
      estimatedProgress >= offTrackThreshold &&
      totalBalance >= goal.amount
    ) {
      return "Off Track (Funding Available)";
    } else {
      return "At Risk";
    }
  };

  const updateGoalProgress = (goalId, newProgress) => {
    console.log(`Updating progress for goal ${goalId} to ${newProgress}`);
  };

  const categorizedGoals = goals.map((goal) => ({
    title: goal.title,
    amount: goal.amount,
    description: goal.description,
    progress: categorizeGoal(goal),
  }));

  return (
    <aside>
      <div className="container border-2 shadow-2xl bg-white border-gray-300 rounded-md p-6 w-[30rem] h-80">
        <div className="header my-4 text-center relative">
          <h1 className="text-xl font-bold">Total Goals</h1>
          <div className="absolute bottom-2 right-36 h-6 w-6 text-xs rounded-full bg-green-500 text-white flex justify-center items-center">
            {totalGoals}
          </div>
        </div>
        <div
          className="grid-container mx-5 my-5 h-48 overflow-y-scroll grid grid-cols-1 gap-2 place-items-center text-white "
          style={{ scrollbarWidth: "none" }}
        >
          {categorizedGoals.map((goal) => (
            <div
              key={goal.title}
              className={`item p-4 w-72 border rounded-md shadow-2xl bg-${
                goal.progress === "On Track"
                  ? "green-500"
                  : goal.progress === "Off Track (Funding Available)"
                  ? "blue-500"
                  : goal.progress === "At Risk"
                  ? "red-500"
                  : "gray-400"
              } border-gray-300`}
            >
              <h3 className="text-lg font-semibold">{goal.progress}</h3>
              <p className="text-sm font-serif">
                {goal.title} - {goal.amount}
              </p>
              <p className="text-xs font-serif italic">{goal.description}</p>
              <div>
                <label
                  htmlFor={`progress-${goal.title}`}
                  className="font-bold text-lg"
                >
                  Estimated Progress:{" "}
                  <span className="font-medium text-lg font-serif">
                    {estimateProgress(goal)}%
                  </span>
                </label>
                <input
                  type="range"
                  id={`progress-${goal.title}`}
                  min="0"
                  max="100"
                  value={estimateProgress(goal)}
                  onChange={(e) =>
                    updateGoalProgress(goal.title, e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
