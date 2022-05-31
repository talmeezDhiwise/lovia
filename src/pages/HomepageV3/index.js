import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Button } from "components/Button";
import { List } from "components/List";
import { Stack } from "components/Stack";
import { RatingBar } from "components/RatingBar";
import { Input } from "components/Input";

const HomepageV3Page = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compId="418:194"
        comWidth={1920}
        comHeight={6764}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="bg-gray_50 items-start justify-start w-[100%]"
          compId="539"
          comWidth={1920}
          comHeight={900}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="font-poppins w-[100%]"
            compId="580"
            comWidth={1920}
            comHeight={121}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="42"
              comWidth={1920}
              comHeight={121}
              compLeft={0}
              compRight={0}
              compType="Header"
            >
              <Column
                className="items-center justify-start w-[100%]"
                compId="697:793"
                comWidth={1920}
                comHeight={121}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="bg-gray_50 items-center justify-start w-[100%]"
                  compId="697:795"
                  comWidth={1920}
                  comHeight={120}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[5%]"
                    compId="697:805"
                    comWidth={96}
                    comHeight={54}
                    compLeft={150}
                    compRight={0}
                    compType="Text"
                  >{`Lovia`}</Text>
                  <Row
                    className="items-center justify-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] 2xl:ml-[110px] 3xl:ml-[132px] ml-[147px] lg:ml-[85px] xl:ml-[98px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] w-[33%]"
                    compId="578"
                    comWidth={640}
                    comHeight={27}
                    compLeft={147}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[16%]"
                      compId="697:796"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Text
                      className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                      compId="697:797"
                      comWidth={101}
                      comHeight={27}
                      compLeft={48}
                      compRight={0}
                      compType="Text"
                    >{`New Arrival`}</Text>
                    <Text
                      className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[12%]"
                      compId="697:798"
                      comWidth={78}
                      comHeight={27}
                      compLeft={48}
                      compRight={0}
                      compType="Text"
                    >{`Features`}</Text>
                    <Text
                      className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                      compId="697:799"
                      comWidth={100}
                      comHeight={27}
                      compLeft={48}
                      compRight={0}
                      compType="Text"
                    >{`Collections`}</Text>
                    <Text
                      className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[11%]"
                      compId="697:800"
                      comWidth={69}
                      comHeight={27}
                      compLeft={48}
                      compRight={0}
                      compType="Text"
                    >{`Popular`}</Text>
                  </Row>
                  <Image
                    src={"images/img_menu.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[411px] xl:ml-[470px] 2xl:ml-[529px] 3xl:ml-[634px] ml-[705px] lg:my-[25px] xl:my-[29px] 2xl:my-[33px] 3xl:my-[39px] my-[44px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    compId="697:819"
                    comWidth={32}
                    comHeight={32}
                    compLeft={705}
                    compRight={0}
                    compType="Image"
                    alt="Menu"
                  />
                </Row>
                <Line
                  className="bg-gray_301 h-[1px] mt-[1px] mx-[auto] w-[84%]"
                  compId="697:821"
                  comWidth={1620}
                  comHeight={1}
                  compLeft={10}
                  compRight={10}
                  compType="Line"
                />
              </Column>
            </header>
          </Column>
          <Text
            className="font-medium font-montserrat 3xl:leading-lh100 leading-lh11200 lg:leading-lh65 xl:leading-lh74 2xl:leading-lh84 lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] xl:mx-[100px] 2xl:mx-[112px] 3xl:mx-[135px] mx-[150px] lg:mx-[87px] lg:text-fs56 xl:text-fs64 2xl:text-fs72 3xl:text-fs86 text-fs96 text-gray_900 text-left w-[70%]"
            compId="839:45"
            comWidth={1338}
            comHeight={224}
            compLeft={150}
            compRight={150}
            compType="Text"
          >{`True beauty can radiate your uniqueness`}</Text>
          <Text
            className="font-normal font-poppins lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] xl:mx-[100px] 2xl:mx-[112px] 3xl:mx-[135px] mx-[150px] lg:mx-[87px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[40%]"
            compId="839:46"
            comWidth={764}
            comHeight={36}
            compLeft={150}
            compRight={150}
            compType="Text"
          >{`Discover beauty products that help you shine`}</Text>
          <Row
            className="font-poppins lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center justify-start lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] xl:mx-[100px] 2xl:mx-[112px] 3xl:mx-[135px] mx-[150px] lg:mx-[87px] w-[23%]"
            compId="839:47"
            comWidth={432}
            comHeight={60}
            compLeft={150}
            compRight={150}
            compType="Row"
          >
            <Button
              className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[100%]"
              compId="30"
              comWidth={200}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Button"
            >{`Shop Now`}</Button>
            <Button
              className="border border-solid border-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 w-[100%]"
              compId="29"
              comWidth={200}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Button"
            >{`Learn More`}</Button>
          </Row>
          <Image
            src={"images/img_brand.svg"}
            className="lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[76px] mb-[85px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] xl:mx-[100px] 2xl:mx-[112px] 3xl:mx-[135px] mx-[150px] lg:mx-[87px] object-contain w-[49%]"
            compId="701:987"
            comWidth={940}
            comHeight={38}
            compLeft={150}
            compRight={150}
            compType="Image"
            alt="brand"
          />
        </Column>
        <Column
          className="xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="518"
          comWidth={1920}
          comHeight={564}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compId="516"
            comWidth={1920}
            comHeight={236}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-start xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] w-[26%]"
              compId="540"
              comWidth={506}
              comHeight={196}
              compLeft={150}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium font-montserrat lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[100%]"
                compId="839:5"
                comWidth={505}
                comHeight={68}
                compLeft={1}
                compRight={0}
                compType="Text"
              >{`Why Choosing Us`}</Text>
              <Text
                className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[79%]"
                compId="839:42"
                comWidth={400}
                comHeight={96}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
            </Column>
            <List
              className="lg:gap-[42px] xl:gap-[48px] 2xl:gap-[54px] 3xl:gap-[65px] gap-[73px] grid grid-cols-2 min-h-[auto] xl:mr-[100px] 2xl:mr-[112px] 3xl:mr-[135px] mr-[150px] lg:mr-[87px] w-[45%]"
              compId="572"
              comWidth={873}
              comHeight={236}
              compLeft={0}
              compRight={150}
              compType="List"
              orientation="horizontal"
            >
              <Column
                className="items-start justify-start w-[100%]"
                compId="839:7"
                comWidth={400}
                comHeight={236}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_quality_2.svg"}
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="849:226"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={10}
                  compType="Image"
                  alt="Quality"
                />
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="581"
                  comWidth={400}
                  comHeight={140}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="839:13"
                    comWidth={400}
                    comHeight={140}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[31%]"
                      compId="839:14"
                      comWidth={123}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`54 Brands`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[100%]"
                      compId="839:15"
                      comWidth={400}
                      comHeight={96}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
                  </Column>
                </Column>
              </Column>
              <Column
                className="items-start justify-start w-[100%]"
                compId="839:16"
                comWidth={400}
                comHeight={236}
                compLeft={73}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_fastdelivery_2.svg"}
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="849:287"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={10}
                  compType="Image"
                  alt="FastDelivery"
                />
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="582"
                  comWidth={400}
                  comHeight={140}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="839:22"
                    comWidth={400}
                    comHeight={140}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[40%]"
                      compId="839:23"
                      comWidth={160}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Fast Delivery`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[100%]"
                      compId="839:24"
                      comWidth={400}
                      comHeight={96}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
                  </Column>
                </Column>
              </Column>
            </List>
          </Row>
          <Row
            className="items-start justify-between lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] w-[100%]"
            compId="517"
            comWidth={1920}
            comHeight={308}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Image
              src={"images/img_ornament.svg"}
              className="xl:h-[102px] 2xl:h-[115px] 3xl:h-[137px] h-[152px] lg:h-[89px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[130px] xl:ml-[148px] 2xl:ml-[167px] 3xl:ml-[200px] ml-[223px] object-contain opacity-op5 w-[5%]"
              compId="849:143"
              comWidth={104}
              comHeight={152}
              compLeft={223}
              compRight={0}
              compType="Image"
              alt="ornament"
            />
            <List
              className="lg:gap-[42px] xl:gap-[48px] 2xl:gap-[54px] 3xl:gap-[65px] gap-[73px] grid grid-cols-2 min-h-[auto] xl:mr-[100px] 2xl:mr-[112px] 3xl:mr-[135px] mr-[150px] lg:mr-[87px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] mt-[72px] w-[45%]"
              compId="573"
              comWidth={873}
              comHeight={236}
              compLeft={0}
              compRight={150}
              compType="List"
              orientation="horizontal"
            >
              <Column
                className="items-start justify-start w-[100%]"
                compId="839:25"
                comWidth={400}
                comHeight={236}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_cashondeliver_2.svg"}
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="849:275"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={10}
                  compType="Image"
                  alt="CashOnDeliver"
                />
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="583"
                  comWidth={400}
                  comHeight={140}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="839:31"
                    comWidth={400}
                    comHeight={140}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[37%]"
                      compId="839:32"
                      comWidth={149}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`COD Service`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[100%]"
                      compId="839:33"
                      comWidth={400}
                      comHeight={96}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
                  </Column>
                </Column>
              </Column>
              <Column
                className="items-start justify-start w-[100%]"
                compId="839:34"
                comWidth={400}
                comHeight={236}
                compLeft={73}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_quality_3.svg"}
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="849:250"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={10}
                  compType="Image"
                  alt="Quality"
                />
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="584"
                  comWidth={400}
                  comHeight={140}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="839:37"
                    comWidth={400}
                    comHeight={140}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[68%]"
                      compId="839:38"
                      comWidth={273}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`100% Original Products`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[100%]"
                      compId="839:39"
                      comWidth={400}
                      comHeight={96}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
                  </Column>
                </Column>
              </Column>
            </List>
          </Row>
        </Column>
        <Column
          className="font-montserrat items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="523"
          comWidth={1920}
          comHeight={754}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-medium mx-[auto] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[26%]"
            compId="839:53"
            comWidth={502}
            comHeight={68}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`Featured Product`}</Text>
          <Row
            className="font-poppins items-center justify-start lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] mx-[auto] w-[82%]"
            compId="839:54"
            comWidth={1571}
            comHeight={48}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Image
              src={"images/img_arrow_1.svg"}
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
              compId="839:137"
              comWidth={48}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Arrow"
            />
            <Row
              className="items-center justify-start lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] w-[88%]"
              compId="839:147"
              comWidth={1379}
              comHeight={36}
              compLeft={48}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[7%]"
                compId="839:56"
                comWidth={103}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Skincare`}</Text>
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[9%]"
                compId="839:57"
                comWidth={130}
                comHeight={36}
                compLeft={32}
                compRight={0}
                compType="Text"
              >{`Anti-Aging`}</Text>
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[9%]"
                compId="839:58"
                comWidth={120}
                comHeight={36}
                compLeft={32}
                compRight={0}
                compType="Text"
              >{`Hair Care`}</Text>
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[9%]"
                compId="839:59"
                comWidth={128}
                comHeight={36}
                compLeft={32}
                compRight={0}
                compType="Text"
              >{`Cosmetics`}</Text>
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[5%]"
                compId="839:60"
                comWidth={68}
                comHeight={36}
                compLeft={32}
                compRight={0}
                compType="Text"
              >{`Shop`}</Text>
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[4%]"
                compId="839:61"
                comWidth={58}
                comHeight={36}
                compLeft={32}
                compRight={0}
                compType="Text"
              >{`Men`}</Text>
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[4%]"
                compId="839:62"
                comWidth={58}
                comHeight={36}
                compLeft={32}
                compRight={0}
                compType="Text"
              >{`New`}</Text>
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[9%]"
                compId="839:63"
                comWidth={129}
                comHeight={36}
                compLeft={32}
                compRight={0}
                compType="Text"
              >{`Best Seller`}</Text>
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[13%]"
                compId="839:64"
                comWidth={176}
                comHeight={36}
                compLeft={32}
                compRight={0}
                compType="Text"
              >{`Bundles & Sets`}</Text>
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[9%]"
                compId="839:65"
                comWidth={121}
                comHeight={36}
                compLeft={32}
                compRight={0}
                compType="Text"
              >{`Gift Cards`}</Text>
            </Row>
            <Image
              src={"images/img_arrow_2.svg"}
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
              compId="839:142"
              comWidth={48}
              comHeight={48}
              compLeft={48}
              compRight={0}
              compType="Image"
              alt="Arrow"
            />
          </Row>
          <List
            className="font-poppins gap-[0] min-h-[auto] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[84%]"
            compId="574"
            comWidth={1607}
            comHeight={534}
            compLeft={10}
            compRight={10}
            compType="List"
            orientation="vertical"
          >
            <Row
              className="items-center justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]"
              compId="519"
              comWidth={1607}
              comHeight={243}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-center justify-between w-[26%]"
                compId="839:157"
                comWidth={419}
                comHeight={243}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                  compId="553"
                  comWidth={243}
                  comHeight={243}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_15.svg"}
                    className="absolute lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] inset-[0] object-cover lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="839:70"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[7%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="839:73"
                    comWidth={64}
                    comHeight={64}
                    compLeft={0}
                    compRight={16}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="839:75"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-start 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] lg:my-[47px] xl:my-[54px] w-[32%]"
                  compId="839:67"
                  comWidth={134}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                    compId="839:68"
                    comWidth={134}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Face Scrub`}</Text>
                  <Text
                    className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[45%]"
                    compId="839:69"
                    comWidth={60}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Row>
              <Row
                className="items-center justify-center w-[25%]"
                compId="839:158"
                comWidth={404}
                comHeight={243}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                  compId="555"
                  comWidth={243}
                  comHeight={243}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_16.svg"}
                    className="absolute lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] inset-[0] object-cover lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="839:162"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[7%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="839:165"
                    comWidth={64}
                    comHeight={64}
                    compLeft={0}
                    compRight={16}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="839:167"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-start 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] lg:my-[47px] xl:my-[54px] w-[29%]"
                  compId="839:159"
                  comWidth={119}
                  comHeight={80}
                  compLeft={42}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                    compId="839:160"
                    comWidth={119}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Hair Tonic`}</Text>
                  <Text
                    className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[50%]"
                    compId="839:161"
                    comWidth={60}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Row>
              <Row
                className="items-center justify-between w-[31%]"
                compId="839:168"
                comWidth={506}
                comHeight={243}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                  compId="557"
                  comWidth={243}
                  comHeight={243}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_17.svg"}
                    className="absolute lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] inset-[0] object-cover lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="839:172"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[7%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="839:175"
                    comWidth={64}
                    comHeight={64}
                    compLeft={0}
                    compRight={16}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="839:177"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-start 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] lg:my-[47px] xl:my-[54px] w-[44%]"
                  compId="839:169"
                  comWidth={221}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                    compId="839:170"
                    comWidth={221}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Anti-Aging Serum`}</Text>
                  <Text
                    className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[27%]"
                    compId="839:171"
                    comWidth={60}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Row>
            </Row>
            <Row
              className="items-center justify-start lg:mr-[53px] xl:mr-[61px] 2xl:mr-[69px] 3xl:mr-[82px] mr-[92px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[94%]"
              compId="520"
              comWidth={1515}
              comHeight={243}
              compLeft={0}
              compRight={92}
              compType="Row"
            >
              <Row
                className="items-center justify-between w-[28%]"
                compId="839:178"
                comWidth={426}
                comHeight={243}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                  compId="559"
                  comWidth={243}
                  comHeight={243}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_18.svg"}
                    className="absolute lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] inset-[0] object-cover lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="839:182"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[7%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="839:185"
                    comWidth={64}
                    comHeight={64}
                    compLeft={0}
                    compRight={16}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="839:187"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-start 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] lg:my-[47px] xl:my-[54px] w-[33%]"
                  compId="839:179"
                  comWidth={141}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                    compId="839:180"
                    comWidth={141}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Sleep Mask`}</Text>
                  <Text
                    className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[43%]"
                    compId="839:181"
                    comWidth={60}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Row>
              <Row
                className="items-center justify-center 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] w-[32%]"
                compId="839:188"
                comWidth={484}
                comHeight={243}
                compLeft={125}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                  compId="561"
                  comWidth={243}
                  comHeight={243}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_19.svg"}
                    className="absolute lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] inset-[0] object-cover lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="839:192"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[7%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="839:195"
                    comWidth={64}
                    comHeight={64}
                    compLeft={0}
                    compRight={16}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="839:197"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-start 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] lg:my-[47px] xl:my-[54px] w-[41%]"
                  compId="839:189"
                  comWidth={199}
                  comHeight={80}
                  compLeft={42}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                    compId="839:190"
                    comWidth={199}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Healthy Lip Balm`}</Text>
                  <Text
                    className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[30%]"
                    compId="839:191"
                    comWidth={60}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Row>
              <Row
                className="items-center justify-between lg:ml-[38px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[66px] w-[27%]"
                compId="839:198"
                comWidth={414}
                comHeight={243}
                compLeft={66}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                  compId="563"
                  comWidth={243}
                  comHeight={243}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_20.svg"}
                    className="absolute lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] inset-[0] object-cover lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="839:202"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[7%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="839:205"
                    comWidth={64}
                    comHeight={64}
                    compLeft={0}
                    compRight={16}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="839:207"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-start 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] lg:my-[47px] xl:my-[54px] w-[31%]"
                  compId="839:199"
                  comWidth={129}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                    compId="839:200"
                    comWidth={129}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Moisturizer`}</Text>
                  <Text
                    className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[47%]"
                    compId="839:201"
                    comWidth={60}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Row>
            </Row>
          </List>
        </Column>
        <Stack
          className="lg:h-[573px] xl:h-[655px] 2xl:h-[737px] 3xl:h-[884px] h-[981px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="565"
          comWidth={1920}
          comHeight={981}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Row
            className="absolute bg-gray_300 items-start justify-start top-[0] w-[100%]"
            compId="542"
            comWidth={1920}
            comHeight={744}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Image
              src={"images/img_image_11.svg"}
              className="lg:h-[303px] xl:h-[347px] 2xl:h-[390px] 3xl:h-[468px] h-[519px] lg:mb-[54px] xl:mb-[62px] 2xl:mb-[70px] 3xl:mb-[84px] mb-[94px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] 3xl:mt-[117px] mt-[131px] lg:mt-[76px] xl:mt-[87px] 2xl:mt-[98px] object-contain lg:w-[302px] xl:w-[346px] 2xl:w-[389px] 3xl:w-[467px] w-[519px]"
              compId="839:208"
              comWidth={519}
              comHeight={519}
              compLeft={150}
              compRight={0}
              compType="Image"
              alt="image"
            />
            <Column
              className="items-start justify-start lg:mb-[250px] xl:mb-[286px] 2xl:mb-[321px] 3xl:mb-[386px] mb-[429px] lg:ml-[40px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] ml-[70px] xl:mt-[100px] 2xl:mt-[113px] 3xl:mt-[135px] mt-[151px] lg:mt-[88px] w-[27%]"
              compId="541"
              comWidth={518}
              comHeight={164}
              compLeft={70}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[83%]"
                compId="701:1050"
                comWidth={429}
                comHeight={68}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Best Collection`}</Text>
              <Text
                className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[100%]"
                compId="703:9"
                comWidth={518}
                comHeight={64}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .`}</Text>
            </Column>
          </Row>
          <Column
            className="absolute bottom-[0] left-[29%] w-[20%]"
            compId="710:637"
            comWidth={381}
            comHeight={590}
            compLeft={563}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_image_12.svg"}
              className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] mx-[auto] object-cover lg:w-[222px] xl:w-[254px] 2xl:w-[285px] 3xl:w-[343px] w-[381px]"
              compId="701:1053"
              comWidth={381}
              comHeight={381}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="image"
            />
            <Column
              className="bg-teal_200 items-start justify-start lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
              compId="701:1058"
              comWidth={381}
              comHeight={209}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-montserrat font-normal leading-lh lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 text-left w-[49%]"
                compId="701:1059"
                comWidth={185}
                comHeight={58}
                compLeft={24}
                compRight={24}
                compType="Text"
              >
                {
                  <>
                    {`Night Skincare `}
                    <br />
                    {`Products`}
                  </>
                }
              </Text>
              <Text
                className="font-medium font-poppins lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 text-left w-[25%]"
                compId="701:1060"
                comWidth={95}
                comHeight={36}
                compLeft={24}
                compRight={24}
                compType="Text"
              >{`$250.70`}</Text>
              <Row
                className="font-poppins items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] w-[34%]"
                compId="701:1061"
                comWidth={131}
                comHeight={27}
                compLeft={24}
                compRight={24}
                compType="Row"
              >
                <Text
                  className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[76%]"
                  compId="701:1062"
                  comWidth={99}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`See Details`}</Text>
                <Image
                  src={"images/img_arrow_3.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="701:1063"
                  comWidth={24}
                  comHeight={24}
                  compLeft={8}
                  compRight={0}
                  compType="Image"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
          <Column
            className="absolute bottom-[0] right-[29%] w-[20%]"
            compId="839:211"
            comWidth={381}
            comHeight={590}
            compLeft={0}
            compRight={563}
            compType="Column"
          >
            <Image
              src={"images/img_image_13.svg"}
              className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] mx-[auto] object-cover lg:w-[222px] xl:w-[254px] 2xl:w-[285px] 3xl:w-[343px] w-[381px]"
              compId="839:212"
              comWidth={381}
              comHeight={381}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="image"
            />
            <Column
              className="bg-teal_200 items-start justify-start lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
              compId="839:216"
              comWidth={381}
              comHeight={209}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-montserrat font-normal leading-lh lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 text-left w-[59%]"
                compId="839:217"
                comWidth={225}
                comHeight={58}
                compLeft={24}
                compRight={24}
                compType="Text"
              >
                {
                  <>
                    {`Anti Aging Sakura `}
                    <br />
                    {`Series`}
                  </>
                }
              </Text>
              <Text
                className="font-medium font-poppins lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 text-left w-[25%]"
                compId="839:218"
                comWidth={95}
                comHeight={36}
                compLeft={24}
                compRight={24}
                compType="Text"
              >{`$250.70`}</Text>
              <Row
                className="font-poppins items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] w-[34%]"
                compId="839:219"
                comWidth={131}
                comHeight={27}
                compLeft={24}
                compRight={24}
                compType="Row"
              >
                <Text
                  className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[76%]"
                  compId="839:220"
                  comWidth={99}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`See Details`}</Text>
                <Image
                  src={"images/img_arrow_3.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="839:221"
                  comWidth={24}
                  comHeight={24}
                  compLeft={8}
                  compRight={0}
                  compType="Image"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
          <Column
            className="absolute bottom-[0] right-[8%] w-[20%]"
            compId="839:224"
            comWidth={381}
            comHeight={590}
            compLeft={0}
            compRight={150}
            compType="Column"
          >
            <Image
              src={"images/img_image_14.svg"}
              className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] mx-[auto] object-cover lg:w-[222px] xl:w-[254px] 2xl:w-[285px] 3xl:w-[343px] w-[381px]"
              compId="839:225"
              comWidth={381}
              comHeight={381}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="image"
            />
            <Column
              className="bg-teal_200 items-start justify-start lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
              compId="839:229"
              comWidth={381}
              comHeight={209}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-montserrat font-normal leading-lh lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 text-left w-[60%]"
                compId="839:230"
                comWidth={227}
                comHeight={58}
                compLeft={24}
                compRight={24}
                compType="Text"
              >
                {
                  <>
                    {`Anti Dandruff Hair `}
                    <br />
                    {`Care Series`}
                  </>
                }
              </Text>
              <Text
                className="font-medium font-poppins lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 text-left w-[25%]"
                compId="839:231"
                comWidth={95}
                comHeight={36}
                compLeft={24}
                compRight={24}
                compType="Text"
              >{`$250.70`}</Text>
              <Row
                className="font-poppins items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] w-[34%]"
                compId="839:232"
                comWidth={131}
                comHeight={27}
                compLeft={24}
                compRight={24}
                compType="Row"
              >
                <Text
                  className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[76%]"
                  compId="839:233"
                  comWidth={99}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`See Details`}</Text>
                <Image
                  src={"images/img_arrow_3.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="839:234"
                  comWidth={24}
                  comHeight={24}
                  compLeft={8}
                  compRight={0}
                  compType="Image"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
        </Stack>
        <Column
          className="font-montserrat items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="527"
          comWidth={1920}
          comHeight={828}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compId="525"
            comWidth={1920}
            comHeight={68}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-medium xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[12%]"
              compId="704:111"
              comWidth={224}
              comHeight={68}
              compLeft={150}
              compRight={0}
              compType="Text"
            >{`Popular`}</Text>
            <Image
              src={"images/img_categories.svg"}
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mr-[100px] 2xl:mr-[112px] 3xl:mr-[135px] mr-[150px] lg:mr-[87px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain w-[6%]"
              compId="840:4"
              comWidth={112}
              comHeight={48}
              compLeft={0}
              compRight={150}
              compType="Image"
              alt="categories"
            />
          </Row>
          <List
            className="font-poppins lg:gap-[18px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[27px] gap-[31px] grid grid-cols-3 min-h-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] w-[84%]"
            compId="526"
            comWidth={1620}
            comHeight={680}
            compLeft={10}
            compRight={10}
            compType="List"
            orientation="horizontal"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="840:53"
              comWidth={519}
              comHeight={680}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_maskgroup_21.svg"}
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] object-cover w-[100%]"
                compId="840:26"
                comWidth={519}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="MaskGroup"
              />
              <Column
                className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[85%]"
                compId="840:52"
                comWidth={441}
                comHeight={267}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Column
                  className="items-center justify-start w-[100%]"
                  compId="704:145"
                  comWidth={441}
                  comHeight={116}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 w-[100%]"
                    compId="704:146"
                    comWidth={441}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Skin Whitening with Vit C`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-teal_200 w-[31%]"
                    compId="704:147"
                    comWidth={137}
                    comHeight={54}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                </Column>
                <Row
                  className="items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[71%]"
                  compId="704:378"
                  comWidth={312}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Text
                    className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[9%]"
                    compId="704:379"
                    comWidth={28}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`5.0`}</Text>
                  <RatingBar
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] my-[1px]"
                    compId="575"
                    comWidth={136}
                    comHeight={24}
                    compLeft={16}
                    compRight={0}
                    compType="RatingBar"
                    value={5}
                    starCount={5}
                    activeColor="var(--orange_A100)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                  <Line
                    className="bg-teal_200 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] opacity-op5 rotate-[90deg] w-[1px]"
                    compId="704:391"
                    comWidth={1}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[32%]"
                    compId="704:386"
                    comWidth={100}
                    comHeight={27}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`Review (12)`}</Text>
                </Row>
                <Button
                  className="bg-teal_200 font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[36%]"
                  compId="35"
                  comWidth={160}
                  comHeight={60}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >{`Add to Cart`}</Button>
              </Column>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="840:54"
              comWidth={519}
              comHeight={680}
              compLeft={31}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_maskgroup_22.svg"}
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] object-cover w-[100%]"
                compId="840:71"
                comWidth={519}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="MaskGroup"
              />
              <Column
                className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[74%]"
                compId="840:55"
                comWidth={383}
                comHeight={267}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Column
                  className="items-center justify-start w-[100%]"
                  compId="840:56"
                  comWidth={383}
                  comHeight={116}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 w-[100%]"
                    compId="840:57"
                    comWidth={383}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Sun Protection SPF 30`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-teal_200 w-[36%]"
                    compId="840:58"
                    comWidth={137}
                    comHeight={54}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                </Column>
                <Row
                  className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[81%]"
                  compId="840:61"
                  comWidth={312}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Text
                    className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[9%]"
                    compId="840:62"
                    comWidth={28}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`5.0`}</Text>
                  <RatingBar
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] my-[1px]"
                    compId="576"
                    comWidth={136}
                    comHeight={24}
                    compLeft={16}
                    compRight={0}
                    compType="RatingBar"
                    value={5}
                    starCount={5}
                    activeColor="var(--orange_A100)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                  <Line
                    className="bg-teal_200 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] opacity-op5 rotate-[90deg] w-[1px]"
                    compId="840:69"
                    comWidth={1}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[32%]"
                    compId="840:70"
                    comWidth={100}
                    comHeight={27}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`Review (12)`}</Text>
                </Row>
                <Button
                  className="bg-teal_200 font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[42%]"
                  compId="36"
                  comWidth={160}
                  comHeight={60}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >{`Add to Cart`}</Button>
              </Column>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="840:74"
              comWidth={519}
              comHeight={680}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_maskgroup_23.svg"}
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] object-cover w-[100%]"
                compId="840:91"
                comWidth={519}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="MaskGroup"
              />
              <Column
                className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[63%]"
                compId="840:75"
                comWidth={329}
                comHeight={267}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Column
                  className="items-center justify-start w-[100%]"
                  compId="840:76"
                  comWidth={329}
                  comHeight={116}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 w-[100%]"
                    compId="840:77"
                    comWidth={329}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Face Oil Controller`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-teal_200 w-[42%]"
                    compId="840:78"
                    comWidth={137}
                    comHeight={54}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                </Column>
                <Row
                  className="items-center justify-between lg:ml-[5px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] lg:mr-[4px] xl:mr-[5px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] 2xl:mx-[6px] w-[95%]"
                  compId="840:81"
                  comWidth={312}
                  comHeight={27}
                  compLeft={9}
                  compRight={8}
                  compType="Row"
                >
                  <Text
                    className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[9%]"
                    compId="840:82"
                    comWidth={28}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`5.0`}</Text>
                  <RatingBar
                    className="my-[1px]"
                    compId="577"
                    comWidth={136}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="RatingBar"
                    value={5}
                    starCount={5}
                    activeColor="var(--orange_A100)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                  <Line
                    className="bg-teal_200 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] opacity-op5 rotate-[90deg] w-[1px]"
                    compId="840:89"
                    comWidth={1}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[32%]"
                    compId="840:90"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Review (12)`}</Text>
                </Row>
                <Button
                  className="bg-teal_200 font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[49%]"
                  compId="37"
                  comWidth={160}
                  comHeight={60}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >{`Add to Cart`}</Button>
              </Column>
            </Column>
          </List>
        </Column>
        <Column
          className="font-montserrat items-center justify-start lg:mt-[103px] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[160px] mt-[178px] w-[100%]"
          compId="530"
          comWidth={1920}
          comHeight={769}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compId="528"
            comWidth={1920}
            comHeight={68}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-medium xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[21%]"
              compId="840:96"
              comWidth={402}
              comHeight={68}
              compLeft={150}
              compRight={0}
              compType="Text"
            >{`New Products`}</Text>
            <Image
              src={"images/img_categories.svg"}
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mr-[100px] 2xl:mr-[112px] 3xl:mr-[135px] mr-[150px] lg:mr-[87px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain w-[6%]"
              compId="840:97"
              comWidth={112}
              comHeight={48}
              compLeft={0}
              compRight={150}
              compType="Image"
              alt="categories"
            />
          </Row>
          <List
            className="font-poppins lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] w-[84%]"
            compId="529"
            comWidth={1621}
            comHeight={621}
            compLeft={10}
            compRight={10}
            compType="List"
            orientation="horizontal"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="840:104"
              comWidth={519}
              comHeight={621}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] w-[100%]"
                compId="567"
                comWidth={519}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_maskgroup_24.svg"}
                  className="absolute lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] inset-[0] object-cover w-[100%]"
                  compId="840:121"
                  comWidth={519}
                  comHeight={381}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
                <Column
                  className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[6%] rounded-radius50 top-[8%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="849:294"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={32}
                  compType="Column"
                >
                  <Text
                    className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                    compId="849:296"
                    comWidth={40}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`NEW`}</Text>
                </Column>
              </Stack>
              <Column
                className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[67%]"
                compId="840:105"
                comWidth={349}
                comHeight={208}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Column
                  className="items-center justify-start w-[100%]"
                  compId="840:106"
                  comWidth={349}
                  comHeight={116}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 w-[100%]"
                    compId="840:107"
                    comWidth={349}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Hand & Body Lotion`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-teal_200 w-[39%]"
                    compId="840:108"
                    comWidth={137}
                    comHeight={54}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                </Column>
                <Button
                  className="bg-teal_200 font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[46%]"
                  compId="38"
                  comWidth={160}
                  comHeight={60}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >{`Add to Cart`}</Button>
              </Column>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="840:124"
              comWidth={519}
              comHeight={621}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] w-[100%]"
                compId="569"
                comWidth={519}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_maskgroup_25.svg"}
                  className="absolute lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] inset-[0] object-cover w-[100%]"
                  compId="840:141"
                  comWidth={519}
                  comHeight={381}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
                <Column
                  className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[6%] rounded-radius50 top-[8%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="849:297"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={32}
                  compType="Column"
                >
                  <Text
                    className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                    compId="849:299"
                    comWidth={40}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`NEW`}</Text>
                </Column>
              </Stack>
              <Column
                className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[49%]"
                compId="840:125"
                comWidth={253}
                comHeight={208}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Column
                  className="items-center justify-start w-[100%]"
                  compId="840:126"
                  comWidth={253}
                  comHeight={116}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 w-[100%]"
                    compId="840:127"
                    comWidth={253}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Skin Repairing`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-teal_200 w-[54%]"
                    compId="840:128"
                    comWidth={137}
                    comHeight={54}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                </Column>
                <Button
                  className="bg-teal_200 font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[63%]"
                  compId="39"
                  comWidth={160}
                  comHeight={60}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >{`Add to Cart`}</Button>
              </Column>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="840:144"
              comWidth={519}
              comHeight={621}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Column
                className="bg-gray_400 items-center justify-start w-[100%]"
                compId="840:161"
                comWidth={519}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start lg:mb-[166px] xl:mb-[190px] 2xl:mb-[213px] 3xl:mb-[256px] mb-[285px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[19px] xl:mx-[22px] 2xl:mx-[24px] 3xl:mx-[29px] mx-[33px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="849:300"
                  comWidth={64}
                  comHeight={64}
                  compLeft={33}
                  compRight={33}
                  compType="Column"
                >
                  <Text
                    className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                    compId="849:302"
                    comWidth={40}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`NEW`}</Text>
                </Column>
              </Column>
              <Column
                className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[50%]"
                compId="840:145"
                comWidth={261}
                comHeight={208}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Column
                  className="items-center justify-start w-[100%]"
                  compId="840:146"
                  comWidth={261}
                  comHeight={116}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 w-[100%]"
                    compId="840:147"
                    comWidth={261}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Eye Shadow 16`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-teal_200 w-[52%]"
                    compId="840:148"
                    comWidth={137}
                    comHeight={54}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                </Column>
                <Button
                  className="bg-teal_200 font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[61%]"
                  compId="40"
                  comWidth={160}
                  comHeight={60}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >{`Add to Cart`}</Button>
              </Column>
            </Column>
          </List>
        </Column>
        <Column
          className="bg-teal_200 font-poppins items-start justify-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[84%]"
          compId="532"
          comWidth={1620}
          comHeight={245}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Image
            src={"images/img_ornament_1.svg"}
            className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] object-contain opacity-op5 w-[6%]"
            compId="849:353"
            comWidth={104}
            comHeight={56}
            compLeft={17}
            compRight={17}
            compType="Image"
            alt="ornament"
          />
          <Column
            className="w-[100%]"
            compId="585"
            comWidth={1620}
            comHeight={115}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start w-[100%]"
              compId="531"
              comWidth={1620}
              comHeight={115}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_newsletter.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] 2xl:mb-[6px] 3xl:mb-[8px] mb-[9px] ml-[106px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[95px] mt-[10px] 2xl:mt-[7px] 3xl:mt-[9px] lg:my-[5px] xl:my-[6px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="849:313"
                comWidth={96}
                comHeight={96}
                compLeft={106}
                compRight={0}
                compType="Image"
                alt="Newsletter"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[32%]"
                compId="701:984"
                comWidth={522}
                comHeight={115}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[91%]"
                  compId="701:985"
                  comWidth={475}
                  comHeight={59}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Join our Newsletter`}</Text>
                <Text
                  className="font-normal font-poppins lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                  compId="701:986"
                  comWidth={522}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Get the latest news of our new releases, sales, and promo!`}</Text>
              </Column>
              <Stack
                className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] ml-[232px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[32%]"
                compId="571"
                comWidth={526}
                comHeight={76}
                compLeft={232}
                compRight={0}
                compType="Stack"
              >
                <Input
                  className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_700 text-gray_700 text-left tracking-ls1 w-[100%]"
                  compId="43"
                  comWidth={526}
                  comHeight={76}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group43"
                  placeholder={`Enter your email`}
                ></Input>
                <Button
                  className="absolute bg-teal_200 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                  compId="28"
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
            compId="586"
            comWidth={1620}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_ornament_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mx-[31px] xl:mx-[36px] 2xl:mx-[40px] 3xl:mx-[48px] mx-[54px] object-contain opacity-op5 w-[6%]"
              compId="849:316"
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
          className="font-poppins xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="710:634"
          comWidth={1920}
          comHeight={585}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-gray_900 items-center justify-end w-[100%]"
            compId="536"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
              compId="535"
              comWidth={1920}
              comHeight={237}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] w-[46%]"
                compId="579"
                comWidth={879}
                comHeight={217}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] w-[43%]"
                  compId="710:613"
                  comWidth={381}
                  comHeight={196}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[25%]"
                    compId="710:614"
                    comWidth={96}
                    comHeight={54}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Lovia`}</Text>
                  <Text
                    className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="710:615"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Image
                    src={"images/img_sosmedia_1.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[44%]"
                    compId="710:574"
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
                  compId="710:584"
                  comWidth={109}
                  comHeight={217}
                  compLeft={138}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="710:585"
                    comWidth={109}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Products`}</Text>
                  <Column
                    className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                    compId="710:586"
                    comWidth={101}
                    comHeight={156}
                    compLeft={0}
                    compRight={8}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                      compId="710:587"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="710:588"
                      comWidth={101}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`New Arrival`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                      compId="710:589"
                      comWidth={69}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Popular`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                      compId="710:590"
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
                  compId="710:591"
                  comWidth={117}
                  comHeight={217}
                  compLeft={134}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="710:592"
                    comWidth={117}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Company`}</Text>
                  <Column
                    className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="710:593"
                    comWidth={75}
                    comHeight={156}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                      compId="710:594"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                      compId="710:595"
                      comWidth={48}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`News`}</Text>
                    <Text
                      className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                      compId="710:596"
                      comWidth={72}
                      comHeight={27}
                      compLeft={0}
                      compRight={3}
                      compType="Text"
                    >{`Careers`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="710:597"
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
                compId="710:598"
                comWidth={147}
                comHeight={217}
                compLeft={122}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                  compId="710:599"
                  comWidth={99}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Support`}</Text>
                <Column
                  className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="587"
                  comWidth={147}
                  comHeight={156}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="710:600"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                      compId="710:601"
                      comWidth={107}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                      compId="710:602"
                      comWidth={146}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`Delivery Service`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                      compId="710:603"
                      comWidth={122}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Privacy Policy`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="710:604"
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
                compId="710:617"
                comWidth={381}
                comHeight={237}
                compLeft={142}
                compRight={99}
                compType="Column"
              >
                <Text
                  className="font-montserrat font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[25%]"
                  compId="710:618"
                  comWidth={96}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Contact`}</Text>
                <Text
                  className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                  compId="710:633"
                  comWidth={381}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <Column
                  className="font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                  compId="710:624"
                  comWidth={243}
                  comHeight={80}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start w-[100%]"
                    compId="710:625"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_call_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="710:626"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Call"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                      compId="710:628"
                      comWidth={211}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`+1234567890`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="710:629"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_email.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="710:630"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Email"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                      compId="710:632"
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
              compId="710:557"
              comWidth={1620}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[84%]"
              compId="710:552"
              comWidth={1620}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Text
                className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                compId="710:555"
                comWidth={282}
                comHeight={21}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Lovia. All Right Reseved`}</Text>
              <Text
                className="font-normal 3xl:ml-[1156px] ml-[1284px] lg:ml-[749px] xl:ml-[856px] 2xl:ml-[963px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                compId="710:553"
                comWidth={22}
                comHeight={27}
                compLeft={1284}
                compRight={0}
                compType="Text"
              >{`EN`}</Text>
              <Text
                className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                compId="710:554"
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

export default HomepageV3Page;
