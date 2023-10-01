import JokesGeneratorImage from "../assets/images/jokeGenrator.png";
const Footer = () => {
  return (
    <div className="border border-t-[2px] border-x-0 border-b-0 py-4 my-4 fixed bottom-0 w-[calc(100%-150px)] flex flex-col items-center justify-center">
      <img
        src={JokesGeneratorImage}
        alt="quotes genrator app"
        class="w-14 h-14 "
      />
      <p className="font-RobotoMono font-medium">Copyright © Jokes Generator 2023</p>
    </div>
  );
};

export default Footer;
