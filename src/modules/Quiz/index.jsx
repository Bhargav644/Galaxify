import FormPages from "../../components/form-pages";
import Planet from "../../components/planets";
import StarsModel from "../../components/stars";
import { quizWrapper } from "./style";
import Moon from "../../assets/Moon.jpeg";

const QuizModule = () => {
  return (
    <div className={quizWrapper}>
      <StarsModel />
      <div className="planet-wrapper">
        <Planet planetTexture={Moon} radius={5} />
      </div>
      <div className="form-wrapper">
        <h1>Space Travel Itinerary Preferences</h1>
        <FormPages />
      </div>
    </div>
  );
};

export default QuizModule;
