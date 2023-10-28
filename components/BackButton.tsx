import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const Back = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="w-8 aspect-square grid place-items-center text-title select-none">
      <IoIosArrowBack size={20} />
    </button>
  );
};

export default Back;
