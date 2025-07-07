import Adoption from "@/components/Home/Adoption";
import CallToAction from "@/components/Home/CallToAction";
import OurPets from "@/components/Home/OurPets";
import SignUp from "@/components/Home/SignUp";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-x-hidden">
      <CallToAction />
      <Adoption />
      <OurPets />
      <SignUp />
    </div>
  );
}
