"use client";
import LandingPageScreen from "@/features/website/screens/LandingPageScreen";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <main>
      <LandingPageScreen />

      <div className="flex flex-col items-center justify-center gap-2 h-screen">
        <p>Atela Website</p>
        <button
          className="bg-[#C1785A] p-2 rounded-md"
          onClick={() => router.push("/admin")}
        >
          Go to Dashboard
        </button>
        <button
          className="bg-[#C1785A] p-2 rounded-md"
          onClick={() => router.push("/login")}
        >
          Go to Auth
        </button>
      </div>
    </main>
  );
};

export default HomePage;
