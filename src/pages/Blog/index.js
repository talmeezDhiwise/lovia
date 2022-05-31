import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { List } from "components/List";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Line } from "components/Line";

const BlogPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="831:167"
        comWidth={1920}
        comHeight={3116}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-center justify-start w-[100%]"
          compId="951"
          comWidth={1920}
          comHeight={3116}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="159"
            comWidth={1920}
            comHeight={120}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Row
              className="bg-gray_50 items-center justify-start w-[100%]"
              compId="840:166"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[5%]"
                compId="840:172"
                comWidth={96}
                comHeight={54}
                compLeft={150}
                compRight={0}
                compType="Text"
              >{`Lovia`}</Text>
              <Row
                className="items-center justify-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[411px] ml-[457px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] w-[27%]"
                compId="957"
                comWidth={515}
                comHeight={27}
                compLeft={457}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[16%]"
                  compId="840:167"
                  comWidth={80}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Products`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[20%]"
                  compId="840:168"
                  comWidth={101}
                  comHeight={27}
                  compLeft={80}
                  compRight={0}
                  compType="Text"
                >{`New Arrival`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[8%]"
                  compId="840:169"
                  comWidth={40}
                  comHeight={27}
                  compLeft={80}
                  compRight={0}
                  compType="Text"
                >{`Blog`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[10%]"
                  compId="840:170"
                  comWidth={54}
                  comHeight={27}
                  compLeft={80}
                  compRight={0}
                  compType="Text"
                >{`About`}</Text>
              </Row>
              <Column
                className="items-start lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] lg:ml-[206px] xl:ml-[236px] 2xl:ml-[265px] 3xl:ml-[318px] ml-[354px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[5%]"
                compId="952"
                comWidth={100}
                comHeight={36}
                compLeft={354}
                compRight={0}
                compType="Column"
              >
                <div
                  className="bg-red_300 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px] w-[8px]"
                  compId="840:183"
                  comWidth={8}
                  comHeight={8}
                  compLeft={10}
                  compRight={0}
                  compType="View"
                ></div>
                <Column
                  className="items-start w-[100%]"
                  compId="959"
                  comWidth={100}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_4.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] 2xl:mr-[3px] mr-[4px] object-contain w-[96%]"
                    compId="840:173"
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
                compId="840:181"
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
            className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] mx-[auto] w-[84%]"
            compId="954"
            comWidth={1620}
            comHeight={336}
            compLeft={10}
            compRight={10}
            compType="Stack"
          >
            <Image
              src={"images/img_image_30.png"}
              className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] inset-[0] object-cover w-[100%]"
              compId="856:854"
              comWidth={1620}
              comHeight={336}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="image"
            />
            <Column
              className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[39%]"
              compId="942"
              comWidth={627.6}
              comHeight={142}
              compLeft={496}
              compRight={496.4}
              compType="Column"
            >
              <Text
                className="font-medium font-montserrat mx-[auto] text-center lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_900 w-[42%]"
                compId="856:859"
                comWidth={261.5}
                comHeight={59}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Blog`}</Text>
              <Text
                className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[100%]"
                compId="856:860"
                comWidth={627.6}
                comHeight={64}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`}</Text>
            </Column>
          </Stack>
          <Row
            className="items-start justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="950"
            comWidth={1920}
            comHeight={1349}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-center justify-start xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] w-[63%]"
              compId="947"
              comWidth={1207}
              comHeight={1349}
              compLeft={150}
              compRight={0}
              compType="Column"
            >
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                compId="933"
                comWidth={1207}
                comHeight={1218}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="lg:gap-[28px] xl:gap-[32px] 2xl:gap-[36px] 3xl:gap-[44px] gap-[49px] grid grid-cols-2 items-center justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]"
                  compId="931"
                  comWidth={1207}
                  comHeight={585}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="shadow-bs1 w-[100%]"
                    compId="831:180"
                    comWidth={579}
                    comHeight={585}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <div
                      className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] w-[100%]"
                      compId="861:53"
                      comWidth={579}
                      comHeight={318}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-gray_50 items-start justify-start w-[100%]"
                      compId="831:185"
                      comWidth={579}
                      comHeight={267}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[29%]"
                        compId="861:2"
                        comWidth={169}
                        comHeight={27}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Admin - 2 day ago`}</Text>
                      <Text
                        className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[83%]"
                        compId="831:186"
                        comWidth={483}
                        comHeight={36}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`5 Simple Tips to Treat Dry Skin`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mb-[39px] xl:mb-[45px] 2xl:mb-[51px] 3xl:mb-[61px] mb-[68px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[86%]"
                        compId="861:4"
                        comWidth={500}
                        comHeight={64}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                    </Column>
                  </Column>
                  <Column
                    className="shadow-bs1 w-[100%]"
                    compId="861:54"
                    comWidth={579}
                    comHeight={585}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <div
                      className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] w-[100%]"
                      compId="861:57"
                      comWidth={579}
                      comHeight={318}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-gray_50 items-start justify-start lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                      compId="944"
                      comWidth={579}
                      comHeight={267}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-center w-[100%]"
                        compId="960"
                        comWidth={579}
                        comHeight={107}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Column
                          className="items-start justify-start w-[100%]"
                          compId="943"
                          comWidth={579.00006}
                          comHeight={107}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[29%]"
                            compId="861:61"
                            comWidth={169}
                            comHeight={27}
                            compLeft={32}
                            compRight={32}
                            compType="Text"
                          >{`Admin - 2 day ago`}</Text>
                          <Text
                            className="font-medium leading-lh lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32.18px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[88%]"
                            compId="861:60"
                            comWidth={507}
                            comHeight={72}
                            compLeft={32.18}
                            compRight={32.18}
                            compType="Text"
                          >{`What Product Ingredients are Good for Daily Skin-Care? Check Them Out!`}</Text>
                        </Column>
                      </Column>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[86%]"
                        compId="861:62"
                        comWidth={500}
                        comHeight={64}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                    </Column>
                  </Column>
                </Row>
                <Row
                  className="lg:gap-[28px] xl:gap-[32px] 2xl:gap-[36px] 3xl:gap-[44px] gap-[49px] grid grid-cols-2 items-center justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]"
                  compId="932"
                  comWidth={1207}
                  comHeight={585}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="shadow-bs1 w-[100%]"
                    compId="861:63"
                    comWidth={579}
                    comHeight={585}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <div
                      className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] w-[100%]"
                      compId="861:66"
                      comWidth={579}
                      comHeight={318}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-gray_50 items-start justify-start lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                      compId="861:68"
                      comWidth={579}
                      comHeight={267}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[29%]"
                        compId="861:70"
                        comWidth={169}
                        comHeight={27}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Admin - 2 day ago`}</Text>
                      <Text
                        className="font-medium leading-lh lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[15px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] mr-[27px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[90%]"
                        compId="861:69"
                        comWidth={520}
                        comHeight={72}
                        compLeft={32}
                        compRight={27}
                        compType="Text"
                      >{`Winter is Coming! Prepare Your Skin for Cold Season`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[86%]"
                        compId="861:71"
                        comWidth={500}
                        comHeight={64}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                    </Column>
                  </Column>
                  <Column
                    className="shadow-bs1 w-[100%]"
                    compId="861:90"
                    comWidth={579}
                    comHeight={585}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <div
                      className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] w-[100%]"
                      compId="861:93"
                      comWidth={579}
                      comHeight={318}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-gray_50 items-start justify-start lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                      compId="861:95"
                      comWidth={579}
                      comHeight={267}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[29%]"
                        compId="861:97"
                        comWidth={169}
                        comHeight={27}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Admin - 2 day ago`}</Text>
                      <Text
                        className="font-medium leading-lh lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[15px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] mr-[27px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[90%]"
                        compId="861:96"
                        comWidth={520}
                        comHeight={72}
                        compLeft={32}
                        compRight={27}
                        compType="Text"
                      >{`5 Skin Moisturizing Products That are Suitable for All Skin`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[86%]"
                        compId="861:98"
                        comWidth={500}
                        comHeight={64}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                    </Column>
                  </Column>
                </Row>
              </List>
              <Row
                className="items-center justify-center lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] w-[25%]"
                compId="856:1053"
                comWidth={296}
                comHeight={51}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Image
                  src={"images/img_chevrondown_3.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="856:1054"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="chevrondown"
                />
                <Text
                  className="bg-teal_200 font-normal lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[1px] not-italic 3xl:pb-[10px] pb-[12px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] pl-[22px] pt-[11px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                  compId="856:1056"
                  comWidth={50}
                  comHeight={50}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`1`}</Text>
                <Text
                  className="border-2 border-gray_700 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                  compId="856:1059"
                  comWidth={51}
                  comHeight={51}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`2`}</Text>
                <Text
                  className="border-2 border-gray_700 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                  compId="856:1062"
                  comWidth={51}
                  comHeight={51}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`3`}</Text>
                <Image
                  src={"images/img_chevrondown_4.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="856:1065"
                  comWidth={24}
                  comHeight={24}
                  compLeft={24}
                  compRight={0}
                  compType="Image"
                  alt="chevrondown"
                />
              </Row>
            </Column>
            <Column
              className="lg:mb-[366px] xl:mb-[418px] 2xl:mb-[471px] 3xl:mb-[565px] mb-[628px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[20%]"
              compId="948"
              comWidth={381}
              comHeight={721}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Column
                className="border border-gray_301 border-solid items-start justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                compId="945"
                comWidth={381}
                comHeight={149}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[17%]"
                  compId="831:265"
                  comWidth={64}
                  comHeight={27}
                  compLeft={32}
                  compRight={32}
                  compType="Text"
                >{`Search`}</Text>
                <Column
                  className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                  compId="961"
                  comWidth={381}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="border border-gray_301 border-solid items-center justify-start mx-[auto] w-[84%]"
                    compId="934"
                    comWidth={321}
                    comHeight={50}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_magnifier.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 3xl:my-[11px] my-[13px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="831:262"
                      comWidth={24}
                      comHeight={24}
                      compLeft={16}
                      compRight={0}
                      compType="Image"
                      alt="magnifier"
                    />
                    <Text
                      className="font-normal 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[23%]"
                      compId="831:264"
                      comWidth={75}
                      comHeight={27}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`Search...`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column
                className="border border-gray_301 border-solid items-start justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                compId="831:270"
                comWidth={381}
                comHeight={291}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[26%]"
                  compId="831:269"
                  comWidth={100}
                  comHeight={27}
                  compLeft={32}
                  compRight={32}
                  compType="Text"
                >{`Categories`}</Text>
                <Row
                  className="font-opensans items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[15%]"
                  compId="831:271"
                  comWidth={57}
                  comHeight={24}
                  compLeft={32}
                  compRight={32}
                  compType="Row"
                >
                  <Image
                    src={"images/img_bxbxchevronr.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="831:273"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="bxbxchevronr"
                  />
                  <Text
                    className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 text-left w-[47%]"
                    compId="831:272"
                    comWidth={27}
                    comHeight={19}
                    compLeft={6}
                    compRight={0}
                    compType="Text"
                  >{`Tips`}</Text>
                </Row>
                <Row
                  className="font-opensans items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[15%]"
                  compId="861:100"
                  comWidth={59}
                  comHeight={24}
                  compLeft={32}
                  compRight={32}
                  compType="Row"
                >
                  <Image
                    src={"images/img_bxbxchevronr.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="861:101"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="bxbxchevronr"
                  />
                  <Text
                    className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 text-left w-[49%]"
                    compId="861:103"
                    comWidth={29}
                    comHeight={19}
                    compLeft={6}
                    compRight={0}
                    compType="Text"
                  >{`Blog`}</Text>
                </Row>
                <Row
                  className="font-opensans items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[18%]"
                  compId="861:104"
                  comWidth={67}
                  comHeight={24}
                  compLeft={32}
                  compRight={32}
                  compType="Row"
                >
                  <Image
                    src={"images/img_bxbxchevronr.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="861:105"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="bxbxchevronr"
                  />
                  <Text
                    className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 text-left w-[55%]"
                    compId="861:107"
                    comWidth={37}
                    comHeight={19}
                    compLeft={6}
                    compRight={0}
                    compType="Text"
                  >{`Facial`}</Text>
                </Row>
                <Row
                  className="font-opensans items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[24%]"
                  compId="861:108"
                  comWidth={92}
                  comHeight={24}
                  compLeft={32}
                  compRight={32}
                  compType="Row"
                >
                  <Image
                    src={"images/img_bxbxchevronr.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="861:109"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="bxbxchevronr"
                  />
                  <Text
                    className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 text-left w-[67%]"
                    compId="861:111"
                    comWidth={62}
                    comHeight={19}
                    compLeft={6}
                    compRight={0}
                    compType="Text"
                  >{`Skin Care`}</Text>
                </Row>
                <Row
                  className="font-opensans items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[22%]"
                  compId="861:112"
                  comWidth={82}
                  comHeight={24}
                  compLeft={32}
                  compRight={32}
                  compType="Row"
                >
                  <Image
                    src={"images/img_bxbxchevronr.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="861:113"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="bxbxchevronr"
                  />
                  <Text
                    className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 text-left w-[63%]"
                    compId="861:115"
                    comWidth={52}
                    comHeight={19}
                    compLeft={6}
                    compRight={0}
                    compType="Text"
                  >{`Product`}</Text>
                </Row>
                <Row
                  className="font-opensans items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[17%]"
                  compId="861:116"
                  comWidth={66}
                  comHeight={24}
                  compLeft={32}
                  compRight={32}
                  compType="Row"
                >
                  <Image
                    src={"images/img_bxbxchevronr.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="861:117"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="bxbxchevronr"
                  />
                  <Text
                    className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 text-left w-[55%]"
                    compId="861:119"
                    comWidth={36}
                    comHeight={19}
                    compLeft={6}
                    compRight={0}
                    compType="Text"
                  >{`News`}</Text>
                </Row>
              </Column>
              <Column
                className="border border-gray_301 border-solid items-start justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                compId="861:126"
                comWidth={381}
                comHeight={217}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[12%]"
                  compId="861:125"
                  comWidth={45}
                  comHeight={27}
                  compLeft={32}
                  compRight={32}
                  compType="Text"
                >{`Tags`}</Text>
                <Column
                  className="font-opensans items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                  compId="962"
                  comWidth={381}
                  comHeight={51}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start mx-[auto] w-[85%]"
                    compId="861:154"
                    comWidth={324}
                    comHeight={51}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Button
                      className="border border-gray_700_3f border-solid font-normal not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] py-[17.205px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 w-[18%]"
                      compId="155"
                      comWidth={59}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Tips`}</Button>
                    <Button
                      className="border border-gray_700_3f border-solid font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] py-[17.205px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 w-[24%]"
                      compId="154"
                      comWidth={78}
                      comHeight={51}
                      compLeft={8}
                      compRight={0}
                      compType="Button"
                    >{`Beauty`}</Button>
                    <Button
                      className="border border-gray_700_3f border-solid font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] py-[17.205px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 w-[21%]"
                      compId="153"
                      comWidth={69}
                      comHeight={51}
                      compLeft={8}
                      compRight={0}
                      compType="Button"
                    >{`Facial`}</Button>
                    <Button
                      className="border border-gray_700_3f border-solid font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] py-[17.205px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 w-[29%]"
                      compId="152"
                      comWidth={94}
                      comHeight={51}
                      compLeft={8}
                      compRight={0}
                      compType="Button"
                    >{`Skin Care`}</Button>
                  </Row>
                </Column>
                <Row
                  className="font-opensans items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[47%]"
                  compId="861:153"
                  comWidth={179}
                  comHeight={51}
                  compLeft={32}
                  compRight={32}
                  compType="Row"
                >
                  <Button
                    className="border border-gray_700_3f border-solid font-normal not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] py-[17.205px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 w-[38%]"
                    compId="157"
                    comWidth={68}
                    comHeight={51}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`News`}</Button>
                  <Button
                    className="border border-gray_700_3f border-solid font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] py-[17.205px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_900 w-[58%]"
                    compId="156"
                    comWidth={103}
                    comHeight={51}
                    compLeft={8}
                    compRight={0}
                    compType="Button"
                  >{`Inspiration`}</Button>
                </Row>
              </Column>
            </Column>
          </Row>
          <Column
            className="bg-teal_200 items-start justify-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[84%]"
            compId="936"
            comWidth={1620}
            comHeight={245}
            compLeft={10}
            compRight={10}
            compType="Column"
          >
            <Image
              src={"images/img_ornament_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] object-contain opacity-op5 w-[6%]"
              compId="856:973"
              comWidth={104}
              comHeight={56}
              compLeft={17}
              compRight={17}
              compType="Image"
              alt="ornament"
            />
            <Column
              className="w-[100%]"
              compId="963"
              comWidth={1620}
              comHeight={115}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="935"
                comWidth={1620}
                comHeight={115}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_newsletter_2.svg"}
                  className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] 2xl:mb-[6px] 3xl:mb-[8px] mb-[9px] ml-[106px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[95px] mt-[10px] 2xl:mt-[7px] 3xl:mt-[9px] lg:my-[5px] xl:my-[6px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                  compId="856:989"
                  comWidth={96}
                  comHeight={96}
                  compLeft={106}
                  compRight={0}
                  compType="Image"
                  alt="Newsletter"
                />
                <Column
                  className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[32%]"
                  compId="856:997"
                  comWidth={522}
                  comHeight={115}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[91%]"
                    compId="856:998"
                    comWidth={475}
                    comHeight={59}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Join our Newsletter`}</Text>
                  <Text
                    className="font-normal font-poppins lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="856:999"
                    comWidth={522}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Get the latest news of our new releases, sales, and promo!`}</Text>
                </Column>
                <Stack
                  className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] ml-[232px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[32%]"
                  compId="956"
                  comWidth={526}
                  comHeight={76}
                  compLeft={232}
                  compRight={0}
                  compType="Stack"
                >
                  <Input
                    className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_700 text-gray_700 text-left tracking-ls1 w-[100%]"
                    compId="160"
                    comWidth={526}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group160"
                    placeholder={`Enter your email`}
                  ></Input>
                  <Button
                    className="absolute bg-teal_200 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                    compId="158"
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
              compId="964"
              comWidth={1620}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_ornament_1.svg"}
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mx-[31px] xl:mx-[36px] 2xl:mx-[40px] 3xl:mx-[48px] mx-[54px] object-contain opacity-op5 w-[6%]"
                compId="856:957"
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
            compId="856:1000"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-gray_900 items-center justify-end w-[100%]"
              compId="940"
              comWidth={1920}
              comHeight={585}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
                compId="939"
                comWidth={1920}
                comHeight={237}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] w-[46%]"
                  compId="958"
                  comWidth={879}
                  comHeight={217}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] w-[43%]"
                    compId="856:1002"
                    comWidth={381}
                    comHeight={196}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[25%]"
                      compId="856:1003"
                      comWidth={96}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Lovia`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="856:1004"
                      comWidth={381}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    <Image
                      src={"images/img_sosmedia.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[44%]"
                      compId="856:1010"
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
                    compId="856:1020"
                    comWidth={109}
                    comHeight={217}
                    compLeft={138}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="856:1021"
                      comWidth={109}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Products`}</Text>
                    <Column
                      className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                      compId="856:1022"
                      comWidth={101}
                      comHeight={156}
                      compLeft={0}
                      compRight={8}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="856:1023"
                        comWidth={100}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Categories`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="856:1024"
                        comWidth={101}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`New Arrival`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                        compId="856:1025"
                        comWidth={69}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Popular`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                        compId="856:1026"
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
                    compId="856:1027"
                    comWidth={117}
                    comHeight={217}
                    compLeft={134}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="856:1028"
                      comWidth={117}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Company`}</Text>
                    <Column
                      className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                      compId="856:1029"
                      comWidth={75}
                      comHeight={156}
                      compLeft={0}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                        compId="856:1030"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                        compId="856:1031"
                        comWidth={48}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`News`}</Text>
                      <Text
                        className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                        compId="856:1032"
                        comWidth={72}
                        comHeight={27}
                        compLeft={0}
                        compRight={3}
                        compType="Text"
                      >{`Careers`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="856:1033"
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
                  compId="856:1034"
                  comWidth={147}
                  comHeight={217}
                  compLeft={122}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                    compId="856:1035"
                    comWidth={99}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Support`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="965"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="856:1036"
                      comWidth={147}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                        compId="856:1037"
                        comWidth={107}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="856:1038"
                        comWidth={146}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Delivery Service`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                        compId="856:1039"
                        comWidth={122}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Privacy Policy`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="856:1040"
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
                  compId="856:1041"
                  comWidth={381}
                  comHeight={237}
                  compLeft={142}
                  compRight={99}
                  compType="Column"
                >
                  <Text
                    className="font-montserrat font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[25%]"
                    compId="856:1042"
                    comWidth={96}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="856:1043"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Column
                    className="font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="856:1044"
                    comWidth={243}
                    comHeight={80}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start w-[100%]"
                      compId="856:1045"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_call.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="856:1046"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="856:1048"
                        comWidth={211}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="856:1049"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_email.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="856:1050"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="856:1052"
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
                compId="856:1009"
                comWidth={1620}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
              <Row
                className="items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[84%]"
                compId="856:1005"
                comWidth={1620}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                  compId="856:1008"
                  comWidth={282}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Copyright © 2021 Lovia. All Right Reseved`}</Text>
                <Text
                  className="font-normal 3xl:ml-[1156px] ml-[1284px] lg:ml-[749px] xl:ml-[856px] 2xl:ml-[963px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                  compId="856:1006"
                  comWidth={22}
                  comHeight={27}
                  compLeft={1284}
                  compRight={0}
                  compType="Text"
                >{`EN`}</Text>
                <Text
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                  compId="856:1007"
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

export default BlogPage;
