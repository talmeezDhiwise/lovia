import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";
import { Input } from "components/Input";

const CollectionListPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="860:1334"
        comWidth={1920}
        comHeight={3008}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-start justify-start w-[100%]"
          compId="835"
          comWidth={1920}
          comHeight={3008}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="131"
            comWidth={1920}
            comHeight={121}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="860:1747"
              comWidth={1920}
              comHeight={121}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-gray_50 items-center justify-start w-[100%]"
                compId="860:1749"
                comWidth={1920}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[5%]"
                  compId="860:1755"
                  comWidth={96}
                  comHeight={54}
                  compLeft={150}
                  compRight={0}
                  compType="Text"
                >{`Lovia`}</Text>
                <Row
                  className="items-center justify-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] 2xl:ml-[110px] 3xl:ml-[132px] ml-[147px] lg:ml-[85px] xl:ml-[98px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] w-[33%]"
                  compId="856"
                  comWidth={640}
                  comHeight={27}
                  compLeft={147}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[16%]"
                    compId="860:1750"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Categories`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                    compId="860:1751"
                    comWidth={101}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`New Arrival`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[12%]"
                    compId="860:1752"
                    comWidth={78}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Features`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                    compId="860:1753"
                    comWidth={100}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Collections`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[11%]"
                    compId="860:1754"
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
                  compId="860:1756"
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
                compId="860:1758"
                comWidth={1620}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
            </Column>
          </header>
          <Stack
            className="lg:h-[213px] xl:h-[244px] 2xl:h-[274px] 3xl:h-[329px] h-[365px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] w-[84%]"
            compId="843"
            comWidth={1620}
            comHeight={365}
            compLeft={150}
            compRight={150}
            compType="Stack"
          >
            <Image
              src={"images/img_image_15.png"}
              className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-cover top-[0] w-[100%]"
              compId="872:825"
              comWidth={1620}
              comHeight={336}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="image"
            />
            <Column
              className="absolute items-start justify-start left-[10%] top-[27%] w-[39%]"
              compId="836"
              comWidth={627.69995}
              comHeight={142}
              compLeft={156.9}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_50 text-left w-[42%]"
                compId="872:830"
                comWidth={261.5}
                comHeight={54}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Collection List`}</Text>
              <Text
                className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                compId="872:831"
                comWidth={627.6}
                comHeight={64}
                compLeft={0.1}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`}</Text>
            </Column>
            <Row
              className="absolute bg-gray_50 bottom-[0] items-center justify-center left-[10%] shadow-bs w-[16%]"
              compId="808"
              comWidth={255}
              comHeight={59}
              compLeft={157}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[21%]"
                compId="872:833"
                comWidth={54}
                comHeight={27}
                compLeft={16}
                compRight={0}
                compType="Text"
              >{`Home`}</Text>
              <Text
                className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[4%]"
                compId="872:834"
                comWidth={11}
                comHeight={27}
                compLeft={16}
                compRight={0}
                compType="Text"
              >{`>`}</Text>
              <Text
                className="font-medium xl:m-[10px] 2xl:m-[12px] 3xl:m-[14px] m-[16px] lg:m-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[49%]"
                compId="872:835"
                comWidth={126}
                comHeight={27}
                compLeft={16}
                compRight={16}
                compType="Text"
              >{`Collection List`}</Text>
            </Row>
          </Stack>
          <Column
            className="items-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="862"
            comWidth={1920}
            comHeight={68}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start xl:mx-[100px] 2xl:mx-[112px] 3xl:mx-[135px] mx-[150px] lg:mx-[87px] w-[37%]"
              compId="872:886"
              comWidth={708}
              comHeight={68}
              compLeft={150}
              compRight={150}
              compType="Row"
            >
              <Button
                className="bg-gray_301 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[20%]"
                compId="126"
                comWidth={145}
                comHeight={68}
                compLeft={0}
                compRight={0}
                compType="Button"
              >{`Skin Care`}</Button>
              <Button
                className="bg-gray_301 font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[23%]"
                compId="125"
                comWidth={162}
                comHeight={68}
                compLeft={32}
                compRight={0}
                compType="Button"
              >{`Anti-Aging`}</Button>
              <Button
                className="bg-gray_301 font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[20%]"
                compId="124"
                comWidth={145}
                comHeight={68}
                compLeft={32}
                compRight={0}
                compType="Button"
              >{`Hair Care`}</Button>
              <Button
                className="bg-gray_301 font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[23%]"
                compId="123"
                comWidth={160}
                comHeight={68}
                compLeft={32}
                compRight={0}
                compType="Button"
              >{`Cosmetics`}</Button>
            </Row>
          </Column>
          <Row
            className="items-center justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="826"
            comWidth={1920}
            comHeight={44}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-medium font-montserrat xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 text-left w-[14%]"
              compId="872:885"
              comWidth={262}
              comHeight={44}
              compLeft={150}
              compRight={0}
              compType="Text"
            >
              <span className="text-gray_900">
                <>{`Collection `}</>
              </span>
              <span className="text-gray_900_7f">
                <>{`(20)`}</>
              </span>
            </Text>
            <Image
              src={"images/img_mode.svg"}
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] ml-[1011px] lg:ml-[589px] xl:ml-[674px] 2xl:ml-[758px] 3xl:ml-[910px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain w-[4%]"
              compId="876:161"
              comWidth={72}
              comHeight={24}
              compLeft={1011}
              compRight={0}
              compType="Image"
              alt="mode"
            />
            <Text
              className="font-normal font-poppins lg:mb-[5px] xl:mb-[6px] 3xl:mb-[8px] mb-[9px] lg:ml-[25px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] ml-[43px] lg:mt-[4px] xl:mt-[5px] 3xl:mt-[7px] mt-[8px] 2xl:my-[6px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800_7f text-left w-[10%]"
              compId="872:900"
              comWidth={192}
              comHeight={27}
              compLeft={43}
              compRight={0}
              compType="Text"
            >
              <span className="text-gray_800_7f">
                <>{`Sort by: `}</>
              </span>
              <span className="text-gray_900">
                <>{`Newest Items`}</>
              </span>
            </Text>
            <Image
              src={"images/img_chevrondown.svg"}
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
              compId="872:898"
              comWidth={24}
              comHeight={24}
              compLeft={16}
              compRight={0}
              compType="Image"
              alt="chevrondown"
            />
          </Row>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[84%]"
            compId="852"
            comWidth={1620}
            comHeight={825}
            compLeft={150}
            compRight={150}
            compType="List"
            orientation="vertical"
          >
            <Row
              className="items-center justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]"
              compId="876:39"
              comWidth={1620}
              comHeight={243}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] w-[24%]"
                compId="845"
                comWidth={381}
                comHeight={243}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_16.svg"}
                  className="absolute lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] inset-[0] object-cover w-[100%]"
                  compId="872:850"
                  comWidth={381}
                  comHeight={243}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[4%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="872:926"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={16}
                  compType="Column"
                >
                  <Text
                    className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                    compId="872:928"
                    comWidth={40}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`NEW`}</Text>
                </Column>
              </Stack>
              <Column
                className="mb-[1px] w-[75%]"
                compId="812"
                comWidth={1207}
                comHeight={242}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-start justify-between w-[100%]"
                  compId="811"
                  comWidth={1207}
                  comHeight={166}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start w-[60%]"
                    compId="872:838"
                    comWidth={720}
                    comHeight={166}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="863"
                      comWidth={720}
                      comHeight={106}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="872:839"
                        comWidth={720}
                        comHeight={106}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[40%]"
                          compId="872:840"
                          comWidth={289}
                          comHeight={36}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Night Skincare Products`}</Text>
                        <Text
                          className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[100%]"
                          compId="872:904"
                          comWidth={720}
                          comHeight={54}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      </Column>
                    </Column>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[31%]"
                      compId="872:842"
                      comWidth={221}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[17%]"
                        compId="872:843"
                        comWidth={37}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                      <RatingBar
                        className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px]"
                        compId="853"
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
                  <Column
                    className="items-start justify-start xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[14%]"
                    compId="810"
                    comWidth={167}
                    comHeight={147}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="864"
                      comWidth={167}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="876:35"
                        comWidth={167}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_love.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="876:36"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Love"
                        />
                        <Text
                          className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[81%]"
                          compId="876:38"
                          comWidth={135}
                          comHeight={27}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`Add to Wishlist`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal line-through ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[36%]"
                      compId="872:905"
                      comWidth={60}
                      comHeight={36}
                      compLeft={10}
                      compRight={0}
                      compType="Text"
                    >{`$399`}</Text>
                    <Text
                      className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[54%]"
                      compId="872:901"
                      comWidth={90}
                      comHeight={54}
                      compLeft={10}
                      compRight={0}
                      compType="Text"
                    >{`$299`}</Text>
                  </Column>
                </Row>
                <Row
                  className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                  compId="872:917"
                  comWidth={1207}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[46%]"
                    compId="857"
                    comWidth={556}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-start w-[29%]"
                      compId="876:32"
                      comWidth={162}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_fastdelivery_4.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="876:28"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="FastDelivery"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[70%]"
                        compId="872:919"
                        comWidth={114}
                        comHeight={27}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`Free Delivery`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-center w-[38%]"
                      compId="876:33"
                      comWidth={212}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_voucher.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="876:25"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="voucher"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[77%]"
                        compId="872:921"
                        comWidth={164}
                        comHeight={27}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`Available Voucher`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start w-[21%]"
                      compId="876:34"
                      comWidth={118}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_package.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="876:23"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Package"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[59%]"
                        compId="872:923"
                        comWidth={70}
                        comHeight={27}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`In Stock`}</Text>
                    </Row>
                  </Row>
                  <Button
                    className="bg-teal_200 font-medium lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[15%]"
                    compId="127"
                    comWidth={180}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Row>
              </Column>
            </Row>
            <Row
              className="items-center justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]"
              compId="876:40"
              comWidth={1620}
              comHeight={243}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] w-[24%]"
                compId="847"
                comWidth={381}
                comHeight={243}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_17.svg"}
                  className="absolute lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] inset-[0] object-cover w-[100%]"
                  compId="876:53"
                  comWidth={381}
                  comHeight={243}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[4%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="876:56"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={16}
                  compType="Column"
                >
                  <Text
                    className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                    compId="876:58"
                    comWidth={40}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`NEW`}</Text>
                </Column>
              </Stack>
              <Column
                className="mb-[1px] w-[75%]"
                compId="815"
                comWidth={1207}
                comHeight={242}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-start justify-between w-[100%]"
                  compId="814"
                  comWidth={1207}
                  comHeight={166}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start w-[60%]"
                    compId="876:41"
                    comWidth={720}
                    comHeight={166}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="865"
                      comWidth={720}
                      comHeight={106}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="876:42"
                        comWidth={720}
                        comHeight={106}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[41%]"
                          compId="876:43"
                          comWidth={296}
                          comHeight={36}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Anti Aging Sakura Series`}</Text>
                        <Text
                          className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[100%]"
                          compId="876:44"
                          comWidth={720}
                          comHeight={54}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      </Column>
                    </Column>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[31%]"
                      compId="876:45"
                      comWidth={221}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[17%]"
                        compId="876:46"
                        comWidth={37}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                      <RatingBar
                        className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px]"
                        compId="854"
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
                  <Column
                    className="items-start justify-start xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[14%]"
                    compId="813"
                    comWidth={167}
                    comHeight={147}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="866"
                      comWidth={167}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="876:77"
                        comWidth={167}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_love.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="876:78"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Love"
                        />
                        <Text
                          className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[81%]"
                          compId="876:80"
                          comWidth={135}
                          comHeight={27}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`Add to Wishlist`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal line-through ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[36%]"
                      compId="876:76"
                      comWidth={60}
                      comHeight={36}
                      compLeft={10}
                      compRight={0}
                      compType="Text"
                    >{`$399`}</Text>
                    <Text
                      className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[54%]"
                      compId="876:75"
                      comWidth={90}
                      comHeight={54}
                      compLeft={10}
                      compRight={0}
                      compType="Text"
                    >{`$299`}</Text>
                  </Column>
                </Row>
                <Row
                  className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                  compId="876:59"
                  comWidth={1207}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[46%]"
                    compId="858"
                    comWidth={556}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-start w-[29%]"
                      compId="876:60"
                      comWidth={162}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_fastdelivery_5.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="876:61"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="FastDelivery"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[70%]"
                        compId="876:65"
                        comWidth={114}
                        comHeight={27}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`Free Delivery`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-center w-[38%]"
                      compId="876:66"
                      comWidth={212}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_voucher.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="876:67"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="voucher"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[77%]"
                        compId="876:70"
                        comWidth={164}
                        comHeight={27}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`Available Voucher`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start w-[21%]"
                      compId="876:71"
                      comWidth={118}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_package.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="876:72"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Package"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[59%]"
                        compId="876:74"
                        comWidth={70}
                        comHeight={27}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`In Stock`}</Text>
                    </Row>
                  </Row>
                  <Button
                    className="bg-teal_200 font-medium lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[15%]"
                    compId="128"
                    comWidth={180}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Row>
              </Column>
            </Row>
            <Row
              className="items-center justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]"
              compId="876:83"
              comWidth={1620}
              comHeight={243}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] w-[24%]"
                compId="849"
                comWidth={381}
                comHeight={243}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_18.svg"}
                  className="absolute lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] inset-[0] object-cover w-[100%]"
                  compId="876:96"
                  comWidth={381}
                  comHeight={243}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="absolute bg-teal_200 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[4%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="876:99"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={16}
                  compType="Column"
                >
                  <Text
                    className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                    compId="876:101"
                    comWidth={40}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`NEW`}</Text>
                </Column>
              </Stack>
              <Column
                className="mb-[1px] w-[75%]"
                compId="818"
                comWidth={1207}
                comHeight={242}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-start justify-between w-[100%]"
                  compId="817"
                  comWidth={1207}
                  comHeight={166}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start w-[60%]"
                    compId="876:84"
                    comWidth={720}
                    comHeight={166}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="867"
                      comWidth={720}
                      comHeight={106}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="876:85"
                        comWidth={720}
                        comHeight={106}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[50%]"
                          compId="876:86"
                          comWidth={359}
                          comHeight={36}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Anti Dandruff Hair Care Series`}</Text>
                        <Text
                          className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[100%]"
                          compId="876:87"
                          comWidth={720}
                          comHeight={54}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      </Column>
                    </Column>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[31%]"
                      compId="876:88"
                      comWidth={221}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[17%]"
                        compId="876:89"
                        comWidth={37}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                      <RatingBar
                        className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px]"
                        compId="855"
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
                  <Column
                    className="items-start justify-start xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[14%]"
                    compId="816"
                    comWidth={167}
                    comHeight={147}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="868"
                      comWidth={167}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="876:120"
                        comWidth={167}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_love.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="876:121"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Love"
                        />
                        <Text
                          className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[81%]"
                          compId="876:123"
                          comWidth={135}
                          comHeight={27}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`Add to Wishlist`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal line-through ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[36%]"
                      compId="876:119"
                      comWidth={60}
                      comHeight={36}
                      compLeft={10}
                      compRight={0}
                      compType="Text"
                    >{`$399`}</Text>
                    <Text
                      className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[54%]"
                      compId="876:118"
                      comWidth={90}
                      comHeight={54}
                      compLeft={10}
                      compRight={0}
                      compType="Text"
                    >{`$299`}</Text>
                  </Column>
                </Row>
                <Row
                  className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                  compId="876:102"
                  comWidth={1207}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[46%]"
                    compId="859"
                    comWidth={556}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-start w-[29%]"
                      compId="876:103"
                      comWidth={162}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_fastdelivery_6.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="876:104"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="FastDelivery"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[70%]"
                        compId="876:108"
                        comWidth={114}
                        comHeight={27}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`Free Delivery`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-center w-[38%]"
                      compId="876:109"
                      comWidth={212}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_voucher.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="876:110"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="voucher"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[77%]"
                        compId="876:113"
                        comWidth={164}
                        comHeight={27}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`Available Voucher`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start w-[21%]"
                      compId="876:114"
                      comWidth={118}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_package.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="876:115"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Package"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[59%]"
                        compId="876:117"
                        comWidth={70}
                        comHeight={27}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`In Stock`}</Text>
                    </Row>
                  </Row>
                  <Button
                    className="bg-teal_200 font-medium lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[15%]"
                    compId="129"
                    comWidth={180}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Row>
              </Column>
            </Row>
          </List>
          <Row
            className="items-center justify-between lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] w-[84%]"
            compId="876:178"
            comWidth={1620}
            comHeight={51}
            compLeft={150}
            compRight={150}
            compType="Row"
          >
            <Text
              className="font-medium 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800_7f text-left w-[13%]"
              compId="872:896"
              comWidth={209}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              <span className="text-gray_800_7f font-poppins">
                <>{`Viewing `}</>
              </span>
              <span className="text-gray_900 font-poppins">
                <>{`3`}</>
              </span>
              <span className="text-gray_800_7f font-poppins">
                <>{` of `}</>
              </span>
              <span className="text-gray_900 font-poppins">
                <>{`10`}</>
              </span>
              <span className="text-gray_800_7f font-poppins">
                <>{` product`}</>
              </span>
            </Text>
            <Row
              className="items-center justify-between w-[18%]"
              compId="860"
              comWidth={296}
              comHeight={51}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_chevrondown_1.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="876:179"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="chevrondown"
              />
              <Text
                className="bg-teal_200 font-normal lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] leading-lh my-[1px] not-italic 3xl:pb-[10px] pb-[12px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] pl-[22px] pt-[11px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                compId="876:181"
                comWidth={50}
                comHeight={50}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`1`}</Text>
              <Text
                className="border-2 border-gray_700 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                compId="876:184"
                comWidth={51}
                comHeight={51}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`2`}</Text>
              <Text
                className="border-2 border-gray_700 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                compId="876:187"
                comWidth={51}
                comHeight={51}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`3`}</Text>
              <Image
                src={"images/img_chevrondown_2.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="876:190"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="chevrondown"
              />
            </Row>
          </Row>
          <Column
            className="bg-teal_200 items-start justify-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[84%]"
            compId="820"
            comWidth={1620}
            comHeight={245}
            compLeft={150}
            compRight={150}
            compType="Column"
          >
            <Image
              src={"images/img_ornament_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] object-contain opacity-op5 w-[6%]"
              compId="860:1667"
              comWidth={104}
              comHeight={56}
              compLeft={17}
              compRight={17}
              compType="Image"
              alt="ornament"
            />
            <Column
              className="w-[100%]"
              compId="869"
              comWidth={1620}
              comHeight={115}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="819"
                comWidth={1620}
                comHeight={115}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_newsletter_1.svg"}
                  className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] 2xl:mb-[6px] 3xl:mb-[8px] mb-[9px] ml-[106px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[95px] mt-[10px] 2xl:mt-[7px] 3xl:mt-[9px] lg:my-[5px] xl:my-[6px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                  compId="860:1683"
                  comWidth={96}
                  comHeight={96}
                  compLeft={106}
                  compRight={0}
                  compType="Image"
                  alt="Newsletter"
                />
                <Column
                  className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[32%]"
                  compId="860:1691"
                  comWidth={522}
                  comHeight={115}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[91%]"
                    compId="860:1692"
                    comWidth={475}
                    comHeight={59}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Join our Newsletter`}</Text>
                  <Text
                    className="font-normal font-poppins lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="860:1693"
                    comWidth={522}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Get the latest news of our new releases, sales, and promo!`}</Text>
                </Column>
                <Stack
                  className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] ml-[232px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[32%]"
                  compId="851"
                  comWidth={526}
                  comHeight={76}
                  compLeft={232}
                  compRight={0}
                  compType="Stack"
                >
                  <Input
                    className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_700 text-gray_700 text-left tracking-ls1 w-[100%]"
                    compId="132"
                    comWidth={526}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group132"
                    placeholder={`Enter your email`}
                  ></Input>
                  <Button
                    className="absolute bg-teal_200 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                    compId="121"
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
              compId="870"
              comWidth={1620}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_ornament_1.svg"}
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mx-[31px] xl:mx-[36px] 2xl:mx-[40px] 3xl:mx-[48px] mx-[54px] object-contain opacity-op5 w-[6%]"
                compId="860:1651"
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
            compId="860:1694"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-gray_900 items-center justify-end w-[100%]"
              compId="824"
              comWidth={1920}
              comHeight={585}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
                compId="823"
                comWidth={1920}
                comHeight={237}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] w-[46%]"
                  compId="861"
                  comWidth={879}
                  comHeight={217}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] w-[43%]"
                    compId="860:1696"
                    comWidth={381}
                    comHeight={196}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[25%]"
                      compId="860:1697"
                      comWidth={96}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Lovia`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="860:1698"
                      comWidth={381}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    <Image
                      src={"images/img_sosmedia_2.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[44%]"
                      compId="860:1704"
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
                    compId="860:1714"
                    comWidth={109}
                    comHeight={217}
                    compLeft={138}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="860:1715"
                      comWidth={109}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Products`}</Text>
                    <Column
                      className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                      compId="860:1716"
                      comWidth={101}
                      comHeight={156}
                      compLeft={0}
                      compRight={8}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="860:1717"
                        comWidth={100}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Categories`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="860:1718"
                        comWidth={101}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`New Arrival`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                        compId="860:1719"
                        comWidth={69}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Popular`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                        compId="860:1720"
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
                    compId="860:1721"
                    comWidth={117}
                    comHeight={217}
                    compLeft={134}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="860:1722"
                      comWidth={117}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Company`}</Text>
                    <Column
                      className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                      compId="860:1723"
                      comWidth={75}
                      comHeight={156}
                      compLeft={0}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                        compId="860:1724"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                        compId="860:1725"
                        comWidth={48}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`News`}</Text>
                      <Text
                        className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                        compId="860:1726"
                        comWidth={72}
                        comHeight={27}
                        compLeft={0}
                        compRight={3}
                        compType="Text"
                      >{`Careers`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="860:1727"
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
                  compId="860:1728"
                  comWidth={147}
                  comHeight={217}
                  compLeft={122}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                    compId="860:1729"
                    comWidth={99}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Support`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="871"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="860:1730"
                      comWidth={147}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                        compId="860:1731"
                        comWidth={107}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="860:1732"
                        comWidth={146}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Delivery Service`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                        compId="860:1733"
                        comWidth={122}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Privacy Policy`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="860:1734"
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
                  compId="860:1735"
                  comWidth={381}
                  comHeight={237}
                  compLeft={142}
                  compRight={99}
                  compType="Column"
                >
                  <Text
                    className="font-montserrat font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[25%]"
                    compId="860:1736"
                    comWidth={96}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="860:1737"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Column
                    className="font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="860:1738"
                    comWidth={243}
                    comHeight={80}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start w-[100%]"
                      compId="860:1739"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_call_1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="860:1740"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="860:1742"
                        comWidth={211}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="860:1743"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_email.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="860:1744"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="860:1746"
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
                compId="860:1703"
                comWidth={1620}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
              <Row
                className="items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[84%]"
                compId="860:1699"
                comWidth={1620}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                  compId="860:1702"
                  comWidth={282}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Copyright © 2021 Lovia. All Right Reseved`}</Text>
                <Text
                  className="font-normal 3xl:ml-[1156px] ml-[1284px] lg:ml-[749px] xl:ml-[856px] 2xl:ml-[963px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                  compId="860:1700"
                  comWidth={22}
                  comHeight={27}
                  compLeft={1284}
                  compRight={0}
                  compType="Text"
                >{`EN`}</Text>
                <Text
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                  compId="860:1701"
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

export default CollectionListPage;
