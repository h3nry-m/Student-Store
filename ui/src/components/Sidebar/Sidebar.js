import "./Sidebar.css";

export default function Sidebar() {
    function checkClassName(event) {
        console.log(event)
    }

    return (
        <div className="Sidebar">
            <div className="HideSideBar" onClick={checkClassName}>
                Hello
            </div>
        </div>
    )
} 



