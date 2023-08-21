import { GridLoader } from "react-spinners";
import Layout from "../Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { kakaoLogin } from "../../api";
import { useEffect } from "react";

export default function KakaoConfirm() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const code = params.get("code");
    const navigate = useNavigate();

    const confirmLogin = async () => {
        if (code) {
            const status = await kakaoLogin(code);

            if (status.ok === "true") {
                navigate("/");
            }
        }
    };

    useEffect(() => {
        confirmLogin();
    }, []);

    return (
        <Layout>
            <div className="w-full min-h-[calc(100vh-360px)] flex flex-col items-center justify-center">
                <h2 className="text-3xl">카카오 로그인 진행중</h2>
                <p>잠시만 기다려 주세요. 다른 페이지로 이동하지 마세요</p>
                <div className="py-16">
                    <GridLoader />
                </div>
            </div>
        </Layout>
    );
}
