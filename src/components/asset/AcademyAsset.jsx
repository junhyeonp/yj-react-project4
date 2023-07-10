import Academy1 from "../svg/academy1.svg";
import Academy2 from "../svg/academy2.svg";
import Academy3 from "../svg/academy3.svg";
import Academy4 from "../svg/academy4.svg";

const AcademyArray = [Academy1, Academy2, Academy3, Academy4];

export default function AcademyAsset({ num }) {
  return (
    <div className="w-16 h-16">
      <img src={AcademyArray[num - 1]} alt="academy" />
    </div>
  );
}
