const FnSort = (dataArr, element, setDataArr) => {
    const newData = dataArr
    newData.sort((a, b) => {
        if (a[element] < b[element]) {
          return -1;
        }
        if (a[element] > b[element]) {
          return 1;
        }
        return 0;
      });
      setDataArr(newData)
      console.log(dataArr)
    }


export default FnSort