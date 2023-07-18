import { useNavigate } from "react-router-dom";

export default function Landing() {
  const Navigate = useNavigate();
  return (
    <>
      <p>Ini Landing Page</p>
      <button onClick={() => Navigate("/battle")}>Battle</button>
    </>
  );
}
