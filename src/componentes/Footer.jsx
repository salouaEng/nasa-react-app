export default function Footer(props) {
// eslint-disable-next-line react/prop-types
const {handleToggleModal,data}=props;
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
            <h2>APOD PROJECT</h2>
                <h1>{data?.title}</h1>
                
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}