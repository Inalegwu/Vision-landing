import { useScroll } from "framer-motion";

function App() {
  const { scrollY } = useScroll();

  return (
    <div className="w-full h-screen bg-orange-50 font-sans flex items-center justify-center">
      <h1 className="text-9xl">Vision</h1>
    </div>
  );
}

export default App;
