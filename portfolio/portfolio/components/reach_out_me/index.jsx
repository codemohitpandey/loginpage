const index = ({title, desc1, desc2, icon}) => {
    return (
        <>
            <div className="border border-slate-700 flex flex-row items-center justify-around p-4 mt-6">
                <div className="p-4" style={{background: "#af2676", color: "#fff"}}><span className="material-icons">{icon}</span></div>
                <div className="">
                    <h1 className="text-white font-bold text-xl mb-2">{title}</h1>
                    <h1 className="text-gray-400 text-sm font-bold">{desc1}</h1>
                    <h1 className="text-gray-400 text-sm font-bold">{desc2}</h1>
                </div>
            </div>
        </>
    )
}

export default index;
