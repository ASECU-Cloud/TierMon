export default function EscapeModal() {
  return (
    <dialog id="EscapeModal" className="modal modal-bottom sm:modal-middle backdrop-blur-[2px] ">
      <form method="dialog" className="modal-box bg-white text-white">
        <div className="bg-white rounded-t-xl grid grid-cols-2 gap-4 ">
          <button
            onClick={() => alert("Player Left the battle")}
            className="p-2 font-semibold hover:bg-slate-300 rounded-lg  text-lg bg-error "
          >
            Escape Battle
          </button>
          <button className="p-2 font-semibold hover:bg-slate-300 rounded-lg  text-lg bg-success">
            Cancel
          </button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
