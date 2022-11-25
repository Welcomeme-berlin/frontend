import List from "./List";
const Planoffer = ({ offers }) => {
  return (
    <div>
      <div className="w-full max-w-[578px] h-[80px] bg-slate-100 text-center font-bold pt-6">
        <p>{offers.Type}</p>
      </div>
      {offers.parts.map((part) => {
        return (
          <div className="flex text-xl w-[500px]">
            <div>
              <part.IconTitle />
            </div>
            <div className="w-100%">
              <h3>{part.title}</h3>
              <List items={part.details} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Planoffer;
