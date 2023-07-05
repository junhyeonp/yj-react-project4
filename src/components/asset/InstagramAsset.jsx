import Instagram from "../png/instagram.png"

export default function InstagramAseet() {
    return (
        <div>
            <img src={Instagram} alt="Instagram Logo" className="w-6 h-6 group-hover:w-10 group-hover:h-10 transition-all duration-200" />
        </div>
    )
}