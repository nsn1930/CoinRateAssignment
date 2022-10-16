import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";

function MainFooter() {
    return (
        <div className="mainFooter">
            <div className="footerColumns">
                <LeftFooter></LeftFooter>
                <RightFooter></RightFooter>
            </div>
            <h3 className="watermark">© 2021 Ratepunk. All Rights Reserved.</h3>
        </div>
    );
}

export default MainFooter;