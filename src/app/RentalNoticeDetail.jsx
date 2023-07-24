import { Link, useParams } from "react-router-dom";
import ButtonSlide from "../components/ButtonSlide";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import SubTitle from "../components/SubTitle";
import { useQuery } from "react-query";
import { rentalNoticeDetail, rentalNotices } from "../api";

export default function RentalNoticeDetail() {
  const { id } = useParams();
  const { data } = useQuery(["noticeDetail", id], rentalNoticeDetail);
  const { data: data2 } = useQuery("notices", rentalNotices);
  console.log(data);
  console.log("data2", data2);

  console.log(data2.notices);

  const list = data2.notices.map((item, i) => {
    if (item._id === data?.detail._id) {
      const before = data2.notices[i - 1]
        ? data2.notices[i - 1].title
        : "처음 글입니다.";
      const after = data2.notices[i + 1]
        ? data2.notices[i + 1].title
        : "마지막 글입니다.";
      const good = [before, after];
      console.log("이거", good);
      return good;
    }
  });

  console.log(list);
  return (
    <Layout>
      <SubTitle firstTitle="관리자모드" secondTitle="공지사항 상세보기" />
      <LayoutContents title="공지사항 상세보기">
        <div className="py-16 space-y-8">
          <table className="table_top w-full">
            <tbody>
              <tr>
                <td className="table_td border-l-0" colSpan={4}>
                  {data?.detail.title}
                </td>
              </tr>
              <tr>
                <td width="10%" className="table_td border-l-0">
                  작성일
                </td>
                <td width="40%" className="table_td border-l-0">
                  {data?.detail.createdAt.substr(0, 10)}
                </td>
                <td width="10%" className="table_td border-l-0">
                  조회수
                </td>
                <td width="40%" className="table_td border-l-0">
                  0
                </td>
              </tr>
              {/* 내용부분 */}
              <tr>
                <td colSpan={4} className="table_td border-l-0">
                  {data?.detail.description}
                </td>
              </tr>
              <tr>
                <td className="table_td border-l-0">이전글</td>
                <td colSpan={3} className="table_td border-l-0">
                  {list[0]}
                </td>
              </tr>
              <tr>
                <td className="table_td border-l-0">다음글</td>
                <td colSpan={3} className="table_td border-l-0">
                  {list[1]}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full flex justify-center">
            <Link to="/rental">
              <ButtonSlide text="목록" />
            </Link>
          </div>
        </div>
      </LayoutContents>
    </Layout>
  );
}
