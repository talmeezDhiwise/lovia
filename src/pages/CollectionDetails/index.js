import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { RatingBar } from "components/RatingBar";
import { Line } from "components/Line";
import { Button } from "components/Button";
import { List } from "components/List";
import { Stack } from "components/Stack";
import { PagerIndicator } from "components/PagerIndicator";

const CollectionDetailsPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="860:1759"
        comWidth={1920}
        comHeight={3942}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="142"
          comWidth={1920}
          comHeight={120}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Row
            className="bg-gray_50 items-center justify-start w-[100%]"
            compId="860:2096"
            comWidth={1920}
            comHeight={120}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[5%]"
              compId="860:2102"
              comWidth={96}
              comHeight={54}
              compLeft={150}
              compRight={0}
              compType="Text"
            >{`Lovia`}</Text>
            <Row
              className="items-center justify-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[411px] ml-[457px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] w-[27%]"
              compId="913"
              comWidth={515}
              comHeight={27}
              compLeft={457}
              compRight={0}
              compType="Row"
            >
              <Text
                className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[16%]"
                compId="860:2097"
                comWidth={80}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Products`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[20%]"
                compId="860:2098"
                comWidth={101}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`New Arrival`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[8%]"
                compId="860:2099"
                comWidth={40}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`Blog`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[10%]"
                compId="860:2100"
                comWidth={54}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`About`}</Text>
            </Row>
            <Column
              className="items-start lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] lg:ml-[206px] xl:ml-[236px] 2xl:ml-[265px] 3xl:ml-[318px] ml-[354px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[5%]"
              compId="903"
              comWidth={100}
              comHeight={36}
              compLeft={354}
              compRight={0}
              compType="Column"
            >
              <div
                className="bg-red_300 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px] w-[8px]"
                compId="860:2113"
                comWidth={8}
                comHeight={8}
                compLeft={10}
                compRight={0}
                compType="View"
              ></div>
              <Column
                className="items-start w-[100%]"
                compId="919"
                comWidth={100}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_icon_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] 2xl:mr-[3px] mr-[4px] object-contain w-[96%]"
                  compId="860:2103"
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
              compId="860:2111"
              comWidth={32}
              comHeight={32}
              compLeft={66}
              compRight={0}
              compType="Image"
              alt="Menu"
            />
          </Row>
        </header>
        <Row
          className="items-center justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
          compId="881"
          comWidth={1920}
          comHeight={542}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Image
            src={"images/img_image_29.svg"}
            className="lg:h-[302px] xl:h-[345px] 2xl:h-[389px] 3xl:h-[466px] h-[517px] lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] object-contain w-[43%]"
            compId="880:231"
            comWidth={826}
            comHeight={517}
            compLeft={150}
            compRight={0}
            compType="Image"
            alt="image"
          />
          <Column
            className="items-start ml-[101px] lg:ml-[58px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] w-[36%]"
            compId="880"
            comWidth={693}
            comHeight={542}
            compLeft={101}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[48%]"
              compId="880:193"
              comWidth={331}
              comHeight={27}
              compLeft={6}
              compRight={10}
              compType="Row"
            >
              <Text
                className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[21%]"
                compId="880:194"
                comWidth={71}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Product`}</Text>
              <Text
                className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[3%]"
                compId="880:195"
                comWidth={11}
                comHeight={27}
                compLeft={16}
                compRight={0}
                compType="Text"
              >{`>`}</Text>
              <Text
                className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[66%]"
                compId="880:196"
                comWidth={217}
                comHeight={27}
                compLeft={16}
                compRight={0}
                compType="Text"
              >{`Night Skincare Products`}</Text>
            </Row>
            <Text
              className="font-medium lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 text-left w-[62%]"
              compId="880:197"
              comWidth={433}
              comHeight={54}
              compLeft={6}
              compRight={10}
              compType="Text"
            >{`Night Skincare Products`}</Text>
            <Column
              className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
              compId="920"
              comWidth={693}
              comHeight={154}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="875"
                comWidth={693}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-center justify-between lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] w-[51%]"
                  compId="914"
                  comWidth={352}
                  comHeight={27}
                  compLeft={6}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[8%]"
                    compId="880:218"
                    comWidth={28}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`5.0`}</Text>
                  <RatingBar
                    className="my-[1px]"
                    compId="910"
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
                  <Text
                    className="font-normal not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[28%]"
                    compId="880:225"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Review (12)`}</Text>
                  <Line
                    className="bg-teal_200 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] mt-[1px] opacity-op5 rotate-[90deg] w-[1px]"
                    compId="880:230"
                    comWidth={1}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Image
                    src={"images/img_love_1.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="880:227"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Love"
                  />
                </Row>
                <Text
                  className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[19%]"
                  compId="880:229"
                  comWidth={135}
                  comHeight={27}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`Add to Wishlist`}</Text>
              </Row>
              <Row
                className="items-center justify-start lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[100%]"
                compId="873"
                comWidth={693}
                comHeight={54}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[18%]"
                  compId="880:198"
                  comWidth={122}
                  comHeight={54}
                  compLeft={6}
                  compRight={0}
                  compType="Text"
                >{`$29.00`}</Text>
                <Text
                  className="font-medium line-through xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[12%]"
                  compId="880:199"
                  comWidth={83}
                  comHeight={36}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >{`$99.00`}</Text>
                <Text
                  className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[13%]"
                  compId="880:200"
                  comWidth={87}
                  comHeight={27}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >{`Save 50%`}</Text>
              </Row>
              <Line
                className="bg-gray_900 h-[1px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[99%]"
                compId="880:201"
                comWidth={687}
                comHeight={1}
                compLeft={6}
                compRight={0}
                compType="Line"
              />
            </Column>
            <Text
              className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[99%]"
              compId="880:202"
              comWidth={687}
              comHeight={96}
              compLeft={6}
              compRight={0}
              compType="Text"
            >{`A complete series of night skin treatments that will keep your skin fresh after a good night's sleep. Buy the complete set to get a special price and a bonus product.`}</Text>
            <Column
              className="lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
              compId="921"
              comWidth={693}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="874"
                comWidth={693}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[11%]"
                  compId="880:216"
                  comWidth={79}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Quantity`}</Text>
                <Row
                  className="gap-[0] grid grid-cols-3 items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[26%]"
                  compId="880:209"
                  comWidth={180}
                  comHeight={60}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_decrease.svg"}
                    className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                    compId="880:210"
                    comWidth={60}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="decrease"
                  />
                  <Button
                    className="border border-gray_900_19 border-solid font-medium lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                    compId="135"
                    comWidth={60}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`1`}</Button>
                  <Image
                    src={"images/img_increase.svg"}
                    className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                    compId="880:214"
                    comWidth={60}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="increase"
                  />
                </Row>
                <Button
                  className="border border-solid border-teal_200 font-medium lg:ml-[50px] xl:ml-[57px] 2xl:ml-[64px] 3xl:ml-[77px] ml-[86px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 w-[17%]"
                  compId="133"
                  comWidth={120}
                  comHeight={60}
                  compLeft={86}
                  compRight={0}
                  compType="Button"
                >{`Buy`}</Button>
                <Button
                  className="bg-teal_200 font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[26%]"
                  compId="134"
                  comWidth={180}
                  comHeight={60}
                  compLeft={16}
                  compRight={0}
                  compType="Button"
                >{`Add to Cart`}</Button>
              </Row>
            </Column>
          </Column>
        </Row>
        <Row
          className="items-start justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="901"
          comWidth={1920}
          comHeight={1410}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Column
            className="bg-teal_200 items-center justify-start lg:mb-[422px] xl:mb-[483px] 2xl:mb-[543px] 3xl:mb-[651px] mb-[724px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] w-[20%]"
            compId="898"
            comWidth={381}
            comHeight={686}
            compLeft={150}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-medium font-montserrat lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] mx-[auto] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_50 text-left w-[22%]"
              compId="880:317"
              comWidth={82}
              comHeight={68}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`5.0`}</Text>
            <RatingBar
              className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto]"
              compId="911"
              comWidth={192}
              comHeight={32}
              compLeft={10}
              compRight={10}
              compType="RatingBar"
              value={5}
              starCount={5}
              activeColor="var(--orange_A100)"
              size={((window.innerWidth - 15) * 32) / 1920}
            ></RatingBar>
            <Text
              className="font-normal font-poppins lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[29%]"
              compId="880:318"
              comWidth={110}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`200 Reviews`}</Text>
            <List
              className="font-poppins gap-[0] min-h-[auto] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[83%]"
              compId="908"
              comWidth={318}
              comHeight={124}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="vertical"
            >
              <Column
                className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="882"
                comWidth={318}
                comHeight={46}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="880:321"
                  comWidth={318}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <RatingBar
                    className="lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px]"
                    compId="912"
                    comWidth={112}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="RatingBar"
                    value={5}
                    starCount={5}
                    activeColor="var(--orange_A100)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                  <Text
                    className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[9%]"
                    compId="880:330"
                    comWidth={29}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`100`}</Text>
                </Row>
                <div
                  className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] overflow-hidden relative w-[100%]"
                  compId="143"
                  comWidth={317}
                  comHeight={8}
                  compLeft={0}
                  compRight={1}
                  compType="ProgressBar"
                  name="Group143"
                >
                  <div className="w-full h-full absolute bg-gray_50"></div>
                  <div
                    className="h-full absolute bg-gray_50"
                    style={{ width: "56%" }}
                  ></div>
                </div>
              </Column>
              <Column
                className="xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="883"
                comWidth={317}
                comHeight={46}
                compLeft={0}
                compRight={1}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="880:332"
                  comWidth={317}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-4 items-center justify-between lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[28%]"
                    compId="915"
                    comWidth={88}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_2.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="880:333"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Image
                      src={"images/img_star1_2.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="880:334"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star2"
                    />
                    <Image
                      src={"images/img_star1_2.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="880:335"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star3"
                    />
                    <Image
                      src={"images/img_star1_2.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="880:336"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star5"
                    />
                  </Row>
                  <Text
                    className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[7%]"
                    compId="880:340"
                    comWidth={23}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`80`}</Text>
                </Row>
                <div
                  className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] overflow-hidden relative w-[100%]"
                  compId="144"
                  comWidth={317}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group144"
                >
                  <div className="w-full h-full absolute bg-gray_50"></div>
                  <div
                    className="h-full absolute bg-gray_50"
                    style={{ width: "38%" }}
                  ></div>
                </div>
              </Column>
            </List>
            <List
              className="font-poppins gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[83%]"
              compId="909"
              comWidth={317}
              comHeight={124}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="vertical"
            >
              <Column
                className="xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="884"
                comWidth={317}
                comHeight={46}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="880:342"
                  comWidth={317}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-3 items-center justify-between lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[20%]"
                    compId="916"
                    comWidth={64}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_2.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="880:343"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Image
                      src={"images/img_star1_2.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="880:344"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star2"
                    />
                    <Image
                      src={"images/img_star1_2.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="880:345"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star3"
                    />
                  </Row>
                  <Text
                    className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[6%]"
                    compId="880:349"
                    comWidth={18}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`10`}</Text>
                </Row>
                <div
                  className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] overflow-hidden relative w-[100%]"
                  compId="145"
                  comWidth={317}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group145"
                >
                  <div className="w-full h-full absolute bg-gray_50"></div>
                  <div
                    className="h-full absolute bg-gray_50"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </Column>
              <Column
                className="xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="885"
                comWidth={317}
                comHeight={46}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start w-[100%]"
                  compId="880:351"
                  comWidth={317}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_star1_2.svg"}
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                    compId="880:352"
                    comWidth={16}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Star1"
                  />
                  <Image
                    src={"images/img_star1_2.svg"}
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                    compId="880:353"
                    comWidth={16}
                    comHeight={16}
                    compLeft={8}
                    compRight={0}
                    compType="Image"
                    alt="Star2"
                  />
                  <Text
                    className="font-normal lg:ml-[154px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[238px] ml-[265px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[4%]"
                    compId="880:357"
                    comWidth={12}
                    comHeight={27}
                    compLeft={265}
                    compRight={0}
                    compType="Text"
                  >{`9`}</Text>
                </Row>
                <div
                  className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] overflow-hidden relative w-[100%]"
                  compId="146"
                  comWidth={317}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group146"
                >
                  <div className="w-full h-full absolute bg-gray_50"></div>
                  <div
                    className="h-full absolute bg-gray_50"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </Column>
            </List>
            <Column
              className="font-poppins items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="887"
              comWidth={381}
              comHeight={46}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="886"
                comWidth={381}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_star1_2.svg"}
                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] ml-[31px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                  compId="880:360"
                  comWidth={16}
                  comHeight={16}
                  compLeft={31}
                  compRight={0}
                  compType="Image"
                  alt="Star1"
                />
                <Text
                  className="font-normal lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[2%]"
                  compId="880:364"
                  comWidth={6}
                  comHeight={27}
                  compLeft={0}
                  compRight={33}
                  compType="Text"
                >{`1`}</Text>
              </Row>
              <div
                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] mx-[auto] overflow-hidden relative w-[83%]"
                compId="147"
                comWidth={317}
                comHeight={8}
                compLeft={10}
                compRight={10}
                compType="ProgressBar"
                name="Group147"
              >
                <div className="w-full h-full absolute bg-gray_50"></div>
                <div
                  className="h-full absolute bg-gray_50"
                  style={{ width: "5%" }}
                ></div>
              </div>
            </Column>
          </Column>
          <Column
            className="items-start justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[63%]"
            compId="900"
            comWidth={1207}
            comHeight={1410}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[58%]"
              compId="880:299"
              comWidth={706}
              comHeight={68}
              compLeft={0}
              compRight={10}
              compType="Row"
            >
              <Button
                className="bg-gray_301 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[28%]"
                compId="139"
                comWidth={201}
                comHeight={68}
                compLeft={0}
                compRight={0}
                compType="Button"
              >{`Reviews (200)`}</Button>
              <Button
                className="bg-teal_200 font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 w-[24%]"
                compId="138"
                comWidth={168}
                comHeight={68}
                compLeft={8}
                compRight={0}
                compType="Button"
              >{`Description`}</Button>
              <Button
                className="bg-gray_301 font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[23%]"
                compId="137"
                comWidth={160}
                comHeight={68}
                compLeft={8}
                compRight={0}
                compType="Button"
              >{`Discussion`}</Button>
              <Button
                className="bg-gray_301 font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[22%]"
                compId="136"
                comWidth={153}
                comHeight={68}
                compLeft={8}
                compRight={0}
                compType="Button"
              >{`Gift Cards`}</Button>
            </Row>
            <Column
              className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="922"
              comWidth={1207}
              comHeight={1310}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="border border-gray_700 border-solid items-start justify-start lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                compId="890"
                comWidth={1207}
                comHeight={1310}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="w-[100%]"
                  compId="923"
                  comWidth={1207}
                  comHeight={480}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-between w-[100%]"
                    compId="891"
                    comWidth={1207}
                    comHeight={480}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[39%]"
                      compId="882:453"
                      comWidth={474}
                      comHeight={480}
                      compLeft={32}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="lg:mb-[33px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[52px] mb-[58px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] w-[52%]"
                      compId="889"
                      comWidth={622}
                      comHeight={422}
                      compLeft={0}
                      compRight={32}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                        compId="882:456"
                        comWidth={622}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet`}</Text>
                      <Text
                        className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh19 3xl:leading-lh23 leading-lh2600 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[100%]"
                        compId="882:455"
                        comWidth={622}
                        comHeight={364}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        {
                          <>
                            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}
                            <br />
                            {``}
                            <br />
                            {`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                            <br />
                            {``}
                            <br />
                            {`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`}
                          </>
                        }
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Text
                  className="font-bold lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] lg:mx-[29px] xl:mx-[34px] 2xl:mx-[38px] 3xl:mx-[45px] mx-[51px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[65%]"
                  compId="882:450"
                  comWidth={783}
                  comHeight={26}
                  compLeft={51}
                  compRight={51}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet`}</Text>
                <Text
                  className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh19 3xl:leading-lh23 leading-lh2600 lg:ml-[29px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[45px] ml-[51px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[93%]"
                  compId="882:448"
                  comWidth={1124}
                  comHeight={104}
                  compLeft={51}
                  compRight={32}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</Text>
                <Column
                  className="items-center lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] mt-[51px] w-[100%]"
                  compId="924"
                  comWidth={1207}
                  comHeight={480}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Stack
                    className="lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] mx-[auto] w-[93%]"
                    compId="905"
                    comWidth={1124}
                    comHeight={480}
                    compLeft={10}
                    compRight={10}
                    compType="Stack"
                  >
                    <Text
                      className="absolute font-normal h-[max-content] inset-y-[0] lg:leading-lh15 xl:leading-lh17 2xl:leading-lh19 3xl:leading-lh23 leading-lh2600 left-[0] my-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[46%]"
                      compId="882:449"
                      comWidth={518}
                      comHeight={364}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      {
                        <>
                          {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `}
                          <br />
                          {``}
                          <br />
                          {`Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. `}
                          <br />
                          {``}
                          <br />
                          {`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`}
                        </>
                      }
                    </Text>
                    <Stack
                      className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] inset-[0] w-[100%]"
                      compId="907"
                      comWidth={1124}
                      comHeight={480}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Text
                        className="absolute font-bold left-[0] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left top-[1%] w-[70%]"
                        compId="882:457"
                        comWidth={783}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet`}</Text>
                      <div
                        className="absolute bg-gray_400 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] right-[0] w-[42%]"
                        compId="882:460"
                        comWidth={474}
                        comHeight={480}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Stack>
                  </Stack>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
        <Column
          className="items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="892"
          comWidth={1920}
          comHeight={725}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="font-montserrat items-center justify-between mx-[auto] w-[84%]"
            compId="896:291"
            comWidth={1620}
            comHeight={68}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-medium lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[28%]"
              compId="896:261"
              comWidth={457}
              comHeight={68}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Similiar Product`}</Text>
            <Row
              className="items-center justify-between my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[18%]"
              compId="917"
              comWidth={288}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_prev_2.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain w-[28%]"
                compId="896:292"
                comWidth={80}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="prev"
              />
              <PagerIndicator
                className="h-[12px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] w-[auto]"
                compId="141"
                comWidth={112}
                comHeight={12}
                compLeft={0}
                compRight={0}
                compType="PagerIndicator"
                count={6}
                activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-teal_200"
                activeIndex={undefined}
                inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_301"
                sliderRef={undefined}
                selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
                unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
              />
              <Image
                src={"images/img_next_2.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain w-[28%]"
                compId="896:303"
                comWidth={80}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="next"
              />
            </Row>
          </Row>
          <List
            className="font-poppins lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 min-h-[auto] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[84%]"
            compId="896:262"
            comWidth={1620}
            comHeight={485}
            compLeft={10}
            compRight={10}
            compType="List"
            orientation="horizontal"
          >
            <Column
              className="items-start justify-start w-[100%]"
              compId="896:263"
              comWidth={381}
              comHeight={485}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] w-[100%]"
                compId="925"
                comWidth={381}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_maskgroup_30.svg"}
                  className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] mx-[auto] object-cover lg:w-[222px] xl:w-[254px] 2xl:w-[285px] 3xl:w-[343px] w-[381px]"
                  compId="896:267"
                  comWidth={381}
                  comHeight={381}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
              </Column>
              <Column
                className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[35%]"
                compId="896:264"
                comWidth={134}
                comHeight={80}
                compLeft={0}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                  compId="896:265"
                  comWidth={134}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Face Scrub`}</Text>
                <Text
                  className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[45%]"
                  compId="896:266"
                  comWidth={60}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Column>
            <Column
              className="items-start justify-start w-[100%]"
              compId="896:270"
              comWidth={381}
              comHeight={485}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Column
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] w-[100%]"
                compId="926"
                comWidth={381}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_maskgroup_31.svg"}
                  className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] mx-[auto] object-cover lg:w-[222px] xl:w-[254px] 2xl:w-[285px] 3xl:w-[343px] w-[381px]"
                  compId="896:274"
                  comWidth={381}
                  comHeight={381}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
              </Column>
              <Column
                className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[59%]"
                compId="896:271"
                comWidth={225}
                comHeight={80}
                compLeft={0}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                  compId="896:272"
                  comWidth={225}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Anti-Aging Serum`}</Text>
                <Text
                  className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[27%]"
                  compId="896:273"
                  comWidth={60}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Column>
            <Column
              className="items-start justify-start w-[100%]"
              compId="896:277"
              comWidth={381}
              comHeight={485}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Column
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] w-[100%]"
                compId="927"
                comWidth={381}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_maskgroup_32.svg"}
                  className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] mx-[auto] object-cover lg:w-[222px] xl:w-[254px] 2xl:w-[285px] 3xl:w-[343px] w-[381px]"
                  compId="896:281"
                  comWidth={381}
                  comHeight={381}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
              </Column>
              <Column
                className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[36%]"
                compId="896:278"
                comWidth={137}
                comHeight={80}
                compLeft={0}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                  compId="896:279"
                  comWidth={137}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Sleep Mask`}</Text>
                <Text
                  className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[44%]"
                  compId="896:280"
                  comWidth={60}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Column>
            <Column
              className="items-start justify-start w-[100%]"
              compId="896:284"
              comWidth={381}
              comHeight={485}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Column
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] w-[100%]"
                compId="928"
                comWidth={381}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_maskgroup_33.svg"}
                  className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] mx-[auto] object-cover lg:w-[222px] xl:w-[254px] 2xl:w-[285px] 3xl:w-[343px] w-[381px]"
                  compId="896:288"
                  comWidth={381}
                  comHeight={381}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
              </Column>
              <Column
                className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[53%]"
                compId="896:285"
                comWidth={202}
                comHeight={80}
                compLeft={0}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                  compId="896:286"
                  comWidth={202}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Healthy Lip Balm`}</Text>
                <Text
                  className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[30%]"
                  compId="896:287"
                  comWidth={60}
                  comHeight={36}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Column>
          </List>
          <Button
            className="border-2 border-solid border-teal_200 font-medium font-poppins lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 w-[9%]"
            compId="140"
            comWidth={180}
            comHeight={60}
            compLeft={10}
            compRight={10}
            compType="Button"
          >{`Load more`}</Button>
        </Column>
        <footer
          className="xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="860:2041"
          comWidth={1920}
          comHeight={585}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-gray_900 items-center justify-end w-[100%]"
            compId="896"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
              compId="895"
              comWidth={1920}
              comHeight={237}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] w-[46%]"
                compId="918"
                comWidth={879}
                comHeight={217}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] w-[43%]"
                  compId="860:2043"
                  comWidth={381}
                  comHeight={196}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[25%]"
                    compId="860:2044"
                    comWidth={96}
                    comHeight={54}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Lovia`}</Text>
                  <Text
                    className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="860:2045"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Image
                    src={"images/img_sosmedia_3.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[44%]"
                    compId="860:2051"
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
                  compId="860:2061"
                  comWidth={109}
                  comHeight={217}
                  compLeft={138}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="860:2062"
                    comWidth={109}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Products`}</Text>
                  <Column
                    className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                    compId="860:2063"
                    comWidth={101}
                    comHeight={156}
                    compLeft={0}
                    compRight={8}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                      compId="860:2064"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="860:2065"
                      comWidth={101}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`New Arrival`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                      compId="860:2066"
                      comWidth={69}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Popular`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                      compId="860:2067"
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
                  compId="860:2068"
                  comWidth={117}
                  comHeight={217}
                  compLeft={134}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="860:2069"
                    comWidth={117}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Company`}</Text>
                  <Column
                    className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="860:2070"
                    comWidth={75}
                    comHeight={156}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                      compId="860:2071"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                      compId="860:2072"
                      comWidth={48}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`News`}</Text>
                    <Text
                      className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                      compId="860:2073"
                      comWidth={72}
                      comHeight={27}
                      compLeft={0}
                      compRight={3}
                      compType="Text"
                    >{`Careers`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="860:2074"
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
                compId="860:2075"
                comWidth={147}
                comHeight={217}
                compLeft={122}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                  compId="860:2076"
                  comWidth={99}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Support`}</Text>
                <Column
                  className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="929"
                  comWidth={147}
                  comHeight={156}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="860:2077"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                      compId="860:2078"
                      comWidth={107}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                      compId="860:2079"
                      comWidth={146}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`Delivery Service`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                      compId="860:2080"
                      comWidth={122}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Privacy Policy`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="860:2081"
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
                compId="860:2082"
                comWidth={381}
                comHeight={237}
                compLeft={142}
                compRight={99}
                compType="Column"
              >
                <Text
                  className="font-montserrat font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[25%]"
                  compId="860:2083"
                  comWidth={96}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Contact`}</Text>
                <Text
                  className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                  compId="860:2084"
                  comWidth={381}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <Column
                  className="font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                  compId="860:2085"
                  comWidth={243}
                  comHeight={80}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start w-[100%]"
                    compId="860:2086"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_call_2.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="860:2087"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Call"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                      compId="860:2089"
                      comWidth={211}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`+1234567890`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="860:2090"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_email.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="860:2091"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Email"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                      compId="860:2093"
                      comWidth={211}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`elliye@support.com`}</Text>
                  </Row>
                </Column>
              </Column>
            </Row>
            <Line
              className="bg-teal_200 h-[1px] xl:mt-[100px] 2xl:mt-[112px] 3xl:mt-[135px] mt-[150px] lg:mt-[87px] mx-[auto] w-[84%]"
              compId="860:2050"
              comWidth={1620}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[84%]"
              compId="860:2046"
              comWidth={1620}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Text
                className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                compId="860:2049"
                comWidth={281}
                comHeight={21}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
              <Text
                className="font-normal 3xl:ml-[1157px] ml-[1285px] lg:ml-[749px] xl:ml-[857px] 2xl:ml-[964px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                compId="860:2047"
                comWidth={22}
                comHeight={27}
                compLeft={1285}
                compRight={0}
                compType="Text"
              >{`EN`}</Text>
              <Text
                className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                compId="860:2048"
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

export default CollectionDetailsPage;
