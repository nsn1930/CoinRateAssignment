import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

function MainContainer() {
    return (
        <div className="mainContainer">
            <div className="mainColumns">
                <LeftColumn></LeftColumn>
                <RightColumn></RightColumn>
            </div>
        </div>
    );
}

export default MainContainer;