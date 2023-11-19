import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiFillBell, AiFillVideoCamera } from "react-icons/ai";

const Header = () => {
const navigate  = useNavigate()

// kullanıcı arama sonuçlarını sayfasına yönlendir
// url e arama paramtresi olarak aratılan terim ekle
  const handleSubmit =(e) =>{
    e.preventDefault()
    const text = e.target[0].value
navigate(`/results?search_query=${text}`)
  }
// path params (yol parametresi)
// www.amazon.com/ürün/60

// Query params (arama Parametreleri)
// www.youtube.com/watch?id=12&start=47


  return (
    <header className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img width={50} src="/youtube.png" alt="" />
        <h1 className="text-2xl  max-md:hidden">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}  className="flex items-center border border-gray-400 rounded-[20px]">
      <input
          className="input bg-black outline-none rounded-[20px] px-3 py-1"
          type="search"
        />
         <button className="grid place-items-center border-l px-2 h-full text-xl">
          <AiOutlineSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <div className="p-2 transition duration-500 hover:bg-gray-700 rounded-full">
        <AiFillBell size={25}/>
        </div>
        <div className="p-2 transition duration-500 hover:bg-gray-700 rounded-full">
        <AiFillVideoCamera size={25} />
        </div>
        <div className="w-9 h-9 cursor-pointer">
          <img className="rounded-full" src="https://avatars.githubusercontent.com/u/140658531?v=4"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
