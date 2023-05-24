import React from "react";
import { Link } from "react-router-dom";
import FeatureItem from "../components/FeatureItem";
import MasterLayout from "../components/MasterLayout/MasterLayout";

const ResumePage = () => {
  const resumesData = [
    {
      type: "Creative",
      desc: "Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549395/resumeCraft/creative-resume-template_yiqivt.png",
      premium: true,
    },
    {
      type: "Basic",
      desc: "Easily personalize this basic resume layout that can be completed in under ten minutes through our intuitive process.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549395/resumeCraft/basic-resume-template_atzvwo.png",
    },

    {
      type: "Combined",
      desc: "This template combines two professional resume formats. It’s a mix of the reverse-chronological resume and the functional resume format.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549395/resumeCraft/combined-resume-template_qoosm7.png",
    },
    {
      type: "Minimalist",
      desc: "A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549395/resumeCraft/minimalist-resume-template_oithwj.png",
    },
    {
      type: "Hybrid",
      desc: "The hybrid template is a combination of functional and reverse-chronological and focuses on both skills and experiences.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549394/resumeCraft/hybrid-resume-template_mvgcla.png",
    },
    {
      type: "Traditional",
      desc: "A straightforward format that gives equal importance to all resume sections, emphasising skills and work experience.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549394/resumeCraft/traditional-resume-template_rs0wiu.png",
      premium: true,
    },
    {
      type: "General",
      desc: "This general format can be tailored according to your personality and skills to apply for jobs in most industries.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549394/resumeCraft/general-resume-template_jeslop.png",
      premium: true,
    },
    {
      type: "Modern",
      desc: "It can be hard to stand out from the crowd, but this modern resume sample will take care of this.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549394/resumeCraft/modern-resume-template_q1hmzu.png",
    },
    {
      type: "Executive",
      desc: "Executive resume sample with a contemporary approach and eye-catching design that makes sure your application will be spotted first.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549394/resumeCraft/executive-resume-template_np3ptj.png",
    },
    {
      type: "IT",
      desc: "One of the best resume layouts to choose when you wish to showcase your IT expertise.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549394/resumeCraft/it-resume-template_osirwp.png",
    },
    {
      type: "Simple",
      desc: "Simple resume layout for conservative industries, which is a minimalistic upgrade from the traditional resumes.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549393/resumeCraft/simple-resume-template_afmzhn.png",
    },
    {
      type: "Functional",
      desc: " A functional resume template that works for all industries and will emphasize your strengths & work experience.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549393/resumeCraft/functional-resume-template_cqykhp.png",
    },
    {
      type: "Tech",
      desc: " Apply and get shortlisted for tech jobs with the tech resume template that will impress hiring managers.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549393/resumeCraft/tech-resume-template_omftri.png",
      premium: true,
    },
    {
      type: "Professional",
      desc: "A professional resume sample that has been approved by various recruiters and helped numerous people get their dream job.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549393/resumeCraft/professional-resume-template_z83p0o.png",
    },
    {
      type: "Skill-Based",
      desc: "A skill-based resume created especially for the job-seekers that are pursuing a career change or are recent graduates.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549392/resumeCraft/skill-based-resume-template_e75fkk.png",
    },
    {
      type: "College",
      desc: "An updated and contemporary version of the 21st-century college resume template, being an alternative to the old styles.",
      imgURL:
        "https://res.cloudinary.com/himu/image/upload/v1681549392/resumeCraft/college-resume-template_fffdix.png",
    },
  ];
  return (
    <MasterLayout>
      <section className="py-36">
        <div className="container mx-auto">
          <div>
            <h1 className="text-3xl font-semibold">Resume Templates</h1>
            <p className="text-gray-500">/0-5 years of experience</p>
            <hr className="my-4 bg-indigo-400 w-20 p-[2px]" />
          </div>

          <div className="w-full mt-20 flex flex-wrap justify-center gap-10 ">
            {resumesData.map((item, i) => {
              const { imgURL, type, desc, premium } = item;
              console.log(imgURL);
              return (
                <Link to={`/dashboard/${type}`}>
                  {" "}
                  <FeatureItem
                    key={i}
                    imgURL={imgURL}
                    type={type}
                    desc={desc}
                    premium={premium}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </MasterLayout>
  );
};

export default ResumePage;
