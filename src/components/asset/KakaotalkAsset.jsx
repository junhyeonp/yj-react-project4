import Kakaotalck from "../png/kakaotalk.png"

export default function KakaotalkAsset() {
    return (
        <div>
            <img src={Kakaotalck} alt="Kakaotalk Logo" className="w-6 h-6 group-hover:w-10 group-hover:h-10 transition-all duration-200" />
        </div>
    )
}