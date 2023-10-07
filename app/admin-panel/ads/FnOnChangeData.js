const FnOnChangeData = (e, setAds, ads) =>{
    if (e.target.name === 'b1-title') {
        if(e.target.value){
        setAds({ ...ads, heading: e.target.value })
       
        }else{
            setAds({ ...ads, heading:"Heading"})
        }
    }
    if (e.target.name === 'b1-content') {
        if(e.target.value){
        setAds({ ...ads, content: e.target.value })
        
        }else{
            setAds({ ...ads, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in" })
        }
    }
    if (e.target.name === 'b1-url') {
        if(e.target.value){
        setBanner2({ ...banner2, url: e.target.value })
        
        }else{
            setBanner2({ ...banner2, content:"#" })
        }
    }
}



export default FnOnChangeData