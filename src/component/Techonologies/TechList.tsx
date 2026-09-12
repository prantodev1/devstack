import type { Dispatch, SetStateAction } from "react";
import type TechDataTypes from "../../types/TechDataTypes";
import TechCard from "./TechCard";

interface TechListProps {
  technologies: TechDataTypes[];
  selectedStack: TechDataTypes[];
  setSelectedStack: Dispatch<SetStateAction<TechDataTypes[]>>;
}

const TechList = ({
  technologies,
  selectedStack,
  setSelectedStack,
}: TechListProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />
        ))}
      </div>
    </div>
  );
};

export default TechList;