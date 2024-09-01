import React from "react";
import Frame1 from "../../assets/manage-finances/Rectangle1.png";
import Frame2 from "../../assets/manage-finances/Rectangle2.png";
import Frame3 from "../../assets/manage-finances/Rectangle3.png";
import ManageSectionCard from "../ui/manage-section-card";
import { manageCardType } from "@/app/types/type.ds";

const manageArr: manageCardType[] = [
  {
    img: Frame1,
    title: "Individuals",
    disc: "The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank",
  },
  {
    img: Frame2,
    title: "Startups",
    disc: "The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank",
  },
  {
    img: Frame3,
    title: "Enterprises",
    disc: "The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank The most transparent and secured bank",
  },
];

export default function ManageSection() {
  return (
    <section className=" max-w-7xl bg-[#00D47E] text-[#091E42] m-auto py-3 px-3 flex flex-col items-center gap-10 rounded-2xl">
      <div className=" flex flex-col md:flex-row md:justify-between gap-5 items-center">
        <h3 className=" font-semibold text-[30px] lg:text-[55px] max-w-[752px]">
          It has never been easier to manage your finances{" "}
        </h3>

        <div className=" md:max-w-[426px] flex md:flex-col gap-4 items-start text-sm md:text-base">
          <p>
            The most transparent and secured bank The most transparent and
            secured bank The most transparent and secured bank The most
            transparent and secured bank
          </p>
          <button className=" bg-[#024751] w-max min-w-[108px] rounded-lg text-white p-3">
            Get started
          </button>
        </div>
      </div>

      <div className=" flex gap-3 flex-wrap md:flex-nowrap justify-center">
        {
          manageArr.map((e,i) => {
            return (
              <ManageSectionCard e={e} key={i}/>
            )
          })
        }
      </div>
    </section>
  );
}
