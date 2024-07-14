export default function SideBar(props) {
    // eslint-disable-next-line react/prop-types
    const {handleToggleModal,data}=props
    return (
        <div className="sidebar">
            <div  className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                <p>{data?.explanation}</p>

                    <p className="descriptionTitle"></p>
                    <p>{data?.date}</p>
                </div>
                <button onClick={handleToggleModal} >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}