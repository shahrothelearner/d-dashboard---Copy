

const Submenus = ({ menuArticle }) => {
  const { artName } = menuArticle;
  return (
    <div className="absolute bg-[#fbf5ed] w-full ml-[-5px]">
      <div style={{ display: "flex", justifyContent: 'space-between' }}>
        <div>
          <a className="p-4 leading-6 text-[18px] w-full animate-[widthAnimation_0.3s_ease-in-out_forwards]" href='/categories/[:id]'>{artName} sub menu</a><br />
          <a className="p-4 leading-6 text-[18px] w-full animate-[widthAnimation_0.3s_ease-in-out_forwards]">{artName} sub menu</a><br />
          <a className="p-4 leading-6 text-[18px] w-full animate-[widthAnimation_0.3s_ease-in-out_forwards]">{artName} sub menu</a><br />
          <a className="p-4 leading-6 text-[18px] w-full animate-[widthAnimation_0.3s_ease-in-out_forwards]">{artName} sub menu</a><br />
          <a className="p-4 leading-6 text-[18px] w-full animate-[widthAnimation_0.3s_ease-in-out_forwards]">{artName} sub menu</a><br />
          <a className="p-4 leading-6 text-[18px] w-full animate-[widthAnimation_0.3s_ease-in-out_forwards]">{artName} sub menu</a><br />
          <a className="p-4 leading-6 text-[18px] w-full animate-[widthAnimation_0.3s_ease-in-out_forwards]">{artName} sub menu</a></div>
      </div>
    </div>
  )
}

export default Submenus