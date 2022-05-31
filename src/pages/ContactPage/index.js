import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Stack } from "components/Stack";

const ContactPagePage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="868:181"
        comWidth={1920}
        comHeight={2172}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-center justify-start w-[100%]"
          compId="1250"
          comWidth={1920}
          comHeight={2172}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="280"
            comWidth={1920}
            comHeight={121}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="868:456"
              comWidth={1920}
              comHeight={121}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-gray_50 items-center justify-start w-[100%]"
                compId="868:458"
                comWidth={1920}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[5%]"
                  compId="868:464"
                  comWidth={96}
                  comHeight={54}
                  compLeft={150}
                  compRight={0}
                  compType="Text"
                >{`Lovia`}</Text>
                <Row
                  className="items-center justify-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] 2xl:ml-[110px] 3xl:ml-[132px] ml-[147px] lg:ml-[85px] xl:ml-[98px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] w-[33%]"
                  compId="1253"
                  comWidth={640}
                  comHeight={27}
                  compLeft={147}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[16%]"
                    compId="868:459"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Categories`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                    compId="868:460"
                    comWidth={101}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`New Arrival`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[12%]"
                    compId="868:461"
                    comWidth={78}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Features`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[16%]"
                    compId="868:462"
                    comWidth={100}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Collections`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[11%]"
                    compId="868:463"
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
                  compId="868:465"
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
                compId="868:467"
                comWidth={1620}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
            </Column>
          </header>
          <Row
            className="font-montserrat items-start justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="1247"
            comWidth={1920}
            comHeight={821}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="border border-black_900 border-solid items-start justify-center xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:py-[46px] xl:py-[53px] 2xl:py-[60px] 3xl:py-[72px] py-[80px] w-[41%]"
              compId="1240"
              comWidth={794}
              comHeight={821}
              compLeft={150}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium font-montserrat lg:mx-[46px] xl:mx-[53px] 2xl:mx-[60px] 3xl:mx-[72px] mx-[80px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 text-left w-[25%]"
                compId="868:725"
                comWidth={201}
                comHeight={44}
                compLeft={80}
                compRight={80}
                compType="Text"
              >{`Contact Us`}</Text>
              <Text
                className="font-normal font-poppins leading-lh lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[46px] xl:mx-[53px] 2xl:mx-[60px] 3xl:mx-[72px] mx-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[60%]"
                compId="868:726"
                comWidth={480}
                comHeight={54}
                compLeft={80}
                compRight={80}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
              <Column
                className="font-poppins items-center lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]"
                compId="1255"
                comWidth={794}
                comHeight={524}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start mx-[auto] w-[80%]"
                  compId="283"
                  comWidth={634}
                  comHeight={103}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[11%]"
                    compId="868:729"
                    comWidth={69}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Name *`}</Text>
                  <Input
                    className="bg-gray_50 placeholder:bg-transparent border border-gray_900 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_900 w-[100%]"
                    compId="282"
                    comWidth={634}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group282"
                    placeholder={`Name *`}
                  ></Input>
                </Column>
                <Column
                  className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[80%]"
                  compId="285"
                  comWidth={634}
                  comHeight={103}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[10%]"
                    compId="868:732"
                    comWidth={63}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Email *`}</Text>
                  <Input
                    className="bg-gray_50 placeholder:bg-transparent border border-gray_900 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_900 w-[100%]"
                    compId="284"
                    comWidth={634}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group284"
                    placeholder={`Email *`}
                  ></Input>
                </Column>
                <Column
                  className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[80%]"
                  compId="287"
                  comWidth={634}
                  comHeight={162}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[13%]"
                    compId="868:736"
                    comWidth={81}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Subject *`}</Text>
                  <Input
                    className="bg-gray_50 placeholder:bg-transparent border border-gray_700 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_900 w-[100%]"
                    compId="286"
                    comWidth={634}
                    comHeight={119}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group286"
                    placeholder={`Subject *`}
                  ></Input>
                </Column>
                <Row
                  className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[80%]"
                  compId="870:774"
                  comWidth={634}
                  comHeight={60}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkedbox.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="870:776"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkedbox"
                  />
                  <Text
                    className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900_7f text-left w-[37%]"
                    compId="870:775"
                    comWidth={235}
                    comHeight={27}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`Accept Terms & Condition`}</Text>
                  <Button
                    className="bg-teal_200 font-medium lg:ml-[109px] xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] ml-[187px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[28%]"
                    compId="278"
                    comWidth={180}
                    comHeight={60}
                    compLeft={187}
                    compRight={0}
                    compType="Button"
                  >{`Submit`}</Button>
                </Row>
              </Column>
            </Column>
            <Column
              className="items-start justify-start lg:mb-[214px] xl:mb-[244px] 2xl:mb-[275px] 3xl:mb-[330px] mb-[367px] xl:ml-[113px] 2xl:ml-[127px] 3xl:ml-[153px] ml-[170px] lg:ml-[99px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[27%]"
              compId="870:806"
              comWidth={518}
              comHeight={439}
              compLeft={170}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-left text-teal_200 w-[37%]"
                compId="870:740"
                comWidth={194}
                comHeight={59}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Contact`}</Text>
              <Column
                className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                compId="1256"
                comWidth={518}
                comHeight={244}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start w-[100%]"
                  compId="870:741"
                  comWidth={518}
                  comHeight={244}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="1257"
                    comWidth={518}
                    comHeight={108}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-start justify-start w-[100%]"
                      compId="870:762"
                      comWidth={518}
                      comHeight={108}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_location.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[44px] xl:mb-[50px] 2xl:mb-[57px] 3xl:mb-[68px] mb-[76px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="870:770"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Location"
                      />
                      <Text
                        className="font-normal leading-lh xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[91%]"
                        compId="870:765"
                        comWidth={470}
                        comHeight={108}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    </Row>
                  </Column>
                  <Row
                    className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[50%]"
                    compId="870:742"
                    comWidth={259}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_call_3.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] my-[1px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      compId="870:743"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Call"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[81%]"
                      compId="870:745"
                      comWidth={211}
                      comHeight={36}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >{`+1234567890`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[55%]"
                    compId="870:746"
                    comWidth={283}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_email_1.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] my-[1px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      compId="870:747"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Email"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[83%]"
                      compId="870:749"
                      comWidth={235}
                      comHeight={36}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >{`lovia@support.com`}</Text>
                  </Row>
                </Column>
              </Column>
              <Image
                src={"images/img_sosmedia_6.svg"}
                className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] object-contain w-[32%]"
                compId="870:750"
                comWidth={168}
                comHeight={40}
                compLeft={0}
                compRight={10}
                compType="Image"
                alt="sosmedia"
              />
            </Column>
          </Row>
          <Column
            className="bg-teal_200 font-poppins items-start justify-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[84%]"
            compId="1242"
            comWidth={1620}
            comHeight={245}
            compLeft={10}
            compRight={10}
            compType="Column"
          >
            <Image
              src={"images/img_ornament_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] object-contain opacity-op5 w-[6%]"
              compId="868:376"
              comWidth={104}
              comHeight={56}
              compLeft={17}
              compRight={17}
              compType="Image"
              alt="ornament"
            />
            <Column
              className="w-[100%]"
              compId="1258"
              comWidth={1620}
              comHeight={115}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="1241"
                comWidth={1620}
                comHeight={115}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_newsletter_1.svg"}
                  className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] 2xl:mb-[6px] 3xl:mb-[8px] mb-[9px] ml-[106px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[95px] mt-[10px] 2xl:mt-[7px] 3xl:mt-[9px] lg:my-[5px] xl:my-[6px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                  compId="868:392"
                  comWidth={96}
                  comHeight={96}
                  compLeft={106}
                  compRight={0}
                  compType="Image"
                  alt="Newsletter"
                />
                <Column
                  className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[32%]"
                  compId="868:400"
                  comWidth={522}
                  comHeight={115}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[91%]"
                    compId="868:401"
                    comWidth={475}
                    comHeight={59}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Join our Newsletter`}</Text>
                  <Text
                    className="font-normal font-poppins lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="868:402"
                    comWidth={522}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Get the latest news of our new releases, sales, and promo!`}</Text>
                </Column>
                <Stack
                  className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] ml-[232px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[32%]"
                  compId="1252"
                  comWidth={526}
                  comHeight={76}
                  compLeft={232}
                  compRight={0}
                  compType="Stack"
                >
                  <Input
                    className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_700 text-gray_700 text-left tracking-ls1 w-[100%]"
                    compId="281"
                    comWidth={526}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group281"
                    placeholder={`Enter your email`}
                  ></Input>
                  <Button
                    className="absolute bg-teal_200 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                    compId="277"
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
              compId="1259"
              comWidth={1620}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_ornament_1.svg"}
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mx-[31px] xl:mx-[36px] 2xl:mx-[40px] 3xl:mx-[48px] mx-[54px] object-contain opacity-op5 w-[6%]"
                compId="868:360"
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
            compId="868:403"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-gray_900 items-center justify-end w-[100%]"
              compId="1246"
              comWidth={1920}
              comHeight={585}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
                compId="1245"
                comWidth={1920}
                comHeight={237}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] w-[46%]"
                  compId="1254"
                  comWidth={879}
                  comHeight={217}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] w-[43%]"
                    compId="868:405"
                    comWidth={381}
                    comHeight={196}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[25%]"
                      compId="868:406"
                      comWidth={96}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Lovia`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="868:407"
                      comWidth={381}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    <Image
                      src={"images/img_sosmedia_6.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[44%]"
                      compId="868:413"
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
                    compId="868:423"
                    comWidth={109}
                    comHeight={217}
                    compLeft={138}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="868:424"
                      comWidth={109}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Products`}</Text>
                    <Column
                      className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                      compId="868:425"
                      comWidth={101}
                      comHeight={156}
                      compLeft={0}
                      compRight={8}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="868:426"
                        comWidth={100}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Categories`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="868:427"
                        comWidth={101}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`New Arrival`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                        compId="868:428"
                        comWidth={69}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Popular`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                        compId="868:429"
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
                    compId="868:430"
                    comWidth={117}
                    comHeight={217}
                    compLeft={134}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                      compId="868:431"
                      comWidth={117}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Company`}</Text>
                    <Column
                      className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                      compId="868:432"
                      comWidth={75}
                      comHeight={156}
                      compLeft={0}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                        compId="868:433"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                        compId="868:434"
                        comWidth={48}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`News`}</Text>
                      <Text
                        className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                        compId="868:435"
                        comWidth={72}
                        comHeight={27}
                        compLeft={0}
                        compRight={3}
                        compType="Text"
                      >{`Careers`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="868:436"
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
                  compId="868:437"
                  comWidth={147}
                  comHeight={217}
                  compLeft={122}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                    compId="868:438"
                    comWidth={99}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Support`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="1260"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="868:439"
                      comWidth={147}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                        compId="868:440"
                        comWidth={107}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                        compId="868:441"
                        comWidth={146}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Delivery Service`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                        compId="868:442"
                        comWidth={122}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Privacy Policy`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                        compId="868:443"
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
                  compId="868:444"
                  comWidth={381}
                  comHeight={237}
                  compLeft={142}
                  compRight={99}
                  compType="Column"
                >
                  <Text
                    className="font-montserrat font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[25%]"
                    compId="868:445"
                    comWidth={96}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="868:446"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Column
                    className="font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="868:447"
                    comWidth={243}
                    comHeight={80}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start w-[100%]"
                      compId="868:448"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_call_1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="868:449"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="868:451"
                        comWidth={211}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="868:452"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_email.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="868:453"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                        compId="868:455"
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
                compId="868:412"
                comWidth={1620}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
              <Row
                className="items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[84%]"
                compId="868:408"
                comWidth={1620}
                comHeight={27}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                  compId="868:411"
                  comWidth={282}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Copyright © 2021 Lovia. All Right Reseved`}</Text>
                <Text
                  className="font-normal 3xl:ml-[1156px] ml-[1284px] lg:ml-[749px] xl:ml-[856px] 2xl:ml-[963px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                  compId="868:409"
                  comWidth={22}
                  comHeight={27}
                  compLeft={1284}
                  compRight={0}
                  compType="Text"
                >{`EN`}</Text>
                <Text
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                  compId="868:410"
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

export default ContactPagePage;
