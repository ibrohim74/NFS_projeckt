import React from "react";

import { Img, Text } from "components";

const Panel = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1080px] w-full md:px-10 sm:px-5 px-[60px]">
          <div className="flex flex-1 flex-col gap-7 h-full items-start justify-center py-7 w-full">
            <Text
              className="leading-[44.00px] max-w-[526px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtRubikSemiBold36"
            >
              Зарядные устройства для дома
            </Text>
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="leading-[24.00px] max-w-[526px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Заряжайте быстрее с нашими домашними зарядными устройствами для
                электромобилей, которые просты в установке, имеют
                интеллектуальные функции, прочны и надежны и могут заряжать
                любые электрические транспортные средства.
              </Text>
              <Text
                className="text-base text-black-900 tracking-[0.16px] w-full"
                size="txtRubikRegular16"
              >
                Установка + поддержка включены.
              </Text>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_refresh.svg"
                alt="refresh"
              />
              <Text
                className="text-light_green-700 text-xl w-auto"
                size="txtInterSemiBold20"
              >
                Узнать больше
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
            <Img
              className="h-[480px] md:h-auto object-cover rounded-bl-[40px] rounded-br-[40px] w-full"
              src="images/img_homestationinstalled.png"
              alt="homestationinst"
            />
          </div>
        </div>
      </div>
    </>
  );
};

Panel.defaultProps = {};

export default Panel;
