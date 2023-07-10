import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import LayoutTab from "../components/LayoutTab";
import SubTitle from "../components/SubTitle";

const tabLists = [
  { title: "first", children: "first element" },
  { title: "second", children: "second element" },
  { title: "third", children: "third element" },
  { title: "third", children: "third element" },
];

export default function InformationTicket() {
  return (
    <Layout>
      <SubTitle firstTitle="공연안내" secondTitle="티켓정보" />
      <LayoutContents title="티켓정보">
        {/* 탭 레이아웃 */}
        <LayoutTab tabLists={tabLists} numbers="grid-cols-4" />
      </LayoutContents>
    </Layout>
  );
}
