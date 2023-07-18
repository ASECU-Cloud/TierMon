export default function BattleButton() {
  return (
    <>
      <div className="bg-white rounded-t-xl p-4 grid grid-cols-2 gap-4 absolute bottom-0 left-0 right-0">
        <button className="font-semibold hover:bg-slate-300 rounded-lg text-slate-900 text-lg">
          Fight
        </button>
        <button className="font-semibold hover:bg-slate-300 rounded-lg text-slate-900 text-lg">
          Item
        </button>
        <button className="font-semibold hover:bg-slate-300 rounded-lg text-slate-900 text-lg">
          PDA
        </button>
        <button className="font-semibold hover:bg-slate-300 rounded-lg text-slate-900 text-lg">
          Flee
        </button>
      </div>
    </>
  );
}