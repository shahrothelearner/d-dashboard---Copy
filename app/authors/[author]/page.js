
import Img from "@/public/teacher.png"
import Image from "next/image"
import Link from "next/link"
// import '../authors.css'



const page = () => {
  return (
    <div className="font-Proxima max-w-[1100px] w-full m-auto">
        <div className="max-w-[750px] mb-[50px] items-center text-[#231F20] m-auto">
            <div>
                <Image src={Img} width={250} height={250} className="mt-[120px] mx-auto mb-2.5 block rounded-[50%]" alt="author"/>
            </div>
            <div className="font-Proxima-cond flex flex-col">
            <div>
            <p className="font-bold text-xs uppercase text=[#02838d] mb-2.5 text-center tracking-wide">MEDICAL ADVISOR</p>
            <h1 className="text-[42px] leading-[54px] mb-5 text-center font-bold">Debra Rose Wilson, Ph.D., MSN, R.N., IBCLC, AHN-BC, CHT</h1>
            <Link href="#"><h4 className="text-[#02838d] cursor-pointer text-[22px] leading-[26px] text-center mb-[50px] font-black hover:text-[#db1f88;]">in</h4></Link>
            </div>
            </div>
        
        <div>
            <em>
            This individual is no longer a medical reviewer in our network. The credentials and contact information reflected here may not be current.
            </em>
            <p className="py-5">
            Dr. Debra Rose Wilson is a professor, researcher, and holistic healthcare practitioner. She teaches graduate-level psychology and nursing courses. Dr. Wilson has over 200 publications in her areas of expertise, which include complementary and alternative therapies, autoimmune disease, stress and coping, and obstetrics and breastfeeding.
            </p>
        </div>
        <div>
            <h4 className="font-semibold">
            Education
            </h4>
            <ul className="list-disc leading-10 pl-[50px]">
            <li>Lakehead University, Hon BSN, BA</li>
            <li>Tennessee State University School of Nursing, MSN</li>
            <li>Walden University, PhD</li>
            </ul>
        </div>
        <div>
            <h4 className="font-semibold">
            Certifications
            </h4>
            <ul className="list-disc leading-10 pl-[50px]">
            <li>Registered Nurse</li>
            <li>Advanced Holistic Nurse Board Certified</li>
            <li>International Board Certified Lactation Consultant</li>
            <li>Clinical Hypnotherapist</li>
            <li>Reiki Master</li>
            <li>Therapeutic Touch Therapist</li>  
            </ul>
        </div>
        <div>
            <h4 className="font-semibold">
            Professional Accomplishments
            </h4>
            <ul className="list-disc leading-10 pl-[50px]">
            <li>2017-2018 American Holistic Nurse of the Year</li>
            <li>Editor of a peer-reviewed journal for 9 years</li>
            <li>2015 March of Dimes Nurse of the Year</li>  
            </ul>
        </div>
        <div>
            <h4 className="font-semibold">
            Affiliations
            </h4>
            <ul className="list-disc leading-10 pl-[50px]">
            <li>Walden University</li>
            <li>Austin Peay State University</li>
            </ul>
        </div>
        <div>
            <hr className="my-[30px]"/>
            <h3 className="text-[26px] leading-[30px] font-bold" >ABOUT OUR MEDICAL REVIEW PROCESS</h3>
            <p className="py-5">
            At Healthline Media, we are committed to providing every individual with clear, credible, evidence-based health and wellness information. To be your most trusted source of information, our content is medically reviewed to verify the clinical accuracy of our content, images, products, and services. Medical review is provided by members of the Healthline Medical Network. The clinicians in the Medical Network bring extensive experience from across the spectrum of medical specialties, as well as their perspective from years of clinical practice, research, and patient advocacy. Read more about our process  
            </p>
        </div>
        </div>

    </div>
  )
}

export default page