import React from 'react'
import microsoft from '@/public/microsoft.svg';
import TULogo from '@/public/tribhuvanuniversitylogo.png';
import vonKathmandu from '@/public/vonKathmandu.png';
import freedomadventures from '@/public/freedomadventures.png';
import himalayantrailrunning from '@/public/himalayantrailrunning.png';
import himalayancreatives from '@/public/himalayancreatives.png';
import Image from 'next/image';
const Skills = () => {
    const developmentTags = [
        "NextJS",
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Sanity",
        "RESTful API",
        "AWS",
        "UI/UX Design",
        "Framer Motion"
    ];

    const designerTags = [
        "Illustrator",
        "Photoshop",
        "InDesign",
        "Figma",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Illustration",
        "Branding",
    ];

    const OtherTags = [
        "Lightroom",
        "Premiere Pro",
        "After Effects",
        "Motion Graphics",
        "Photography",
        "Videography",
    ];

    return (
        <div className="mx-10 md:mx-32 bg-black">

            <div className="grid grid-cols-1 md:grid-cols-12 md:space-x-20 mb-20">
                <div className="md:col-span-4 flex flex-col justify-between gap-4 mb-20 md:mb-0 text-white">
                    <div className='flex flex-col'>
                        <span className="uppercase text-2xl">
                            Irfan <span className="text-red-600 text-3xl">✷</span> Khan
                        </span>
                        <span className="text-5xl font-bold">
                            Designer <br />& Developer
                        </span>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='uppercase text-xs font-bold'>Education</span>
                        <div className='flex flex-col'>
                            <div className='flex flex-row gap-2 items-start '>
                                <Image src={TULogo} alt="" width={15} />
                                <span className='text-xs'> Bachelors in Computer Science and Information Technology</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <span className='uppercase text-xs font-bold'>Experience</span>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-2 items-start'>
                                <Image src={himalayancreatives} alt="" width={15} className='mt-1' />
                                <div className='flex flex-col '>
                                    <span className='col-span-3 text-xs font-thin'>Himalayan Creative Solution</span>
                                    <span className='col-span-2 text-xs'>Frontend Engineer/Product Designer</span>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 items-start'>
                                <Image src={himalayantrailrunning} alt="" width={15} className='invert contrast-0 brightness-100 mt-1' />
                                <div className='flex flex-col '>
                                    <span className='col-span-3 text-xs font-thin'>Himalayan Trail Running</span>
                                    <span className='col-span-2 text-xs'>Brand Designer, Marketing & Event Manager</span>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 items-start'>
                                <Image src={vonKathmandu} alt="" width={15} className='mt-1' />
                                <div className='flex flex-col '>
                                    <span className='col-span-3 text-xs font-thin'>vonKathmandu</span>
                                    <span className='col-span-2 text-xs'>Graphics and Marketing</span>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 items-start'>
                                <Image src={freedomadventures} alt="" width={15} />
                                <div className='flex flex-col '>
                                    <span className='col-span-3 text-xs font-thin'>Freedom Adventures</span>
                                    <span className='col-span-2 text-xs'>Head IT, Design & Marketing Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <span className='uppercase text-xs font-bold'>Certifications</span>
                        <div className='flex flex-col'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src={microsoft} alt="" width={15} />
                                <span className='text-xs'>
                                    <a href="https://www.credly.com/badges/fcb5a1b9-f078-473c-a5fd-47cd520b05db/linked_in_profile" target='_blank'>
                                        MTA: Networking Fundamentals - Certified 2018
                                    </a>
                                </span>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src={microsoft} alt="" width={15} />
                                <span className='text-xs'>
                                    <a href="https://www.credly.com/badges/16e34a9c-ce00-4850-9673-204f485892ad/linked_i" target='_blank'>
                                        Microsoft Office Specialist Excel 2013
                                    </a>
                                </span>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src={microsoft} alt="" width={15} />
                                <span className='text-xs'>
                                    <a href="https://www.credly.com/badges/2611ec02-eca4-4211-a9f6-b430219f050c/linked_in_profile" target='_blank'>
                                        Microsoft Office Specialist Word 2013
                                    </a>
                                </span>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src={microsoft} alt="" width={15} />
                                <span className='text-xs'>

                                    Microsoft Student Partner 2018

                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-span-8 justify-between flex flex-col gap-y-10 text-white">
                    <span className="text-xl font-semibold ">
                        With years of graphic design experience, I&apos;ve transitioned into frontend development over the past year. I hold a bachelor&apos;s in Computer Science and Information Technology, blending design skills with coding expertise to create dynamic user experiences. I&apos;m eager for new challenges and projects.
                    </span>
                    <div className="grid grid-cols-6">
                        <div className="col-span-2 flex flex-col  font-thin">
                            <span className='text-sm font-semibold'>
                                Development
                            </span>
                            <span className="uppercase text-red-600 text-sm font-bold">2+ years</span>
                        </div>
                        <span className="col-span-4 flex flex-row flex-wrap gap-2 text-lg font-thin">
                            {developmentTags.map((tag, index) => (
                                <div className="bg-gray-400  rounded-lg text-sm px-2 text-black font-normal" key={index}>{tag}</div>
                            ))}
                        </span>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="col-span-2 flex flex-col text-lg font-thin">
                            <span className='text-sm font-semibold'>
                                Design
                            </span>
                            <span className="uppercase text-red-600 text-sm font-bold">8+ years</span>
                        </div>
                        <span className="col-span-4 flex flex-row flex-wrap gap-2 text-lg font-thin">
                            {designerTags.map((tag, index) => (
                                <div className="bg-gray-400  rounded-lg text-sm px-2 text-black font-normal" key={index}>{tag}</div>
                            ))}
                        </span>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="col-span-2 flex flex-col text-lg font-thin">
                            <div className='flex flex-col'>
                                <span className='text-sm font-semibold'>
                                    Other Skills
                                </span>
                                <span className='text-xs'>Have at least one commercial project using these skills</span>
                            </div>
                            {/* <span className="uppercase text-red-600 text-sm font-bold">8+ years</span> */}
                        </div>
                        <span className="col-span-4 flex flex-row flex-wrap gap-2">
                            {OtherTags.map((tag, index) => (
                                <div className="bg-gray-700 rounded-lg text-sm px-2 text-black font-normal" key={index}>{tag}</div>
                            ))}
                        </span>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col gap-1">
                            <span className="uppercase text-red-600 text-xs">Based on</span>
                            <span className="font-semibold text-sm">Pokhara, Nepal</span>
                        </div>
                        <div className="flex flex-col gap-1 justify-self-center">
                            <span className="uppercase text-red-600 text-xs">Languages</span>
                            <span className="font-semibold text-sm">English, Nepali <br /> & Hindi/Urdu</span>
                        </div>
                        <div className="flex flex-col gap-1 justify-self-end ">
                            <span className="uppercase text-red-600 text-xs">Date of Birth</span>
                            <span className="font-semibold text-sm">25 Dec 1995</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills