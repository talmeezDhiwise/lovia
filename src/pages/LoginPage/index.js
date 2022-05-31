import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { List } from "components/List";
import { Button } from "components/Button";
import { Input } from "components/Input";

const LoginPagePage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compId="868:468"
        comWidth={1920}
        comHeight={2528}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="296"
          comWidth={1920}
          comHeight={121}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Column
            className="items-center justify-start w-[100%]"
            compId="868:567"
            comWidth={1920}
            comHeight={121}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="bg-gray_50 items-center justify-start w-[100%]"
              compId="868:569"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[5%]"
                compId="868:575"
                comWidth={96}
                comHeight={54}
                compLeft={150}
                compRight={0}
                compType="Text"
              >{`Lovia`}</Text>
              <Row
                className="items-center justify-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] 2xl:ml-[110px] 3xl:ml-[132px] ml-[147px] lg:ml-[85px] xl:ml-[98px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] w-[33%]"
                compId="1293"
                comWidth={640}
                comHeight={27}
                compLeft={147}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[16%]"
                  compId="868:570"
                  comWidth={100}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Categories`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                  compId="868:571"
                  comWidth={101}
                  comHeight={27}
                  compLeft={48}
                  compRight={0}
                  compType="Text"
                >{`New Arrival`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[12%]"
                  compId="868:572"
                  comWidth={78}
                  comHeight={27}
                  compLeft={48}
                  compRight={0}
                  compType="Text"
                >{`Features`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                  compId="868:573"
                  comWidth={100}
                  comHeight={27}
                  compLeft={48}
                  compRight={0}
                  compType="Text"
                >{`Collections`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[11%]"
                  compId="868:574"
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
                compId="868:576"
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
              compId="868:578"
              comWidth={1620}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
          </Column>
        </header>
        <Row
          className="bg-gray_300 lg:gap-[17px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] gap-[30px] grid grid-cols-2 items-center justify-start xl:pl-[100px] 2xl:pl-[112px] 3xl:pl-[135px] pl-[150px] lg:pl-[87px] w-[100%]"
          compId="1270"
          comWidth={1920}
          comHeight={989}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Column
            className="bg-gray_50 border border-gray_301 border-solid items-start lg:my-[46px] xl:my-[53px] 2xl:my-[60px] 3xl:my-[72px] my-[80px] w-[100%]"
            compId="1266"
            comWidth={794}
            comHeight={829}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="font-montserrat items-center lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
              compId="1295"
              comWidth={794}
              comHeight={59}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium mx-[auto] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_900 text-left w-[17%]"
                compId="868:583"
                comWidth={138}
                comHeight={59}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Login`}</Text>
            </Column>
            <Text
              className="font-normal font-poppins lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] 3xl:mx-[117px] mx-[131px] lg:mx-[76px] xl:mx-[87px] 2xl:mx-[98px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900_7f text-left w-[6%]"
              compId="868:584"
              comWidth={49}
              comHeight={27}
              compLeft={131}
              compRight={131}
              compType="Text"
            >{`Email`}</Text>
            <Column
              className="font-poppins items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
              compId="1296"
              comWidth={794}
              comHeight={195}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="border border-bluegray_101 border-solid items-center justify-center mx-[auto] w-[65%]"
                compId="1261"
                comWidth={519}
                comHeight={60}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Image
                  src={"images/img_user.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="868:670"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="User"
                />
                <Text
                  className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[32%]"
                  compId="868:585"
                  comWidth={165}
                  comHeight={27}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`email@email.com`}</Text>
              </Row>
              <Column
                className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[65%]"
                compId="868:597"
                comWidth={519}
                comHeight={103}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900_7f text-left w-[17%]"
                  compId="868:586"
                  comWidth={87}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Password`}</Text>
                <Column
                  className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                  compId="1298"
                  comWidth={519}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Stack
                    className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] w-[100%]"
                    compId="1285"
                    comWidth={519}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Text
                      className="absolute font-bold h-[max-content] inset-y-[0] left-[9%] my-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[19%]"
                      compId="868:579"
                      comWidth={97}
                      comHeight={36}
                      compLeft={48}
                      compRight={0}
                      compType="Text"
                    >{`••••••••`}</Text>
                    <Row
                      className="absolute border border-bluegray_101 border-solid lg:gap-[256px] xl:gap-[292px] 2xl:gap-[329px] 3xl:gap-[395px] gap-[439px] grid grid-cols-2 inset-[0] items-center justify-between xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] px-[16px] lg:px-[9px] w-[100%]"
                      compId="1262"
                      comWidth={519}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_lock.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="868:673"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Lock"
                      />
                      <Image
                        src={"images/img_eye.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="868:675"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Eye"
                      />
                    </Row>
                  </Stack>
                </Column>
              </Column>
            </Column>
            <Text
              className="bg-teal_200 font-medium font-poppins leading-lh lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] 3xl:mx-[117px] mx-[131px] lg:mx-[76px] xl:mx-[87px] 2xl:mx-[98px] lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[14px] py-[16.5px] lg:py-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[65%]"
              compId="868:590"
              comWidth={519}
              comHeight={60}
              compLeft={131}
              compRight={131}
              compType="Text"
            >{`Login`}</Text>
            <Column
              className="font-poppins items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="1297"
              comWidth={794}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start mx-[auto] w-[65%]"
                compId="868:604"
                comWidth={519}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Image
                  src={"images/img_checkedbox_3.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="868:601"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Checkedbox"
                />
                <Text
                  className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900_7f text-left w-[25%]"
                  compId="868:587"
                  comWidth={132}
                  comHeight={27}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`Remember Me`}</Text>
                <Text
                  className="font-normal lg:ml-[113px] xl:ml-[129px] 2xl:ml-[145px] 3xl:ml-[174px] ml-[194px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[31%]"
                  compId="868:588"
                  comWidth={161}
                  comHeight={27}
                  compLeft={194}
                  compRight={0}
                  compType="Text"
                >{`Forgot password?`}</Text>
              </Row>
            </Column>
            <Row
              className="font-montserrat items-center justify-start mb-[103px] lg:mb-[60px] xl:mb-[68px] 2xl:mb-[77px] 3xl:mb-[92px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] mt-[70px] 3xl:mx-[117px] mx-[131px] lg:mx-[76px] xl:mx-[87px] 2xl:mx-[98px] w-[43%]"
              compId="868:658"
              comWidth={344}
              comHeight={40}
              compLeft={131}
              compRight={131}
              compType="Row"
            >
              <Text
                className="font-normal lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic text-black_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[40%]"
                compId="868:647"
                comWidth={139}
                comHeight={29}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Login With:`}</Text>
              <Image
                src={"images/img_sosmedia_7.svg"}
                className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] ml-[37px] object-contain w-[49%]"
                compId="868:648"
                comWidth={168}
                comHeight={40}
                compLeft={37}
                compRight={0}
                compType="Image"
                alt="sosmedia"
              />
            </Row>
          </Column>
          <Column
            className="bg-gray_50 border border-gray_301 border-solid items-start lg:my-[46px] xl:my-[53px] 2xl:my-[60px] 3xl:my-[72px] my-[80px] w-[100%]"
            compId="1280"
            comWidth={794}
            comHeight={829}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
              compId="1299"
              comWidth={794}
              comHeight={147}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium font-montserrat mx-[auto] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_900 text-left w-[48%]"
                compId="868:618"
                comWidth={378}
                comHeight={59}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Create Account`}</Text>
              <Text
                className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 w-[63%]"
                compId="868:637"
                comWidth={500}
                comHeight={64}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`}</Text>
            </Column>
            <Text
              className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] 3xl:mx-[117px] mx-[131px] lg:mx-[76px] xl:mx-[87px] 2xl:mx-[98px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900_7f text-left w-[6%]"
              compId="868:683"
              comWidth={49}
              comHeight={27}
              compLeft={131}
              compRight={131}
              compType="Text"
            >{`Email`}</Text>
            <Column
              className="items-center lg:mb-[54px] xl:mb-[62px] 2xl:mb-[69px] 3xl:mb-[83px] mb-[93px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
              compId="1300"
              comWidth={794}
              comHeight={434}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="border border-bluegray_101 border-solid items-center justify-center mx-[auto] w-[65%]"
                compId="1267"
                comWidth={519}
                comHeight={60}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Image
                  src={"images/img_user.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="868:685"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="User"
                />
                <Text
                  className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[32%]"
                  compId="868:684"
                  comWidth={165}
                  comHeight={27}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`email@email.com`}</Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[65%]"
                compId="1292"
                comWidth={519}
                comHeight={238}
                compLeft={10}
                compRight={10}
                compType="List"
                orientation="vertical"
              >
                <Column
                  className="items-start justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                  compId="868:688"
                  comWidth={519}
                  comHeight={103}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900_7f text-left w-[17%]"
                    compId="868:691"
                    comWidth={87}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Password`}</Text>
                  <Column
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="1301"
                    comWidth={519}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Stack
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] w-[100%]"
                      compId="1287"
                      comWidth={519}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Text
                        className="absolute font-bold h-[max-content] inset-y-[0] left-[9%] my-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[19%]"
                        compId="868:689"
                        comWidth={97}
                        comHeight={36}
                        compLeft={48}
                        compRight={0}
                        compType="Text"
                      >{`••••••••`}</Text>
                      <Row
                        className="absolute border border-bluegray_101 border-solid lg:gap-[256px] xl:gap-[292px] 2xl:gap-[329px] 3xl:gap-[395px] gap-[439px] grid grid-cols-2 inset-[0] items-center justify-between xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] px-[16px] lg:px-[9px] w-[100%]"
                        compId="1268"
                        comWidth={519}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_lock.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="868:692"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Lock"
                        />
                        <Image
                          src={"images/img_eye.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="868:694"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Eye"
                        />
                      </Row>
                    </Stack>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                  compId="868:701"
                  comWidth={519}
                  comHeight={103}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900_7f text-left w-[32%]"
                    compId="868:704"
                    comWidth={164}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Confirm Password`}</Text>
                  <Column
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="1302"
                    comWidth={519}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Stack
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] w-[100%]"
                      compId="1289"
                      comWidth={519}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Text
                        className="absolute font-bold h-[max-content] inset-y-[0] left-[9%] my-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[19%]"
                        compId="868:702"
                        comWidth={97}
                        comHeight={36}
                        compLeft={48}
                        compRight={0}
                        compType="Text"
                      >{`••••••••`}</Text>
                      <Row
                        className="absolute border border-bluegray_101 border-solid lg:gap-[256px] xl:gap-[292px] 2xl:gap-[329px] 3xl:gap-[395px] gap-[439px] grid grid-cols-2 inset-[0] items-center justify-between xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] px-[16px] lg:px-[9px] w-[100%]"
                        compId="1269"
                        comWidth={519}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_lock.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="868:705"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Lock"
                        />
                        <Image
                          src={"images/img_eye.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="868:707"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Eye"
                        />
                      </Row>
                    </Stack>
                  </Column>
                </Column>
              </List>
              <Button
                className="bg-teal_200 font-medium lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] mt-[44px] mx-[auto] xl:pb-[11px] 3xl:pb-[15px] pb-[17.545px] xl:pt-[12px] 3xl:pt-[16px] pt-[18.545px] lg:py-[10px] 2xl:py-[13px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[65%]"
                compId="868:634"
                comWidth={519}
                comHeight={60}
                compLeft={10}
                compRight={10}
                compType="Button"
              >{`Register`}</Button>
            </Column>
          </Column>
        </Row>
        <Row
          className="items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] opacity-op25 w-[84%]"
          compId="868:609"
          comWidth={1618}
          comHeight={108}
          compLeft={10}
          compRight={10}
          compType="Row"
        >
          <Text
            className="font-normal font-playfairdisplay lg:ml-[34px] xl:ml-[39px] 2xl:ml-[43px] 3xl:ml-[52px] ml-[58.5px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] not-italic lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-gray_900 text-left w-[10%]"
            compId="868:610"
            comWidth={164}
            comHeight={96}
            compLeft={58.5}
            compRight={0}
            compType="Text"
          >{`Mine`}</Text>
          <Text
            className="font-medium font-poppins lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] ml-[96px] lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-gray_900 text-left w-[21%]"
            compId="868:611"
            comWidth={346}
            comHeight={108}
            compLeft={96}
            compRight={0}
            compType="Text"
          >{`TOUCHUP`}</Text>
          <Text
            className="font-normal font-vidaloka lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] ml-[96px] my-[10.5px] lg:my-[6px] 2xl:my-[7px] xl:my-[7px] 3xl:my-[9px] not-italic lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-gray_900 text-left w-[20%]"
            compId="868:612"
            comWidth={330}
            comHeight={87}
            compLeft={96}
            compRight={0}
            compType="Text"
          >{`Skin Fresh`}</Text>
          <Text
            className="font-bold font-montserrat lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] ml-[96px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-gray_900 text-left w-[23%]"
            compId="868:613"
            comWidth={373}
            comHeight={88}
            compLeft={96}
            compRight={0}
            compType="Text"
          >{`HoolaBuu`}</Text>
        </Row>
        <Column
          className="bg-teal_200 items-start justify-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[84%]"
          compId="1272"
          comWidth={1620}
          comHeight={245}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Image
            src={"images/img_ornament_1.svg"}
            className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] object-contain opacity-op5 w-[6%]"
            compId="868:487"
            comWidth={104}
            comHeight={56}
            compLeft={17}
            compRight={17}
            compType="Image"
            alt="ornament"
          />
          <Column
            className="w-[100%]"
            compId="1303"
            comWidth={1620}
            comHeight={115}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start w-[100%]"
              compId="1271"
              comWidth={1620}
              comHeight={115}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_newsletter_3.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] 2xl:mb-[6px] 3xl:mb-[8px] mb-[9px] ml-[106px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[95px] mt-[10px] 2xl:mt-[7px] 3xl:mt-[9px] lg:my-[5px] xl:my-[6px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="868:503"
                comWidth={96}
                comHeight={96}
                compLeft={106}
                compRight={0}
                compType="Image"
                alt="Newsletter"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[32%]"
                compId="868:511"
                comWidth={522}
                comHeight={115}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[91%]"
                  compId="868:512"
                  comWidth={475}
                  comHeight={59}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Join our Newsletter`}</Text>
                <Text
                  className="font-normal font-poppins lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                  compId="868:513"
                  comWidth={522}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Get the latest news of our new releases, sales, and promo!`}</Text>
              </Column>
              <Stack
                className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] ml-[232px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[32%]"
                compId="1291"
                comWidth={526}
                comHeight={76}
                compLeft={232}
                compRight={0}
                compType="Stack"
              >
                <Input
                  className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_700 text-gray_700 text-left tracking-ls1 w-[100%]"
                  compId="297"
                  comWidth={526}
                  comHeight={76}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group297"
                  placeholder={`Enter your email`}
                ></Input>
                <Button
                  className="absolute bg-teal_200 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                  compId="294"
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
            compId="1304"
            comWidth={1620}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_ornament_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mx-[31px] xl:mx-[36px] 2xl:mx-[40px] 3xl:mx-[48px] mx-[54px] object-contain opacity-op5 w-[6%]"
              compId="868:471"
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
          compId="868:514"
          comWidth={1920}
          comHeight={585}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-gray_900 items-center justify-end w-[100%]"
            compId="1276"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
              compId="1275"
              comWidth={1920}
              comHeight={237}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] w-[46%]"
                compId="1294"
                comWidth={879}
                comHeight={217}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] w-[43%]"
                  compId="868:516"
                  comWidth={381}
                  comHeight={196}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[25%]"
                    compId="868:517"
                    comWidth={96}
                    comHeight={54}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Lovia`}</Text>
                  <Text
                    className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="868:518"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Image
                    src={"images/img_sosmedia_7.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[44%]"
                    compId="868:524"
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
                  compId="868:534"
                  comWidth={109}
                  comHeight={217}
                  compLeft={138}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="868:535"
                    comWidth={109}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Products`}</Text>
                  <Column
                    className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                    compId="868:536"
                    comWidth={101}
                    comHeight={156}
                    compLeft={0}
                    compRight={8}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                      compId="868:537"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="868:538"
                      comWidth={101}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`New Arrival`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                      compId="868:539"
                      comWidth={69}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Popular`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                      compId="868:540"
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
                  compId="868:541"
                  comWidth={117}
                  comHeight={217}
                  compLeft={134}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="868:542"
                    comWidth={117}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Company`}</Text>
                  <Column
                    className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="868:543"
                    comWidth={75}
                    comHeight={156}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                      compId="868:544"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                      compId="868:545"
                      comWidth={48}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`News`}</Text>
                    <Text
                      className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                      compId="868:546"
                      comWidth={72}
                      comHeight={27}
                      compLeft={0}
                      compRight={3}
                      compType="Text"
                    >{`Careers`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="868:547"
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
                compId="868:548"
                comWidth={147}
                comHeight={217}
                compLeft={122}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                  compId="868:549"
                  comWidth={99}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Support`}</Text>
                <Column
                  className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1305"
                  comWidth={147}
                  comHeight={156}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="868:550"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                      compId="868:551"
                      comWidth={107}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                      compId="868:552"
                      comWidth={146}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`Delivery Service`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                      compId="868:553"
                      comWidth={122}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Privacy Policy`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="868:554"
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
                compId="868:555"
                comWidth={381}
                comHeight={237}
                compLeft={142}
                compRight={99}
                compType="Column"
              >
                <Text
                  className="font-montserrat font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[25%]"
                  compId="868:556"
                  comWidth={96}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Contact`}</Text>
                <Text
                  className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                  compId="868:557"
                  comWidth={381}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <Column
                  className="font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                  compId="868:558"
                  comWidth={243}
                  comHeight={80}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start w-[100%]"
                    compId="868:559"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_call_2.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="868:560"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Call"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                      compId="868:562"
                      comWidth={211}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`+1234567890`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="868:563"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_email.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="868:564"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Email"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                      compId="868:566"
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
              compId="868:523"
              comWidth={1620}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[84%]"
              compId="868:519"
              comWidth={1620}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Text
                className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                compId="868:522"
                comWidth={282}
                comHeight={21}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Lovia. All Right Reseved`}</Text>
              <Text
                className="font-normal 3xl:ml-[1156px] ml-[1284px] lg:ml-[749px] xl:ml-[856px] 2xl:ml-[963px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                compId="868:520"
                comWidth={22}
                comHeight={27}
                compLeft={1284}
                compRight={0}
                compType="Text"
              >{`EN`}</Text>
              <Text
                className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                compId="868:521"
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

export default LoginPagePage;
