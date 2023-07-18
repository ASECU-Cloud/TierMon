export default function FightModal() {
  return (
    <dialog id="FightModal" className="modal modal-bottom sm:modal-middle backdrop-blur-[2px] ">
      <form method="dialog" className="modal-box bg-white text-slate-900">
        <div className="bg-white rounded-t-xl grid grid-cols-2 gap-4 ">
          <button
            onClick={() => alert("Attack Hit")}
            className="font-semibold hover:bg-slate-300 rounded-lg text-slate-900 text-lg"
          >
            attack1
          </button>
          <button className="font-semibold hover:bg-slate-300 rounded-lg text-slate-900 text-lg">
            attack2
          </button>
          <button className="font-semibold hover:bg-slate-300 rounded-lg text-slate-900 text-lg">
            attack3
          </button>
          <button className="font-semibold  hover:bg-slate-300 rounded-lg text-slate-900 text-lg">
            attack4
          </button>
        </div>

        <div className="modal-action ">
          <button className="btn btn-sm bg-red-700 border-none text-white">Cancel</button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
