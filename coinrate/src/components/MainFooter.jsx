import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";

function MainFooter() {
    return (
        <div className="mainFooter">
            <div className="footerColumns">
                <LeftFooter></LeftFooter>
                <RightFooter></RightFooter>
            </div>
        </div>
    );
}

export default MainFooter;