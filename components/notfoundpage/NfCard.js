import { SlPrinter } from 'react-icons/sl'
import { BsQuestionCircle, BsJournalBookmark } from 'react-icons/bs'
import { TbReportSearch } from 'react-icons/tb'
import { AiOutlineProfile } from 'react-icons/ai'
import { TfiWrite } from 'react-icons/tfi'
import { ImQuotesLeft } from 'react-icons/im'


const listData = [
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
    {
        heading: "CSS, PMS English Aid",
        detail: "Learn With Sir Kazim",

    },
]
const NfCard = () => {
    return (
        <div className="w-full m-auto p-auto mb-[30px] flex flex-wrap ">
            {listData.map((element, index) => {
                return (
                    <div className=" w-80 my-2.5 mr-2.5 ml-0 flex py-2.5 px-5 border border-solid border-[#a29c9c]/50" key={index}>
                        <div className="w-[20%] text-center items-center">
                            <i><SlPrinter size={30} /></i>
                        </div>
                        <div className='w-[80%]'>
                            <h3 className='text-black'>{element.heading}</h3>
                            <p className='text-[#a29c9c]'>{element.detail}</p>
                        </div>
                    </div>
                )
            })}
            <div className=" text-white bg-black mr-2.5 my-2.5 flex w-80 py-2.5 px-5 border border-solid border-[#a29c9c]/50">
                <div className="w-[20%] text-center items-center">
                    <h2 className='text-[30px] text-white font-extralight'>Aa</h2>
                </div>
                <div>
                    <h3 className='text-white'>CSS, PMS English Aid</h3>
                    <p className='text-[#a29c9c]'>Learn With Sir Kazim</p>
                </div>
            </div>
        </div>
    )
}

export default NfCard