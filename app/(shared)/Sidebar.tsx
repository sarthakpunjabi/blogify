import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Image from "next/image";
import Ad2 from "public/assets/ad-2.png";
import AboutProfile from "public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">
        <Image
          style={{ objectFit: "cover" }}
          alt="advert-2"
          width={500}
          height={1000}
          src={Ad2}
          className="hidden md:block my-8 w-full"
        />
      </div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="flex justify-center my-3 bg-wh-900">
        <Image
          style={{ width: "500px", height: "250px", objectFit: "cover" }}
          alt="AboutProfile"
          src={AboutProfile}
        />
      </div>
      <h4 className=" py-3 px-5 text-wh-500 font-bold text-center">
        Sarthak Punjabi
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis
        magnam rerum laborum perferendis quae, ut labore, consectetur officia
        amet recusandae adipisci nisi eum, tenetur itaque in! Culpa, temporibus
        pariatur!
      </p>
    </section>
  );
};

export default Sidebar;
