import BaniLogo from "../../assets/bani-logo.svg";
import Lock from "../../assets/lock.svg";

const Footer=()=>{
    return(
        <div className="text-center mt-4">
            <div className="flex text-center place-content-center">
                <img src={Lock} alt="" />
                <p className="mx-2 my-4">Secured by </p>
                <img src={BaniLogo} alt="" />
            </div>
            <p className="text-black-20 mb-8">Do you have any questions, visit our website bani.africa</p>
        </div>
    )
}
export default Footer;