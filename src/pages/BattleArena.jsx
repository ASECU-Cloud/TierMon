import BattleButton from "../components/BattleButton";

/**
 * rect = $0.getBoundingClientRect()
 *
 * function to determine where the hell is a certail position of a thing
 *
 */

export default function BattleArena() {
  return (
    <div className="h-screen bg-gradient-to-b from-sky-300 from-40% via-emerald-400 via-45% to-emerald-400 absolute inset-0">
      <p>battle Arena</p>
      {/* start template pokemon */}
      <div className="absolute top-16 right-6 bg-white rounded-md p-4 ">
        <div className="absolute h-16 w-44 bg-white text-black rounded-md p-2 grid grid-rows-2 gap-4 top-3 -left-40">
          <p>Tier </p>
          <div className="flex flex-row items-center  gap-2">
            <p>HP</p>
            <p>:</p>
            <progress className="progress progress-info w-28 " value="80" max="100"></progress>
          </div>
        </div>
        <div className="w-24 h-32 rounded ">
          <img
            src="https://placehold.co/96x128"
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
            <progress
              className="animate-pulse progress progress-error w-28"
              value="20"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="w-24 h-32 rounded ">
          <img
            src="https://placehold.co/96x128"
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
