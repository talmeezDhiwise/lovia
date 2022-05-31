import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { List } from "components/List";
import { Slider } from "components/Slider";
import { PagerIndicator } from "components/PagerIndicator";
import { RatingBar } from "components/RatingBar";
import { Input } from "components/Input";

const HomepageV1Page = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="bg-gray_50 font-poppins items-start justify-start mx-[auto] w-[100%]"
        compId="309:14"
        comWidth={1920}
        comHeight={9362}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="w-[100%]"
          compId="417"
          comWidth={1920}
          comHeight={5727}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="14"
            comWidth={1920}
            comHeight={120}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Row
              className="bg-gray_50 items-start justify-between w-[100%]"
              compId="318"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[5%]"
                compId="309:465"
                comWidth={96}
                comHeight={54}
                compLeft={150}
                compRight={0}
                compType="Text"
              >{`Lovia`}</Text>
              <Column
                className="items-start justify-start lg:mb-[20px] xl:mb-[23px] 2xl:mb-[26px] 3xl:mb-[31px] mb-[35px] xl:mr-[100px] 2xl:mr-[112px] 3xl:mr-[135px] mr-[150px] lg:mr-[87px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[56%]"
                compId="317"
                comWidth={1067}
                comHeight={45}
                compLeft={0}
                compRight={150}
                compType="Column"
              >
                <Column
                  className="w-[100%]"
                  compId="419"
                  comWidth={1067}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-start w-[100%]"
                    compId="316"
                    comWidth={1067}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between mb-[1px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] w-[48%]"
                      compId="415"
                      comWidth={515}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[16%]"
                        compId="309:460"
                        comWidth={80}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Products`}</Text>
                      <Text
                        className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[20%]"
                        compId="309:461"
                        comWidth={101}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`New Arrival`}</Text>
                      <Text
                        className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[8%]"
                        compId="309:462"
                        comWidth={40}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Blog`}</Text>
                      <Text
                        className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[10%]"
                        compId="309:463"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`About`}</Text>
                    </Row>
                    <Column
                      className="items-start justify-start lg:ml-[206px] xl:ml-[236px] 2xl:ml-[265px] 3xl:ml-[318px] ml-[354px] w-[9%]"
                      compId="370"
                      comWidth={100}
                      comHeight={36}
                      compLeft={354}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-red_300 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px] w-[8px]"
                        compId="804:11"
                        comWidth={8}
                        comHeight={8}
                        compLeft={10}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start w-[100%]"
                        compId="420"
                        comWidth={100}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Image
                          src={"images/img_icon.svg"}
                          className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] 2xl:mr-[3px] mr-[4px] object-contain w-[96%]"
                          compId="309:469"
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
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[66px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      compId="601:17"
                      comWidth={32}
                      comHeight={32}
                      compLeft={66}
                      compRight={0}
                      compType="Image"
                      alt="Menu"
                    />
                  </Row>
                </Column>
                <Line
                  className="bg-teal_200 h-[2px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:mx-[11px] xl:mx-[13px] 2xl:mx-[15px] 3xl:mx-[18px] mx-[20px] w-[4%]"
                  compId="807:20"
                  comWidth={40}
                  comHeight={2}
                  compLeft={20}
                  compRight={20}
                  compType="Line"
                />
              </Column>
            </Row>
          </header>
          <Row
            className="items-center justify-start lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] mt-[50px] w-[100%]"
            compId="323"
            comWidth={1920}
            comHeight={771}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Stack
              className="lg:h-[450px] xl:h-[515px] 2xl:h-[579px] 3xl:h-[695px] h-[771px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] w-[61%]"
              compId="372"
              comWidth={1173}
              comHeight={771}
              compLeft={150}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_image.svg"}
                className="absolute lg:h-[450px] xl:h-[515px] 2xl:h-[579px] 3xl:h-[695px] h-[771px] object-contain right-[0] w-[47%]"
                compId="630:3"
                comWidth={554}
                comHeight={771}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="image"
              />
              <Column
                className="absolute items-start justify-start left-[0] top-[9%] w-[79%]"
                compId="316:10"
                comWidth={932}
                comHeight={512}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium font-montserrat 3xl:leading-lh100 leading-lh11200 lg:leading-lh65 xl:leading-lh74 2xl:leading-lh84 lg:text-fs56 xl:text-fs64 2xl:text-fs72 3xl:text-fs86 text-fs96 text-gray_900 text-left w-[100%]"
                  compId="309:128"
                  comWidth={932}
                  comHeight={336}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`True beauty can radiate your uniqueness`}</Text>
                <Text
                  className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[82%]"
                  compId="309:130"
                  comWidth={764}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Discover beauty products that help you shine`}</Text>
                <Row
                  className="font-poppins lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[46%]"
                  compId="807:14"
                  comWidth={432}
                  comHeight={60}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Button
                    className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[100%]"
                    compId="2"
                    comWidth={200}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Shop Now`}</Button>
                  <Button
                    className="border border-solid border-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 w-[100%]"
                    compId="1"
                    comWidth={200}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Learn More`}</Button>
                </Row>
              </Column>
            </Stack>
            <Column
              className="items-start lg:mb-[23px] xl:mb-[27px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[41px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] mt-[46px] w-[18%]"
              compId="322"
              comWidth={336}
              comHeight={684}
              compLeft={49}
              compRight={0}
              compType="Column"
            >
              <Column
                className="items-end w-[100%]"
                compId="421"
                comWidth={336}
                comHeight={315}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[184px] xl:h-[211px] 2xl:h-[237px] 3xl:h-[284px] h-[315px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[95%]"
                  compId="374"
                  comWidth={320}
                  comHeight={315}
                  compLeft={10}
                  compRight={0}
                  compType="Stack"
                >
                  <div
                    className="absolute border border-solid border-teal_200 lg:h-[175px] xl:h-[201px] 2xl:h-[226px] 3xl:h-[271px] h-[300px] right-[0] rounded-radius400 top-[0] lg:w-[175px] xl:w-[200px] 2xl:w-[225px] 3xl:w-[270px] w-[300px]"
                    compId="847:58"
                    comWidth={300}
                    comHeight={300}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <Image
                    src={"images/img_image_1.svg"}
                    className="absolute bottom-[0] lg:h-[175px] xl:h-[201px] 2xl:h-[226px] 3xl:h-[271px] h-[300px] left-[0] object-contain lg:w-[175px] xl:w-[200px] 2xl:w-[225px] 3xl:w-[270px] w-[300px]"
                    compId="807:13"
                    comWidth={300}
                    comHeight={300}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                </Stack>
              </Column>
              <Stack
                className="lg:h-[195px] xl:h-[223px] 2xl:h-[251px] 3xl:h-[301px] h-[334px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[94%]"
                compId="376"
                comWidth={316}
                comHeight={334}
                compLeft={0}
                compRight={10}
                compType="Stack"
              >
                <div
                  className="absolute border border-solid border-teal_200 bottom-[0] lg:h-[175px] xl:h-[201px] 2xl:h-[226px] 3xl:h-[271px] h-[300px] left-[0] rounded-radius400 lg:w-[175px] xl:w-[200px] 2xl:w-[225px] 3xl:w-[270px] w-[300px]"
                  compId="847:59"
                  comWidth={300}
                  comHeight={300}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Image
                  src={"images/img_image_2.svg"}
                  className="absolute lg:h-[175px] xl:h-[201px] 2xl:h-[226px] 3xl:h-[271px] h-[300px] object-contain right-[0] top-[0] lg:w-[175px] xl:w-[200px] 2xl:w-[225px] 3xl:w-[270px] w-[300px]"
                  compId="847:60"
                  comWidth={300}
                  comHeight={300}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image"
                />
              </Stack>
            </Column>
          </Row>
          <Row
            className="bg-gray_300 font-montserrat items-start justify-end lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="324"
            comWidth={1920}
            comHeight={1059}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-start justify-start lg:mb-[113px] xl:mb-[129px] 2xl:mb-[145px] 3xl:mb-[174px] mb-[194px] xl:mt-[100px] 2xl:mt-[112px] 3xl:mt-[135px] mt-[150px] lg:mt-[87px] w-[30%]"
              compId="810:21"
              comWidth={576}
              comHeight={715}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[88%]"
                compId="365:40"
                comWidth={505}
                comHeight={68}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Why Choosing Us`}</Text>
              <Column
                className="font-poppins lg:h-[336px] xl:h-[385px] 2xl:h-[433px] 3xl:h-[519px] h-[576px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] mt-[71px] w-[100%]"
                compId="422"
                comWidth={576}
                comHeight={576}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <List
                  className="gap-[0] lg:h-[336px] xl:h-[385px] 2xl:h-[433px] 3xl:h-[519px] h-[576px] min-h-[auto] w-[100%]"
                  compId="365:42"
                  comWidth={576}
                  comHeight={576}
                  compLeft={0}
                  compRight={0}
                  compType="List"
                  orientation="vertical"
                >
                  <Row
                    className="items-start justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]"
                    compId="365:43"
                    comWidth={576}
                    comHeight={108}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_quality.svg"}
                      className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                      compId="847:40"
                      comWidth={64}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Quality"
                    />
                    <Column
                      className="items-start justify-start w-[83%]"
                      compId="365:49"
                      comWidth={480}
                      comHeight={108}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[26%]"
                        compId="365:50"
                        comWidth={123}
                        comHeight={36}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`54 Brands`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[100%]"
                        compId="365:51"
                        comWidth={480}
                        comHeight={64}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
                    </Column>
                  </Row>
                  <Row
                    className="items-start justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]"
                    compId="365:52"
                    comWidth={576}
                    comHeight={108}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_fastdelivery.svg"}
                      className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                      compId="847:24"
                      comWidth={64}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="FastDelivery"
                    />
                    <Column
                      className="items-start justify-start w-[83%]"
                      compId="365:57"
                      comWidth={480}
                      comHeight={108}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[33%]"
                        compId="365:58"
                        comWidth={160}
                        comHeight={36}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Fast Delivery`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[100%]"
                        compId="365:59"
                        comWidth={480}
                        comHeight={64}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
                    </Column>
                  </Row>
                  <Row
                    className="items-start justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]"
                    compId="365:60"
                    comWidth={576}
                    comHeight={108}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_cashondeliver.svg"}
                      className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                      compId="847:28"
                      comWidth={64}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="CashOnDeliver"
                    />
                    <Column
                      className="items-start justify-start w-[83%]"
                      compId="365:65"
                      comWidth={480}
                      comHeight={108}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[31%]"
                        compId="365:66"
                        comWidth={149}
                        comHeight={36}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`COD Service`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[100%]"
                        compId="365:67"
                        comWidth={480}
                        comHeight={64}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
                    </Column>
                  </Row>
                  <Row
                    className="items-start justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]"
                    compId="611:282"
                    comWidth={576}
                    comHeight={108}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_quality_1.svg"}
                      className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                      compId="847:43"
                      comWidth={64}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Quality"
                    />
                    <Column
                      className="items-start justify-start w-[83%]"
                      compId="611:287"
                      comWidth={480}
                      comHeight={108}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[57%]"
                        compId="611:288"
                        comWidth={273}
                        comHeight={36}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`100% Original Products`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[100%]"
                        compId="611:289"
                        comWidth={480}
                        comHeight={64}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Column>
            <Image
              src={"images/img_image_3.svg"}
              className="lg:h-[500px] xl:h-[572px] 2xl:h-[643px] 3xl:h-[771px] h-[856px] lg:mb-[57px] xl:mb-[66px] 2xl:mb-[74px] 3xl:mb-[89px] mb-[99px] 3xl:ml-[116px] ml-[129px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[96px] 3xl:mr-[102px] mr-[113.89px] lg:mr-[66px] xl:mr-[75px] 2xl:mr-[85px] mt-[104px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] object-contain w-[50%]"
              compId="630:8"
              comWidth={951.11}
              comHeight={856}
              compLeft={129}
              compRight={113.89}
              compType="Image"
              alt="image"
            />
          </Row>
          <Column
            className="items-start justify-start xl:mt-[113px] 2xl:mt-[127px] 3xl:mt-[153px] mt-[170px] lg:mt-[99px] w-[100%]"
            compId="334"
            comWidth={1920}
            comHeight={909}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-medium font-montserrat mx-[auto] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[26%]"
              compId="326:37"
              comWidth={502}
              comHeight={68}
              compLeft={150}
              compRight={150}
              compType="Text"
            >{`Featured Product`}</Text>
            <Text
              className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 w-[25%]"
              compId="810:28"
              comWidth={480}
              comHeight={64}
              compLeft={150}
              compRight={150}
              compType="Text"
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
            <Row
              className="font-poppins items-center justify-start lg:mt-[37px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] mt-[65px] mx-[auto] w-[79%]"
              compId="326:49"
              comWidth={1523}
              comHeight={36}
              compLeft={150}
              compRight={150}
              compType="Row"
            >
              <Text
                className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[7%]"
                compId="326:41"
                comWidth={103}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Skincare`}</Text>
              <Text
                className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[9%]"
                compId="326:42"
                comWidth={130}
                comHeight={36}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Anti-Aging`}</Text>
              <Text
                className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[8%]"
                compId="326:43"
                comWidth={120}
                comHeight={36}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Hair Care`}</Text>
              <Text
                className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[8%]"
                compId="326:44"
                comWidth={128}
                comHeight={36}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Cosmetics`}</Text>
              <Text
                className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[4%]"
                compId="326:45"
                comWidth={68}
                comHeight={36}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Shop`}</Text>
              <Text
                className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[4%]"
                compId="326:46"
                comWidth={58}
                comHeight={36}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Men`}</Text>
              <Text
                className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[4%]"
                compId="326:47"
                comWidth={58}
                comHeight={36}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`New`}</Text>
              <Text
                className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[8%]"
                compId="810:29"
                comWidth={129}
                comHeight={36}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Best Seller`}</Text>
              <Text
                className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[12%]"
                compId="810:30"
                comWidth={176}
                comHeight={36}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Bundles & Sets`}</Text>
              <Text
                className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[8%]"
                compId="810:31"
                comWidth={121}
                comHeight={36}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Gift Cards`}</Text>
            </Row>
            <Column
              className="items-start mt-[1px] w-[100%]"
              compId="423"
              comWidth={1920}
              comHeight={2}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Line
                className="bg-teal_200 h-[2px] lg:mx-[134px] xl:mx-[154px] 2xl:mx-[173px] 3xl:mx-[208px] mx-[231px] w-[2%]"
                compId="810:32"
                comWidth={40}
                comHeight={2}
                compLeft={231}
                compRight={231}
                compType="Line"
              />
            </Column>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={6}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="font-poppins lg:mt-[30px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] mt-[53px] mx-[auto] w-[84%]"
              items={[...Array(36)].map(() => (
                <>
                  <Column
                    className="items-center justify-start xl:mx-[10px] 2xl:mx-[12px] 3xl:mx-[14px] mx-[16px] lg:mx-[9px]"
                    compId="329:65"
                    comWidth={243}
                    comHeight={476}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Stack
                      className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] w-[100%]"
                      compId="378"
                      comWidth={243}
                      comHeight={381}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Image
                        src={"images/img_maskgroup.svg"}
                        className="absolute lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] inset-[0] object-cover w-[100%]"
                        compId="329:69"
                        comWidth={243}
                        comHeight={381}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="MaskGroup"
                      />
                      <Column
                        className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[10%] rounded-radius50 top-[6%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                        compId="810:35"
                        comWidth={64}
                        comHeight={64}
                        compLeft={0}
                        compRight={24}
                        compType="Column"
                      >
                        <Text
                          className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                          compId="810:34"
                          comWidth={40}
                          comHeight={27}
                          compLeft={10}
                          compRight={10}
                          compType="Text"
                        >{`NEW`}</Text>
                      </Column>
                    </Stack>
                    <Column
                      className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[42%]"
                      compId="329:66"
                      comWidth={101}
                      comHeight={71}
                      compLeft={10}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[100%]"
                        compId="329:67"
                        comWidth={101}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Face Scrub`}</Text>
                      <Text
                        className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[59%]"
                        compId="329:68"
                        comWidth={60}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`$299`}</Text>
                    </Column>
                  </Column>
                </>
              ))}
            />
            <Row
              className="items-center justify-start lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[84%]"
              compId="810:94"
              comWidth={1620}
              comHeight={48}
              compLeft={150}
              compRight={150}
              compType="Row"
            >
              <PagerIndicator
                className="h-[12px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] w-[auto]"
                compId="13"
                comWidth={112}
                comHeight={12}
                compLeft={0}
                compRight={0}
                compType="PagerIndicator"
                count={6}
                activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-teal_200"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_301"
                sliderRef={sliderRef}
                selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
                unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
              />
              <Image
                src={"images/img_prev.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 2xl:ml-[1011px] 3xl:ml-[1213px] ml-[1348px] lg:ml-[786px] xl:ml-[899px] object-contain w-[5%]"
                compId="617:48"
                comWidth={80}
                comHeight={48}
                compLeft={1348}
                compRight={0}
                compType="Image"
                alt="prev"
              />
              <Image
                src={"images/img_next.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain w-[5%]"
                compId="617:43"
                comWidth={80}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="next"
              />
            </Row>
          </Column>
          <Column
            className="bg-gray_300 font-montserrat items-center justify-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] xl:py-[100px] 2xl:py-[112px] 3xl:py-[135px] py-[150px] lg:py-[87px] w-[100%]"
            compId="360"
            comWidth={1920}
            comHeight={2408}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-medium mx-[auto] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[22%]"
              compId="331:104"
              comWidth={429}
              comHeight={68}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Best Collection`}</Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] w-[84%]"
              compId="409"
              comWidth={1618}
              comHeight={1960}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="vertical"
            >
              <Stack
                className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] 2xl:mr-[102px] 3xl:mr-[122px] mr-[136px] lg:mr-[79px] xl:mr-[90px] lg:my-[23px] xl:my-[26px] 2xl:my-[30px] 3xl:my-[36px] my-[40px] w-[92%]"
                compId="390"
                comWidth={1482}
                comHeight={600}
                compLeft={0}
                compRight={136}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder.svg"}
                  className="absolute lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] left-[0] object-contain w-[54%]"
                  compId="631:25"
                  comWidth={794}
                  comHeight={600}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="absolute bg-teal_200 h-[max-content] inset-y-[0] items-start justify-center my-[auto] lg:py-[36px] xl:py-[41px] 2xl:py-[46px] 3xl:py-[55px] py-[62px] right-[0] w-[54%]"
                  compId="352"
                  comWidth={794}
                  comHeight={370}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium font-montserrat lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[75%]"
                    compId="810:99"
                    comWidth={594}
                    comHeight={59}
                    compLeft={32}
                    compRight={32}
                    compType="Text"
                  >{`Night Skincare Products`}</Text>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                    compId="810:98"
                    comWidth={659}
                    comHeight={64}
                    compLeft={32}
                    compRight={32}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Row
                    className="font-poppins items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[37%]"
                    compId="810:102"
                    comWidth={291}
                    comHeight={59}
                    compLeft={32}
                    compRight={32}
                    compType="Row"
                  >
                    <Button
                      className="bg-gray_50 font-normal not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 w-[47%]"
                      compId="5"
                      comWidth={136}
                      comHeight={59}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                    <Button
                      className="border border-gray_50 border-solid font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[45%]"
                      compId="4"
                      comWidth={131}
                      comHeight={59}
                      compLeft={24}
                      compRight={0}
                      compType="Button"
                    >{`View Detail`}</Button>
                  </Row>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] 2xl:ml-[103px] 3xl:ml-[124px] ml-[138px] lg:ml-[80px] xl:ml-[92px] lg:my-[23px] xl:my-[26px] 2xl:my-[30px] 3xl:my-[36px] my-[40px] w-[91%]"
                compId="392"
                comWidth={1480}
                comHeight={600}
                compLeft={138}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_1.svg"}
                  className="absolute lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] object-contain right-[0] w-[54%]"
                  compId="810:104"
                  comWidth={794}
                  comHeight={600}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="absolute bg-teal_200 h-[max-content] inset-y-[0] items-start justify-center left-[0] my-[auto] lg:py-[36px] xl:py-[41px] 2xl:py-[46px] 3xl:py-[55px] py-[62px] w-[54%]"
                  compId="354"
                  comWidth={794}
                  comHeight={370}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium font-montserrat lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[76%]"
                    compId="810:108"
                    comWidth={601}
                    comHeight={59}
                    compLeft={32}
                    compRight={32}
                    compType="Text"
                  >{`Anti Aging Sakura Series`}</Text>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                    compId="810:109"
                    comWidth={659}
                    comHeight={64}
                    compLeft={32}
                    compRight={32}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Row
                    className="font-poppins items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[37%]"
                    compId="810:110"
                    comWidth={291}
                    comHeight={59}
                    compLeft={32}
                    compRight={32}
                    compType="Row"
                  >
                    <Button
                      className="bg-gray_50 font-normal not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 w-[47%]"
                      compId="11"
                      comWidth={136}
                      comHeight={59}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                    <Button
                      className="border border-gray_50 border-solid font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[45%]"
                      compId="10"
                      comWidth={131}
                      comHeight={59}
                      compLeft={24}
                      compRight={0}
                      compType="Button"
                    >{`View Detail`}</Button>
                  </Row>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] 2xl:mr-[102px] 3xl:mr-[122px] mr-[136px] lg:mr-[79px] xl:mr-[90px] lg:my-[23px] xl:my-[26px] 2xl:my-[30px] 3xl:my-[36px] my-[40px] w-[92%]"
                compId="394"
                comWidth={1482}
                comHeight={600}
                compLeft={0}
                compRight={136}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_2.svg"}
                  className="absolute lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] left-[0] object-contain w-[54%]"
                  compId="810:115"
                  comWidth={794}
                  comHeight={600}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="absolute bg-teal_200 h-[max-content] inset-y-[0] items-start justify-center my-[auto] lg:py-[36px] xl:py-[41px] 2xl:py-[46px] 3xl:py-[55px] py-[62px] right-[0] w-[54%]"
                  compId="356"
                  comWidth={794}
                  comHeight={370}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium font-montserrat lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[13px] 3xl:mr-[16px] mr-[18px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[94%]"
                    compId="810:119"
                    comWidth={744}
                    comHeight={59}
                    compLeft={32}
                    compRight={18}
                    compType="Text"
                  >{`Anti Dandruff Hair Care Series`}</Text>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                    compId="810:120"
                    comWidth={659}
                    comHeight={64}
                    compLeft={32}
                    compRight={32}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Row
                    className="font-poppins items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[37%]"
                    compId="810:121"
                    comWidth={291}
                    comHeight={59}
                    compLeft={32}
                    compRight={32}
                    compType="Row"
                  >
                    <Button
                      className="bg-gray_50 font-normal not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 w-[47%]"
                      compId="8"
                      comWidth={136}
                      comHeight={59}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                    <Button
                      className="border border-gray_50 border-solid font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[45%]"
                      compId="7"
                      comWidth={131}
                      comHeight={59}
                      compLeft={24}
                      compRight={0}
                      compType="Button"
                    >{`View Detail`}</Button>
                  </Row>
                </Column>
              </Stack>
            </List>
          </Column>
        </Column>
        <Row
          className="font-montserrat items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] xl:mx-[100px] 2xl:mx-[113px] 3xl:mx-[135px] mx-[151px] lg:mx-[88px] w-[73%]"
          compId="847:50"
          comWidth={1399}
          comHeight={941}
          compLeft={151}
          compRight={151}
          compType="Row"
        >
          <Column
            className="items-start w-[36%]"
            compId="847:49"
            comWidth={510}
            comHeight={941}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[79%]"
              compId="810:226"
              comWidth={402}
              comHeight={68}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`New Products`}</Text>
            <Column
              className="font-poppins lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
              compId="425"
              comWidth={510}
              comHeight={793}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                compId="410"
                comWidth={510}
                comHeight={793}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                  compId="810:263"
                  comWidth={510}
                  comHeight={243}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_placeholder_3.svg"}
                    className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="810:147"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="items-start justify-start lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[46%]"
                    compId="810:136"
                    comWidth={235}
                    comHeight={98}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                      compId="810:137"
                      comWidth={235}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Hand & Body Lotion`}</Text>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[64%]"
                      compId="810:254"
                      comWidth={150}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[55%]"
                        compId="810:253"
                        comWidth={82}
                        comHeight={54}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`$199`}</Text>
                      <Text
                        className="font-medium line-through lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[40%]"
                        compId="810:138"
                        comWidth={60}
                        comHeight={36}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`$299`}</Text>
                    </Row>
                  </Column>
                </Row>
                <Row
                  className="items-start justify-between lg:mr-[36px] xl:mr-[41px] 2xl:mr-[46px] 3xl:mr-[55px] mr-[62px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[88%]"
                  compId="810:264"
                  comWidth={448}
                  comHeight={243}
                  compLeft={0}
                  compRight={62}
                  compType="Row"
                >
                  <Image
                    src={"images/img_placeholder_4.svg"}
                    className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="810:270"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="items-start justify-start lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[39%]"
                    compId="810:265"
                    comWidth={173}
                    comHeight={98}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                      compId="810:266"
                      comWidth={173}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Skin Repairing`}</Text>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[87%]"
                      compId="810:267"
                      comWidth={150}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[55%]"
                        compId="810:268"
                        comWidth={82}
                        comHeight={54}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`$199`}</Text>
                      <Text
                        className="font-medium line-through lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[40%]"
                        compId="810:269"
                        comWidth={60}
                        comHeight={36}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`$299`}</Text>
                    </Row>
                  </Column>
                </Row>
                <Row
                  className="items-start justify-between lg:mr-[34px] xl:mr-[39px] 2xl:mr-[44px] 3xl:mr-[53px] mr-[59px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[88%]"
                  compId="810:273"
                  comWidth={451}
                  comHeight={243}
                  compLeft={0}
                  compRight={59}
                  compType="Row"
                >
                  <Image
                    src={"images/img_placeholder_5.svg"}
                    className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="810:279"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="items-start justify-start lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[39%]"
                    compId="810:274"
                    comWidth={176}
                    comHeight={98}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                      compId="810:275"
                      comWidth={176}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Eye Shadow 16`}</Text>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[85%]"
                      compId="810:276"
                      comWidth={150}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[55%]"
                        compId="810:277"
                        comWidth={82}
                        comHeight={54}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`$199`}</Text>
                      <Text
                        className="font-medium line-through lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[40%]"
                        compId="810:278"
                        comWidth={60}
                        comHeight={36}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`$299`}</Text>
                    </Row>
                  </Column>
                </Row>
              </List>
            </Column>
          </Column>
          <Column
            className="items-start lg:ml-[183px] xl:ml-[209px] 2xl:ml-[235px] 3xl:ml-[282px] ml-[314px] w-[41%]"
            compId="847:48"
            comWidth={575}
            comHeight={941}
            compLeft={314}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[39%]"
              compId="810:227"
              comWidth={224}
              comHeight={68}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Popular`}</Text>
            <Column
              className="font-poppins lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
              compId="426"
              comWidth={575}
              comHeight={793}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                compId="411"
                comWidth={575}
                comHeight={793}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                  compId="810:282"
                  comWidth={575}
                  comHeight={243}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_placeholder_6.svg"}
                    className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="810:250"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="items-start justify-start lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] mb-[51px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] w-[52%]"
                    compId="810:239"
                    comWidth={300}
                    comHeight={158}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="427"
                      comWidth={300}
                      comHeight={98}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="810:262"
                        comWidth={300}
                        comHeight={98}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                          compId="810:240"
                          comWidth={300}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Skin Whitening with Vit C`}</Text>
                        <Text
                          className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[30%]"
                          compId="810:241"
                          comWidth={90}
                          comHeight={54}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`$299`}</Text>
                      </Column>
                    </Column>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[74%]"
                      compId="810:242"
                      comWidth={221}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[17%]"
                        compId="810:243"
                        comWidth={37}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                      <RatingBar
                        className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px]"
                        compId="412"
                        comWidth={176}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--orange_A100)"
                        size={((window.innerWidth - 15) * 32) / 1920}
                      ></RatingBar>
                    </Row>
                  </Column>
                </Row>
                <Row
                  className="items-start justify-between lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[93%]"
                  compId="810:283"
                  comWidth={534}
                  comHeight={243}
                  compLeft={0}
                  compRight={41}
                  compType="Row"
                >
                  <Image
                    src={"images/img_placeholder_7.svg"}
                    className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="810:296"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="items-start justify-start lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] mb-[51px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] w-[49%]"
                    compId="810:284"
                    comWidth={259}
                    comHeight={158}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="428"
                      comWidth={259}
                      comHeight={98}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="810:285"
                        comWidth={259}
                        comHeight={98}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                          compId="810:286"
                          comWidth={259}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Sun Protection SPF 30`}</Text>
                        <Text
                          className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[35%]"
                          compId="810:287"
                          comWidth={90}
                          comHeight={54}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`$299`}</Text>
                      </Column>
                    </Column>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[85%]"
                      compId="810:288"
                      comWidth={221}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[17%]"
                        compId="810:289"
                        comWidth={37}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                      <RatingBar
                        className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px]"
                        compId="413"
                        comWidth={176}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--orange_A100)"
                        size={((window.innerWidth - 15) * 32) / 1920}
                      ></RatingBar>
                    </Row>
                  </Column>
                </Row>
                <Row
                  className="items-start justify-between lg:mr-[45px] xl:mr-[52px] 2xl:mr-[58px] 3xl:mr-[70px] mr-[78px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[86%]"
                  compId="810:299"
                  comWidth={497}
                  comHeight={243}
                  compLeft={0}
                  compRight={78}
                  compType="Row"
                >
                  <Image
                    src={"images/img_placeholder_8.svg"}
                    className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                    compId="810:312"
                    comWidth={243}
                    comHeight={243}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="items-center justify-start lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] mb-[51px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] w-[45%]"
                    compId="810:300"
                    comWidth={222}
                    comHeight={158}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="810:301"
                      comWidth={222}
                      comHeight={98}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                        compId="810:302"
                        comWidth={222}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Face Oil Controller`}</Text>
                      <Text
                        className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[41%]"
                        compId="810:303"
                        comWidth={90}
                        comHeight={54}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`$299`}</Text>
                    </Column>
                    <Row
                      className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                      compId="810:304"
                      comWidth={221}
                      comHeight={36}
                      compLeft={0}
                      compRight={1}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[17%]"
                        compId="810:305"
                        comWidth={37}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                      <RatingBar
                        className="my-[1px]"
                        compId="414"
                        comWidth={176}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--orange_A100)"
                        size={((window.innerWidth - 15) * 32) / 1920}
                      ></RatingBar>
                    </Row>
                  </Column>
                </Row>
              </List>
            </Column>
          </Column>
        </Row>
        <Column
          className="font-montserrat items-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="418"
          comWidth={1920}
          comHeight={2374}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="items-center justify-start mx-[auto] w-[84%]"
            compId="827:116"
            comWidth={1621}
            comHeight={792}
            compLeft={10}
            compRight={10}
            compType="Column"
          >
            <Text
              className="font-medium mx-[auto] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[8%]"
              compId="827:118"
              comWidth={133}
              comHeight={68}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Blog`}</Text>
            <List
              className="font-poppins lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] mt-[70px] w-[100%]"
              compId="827:120"
              comWidth={1621}
              comHeight={654}
              compLeft={0}
              compRight={0}
              compType="List"
              orientation="horizontal"
            >
              <Stack
                className="lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] w-[100%]"
                compId="396"
                comWidth={519}
                comHeight={654}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] inset-[0] w-[100%]"
                  compId="398"
                  comWidth={519}
                  comHeight={654}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <div
                    className="absolute border-2 border-gray_300 border-solid bottom-[0] lg:h-[294px] xl:h-[337px] 2xl:h-[379px] 3xl:h-[454px] h-[504px] w-[100%]"
                    compId="827:122"
                    comWidth={519}
                    comHeight={504}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <div
                    className="absolute bg-bluegray_100 lg:h-[263px] xl:h-[301px] 2xl:h-[338px] 3xl:h-[406px] h-[450px] top-[0] w-[100%]"
                    compId="827:123"
                    comWidth={519}
                    comHeight={450}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                </Stack>
                <Column
                  className="absolute bottom-[6%] inset-x-[0] items-start justify-start mx-[auto] w-[88%]"
                  compId="339"
                  comWidth={455}
                  comHeight={131}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium leading-lh lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                    compId="827:124"
                    comWidth={455}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`We Offer the Best Quality Product to Our Customers`}</Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[42%]"
                    compId="827:125"
                    comWidth={191}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_700 font-poppins">
                      <>{`by `}</>
                    </span>
                    <span className="text-teal_200 font-poppins">
                      <>{`Admin`}</>
                    </span>
                    <span className="text-gray_700 font-poppins">
                      <>{`, 12 Jan 2021`}</>
                    </span>
                  </Text>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] w-[100%]"
                compId="400"
                comWidth={519}
                comHeight={654}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] inset-[0] w-[100%]"
                  compId="402"
                  comWidth={519}
                  comHeight={654}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <div
                    className="absolute border-2 border-gray_300 border-solid bottom-[0] lg:h-[294px] xl:h-[337px] 2xl:h-[379px] 3xl:h-[454px] h-[504px] w-[100%]"
                    compId="827:127"
                    comWidth={519}
                    comHeight={504}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <div
                    className="absolute bg-bluegray_100 lg:h-[263px] xl:h-[301px] 2xl:h-[338px] 3xl:h-[406px] h-[450px] top-[0] w-[100%]"
                    compId="827:128"
                    comWidth={519}
                    comHeight={450}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                </Stack>
                <Column
                  className="absolute bottom-[6%] inset-x-[0] items-start justify-start mx-[auto] w-[88%]"
                  compId="341"
                  comWidth={455}
                  comHeight={131}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium leading-lh lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                    compId="827:129"
                    comWidth={455}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`We Offer the Best Quality Product to Our Customers`}</Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[42%]"
                    compId="827:130"
                    comWidth={191}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_700 font-poppins">
                      <>{`by `}</>
                    </span>
                    <span className="text-teal_200 font-poppins">
                      <>{`Admin`}</>
                    </span>
                    <span className="text-gray_700 font-poppins">
                      <>{`, 12 Jan 2021`}</>
                    </span>
                  </Text>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] w-[100%]"
                compId="404"
                comWidth={519}
                comHeight={654}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] inset-[0] w-[100%]"
                  compId="406"
                  comWidth={519}
                  comHeight={654}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <div
                    className="absolute border-2 border-gray_300 border-solid bottom-[0] lg:h-[294px] xl:h-[337px] 2xl:h-[379px] 3xl:h-[454px] h-[504px] w-[100%]"
                    compId="827:132"
                    comWidth={519}
                    comHeight={504}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <div
                    className="absolute bg-bluegray_100 lg:h-[263px] xl:h-[301px] 2xl:h-[338px] 3xl:h-[406px] h-[450px] top-[0] w-[100%]"
                    compId="827:133"
                    comWidth={519}
                    comHeight={450}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                </Stack>
                <Column
                  className="absolute bottom-[6%] inset-x-[0] items-start justify-start mx-[auto] w-[88%]"
                  compId="343"
                  comWidth={455}
                  comHeight={131}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium leading-lh lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                    compId="827:134"
                    comWidth={455}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`We Offer the Best Quality Product to Our Customers`}</Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[42%]"
                    compId="827:135"
                    comWidth={191}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_700 font-poppins">
                      <>{`by `}</>
                    </span>
                    <span className="text-teal_200 font-poppins">
                      <>{`Admin`}</>
                    </span>
                    <span className="text-gray_700 font-poppins">
                      <>{`, 12 Jan 2021`}</>
                    </span>
                  </Text>
                </Column>
              </Stack>
            </List>
          </Column>
          <Stack
            className="lg:h-[251px] xl:h-[287px] 2xl:h-[322px] 3xl:h-[387px] h-[429px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[84%]"
            compId="408"
            comWidth={1620}
            comHeight={429}
            compLeft={10}
            compRight={10}
            compType="Stack"
          >
            <Image
              src={"images/img_placeholder_9.png"}
              className="absolute lg:h-[251px] xl:h-[287px] 2xl:h-[322px] 3xl:h-[387px] h-[429px] inset-[0] object-cover w-[100%]"
              compId="847:54"
              comWidth={1620}
              comHeight={429}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Column
              className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[9%] my-[auto] w-[32%]"
              compId="810:332"
              comWidth={518}
              comHeight={244}
              compLeft={138}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_900 text-left w-[91%]"
                compId="810:333"
                comWidth={471}
                comHeight={59}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Newsletter Sign Up`}</Text>
              <Text
                className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[71%]"
                compId="810:334"
                comWidth={369}
                comHeight={64}
                compLeft={0}
                compRight={10}
                compType="Text"
              >
                {
                  <>
                    {`Submit Your Email Here to Get The Latest `}
                    <br />
                    {`Product Information and Promotion`}
                  </>
                }
              </Text>
              <Column
                className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                compId="429"
                comWidth={518}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-evenly w-[100%]"
                  compId="810:327"
                  comWidth={518}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Input
                    className="bg-gray_50 placeholder:bg-transparent border-0 font-normal not-italic xl:pb-[12px] 3xl:pb-[16px] pb-[18.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] xl:pt-[11px] 3xl:pt-[15px] pt-[17.545px] lg:py-[10px] 2xl:py-[13px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_700 text-gray_700 text-left tracking-ls1 w-[80%]"
                    compId="15"
                    comWidth={413}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group15"
                    placeholder={`Enter your email`}
                  ></Input>
                  <Button
                    className="bg-teal_200 font-bold lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                    compId="12"
                    comWidth={105}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Join`}</Button>
                </Row>
              </Column>
            </Column>
          </Stack>
          <Row
            className="items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] opacity-op25 w-[84%]"
            compId="810:339"
            comWidth={1618}
            comHeight={108}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-normal font-playfairdisplay lg:ml-[34px] xl:ml-[39px] 2xl:ml-[43px] 3xl:ml-[52px] ml-[58.5px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] not-italic lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-gray_900 text-left w-[10%]"
              compId="841:8"
              comWidth={164}
              comHeight={96}
              compLeft={58.5}
              compRight={0}
              compType="Text"
            >{`Mine`}</Text>
            <Text
              className="font-medium font-poppins lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] ml-[96px] lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-gray_900 text-left w-[21%]"
              compId="841:9"
              comWidth={346}
              comHeight={108}
              compLeft={96}
              compRight={0}
              compType="Text"
            >{`TOUCHUP`}</Text>
            <Text
              className="font-normal font-vidaloka lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] ml-[96px] my-[10.5px] lg:my-[6px] 2xl:my-[7px] xl:my-[7px] 3xl:my-[9px] not-italic lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-gray_900 text-left w-[20%]"
              compId="841:10"
              comWidth={330}
              comHeight={87}
              compLeft={96}
              compRight={0}
              compType="Text"
            >{`Skin Fresh`}</Text>
            <Text
              className="font-bold font-montserrat lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] ml-[96px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-gray_900 text-left w-[23%]"
              compId="841:11"
              comWidth={373}
              comHeight={88}
              compLeft={96}
              compRight={0}
              compType="Text"
            >{`HoolaBuu`}</Text>
          </Row>
          <footer
            className="font-poppins 2xl:mt-[105px] 3xl:mt-[126px] mt-[140px] lg:mt-[81px] xl:mt-[93px] w-[100%]"
            compId="823:19"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-gray_900 items-center justify-end w-[100%]"
              compId="347"
              comWidth={1920}
              comHeight={585}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
                compId="346"
                comWidth={1920}
                comHeight={237}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] w-[46%]"
                  compId="416"
                  comWidth={879}
                  comHeight={217}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] w-[43%]"
                    compId="823:21"
                    comWidth={381}
                    comHeight={196}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[25%]"
                      compId="823:22"
                      comWidth={96}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Lovia`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="823:23"
                      comWidth={381}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    <Image
                      src={"images/img_sosmedia.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[44%]"
                      compId="823:29"
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
                    compId="823:39"
                    comWidth={109}
                    comHeight={217}
                    compLeft={138}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="823:40"
                      comWidth={109}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Products`}</Text>
                    <Column
                      className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                      compId="823:41"
                      comWidth={101}
                      comHeight={156}
                      compLeft={0}
                      compRight={8}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="823:42"
                        comWidth={100}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Categories`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="823:43"
                        comWidth={101}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`New Arrival`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                        compId="823:44"
                        comWidth={69}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Popular`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                        compId="823:45"
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
                    compId="823:46"
                    comWidth={117}
                    comHeight={217}
                    compLeft={134}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="823:47"
                      comWidth={117}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Company`}</Text>
                    <Column
                      className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                      compId="823:48"
                      comWidth={75}
                      comHeight={156}
                      compLeft={0}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                        compId="823:49"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                        compId="823:50"
                        comWidth={48}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`News`}</Text>
                      <Text
                        className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                        compId="823:51"
                        comWidth={72}
                        comHeight={27}
                        compLeft={0}
                        compRight={3}
                        compType="Text"
                      >{`Careers`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="823:52"
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
                  compId="823:53"
                  comWidth={147}
                  comHeight={217}
                  compLeft={122}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                    compId="823:54"
                    comWidth={99}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Support`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="430"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="823:55"
                      comWidth={147}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                        compId="823:56"
                        comWidth={107}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="823:57"
                        comWidth={146}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Delivery Service`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                        compId="823:58"
                        comWidth={122}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Privacy Policy`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="823:59"
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
                  compId="823:60"
                  comWidth={381}
                  comHeight={237}
                  compLeft={142}
                  compRight={99}
                  compType="Column"
                >
                  <Text
                    className="font-montserrat font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[25%]"
                    compId="823:61"
                    comWidth={96}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="823:62"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Column
                    className="font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="823:63"
                    comWidth={243}
                    comHeight={80}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start w-[100%]"
                      compId="823:64"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_call.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="823:65"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="823:67"
                        comWidth={211}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="823:68"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_email.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="823:69"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="823:71"
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
                compId="823:28"
                comWidth={1620}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
              <Row
                className="items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[84%]"
                compId="823:24"
                comWidth={1620}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                  compId="823:27"
                  comWidth={282}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Copyright © 2021 Lovia. All Right Reseved`}</Text>
                <Text
                  className="font-normal 3xl:ml-[1156px] ml-[1284px] lg:ml-[749px] xl:ml-[856px] 2xl:ml-[963px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                  compId="823:25"
                  comWidth={22}
                  comHeight={27}
                  compLeft={1284}
                  compRight={0}
                  compType="Text"
                >{`EN`}</Text>
                <Text
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                  compId="823:26"
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
      </Column>
    </>
  );
};

export default HomepageV1Page;
