import Layout from "../components/Layout";
import SubTitle from "../components/SubTitle";

export default function InformationTicket({ width = "max-w-7xl" }) {
  return (
    <Layout>
      <SubTitle firstTitle="공연안내" secondTitle="티켓정보" />
      <section className="w-full flex justify-center py-16">
        <div className={`w-full flex flex-col ${width} bg-red-500`}>
          <div className="w-full space-y-16">
            <h1 className="text-4xl py-2 flex justify-center">티켓정보</h1>
          </div>
        </div>
      </section>
    </Layout>
  );
}
