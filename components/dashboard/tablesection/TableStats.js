

const TableStats = ({tableStats}) => {

  return (

    <div className="flex">
             {tableStats.map((ele,i)=> {
               return(
                  <div key={i} >{ele.type} ({ele.func})|</div>
             )}
             )}           
    </div>
  )
}

export default TableStats