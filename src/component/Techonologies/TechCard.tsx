import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type TechDataTypes from "../../types/TechDataTypes";

interface TechCardProps {
  tech: TechDataTypes;
  selectedStack: TechDataTypes[];
  setSelectedStack: Dispatch<SetStateAction<TechDataTypes[]>>;
}

const TechCard = ({ tech, selectedStack, setSelectedStack }: TechCardProps) => {
  const isSelected = selectedStack.some((item) => item.id === tech.id);

  const handleSelectTech = () => {
    if (isSelected) {
      toast.warn(`${tech.name} is already in your stack!`, {
        position: "bottom-right",
        autoClose: 2000,
        theme: "light",
      });

      return;
    }

    setSelectedStack((prev) => [...prev, tech]);

    toast.success(
      `Congratulations! You have successfully added ${tech.name} to your stack.`,
      {
        position: "bottom-right",
        autoClose: 2000,
        theme: "light",
      },
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
      <div>
        <div className="flex justify-between items-start mb-4">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-10 h-10 object-contain"
          />

          {tech.badge && (
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              {tech.badge}
            </span>
          )}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h2>

        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          {tech.description}
        </p>

        <div className="flex justify-between items-center text-xs text-gray-500 mb-6">
          <span className="font-medium text-gray-700">{tech.category}</span>

          <span className="font-medium text-gray-700">{tech.level}</span>

          <span className="font-semibold text-amber-500 flex items-center gap-1">
            ★ {tech.rating}
          </span>
        </div>
      </div>

      <button
        onClick={handleSelectTech}
        disabled={isSelected}
        className={`w-full py-2.5 rounded-xl font-medium text-sm transition-colors ${
          isSelected
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800 cursor-pointer"
        }`}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;