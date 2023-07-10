import CarouselMain from "./components/CarouselMain";
import Layout from "./components/Layout";
import TitleTwoRow from "./components/TitleTwoRow";
import AcademyAsset from "./components/asset/AcademyAsset";

export default function Page() {
  return (
    <Layout>
      {/* 메인 케러셀 이미지 */}
      <div className="w-full h-screen-minus-header overflow-hidden">
        <CarouselMain />
      </div>

      {/* 그리드 3/5 2/5 */}
      <div className="py-16 w-full">
        <div className="w-full px-4">
          <div className="grid grid-cols-5 gap-16">
            {/*  공지사항 */}
            <div className="col-span-3 space-y-8">
              {/* 타이틀 */}
              <TitleTwoRow main="공지사항" sub="notice" />
              {/* 게시판 */}
              <div className="w-full flex flex-col">
                <div className="border-2 border-neutral-900 w-full flex items-center">
                  <div className="text-center w-20 aspect-square flex justify-center items-center bg-neutral-900 text-white">
                    2023
                    <br /> 05-15
                  </div>
                  <div className="px-4">
                    대구 오페라하우스 개관 20주년 이벤트
                  </div>
                </div>
              </div>

              <ul>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <li
                      key={i}
                      className="w-full flex justify-between px-1 py-3 cursor-pointer"
                    >
                      <span>
                        대구오페라하우스는 문화비 소득공제가 가능합니다.
                      </span>
                      <span>2023-06-28</span>
                    </li>
                  ))}
              </ul>
            </div>
            {/*  아카데미 */}
            <div className="col-span-2 flex flex-col space-y-8">
              <TitleTwoRow main="아카데미" sub="doh academy" />
              <p className="w-1/2">
                전문적이고 차별화 된 대구오페라하우스의 아카데미 교육프로그램을
                만나보세요
              </p>
              {/* 아이콘 4개 이미지 */}
              <div className="grid grid-cols-2 gap-6">
                {/* 1번째 아이콘 */}
                <div className="flex items-center space-x-4">
                  {/*  아이콘 */}
                  <div>
                    <AcademyAsset num={1} />
                  </div>
                  {/* 글 내용 */}
                  <div>
                    <p>아카데미 안내</p>
                    <p className="text-neutral-500">Academy</p>
                  </div>
                </div>
                {/* 2번째 아이콘 */}
                <div className="flex items-center space-x-4">
                  {/*  아이콘 */}
                  <div>
                    <AcademyAsset num={2} />
                  </div>
                  {/* 글 내용 */}
                  <div>
                    <p>아카데미 안내</p>
                    <p className="text-neutral-500">Academy</p>
                  </div>
                </div>
                {/* 3번째 아이콘 */}
                <div className="flex items-center space-x-4">
                  {/*  아이콘 */}
                  <div>
                    <AcademyAsset num={3} />
                  </div>
                  {/* 글 내용 */}
                  <div>
                    <p>아카데미 안내</p>
                    <p className="text-neutral-500">Academy</p>
                  </div>
                </div>
                {/* 4번째 아이콘 */}
                <div className="flex items-center space-x-4">
                  {/*  아이콘 */}
                  <div>
                    <AcademyAsset num={4} />
                  </div>
                  {/* 글 내용 */}
                  <div>
                    <p>아카데미 안내</p>
                    <p className="text-neutral-500">Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
