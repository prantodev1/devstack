import { FiDelete } from "react-icons/fi";
import type TechDataTypes from "../../types/TechDataTypes";

interface StackSidebarProps {
  selectedStack: TechDataTypes[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({
  selectedStack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sticky top-6">
      <div className="mb-4">
        <h2 className="font-bold text-xl text-gray-900 mb-1">Your Stack</h2>

        <p className="text-xs text-gray-400">
          {selectedStack.length}{" "}
          {selectedStack.length === 1
            ? "Technology Selected"
            : "Technologies Selected"}
        </p>
      </div>

      {selectedStack.length === 0 ? (
        <div className="text-center py-10 border border-dashed border-gray-200 rounded-2xl mt-4">
          <p className="text-xs text-gray-400 mb-2">
            No technologies selected yet.
          </p>

          <p className="text-sm font-medium text-gray-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {selectedStack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 p-3 bg-white border border-gray-100 rounded-2xl shadow-2xs"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-contain shrink-0"
                />

                <div className="min-w-0">
                  <p className="font-semibold text-sm text-gray-900 truncate">
                    {item.name}
                  </p>

                  <span className="text-[11px] text-gray-400">
                    {item.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 p-1 cursor-pointer transition-colors shrink-0"
                title="Remove item"
              >
                <FiDelete />
              </button>
            </div>
          ))}

          <div className="mt-4">
            <button
              onClick={onRemoveAll}
              className="w-full py-2.5 border border-red-200 text-red-500 hover:bg-red-50 font-medium text-sm rounded-xl transition-colors cursor-pointer"
            >
              Remove All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;