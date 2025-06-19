import React from "react";
import Button from "./_components/GetStartedButton";
import HowItWorks from "./_components/HowItWorks";
import Image from "next/image";

import Link from "next/link";
import TestimonialCarousel from "./_components/Testimonials";
import Navigation from "./_components/Nav";
const page = () => {
  return (
    <div className="min-h-screen w-full bg-background ">
      <Navigation />
      <div className="min-h-screen">
        <section className="bg-gradient-to-r from-gradFromWhite to-gradToWhite py-20 max-sm:py-12">
          <div className="max-w-7xl mx-auto px-6 max-sm:px-4">
            <div className="grid grid-cols-2 gap-12 items-center max-lg:grid-cols-1 max-lg:gap-8">
              <div>
                <h1 className="text-[60px] font-[500] text-foreground leading-[75px] mb-6 max-lg:text-[48px] max-lg:leading-[60px] max-sm:text-[36px] max-sm:leading-[45px]">
                  Find What You&apos;ve{" "}
                  <span className="font-[700] bg-gradient-to-r from-[#6366F1] to-[#4318D1] bg-clip-text text-transparent">
                    Lost
                  </span>
                </h1>
                <p className="text-[16px] text-mute leading-[32px] mb-8 max-sm:text-[14px] max-sm:leading-[28px]">
                  Connect with your campus community to reunite lost items with
                  their owners through our simple, secure platform.
                </p>
                <div className="flex gap-4 mb-12 max-sm:flex-col">
                  <Link href="#">
                    <Button variant="cta" className="max-sm:w-full px-10 py-3">
                      Get Started
                    </Button>
                  </Link>

                  <Button
                    variant="secondary"
                    className="max-sm:w-full px-10 py-3"
                  >
                    Browse Items
                  </Button>
                </div>
                <div className="flex gap-12 max-sm:gap-8">
                  <div className="text-center">
                    <div className="text-[24px] font-[700] text-foreground">
                      500+
                    </div>
                    <div className="text-[14px] text-mute">Items Found</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[24px] font-[700] text-foreground">
                      1,200+
                    </div>
                    <div className="text-[14px] text-mute">Happy Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[24px] font-[700] text-foreground">
                      24/7
                    </div>
                    <div className="text-[14px] text-mute">Support</div>
                  </div>
                </div>
              </div>
              <div className="max-lg:order-last">
                <Image
                  src="/world.svg"
                  alt="Campus community"
                  width={520}
                  height={250}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-6 py-28 max-sm:px-4">
          <div className="grid grid-cols-2 gap-12 items-center max-lg:grid-cols-1 max-lg:gap-8">
            <div>
              <Image
                src="/find.svg"
                alt="Campus community"
                width={520}
                height={350}
              />
            </div>
            <div>
              <h1 className="text-[60px] font-[500] text-foreground leading-[75px] mb-6 max-lg:text-[48px] max-lg:leading-[60px] max-sm:text-[36px] max-sm:leading-[45px]">
                Easily{" "}
                <span className="font-[700] bg-gradient-to-r from-[#6366F1] to-[#4318D1] bg-clip-text text-transparent">
                  Find
                </span>{" "}
                and Return Lost Items
              </h1>
              <p className="text-[16px] text-mute leading-[32px] mb-8 max-sm:text-[14px] max-sm:leading-[28px]">
                Our platform makes it simple to report lost or found items,
                connect with others, and help reunite belongings with their
                rightful owners—all in just a few clicks.
              </p>
              <div className="flex gap-4 mb-12 max-sm:flex-col">
                <Button
                  variant="secondary"
                  className="max-sm:w-full px-10 py-3"
                >
                  Learn More
                </Button>

                <div className="flex items-center gap-2 max-sm:justify-center">
                  <Link href={"Register"} className="text-sm">
                    Sign Up &gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section></section>

        <HowItWorks />
        <TestimonialCarousel />

        <section className="bg-gradient-to-r from-[#1E293B] to-foreground py-20 max-sm:py-12">
          <div className="max-w-7xl mx-auto px-6 text-center max-sm:px-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="w-20 h-20 rounded-[16px] mx-auto mb-12"
              height={80}
              width={80}
            />
            <h2 className="text-[36px] font-[700] text-white mb-6 max-sm:text-[28px]">
              Join Your Campus Community
            </h2>
            <p className="text-[20px] text-[#CBD5E1] mb-12 max-w-4xl mx-auto leading-[32px] max-sm:text-[18px] max-sm:leading-[28px]">
              Be part of a helpful community where students look out for each
              other. Every item returned makes our campus a better place.
            </p>
            <Button variant="primary" className="max-sm:w-full px-10 py-3">
              Start Helping Today
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
export default page;
