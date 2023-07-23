export default function Enemy() {
  return (
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
  );
}
