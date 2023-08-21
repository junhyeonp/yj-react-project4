import { AiOutlineEnter, AiOutlineUser } from "react-icons/ai";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import ButtonSlide from "../components/ButtonSlide";
import KakaotalkAsset from "../components/asset/KakaotalkAsset";
import FacebookAsset from "../components/asset/FacebookAsset";
import NaverAsset from "../components/asset/NaverAsset";
import InstagramAseet from "../components/asset/InstagramAsset";
import { useForm } from "react-hook-form";
// 리액트쿼리: 백엔드로 값을 보낼 때 사용, useMutation: POST 방식
import { useMutation } from "react-query";
import { userSignIn } from "../api";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
    // mode defalut 값은 onClick
    // register: 각각의 요소에 접근할 수 있음
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const navigate = useNavigate();

    // data는 백엔드에서 보내는 res를 받을 수 있음
    const { data, mutate } = useMutation(userSignIn, {});
    if (data?.ok === "false") {
        console.log("로그인 에러");
    }

    if (data?.ok === "true") {
        navigate("/");
    }

    const onSubmit = (data) => {
        console.log(data);
        mutate(data);
    };

    return (
        <Layout>
            <LayoutContents>
                <div className="w-full flex justify-center">
                    <div className="w-[400px]">
                        <h1 className="text-3xl py-4 border-b-2 border-neutral-700">
                            회원정보 입력
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* 아이디 */}
                            <div className="relative w-full border-b border-neutral-300">
                                <input
                                    {...register("username", {
                                        required:
                                            "아이디는 필수 입력항목입니다.",
                                        minLength: {
                                            value: 6,
                                            message:
                                                "아이디는 6자이상 입력해야 합니다.",
                                        },
                                    })}
                                    type="text"
                                    placeholder="회원아이디"
                                    className="focus:outline-none w-full py-8 border-0"
                                />
                                <div className="absolute right-0 top-[50%] -translate-y-[50%]">
                                    <AiOutlineUser />
                                </div>
                                {/* 아이디 에러발생 */}
                                <div className="text-red-500 tex-sm">
                                    {errors?.username?.message}
                                </div>
                            </div>
                            {/* 패스워드 */}
                            <div className="relative w-full border-b border-neutral-300">
                                <input
                                    //아래의 password는 input 태그의 name 속성과 같음
                                    {...register("password", {
                                        required:
                                            "패스워드는 필수 입력항목입니다.",
                                    })}
                                    type="password"
                                    placeholder="비밀번호"
                                    className="focus:outline-none w-full py-8 border-0"
                                />
                                <div className="absolute right-0 top-[50%] -translate-y-[50%]">
                                    <AiOutlineEnter />
                                </div>
                            </div>
                            {/* 패스워드 에러발생 */}
                            <div className="text-red-500 tex-sm">
                                {errors?.password?.message}
                            </div>
                            {/* 버튼 */}
                            <div className="w-full py-8">
                                <ButtonSlide text="login" pHeight="4" />
                            </div>
                        </form>
                        {/* 구분선 */}
                        <div className="relative w-full justify-center flex h-[1px] bg-neutral-300">
                            <div className="absolute bg-white px-2 -top-3">
                                Or Login With
                            </div>
                        </div>
                        {/* 회원가입, 아이디찾기, 비밀번호찾기 */}
                        <div className="flex justify-center w-full space-x-2 my-8">
                            <Link
                                to={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`}
                            >
                                <div>
                                    <KakaotalkAsset />
                                </div>
                            </Link>
                            <div>
                                <FacebookAsset />
                            </div>
                            <div>
                                <NaverAsset />
                            </div>
                            <div>
                                <InstagramAseet />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutContents>
        </Layout>
    );
}
