import { MdAddCircle } from 'react-icons/md';
import { GrUnorderedList } from 'react-icons/gr';
import { TbCategory } from 'react-icons/tb';
import { BiSortAlt2 } from 'react-icons/bi';
import Link from "next/link";

const HeadingSection = ({ heading, preview, stat, order }) => {
    return (
        <div className="flex m-3 items-center">
            <h1 className="my-10 ml-20 mr-5 items-center capitalize text-3xl">All {heading.heading}</h1>
            <Link href={heading.to}>
                <button type="button" style={{ height: "40px" }} className="py-3 px-5 cursor-pointer gap-2 items-center flex rounded bg-green-600 text-white">
                    <MdAddCircle size={20} />{heading.btntext}</button>
            </Link>
            {preview && <Link href={"/categories"}>
                <button type="button" style={{ height: "40px" }} className="my-3 mx-1 items-center rounded flex text-white justify-between py-3 px-5  ">
                    <TbCategory size={20} />Live Preview</button>
            </Link>}
            {stat && <button type="button" style={{ height: "40px" }} className=" bg-purple-600 text-white my-3 mx-1 items-center rounded py-3 px-5 flex justify-between " >
                <GrUnorderedList size={20} />Stats</button>}
            {order && <button type="button" style={{ height: "40px" }} className="bg-blue-600 text-white my-3 mx-1 items-center rounded py-3 px-5 flex justify-between " >  
                <BiSortAlt2 size={20} />Order</button>}
        </div>
    )
}

export default HeadingSection