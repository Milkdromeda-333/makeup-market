import { useNavigate } from "react-router-dom";

export default function Logo(props) {

    const navigate = useNavigate();

    const navToHome = () => navigate("/");

    const fontSize = props.fs;

    return (
        <div className="font-brand flex justify-center items-center space-x-1 cursor-pointer" style={{ fontSize: fontSize }} onClick={navToHome}>
            <span className=""> MAKEUP</span>
            <div className="border-2 rounded-full border-yellow-400 bg-transparent grid place-items-center p-2 text-hot-pink-50">MM</div>
            <span> MARKET</span>
        </div>
    );
}