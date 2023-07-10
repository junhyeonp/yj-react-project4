import { Link } from "react-router-dom";
import FacebookAsset from "./asset/FacebookAsset";
import KakaotalkAsset from "./asset/KakaotalkAsset";
import NaverAsset from "./asset/NaverAsset";
import InstagramAseet from "./asset/InstagramAsset";

export default function LeftSide() {
  const SNS_ITEMS = [
    { icon: <FacebookAsset />, link: "https://facebook.com" },
    { icon: <KakaotalkAsset />, link: "" },
    { icon: <NaverAsset />, link: "" },
    { icon: <InstagramAseet />, link: "" },
  ];
  return (
    <div className="flex flex-col w-full space-y-6 items-center">
      {SNS_ITEMS.map(({ icon, link }, i) => (
        <Link to={link} key={i}>
          <div className="w-10 h-10 border border-neutral-300 rounded-full flex justify-center items-center group overflow-hidden">
            {icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
