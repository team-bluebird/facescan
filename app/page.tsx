import Image from "next/image";

export default function Home() {
  return (
    <div>
      <img
        src="/bg/main.png"
        alt="배경"
        className="absolute inset-0 w-full h-full -z-10"
      />

      <h1 className={`font-bold text-[28px] text-center mt-40 leading-snug`}>
        나의 표정으로
        <br />
        감정을 분석하고 싶다면?
      </h1>

      <div
        className={
          "flex justify-center items-center bg-white/10 w-[234px] h-[280px] rounded-4xl mt-16 mx-auto border-white/10 border-2"
        }
      >
        <Image src={"/icon/question.png"} alt={"?"} width={126} height={140} />
      </div>

      <button
        className={`block mt-20 w-[304px] h-[50px] mx-auto bg-[#8D56FF]/80 rounded-4xl`}
      >
        <p
          className={
            "font-semibold text-lg text-center leading-none tracking-0"
          }
        >
          테스트 하기
        </p>
      </button>
    </div>
  );
}
