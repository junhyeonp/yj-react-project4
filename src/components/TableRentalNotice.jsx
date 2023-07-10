export default function TableRentalNotice({ data }) {
  return (
    <div className="w-full grid py-16">
      <div className="grid grid-cols-12 py-4 text-center bg-neutral-100 border-t-2 border-b-0.5 border-neutral-500">
        <div>No</div>
        <div className="col-span-7">제목</div>
        <div className="col-span-2">작성자</div>
        <div className="col-span-2">작성일</div>
      </div>
      <div>
        <div className="grid grid-cols-12 py-4 text-center border-b border-neutral-100 cursor-pointer">
          <div>No</div>
          <div className="col-span-7">제목</div>
          <div className="col-span-2">작성자</div>
          <div className="col-span-2">작성일</div>
        </div>
      </div>
    </div>
  );
}
