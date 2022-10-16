import Contact from "./Contact";
import QuickLinks from "./QuickLinks";
import Social from "./Social";

function RightFooter() {
    return (
        <div className="rightColumnFooter">
            <div className="rightFooterContent">
                <QuickLinks></QuickLinks>
                <div className="contactSocial">
                    <Contact></Contact>
                    <Social></Social>
                </div>
            </div>
        </div>
    )
}
export default RightFooter;