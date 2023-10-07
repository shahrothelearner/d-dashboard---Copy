const FnCheckBox = (e, dataArr, setDataArr) =>{
    const {name, checked}= e.target;
    if(name === 'th-checkbox'){
        let newData= dataArr.map(val =>{
            return({...val, isChecked: checked})
        })
        setDataArr(newData)
    }else{
      let newData = dataArr.map(val=> val._id === name ? {...val, isChecked: checked}: val)
      setDataArr(newData)
    }
   

}  

export default FnCheckBox;