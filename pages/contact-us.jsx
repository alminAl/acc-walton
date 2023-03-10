import Head from "next/head";
import LandingLayout from "../components/layout/LandingLayout";


const ContuctUs = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <div className="bg-[#000B35] text-white min-h-[60vh]">
                <div className="py-10 mx-5 md:w-4/5 md:mx-auto overflow-auto">
                    <h1 className="text-5xl font-semibold text-center">Contact Us</h1>
                    <br />
                    <p>Texas, USA</p>

                    <p>Phone Number: 1-682-301-3249</p>

                    <p>Toll-free Phone Number (USA only): 833-317-5663</p>

                    <p>Fax Number: 682-213-9847</p>

                    <p>Email: vp@waltonllc.us</p>
                </div>
            </div>
        </>
    )
}

export default ContuctUs

ContuctUs.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};