import Image from "next/image";

import MainBtn from "@/components/btn/MainBtn";

const scoreList = {
  happy: "☺️ 행복지수",
  tired: "😟 피로지수",
  mope: "😢 우울지수",
};

export default function Result() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <img
        src="/bg/sub.png"
        alt="배경2"
        className="absolute inset-0 -z-10 mx-auto h-full min-h-[813px] max-w-xl object-contain"
      />
      <h1
        className={`mx-auto mt-29 w-[304px] text-center text-[28px] leading-[39.2px] font-bold tracking-[-0.56px]`}
      >
        나의 행복 랭킹은 1위!
      </h1>

      <section
        className={
          "mx-auto mt-[26px] flex h-[440px] w-[304px] flex-col items-center rounded-4xl border-2 border-white/10 bg-white/10 px-6 pt-9 pb-8"
        }
      >
        <div className="relative aspect-square h-36 w-36 overflow-hidden rounded-full">
          <Image
            src={"/zubin.webp"}
            alt={"person"}
            fill
            className="object-cover"
          />
        </div>

        <h2 className={"mt-5 text-2xl leading-[33.6px] font-semibold"}>
          이주빈
        </h2>

        <hr className="mt-5 w-full border-t-2 border-white/20" />
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-[14px]">
          {Object.entries(scoreList).map(([key, label]) => (
            <div
              key={key}
              className="mb-2 flex w-full items-center justify-between text-white/90"
            >
              <span className="text-base">{label}</span>
              <div className="flex items-center justify-center gap-2.5">
                <span className="text-base font-semibold">92점</span>
                <span className="flex h-7 w-[35px] items-center justify-center rounded-[10px] bg-[#9562FF] pr-0.5 text-sm leading-[19.6px] tracking-[-0.28px]">
                  1위
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MainBtn className={"mt-10"}>다시 도전하기</MainBtn>
    </main>
  );
}
