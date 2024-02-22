import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed md:absolute -z-10">
        <img 
        className="h-auto w-screen object-cover"
        src={BG_URL}
        alt="logo" 
        />
      </div>
      <div className="bg-black md:bg-none">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;


       