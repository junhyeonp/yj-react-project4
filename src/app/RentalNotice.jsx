import AdminButton from "../components/AdminButton";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import SubTitle from "../components/SubTitle";
import TableRentalNotice from "../components/TableRentalNotice";

export default function RentalNotice() {
  return (
    <Layout>
      <SubTitle firstTitle="공간대관안내" secondTitle="티켓정보" />
      <LayoutContents title="공지사항">
        <div className="space-y-6">
          {/* 검색바 */}
          {/* 게시판 */}
          <TableRentalNotice />
          {/* 글쓰기 버튼 */}
          <AdminButton href="/rental/notice-write" />
        </div>
      </LayoutContents>
    </Layout>
  );
}
