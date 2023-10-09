'use client'
import Link from 'next/link';
import { useEffect } from 'react'




const SideBarMenu = () => {
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
    return (
        <div id="accordionExample" className='h-screen max-w-[400px] w-full bg-black/90 animate-[widthAnimation_0.3s_ease-in-out_forwards] block px-10 relative z-[10000]'>
            <div className='w-[150px] relative z-[10000000000]'>
                <h2 className="mb-0 py-[10px]"><Link href={"/admin-panel"}>Dashboard</Link></h2>
                <h2 className="mb-0" id="heading1">
                    <button
                        className="group relative flex w-full items-center  border-0 py-3 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none "
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1">
                        Courses
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
                    data-te-collapse-show
                    aria-labelledby="heading1"
                    data-te-parent="#accordionExample">
                    <div className="p-2 flex flex-col gap-2">
                         <Link className="cursor-pointer"href="/admin-panel/courses">All Courses</Link>
                         <Link className="cursor-pointer"href="/admin-panel/courses/adnew-course">Add Course</Link>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="mb-0" id="headingTwo">
                    <button
                        className="group relative flex w-full items-center  border-0 py-3 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none "
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        Users
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
                    <div className="p-2 flex flex-col gap-2">
                         <Link className="cursor-pointer"href="/admin-panel/users">All Users</Link>
                         <Link className="cursor-pointer"href="/admin-panel/users/addnew-user">Add User</Link>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className="group relative flex w-full items-center  border-0 py-3 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree">
                        Categories
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
                    id="collapseThree"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="headingThree"
                    data-te-parent="#accordionExample">
                    <div className="p-2 flex flex-col gap-2">
                         <Link className="cursor-pointer"href="/admin-panel/categories">All Categories</Link>
                         <Link className="cursor-pointer"href="/admin-panel/categories/sub-categories">All Sub-Categories</Link>
                         <Link className="cursor-pointer"href="/admin-panel/categories/addnew-category">Add Category</Link>
                         <Link className="cursor-pointer"href="/admin-panel/categories/sub-categories/addnew-subcategory">Add Sub-Category</Link>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="accordion-header mb-0" id="headingFour">
                    <button
                        className="group relative flex w-full items-center border-0 py-3 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour">
                       Articles
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
                    id="collapseFour"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="headingFour"
                    data-te-parent="#accordionExample">
                    <div className="p-2 flex flex-col gap-2">
                         <Link className="cursor-pointer"href="/admin-panel/articles">All Articles</Link>
                         <Link className="cursor-pointer"href="#">Add Article</Link>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="accordion-header mb-0" id="headingFive">
                    <button
                        className="group relative flex w-full items-center ml-0 border-0 py-3 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive">
                       Stories
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
                    id="collapseFive"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="headingFive"
                    data-te-parent="#accordionExample">
                    <div className="p-2 flex flex-col gap-2">
                         <Link className="cursor-pointer"href="/admin-panel/stories">All Stories</Link>
                         <Link className="cursor-pointer"href="/admin-panel/stories/addnew-story">Add Story</Link>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="accordion-header mb-0" id="headingSix">
                    <button
                        className="group relative flex w-full items-center ml-0 border-0 py-3 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix">
                       Ads Panel
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
                    id="collapseSix"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="headingSix"
                    data-te-parent="#accordionExample">
                    <div className="p-2 flex flex-col gap-2">
                         <Link className="cursor-pointer" href="/admin-panel/ads/sidebar-ads">Sidebar Ads</Link>
                         <Link className="cursor-pointer" href="/admin-panel/ads/banners/mainbanners">HomePage Banners</Link>
                         <Link className="cursor-pointer" href="/admin-panel/ads/banners/articlebanners">Article Banners</Link>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="accordion-header mb-0" id="headingSeven">
                    <button
                        className="group relative flex w-full items-center ml-0 border-0 py-3 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none cursor-pointer"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven">
                       Events
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
                    id="collapseSeven"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="headingSeven"
                    data-te-parent="#accordionExample">
                    <div className="p-2 flex flex-col gap-2">
                         <Link className="cursor-pointer"href="/admin-panel/events">All Events</Link>
                         <Link className="cursor-pointer"href="/admin-panel/addnew-event">Add Event</Link>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default SideBarMenu