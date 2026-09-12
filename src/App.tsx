import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TechContainer from "./component/Techonologies/TechContainer";
import StackSidebar from "./component/Techonologies/StackSidebar";
import type TechDataTypes from "./types/TechDataTypes";
import { toast } from "react-toastify";
import TechContent from "./component/Techonologies/TechContent";
import Footer from "./component/Footer";

const fetchTechData = async (): Promise<TechDataTypes[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  const [techPromise] = useState(() => fetchTechData());
  const [selectedStack, setSelectedStack] = useState<TechDataTypes[]>([]);

  const handleRemoveFromStack = (id: number) => {
    const removedItem = selectedStack.find((item) => item.id === id);

    setSelectedStack(selectedStack.filter((item) => item.id !== id));

    if (removedItem) {
      toast.info(`${removedItem.name} removed from stack.`, {
        position: "bottom-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);

    toast.error("Cleared all technologies from stack.", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "light",
    });
  };

  return (
    <main className="w-full pb-12">
      <Navbar />
      <Hero />
      <TechContent />

      <div className="container mx-auto px-4 lg:px-8 mt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <p className="text-center py-10 font-medium">
                  Technologies Data Loading...
                </p>
              }
            >
              <TechContainer
                techPromise={techPromise}
                selectedStack={selectedStack}
                setSelectedStack={setSelectedStack}
              />
            </Suspense>
          </div>

          <div className="lg:col-span-1">
            <StackSidebar
              selectedStack={selectedStack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default App;