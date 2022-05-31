import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";
import { Input } from "components/Input";
import { Button } from "components/Button";

const CategorieswithSidebarPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="426:1267"
        comWidth={1920}
        comHeight={3339}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-center justify-start w-[100%]"
          compId="604"
          comWidth={1920}
          comHeight={3339}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="58"
            comWidth={1920}
            comHeight={121}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="854:437"
              comWidth={1920}
              comHeight={121}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-gray_50 items-center justify-start w-[100%]"
                compId="854:439"
                comWidth={1920}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[5%]"
                  compId="854:445"
                  comWidth={96}
                  comHeight={54}
                  compLeft={150}
                  compRight={0}
                  compType="Text"
                >{`Lovia`}</Text>
                <Row
                  className="items-center justify-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] 2xl:ml-[110px] 3xl:ml-[132px] ml-[147px] lg:ml-[85px] xl:ml-[98px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] w-[33%]"
                  compId="623"
                  comWidth={640}
                  comHeight={27}
                  compLeft={147}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[16%]"
                    compId="854:440"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Categories`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                    compId="854:441"
                    comWidth={101}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`New Arrival`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[12%]"
                    compId="854:442"
                    comWidth={78}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Features`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                    compId="854:443"
                    comWidth={100}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Collections`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[11%]"
                    compId="854:444"
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
                  compId="854:446"
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
                compId="854:448"
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
            compId="613"
            comWidth={1620}
            comHeight={365}
            compLeft={10}
            compRight={10}
            compType="Stack"
          >
            <Image
              src={"images/img_image_15.png"}
              className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-cover top-[0] w-[100%]"
              compId="684:218"
              comWidth={1620}
              comHeight={336}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="image"
            />
            <Column
              className="absolute items-start justify-start left-[10%] top-[27%] w-[39%]"
              compId="605"
              comWidth={627.69995}
              comHeight={142}
              compLeft={156.9}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_50 text-left w-[42%]"
                compId="684:251"
                comWidth={261.5}
                comHeight={54}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Categories`}</Text>
              <Text
                className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                compId="684:252"
                comWidth={627.6}
                comHeight={64}
                compLeft={0.1}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`}</Text>
            </Column>
            <Row
              className="absolute bg-gray_50 bottom-[0] items-center justify-center left-[10%] shadow-bs w-[14%]"
              compId="588"
              comWidth={229}
              comHeight={59}
              compLeft={157}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[24%]"
                compId="426:1269"
                comWidth={54}
                comHeight={27}
                compLeft={16}
                compRight={0}
                compType="Text"
              >{`Home`}</Text>
              <Text
                className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[5%]"
                compId="426:1271"
                comWidth={11}
                comHeight={27}
                compLeft={16}
                compRight={0}
                compType="Text"
              >{`>`}</Text>
              <Text
                className="font-medium xl:m-[10px] 2xl:m-[12px] 3xl:m-[14px] m-[16px] lg:m-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[44%]"
                compId="426:1270"
                comWidth={100}
                comHeight={27}
                compLeft={16}
                compRight={16}
                compType="Text"
              >{`Categories`}</Text>
            </Row>
          </Stack>
          <Row
            className="items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] mt-[72px] w-[100%]"
            compId="603"
            comWidth={1920}
            comHeight={1551}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="lg:mb-[175px] xl:mb-[200px] 2xl:mb-[225px] 3xl:mb-[270px] mb-[300px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] w-[16%]"
              compId="849:413"
              comWidth={309}
              comHeight={1251}
              compLeft={150}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[264px] xl:h-[301px] 2xl:h-[339px] 3xl:h-[407px] h-[451px] w-[100%]"
                compId="615"
                comWidth={309}
                comHeight={451}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Text
                  className="absolute font-bold left-[10%] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left top-[7%] w-[42%]"
                  compId="426:1415"
                  comWidth={130}
                  comHeight={27}
                  compLeft={32}
                  compRight={0}
                  compType="Text"
                >{`All Categories`}</Text>
                <Row
                  className="absolute border border-gray_700_7f border-solid inset-[0] items-start justify-between w-[100%]"
                  compId="590"
                  comWidth={309}
                  comHeight={451}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mt-[53px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] mt-[91px] w-[57%]"
                    compId="684:118"
                    comWidth={176}
                    comHeight={328}
                    compLeft={32}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[49%]"
                      compId="684:119"
                      comWidth={87}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      <span className="text-gray_900 font-poppins">
                        <>{`New  `}</>
                      </span>
                      <span className="text-gray_700_7f font-poppins">
                        <>{`(25)`}</>
                      </span>
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[67%]"
                      compId="684:120"
                      comWidth={118}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      <span className="text-gray_900 font-poppins">
                        <>{`Popular `}</>
                      </span>
                      <span className="text-gray_900_7f font-poppins">
                        <>{`(125)`}</>
                      </span>
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[77%]"
                      compId="684:121"
                      comWidth={135}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      <span className="text-gray_900 font-poppins">
                        <>{`Skin Care `}</>
                      </span>
                      <span className="text-gray_900_7f font-poppins">
                        <>{`(150)`}</>
                      </span>
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[80%]"
                      compId="684:122"
                      comWidth={140}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      <span className="text-gray_900 font-poppins">
                        <>{`Anti-Aging `}</>
                      </span>
                      <span className="text-gray_900_7f font-poppins">
                        <>{`(75)`}</>
                      </span>
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[72%]"
                      compId="684:124"
                      comWidth={127}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      <span className="text-gray_900 font-poppins">
                        <>{`Hair Care `}</>
                      </span>
                      <span className="text-gray_900_7f font-poppins">
                        <>{`(75)`}</>
                      </span>
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[80%]"
                      compId="684:125"
                      comWidth={140}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      <span className="text-gray_900 font-poppins">
                        <>{`Cosmetics `}</>
                      </span>
                      <span className="text-gray_900_7f font-poppins">
                        <>{`(45)`}</>
                      </span>
                    </Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[47%]"
                      compId="684:126"
                      comWidth={82}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >
                      <span className="text-gray_900 font-poppins">
                        <>{`Men `}</>
                      </span>
                      <span className="text-gray_900_7f font-poppins">
                        <>{`(55)`}</>
                      </span>
                    </Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[100%]"
                      compId="684:202"
                      comWidth={176}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      <span className="text-gray_900 font-poppins">
                        <>{`Bundles & Sets `}</>
                      </span>
                      <span className="text-gray_900_7f font-poppins">
                        <>{`(44)`}</>
                      </span>
                    </Text>
                  </Column>
                </Row>
              </Stack>
              <Column
                className="border border-gray_700_7f border-solid items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
                compId="607"
                comWidth={309}
                comHeight={164}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_quality_2.svg"}
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mx-[auto] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="849:373"
                  comWidth={64}
                  comHeight={64}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="Quality"
                />
                <Text
                  className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[40%]"
                  compId="849:377"
                  comWidth={123}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`54 Brands`}</Text>
              </Column>
              <Column
                className="border border-gray_700_7f border-solid items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
                compId="608"
                comWidth={309}
                comHeight={164}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_fastdelivery_3.svg"}
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mx-[auto] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="849:380"
                  comWidth={64}
                  comHeight={64}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="FastDelivery"
                />
                <Text
                  className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[52%]"
                  compId="849:385"
                  comWidth={160}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Fast Delivery`}</Text>
              </Column>
              <Column
                className="border border-gray_700_7f border-solid items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
                compId="609"
                comWidth={309}
                comHeight={164}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_cashondeliver_3.svg"}
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mx-[auto] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="849:388"
                  comWidth={64}
                  comHeight={64}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="CashOnDeliver"
                />
                <Text
                  className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[48%]"
                  compId="849:401"
                  comWidth={149}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`COD Service`}</Text>
              </Column>
              <Column
                className="border border-gray_700_7f border-solid items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
                compId="610"
                comWidth={309}
                comHeight={164}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_quality_3.svg"}
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mx-[auto] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="849:404"
                  comWidth={64}
                  comHeight={64}
                  compLeft={10}
                  compRight={10}
                  compType="Image"
                  alt="Quality"
                />
                <Text
                  className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[10px] xl:mx-[12px] 2xl:mx-[13px] 3xl:mx-[16px] mx-[18px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[88%]"
                  compId="849:410"
                  comWidth={273}
                  comHeight={36}
                  compLeft={18}
                  compRight={18}
                  compType="Text"
                >{`100% Original Products`}</Text>
              </Column>
            </Column>
            <Column
              className="items-start justify-start lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] ml-[72px] w-[65%]"
              compId="854:161"
              comWidth={1239}
              comHeight={1551}
              compLeft={72}
              compRight={0}
              compType="Column"
            >
              <Column
                className="font-poppins w-[100%]"
                compId="625"
                comWidth={1239}
                comHeight={352}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  compId="593"
                  comWidth={1239}
                  comHeight={352}
                  compLeft={0}
                  compRight={0}
                  compType="List"
                  orientation="vertical"
                >
                  <Row
                    className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                    compId="591"
                    comWidth={1239}
                    comHeight={160}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="border border-solid border-teal_200 items-center lg:py-[28px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] py-[48.5px] w-[31%]"
                      compId="684:139"
                      comWidth={385}
                      comHeight={160}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[36%]"
                        compId="684:140"
                        comWidth={140}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Skin Care`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[24%]"
                        compId="684:141"
                        comWidth={91}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Collection`}</Text>
                    </Column>
                    <Column
                      className="border border-solid border-teal_200 items-center lg:py-[28px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] py-[48.5px] w-[31%]"
                      compId="684:195"
                      comWidth={382}
                      comHeight={160}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[37%]"
                        compId="684:196"
                        comWidth={140}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Anti-Aging`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[24%]"
                        compId="684:197"
                        comWidth={91}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Collection`}</Text>
                    </Column>
                    <Column
                      className="border border-solid border-teal_200 items-center lg:py-[28px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] py-[48.5px] w-[33%]"
                      compId="684:147"
                      comWidth={407}
                      comHeight={160}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[34%]"
                        compId="684:148"
                        comWidth={140}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Hair Care`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[22%]"
                        compId="684:149"
                        comWidth={91}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Collection`}</Text>
                    </Column>
                  </Row>
                  <Row
                    className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                    compId="592"
                    comWidth={1239}
                    comHeight={160}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="border border-solid border-teal_200 items-center lg:py-[28px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] py-[48.5px] w-[31%]"
                      compId="684:258"
                      comWidth={385}
                      comHeight={160}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[36%]"
                        compId="684:259"
                        comWidth={140}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Cosmetics`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[24%]"
                        compId="684:260"
                        comWidth={91}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Collection`}</Text>
                    </Column>
                    <Column
                      className="border border-solid border-teal_200 items-center lg:py-[28px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] py-[48.5px] w-[31%]"
                      compId="684:163"
                      comWidth={382}
                      comHeight={160}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[14%]"
                        compId="684:164"
                        comWidth={53}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Men`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[24%]"
                        compId="684:165"
                        comWidth={91}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Collection`}</Text>
                    </Column>
                    <Column
                      className="border border-solid border-teal_200 items-center lg:py-[28px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] py-[48.5px] w-[33%]"
                      compId="684:171"
                      comWidth={407}
                      comHeight={160}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[45%]"
                        compId="684:172"
                        comWidth={182}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Bundles & Sets`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[22%]"
                        compId="684:173"
                        comWidth={91}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Collection`}</Text>
                    </Column>
                  </Row>
                </List>
              </Column>
              <Text
                className="font-medium font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 text-left w-[23%]"
                compId="687:404"
                comWidth={288}
                comHeight={44}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Featured Brand`}</Text>
              <Image
                src={"images/img_brand.svg"}
                className="lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] object-contain w-[76%]"
                compId="849:431"
                comWidth={940}
                comHeight={38}
                compLeft={0}
                compRight={10}
                compType="Image"
                alt="brand"
              />
              <Column
                className="font-montserrat lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
                compId="626"
                comWidth={1239}
                comHeight={901}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start w-[100%]"
                  compId="600"
                  comWidth={1239}
                  comHeight={901}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start w-[41%]"
                    compId="854:162"
                    comWidth={510}
                    comHeight={901}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 text-left w-[51%]"
                      compId="854:190"
                      comWidth={259}
                      comHeight={44}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`New Products`}</Text>
                    <Column
                      className="font-poppins lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[100%]"
                      compId="627"
                      comWidth={510}
                      comHeight={793}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <List
                        className="gap-[0] min-h-[auto] w-[100%]"
                        compId="618"
                        comWidth={510}
                        comHeight={793}
                        compLeft={0}
                        compRight={0}
                        compType="List"
                        orientation="vertical"
                      >
                        <Row
                          className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                          compId="854:163"
                          comWidth={510}
                          comHeight={243}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_placeholder_10.svg"}
                            className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                            compId="854:169"
                            comWidth={243}
                            comHeight={243}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="placeholder"
                          />
                          <Column
                            className="items-start justify-start lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[46%]"
                            compId="854:164"
                            comWidth={235}
                            comHeight={98}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                              compId="854:165"
                              comWidth={235}
                              comHeight={36}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Hand & Body Lotion`}</Text>
                            <Row
                              className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[64%]"
                              compId="854:166"
                              comWidth={150}
                              comHeight={54}
                              compLeft={0}
                              compRight={10}
                              compType="Row"
                            >
                              <Text
                                className="font-medium lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[55%]"
                                compId="854:167"
                                comWidth={82}
                                comHeight={54}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`$199`}</Text>
                              <Text
                                className="font-medium line-through lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[40%]"
                                compId="854:168"
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
                          compId="854:172"
                          comWidth={448}
                          comHeight={243}
                          compLeft={0}
                          compRight={62}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_placeholder_11.svg"}
                            className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                            compId="854:178"
                            comWidth={243}
                            comHeight={243}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="placeholder"
                          />
                          <Column
                            className="items-start justify-start lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[39%]"
                            compId="854:173"
                            comWidth={173}
                            comHeight={98}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                              compId="854:174"
                              comWidth={173}
                              comHeight={36}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Skin Repairing`}</Text>
                            <Row
                              className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[87%]"
                              compId="854:175"
                              comWidth={150}
                              comHeight={54}
                              compLeft={0}
                              compRight={10}
                              compType="Row"
                            >
                              <Text
                                className="font-medium lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[55%]"
                                compId="854:176"
                                comWidth={82}
                                comHeight={54}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`$199`}</Text>
                              <Text
                                className="font-medium line-through lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[40%]"
                                compId="854:177"
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
                          compId="854:181"
                          comWidth={451}
                          comHeight={243}
                          compLeft={0}
                          compRight={59}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_placeholder_12.svg"}
                            className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                            compId="854:187"
                            comWidth={243}
                            comHeight={243}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="placeholder"
                          />
                          <Column
                            className="items-start justify-start lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] mb-[81px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[39%]"
                            compId="854:182"
                            comWidth={176}
                            comHeight={98}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                              compId="854:183"
                              comWidth={176}
                              comHeight={36}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Eye Shadow 16`}</Text>
                            <Row
                              className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[85%]"
                              compId="854:184"
                              comWidth={150}
                              comHeight={54}
                              compLeft={0}
                              compRight={10}
                              compType="Row"
                            >
                              <Text
                                className="font-medium lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[55%]"
                                compId="854:185"
                                comWidth={82}
                                comHeight={54}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`$199`}</Text>
                              <Text
                                className="font-medium line-through lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[40%]"
                                compId="854:186"
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
                    className="items-start lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] ml-[73px] w-[46%]"
                    compId="854:191"
                    comWidth={575}
                    comHeight={901}
                    compLeft={73}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 text-left w-[25%]"
                      compId="854:240"
                      comWidth={144}
                      comHeight={44}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Popular`}</Text>
                    <Column
                      className="font-poppins lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[100%]"
                      compId="628"
                      comWidth={575}
                      comHeight={793}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <List
                        className="gap-[0] min-h-[auto] w-[100%]"
                        compId="619"
                        comWidth={575}
                        comHeight={793}
                        compLeft={0}
                        compRight={0}
                        compType="List"
                        orientation="vertical"
                      >
                        <Row
                          className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                          compId="854:192"
                          comWidth={575}
                          comHeight={243}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_placeholder_13.svg"}
                            className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                            compId="854:205"
                            comWidth={243}
                            comHeight={243}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="placeholder"
                          />
                          <Column
                            className="items-start justify-start lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] mb-[51px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] w-[52%]"
                            compId="854:193"
                            comWidth={300}
                            comHeight={158}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Column
                              className="w-[100%]"
                              compId="629"
                              comWidth={300}
                              comHeight={98}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Column
                                className="items-start justify-start w-[100%]"
                                compId="854:194"
                                comWidth={300}
                                comHeight={98}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Text
                                  className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                                  compId="854:195"
                                  comWidth={300}
                                  comHeight={36}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >{`Skin Whitening with Vit C`}</Text>
                                <Text
                                  className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[30%]"
                                  compId="854:196"
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
                              compId="854:197"
                              comWidth={221}
                              comHeight={36}
                              compLeft={0}
                              compRight={10}
                              compType="Row"
                            >
                              <Text
                                className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[17%]"
                                compId="854:198"
                                comWidth={37}
                                comHeight={36}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`5.0`}</Text>
                              <RatingBar
                                className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px]"
                                compId="620"
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
                          compId="854:208"
                          comWidth={534}
                          comHeight={243}
                          compLeft={0}
                          compRight={41}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_placeholder_14.svg"}
                            className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                            compId="854:221"
                            comWidth={243}
                            comHeight={243}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="placeholder"
                          />
                          <Column
                            className="items-start justify-start lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] mb-[51px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] w-[49%]"
                            compId="854:209"
                            comWidth={259}
                            comHeight={158}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Column
                              className="w-[100%]"
                              compId="630"
                              comWidth={259}
                              comHeight={98}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Column
                                className="items-start justify-start w-[100%]"
                                compId="854:210"
                                comWidth={259}
                                comHeight={98}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Text
                                  className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                                  compId="854:211"
                                  comWidth={259}
                                  comHeight={36}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >{`Sun Protection SPF 30`}</Text>
                                <Text
                                  className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[35%]"
                                  compId="854:212"
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
                              compId="854:213"
                              comWidth={221}
                              comHeight={36}
                              compLeft={0}
                              compRight={10}
                              compType="Row"
                            >
                              <Text
                                className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[17%]"
                                compId="854:214"
                                comWidth={37}
                                comHeight={36}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`5.0`}</Text>
                              <RatingBar
                                className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px]"
                                compId="621"
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
                          compId="854:224"
                          comWidth={497}
                          comHeight={243}
                          compLeft={0}
                          compRight={78}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_placeholder_15.svg"}
                            className="lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] h-[243px] object-contain lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px] w-[243px]"
                            compId="854:237"
                            comWidth={243}
                            comHeight={243}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="placeholder"
                          />
                          <Column
                            className="items-center justify-start lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] mb-[51px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] w-[45%]"
                            compId="854:225"
                            comWidth={222}
                            comHeight={158}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Column
                              className="items-start justify-start w-[100%]"
                              compId="854:226"
                              comWidth={222}
                              comHeight={98}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                                compId="854:227"
                                comWidth={222}
                                comHeight={36}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`Face Oil Controller`}</Text>
                              <Text
                                className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[41%]"
                                compId="854:228"
                                comWidth={90}
                                comHeight={54}
                                compLeft={0}
                                compRight={10}
                                compType="Text"
                              >{`$299`}</Text>
                            </Column>
                            <Row
                              className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                              compId="854:229"
                              comWidth={221}
                              comHeight={36}
                              compLeft={0}
                              compRight={1}
                              compType="Row"
                            >
                              <Text
                                className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[17%]"
                                compId="854:230"
                                comWidth={37}
                                comHeight={36}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`5.0`}</Text>
                              <RatingBar
                                className="my-[1px]"
                                compId="622"
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
              </Column>
            </Column>
          </Row>
          <Column
            className="bg-teal_200 items-start justify-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[84%]"
            compId="595"
            comWidth={1620}
            comHeight={245}
            compLeft={10}
            compRight={10}
            compType="Column"
          >
            <Image
              src={"images/img_ornament_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] object-contain opacity-op5 w-[6%]"
              compId="854:357"
              comWidth={104}
              comHeight={56}
              compLeft={17}
              compRight={17}
              compType="Image"
              alt="ornament"
            />
            <Column
              className="w-[100%]"
              compId="631"
              comWidth={1620}
              comHeight={115}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="594"
                comWidth={1620}
                comHeight={115}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_newsletter.svg"}
                  className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] 2xl:mb-[6px] 3xl:mb-[8px] mb-[9px] ml-[106px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[95px] mt-[10px] 2xl:mt-[7px] 3xl:mt-[9px] lg:my-[5px] xl:my-[6px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                  compId="854:373"
                  comWidth={96}
                  comHeight={96}
                  compLeft={106}
                  compRight={0}
                  compType="Image"
                  alt="Newsletter"
                />
                <Column
                  className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[32%]"
                  compId="854:381"
                  comWidth={522}
                  comHeight={115}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[91%]"
                    compId="854:382"
                    comWidth={475}
                    comHeight={59}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Join our Newsletter`}</Text>
                  <Text
                    className="font-normal font-poppins lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="854:383"
                    comWidth={522}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Get the latest news of our new releases, sales, and promo!`}</Text>
                </Column>
                <Stack
                  className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] ml-[232px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[32%]"
                  compId="617"
                  comWidth={526}
                  comHeight={76}
                  compLeft={232}
                  compRight={0}
                  compType="Stack"
                >
                  <Input
                    className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_700 text-gray_700 text-left tracking-ls1 w-[100%]"
                    compId="59"
                    comWidth={526}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group59"
                    placeholder={`Enter your email`}
                  ></Input>
                  <Button
                    className="absolute bg-teal_200 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                    compId="56"
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
              compId="632"
              comWidth={1620}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_ornament_1.svg"}
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mx-[31px] xl:mx-[36px] 2xl:mx-[40px] 3xl:mx-[48px] mx-[54px] object-contain opacity-op5 w-[6%]"
                compId="854:341"
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
            compId="854:384"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-gray_900 items-center justify-end w-[100%]"
              compId="599"
              comWidth={1920}
              comHeight={585}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
                compId="598"
                comWidth={1920}
                comHeight={237}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] w-[46%]"
                  compId="624"
                  comWidth={879}
                  comHeight={217}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] w-[43%]"
                    compId="854:386"
                    comWidth={381}
                    comHeight={196}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[25%]"
                      compId="854:387"
                      comWidth={96}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Lovia`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="854:388"
                      comWidth={381}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    <Image
                      src={"images/img_sosmedia_1.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[44%]"
                      compId="854:394"
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
                    compId="854:404"
                    comWidth={109}
                    comHeight={217}
                    compLeft={138}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="854:405"
                      comWidth={109}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Products`}</Text>
                    <Column
                      className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                      compId="854:406"
                      comWidth={101}
                      comHeight={156}
                      compLeft={0}
                      compRight={8}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="854:407"
                        comWidth={100}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Categories`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="854:408"
                        comWidth={101}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`New Arrival`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                        compId="854:409"
                        comWidth={69}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Popular`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                        compId="854:410"
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
                    compId="854:411"
                    comWidth={117}
                    comHeight={217}
                    compLeft={134}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="854:412"
                      comWidth={117}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Company`}</Text>
                    <Column
                      className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                      compId="854:413"
                      comWidth={75}
                      comHeight={156}
                      compLeft={0}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                        compId="854:414"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                        compId="854:415"
                        comWidth={48}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`News`}</Text>
                      <Text
                        className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                        compId="854:416"
                        comWidth={72}
                        comHeight={27}
                        compLeft={0}
                        compRight={3}
                        compType="Text"
                      >{`Careers`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="854:417"
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
                  compId="854:418"
                  comWidth={147}
                  comHeight={217}
                  compLeft={122}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                    compId="854:419"
                    comWidth={99}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Support`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="633"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="854:420"
                      comWidth={147}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                        compId="854:421"
                        comWidth={107}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="854:422"
                        comWidth={146}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Delivery Service`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                        compId="854:423"
                        comWidth={122}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Privacy Policy`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="854:424"
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
                  compId="854:425"
                  comWidth={381}
                  comHeight={237}
                  compLeft={142}
                  compRight={99}
                  compType="Column"
                >
                  <Text
                    className="font-montserrat font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[25%]"
                    compId="854:426"
                    comWidth={96}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="854:427"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Column
                    className="font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="854:428"
                    comWidth={243}
                    comHeight={80}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start w-[100%]"
                      compId="854:429"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_call_1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="854:430"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="854:432"
                        comWidth={211}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="854:433"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_email.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="854:434"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="854:436"
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
                compId="854:393"
                comWidth={1620}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
              <Row
                className="items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[84%]"
                compId="854:389"
                comWidth={1620}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                  compId="854:392"
                  comWidth={282}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Copyright © 2021 Lovia. All Right Reseved`}</Text>
                <Text
                  className="font-normal 3xl:ml-[1156px] ml-[1284px] lg:ml-[749px] xl:ml-[856px] 2xl:ml-[963px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                  compId="854:390"
                  comWidth={22}
                  comHeight={27}
                  compLeft={1284}
                  compRight={0}
                  compType="Text"
                >{`EN`}</Text>
                <Text
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                  compId="854:391"
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

export default CategorieswithSidebarPage;
