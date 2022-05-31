import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { RatingBar } from "components/RatingBar";
import { Line } from "components/Line";
import { Button } from "components/Button";
import { List } from "components/List";
import { Input } from "components/Input";
import { PagerIndicator } from "components/PagerIndicator";

const ProductDetailsPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="407:331"
        comWidth={1920}
        comHeight={3600}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="109"
          comWidth={1920}
          comHeight={120}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Row
            className="bg-gray_50 items-center justify-start w-[100%]"
            compId="846:328"
            comWidth={1920}
            comHeight={120}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-semibold lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[5%]"
              compId="846:334"
              comWidth={96}
              comHeight={54}
              compLeft={150}
              compRight={0}
              compType="Text"
            >{`Lovia`}</Text>
            <Row
              className="items-center justify-center lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[411px] ml-[457px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] w-[27%]"
              compId="784"
              comWidth={515}
              comHeight={27}
              compLeft={457}
              compRight={0}
              compType="Row"
            >
              <Text
                className="cursor-pointer hover:font-normal font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[16%]"
                compId="846:329"
                comWidth={80}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Products`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[20%]"
                compId="846:330"
                comWidth={101}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`New Arrival`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[8%]"
                compId="846:331"
                comWidth={40}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`Blog`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left hover:text-teal_200 w-[10%]"
                compId="846:332"
                comWidth={54}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`About`}</Text>
            </Row>
            <Column
              className="items-start lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] lg:ml-[206px] xl:ml-[236px] 2xl:ml-[265px] 3xl:ml-[318px] ml-[354px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[5%]"
              compId="772"
              comWidth={100}
              comHeight={36}
              compLeft={354}
              compRight={0}
              compType="Column"
            >
              <div
                className="bg-red_300 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px] w-[8px]"
                compId="846:345"
                comWidth={8}
                comHeight={8}
                compLeft={10}
                compRight={0}
                compType="View"
              ></div>
              <Column
                className="items-start w-[100%]"
                compId="790"
                comWidth={100}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_icon_2.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] 2xl:mr-[3px] mr-[4px] object-contain w-[96%]"
                  compId="846:335"
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
              compId="846:343"
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
          compId="743"
          comWidth={1920}
          comHeight={542}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Image
            src={"images/img_image_28.svg"}
            className="lg:h-[302px] xl:h-[345px] 2xl:h-[389px] 3xl:h-[466px] h-[517px] lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] object-contain w-[43%]"
            compId="455:357"
            comWidth={826}
            comHeight={517}
            compLeft={150}
            compRight={0}
            compType="Image"
            alt="image"
          />
          <Column
            className="items-start ml-[101px] lg:ml-[58px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] w-[36%]"
            compId="742"
            comWidth={693}
            comHeight={542}
            compLeft={101}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[49%]"
              compId="407:383"
              comWidth={339}
              comHeight={27}
              compLeft={6}
              compRight={10}
              compType="Row"
            >
              <Text
                className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[21%]"
                compId="407:384"
                comWidth={71}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Product`}</Text>
              <Text
                className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[3%]"
                compId="407:385"
                comWidth={11}
                comHeight={27}
                compLeft={16}
                compRight={0}
                compType="Text"
              >{`>`}</Text>
              <Text
                className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[66%]"
                compId="407:386"
                comWidth={225}
                comHeight={27}
                compLeft={16}
                compRight={0}
                compType="Text"
              >{`Skin Whitening with Vit C`}</Text>
            </Row>
            <Text
              className="font-medium lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_900 text-left w-[65%]"
              compId="407:387"
              comWidth={449}
              comHeight={54}
              compLeft={6}
              compRight={10}
              compType="Text"
            >{`Skin Whitening with Vit C`}</Text>
            <Column
              className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
              compId="791"
              comWidth={693}
              comHeight={154}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="737"
                comWidth={693}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-center justify-between lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] w-[51%]"
                  compId="785"
                  comWidth={352}
                  comHeight={27}
                  compLeft={6}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[8%]"
                    compId="672:190"
                    comWidth={28}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`5.0`}</Text>
                  <RatingBar
                    className="my-[1px]"
                    compId="776"
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
                    compId="669:189"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Review (12)`}</Text>
                  <Line
                    className="bg-teal_200 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] mt-[1px] opacity-op5 rotate-[90deg] w-[1px]"
                    compId="673:196"
                    comWidth={1}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Image
                    src={"images/img_love.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="673:193"
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
                  compId="673:195"
                  comWidth={135}
                  comHeight={27}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`Add to Wishlist`}</Text>
              </Row>
              <Row
                className="items-center justify-start lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[100%]"
                compId="735"
                comWidth={693}
                comHeight={54}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[18%]"
                  compId="407:388"
                  comWidth={122}
                  comHeight={54}
                  compLeft={6}
                  compRight={0}
                  compType="Text"
                >{`$29.00`}</Text>
                <Text
                  className="font-medium line-through xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_700 text-left w-[12%]"
                  compId="846:346"
                  comWidth={83}
                  comHeight={36}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >{`$99.00`}</Text>
                <Text
                  className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[13%]"
                  compId="846:354"
                  comWidth={87}
                  comHeight={27}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >{`Save 50%`}</Text>
              </Row>
              <Line
                className="bg-gray_900 h-[1px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[99%]"
                compId="407:389"
                comWidth={687}
                comHeight={1}
                compLeft={6}
                compRight={0}
                compType="Line"
              />
            </Column>
            <Text
              className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[99%]"
              compId="407:390"
              comWidth={687}
              comHeight={128}
              compLeft={6}
              compRight={0}
              compType="Text"
            >{`Skin whitening product that not only gives you white skin but also healthy and beautiful skin. With vitamin C, this product is suitable for your normal, oily or dry skin. Apply the cream before you sleep on your face to your neck after washing your face.`}</Text>
            <Column
              className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[100%]"
              compId="792"
              comWidth={693}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="736"
                comWidth={693}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[11%]"
                  compId="407:403"
                  comWidth={79}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Quantity`}</Text>
                <Row
                  className="gap-[0] grid grid-cols-3 items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[26%]"
                  compId="407:396"
                  comWidth={180}
                  comHeight={60}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_decrease.svg"}
                    className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                    compId="407:399"
                    comWidth={60}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="decrease"
                  />
                  <Button
                    className="border border-gray_900_19 border-solid font-medium lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                    compId="100"
                    comWidth={60}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`1`}</Button>
                  <Image
                    src={"images/img_increase.svg"}
                    className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                    compId="407:397"
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
                  compId="98"
                  comWidth={120}
                  comHeight={60}
                  compLeft={86}
                  compRight={0}
                  compType="Button"
                >{`Buy`}</Button>
                <Button
                  className="bg-teal_200 font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[26%]"
                  compId="99"
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
          compId="771"
          comWidth={1920}
          comHeight={1068}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Column
            className="bg-teal_200 items-center justify-start lg:mb-[222px] xl:mb-[254px] 2xl:mb-[286px] 3xl:mb-[343px] mb-[382px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] w-[20%]"
            compId="757"
            comWidth={381}
            comHeight={686}
            compLeft={150}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-medium font-montserrat lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] mx-[auto] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_50 text-left w-[22%]"
              compId="841:95"
              comWidth={82}
              comHeight={68}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`5.0`}</Text>
            <RatingBar
              className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto]"
              compId="777"
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
              compId="841:97"
              comWidth={110}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`200 Reviews`}</Text>
            <List
              className="font-poppins gap-[0] min-h-[auto] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[83%]"
              compId="773"
              comWidth={318}
              comHeight={124}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="vertical"
            >
              <Column
                className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="744"
                comWidth={318}
                comHeight={46}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="846:117"
                  comWidth={318}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <RatingBar
                    className="lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px]"
                    compId="778"
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
                    compId="846:124"
                    comWidth={29}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`100`}</Text>
                </Row>
                <div
                  className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] overflow-hidden relative w-[100%]"
                  compId="116"
                  comWidth={317}
                  comHeight={8}
                  compLeft={0}
                  compRight={1}
                  compType="ProgressBar"
                  name="Group116"
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
                compId="745"
                comWidth={317}
                comHeight={46}
                compLeft={0}
                compRight={1}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="846:127"
                  comWidth={317}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-4 items-center justify-between lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[28%]"
                    compId="786"
                    comWidth={88}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="846:128"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="846:129"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star2"
                    />
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="846:130"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star3"
                    />
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="846:131"
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
                    compId="846:136"
                    comWidth={23}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`80`}</Text>
                </Row>
                <div
                  className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] overflow-hidden relative w-[100%]"
                  compId="117"
                  comWidth={317}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group117"
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
              compId="774"
              comWidth={317}
              comHeight={124}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="vertical"
            >
              <Column
                className="xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="746"
                comWidth={317}
                comHeight={46}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="846:138"
                  comWidth={317}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-3 items-center justify-between lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[20%]"
                    compId="787"
                    comWidth={64}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="846:139"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="846:140"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star2"
                    />
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="846:141"
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
                    compId="846:147"
                    comWidth={18}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`10`}</Text>
                </Row>
                <div
                  className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] overflow-hidden relative w-[100%]"
                  compId="118"
                  comWidth={317}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group118"
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
                compId="747"
                comWidth={317}
                comHeight={46}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start w-[100%]"
                  compId="846:149"
                  comWidth={317}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_star1_1.svg"}
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                    compId="846:150"
                    comWidth={16}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Star1"
                  />
                  <Image
                    src={"images/img_star1_1.svg"}
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                    compId="846:151"
                    comWidth={16}
                    comHeight={16}
                    compLeft={8}
                    compRight={0}
                    compType="Image"
                    alt="Star2"
                  />
                  <Text
                    className="font-normal lg:ml-[154px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[238px] ml-[265px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[4%]"
                    compId="846:158"
                    comWidth={12}
                    comHeight={27}
                    compLeft={265}
                    compRight={0}
                    compType="Text"
                  >{`9`}</Text>
                </Row>
                <div
                  className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] overflow-hidden relative w-[100%]"
                  compId="119"
                  comWidth={317}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group119"
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
              compId="749"
              comWidth={381}
              comHeight={46}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="748"
                comWidth={381}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_star1_1.svg"}
                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] ml-[31px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                  compId="846:161"
                  comWidth={16}
                  comHeight={16}
                  compLeft={31}
                  compRight={0}
                  compType="Image"
                  alt="Star1"
                />
                <Text
                  className="font-normal lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[2%]"
                  compId="846:169"
                  comWidth={6}
                  comHeight={27}
                  compLeft={0}
                  compRight={33}
                  compType="Text"
                >{`1`}</Text>
              </Row>
              <div
                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] mx-[auto] overflow-hidden relative w-[83%]"
                compId="120"
                comWidth={317}
                comHeight={8}
                compLeft={10}
                compRight={10}
                compType="ProgressBar"
                name="Group120"
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
            compId="770"
            comWidth={1207}
            comHeight={1068}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[58%]"
              compId="843:98"
              comWidth={706}
              comHeight={68}
              compLeft={0}
              compRight={10}
              compType="Row"
            >
              <Button
                className="bg-teal_200 font-normal not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 w-[28%]"
                compId="104"
                comWidth={201}
                comHeight={68}
                compLeft={0}
                compRight={0}
                compType="Button"
              >{`Reviews (200)`}</Button>
              <Button
                className="bg-gray_301 font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[24%]"
                compId="103"
                comWidth={168}
                comHeight={68}
                compLeft={8}
                compRight={0}
                compType="Button"
              >{`Description`}</Button>
              <Button
                className="bg-gray_301 font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[23%]"
                compId="102"
                comWidth={160}
                comHeight={68}
                compLeft={8}
                compRight={0}
                compType="Button"
              >{`Discussion`}</Button>
              <Button
                className="bg-gray_301 font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.060001px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 w-[22%]"
                compId="101"
                comWidth={153}
                comHeight={68}
                compLeft={8}
                compRight={0}
                compType="Button"
              >{`Gift Cards`}</Button>
            </Row>
            <Column
              className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="793"
              comWidth={1207}
              comHeight={968}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="border border-gray_700 border-solid items-start justify-start w-[100%]"
                compId="750"
                comWidth={1207}
                comHeight={968}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[43%]"
                  compId="846:264"
                  comWidth={519}
                  comHeight={904}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    compId="775"
                    comWidth={519}
                    comHeight={788}
                    compLeft={0}
                    compRight={0}
                    compType="List"
                    orientation="vertical"
                  >
                    <Column
                      className="lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] w-[100%]"
                      compId="760"
                      comWidth={519}
                      comHeight={167}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="794"
                        comWidth={519}
                        comHeight={62}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-start w-[100%]"
                          compId="759"
                          comWidth={519}
                          comHeight={62}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <div
                            className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                            compId="846:174"
                            comWidth={56}
                            comHeight={56}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Column
                            className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[59%]"
                            compId="758"
                            comWidth={304}
                            comHeight={62}
                            compLeft={16}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[32%]"
                              compId="846:175"
                              comWidth={97}
                              comHeight={27}
                              compLeft={0}
                              compRight={10}
                              compType="Text"
                            >{`Samantha`}</Text>
                            <Column
                              className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                              compId="795"
                              comWidth={304}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Row
                                className="items-center justify-between w-[100%]"
                                compId="846:177"
                                comWidth={304}
                                comHeight={27}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[9%]"
                                  compId="846:178"
                                  comWidth={28}
                                  comHeight={27}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >{`5.0`}</Text>
                                <RatingBar
                                  className="my-[1px]"
                                  compId="779"
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
                                  className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[36%]"
                                  compId="846:186"
                                  comWidth={108}
                                  comHeight={27}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >{`1 Month Ago`}</Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                      </Column>
                      <Text
                        className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[100%]"
                        compId="846:176"
                        comWidth={519}
                        comHeight={81}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    </Column>
                    <Column
                      className="lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] w-[100%]"
                      compId="763"
                      comWidth={519}
                      comHeight={167}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="796"
                        comWidth={519}
                        comHeight={62}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-start w-[100%]"
                          compId="762"
                          comWidth={519}
                          comHeight={62}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <div
                            className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                            compId="846:190"
                            comWidth={56}
                            comHeight={56}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Column
                            className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[59%]"
                            compId="761"
                            comWidth={304}
                            comHeight={62}
                            compLeft={16}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[23%]"
                              compId="846:192"
                              comWidth={69}
                              comHeight={27}
                              compLeft={0}
                              compRight={10}
                              compType="Text"
                            >{`Maduin`}</Text>
                            <Column
                              className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                              compId="797"
                              comWidth={304}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Row
                                className="items-center justify-between w-[100%]"
                                compId="846:193"
                                comWidth={304}
                                comHeight={27}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[9%]"
                                  compId="846:194"
                                  comWidth={28}
                                  comHeight={27}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >{`5.0`}</Text>
                                <RatingBar
                                  className="my-[1px]"
                                  compId="780"
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
                                  className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[36%]"
                                  compId="846:201"
                                  comWidth={108}
                                  comHeight={27}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >{`1 Month Ago`}</Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                      </Column>
                      <Text
                        className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[100%]"
                        compId="846:191"
                        comWidth={519}
                        comHeight={81}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    </Column>
                    <Column
                      className="lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] w-[100%]"
                      compId="766"
                      comWidth={519}
                      comHeight={167}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="798"
                        comWidth={519}
                        comHeight={62}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-start w-[100%]"
                          compId="765"
                          comWidth={519}
                          comHeight={62}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <div
                            className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                            compId="846:204"
                            comWidth={56}
                            comHeight={56}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Column
                            className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[59%]"
                            compId="764"
                            comWidth={304}
                            comHeight={62}
                            compLeft={16}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[20%]"
                              compId="846:206"
                              comWidth={62}
                              comHeight={27}
                              compLeft={0}
                              compRight={10}
                              compType="Text"
                            >{`Vanille`}</Text>
                            <Column
                              className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                              compId="799"
                              comWidth={304}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Row
                                className="items-center justify-between w-[100%]"
                                compId="846:207"
                                comWidth={304}
                                comHeight={27}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[9%]"
                                  compId="846:208"
                                  comWidth={28}
                                  comHeight={27}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >{`5.0`}</Text>
                                <RatingBar
                                  className="my-[1px]"
                                  compId="781"
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
                                  className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[36%]"
                                  compId="846:215"
                                  comWidth={108}
                                  comHeight={27}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >{`1 Month Ago`}</Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                      </Column>
                      <Text
                        className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[100%]"
                        compId="846:205"
                        comWidth={519}
                        comHeight={81}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    </Column>
                    <Column
                      className="lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] w-[100%]"
                      compId="769"
                      comWidth={519}
                      comHeight={167}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="800"
                        comWidth={519}
                        comHeight={62}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-start w-[100%]"
                          compId="768"
                          comWidth={519}
                          comHeight={62}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <div
                            className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                            compId="846:218"
                            comWidth={56}
                            comHeight={56}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Column
                            className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[59%]"
                            compId="767"
                            comWidth={304}
                            comHeight={62}
                            compLeft={16}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[23%]"
                              compId="846:220"
                              comWidth={69}
                              comHeight={27}
                              compLeft={0}
                              compRight={10}
                              compType="Text"
                            >{`Roveria`}</Text>
                            <Column
                              className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                              compId="801"
                              comWidth={304}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Row
                                className="items-center justify-between w-[100%]"
                                compId="846:221"
                                comWidth={304}
                                comHeight={27}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[9%]"
                                  compId="846:222"
                                  comWidth={28}
                                  comHeight={27}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >{`5.0`}</Text>
                                <RatingBar
                                  className="my-[1px]"
                                  compId="782"
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
                                  className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[36%]"
                                  compId="846:229"
                                  comWidth={108}
                                  comHeight={27}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >{`1 Month Ago`}</Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                      </Column>
                      <Text
                        className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[100%]"
                        compId="846:219"
                        comWidth={519}
                        comHeight={81}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    </Column>
                  </List>
                  <Button
                    className="border-2 border-solid border-teal_200 font-medium lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-teal_200 w-[35%]"
                    compId="105"
                    comWidth={180}
                    comHeight={60}
                    compLeft={10}
                    compRight={10}
                    compType="Button"
                  >{`Load more`}</Button>
                </Column>
                <Line
                  className="bg-gray_900 lg:h-[528px] xl:h-[604px] 2xl:h-[679px] 3xl:h-[815px] h-[904px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] opacity-op1 rotate-[90deg] w-[1px]"
                  compId="846:263"
                  comWidth={1}
                  comHeight={904}
                  compLeft={32}
                  compRight={0}
                  compType="Line"
                />
                <Column
                  className="items-start justify-start lg:mb-[121px] xl:mb-[139px] 2xl:mb-[156px] 3xl:mb-[188px] mb-[209px] lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] ml-[31px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] w-[43%]"
                  compId="870:802"
                  comWidth={522}
                  comHeight={725}
                  compLeft={31}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[92%]"
                    compId="846:262"
                    comWidth={480}
                    comHeight={97}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[32%]"
                      compId="846:232"
                      comWidth={155}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Add Your Review`}</Text>
                    <Text
                      className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[100%]"
                      compId="846:233"
                      comWidth={480}
                      comHeight={54}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  </Column>
                  <Column
                    className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[100%]"
                    compId="802"
                    comWidth={522}
                    comHeight={432}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="111"
                      comWidth={522}
                      comHeight={103}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[13%]"
                        compId="846:255"
                        comWidth={69}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Name *`}</Text>
                      <Input
                        className="bg-gray_50 placeholder:bg-transparent border border-gray_900 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_900 w-[100%]"
                        compId="110"
                        comWidth={522}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="Group110"
                        placeholder={`Name *`}
                      ></Input>
                    </Column>
                    <Column
                      className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="113"
                      comWidth={522}
                      comHeight={103}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[12%]"
                        compId="846:258"
                        comWidth={63}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Email *`}</Text>
                      <Input
                        className="bg-gray_50 placeholder:bg-transparent border border-gray_900 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_900 w-[100%]"
                        compId="112"
                        comWidth={522}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="Group112"
                        placeholder={`Email *`}
                      ></Input>
                    </Column>
                    <Column
                      className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="115"
                      comWidth={522}
                      comHeight={162}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[15%]"
                        compId="846:235"
                        comWidth={77}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Review *`}</Text>
                      <Input
                        className="bg-gray_50 placeholder:bg-transparent border border-gray_700 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] placeholder:text-gray_900 w-[100%]"
                        compId="114"
                        comWidth={522}
                        comHeight={119}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="Group114"
                        placeholder={`Review *`}
                      ></Input>
                    </Column>
                  </Column>
                  <Row
                    className="items-center justify-start ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[48%]"
                    compId="846:238"
                    comWidth={251}
                    comHeight={32}
                    compLeft={2}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-medium 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_900 text-left w-[24%]"
                      compId="846:239"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Rating`}</Text>
                    <RatingBar
                      className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px]"
                      compId="783"
                      comWidth={176}
                      comHeight={32}
                      compLeft={16}
                      compRight={0}
                      compType="RatingBar"
                      value={4}
                      starCount={5}
                      color="var(--gray_700)"
                      activeColor="var(--orange_A100)"
                      size={((window.innerWidth - 15) * 32) / 1920}
                    ></RatingBar>
                  </Row>
                  <Button
                    className="bg-teal_200 font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[34%]"
                    compId="106"
                    comWidth={180}
                    comHeight={60}
                    compLeft={0}
                    compRight={10}
                    compType="Button"
                  >{`Submit`}</Button>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
        <Column
          className="items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="751"
          comWidth={1920}
          comHeight={725}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="font-montserrat items-center justify-between mx-[auto] w-[84%]"
            compId="896:241"
            comWidth={1620}
            comHeight={68}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-medium lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_900 text-left w-[28%]"
              compId="896:207"
              comWidth={457}
              comHeight={68}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Similiar Product`}</Text>
            <Row
              className="items-center justify-between my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[18%]"
              compId="788"
              comWidth={288}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_prev_1.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain w-[28%]"
                compId="896:242"
                comWidth={80}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="prev"
              />
              <PagerIndicator
                className="h-[12px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] w-[auto]"
                compId="108"
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
                src={"images/img_next_1.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain w-[28%]"
                compId="896:253"
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
            compId="896:208"
            comWidth={1620}
            comHeight={485}
            compLeft={10}
            compRight={10}
            compType="List"
            orientation="horizontal"
          >
            <Column
              className="items-start justify-start w-[100%]"
              compId="896:209"
              comWidth={381}
              comHeight={485}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] w-[100%]"
                compId="803"
                comWidth={381}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_maskgroup_26.svg"}
                  className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] mx-[auto] object-cover lg:w-[222px] xl:w-[254px] 2xl:w-[285px] 3xl:w-[343px] w-[381px]"
                  compId="896:213"
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
                compId="896:210"
                comWidth={134}
                comHeight={80}
                compLeft={0}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                  compId="896:211"
                  comWidth={134}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Face Scrub`}</Text>
                <Text
                  className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[45%]"
                  compId="896:212"
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
              compId="896:217"
              comWidth={381}
              comHeight={485}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Column
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] w-[100%]"
                compId="804"
                comWidth={381}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_maskgroup_27.svg"}
                  className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] mx-[auto] object-cover lg:w-[222px] xl:w-[254px] 2xl:w-[285px] 3xl:w-[343px] w-[381px]"
                  compId="896:221"
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
                compId="896:218"
                comWidth={225}
                comHeight={80}
                compLeft={0}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                  compId="896:219"
                  comWidth={225}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Anti-Aging Serum`}</Text>
                <Text
                  className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[27%]"
                  compId="896:220"
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
              compId="896:225"
              comWidth={381}
              comHeight={485}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Column
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] w-[100%]"
                compId="805"
                comWidth={381}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_maskgroup_28.svg"}
                  className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] mx-[auto] object-cover lg:w-[222px] xl:w-[254px] 2xl:w-[285px] 3xl:w-[343px] w-[381px]"
                  compId="896:229"
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
                compId="896:226"
                comWidth={137}
                comHeight={80}
                compLeft={0}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                  compId="896:227"
                  comWidth={137}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Sleep Mask`}</Text>
                <Text
                  className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[44%]"
                  compId="896:228"
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
              compId="896:233"
              comWidth={381}
              comHeight={485}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Column
                className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] w-[100%]"
                compId="806"
                comWidth={381}
                comHeight={381}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_maskgroup_29.svg"}
                  className="lg:h-[223px] xl:h-[255px] 2xl:h-[286px] 3xl:h-[344px] h-[381px] mx-[auto] object-cover lg:w-[222px] xl:w-[254px] 2xl:w-[285px] 3xl:w-[343px] w-[381px]"
                  compId="896:237"
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
                compId="896:234"
                comWidth={202}
                comHeight={80}
                compLeft={0}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_900 text-left w-[100%]"
                  compId="896:235"
                  comWidth={202}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Healthy Lip Balm`}</Text>
                <Text
                  className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[30%]"
                  compId="896:236"
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
            compId="107"
            comWidth={180}
            comHeight={60}
            compLeft={10}
            compRight={10}
            compType="Button"
          >{`Load more`}</Button>
        </Column>
        <footer
          className="xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="846:273"
          comWidth={1920}
          comHeight={585}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-gray_900 items-center justify-end w-[100%]"
            compId="755"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
              compId="754"
              comWidth={1920}
              comHeight={237}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] w-[46%]"
                compId="789"
                comWidth={879}
                comHeight={217}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] w-[43%]"
                  compId="846:275"
                  comWidth={381}
                  comHeight={196}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-teal_200 w-[25%]"
                    compId="846:276"
                    comWidth={96}
                    comHeight={54}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Lovia`}</Text>
                  <Text
                    className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                    compId="846:277"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Image
                    src={"images/img_sosmedia_2.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[44%]"
                    compId="846:283"
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
                  compId="846:293"
                  comWidth={109}
                  comHeight={217}
                  compLeft={138}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="846:294"
                    comWidth={109}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Products`}</Text>
                  <Column
                    className="font-poppins items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[93%]"
                    compId="846:295"
                    comWidth={101}
                    comHeight={156}
                    compLeft={0}
                    compRight={8}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                      compId="846:296"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="846:297"
                      comWidth={101}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`New Arrival`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[68%]"
                      compId="846:298"
                      comWidth={69}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Popular`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[39%]"
                      compId="846:299"
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
                  compId="846:300"
                  comWidth={117}
                  comHeight={217}
                  compLeft={134}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[100%]"
                    compId="846:301"
                    comWidth={117}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Company`}</Text>
                  <Column
                    className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="846:302"
                    comWidth={75}
                    comHeight={156}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[72%]"
                      compId="846:303"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[64%]"
                      compId="846:304"
                      comWidth={48}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`News`}</Text>
                    <Text
                      className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[96%]"
                      compId="846:305"
                      comWidth={72}
                      comHeight={27}
                      compLeft={0}
                      compRight={3}
                      compType="Text"
                    >{`Careers`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="846:306"
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
                compId="846:307"
                comWidth={147}
                comHeight={217}
                compLeft={122}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[67%]"
                  compId="846:308"
                  comWidth={99}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Support`}</Text>
                <Column
                  className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="807"
                  comWidth={147}
                  comHeight={156}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="846:309"
                    comWidth={147}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[73%]"
                      compId="846:310"
                      comWidth={107}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[99%]"
                      compId="846:311"
                      comWidth={146}
                      comHeight={27}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`Delivery Service`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[83%]"
                      compId="846:312"
                      comWidth={122}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Privacy Policy`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                      compId="846:313"
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
                compId="846:314"
                comWidth={381}
                comHeight={237}
                compLeft={142}
                compRight={99}
                compType="Column"
              >
                <Text
                  className="font-montserrat font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-teal_200 w-[25%]"
                  compId="846:315"
                  comWidth={96}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Contact`}</Text>
                <Text
                  className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[100%]"
                  compId="846:316"
                  comWidth={381}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <Column
                  className="font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                  compId="846:317"
                  comWidth={243}
                  comHeight={80}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start w-[100%]"
                    compId="846:318"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_call_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="846:319"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Call"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                      compId="846:321"
                      comWidth={211}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`+1234567890`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="846:322"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_email.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="846:323"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Email"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[87%]"
                      compId="846:325"
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
              compId="846:282"
              comWidth={1620}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-start lg:mb-[33px] xl:mb-[38px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[57px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[84%]"
              compId="846:278"
              comWidth={1620}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Text
                className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_50 text-left w-[17%]"
                compId="846:281"
                comWidth={281}
                comHeight={21}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
              <Text
                className="font-normal 3xl:ml-[1157px] ml-[1285px] lg:ml-[749px] xl:ml-[857px] 2xl:ml-[964px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-teal_200 w-[1%]"
                compId="846:279"
                comWidth={22}
                comHeight={27}
                compLeft={1285}
                compRight={0}
                compType="Text"
              >{`EN`}</Text>
              <Text
                className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[1%]"
                compId="846:280"
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

export default ProductDetailsPage;
