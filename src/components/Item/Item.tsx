export default function Item({ name, price, rate, image }) {
  return (
    <>
      <div className="bg-white w-[20rem] rounded-xl h-[30rem] flex flex-col py-[2rem] px-[2rem] text-[1.2rem] font-medium mb-[2rem]">
        <img src={image} alt="img" className="h-[16rem] shadow-lg rounded-xl" />
        <h2 className="my-[1rem]">{name}</h2>
        <div className="flex justify-between w-full">
          <div>Price: ${price}</div>
          <div className="font-normal">Rating: {rate}</div>
        </div>
      </div>
    </>
  );
}
