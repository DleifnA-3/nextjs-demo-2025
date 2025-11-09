import { AiOutlineProduct } from "react-icons/ai";

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-2 h-[124px]"
    style={{
    background: "linear-gradient(175deg, #001A6E 20%, #074799 50%, #009990 100%)",
    color: "white",
    border: "none",
  }}>
      <AiOutlineProduct fontSize="40px" color="#E7F2EF"  />
      <span className="text-4xl font-bold text-center" style={{ color: "#E7F2EF" }}>Product</span>
    </div>
  );
}
