import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              {config.appDescription}
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div class="flex-grow flex flex-wrap justify-center md:pl-32 -mb-10 md:mt-0 mt-10 text-center">

                        
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {config.mailgun.supportEmail && (
                  <a
                    href={`mailto:${config.mailgun.supportEmail}`}
                    target="_blank"
                    className="link link-hover"
                    aria-label="Contact Support"
                    style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
                  >
                    <svg viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                      <rect fill="#008080" height="512" rx="15%" width="512" />
                      <rect fill="#fff" height="256" rx="8%" width="356" x="78" y="128" />
                      <path d="m434 128-165 164c-7 8-19 8-26 0l-165-164m0 256 129-128m227 128-129-128" fill="none" stroke="#008080" stroke-width="20" />
                    </svg>
                    Contact Us
                  </a>
                )}


                <Link href="https://www.linkedin.com/company/nexgen-company" target="_blank" className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
                  <svg viewBox="0 0 128 128" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                    <path d="m116 3h-104a8.91 8.91 0 0 0 -9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81v-104.42a8.93 8.93 0 0 0 -9-8.77z" fill="#0076b2" />
                    <g fill="#fff">
                      <path d="m21.06 48.73h18.11v58.27h-18.11zm9.06-29a10.5 10.5 0 1 1 -10.5 10.49 10.5 10.5 0 0 1 10.5-10.49" />
                      <path d="m50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41 18.34-.04 21.74 12.03 21.74 27.68v32h-18.11v-28.35c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15v28.79h-18.08z" />
                    </g>
                  </svg>
                  LinkedIn
                </Link>


                <Link href="https://drive.google.com/file/d/1wh_fhXWe7fgTQ61ulp_pZu1olv_N5QIm/view" target="_blank" className="link link-hover" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <svg viewBox="0 0 14 14" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                    <path d="m7.31578947 1.00000007-5.93684204 5.93684204c-.50526315.50526315-.50526315 1.29473682 0 1.79999998l3.88421048 3.88421048c.50526316.50526315 1.29473683.50526315 1.79999998 0l5.93684204-5.93684204v-4.42105258c0-.69473683-.56842105-1.26315788-1.26315788-1.26315788zm3.78947364 2.52631576c-.34736842 0-.63157894-.28421052-.63157894-.63157894s.28421052-.63157894.63157894-.63157894.63157894.28421052.63157894.63157894-.28421052.63157894-.63157894.63157894z" fill="#4caf50" />
                    <path d="m7.69473683 8.89473682c-.88421051.88421052-1.83157892.15789474-2.0210526 0l-.50526316.50526315-.37894736-.37894736.50526315-.50526315c-.12631579-.15789474-.97894735-1.19999999.12631579-2.27368419l.72631578.72631578c-.12631579.1263158-.63157893.63157895-.0631579 1.16842105.47368421.4736842.85263158.09473684.91578947.03157895.78947368-.78947368-1.1368421-2.0842105.12631579-3.34736838.75789473-.75789473 1.70526314-.31578947 2.0210526-.03157895l.5368421-.5368421.41052632.41052631-.5368421.5368421c.22105263.28421052.72631578 1.16842104-.22105263 2.11578945l-.72631578-.72631578c.18947368-.18947368.5368421-.66315789.15789473-1.0736842-.44210526-.44210526-.82105262-.0631579-.88421051 0-.85263157.82105262 1.0736842 2.11578945-.18947369 3.37894733z" fill="#fff" />
                  </svg>
                  Budget Calculator (Rate card)
                </Link>

                {/* <Link href="/blog" className="link link-hover">
                  Blog
                </Link> */}
                {/* <a href="/#" target="_blank" className="link link-hover">
                  Affiliates
                </a> */}
              </div>
             
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Privacy policy
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                EdTech Partner
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="https://teched.ai/" target="_blank" className="link link-hover">
                  TechEd.ai
                </Link>
              </div>

              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                Blogs
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
              <Link href="/blog" className="link link-hover">
                  NexGen Tech Blogs
                </Link>
              </div>              

              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
               NexGen Softwares
              </div>    
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="https://chatpdf.nexgen.software/" target="_blank" className="link link-hover">
                  ChatPdf AI
                </Link>
                <Link href="https://nexgen.help/" target="_blank" className="link link-hover">
                  NexGen.help
                </Link>
                <Link href="https://sitkolkata.org/" target="_blank" className="link link-hover">
                  SIT Event
                </Link>                                   
              </div>
            </div>  
                      
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
