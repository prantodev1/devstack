import { use } from "react";
import type { Dispatch, SetStateAction } from "react";
import type TechDataTypes from "../../types/TechDataTypes";
import TechList from "./TechList";

interface TechContainerProps {
  techPromise: Promise<TechDataTypes[]>;
  selectedStack: TechDataTypes[];
  setSelectedStack: Dispatch<SetStateAction<TechDataTypes[]>>;
}

const TechContainer = ({
  techPromise,
  selectedStack,
  setSelectedStack,
}: TechContainerProps) => {
  const technologies = use(techPromise);

  return (
    <TechList
      technologies={technologies}
      selectedStack={selectedStack}
      setSelectedStack={setSelectedStack}
    />
  );
};

export default TechContainer;