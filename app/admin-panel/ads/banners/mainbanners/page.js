'use client'
import { useState, useEffect } from "react";
import img from '../../../../../public/images/layouts/select-img.png';
import Preview from "./Preview";
import Preview2 from "./Preview2";
import LeftSide from "./LeftSide";
import RightSidebar from "../../sidebar-ads/addnew-ad/RightSidebarAd";





const MainPageBanners = () => {
    const [color, setColor] = useState("#FFFFFF");
    const [color2, setColor2] = useState("#D2E6E8");
    const [image, setImage] = useState(img)
    const [image2, setImage2] = useState(img)
    const [banner1, setBanner1] = useState({
        heading: "Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    })


    useEffect(() => {
        const init = async () => {
            const { Collapse,
                initTE, } = await import("tw-elements");
            initTE({
                Collapse,
                initTE,
            });
        };
        init();
    }, []);
    const [banner2, setBanner2] = useState({
        heading: "Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        url: "#"
    })

    return (

        <div className="mx-auto my-10 min-h-screen h-auto" style={{ width: "1200px" }}>
            <div className="mx-2">
                <h1 className="m-5 text-lg font-bold">Home Page Banners</h1>
                <div id="accordionExample" className='w-full  animate-[widthAnimation_0.3s_ease-in-out_forwards] block px-10 relative'>
                    <div className='w-full border'>

                        <h2 className="mb-0" id="headingOne">
                            <button
                                className="group relative flex w-full items-center  border-0 p-3 text-left text-base text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none "
                                type="button"
                                data-te-collapse-init
                                data-te-collapse-collapsed
                                data-te-target="#collapse1"
                                aria-expanded="false"
                                aria-controls="collapse1">
                                Top Banner
                                <span
                                    className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <div
                            id="collapse1"
                            className="!visible hidden"
                            data-te-collapse-item
                            // data-te-collapse-show
                            aria-labelledby="heading1"
                            data-te-parent="#accordionExample">
                            <div className="w-full m-2">
                                <form className="flex">
                                    <LeftSide ads={banner1} setAds={setBanner1} show={false} />
                                    <RightSidebar image={image} setImage={setImage} imgSize={false} />
                                </form>
                                <Preview banner={banner1} image={image} color={color} setColor={setColor} />
                            </div>
                        </div>
                    </div>
                    <div className="border">
                        <h2 className="mb-0" id="headingTwo">
                            <button
                                className="group relative flex w-full items-center  border-0 p-3 text-left text-base text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none "
                                type="button"
                                data-te-collapse-init
                                data-te-collapse-collapsed
                                data-te-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo">
                                Bottom Banner
                                <span
                                    className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="!visible hidden"
                            data-te-collapse-item
                            aria-labelledby="headingTwo"
                            data-te-parent="#accordionExample">
                            <div className="w-full m-5">
                                <form className="flex">
                                    <LeftSide ads={banner2} setAds={setBanner2} show={true} />
                                    <RightSidebar image={image2} setImage={setImage2} imgSize={false} />
                                </form>
                                <Preview2 banner={banner2} image={image2} color={color2} setColor={setColor2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainPageBanners;