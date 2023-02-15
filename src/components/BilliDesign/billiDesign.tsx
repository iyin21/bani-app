import Billi from "../../assets/billi.svg";

const BilliDesign=()=>{
    return(
        <div className="bg-white px-[16px] pt-[36px] pb-[24px]">
            <div className="flex items-start">
                <img src={Billi} alt="" />
                <div className="ml-4">
                    <h4 className="font-semibold 2md mb-2">Billi Design</h4>
                    <p className="mb-4 text-black-20">https://bani.africa/billidesign</p>
                    <h5 className="font-semibold mb-2">Payment description</h5>
                    <p className="mb-4 text-black-20">Lorem ipsum dolor sit amet consectetur. Posuere elementum
                        adipiscing a tincidunt in et nisi malesuada. Tellus nunc nibh 
                        tincidunt tristique pellentesque nulla morbi tortor.
                    </p>
                    <hr className="text-neutral mb-2" />
                    <div className="flex">
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BilliDesign;