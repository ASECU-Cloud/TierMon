import BattleButton from "../components/BattleButton";
import happy_shock from "../assets/happy_shock.png";
import tier_shock from "../assets/tier_shock.png";

export default function BattleArena() {
  return (
    <div className="h-screen bg-slate-400 ">
      <p>battle Arena</p>
      {/* start template pokemon */}
      <div className="absolute top-16 right-6 bg-white rounded-md p-4 ">
        <div className="absolute h-16 w-44 bg-white text-black rounded-md p-2 grid grid-rows-2 gap-4 top-3 -left-40">
          <p>Tier </p>
          <div className="flex flex-row items-center  gap-2">
            <p>HP</p>
            <p>:</p>
            <progress className="progress progress-info w-28" value="80" max="100"></progress>
          </div>
        </div>
        <div className="w-24 rounded ">
          <img
            src={happy_shock}
            className="rounded-md object-contain w-full h-full"
            alt="Tier Shock"
          />
        </div>
      </div>
      {/* end template pokemon */}
      {/* start template pokemon */}
      <div className="absolute bottom-32 left-6 bg-white rounded-md p-4 ">
        <div className="absolute h-16 w-44 bg-white text-black rounded-md p-2 grid grid-rows-2 gap-4 bottom-20 left-28">
          <p>Tier </p>
          <div className="flex flex-row items-center  gap-2">
            <p>HP</p>
            <p>:</p>
            <progress className="progress progress-info w-28" value="10" max="100"></progress>
          </div>
        </div>
        <div className="w-24 rounded ">
          <img
            src={tier_shock}
            className="rounded-md object-contain w-full h-full"
            alt="Tier Shock"
          />
        </div>
      </div>
      {/* end template pokemon */}
      <BattleButton />
    </div>
  );
}
