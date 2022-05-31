import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { CheckBox } from "components/CheckBox";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";
import { Button } from "components/Button";
import { Grid } from "components/Grid";
import { Input } from "components/Input";

const ProductListPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="426:919"
        comWidth={1920}
        comHeight={3565}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-start justify-start w-[100%]"
          compId="670"
          comWidth={1920}
          comHeight={3565}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="91"
            comWidth={1920}
            comHeight={121}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="854:475"
              comWidth={1920}
              comHeight={121}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-gray_50 items-center justify-start w-[100%]"
                compId="854:477"
                comWidth={1920}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[5%]"
                  compId="854:483"
                  comWidth={96}
                  comHeight={54}
                  compLeft={150}
                  compRight={0}
                  compType="Text"
                >{`Lovia`}</Text>
                <Row
                  className="items-center justify-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] 2xl:ml-[110px] 3xl:ml-[132px] ml-[147px] lg:ml-[85px] xl:ml-[98px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] w-[33%]"
                  compId="723"
                  comWidth={640}
                  comHeight={27}
                  compLeft={147}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[16%]"
                    compId="854:478"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Categories`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                    compId="854:479"
                    comWidth={101}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`New Arrival`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[12%]"
                    compId="854:480"
                    comWidth={78}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Features`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                    compId="854:481"
                    comWidth={100}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Collections`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[11%]"
                    compId="854:482"
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
                  compId="854:484"
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
                compId="854:486"
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
            compId="689"
            comWidth={1620}
            comHeight={365}
            compLeft={150}
            compRight={150}
            compType="Stack"
          >
            <Image
              src={"images/img_image_15.png"}
              className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-cover top-[0] w-[100%]"
              compId="854:508"
              comWidth={1620}
              comHeight={336}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="image"
            />
            <Column
              className="absolute items-start justify-start left-[10%] top-[27%] w-[39%]"
              compId="671"
              comWidth={627.69995}
              comHeight={142}
              compLeft={156.9}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_50 text-left w-[42%]"
                compId="854:513"
                comWidth={261.5}
                comHeight={54}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Product List`}</Text>
              <Text
                className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                compId="854:514"
                comWidth={627.6}
                comHeight={64}
                compLeft={0.1}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`}</Text>
            </Column>
            <Row
              className="absolute bg-gray_50 bottom-[0] items-center justify-center left-[10%] shadow-bs w-[14%]"
              compId="634"
              comWidth={234}
              comHeight={59}
              compLeft={157}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[23%]"
                compId="854:516"
                comWidth={54}
                comHeight={27}
                compLeft={16}
                compRight={0}
                compType="Text"
              >{`Home`}</Text>
              <Text
                className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[5%]"
                compId="854:517"
                comWidth={11}
                comHeight={27}
                compLeft={16}
                compRight={0}
                compType="Text"
              >{`>`}</Text>
              <Text
                className="font-medium xl:m-[10px] 2xl:m-[12px] 3xl:m-[14px] m-[16px] lg:m-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[45%]"
                compId="854:518"
                comWidth={105}
                comHeight={27}
                compLeft={16}
                compRight={16}
                compType="Text"
              >{`Product List`}</Text>
            </Row>
          </Stack>
          <Column
            className="items-end lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="725"
            comWidth={1920}
            comHeight={27}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="lg:gap-[455px] xl:gap-[521px] 2xl:gap-[586px] 3xl:gap-[703px] gap-[781px] grid grid-cols-2 items-center justify-end 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[65%]"
              compId="426:925"
              comWidth={1245}
              comHeight={27}
              compLeft={144}
              compRight={144}
              compType="Row"
            >
              <Text
                className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800_7f text-left w-[100%]"
                compId="426:926"
                comWidth={232}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-gray_800_7f font-poppins">
                  <>{`Viewing `}</>
                </span>
                <span className="text-gray_900 font-poppins">
                  <>{`20`}</>
                </span>
                <span className="text-gray_800_7f font-poppins">
                  <>{` of `}</>
                </span>
                <span className="text-gray_900 font-poppins">
                  <>{`160`}</>
                </span>
                <span className="text-gray_800_7f font-poppins">
                  <>{` product`}</>
                </span>
              </Text>
              <Row
                className="items-center justify-between w-[100%]"
                compId="426:927"
                comWidth={232}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800_7f text-left w-[83%]"
                  compId="426:930"
                  comWidth={192}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-gray_800_7f font-poppins">
                    <>{`Sort by: `}</>
                  </span>
                  <span className="text-gray_900 font-poppins">
                    <>{`Newest Items`}</>
                  </span>
                </Text>
                <Image
                  src={"images/img_chevrondown.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="426:928"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="chevrondown"
                />
              </Row>
            </Row>
          </Column>
          <Row
            className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            compId="665"
            comWidth={1920}
            comHeight={1579}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <aside className="lg:mb-[105px] xl:mb-[120px] 2xl:mb-[135px] 3xl:mb-[162px] mb-[180px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[247px] xl:mt-[282px] 2xl:mt-[318px] 3xl:mt-[381px] mt-[424px] w-[16%]">
              <Column
                className=""
                compId="694:58"
                comWidth={309}
                comHeight={975}
                compLeft={150}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[264px] xl:h-[301px] 2xl:h-[339px] 3xl:h-[407px] h-[451px] w-[100%]"
                  compId="691"
                  comWidth={309}
                  comHeight={451}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Text
                    className="absolute font-bold left-[10%] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left top-[7%] w-[42%]"
                    compId="854:490"
                    comWidth={130}
                    comHeight={27}
                    compLeft={32}
                    compRight={0}
                    compType="Text"
                  >{`All Categories`}</Text>
                  <Row
                    className="absolute border border-gray_700_7f border-solid inset-[0] items-start justify-between w-[100%]"
                    compId="658"
                    comWidth={309}
                    comHeight={451}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-start justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mt-[53px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] mt-[91px] w-[57%]"
                      compId="854:492"
                      comWidth={176}
                      comHeight={328}
                      compLeft={32}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[49%]"
                        compId="854:493"
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
                        compId="854:494"
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
                        compId="854:495"
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
                        compId="854:496"
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
                        compId="854:497"
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
                        compId="854:498"
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
                        compId="854:499"
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
                        compId="854:500"
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
                <Stack
                  className="lg:h-[569px] xl:h-[651px] 2xl:h-[732px] 3xl:h-[879px] h-[975px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="693"
                  comWidth={309}
                  comHeight={975}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Column
                    className="absolute inset-x-[0] mx-[auto] top-[3%] w-[79%]"
                    compId="694:59"
                    comWidth={245}
                    comHeight={748}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="694:112"
                      comWidth={245}
                      comHeight={290}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="727"
                        comWidth={245}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-between w-[100%]"
                          compId="694:135"
                          comWidth={245}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Text
                            className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[49%]"
                            compId="694:136"
                            comWidth={120}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Filter by Price`}</Text>
                          <Image
                            src={"images/img_chevrondown.svg"}
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            compId="694:137"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="chevrondown"
                          />
                        </Row>
                      </Column>
                      <Column
                        className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[68%]"
                        compId="694:113"
                        comWidth={166}
                        comHeight={231}
                        compLeft={0}
                        compRight={10}
                        compType="Column"
                      >
                        <CheckBox
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[66%]"
                          inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bw3 border-gray_301 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                          compId="93"
                          comWidth={110}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="CheckBox"
                          name="Group93"
                          label={`All Price`}
                        ></CheckBox>
                        <Row
                          className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[87%]"
                          compId="694:118"
                          comWidth={144}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_checkedbox.svg"}
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            compId="694:119"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Checkedbox"
                          />
                          <Text
                            className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[72%]"
                            compId="694:122"
                            comWidth={104}
                            comHeight={27}
                            compLeft={16}
                            compRight={0}
                            compType="Text"
                          >{`$100 - $250`}</Text>
                        </Row>
                        <CheckBox
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[90%]"
                          inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bw3 border-gray_301 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                          compId="94"
                          comWidth={149}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="CheckBox"
                          name="Group94"
                          label={`$250 - $500`}
                        ></CheckBox>
                        <CheckBox
                          className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[95%]"
                          inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bw3 border-gray_301 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                          compId="95"
                          comWidth={158}
                          comHeight={27}
                          compLeft={0}
                          compRight={8}
                          compType="CheckBox"
                          name="Group95"
                          label={`$750 - $1.000`}
                        ></CheckBox>
                        <Column
                          className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                          compId="728"
                          comWidth={166}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <CheckBox
                            className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[100%]"
                            inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bw3 border-gray_301 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                            compId="96"
                            comWidth={166}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="CheckBox"
                            name="Group96"
                            label={`$1000 - $1.500`}
                          ></CheckBox>
                        </Column>
                      </Column>
                    </Column>
                    <Line
                      className="bg-gray_301 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="694:60"
                      comWidth={245}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Column
                      className="items-start justify-start lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]"
                      compId="694:62"
                      comWidth={245}
                      comHeight={243}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="729"
                        comWidth={245}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-between w-[100%]"
                          compId="694:100"
                          comWidth={245}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Text
                            className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[55%]"
                            compId="694:101"
                            comWidth={135}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Filter by Rating`}</Text>
                          <Image
                            src={"images/img_chevrondown.svg"}
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            compId="694:102"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="chevrondown"
                          />
                        </Row>
                      </Column>
                      <Column
                        className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[78%]"
                        compId="694:63"
                        comWidth={192}
                        comHeight={184}
                        compLeft={0}
                        compRight={10}
                        compType="Column"
                      >
                        <Row
                          className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-2 items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[33%]"
                          compId="694:64"
                          comWidth={64}
                          comHeight={24}
                          compLeft={0}
                          compRight={10}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_checkbox.svg"}
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            compId="694:67"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Checkbox"
                          />
                          <Image
                            src={"images/img_star1.svg"}
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            compId="694:66"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Star1"
                          />
                        </Row>
                        <Row
                          className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]"
                          compId="694:69"
                          comWidth={96}
                          comHeight={24}
                          compLeft={0}
                          compRight={10}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_checkbox.svg"}
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            compId="694:73"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Checkbox"
                          />
                          <Row
                            className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-2 items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[58%]"
                            compId="694:70"
                            comWidth={56}
                            comHeight={24}
                            compLeft={16}
                            compRight={0}
                            compType="Row"
                          >
                            <Image
                              src={"images/img_star1.svg"}
                              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                              compId="694:71"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Star1"
                            />
                            <Image
                              src={"images/img_star1.svg"}
                              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                              compId="694:72"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Star2"
                            />
                          </Row>
                        </Row>
                        <List
                          className="gap-[0] min-h-[auto] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[83%]"
                          compId="721"
                          comWidth={160}
                          comHeight={64}
                          compLeft={0}
                          compRight={10}
                          compType="List"
                          orientation="vertical"
                        >
                          <Row
                            className="items-center justify-between lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[80%]"
                            compId="694:75"
                            comWidth={128}
                            comHeight={24}
                            compLeft={0}
                            compRight={32}
                            compType="Row"
                          >
                            <Image
                              src={"images/img_checkbox.svg"}
                              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                              compId="694:80"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Checkbox"
                            />
                            <Row
                              className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-3 items-center justify-between w-[69%]"
                              compId="694:76"
                              comWidth={88}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Image
                                src={"images/img_star1.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                compId="694:77"
                                comWidth={24}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Star1"
                              />
                              <Image
                                src={"images/img_star1.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                compId="694:78"
                                comWidth={24}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Star2"
                              />
                              <Image
                                src={"images/img_star1.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                compId="694:79"
                                comWidth={24}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Star3"
                              />
                            </Row>
                          </Row>
                          <Row
                            className="items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]"
                            compId="694:82"
                            comWidth={160}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Image
                              src={"images/img_checkedbox.svg"}
                              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                              compId="694:88"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Checkedbox"
                            />
                            <Row
                              className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-4 items-center justify-between w-[75%]"
                              compId="694:83"
                              comWidth={120}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Image
                                src={"images/img_star1.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                compId="694:84"
                                comWidth={24}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Star1"
                              />
                              <Image
                                src={"images/img_star1.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                compId="694:85"
                                comWidth={24}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Star2"
                              />
                              <Image
                                src={"images/img_star1.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                compId="694:86"
                                comWidth={24}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Star3"
                              />
                              <Image
                                src={"images/img_star1.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                compId="694:87"
                                comWidth={24}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Star5"
                              />
                            </Row>
                          </Row>
                        </List>
                        <Column
                          className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                          compId="730"
                          comWidth={192}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-between w-[100%]"
                            compId="694:91"
                            comWidth={192}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Image
                              src={"images/img_checkbox.svg"}
                              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                              compId="694:98"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Checkbox"
                            />
                            <RatingBar
                              className=""
                              compId="722"
                              comWidth={152}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="RatingBar"
                              value={5}
                              starCount={5}
                              activeColor="var(--orange_A100)"
                              size={((window.innerWidth - 15) * 24) / 1920}
                            ></RatingBar>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                    <Line
                      className="bg-gray_301 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="694:61"
                      comWidth={245}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Row
                      className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="694:104"
                      comWidth={245}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[53%]"
                        compId="694:105"
                        comWidth={130}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Filter by Brand`}</Text>
                      <Image
                        src={"images/img_chevrondown.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="694:106"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="chevrondown"
                      />
                    </Row>
                    <Row
                      className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="694:108"
                      comWidth={245}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[49%]"
                        compId="694:109"
                        comWidth={120}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Filter by Type`}</Text>
                      <Image
                        src={"images/img_chevrondown.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="694:110"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="chevrondown"
                      />
                    </Row>
                  </Column>
                  <Column
                    className="absolute border border-gray_700_7f border-solid inset-[0] items-center justify-end w-[100%]"
                    compId="673"
                    comWidth={309}
                    comHeight={975}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Button
                      className="bg-teal_200 font-medium lg:mt-[480px] xl:mt-[549px] 2xl:mt-[618px] 3xl:mt-[742px] mt-[824px] mx-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[79%]"
                      compId="61"
                      comWidth={245}
                      comHeight={60}
                      compLeft={10}
                      compRight={10}
                      compType="Button"
                    >{`Filter`}</Button>
                    <Text
                      className="font-medium mx-[auto] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[32%]"
                      compId="854:521"
                      comWidth={99}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`Reset Filter`}</Text>
                  </Column>
                </Stack>
              </Column>
            </aside>
            <Grid
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] ml-[72px] w-[65%]"
              compId="720"
              comWidth={1244}
              comHeight={1579}
              compLeft={72}
              compRight={0}
              compType="Grid"
            >
              <Column
                className="w-[100%]"
                compId="854:524"
                comWidth={286}
                comHeight={473}
                compLeft={0}
                compRight={958}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] mx-[auto] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="695"
                  comWidth={286}
                  comHeight={286}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_16.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="694:141"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="64"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="696:221"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[61%]"
                    compId="694:147"
                    comWidth={175}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Hand & Body Lotion`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="694:148"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="636"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="697:230"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="63"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="w-[100%]"
                compId="854:525"
                comWidth={286}
                comHeight={473}
                compLeft={318}
                compRight={640}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] mx-[auto] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="697"
                  comWidth={286}
                  comHeight={286}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_17.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="854:526"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="68"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="854:529"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[44%]"
                    compId="854:530"
                    comWidth={127}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Skin Repairing`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="854:531"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="638"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="854:535"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="67"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="w-[100%]"
                compId="854:540"
                comWidth={286}
                comHeight={473}
                compLeft={636}
                compRight={322}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] mx-[auto] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="699"
                  comWidth={286}
                  comHeight={286}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_18.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="854:541"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="66"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="854:544"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[46%]"
                    compId="854:545"
                    comWidth={131}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Eye Shadow 16`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="854:546"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="637"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="854:550"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="65"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="items-center justify-start w-[100%]"
                compId="854:555"
                comWidth={290}
                comHeight={473}
                compLeft={954}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:ml-[3px] ml-[4px] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="701"
                  comWidth={286}
                  comHeight={286}
                  compLeft={4}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_19.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="854:556"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[7%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="70"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={20}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] 2xl:mr-[3px] mr-[4px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[99%]"
                  compId="854:559"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={4}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[77%]"
                    compId="854:560"
                    comWidth={221}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Skin Whitening with Vit C`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="854:561"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="639"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="854:565"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="69"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="w-[100%]"
                compId="854:630"
                comWidth={286}
                comHeight={473}
                compLeft={0}
                compRight={958}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] mx-[auto] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="703"
                  comWidth={286}
                  comHeight={286}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_20.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="854:631"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="72"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="854:634"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[67%]"
                    compId="854:635"
                    comWidth={192}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Sun Protection SPF 30`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="854:636"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="640"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="854:640"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="71"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="w-[100%]"
                compId="854:660"
                comWidth={286}
                comHeight={473}
                compLeft={318}
                compRight={640}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] mx-[auto] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="705"
                  comWidth={286}
                  comHeight={286}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_21.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="854:661"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="76"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="854:664"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[58%]"
                    compId="854:665"
                    comWidth={165}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Face Oil Controller`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="854:666"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="642"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="854:670"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="75"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="w-[100%]"
                compId="854:645"
                comWidth={286}
                comHeight={473}
                compLeft={636}
                compRight={322}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] mx-[auto] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="707"
                  comWidth={286}
                  comHeight={286}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_22.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="854:646"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="74"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="854:649"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[35%]"
                    compId="854:650"
                    comWidth={101}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Face Scrub`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="854:651"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="641"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="854:655"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="73"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="w-[100%]"
                compId="854:675"
                comWidth={286}
                comHeight={473}
                compLeft={954}
                compRight={4}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] mx-[auto] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="709"
                  comWidth={286}
                  comHeight={286}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_23.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="854:676"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="78"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="854:679"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[31%]"
                    compId="854:680"
                    comWidth={89}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Hair Tonic`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="854:681"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="643"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="854:685"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="77"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="w-[100%]"
                compId="854:692"
                comWidth={286}
                comHeight={473}
                compLeft={0}
                compRight={958}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] mx-[auto] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="711"
                  comWidth={286}
                  comHeight={286}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_24.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="854:693"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="80"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="854:696"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[58%]"
                    compId="854:697"
                    comWidth={166}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Anti-Aging Serum`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="854:698"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="644"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="854:702"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="79"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="w-[100%]"
                compId="854:722"
                comWidth={286}
                comHeight={473}
                compLeft={318}
                compRight={640}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] mx-[auto] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="713"
                  comWidth={286}
                  comHeight={286}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_25.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="854:723"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="84"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="854:726"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[37%]"
                    compId="854:727"
                    comWidth={106}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Sleep Mask`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="854:728"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="646"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="854:732"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="83"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="w-[100%]"
                compId="854:707"
                comWidth={286}
                comHeight={473}
                compLeft={636}
                compRight={322}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] mx-[auto] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="715"
                  comWidth={286}
                  comHeight={286}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_26.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="854:708"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="82"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="854:711"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[52%]"
                    compId="854:712"
                    comWidth={149}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Healthy Lip Balm`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="854:713"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="645"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="854:717"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="81"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="w-[100%]"
                compId="854:737"
                comWidth={286}
                comHeight={473}
                compLeft={954}
                compRight={4}
                compType="Column"
              >
                <Stack
                  className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] mx-[auto] lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                  compId="717"
                  comWidth={286}
                  comHeight={286}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_image_27.svg"}
                    className="absolute lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[258px] h-[286px] inset-[0] object-cover lg:w-[166px] xl:w-[190px] 2xl:w-[214px] 3xl:w-[257px] w-[286px]"
                    compId="854:738"
                    comWidth={286}
                    comHeight={286}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Button
                    className="absolute bg-teal_200 font-normal not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left top-[6%] w-[26%]"
                    compId="86"
                    comWidth={75}
                    comHeight={43}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`4.5`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="854:741"
                  comWidth={286}
                  comHeight={163}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 w-[34%]"
                    compId="854:742"
                    comWidth={97}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Moisturizer`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-teal_200 w-[32%]"
                    compId="854:743"
                    comWidth={92}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$100.00`}</Text>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="647"
                    comWidth={286}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="854:747"
                      comWidth={60}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                    <Button
                      className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="85"
                      comWidth={202}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Row>
                </Column>
              </Column>
            </Grid>
          </Row>
          <Column
            className="items-end lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="726"
            comWidth={1920}
            comHeight={51}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-end lg:mx-[362px] xl:mx-[414px] 2xl:mx-[466px] 3xl:mx-[559px] mx-[621px] w-[15%]"
              compId="697:724"
              comWidth={296}
              comHeight={51}
              compLeft={621}
              compRight={621}
              compType="Row"
            >
              <Image
                src={"images/img_chevrondown_1.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="697:725"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="chevrondown"
              />
              <Text
                className="bg-teal_200 font-normal lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[1px] not-italic 3xl:pb-[10px] pb-[12px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] pl-[22px] pt-[11px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                compId="697:727"
                comWidth={50}
                comHeight={50}
                compLeft={24}
                compRight={0}
                compType="Text"
              >{`1`}</Text>
              <Text
                className="border-2 border-gray_700 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                compId="697:730"
                comWidth={51}
                comHeight={51}
                compLeft={24}
                compRight={0}
                compType="Text"
              >{`2`}</Text>
              <Text
                className="border-2 border-gray_700 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                compId="697:733"
                comWidth={51}
                comHeight={51}
                compLeft={24}
                compRight={0}
                compType="Text"
              >{`3`}</Text>
              <Image
                src={"images/img_chevrondown_2.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="697:736"
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
            className="bg-teal_200 items-start justify-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[84%]"
            compId="660"
            comWidth={1620}
            comHeight={245}
            compLeft={150}
            compRight={150}
            compType="Column"
          >
            <Image
              src={"images/img_ornament_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] object-contain opacity-op5 w-[6%]"
              compId="854:770"
              comWidth={104}
              comHeight={56}
              compLeft={17}
              compRight={17}
              compType="Image"
              alt="ornament"
            />
            <Column
              className="w-[100%]"
              compId="731"
              comWidth={1620}
              comHeight={115}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="659"
                comWidth={1620}
                comHeight={115}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_newsletter_1.svg"}
                  className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] 2xl:mb-[6px] 3xl:mb-[8px] mb-[9px] ml-[106px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[95px] mt-[10px] 2xl:mt-[7px] 3xl:mt-[9px] lg:my-[5px] xl:my-[6px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                  compId="854:786"
                  comWidth={96}
                  comHeight={96}
                  compLeft={106}
                  compRight={0}
                  compType="Image"
                  alt="Newsletter"
                />
                <Column
                  className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[32%]"
                  compId="854:794"
                  comWidth={522}
                  comHeight={115}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[91%]"
                    compId="854:795"
                    comWidth={475}
                    comHeight={59}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Join our Newsletter`}</Text>
                  <Text
                    className="font-normal font-poppins lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="854:796"
                    comWidth={522}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Get the latest news of our new releases, sales, and promo!`}</Text>
                </Column>
                <Stack
                  className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] ml-[232px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[32%]"
                  compId="719"
                  comWidth={526}
                  comHeight={76}
                  compLeft={232}
                  compRight={0}
                  compType="Stack"
                >
                  <Input
                    className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_700 text-gray_700 text-left tracking-ls1 w-[100%]"
                    compId="92"
                    comWidth={526}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group92"
                    placeholder={`Enter your email`}
                  ></Input>
                  <Button
                    className="absolute bg-teal_200 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                    compId="89"
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
              compId="732"
              comWidth={1620}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_ornament_1.svg"}
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mx-[31px] xl:mx-[36px] 2xl:mx-[40px] 3xl:mx-[48px] mx-[54px] object-contain opacity-op5 w-[6%]"
                compId="854:754"
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
            compId="854:797"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-gray_900 items-center justify-end w-[100%]"
              compId="664"
              comWidth={1920}
              comHeight={585}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
                compId="663"
                comWidth={1920}
                comHeight={237}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] w-[46%]"
                  compId="724"
                  comWidth={879}
                  comHeight={217}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] w-[43%]"
                    compId="854:799"
                    comWidth={381}
                    comHeight={196}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[25%]"
                      compId="854:800"
                      comWidth={96}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Lovia`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="854:801"
                      comWidth={381}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    <Image
                      src={"images/img_sosmedia_2.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[44%]"
                      compId="854:807"
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
                    compId="854:817"
                    comWidth={109}
                    comHeight={217}
                    compLeft={138}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="854:818"
                      comWidth={109}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Products`}</Text>
                    <Column
                      className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                      compId="854:819"
                      comWidth={101}
                      comHeight={156}
                      compLeft={0}
                      compRight={8}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="854:820"
                        comWidth={100}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Categories`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="854:821"
                        comWidth={101}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`New Arrival`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                        compId="854:822"
                        comWidth={69}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Popular`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                        compId="854:823"
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
                    compId="854:824"
                    comWidth={117}
                    comHeight={217}
                    compLeft={134}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="854:825"
                      comWidth={117}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Company`}</Text>
                    <Column
                      className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                      compId="854:826"
                      comWidth={75}
                      comHeight={156}
                      compLeft={0}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                        compId="854:827"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                        compId="854:828"
                        comWidth={48}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`News`}</Text>
                      <Text
                        className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                        compId="854:829"
                        comWidth={72}
                        comHeight={27}
                        compLeft={0}
                        compRight={3}
                        compType="Text"
                      >{`Careers`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="854:830"
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
                  compId="854:831"
                  comWidth={147}
                  comHeight={217}
                  compLeft={122}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                    compId="854:832"
                    comWidth={99}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Support`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="733"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="854:833"
                      comWidth={147}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                        compId="854:834"
                        comWidth={107}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="854:835"
                        comWidth={146}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Delivery Service`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                        compId="854:836"
                        comWidth={122}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Privacy Policy`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="854:837"
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
                  compId="854:838"
                  comWidth={381}
                  comHeight={237}
                  compLeft={142}
                  compRight={99}
                  compType="Column"
                >
                  <Text
                    className="font-montserrat font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[25%]"
                    compId="854:839"
                    comWidth={96}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="854:840"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Column
                    className="font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="854:841"
                    comWidth={243}
                    comHeight={80}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start w-[100%]"
                      compId="854:842"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_call_1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="854:843"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="854:845"
                        comWidth={211}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="854:846"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_email.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="854:847"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="854:849"
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
                compId="854:806"
                comWidth={1620}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
              <Row
                className="items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[84%]"
                compId="854:802"
                comWidth={1620}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                  compId="854:805"
                  comWidth={282}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Copyright © 2021 Lovia. All Right Reseved`}</Text>
                <Text
                  className="font-normal 3xl:ml-[1156px] ml-[1284px] lg:ml-[749px] xl:ml-[856px] 2xl:ml-[963px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                  compId="854:803"
                  comWidth={22}
                  comHeight={27}
                  compLeft={1284}
                  compRight={0}
                  compType="Text"
                >{`EN`}</Text>
                <Text
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                  compId="854:804"
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

export default ProductListPage;
