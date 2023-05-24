import React from "react";
import Button from "./Button";
import FeatureItem from "./FeatureItem";

const Feature = () => {
  const featureData = [
    {
      imgURL: "../../public/assets/img/template0.png",
      title: "Creative Resume Template",
      desc: "A resume template as creative as your imagination",
    },
    {
      imgURL: "../../public/assets/img/template1.png",
      title: "Professional Resume template",
      desc: "A resume template as creative as your imagination",
    },
    {
      imgURL: "../../public/assets/img/template1.png",
      title: "College Resume Template",
      desc: "A resume template as creative as your imagination",
    },
  ];
  return (
    <section className=" py-16">
      <div className="container mx-auto flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">
            Resume Templates for Every Career Path.
          </h1>
          <hr className="my-4 bg-indigo-400 w-20 p-[1px]" />
          <p className="w-full lg:w-[50%] text-center mx-auto text-md px-4">
            You can pick one of our handcrafted resume templates above. You can
            start building your resume in less than 5 seconds, using predefined
            sections approved by recruiters worldwide. You can also customize it
            to your own needs and personality and hit 'Download'. It's THAT easy
            to use, even if you've never made a resume in your life before!
          </p>
        </div>
        <div className="w-full mt-12 flex flex-wrap justify-center gap-10">
          {featureData.map((item, i) => {
            const { imgURL, title, desc } = item;
            return (
              <FeatureItem key={i} imgURL={imgURL} title={title} desc={desc} />
            );
          })}
          {/* <div className="w-80">
            <img
              className="w-full"
              src="../../public/assets/img/template1.png"
              alt=""
            />
            <div className="text-left mt-5">
              <h3 className="text-xl font-semibold">
                {" "}
                Professional Resume template
              </h3>
              <p>A resume template as creative as your imagination</p>
            </div>
          </div>
          <div className="w-80">
            <img
              className="w-full"
              src="../../public/assets/img/template2.png"
              alt=""
            />
            <div className="text-left mt-5">
              <h3 className="text-xl font-semibold">
                {" "}
                College Resume Template
              </h3>
              <p>A resume template as creative as your imagination</p>
            </div>
          </div> */}
        </div>
        <div className="mt-10">
          <Button>Discover More Resume Templates</Button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
