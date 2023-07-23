export default function FightModal() {
  return (
    <dialog id="FightModal" className="modal modal-bottom sm:modal-middle backdrop-blur-[2px] ">
      <form method="dialog" className="modal-box bg-white text-slate-900">
        <div className="bg-white rounded-t-xl grid grid-cols-2 gap-4 ">
          <button className="font-semibold hover:bg-slate-300 rounded-lg text-slate-900 text-lg">
            Glock 17
          </button>
          <button className="font-semibold hover:bg-slate-300 rounded-lg text-slate-900 text-lg">
            Head Pat
          </button>
          <button className="font-semibold hover:bg-slate-300 rounded-lg text-slate-900 text-lg">
            Tier Beam
          </button>
          <button className="font-semibold  hover:bg-slate-300 rounded-lg text-slate-900 text-lg">
            Ayyoo Attack
          </button>
        </div>

        <div className="modal-action ">
          <button className="btn btn-sm bg-error border-none text-white">Cancel</button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
