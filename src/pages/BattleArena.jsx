import BattleButton from "../components/BattleButton";
import Enemy from "../components/tiermon/Enemy";
import Player from "../components/tiermon/Player";

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
      <Enemy />
      <Player />
      <BattleButton />
    </div>
  );
}
