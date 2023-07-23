import EscapeModal from "./EscapeModal";
import FightModal from "./FightModal";
import ItemModal from "./ItemModal";

export default function BattleButton() {
  return (
    <>
      <FightModal />
      <ItemModal />
      <EscapeModal />
      <div className="bg-white rounded-t-xl p-4 grid grid-cols-2 gap-4 absolute bottom-0 left-0 right-0">
        <button
          onClick={() => window.FightModal.showModal()}
          className="font-semibold hover:bg-slate-200  rounded-lg text-slate-900 text-lg"
        >
          Fight
        </button>
        <button
          onClick={() => window.ItemModal.showModal()}
          className="font-semibold hover:bg-slate-200  rounded-lg text-slate-900 text-lg"
        >
          Item
        </button>
        <button className="font-semibold hover:bg-slate-200  rounded-lg text-slate-900 text-lg">
          PDA
        </button>
        <button
          onClick={() => window.EscapeModal.showModal()}
          className="font-semibold  hover:bg-slate-200  rounded-lg text-slate-900 text-lg"
        >
          Escape
        </button>
      </div>
    </>
  );
}
