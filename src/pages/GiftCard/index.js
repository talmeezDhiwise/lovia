import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { List } from "components/List";
import { Input } from "components/Input";
import { Line } from "components/Line";

const GiftCardPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins items-start justify-start mx-[auto] w-[100%]"
        compId="860:2114"
        comWidth={1920}
        comHeight={2423}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="193"
          comWidth={1920}
          comHeight={120}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Row
            className="bg-gray_50 items-center justify-start w-[100%]"
            compId="860:2207"
            comWidth={1920}
            comHeight={120}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[5%]"
              compId="860:2213"
              comWidth={96}
              comHeight={54}
              compLeft={150}
              compRight={0}
              compType="Text"
            >{`Lovia`}</Text>
            <Row
              className="items-center justify-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[411px] ml-[457px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] w-[27%]"
              compId="1031"
              comWidth={515}
              comHeight={27}
              compLeft={457}
              compRight={0}
              compType="Row"
            >
              <Text
                className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[16%]"
                compId="860:2208"
                comWidth={80}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Products`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[20%]"
                compId="860:2209"
                comWidth={101}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`New Arrival`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[8%]"
                compId="860:2210"
                comWidth={40}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`Blog`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[10%]"
                compId="860:2211"
                comWidth={54}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`About`}</Text>
            </Row>
            <Column
              className="items-start lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] lg:ml-[206px] xl:ml-[236px] 2xl:ml-[265px] 3xl:ml-[318px] ml-[354px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[5%]"
              compId="1025"
              comWidth={100}
              comHeight={36}
              compLeft={354}
              compRight={0}
              compType="Column"
            >
              <div
                className="bg-red_300 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px] w-[8px]"
                compId="860:2224"
                comWidth={8}
                comHeight={8}
                compLeft={10}
                compRight={0}
                compType="View"
              ></div>
              <Column
                className="items-start w-[100%]"
                compId="1034"
                comWidth={100}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_icon_5.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] 2xl:mr-[3px] mr-[4px] object-contain w-[96%]"
                  compId="860:2214"
                  comWidth={96}
                  comHeight={32}
                  compLeft={0}
                  compRight={4}
                  compType="Image"
                  alt="icon"
                />
              </Column>
            </Column>
            <Image
              src={"images/img_menu.svg"}
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[66px] lg:my-[25px] xl:my-[29px] 2xl:my-[33px] 3xl:my-[39px] my-[44px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
              compId="860:2222"
              comWidth={32}
              comHeight={32}
              compLeft={66}
              compRight={0}
              compType="Image"
              alt="Menu"
            />
          </Row>
        </header>
        <Stack
          className="lg:h-[213px] xl:h-[244px] 2xl:h-[274px] 3xl:h-[329px] h-[365px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] mx-[auto] w-[84%]"
          compId="1028"
          comWidth={1620}
          comHeight={365}
          compLeft={150}
          compRight={150}
          compType="Stack"
        >
          <Image
            src={"images/img_image_15.png"}
            className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-cover top-[0] w-[100%]"
            compId="872:811"
            comWidth={1620}
            comHeight={336}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="image"
          />
          <Column
            className="absolute items-start justify-start left-[10%] top-[27%] w-[39%]"
            compId="1020"
            comWidth={627.69995}
            comHeight={142}
            compLeft={156.9}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_50 text-left w-[42%]"
              compId="872:816"
              comWidth={261.5}
              comHeight={54}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`My Gift`}</Text>
            <Text
              className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
              compId="872:817"
              comWidth={627.6}
              comHeight={64}
              compLeft={0.1}
              compRight={0}
              compType="Text"
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`}</Text>
          </Column>
          <Row
            className="absolute bg-gray_50 bottom-[0] items-center justify-center left-[10%] shadow-bs w-[12%]"
            compId="1011"
            comWidth={192}
            comHeight={59}
            compLeft={157}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[28%]"
              compId="872:819"
              comWidth={54}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`Home`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[6%]"
              compId="872:820"
              comWidth={11}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`>`}</Text>
            <Text
              className="font-medium xl:m-[10px] 2xl:m-[12px] 3xl:m-[14px] m-[16px] lg:m-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[33%]"
              compId="872:821"
              comWidth={63}
              comHeight={27}
              compLeft={16}
              compRight={16}
              compType="Text"
            >{`My Gift`}</Text>
          </Row>
        </Stack>
        <Column
          className="items-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
          compId="1033"
          comWidth={1920}
          comHeight={68}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-start xl:mx-[100px] 2xl:mx-[112px] 3xl:mx-[135px] mx-[150px] lg:mx-[87px] w-[56%]"
            compId="884:507"
            comWidth={1081}
            comHeight={68}
            compLeft={150}
            compRight={150}
            compType="Row"
          >
            <Button
              className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 w-[6%]"
              compId="191"
              comWidth={60}
              comHeight={68}
              compLeft={0}
              compRight={0}
              compType="Button"
            >{`All`}</Button>
            <Button
              className="bg-gray_301 font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[14%]"
              compId="190"
              comWidth={147}
              comHeight={68}
              compLeft={32}
              compRight={0}
              compType="Button"
            >{`Shopping`}</Button>
            <Button
              className="bg-gray_301 font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[13%]"
              compId="189"
              comWidth={145}
              comHeight={68}
              compLeft={32}
              compRight={0}
              compType="Button"
            >{`Hair Care`}</Button>
            <Button
              className="bg-gray_301 font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[15%]"
              compId="188"
              comWidth={160}
              comHeight={68}
              compLeft={32}
              compRight={0}
              compType="Button"
            >{`Cosmetics`}</Button>
            <Button
              className="bg-gray_301 font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[11%]"
              compId="187"
              comWidth={119}
              comHeight={68}
              compLeft={32}
              compRight={0}
              compType="Button"
            >{`Partner`}</Button>
            <Button
              className="bg-gray_301 font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[10%]"
              compId="186"
              comWidth={113}
              comHeight={68}
              compLeft={32}
              compRight={0}
              compType="Button"
            >{`Lottery`}</Button>
            <Button
              className="bg-gray_301 font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[13%]"
              compId="185"
              comWidth={145}
              comHeight={68}
              compLeft={32}
              compRight={0}
              compType="Button"
            >{`Skin Care`}</Button>
          </Row>
        </Column>
        <List
          className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 min-h-[auto] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] 2xl:mr-[111px] 3xl:mr-[134px] mr-[149px] lg:mr-[86px] xl:mr-[99px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[84%]"
          compId="884:522"
          comWidth={1621}
          comHeight={479}
          compLeft={150}
          compRight={149}
          compType="List"
          orientation="horizontal"
        >
          <Column
            className="shadow-bs1 w-[100%]"
            compId="882:464"
            comWidth={519}
            comHeight={479}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <div
              className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] w-[100%]"
              compId="882:467"
              comWidth={519}
              comHeight={318}
              compLeft={0}
              compRight={0}
              compType="View"
            ></div>
            <Column
              className="bg-gray_50 items-center justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
              compId="1022"
              comWidth={519}
              comHeight={161}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium mx-[auto] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 text-left w-[51%]"
                compId="882:470"
                comWidth={264}
                comHeight={54}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Skin Care Gifts`}</Text>
              <Text
                className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[32%]"
                compId="882:471"
                comWidth={168}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Expired 31 Dec 2021`}</Text>
            </Column>
          </Column>
          <Column
            className="shadow-bs1 w-[100%]"
            compId="884:493"
            comWidth={519}
            comHeight={479}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <div
              className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] w-[100%]"
              compId="884:496"
              comWidth={519}
              comHeight={318}
              compLeft={0}
              compRight={0}
              compType="View"
            ></div>
            <Column
              className="bg-gray_50 items-center justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
              compId="1023"
              comWidth={519}
              comHeight={161}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium mx-[auto] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 text-left w-[47%]"
                compId="884:498"
                comWidth={245}
                comHeight={54}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Custom Bags`}</Text>
              <Text
                className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[32%]"
                compId="884:499"
                comWidth={168}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Expired 31 Dec 2021`}</Text>
            </Column>
          </Column>
          <Column
            className="shadow-bs1 w-[100%]"
            compId="884:500"
            comWidth={519}
            comHeight={479}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <div
              className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] w-[100%]"
              compId="884:503"
              comWidth={519}
              comHeight={318}
              compLeft={0}
              compRight={0}
              compType="View"
            ></div>
            <Column
              className="bg-gray_50 items-center justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
              compId="1024"
              comWidth={519}
              comHeight={161}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium mx-[auto] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 text-left w-[50%]"
                compId="884:505"
                comWidth={262}
                comHeight={54}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Gift Certificate`}</Text>
              <Text
                className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[32%]"
                compId="884:506"
                comWidth={168}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Expired 31 Dec 2021`}</Text>
            </Column>
          </Column>
        </List>
        <Column
          className="bg-teal_200 items-start justify-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[84%]"
          compId="1014"
          comWidth={1620}
          comHeight={245}
          compLeft={150}
          compRight={150}
          compType="Column"
        >
          <Image
            src={"images/img_ornament_1.svg"}
            className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] object-contain opacity-op5 w-[6%]"
            compId="884:541"
            comWidth={104}
            comHeight={56}
            compLeft={17}
            compRight={17}
            compType="Image"
            alt="ornament"
          />
          <Column
            className="w-[100%]"
            compId="1035"
            comWidth={1620}
            comHeight={115}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start w-[100%]"
              compId="1013"
              comWidth={1620}
              comHeight={115}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_newsletter.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] 2xl:mb-[6px] 3xl:mb-[8px] mb-[9px] ml-[106px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[95px] mt-[10px] 2xl:mt-[7px] 3xl:mt-[9px] lg:my-[5px] xl:my-[6px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="884:557"
                comWidth={96}
                comHeight={96}
                compLeft={106}
                compRight={0}
                compType="Image"
                alt="Newsletter"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[32%]"
                compId="884:565"
                comWidth={522}
                comHeight={115}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[91%]"
                  compId="884:566"
                  comWidth={475}
                  comHeight={59}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Join our Newsletter`}</Text>
                <Text
                  className="font-normal font-poppins lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                  compId="884:567"
                  comWidth={522}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Get the latest news of our new releases, sales, and promo!`}</Text>
              </Column>
              <Stack
                className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] ml-[232px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[32%]"
                compId="1030"
                comWidth={526}
                comHeight={76}
                compLeft={232}
                compRight={0}
                compType="Stack"
              >
                <Input
                  className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_700 text-gray_700 text-left tracking-ls1 w-[100%]"
                  compId="194"
                  comWidth={526}
                  comHeight={76}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group194"
                  placeholder={`Enter your email`}
                ></Input>
                <Button
                  className="absolute bg-teal_200 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                  compId="192"
                  comWidth={105}
                  comHeight={60}
                  compLeft={0}
                  compRight={8}
                  compType="Button"
                >{`Join`}</Button>
              </Stack>
            </Row>
          </Column>
          <Column
            className="items-end 3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] w-[100%]"
            compId="1036"
            comWidth={1620}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_ornament_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mx-[31px] xl:mx-[36px] 2xl:mx-[40px] 3xl:mx-[48px] mx-[54px] object-contain opacity-op5 w-[6%]"
              compId="884:525"
              comWidth={104}
              comHeight={56}
              compLeft={54}
              compRight={54}
              compType="Image"
              alt="ornament"
            />
          </Column>
        </Column>
        <footer
          className="xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="884:568"
          comWidth={1920}
          comHeight={585}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-gray_900 items-center justify-end w-[100%]"
            compId="1018"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
              compId="1017"
              comWidth={1920}
              comHeight={237}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] w-[46%]"
                compId="1032"
                comWidth={879}
                comHeight={217}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] w-[43%]"
                  compId="884:570"
                  comWidth={381}
                  comHeight={196}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[25%]"
                    compId="884:571"
                    comWidth={96}
                    comHeight={54}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Lovia`}</Text>
                  <Text
                    className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="884:572"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Image
                    src={"images/img_sosmedia_5.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[44%]"
                    compId="884:578"
                    comWidth={168}
                    comHeight={40}
                    compLeft={0}
                    compRight={10}
                    compType="Image"
                    alt="sosmedia"
                  />
                </Column>
                <Column
                  className="font-montserrat items-start justify-start 2xl:ml-[103px] 3xl:ml-[124px] ml-[138px] lg:ml-[80px] xl:ml-[92px] w-[12%]"
                  compId="884:588"
                  comWidth={109}
                  comHeight={217}
                  compLeft={138}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="884:589"
                    comWidth={109}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Products`}</Text>
                  <Column
                    className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                    compId="884:590"
                    comWidth={101}
                    comHeight={156}
                    compLeft={0}
                    compRight={8}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                      compId="884:591"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="884:592"
                      comWidth={101}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`New Arrival`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                      compId="884:593"
                      comWidth={69}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Popular`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                      compId="884:594"
                      comWidth={39}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Sale`}</Text>
                  </Column>
                </Column>
                <Column
                  className="font-montserrat items-start justify-start 2xl:ml-[100px] 3xl:ml-[120px] ml-[134px] lg:ml-[78px] xl:ml-[89px] w-[13%]"
                  compId="884:595"
                  comWidth={117}
                  comHeight={217}
                  compLeft={134}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="884:596"
                    comWidth={117}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Company`}</Text>
                  <Column
                    className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="884:597"
                    comWidth={75}
                    comHeight={156}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                      compId="884:598"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                      compId="884:599"
                      comWidth={48}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`News`}</Text>
                    <Text
                      className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                      compId="884:600"
                      comWidth={72}
                      comHeight={27}
                      compLeft={0}
                      compRight={3}
                      compType="Text"
                    >{`Careers`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="884:601"
                      comWidth={75}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Services`}</Text>
                  </Column>
                </Column>
              </Row>
              <Column
                className="font-montserrat items-start justify-start lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] 3xl:ml-[109px] ml-[122px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[91px] w-[8%]"
                compId="884:602"
                comWidth={147}
                comHeight={217}
                compLeft={122}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                  compId="884:603"
                  comWidth={99}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Support`}</Text>
                <Column
                  className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1037"
                  comWidth={147}
                  comHeight={156}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="884:604"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                      compId="884:605"
                      comWidth={107}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                      compId="884:606"
                      comWidth={146}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`Delivery Service`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                      compId="884:607"
                      comWidth={122}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Privacy Policy`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="884:608"
                      comWidth={147}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Terms of service`}</Text>
                  </Column>
                </Column>
              </Column>
              <Column
                className="items-start justify-start 2xl:ml-[106px] 3xl:ml-[127px] ml-[142px] lg:ml-[82px] xl:ml-[94px] lg:mr-[57px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99px] w-[20%]"
                compId="884:609"
                comWidth={381}
                comHeight={237}
                compLeft={142}
                compRight={99}
                compType="Column"
              >
                <Text
                  className="font-montserrat font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[25%]"
                  compId="884:610"
                  comWidth={96}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Contact`}</Text>
                <Text
                  className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                  compId="884:611"
                  comWidth={381}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <Column
                  className="font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                  compId="884:612"
                  comWidth={243}
                  comHeight={80}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start w-[100%]"
                    compId="884:613"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_call_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="884:614"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Call"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                      compId="884:616"
                      comWidth={211}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`+1234567890`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="884:617"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_email.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="884:618"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Email"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                      compId="884:620"
                      comWidth={211}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`lovia@support.com`}</Text>
                  </Row>
                </Column>
              </Column>
            </Row>
            <Line
              className="bg-teal_200 h-[1px] xl:mt-[100px] 2xl:mt-[112px] 3xl:mt-[135px] mt-[150px] lg:mt-[87px] mx-[auto] w-[84%]"
              compId="884:577"
              comWidth={1620}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[84%]"
              compId="884:573"
              comWidth={1620}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Text
                className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                compId="884:576"
                comWidth={282}
                comHeight={21}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Lovia. All Right Reseved`}</Text>
              <Text
                className="font-normal 3xl:ml-[1156px] ml-[1284px] lg:ml-[749px] xl:ml-[856px] 2xl:ml-[963px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                compId="884:574"
                comWidth={22}
                comHeight={27}
                compLeft={1284}
                compRight={0}
                compType="Text"
              >{`EN`}</Text>
              <Text
                className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                compId="884:575"
                comWidth={18}
                comHeight={27}
                compLeft={14}
                compRight={0}
                compType="Text"
              >{`ID`}</Text>
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default GiftCardPage;
