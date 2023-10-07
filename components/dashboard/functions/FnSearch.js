import { BiKey } from "react-icons/bi"

const FnSearch = (e, dataArr, data, query, setQuery, setDataArr) => {
    console.log(e)
    setQuery(e.target?.value)
    const filterData = e?.target?.value ? data.filter(key => key.title.toLowerCase().includes(query)) : data;
    setDataArr(filterData)

}
export default FnSearch