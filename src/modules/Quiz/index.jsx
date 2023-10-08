import FormPages from "../../components/form-pages";
import { quizWrapper } from "./style";

const QuizModule = () => {
  return (
    <div className={quizWrapper}>
      <h1>Space Travel Itinerary Preferences</h1>
      <FormPages />
    </div>
  );
};

export default QuizModule;
