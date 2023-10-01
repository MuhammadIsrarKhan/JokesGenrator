import { useState } from "react";
import InputField from "./InputField";

const JokesGenerator = () => {
  const [joke, setJoke] = useState("");
  let question;
  let answer;
  if (joke) {
    const QuestionAndAnswer = joke.split("\n\n");

    // The first part (index 0) will be the question, and the second part (index 1) will be the answer
    question = QuestionAndAnswer[0];
    answer = QuestionAndAnswer[1];
  }
  return (
    <>
      <InputField setJoke={setJoke} />
      {joke && (
        <div class="bg-[#D0E7F7] px-10 py-10 mt-3 font-RobotoMono max-w-[800px] mx-3">
          <div class="flex gap-2">
            <span>Q:</span> <p> {question}</p>
          </div>
          <div class="flex gap-2">
            <span>A:</span> <p> {answer}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default JokesGenerator;
