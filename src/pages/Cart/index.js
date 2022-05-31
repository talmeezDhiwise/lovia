import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { List } from "components/List";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Input } from "components/Input";

const CartPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins items-start justify-start mx-[auto] w-[100%]"
        compId="337:242"
        comWidth={1920}
        comHeight={2104}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="w-[100%]"
          compId="1080"
          comWidth={1920}
          comHeight={121}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="204"
            comWidth={1920}
            comHeight={121}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="652:152"
              comWidth={1920}
              comHeight={121}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-gray_50 items-center justify-end w-[100%]"
                compId="1039"
                comWidth={1920}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="cursor-pointer font-normal hover:font-semibold lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 hover:text-gray_700 text-left text-teal_200 w-[1%]"
                  compId="652:177"
                  comWidth={22}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`EN`}</Text>
                <Text
                  className="cursor-pointer font-normal hover:font-semibold lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[1%]"
                  compId="652:178"
                  comWidth={18}
                  comHeight={27}
                  compLeft={14}
                  compRight={0}
                  compType="Text"
                >{`ID`}</Text>
                <Text
                  className="cursor-pointer hover:font-semibold font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] lg:ml-[410px] xl:ml-[469px] 2xl:ml-[527px] 3xl:ml-[633px] ml-[703px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 hover:text-gray_700 text-left text-teal_200 w-[5%]"
                  compId="652:167"
                  comWidth={96}
                  comHeight={54}
                  compLeft={703}
                  compRight={0}
                  compType="Text"
                >{`Lovia`}</Text>
                <Image
                  src={"images/img_icon_6.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[394px] xl:ml-[451px] 2xl:ml-[508px] 3xl:ml-[609px] ml-[677px] 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] lg:my-[25px] xl:my-[29px] 2xl:my-[33px] 3xl:my-[39px] my-[44px] object-contain w-[5%]"
                  compId="652:154"
                  comWidth={96}
                  comHeight={32}
                  compLeft={677}
                  compRight={144}
                  compType="Image"
                  alt="icon"
                />
              </Row>
              <Line
                className="bg-gray_300 h-[1px] mt-[1px] mx-[auto] w-[84%]"
                compId="652:179"
                comWidth={1620}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
            </Column>
          </header>
        </Column>
        <Row
          className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[12%]"
          compId="337:259"
          comWidth={229}
          comHeight={27}
          compLeft={144}
          compRight={144}
          compType="Row"
        >
          <Text
            className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[24%]"
            compId="337:260"
            comWidth={54}
            comHeight={27}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`Home`}</Text>
          <Text
            className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[5%]"
            compId="337:262"
            comWidth={11}
            comHeight={27}
            compLeft={16}
            compRight={0}
            compType="Text"
          >{`>`}</Text>
          <Text
            className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[58%]"
            compId="337:261"
            comWidth={132}
            comHeight={27}
            compLeft={16}
            compRight={0}
            compType="Text"
          >{`Shopping Cart`}</Text>
        </Row>
        <Column
          className="font-montserrat items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
          compId="1081"
          comWidth={1920}
          comHeight={1908}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-medium mx-[auto] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_900 text-left w-[10%]"
            compId="337:243"
            comWidth={189}
            comHeight={59}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`My Cart`}</Text>
          <Row
            className="font-poppins items-center justify-center lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] mt-[95px] mx-[auto] w-[47%]"
            compId="337:244"
            comWidth={901}
            comHeight={56}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Row
              className="items-center justify-start w-[28%]"
              compId="337:245"
              comWidth={256}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="border-2 border-solid border-teal_200 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                compId="202"
                comWidth={56}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[16%]"
                  compId="337:248"
                  comWidth={9}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`1`}</Text>
              </Column>
              <Text
                className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[69%]"
                compId="337:246"
                comWidth={176}
                comHeight={36}
                compLeft={24}
                compRight={0}
                compType="Text"
              >{`Shopping Cart`}</Text>
            </Row>
            <Line
              className="bg-gray_900 h-[2px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[15px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27px] w-[43%]"
              compId="337:249"
              comWidth={384}
              comHeight={2}
              compLeft={32}
              compRight={0}
              compType="Line"
            />
            <Row
              className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[22%]"
              compId="337:250"
              comWidth={197}
              comHeight={56}
              compLeft={32}
              compRight={0}
              compType="Row"
            >
              <Column
                className="border-2 border-gray_301 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                compId="203"
                comWidth={56}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_301 text-left w-[25%]"
                  compId="337:253"
                  comWidth={14}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`2`}</Text>
              </Column>
              <Text
                className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_301 text-left w-[59%]"
                compId="337:251"
                comWidth={117}
                comHeight={36}
                compLeft={24}
                compRight={0}
                compType="Text"
              >{`Checkout`}</Text>
            </Row>
          </Row>
          <Row
            className="font-poppins items-start justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="1069"
            comWidth={1920}
            comHeight={855}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-center justify-start 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[51%]"
              compId="1068"
              comWidth={971}
              comHeight={856}
              compLeft={144}
              compRight={0}
              compType="Column"
            >
              <Column
                className="w-[100%]"
                compId="1041"
                comWidth={971}
                comHeight={63}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start w-[100%]"
                  compId="1040"
                  comWidth={971}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkedbox_1.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="684:11"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkedbox"
                  />
                  <Text
                    className="font-medium lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[9%]"
                    compId="337:270"
                    comWidth={83}
                    comHeight={27}
                    compLeft={56}
                    compRight={0}
                    compType="Text"
                  >{`Select All`}</Text>
                </Row>
                <Line
                  className="bg-teal_200 h-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] opacity-op5 w-[100%]"
                  compId="337:277"
                  comWidth={971}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
              </Column>
              <List
                className="gap-[0] lg:mb-[19px] xl:mb-[22px] 3xl:mb-[29px] mb-[33px] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 3xl:mt-[28px] mt-[32px] 2xl:my-[24px] w-[100%]"
                compId="1079"
                comWidth={970.93994}
                comHeight={728}
                compLeft={0}
                compRight={0.06}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-between lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[100%]"
                  compId="1044"
                  comWidth={970.94}
                  comHeight={200}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkedbox_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[51px] xl:my-[58px] 2xl:my-[66px] 3xl:my-[79px] my-[88px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="684:2"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkedbox"
                  />
                  <Image
                    src={"images/img_image_32.svg"}
                    className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] object-contain lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                    compId="337:280"
                    comWidth={200}
                    comHeight={200}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Column
                    className="items-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[67%]"
                    compId="1046"
                    comWidth={651.93994}
                    comHeight={184}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[21%]"
                      compId="337:282"
                      comWidth={135}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Sleep Mask`}</Text>
                    <Column
                      className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="1082"
                      comWidth={651.94}
                      comHeight={55.940002}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="1045"
                        comWidth={651.93994}
                        comHeight={55.940002}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-medium lg:mb-[11px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19.94px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[14%]"
                          compId="337:283"
                          comWidth={92}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$100.99`}</Text>
                        <Image
                          src={"images/img__1.svg"}
                          className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] object-contain lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                          compId="337:292"
                          comWidth={33.94}
                          comHeight={33.94}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt=""
                        />
                      </Row>
                    </Column>
                    <Stack
                      className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28.06px] w-[26%]"
                      compId="1072"
                      comWidth={171}
                      comHeight={48}
                      compLeft={0}
                      compRight={10}
                      compType="Stack"
                    >
                      <Image
                        src={"images/img_increase_1.svg"}
                        className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain right-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="337:286"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="increase"
                      />
                      <Image
                        src={"images/img_decrease_1.svg"}
                        className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] left-[0] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="337:288"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="decrease"
                      />
                      <Button
                        className="absolute border border-gray_300 border-solid font-medium inset-[0] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 w-[100%]"
                        compId="196"
                        comWidth={171}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                      >{`1`}</Button>
                    </Stack>
                  </Column>
                </Row>
                <Line
                  className="self-center w-[51%] h-[1px] opacity-op5 bg-teal_200"
                  compId="823:83"
                  comWidth={971}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[100%]"
                  compId="1048"
                  comWidth={970.94}
                  comHeight={200}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkedbox_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[51px] xl:my-[58px] 2xl:my-[66px] 3xl:my-[79px] my-[88px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="684:5"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkedbox"
                  />
                  <Image
                    src={"images/img_image_33.svg"}
                    className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] object-contain lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                    compId="653:9"
                    comWidth={200}
                    comHeight={200}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Column
                    className="items-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[67%]"
                    compId="1050"
                    comWidth={651.93994}
                    comHeight={184}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[39%]"
                      compId="653:13"
                      comWidth={256}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Sun Protection SPF 30`}</Text>
                    <Column
                      className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="1083"
                      comWidth={651.94}
                      comHeight={55.940002}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="1049"
                        comWidth={651.93994}
                        comHeight={55.940002}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-medium lg:mb-[11px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19.94px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[14%]"
                          compId="653:14"
                          comWidth={92}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$100.99`}</Text>
                        <Image
                          src={"images/img__1.svg"}
                          className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] object-contain lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                          compId="653:22"
                          comWidth={33.94}
                          comHeight={33.94}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt=""
                        />
                      </Row>
                    </Column>
                    <Stack
                      className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28.06px] w-[26%]"
                      compId="1074"
                      comWidth={171}
                      comHeight={48}
                      compLeft={0}
                      compRight={10}
                      compType="Stack"
                    >
                      <Image
                        src={"images/img_increase_1.svg"}
                        className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain right-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="653:16"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="increase"
                      />
                      <Image
                        src={"images/img_decrease_1.svg"}
                        className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] left-[0] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="653:18"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="decrease"
                      />
                      <Button
                        className="absolute border border-gray_300 border-solid font-medium inset-[0] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 w-[100%]"
                        compId="197"
                        comWidth={171}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                      >{`1`}</Button>
                    </Stack>
                  </Column>
                </Row>
                <Line
                  className="self-center w-[51%] h-[1px] opacity-op5 bg-teal_200"
                  compId="823:83"
                  comWidth={971}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[100%]"
                  compId="1052"
                  comWidth={970.94}
                  comHeight={200}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkedbox_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[51px] xl:my-[58px] 2xl:my-[66px] 3xl:my-[79px] my-[88px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="823:99"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkedbox"
                  />
                  <Image
                    src={"images/img_image_34.svg"}
                    className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] object-contain lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                    compId="823:85"
                    comWidth={200}
                    comHeight={200}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Column
                    className="items-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[67%]"
                    compId="1054"
                    comWidth={651.93994}
                    comHeight={184}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[39%]"
                      compId="823:89"
                      comWidth={256}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Sun Protection SPF 30`}</Text>
                    <Column
                      className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="1084"
                      comWidth={651.94}
                      comHeight={55.93994}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="1053"
                        comWidth={651.93994}
                        comHeight={55.93994}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-medium lg:mb-[11px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19.94px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[14%]"
                          compId="823:90"
                          comWidth={92}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$100.99`}</Text>
                        <Image
                          src={"images/img__1.svg"}
                          className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] object-contain lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                          compId="823:98"
                          comWidth={33.94}
                          comHeight={33.94}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt=""
                        />
                      </Row>
                    </Column>
                    <Stack
                      className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28.06px] w-[26%]"
                      compId="1076"
                      comWidth={171}
                      comHeight={48}
                      compLeft={0}
                      compRight={10}
                      compType="Stack"
                    >
                      <Image
                        src={"images/img_increase_1.svg"}
                        className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain right-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="823:92"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="increase"
                      />
                      <Image
                        src={"images/img_decrease_1.svg"}
                        className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] left-[0] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="823:94"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="decrease"
                      />
                      <Button
                        className="absolute border border-gray_300 border-solid font-medium inset-[0] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 w-[100%]"
                        compId="198"
                        comWidth={171}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                      >{`1`}</Button>
                    </Stack>
                  </Column>
                </Row>
              </List>
            </Column>
            <Column
              className="lg:mb-[184px] xl:mb-[211px] 2xl:mb-[237px] 3xl:mb-[285px] mb-[317px] 2xl:ml-[103px] 3xl:ml-[124px] ml-[138px] lg:ml-[80px] xl:ml-[92px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] mt-[63px] w-[27%]"
              compId="1064"
              comWidth={523}
              comHeight={475}
              compLeft={138}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-gray_300_3f border border-solid border-teal_200 items-center justify-start w-[100%]"
                compId="1042"
                comWidth={523}
                comHeight={104}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_icon_7.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:ml-[36px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] ml-[62px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  compId="655:38"
                  comWidth={56}
                  comHeight={56}
                  compLeft={62}
                  compRight={0}
                  compType="Image"
                  alt="icon"
                />
                <Text
                  className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] my-[34px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[50%]"
                  compId="655:43"
                  comWidth={263}
                  comHeight={36}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`Have a coupon code?`}</Text>
                <Image
                  src={"images/img_chevrondown_5.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="655:45"
                  comWidth={32}
                  comHeight={32}
                  compLeft={24}
                  compRight={0}
                  compType="Image"
                  alt="chevrondown"
                />
              </Row>
              <Column
                className="bg-gray_50 border border-solid border-teal_200 items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                compId="1060"
                comWidth={523}
                comHeight={339}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[23%]"
                  compId="653:26"
                  comWidth={120}
                  comHeight={36}
                  compLeft={32}
                  compRight={32}
                  compType="Text"
                >{`Summary`}</Text>
                <Column
                  className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1085"
                  comWidth={523}
                  comHeight={207}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-between mx-[auto] w-[88%]"
                    compId="653:28"
                    comWidth={458}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-medium xl:mb-[2px] 3xl:mb-[3px] mb-[4px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:my-[2px] 2xl:my-[3px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[10%]"
                      compId="337:313"
                      comWidth={46}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Total`}</Text>
                    <Text
                      className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[21%]"
                      compId="337:314"
                      comWidth={96}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$202.00`}</Text>
                  </Row>
                  <Button
                    className="bg-teal_200 font-medium lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] mx-[auto] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[88%]"
                    compId="199"
                    comWidth={459}
                    comHeight={64}
                    compLeft={10}
                    compRight={10}
                    compType="Button"
                  >{`Checkout`}</Button>
                  <Text
                    className="font-medium lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[33%]"
                    compId="337:311"
                    comWidth={175}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Continue Shopping`}</Text>
                </Column>
              </Column>
            </Column>
          </Row>
          <footer
            className="font-montserrat xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
            compId="860:1157"
            comWidth={1920}
            comHeight={603}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-gray_900 items-center justify-end w-[100%]"
              compId="1056"
              comWidth={1920}
              comHeight={603}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-start lg:mt-[53px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] mt-[91px] mx-[auto] w-[84%]"
                compId="860:1165"
                comWidth={1618}
                comHeight={244}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Column
                  className="items-start justify-start w-[29%]"
                  compId="860:1208"
                  comWidth={475}
                  comHeight={244}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-left text-teal_200 w-[100%]"
                    compId="860:1209"
                    comWidth={475}
                    comHeight={59}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Join our Newsletter`}</Text>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[80%]"
                    compId="860:1210"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Get the latest news of our new releases, sales, and promo!`}</Text>
                  <Stack
                    className="font-poppins lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[80%]"
                    compId="1078"
                    comWidth={381}
                    comHeight={60}
                    compLeft={0}
                    compRight={10}
                    compType="Stack"
                  >
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-gray_50 border-solid font-normal inset-[0] not-italic xl:pb-[12px] 3xl:pb-[16px] pb-[18.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] xl:pt-[11px] 3xl:pt-[15px] pt-[17.545px] lg:py-[10px] 2xl:py-[13px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_50 text-gray_50 text-left tracking-ls1 w-[100%]"
                      compId="205"
                      comWidth={381}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group205"
                      placeholder={`Enter your email`}
                    ></Input>
                    <Button
                      className="absolute bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[0] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[28%]"
                      compId="200"
                      comWidth={105}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Join`}</Button>
                  </Stack>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] ml-[104px] lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] w-[7%]"
                  compId="860:1187"
                  comWidth={109}
                  comHeight={217}
                  compLeft={104}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="860:1188"
                    comWidth={109}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Products`}</Text>
                  <Column
                    className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                    compId="860:1189"
                    comWidth={101}
                    comHeight={156}
                    compLeft={0}
                    compRight={8}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                      compId="860:1190"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="860:1191"
                      comWidth={101}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`New Arrival`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                      compId="860:1192"
                      comWidth={69}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Popular`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                      compId="860:1193"
                      comWidth={39}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Sale`}</Text>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] 2xl:ml-[100px] 3xl:ml-[120px] ml-[134px] lg:ml-[78px] xl:ml-[89px] w-[7%]"
                  compId="860:1194"
                  comWidth={117}
                  comHeight={217}
                  compLeft={134}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="860:1195"
                    comWidth={117}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Company`}</Text>
                  <Column
                    className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="860:1196"
                    comWidth={75}
                    comHeight={156}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                      compId="860:1197"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                      compId="860:1198"
                      comWidth={48}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`News`}</Text>
                    <Text
                      className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                      compId="860:1199"
                      comWidth={72}
                      comHeight={27}
                      compLeft={0}
                      compRight={3}
                      compType="Text"
                    >{`Careers`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="860:1200"
                      comWidth={75}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Services`}</Text>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] 3xl:ml-[109px] ml-[122px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[91px] w-[9%]"
                  compId="860:1201"
                  comWidth={147}
                  comHeight={217}
                  compLeft={122}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                    compId="860:1202"
                    comWidth={99}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Support`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="1086"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="860:1203"
                      comWidth={147}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                        compId="860:1204"
                        comWidth={107}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="860:1205"
                        comWidth={146}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Delivery Service`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                        compId="860:1206"
                        comWidth={122}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Privacy Policy`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="860:1207"
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
                  className="items-start justify-start lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[31px] xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] ml-[167px] lg:ml-[97px] w-[15%]"
                  compId="860:1166"
                  comWidth={243}
                  comHeight={213}
                  compLeft={167}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[40%]"
                    compId="860:1167"
                    comWidth={96}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="1087"
                    comWidth={243}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="860:1168"
                      comWidth={243}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="860:1169"
                        comWidth={243}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_call_1.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="860:1170"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Call"
                        />
                        <Text
                          className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                          compId="860:1172"
                          comWidth={211}
                          comHeight={32}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`+1234567890`}</Text>
                      </Row>
                      <Row
                        className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                        compId="860:1173"
                        comWidth={243}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_email.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="860:1174"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Email"
                        />
                        <Text
                          className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                          compId="860:1176"
                          comWidth={211}
                          comHeight={32}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`lovia@support.com`}</Text>
                      </Row>
                    </Column>
                  </Column>
                  <Image
                    src={"images/img_sosmedia_6.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[69%]"
                    compId="860:1177"
                    comWidth={168}
                    comHeight={40}
                    compLeft={0}
                    compRight={10}
                    compType="Image"
                    alt="sosmedia"
                  />
                </Column>
              </Row>
              <Line
                className="bg-teal_200 h-[1px] 2xl:mt-[107px] 3xl:mt-[128px] mt-[143px] lg:mt-[83px] xl:mt-[95px] mx-[auto] w-[84%]"
                compId="860:1164"
                comWidth={1620}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
              <Row
                className="font-poppins items-center justify-start lg:mb-[22px] xl:mb-[26px] 2xl:mb-[29px] 3xl:mb-[35px] mb-[39px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] w-[84%]"
                compId="860:1159"
                comWidth={1621}
                comHeight={54}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-semibold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[6%]"
                  compId="860:1163"
                  comWidth={96}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lovia`}</Text>
                <Text
                  className="font-normal 3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[400px] xl:ml-[458px] 2xl:ml-[515px] 3xl:ml-[618px] ml-[687px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                  compId="860:1160"
                  comWidth={22}
                  comHeight={27}
                  compLeft={687}
                  compRight={0}
                  compType="Text"
                >{`EN`}</Text>
                <Text
                  className="font-normal 3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                  compId="860:1161"
                  comWidth={18}
                  comHeight={27}
                  compLeft={14}
                  compRight={0}
                  compType="Text"
                >{`ID`}</Text>
                <Text
                  className="font-normal xl:mb-[10px] 3xl:mb-[14px] mb-[16px] lg:ml-[292px] xl:ml-[334px] 2xl:ml-[376px] 3xl:ml-[452px] ml-[502px] xl:mt-[11px] 3xl:mt-[15px] mt-[17px] 2xl:my-[12px] lg:my-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                  compId="860:1162"
                  comWidth={282}
                  comHeight={21}
                  compLeft={502}
                  compRight={0}
                  compType="Text"
                >{`Copyright © 2021 Lovia. All Right Reseved`}</Text>
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default CartPage;
