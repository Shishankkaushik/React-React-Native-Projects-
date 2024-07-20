import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, Input, RatingBar, Slider } from "../../components";
import MegaMenu1 from "../../components/MegaMenu1";

export default function HomePagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Landing page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-center overflow-auto">
          <header className="relative z-[1] flex items-center justify-center self-stretch bg-gradient p-[9px]">
            <div className="mx-auto my-[9px] flex w-full max-w-[1409px] items-center justify-between gap-5 md:flex-col">
              <Img src="images/img_png_3.png" alt="pngthree_one" className="h-[47px] w-[8%] object-cover md:w-full" />
              <div className="flex w-[48%] items-center justify-between gap-5 py-1.5 pr-1.5 md:w-full sm:flex-col">
                <div className="flex items-center">
                  <Text as="p" className="self-start !text-gray-900">
                    Home
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[24px] w-[24px]" />
                </div>
                <a href="#">
                  <Text as="p" className="!text-gray-900">
                    About Us
                  </Text>
                </a>
                <ul className="flex gap-[25px] self-start">
                  <li
                    onMouseLeave={() => {
                      setMenuOpen(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center">
                      <Text as="p" className="self-start !text-gray-900">
                        Pages
                      </Text>
                      <Img src="images/img_arrow_down.svg" alt="arrowdown_three" className="h-[24px] w-[24px]" />
                    </div>
                    {menuOpen ? <MegaMenu1 /> : null}
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen1(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen1(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center">
                      <Text as="p" className="self-start !text-gray-900">
                        Service
                      </Text>
                      <Img src="images/img_arrow_down.svg" alt="arrowdown_five" className="h-[24px] w-[24px]" />
                    </div>
                    {menuOpen1 ? <MegaMenu1 /> : null}
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen2(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen2(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center">
                      <Text as="p" className="self-start !text-gray-900">
                        News & Event
                      </Text>
                      <Img src="images/img_arrow_down.svg" alt="arrowdown_seven" className="h-[24px] w-[24px]" />
                    </div>
                    {menuOpen2 ? <MegaMenu1 /> : null}
                  </li>
                </ul>
                <a href="#" className="mr-[3px] sm:mr-0">
                  <Text as="p" className="!text-gray-900">
                    Contact Us
                  </Text>
                </a>
              </div>
              <div className="flex w-[15%] items-center justify-center gap-4 md:w-full">
                <div className="flex w-[29%] items-center justify-center gap-2.5">
                  <div className="flex w-[51%] items-center justify-center">
                    <div className="relative z-[2] h-[16px] w-[16px] self-end rounded-lg bg-teal-A700" />
                    <div className="relative ml-[-15px] flex flex-col items-start">
                      <Img
                        src="images/img_shopping_bag_24.svg"
                        alt="shoppingbagtwen"
                        className="h-[24px] w-full md:h-auto"
                      />
                      <Text
                        size="xs"
                        as="p"
                        className="relative ml-[3px] mt-[-11px] !font-poppins !text-[10.67px] !text-white-A700 md:ml-0"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_research_24.svg"
                    alt="researchtwentyf"
                    className="h-[24px] w-[24px] self-start"
                  />
                </div>
                <Button
                  size="md"
                  color="green_A400_teal_500"
                  rightIcon={
                    <Img
                      src="images/img_right_arrow_24_outline.svg"
                      alt="right arrow / 24 / Outline"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  className="min-w-[143px] gap-1 rounded-[21px] font-semibold sm:pl-5"
                >
                  GET QUOTE
                </Button>
              </div>
            </div>
          </header>
          <div className="relative h-[710px] self-stretch">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[696px] w-full items-start justify-center bg-white-A700 bg-[url(/public/images/img_apresenta_o_modelo.png)] bg-cover bg-no-repeat p-1.5 md:h-auto">
              <div className="mb-20 flex w-full max-w-[1168px] items-center justify-between gap-5 md:flex-col">
                <Img
                  src="images/img_gto_hero_4_img_1.png"
                  alt="gtohero4img_one"
                  className="mb-4 h-[587px] w-[47%] object-cover md:w-full"
                />
                <div className="flex w-[48%] flex-col self-end md:w-full">
                  <div className="flex items-center">
                    <Img
                      src="images/img_arrow_down_left.png"
                      alt="arrowdownleft"
                      className="h-[33px] w-[33px] object-cover"
                    />
                    <Text as="p" className="bg-gradient1 bg-clip-text !text-transparent">
                      WELCOME TO JYTHU
                    </Text>
                  </div>
                  <Heading size="5xl" as="h1" className="!text-white-A700">
                    <span className="text-white-A700">
                      <>
                        A Marketing <br />
                      </>
                    </span>
                    <a href="#" className="bg-gradient1 bg-clip-text text-transparent underline">
                      Agency
                    </a>
                    <span className="text-white-A700">&nbsp;To G</span>
                    <span className="text-white-A700">r</span>
                    <span className="text-white-A700">
                      <>
                        ow <br />
                        Your Business
                      </>
                    </span>
                  </Heading>
                  <Text as="p" className="mt-4 w-[98%] !text-white-A700_bf md:w-full">
                    <>
                      We are 100+ professional software engineers with more than 10 year of <br />
                      experience in delivering superior products Believe it because you have <br />
                      seen it. Here are real numbers
                    </>
                  </Text>
                  <div className="mt-[35px] flex w-[87%] justify-between gap-5 md:w-full sm:flex-col">
                    <div className="flex">
                      <Button
                        size="3xl"
                        variant="outline"
                        shape="round"
                        color="green_A400_teal_500"
                        className="min-w-[165px] bg-gradient1 bg-clip-text font-medium text-transparent sm:px-5"
                      >
                        GET STARTED
                      </Button>
                      <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
                        <Img src="images/img_arrow_up_right.svg" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-[11px]">
                      <Button
                        variant="outline"
                        shape="circle"
                        color="green_A400_teal_500"
                        className="w-[54px] !rounded-[27px] !border-4"
                      >
                        <Img src="images/img_vector.png" />
                      </Button>
                      <Heading as="h2" className="!font-poppins !font-semibold !text-white-A700">
                        WATCH VIDEO
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0.00px] left-[12%] m-auto flex w-[27%] justify-center rounded-[20px] bg-white-A700 p-[26px] shadow-xs sm:p-5">
              <div className="flex w-full items-center justify-between gap-5">
                <div className="flex w-full">
                  <div className="flex w-full">
                    <Img src="images/img_ellipse_3.png" alt="circleimage" className="h-[65px] w-[65px] rounded-[50%]" />
                    <Img
                      src="images/img_ellipse_4.png"
                      alt="circleimage_one"
                      className="relative ml-[-32px] h-[65px] w-[65px] rounded-[50%]"
                    />
                  </div>
                  <div className="relative ml-[-32px] flex w-full">
                    <Img
                      src="images/img_ellipse_5.png"
                      alt="circleimage_two"
                      className="h-[65px] w-[65px] rounded-[50%]"
                    />
                    <Img
                      src="images/img_ellipse_6.png"
                      alt="circleimage"
                      className="relative ml-[-32px] h-[65px] w-[65px] rounded-[50%]"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <Heading size="lg" as="h3" className="bg-gradient1 bg-clip-text !font-poppins !text-transparent">
                    5.4k
                  </Heading>
                  <Text as="p" className="!text-blue_gray-500">
                    Clients Satisfaction
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-[116px] flex w-full max-w-[1242px] flex-col items-start gap-[94px] md:gap-[70px] md:p-5 sm:gap-[47px]">
            <Heading size="3xl" as="h2">
              200+ Trusted Partners
            </Heading>
            <div className="flex flex-col gap-[54px] self-stretch sm:gap-[27px]">
              <div className="flex justify-between gap-5 md:flex-col">
                <Img src="images/img_google.png" alt="google_one" className="h-[40px] w-[9%] object-cover md:w-full" />
                <Img src="images/img_amazon.svg" alt="amazon_one" className="h-[40px] w-[11%] md:w-full" />
                <Img src="images/img_vector_green_500.svg" alt="vector_three" className="h-[40px] w-[11%] md:w-full" />
                <Img src="images/img_slack.svg" alt="slack_one" className="h-[40px] w-[13%] md:w-full" />
                <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[40px] w-[12%] md:w-full" />
                <Img src="images/img_walmart.svg" alt="walmart_one" className="h-[40px] w-[14%] md:w-full" />
              </div>
              <div className="h-px bg-gradient2" />
            </div>
          </div>
          <div className="mx-auto mt-[82px] flex w-full max-w-[1308px] items-center justify-between gap-5 md:flex-col md:p-5">
            <div className="flex w-[44%] flex-col gap-6 md:w-full">
              <div className="flex flex-col gap-5">
                <div className="flex items-center">
                  <Img
                    src="images/img_arrow_down_left.png"
                    alt="arrowdownleft"
                    className="h-[33px] w-[33px] object-cover"
                  />
                  <Text as="p" className="bg-gradient1 bg-clip-text !text-transparent">
                    ABOUT US
                  </Text>
                </div>
                <Heading size="4xl" as="h2">
                  <>
                    We Want To Give You <br />
                    The Best Service
                  </>
                </Heading>
                <Text size="xl" as="p" className="w-[97%] !text-blue_gray-500 md:w-full">
                  <>
                    We are 100+ professional software engineers with more <br />
                    than 10 year of experience in delivering superior products <br />
                    Believe it because you have seen it. Here are real numbers
                  </>
                </Text>
              </div>
              <div className="flex w-[89%] items-start justify-between gap-5 md:w-full sm:flex-col">
                <div className="flex w-[43%] flex-col items-start sm:w-full">
                  <Heading size="7xl" as="h3" className="bg-gradient1 bg-clip-text !font-poppins !text-transparent">
                    24
                  </Heading>
                  <Heading
                    size="md"
                    as="h4"
                    className="ml-1 w-[68%] !text-[26.65px] !font-bold !text-blue_gray-500 md:ml-0 md:w-full"
                  >
                    <>
                      Year
                      <br />
                      Experience
                    </>
                  </Heading>
                  <div className="mt-[45px] flex">
                    <Button
                      size="3xl"
                      variant="outline"
                      shape="round"
                      color="green_A400_teal_500"
                      className="min-w-[165px] bg-gradient1 bg-clip-text font-medium text-transparent sm:px-5"
                    >
                      GET STARTED
                    </Button>
                    <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
                      <Img src="images/img_arrow_up_right.svg" />
                    </Button>
                  </div>
                </div>
                <div className="mt-[23px] flex w-[44%] flex-col gap-[15px] sm:w-full">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col rounded-[14px] bg-gradient2">
                      <Img
                        src="images/img_approve_tick.svg"
                        alt="product"
                        className="h-[28px] rounded-tl-[14px] rounded-tr-[14px]"
                      />
                    </div>
                    <Heading as="h5" className="mt-0.5 !font-semibold">
                      Product Engineering
                    </Heading>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col rounded-[14px] bg-gradient2">
                      <Img
                        src="images/img_approve_tick.svg"
                        alt="approvetick_one"
                        className="h-[28px] rounded-tl-[14px] rounded-tr-[14px]"
                      />
                    </div>
                    <Heading as="h6" className="mt-0.5 !font-semibold">
                      Digital Services
                    </Heading>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col rounded-[14px] bg-gradient2">
                      <Img
                        src="images/img_approve_tick.svg"
                        alt="approvetick_one"
                        className="h-[28px] rounded-tl-[14px] rounded-tr-[14px]"
                      />
                    </div>
                    <Heading as="h6" className="mt-0.5 !font-semibold">
                      IT Consultancy
                    </Heading>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col rounded-[14px] bg-gradient2">
                      <Img
                        src="images/img_approve_tick.svg"
                        alt="approvetick_one"
                        className="h-[28px] rounded-tl-[14px] rounded-tr-[14px]"
                      />
                    </div>
                    <Heading as="h6" className="mt-0.5 !font-semibold">
                      Digital Services
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[51%] flex-col items-start md:w-full">
              <div className="relative z-[3] flex w-[85%] items-start justify-between gap-5 self-end md:w-full">
                <Img src="images/img_star.png" alt="image" className="h-[51px] w-[51px] object-cover" />
                <Img
                  src="images/img_star_wide.png"
                  alt="image_one"
                  className="mt-[19px] h-[59px] w-[60px] object-cover"
                />
              </div>
              <div className="relative mt-[-2px] flex w-[91%] flex-col items-end md:w-full">
                <div className="flex items-center self-stretch md:flex-col">
                  <Img
                    src="images/img_star_wide.png"
                    alt="image_two"
                    className="relative z-[5] mb-[15px] h-[82px] w-[10%] self-end object-cover md:w-full"
                  />
                  <div className="relative ml-[-41px] h-[591px] flex-1 md:ml-0 md:w-full md:flex-none md:self-stretch">
                    <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[565px] w-[92%] rounded-bl-[265px] bg-[url(/public/images/img_group_12.svg)] bg-cover bg-no-repeat md:h-auto">
                      <Img
                        src="images/img_rectangle_8.png"
                        alt="image_three"
                        className="h-[565px] w-full rounded-bl-[265px] object-cover md:h-auto"
                      />
                    </div>
                    <Img
                      src="images/img_rectangle_7.png"
                      alt="image_four"
                      className="absolute bottom-0 right-[0.00px] top-0 my-auto h-[579px] w-[95%] rounded-bl-[265px] object-cover"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_close.svg"
                  alt="close_one"
                  className="relative z-[4] mr-[23px] mt-[-33px] h-[71px] w-[71px] md:mr-0"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-[114px] flex w-full max-w-[1250px] flex-col items-center gap-[94px] md:gap-[70px] md:p-5 sm:gap-[47px]">
            <div className="flex flex-col items-center gap-[19px]">
              <div className="flex items-center">
                <Img
                  src="images/img_arrow_down_left.png"
                  alt="arrowdownleft"
                  className="h-[33px] w-[33px] object-cover"
                />
                <Text as="p" className="bg-gradient1 bg-clip-text !text-transparent">
                  OUR BEST SERVICES
                </Text>
              </div>
              <Heading size="4xl" as="h2">
                We Provide Best Services
              </Heading>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(356px_,_1fr))] justify-center gap-[25px] self-stretch">
              <div className="flex h-[450px] w-full flex-col items-center gap-[9px] rounded-[20px] bg-[url(/public/images/img_group_25.svg)] bg-cover bg-no-repeat p-[22px] md:h-auto sm:p-5">
                <Img src="images/img_s4_il_1_1.png" alt="s4il1one_one" className="h-[150px] w-[28%] object-cover" />
                <div className="mb-7 flex flex-col items-center self-stretch">
                  <Heading size="s" as="h3">
                    Strategy & Planning
                  </Heading>
                  <Text as="p" className="mt-[17px] text-center !text-blue_gray-500">
                    <>
                      Lorem ipsum dolor sit amet bibendum elit sit <br />
                      finibus. Maximus sodales parturien lore arcu <br />
                      eros vel erat pede netus qu.
                    </>
                  </Text>
                  <Button size="4xl" shape="square" className="mt-[31px]">
                    <Img src="images/img_arrow.png" />
                  </Button>
                </div>
              </div>
              <div className="flex h-[450px] w-full flex-col items-center rounded-[20px] bg-[url(/public/images/img_group_25.svg)] bg-cover bg-no-repeat p-[22px] md:h-auto sm:p-5">
                <Img src="images/img_s4_il_2_1.png" alt="s4il2one_one" className="h-[150px] w-[48%] object-cover" />
                <Heading size="s" as="h4" className="mt-[11px]">
                  Planning & Strategy
                </Heading>
                <Text as="p" className="mt-[15px] w-[96%] text-center !text-blue_gray-500 md:w-full">
                  <>
                    Lorem ipsum dolor sit amet bibendum elit sit <br />
                    finibus. Maximus sodales parturien lore arcu <br />
                    eros vel erat pede netus qu.
                  </>
                </Text>
                <Button size="4xl" shape="square" className="mb-7 mt-[31px]">
                  <Img src="images/img_arrow.png" />
                </Button>
              </div>
              <div className="flex h-[450px] w-full flex-col items-center rounded-[20px] bg-[url(/public/images/img_group_25.svg)] bg-cover bg-no-repeat p-[22px] md:h-auto sm:p-5">
                <Img src="images/img_s4_il_3_1.png" alt="s4il3one_one" className="h-[150px] w-[37%] object-cover" />
                <Heading size="s" as="h5" className="mt-[11px]">
                  Content Marketing
                </Heading>
                <Text as="p" className="mt-[15px] w-[96%] text-center !text-blue_gray-500 md:w-full">
                  <>
                    Lorem ipsum dolor sit amet bibendum elit sit <br />
                    finibus. Maximus sodales parturien lore arcu <br />
                    eros vel erat pede netus qu.
                  </>
                </Text>
                <Button size="4xl" shape="square" className="mb-7 mt-[31px]">
                  <Img src="images/img_arrow.png" />
                </Button>
              </div>
              <div className="relative h-[450px] w-full rounded-[20px] bg-gray-300_33">
                <div className="absolute right-[0.00px] top-[0.00px] m-auto h-[213px] w-[84%]">
                  <div className="absolute right-[0.00px] top-[0.00px] m-auto flex w-[79%] items-start justify-end">
                    <Img
                      src="images/img_s4_il_4_1.png"
                      alt="s4il4one_one"
                      className="relative z-[6] mt-3.5 h-[150px] w-[38%] object-cover"
                    />
                    <Img
                      src="images/img_vector_gray_300_01.svg"
                      alt="vector_one"
                      className="relative ml-[-52px] h-[202px] w-[62%] rounded-[20px]"
                    />
                  </div>
                  <Heading size="s" as="h6" className="absolute bottom-[-0.42px] left-[0.00px] m-auto">
                    Seo Audits & Strategy
                  </Heading>
                </div>
                <div className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[221px] w-[93%]">
                  <Img
                    src="images/img_vector_gray_300_01_206x195.svg"
                    alt="vector_three"
                    className="absolute bottom-[0.90px] left-[0.00px] m-auto h-[206px] w-[53%] rounded-[20px]"
                  />
                  <div className="absolute right-[0.00px] top-[0.00px] m-auto flex w-[92%] flex-col items-center gap-[31px]">
                    <Text as="p" className="text-center !text-blue_gray-500">
                      <>
                        Lorem ipsum dolor sit amet bibendum elit sit <br />
                        finibus. Maximus sodales parturien lore arcu <br />
                        eros vel erat pede netus qu.
                      </>
                    </Text>
                    <Button size="4xl" shape="square">
                      <Img src="images/img_arrow.png" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex h-[450px] w-full flex-col items-center rounded-[20px] bg-[url(/public/images/img_group_25.svg)] bg-cover bg-no-repeat p-3.5 md:h-auto">
                <Img src="images/img_s4_il_5_1.png" alt="s4il5one_one" className="h-[150px] w-[150px] object-cover" />
                <Heading size="s" as="h4" className="mt-[19px]">
                  Design & Development
                </Heading>
                <Text as="p" className="mt-[15px] w-[92%] text-center !text-blue_gray-500 md:w-full">
                  <>
                    Lorem ipsum dolor sit amet bibendum elit sit <br />
                    finibus. Maximus sodales parturien lore arcu <br />
                    eros vel erat pede netus qu.
                  </>
                </Text>
                <Button size="4xl" shape="square" className="mb-9 mt-[31px]">
                  <Img src="images/img_arrow.png" />
                </Button>
              </div>
              <div className="flex h-[450px] w-full flex-col items-center rounded-[20px] bg-[url(/public/images/img_group_25.svg)] bg-cover bg-no-repeat p-3.5 md:h-auto">
                <Img src="images/img_s4_il_6_1.png" alt="s4il6one_one" className="h-[150px] w-[48%] object-cover" />
                <Heading size="s" as="h4" className="mt-[19px]">
                  Seo Audits & Strategy
                </Heading>
                <Text as="p" className="mt-[15px] w-[92%] text-center !text-blue_gray-500 md:w-full">
                  <>
                    Lorem ipsum dolor sit amet bibendum elit sit <br />
                    finibus. Maximus sodales parturien lore arcu <br />
                    eros vel erat pede netus qu.
                  </>
                </Text>
                <Button size="4xl" shape="square" className="mb-9 mt-[31px]">
                  <Img src="images/img_arrow.png" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-[66px] flex">
            <Button
              size="3xl"
              variant="outline"
              shape="round"
              color="green_A400_teal_500"
              className="min-w-[212px] bg-gradient1 bg-clip-text font-medium text-transparent sm:px-5"
            >
              VIEW ALL SERVICES
            </Button>
            <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
              <Img src="images/img_arrow_up_right.svg" />
            </Button>
          </div>
          <div className="mx-auto mt-[195px] flex w-full max-w-[1259px] items-center justify-between gap-5 md:flex-col md:p-5">
            <div className="flex w-[46%] items-start justify-between gap-5 md:w-full sm:flex-col">
              <div className="flex w-[47%] flex-col items-end gap-[105px] md:gap-[78px] sm:w-full sm:gap-[52px]">
                <Img
                  src="images/img_rectangle_15.png"
                  alt="image_five"
                  className="h-[304px] w-full rounded-[20px] object-cover md:h-auto"
                />
                <Img
                  src="images/img_rectangle_16.png"
                  alt="image_six"
                  className="mr-1 h-[173px] w-[65%] rounded-[20px] object-cover md:mr-0"
                />
              </div>
              <Img
                src="images/img_rectangle_14.png"
                alt="image_seven"
                className="h-[636px] w-[47%] rounded-[20px] object-cover sm:w-full"
              />
            </div>
            <div className="flex w-[50%] flex-col gap-14 md:w-full sm:gap-7">
              <div className="flex flex-col gap-5">
                <div className="flex items-center">
                  <Img
                    src="images/img_arrow_down_left.png"
                    alt="arrowdownleft"
                    className="h-[33px] w-[33px] object-cover"
                  />
                  <Text as="p" className="bg-gradient1 bg-clip-text !text-transparent">
                    WITH SEO OPTIMIZATION
                  </Text>
                </div>
                <Heading size="4xl" as="h2">
                  <>
                    Marketing And Creative
                    <br />
                    Solutions Seo
                  </>
                </Heading>
                <Text size="xl" as="p" className="w-[94%] !text-blue_gray-500 md:w-full">
                  <>
                    We are 100+ professional software engineers with more <br />
                    than 10 year of experience in delivering superior products.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-[27px]">
                <div className="flex flex-col gap-[27px]">
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex flex-wrap justify-between gap-5">
                      <Text size="xl" as="p" className="self-end !font-poppins !text-gray-900">
                        Finance Consulting
                      </Text>
                      <Text
                        size="xl"
                        as="p"
                        className="self-start bg-gradient1 bg-clip-text !font-poppins !text-transparent"
                      >
                        80%
                      </Text>
                    </div>
                    <div className="green_A400_teal_500_border flex rounded-[9px] border-2 border-solid p-[5px]">
                      <div className="h-[6px] w-[65%] rounded-[3px] bg-gradient1" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex flex-wrap justify-between gap-5">
                      <Text size="xl" as="p" className="self-end !font-poppins !text-gray-900">
                        Finance Consulting
                      </Text>
                      <Text
                        size="xl"
                        as="p"
                        className="self-start bg-gradient4 bg-clip-text !font-poppins !text-transparent"
                      >
                        80%
                      </Text>
                    </div>
                    <div className="cyan_900_cyan_300_border flex rounded-[9px] border-2 border-solid p-[5px]">
                      <div className="h-[6px] w-[65%] rounded-[3px] bg-gradient4" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap justify-between gap-5">
                    <Text size="xl" as="p" className="self-end !font-poppins !text-gray-900">
                      Finance Consulting
                    </Text>
                    <Text
                      size="xl"
                      as="p"
                      className="self-start bg-gradient1 bg-clip-text !font-poppins !text-transparent"
                    >
                      80%
                    </Text>
                  </div>
                  <div className="green_A400_teal_500_border relative h-[18px] rounded-[9px] border-2 border-solid">
                    <div style={{ width: "64%" }} className="absolute h-full rounded-[3px] bg-gradient1" />
                  </div>
                </div>
              </div>
              <div className="flex w-[93%] justify-between gap-5 md:w-full sm:flex-col">
                <div className="flex">
                  <Button
                    size="3xl"
                    variant="outline"
                    shape="round"
                    color="green_A400_teal_500"
                    className="min-w-[212px] bg-gradient1 bg-clip-text font-medium text-transparent sm:px-5"
                  >
                    VIEW ALL SERVICES
                  </Button>
                  <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
                    <Img src="images/img_arrow_up_right.svg" />
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="green_A100_bf_light_green_100_bf_border flex flex-col items-center rounded-[27px] border-[5px] border-solid">
                    <Button size="sm" shape="circle" color="green_A400_teal_500" className="w-[36px] !rounded-[18px]">
                      <Img src="images/img_call_24_outline.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start self-start">
                    <Text as="p" className="bg-gradient1 bg-clip-text !font-normal !text-transparent">
                      Call Us Anytime
                    </Text>
                    <Heading size="md" as="h3" className="!text-[26.65px] !font-bold">
                      0215 6856 9875
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[137px] flex items-center justify-center gap-[30px] self-stretch bg-gradient1 py-[25px] pl-[25px] md:flex-col sm:py-5 sm:pl-5">
            <Heading size="6xl" as="h2" className="mb-[18px] mt-[19px] !text-white-A700">
              DIGITAL
            </Heading>
            <Img src="images/img_group_22.svg" alt="image_eight" className="h-[71px] w-[10%] md:w-full" />
            <Heading size="6xl" as="h3" className="!text-white-A700">
              JYHTU
            </Heading>
            <Img src="images/img_group_22.svg" alt="image_nine" className="h-[71px] w-[10%] md:w-full" />
            <Heading size="6xl" as="h4" className="!text-white-A700">
              CREATIVE
            </Heading>
          </div>
          <div className="mx-auto mt-[137px] flex w-full max-w-[1249px] gap-10 md:flex-col md:p-5">
            <div className="relative h-[582px] w-full md:h-auto">
              <div className="w-full">
                <Img
                  src="images/img_subtract.svg"
                  alt="subtract_one"
                  className="relative z-[7] h-[319px] w-full md:h-auto"
                />
                <Img
                  src="images/img_subtract.svg"
                  alt="image"
                  className="relative mt-[-56px] h-[319px] w-full md:h-auto"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[81%] flex-col items-center rounded-[158px] border-[20px] border-solid border-white-A700 bg-gradient1 p-[51px] md:p-5">
                <Img
                  src="images/img_t4_img_1_1.png"
                  alt="rachna_sheth"
                  className="mt-[15px] h-[204px] w-[204px] object-cover"
                />
                <Heading size="md" as="h2" className="mt-7 !text-[26.11px] !font-bold !text-white-A700">
                  RACHNA SHETH
                </Heading>
                <Text size="s" as="p" className="mb-[66px] mt-[13px] !text-[14.68px] !text-white-A700">
                  FULL STACK DEVELOPER
                </Text>
              </div>
            </div>
            <div className="relative h-[582px] w-full md:h-auto">
              <div className="w-full">
                <Img
                  src="images/img_subtract.svg"
                  alt="subtract_one"
                  className="relative z-[8] h-[319px] w-full md:h-auto"
                />
                <Img
                  src="images/img_subtract.svg"
                  alt="subtract_three"
                  className="relative mt-[-56px] h-[319px] w-full md:h-auto"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[81%] flex-col items-center rounded-[158px] border-[20px] border-solid border-white-A700 bg-gradient1 p-[51px] md:p-5">
                <Img
                  src="images/img_t4_img_2_1.png"
                  alt="t4img2one_one"
                  className="mt-[15px] h-[204px] w-[204px] object-cover"
                />
                <Heading size="md" as="h3" className="mt-7 !text-[26.11px] !font-bold !text-white-A700">
                  RACHNA SHETH
                </Heading>
                <Text size="s" as="p" className="mb-[66px] mt-[13px] !text-[14.68px] !text-white-A700">
                  FULL STACK DEVELOPER
                </Text>
              </div>
            </div>
            <div className="relative h-[582px] w-full md:h-auto">
              <div className="w-full">
                <Img
                  src="images/img_subtract.svg"
                  alt="subtract_one"
                  className="relative z-[9] h-[319px] w-full md:h-auto"
                />
                <Img
                  src="images/img_subtract.svg"
                  alt="subtract_three"
                  className="relative mt-[-56px] h-[319px] w-full md:h-auto"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[81%] flex-col items-center rounded-[158px] border-[20px] border-solid border-white-A700 bg-gradient1 p-[51px] md:p-5">
                <Img
                  src="images/img_t4_img_3_1.png"
                  alt="t4img3one_one"
                  className="mt-[15px] h-[204px] w-[204px] object-cover"
                />
                <Heading size="md" as="h4" className="mt-7 !text-[26.11px] !font-bold !text-white-A700">
                  RACHNA SHETH
                </Heading>
                <Text size="s" as="p" className="mb-[66px] mt-[13px] !text-[14.68px] !text-white-A700">
                  FULL STACK DEVELOPER
                </Text>
              </div>
            </div>
          </div>
          <div className="mt-[62px] flex">
            <Button
              size="3xl"
              variant="outline"
              shape="round"
              color="green_A400_teal_500"
              className="min-w-[181px] bg-gradient1 bg-clip-text font-medium text-transparent sm:px-5"
            >
              VIEW ALL TEAM
            </Button>
            <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
              <Img src="images/img_arrow_up_right.svg" />
            </Button>
          </div>
          <div className="mx-auto mt-[241px] flex w-full max-w-[1299px] items-center justify-between gap-5 md:flex-col md:p-5">
            <div className="flex w-[48%] flex-col gap-[15px] md:w-full">
              <div className="flex items-center">
                <Img
                  src="images/img_arrow_down_left.png"
                  alt="arrowdownleft"
                  className="h-[33px] w-[33px] object-cover"
                />
                <Text as="p" className="bg-gradient1 bg-clip-text !text-transparent">
                  OUR BEST PROJECTS
                </Text>
              </div>
              <Heading size="4xl" as="h2">
                <>
                  Take A Look Our Work
                  <br />
                  Gallery Recent Projects
                </>
              </Heading>
            </div>
            <div className="flex w-[45%] flex-col gap-6 md:w-full">
              <Text size="xl" as="p" className="!text-blue_gray-500">
                We Are 100+ Professional Software Engineers With More Than 10 Years Of Experience In Delivering Superior
              </Text>
              <div className="flex">
                <Button
                  size="3xl"
                  variant="outline"
                  shape="round"
                  color="green_A400_teal_500"
                  className="min-w-[209px] bg-gradient1 bg-clip-text font-medium text-transparent sm:px-5"
                >
                  VIEW ALL PROJECT
                </Button>
                <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
                  <Img src="images/img_arrow_up_right.svg" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-[100px] flex flex-col items-center self-stretch">
            <div className="self-stretch">
              <div>
                <Img
                  src="images/img_ellipse_14.png"
                  alt="image_ten"
                  className="relative z-[12] h-[235px] w-full object-cover md:h-auto"
                />
                <div className="relative mt-[-109px] flex gap-[29px] md:flex-col">
                  <Img
                    src="images/img_rectangle_24.png"
                    alt="image_eleven"
                    className="h-[812px] w-[33%] object-cover md:w-full"
                  />
                  <div className="relative h-[812px] w-[33%] md:h-auto md:w-full md:p-5">
                    <Img
                      src="images/img_rectangle_25.png"
                      alt="image_twelve"
                      className="h-[812px] w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[79%] flex-col items-start gap-[61px] sm:gap-[30px]">
                      <Img
                        src="images/img_noun_arrow_left_419623.svg"
                        alt="nounarrowleft"
                        className="ml-[60px] h-[217px] w-[217px] md:ml-0"
                      />
                      <div className="flex flex-col items-start gap-7">
                        <Button
                          size="xl"
                          shape="round"
                          color="green_A400_teal_500"
                          className="min-w-[154px] !rounded-[25px] font-semibold sm:px-5"
                        >
                          marketing
                        </Button>
                        <Heading size="xl" as="h2" className="!text-white-A700">
                          Social Media Marketing
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_rectangle_26.png"
                    alt="image_thirteen"
                    className="h-[812px] w-[33%] object-cover md:w-full"
                  />
                </div>
              </div>
              <div className="relative z-[11] mt-[-109px] flex justify-center rounded-[720px] bg-white-A700 p-[23px] sm:p-5">
                <div className="mb-[135px] flex">
                  <div className="flex gap-[30px]">
                    <Button
                      variant="outline"
                      shape="circle"
                      color="green_A400_teal_500"
                      className="w-[54px] rotate-[180deg] !rounded-[27px] !border-[3px]"
                    >
                      <Img src="images/img_arrow_up_right_54x54.png" />
                    </Button>
                    <Button
                      variant="outline"
                      shape="circle"
                      color="green_A400_teal_500"
                      className="w-[54px] !rounded-[27px] !border-[3px]"
                    >
                      <Img src="images/img_arrow_up_right_1.png" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 mx-auto mt-[-65px] flex w-full max-w-[1211px] flex-col items-center gap-[82px] md:gap-[61px] md:p-5 sm:gap-[41px]">
              <div className="flex w-[59%] flex-col items-center gap-[21px] md:w-full">
                <div className="flex items-center">
                  <Img
                    src="images/img_arrow_down_left.png"
                    alt="arrowdownleft"
                    className="h-[33px] w-[33px] object-cover"
                  />
                  <Text as="p" className="bg-gradient1 bg-clip-text !text-transparent">
                    OUR WORK PROCESS
                  </Text>
                </div>
                <Heading size="4xl" as="h3" className="text-center">
                  <>
                    A Simple, Yet Powerful And
                    <br />
                    Efficient Process
                  </>
                </Heading>
              </div>
              <div className="w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                  disableDotsControls
                  activeIndex={sliderState1}
                  onSlideChanged={(e) => {
                    setSliderState1(e?.item);
                  }}
                  ref={sliderRef1}
                  className="self-stretch"
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="mx-auto flex flex-col gap-[33px]">
                        <div className="flex w-[91%] justify-between gap-5 md:w-full md:flex-col">
                          <div className="light_green_A700_yellow_500_border w-[24%] rounded-[130px] border-[16px] border-solid p-4 md:w-full">
                            <div className="rounded-[97px] bg-gray-100 p-[37px] shadow-sm sm:p-5">
                              <Img
                                src="images/img_s4_il_5_1.png"
                                alt="s4il5two_one"
                                className="h-[120px] w-[120px] object-cover"
                              />
                            </div>
                          </div>
                          <div className="deep_orange_900_green_A200_border w-[24%] rounded-[130px] border-[16px] border-solid p-4 md:w-full">
                            <div className="rounded-[97px] bg-gray-100 p-[37px] shadow-sm sm:p-5">
                              <Img
                                src="images/img_s4_il_5_1.png"
                                alt="s4il5three_one"
                                className="h-[120px] w-[120px] object-cover"
                              />
                            </div>
                          </div>
                          <div className="light_blue_A700_green_400_border w-[24%] rounded-[130px] border-[16px] border-solid p-4 md:w-full">
                            <div className="rounded-[97px] bg-gray-100 p-[37px] shadow-sm sm:p-5">
                              <Img
                                src="images/img_s4_il_5_1.png"
                                alt="s4il5four_one"
                                className="h-[120px] w-[120px] object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 gap-[46px] md:flex-col">
                          <div className="flex w-full flex-col items-center gap-[15px]">
                            <Heading size="lg" as="h4">
                              MARKETING PLAN
                            </Heading>
                            <Text size="xl" as="p" className="text-center !text-blue_gray-500">
                              Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu
                              ent.{" "}
                            </Text>
                          </div>
                          <div className="flex w-full flex-col items-center gap-[15px]">
                            <Heading size="lg" as="h5">
                              EXECUTION
                            </Heading>
                            <Text size="xl" as="p" className="text-center !text-blue_gray-500">
                              Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu
                              ent.{" "}
                            </Text>
                          </div>
                          <div className="flex w-full flex-col items-center gap-[15px]">
                            <Heading size="lg" as="h6">
                              GROWTH & SCALE
                            </Heading>
                            <Text size="xl" as="p" className="text-center !text-blue_gray-500">
                              Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu
                              ent.{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
          </div>
          <div className="mt-[92px] flex w-[39%] flex-col items-center gap-[21px] md:w-full md:p-5">
            <div className="flex items-center">
              <Img
                src="images/img_arrow_down_left.png"
                alt="arrowdownleft"
                className="h-[33px] w-[33px] object-cover"
              />
              <Text as="p" className="bg-gradient1 bg-clip-text !text-transparent">
                OUR TESTIMONIAL
              </Text>
            </div>
            <Heading size="4xl" as="h2" className="text-center">
              <>
                What Our Clients Say
                <br />
                About Us
              </>
            </Heading>
          </div>
          <div className="mx-auto mt-[51px] flex w-full max-w-[2248px] gap-10 self-end md:flex-col md:p-5">
            <div className="w-[24%] rounded-[20px] bg-white-A700 py-5 md:w-full">
              <div className="flex items-start gap-3.5 sm:flex-col">
                <Img
                  src="images/img_gto_t5_img_2_1.png"
                  alt="gtot5img2one"
                  className="h-[247px] w-[38%] object-cover sm:w-full"
                />
                <div className="mt-[19px] flex flex-1 flex-col gap-5 sm:self-stretch">
                  <RatingBar value={1} isEditable={true} size={22} className="flex justify-between" />
                  <Text size="lg" as="p">
                    <>
                      “With Over A Decade Of Experie, <br />
                      We’ve Established Ourselves As <br />
                      One Of The Pioneering Agencies In <br />
                      The Region. Our Small, Flexible, <br />
                      Agile And Design-Led Structures & <br />
                      Processes”
                    </>
                  </Text>
                </div>
              </div>
              <div className="h-px bg-blue_gray-500" />
              <div className="mt-4 flex flex-wrap items-center justify-between gap-5">
                <Text size="lg" as="p">
                  ESTHER HOWARD
                </Text>
                <Text size="s" as="p" className="self-start bg-gradient1 bg-clip-text !text-transparent">
                  FINANCE SPECIALIST
                </Text>
              </div>
            </div>
            <div className="w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                paddingLeft={532}
                paddingRight={249}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                className="flex-1 md:self-stretch"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="mx-2.5 flex flex-col rounded-[20px] bg-white-A700 py-5">
                      <div className="flex items-start gap-3.5 sm:flex-col">
                        <Img
                          src="images/img_gto_t5_img_1_1.png"
                          alt="gtot5img1one"
                          className="h-[247px] w-[38%] object-cover sm:w-full"
                        />
                        <div className="mt-[19px] flex flex-1 flex-col gap-5 sm:self-stretch">
                          <RatingBar value={1} isEditable={true} size={22} className="flex justify-between" />
                          <Text size="lg" as="p">
                            <>
                              “With Over A Decade Of Experie, <br />
                              We’ve Established Ourselves As <br />
                              One Of The Pioneering Agencies In <br />
                              The Region. Our Small, Flexible, <br />
                              Agile And Design-Led Structures & <br />
                              Processes”
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="h-px bg-blue_gray-500" />
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-5">
                        <Text size="lg" as="p">
                          ESTHER HOWARD
                        </Text>
                        <Text size="s" as="p" className="self-start bg-gradient1 bg-clip-text !text-transparent">
                          FINANCE SPECIALIST
                        </Text>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
          <div className="mx-auto mt-[54px] flex w-full max-w-[1180px] items-center justify-between gap-5 self-start md:flex-col md:p-5">
            <div className="relative h-[6px] w-[83%] rounded-[3px] bg-teal-A700_33">
              <div style={{ width: "43%" }} className="absolute h-full bg-gradient1" />
            </div>
            <div className="flex gap-[30px]">
              <Button
                variant="outline"
                shape="circle"
                color="green_A400_teal_500"
                className="w-[54px] rotate-[180deg] !rounded-[27px] !border-[3px]"
              >
                <Img src="images/img_arrow_up_right_54x54.png" />
              </Button>
              <Button
                variant="outline"
                shape="circle"
                color="green_A400_teal_500"
                className="w-[54px] !rounded-[27px] !border-[3px]"
              >
                <Img src="images/img_arrow_up_right_1.png" />
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-[93px] flex w-full max-w-[1312px] items-start justify-between gap-5 md:flex-col md:p-5">
            <div className="flex w-[37%] flex-col gap-[39px] md:w-full">
              <div className="flex flex-col gap-[39px]">
                <div className="flex w-[93%] flex-col gap-3 md:w-full">
                  <div className="flex items-center">
                    <Img
                      src="images/img_arrow_down_left.png"
                      alt="arrowdownleft"
                      className="h-[33px] w-[33px] object-cover"
                    />
                    <Text as="p" className="bg-gradient1 bg-clip-text !text-transparent">
                      OUR BLOGS & NEWS
                    </Text>
                  </div>
                  <Heading size="4xl" as="h2">
                    <>
                      Get More Update
                      <br />
                      For News
                    </>
                  </Heading>
                </div>
                <Text size="xl" as="p" className="!text-blue_gray-500">
                  We are 100+ professional software engineers with more than 10 years of experience in delivering super
                  products it because you&#39;ve seen it.
                </Text>
              </div>
              <div className="flex">
                <Button
                  size="3xl"
                  variant="outline"
                  shape="round"
                  color="green_A400_teal_500"
                  className="min-w-[178px] bg-gradient1 bg-clip-text font-medium text-transparent sm:px-5"
                >
                  VIEW ALL BLOG
                </Button>
                <Button shape="circle" color="green_A400_teal_500" className="w-[54px] !rounded-[27px]">
                  <Img src="images/img_arrow_up_right.svg" />
                </Button>
              </div>
            </div>
            <div className="flex w-[58%] flex-col gap-[38px] md:w-full">
              <div className="flex flex-1 gap-[26px] md:flex-col">
                <Img
                  src="images/img_rectangle_30.png"
                  alt="image"
                  className="h-[235px] w-[37%] rounded-[20px] object-cover md:w-full"
                />
                <div className="flex flex-1 flex-col justify-center gap-[21px] rounded-[20px] border-2 border-solid border-gray-300 bg-white-A700 p-5 md:self-stretch">
                  <div className="mt-[13px] flex items-center gap-[25px]">
                    <Button
                      size="xs"
                      color="green_A400_3f_teal_500_3f"
                      className="min-w-[81px] rounded-[14px] bg-clip-text font-medium text-transparent"
                    >
                      Design
                    </Button>
                    <Text size="s" as="p" className="mb-1 self-end">
                      March 7, 2024
                    </Text>
                  </div>
                  <Heading size="md" as="h3">
                    <>
                      Agency Needs To Embrace Social
                      <br />
                      Media..
                    </>
                  </Heading>
                  <Text size="s" as="p" className="mb-3">
                    Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 gap-[26px] md:flex-col">
                <Img
                  src="images/img_rectangle_30_235x275.png"
                  alt="image"
                  className="h-[235px] w-[37%] rounded-[20px] object-cover md:w-full"
                />
                <div className="flex flex-1 flex-col justify-center gap-[21px] rounded-[20px] border-2 border-solid border-gray-300 bg-white-A700 p-5 md:self-stretch">
                  <div className="mt-[13px] flex items-center gap-6">
                    <Button
                      size="xs"
                      color="green_A400_3f_teal_500_3f"
                      className="min-w-[95px] rounded-[14px] bg-clip-text font-medium text-transparent"
                    >
                      Business
                    </Button>
                    <Text size="s" as="p" className="mb-1 self-end">
                      March 7, 2024
                    </Text>
                  </div>
                  <Heading size="md" as="h4" className="w-[83%] md:w-full">
                    <>
                      Lead Designer’s UI/UX Core <br />
                      Checklist.
                    </>
                  </Heading>
                  <Text size="s" as="p" className="mb-3">
                    Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 gap-[26px] md:flex-col">
                <Img
                  src="images/img_rectangle_30_1.png"
                  alt="image"
                  className="h-[235px] w-[37%] rounded-[20px] object-cover md:w-full"
                />
                <div className="flex flex-1 flex-col justify-center gap-[21px] rounded-[20px] border-2 border-solid border-gray-300 bg-white-A700 p-5 md:self-stretch">
                  <div className="mt-[13px] flex items-center gap-7">
                    <Button
                      size="xs"
                      color="green_A400_3f_teal_500_3f"
                      className="min-w-[116px] rounded-[14px] bg-clip-text font-medium text-transparent"
                    >
                      Development
                    </Button>
                    <Text size="s" as="p" className="mb-1 self-end">
                      March 7, 2024
                    </Text>
                  </div>
                  <Heading size="md" as="h5" className="w-[83%] md:w-full">
                    <>
                      Lead Designer’s UI/UX Core <br />
                      Checklist.
                    </>
                  </Heading>
                  <Text size="s" as="p" className="mb-3">
                    Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 gap-[26px] md:flex-col">
                <Img
                  src="images/img_rectangle_30_2.png"
                  alt="image"
                  className="h-[235px] w-[37%] rounded-[20px] object-cover md:w-full"
                />
                <div className="flex flex-1 flex-col justify-center gap-[21px] rounded-[20px] border-2 border-solid border-gray-300 bg-white-A700 p-5 md:self-stretch">
                  <div className="mt-[13px] flex items-center gap-[30px]">
                    <Button
                      size="xs"
                      color="green_A400_3f_teal_500_3f"
                      className="min-w-[106px] rounded-[14px] bg-clip-text font-medium text-transparent"
                    >
                      Marketing
                    </Button>
                    <Text size="s" as="p" className="mb-1 self-end">
                      March 7, 2024
                    </Text>
                  </div>
                  <Heading size="md" as="h6" className="w-[93%] md:w-full">
                    <>
                      We Are Building Everything You
                      <br />
                      Needed
                    </>
                  </Heading>
                  <Text size="s" as="p" className="mb-3">
                    Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[58px] flex flex-col items-center self-stretch">
            <div className="relative z-[13] mx-auto h-[553px] w-full max-w-[1191px] md:p-5">
              <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full flex-col items-end justify-end rounded-[40px] bg-gradient1 p-[53px] md:p-5">
                <Heading size="2xl" as="h2" className="mt-14 flex !text-white-A700">
                  <span className="text-white-A700">Subscribe To Our&nbsp;</span>
                  <a href="#" className="text-white-A700 underline">
                    Newsletter!
                  </a>
                </Heading>
                <Text size="lg" as="p" className="mt-6 w-[53%] !text-white-A700 md:w-full">
                  We are 100+ professional software engineers with more than 10 years in delive ring super products it
                  because you&#39;ve seen it.
                </Text>
                <div className="relative mb-12 mt-16 h-[54px] w-[53%] md:h-auto">
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`Your Email`}
                    className="w-full sm:px-5"
                  />
                  <Button
                    size="lg"
                    color="green_A400_teal_500"
                    className="absolute bottom-0 right-[4.00px] top-0 my-auto min-w-[142px] rounded-lg font-semibold sm:px-5"
                  >
                    SUBMIT
                  </Button>
                </div>
              </div>
              <Img
                src="images/img_n4_img_1_1.png"
                alt="n4img1one_one"
                className="absolute bottom-0 left-[25.00px] top-0 my-auto h-[553px] w-[41%] object-cover"
              />
            </div>
            <footer className="relative mt-[-375px] self-stretch bg-teal-900 py-2.5">
              <div className="mt-[435px] flex flex-col items-center justify-center">
                <div className="mx-auto flex w-full max-w-[1042px] items-start md:flex-col md:p-5">
                  <div className="flex w-[52%] flex-col gap-9 md:w-full">
                    <Img src="images/img_png_3.png" alt="pngtwo_one" className="h-[60px] w-[33%] object-cover" />
                    <Text size="lg" as="p" className="!text-white-A700">
                      Improve Efficiency, Provide A Better Customer Experience With Modern Technolo Services Available
                    </Text>
                    <Img
                      src="images/img_gto_footer_2_payment.png"
                      alt="gtofootertwo"
                      className="h-[34px] w-[53%] object-cover"
                    />
                  </div>
                  <div className="ml-[18px] flex flex-1 flex-col gap-[31px] md:ml-0 md:self-stretch">
                    <Heading size="md" as="h4" className="!text-white-A700">
                      Resources
                    </Heading>
                    <div className="flex flex-col items-start gap-5">
                      <a href="Carrer" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Carrer
                        </Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6" className="!text-white-A700">
                          About Us
                        </Heading>
                      </a>
                      <a href="Features" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Features
                        </Heading>
                      </a>
                      <a href="Services" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Services
                        </Heading>
                      </a>
                    </div>
                  </div>
                  <div className="ml-[86px] flex flex-1 flex-col items-start gap-7 md:ml-0 md:self-stretch">
                    <Heading size="md" as="h4" className="!text-white-A700">
                      Company{" "}
                    </Heading>
                    <div className="flex flex-col items-start gap-5">
                      <a href="Blog" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Blog
                        </Heading>
                      </a>
                      <a href="Developers" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Developers
                        </Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6" className="!text-white-A700">
                          Our Story
                        </Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6" className="!text-white-A700">
                          About Us
                        </Heading>
                      </a>
                    </div>
                  </div>
                  <div className="ml-[86px] flex flex-1 flex-col items-start gap-7 md:ml-0 md:self-stretch">
                    <Heading size="md" as="h4" className="!text-white-A700">
                      Help Pages
                    </Heading>
                    <div className="flex flex-col items-start gap-[21px]">
                      <a href="Customer" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Customer
                        </Heading>
                      </a>
                      <a href="Developers" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="!text-white-A700">
                          Developers
                        </Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6" className="!text-white-A700">
                          Our Story
                        </Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6" className="!text-white-A700">
                          About Us
                        </Heading>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-[42px] h-px w-full self-stretch bg-white-A700_7f" />
                <div className="mr-[25px] mt-[19px] flex w-[61%] items-start justify-between gap-5 self-end md:mr-0 md:w-full md:p-5">
                  <Text size="lg" as="p" className="mt-[13px] !text-white-A700">
                    Copyright © 2024, All Rights Reserved.
                  </Text>
                  <div className="flex flex-col items-center rounded-tl-[17px] rounded-tr-[17px] bg-gradient3">
                    <Img
                      src="images/img_arrow_up_right_white_a700.svg"
                      alt="arrowupright"
                      className="mb-[13px] mt-1 h-[33px] w-[33px]"
                    />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
