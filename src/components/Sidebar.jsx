import { useContext } from "react";
import { categories } from "../constants";
import { YoutubeContext } from "../context/YoutubeContext";

const Sidebar = () => {
  // context'ten saglanan verilere erişme

  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);
  return (
    <div className="flex flex-col px-2 md:px-4 ">
      {categories.map((item) => (
        <div onClick={() => setSelectedCategory(item)} key={item.name}>
          <div
            //   eğerki ekrana bastıgımız kategori secili ise arkaplan ver
            style={{
              background: selectedCategory.name === item.name && "#2d2d2d",
            }}
            className="flex items-center gap-2 py-4 px-3 md:px-3  md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]"
          >
            <span className="max-sm:text-2xl">{item.icon}</span>
            <span className="max-sm:hidden ">{item.name}</span>
          </div>
          {/* item'in divader'degeri true ise çizgi bas */}
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
