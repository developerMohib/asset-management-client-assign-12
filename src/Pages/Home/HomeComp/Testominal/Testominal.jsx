import { useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import StarIcon from "@mui/icons-material/Star";

const Testominal = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider(
      "#keen-slider",
      {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      },
      []
    );

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");
    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop"
    );

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());
    keenSliderPreviousDesktop.addEventListener("click", () =>
      keenSlider.prev()
    );
    keenSliderNextDesktop.addEventListener("click", () => keenSlider.next());

    return () => {
      keenSlider.destroy();
    };
  }, []);

  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Dont just take our word for it...
              </h2>

              <p className="mt-4 text-gray-700 text-left">
                Conveniently restore corporate e-services without maintainable
                internal or organic sources. Seamlessly benchmark value-added
                vortals before highly efficient infrastructures. Quickly
                coordinate ethical outside the box.
              </p>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous-desktop"
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <SwipeLeftIcon></SwipeLeftIcon>
                </button>

                <button
                  aria-label="Next slide"
                  id="keen-slider-next-desktop"
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <SwipeRightIcon></SwipeRightIcon>
                </button>
              </div>
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div id="keen-slider" className="keen-slider">
                <div className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5">
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                          Stayin Alive
                        </p>

                        <p className="mt-4 leading-relaxed text-gray-700">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="flex items-center mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      <div>
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                          className="size-14 rounded-full object-cover"
                        />
                      </div>
                      <div>&mdash; Michael Scott</div>
                    </footer>
                  </blockquote>
                </div>

                <div className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5 ">
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                          Jhon Doe
                        </p>

                        <p className="mt-4 leading-relaxed text-gray-700">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="flex items-center mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      <div>
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                          className="size-14 rounded-full object-cover"
                        />
                      </div>
                      <div>&mdash; Arran Smith</div>
                    </footer>
                  </blockquote>
                </div>

                <div className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5">
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                        <StarIcon className="text-green-500"></StarIcon>
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                          Cathlin Cuppe
                        </p>

                        <p className="mt-4 leading-relaxed text-gray-700">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="flex items-center mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      <div>
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                          className="size-14 rounded-full object-cover"
                        />
                      </div>
                      <div>&mdash; George Butler</div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <SwipeLeftIcon></SwipeLeftIcon>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <SwipeRightIcon></SwipeRightIcon>
            </button>
          </div>
        </div>
      </section>

      {/* f a q section start */}
      <div className="md:grid grid-cols-2 my-5 gap-5 ">
        <div className="grid-cols-1">
          <div className="space-y-4">
            <details
              className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                  Why we are the best?
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
              Continually revolutionize distinctive leadership without fully tested convergence. Competently underwhelm diverse solutions vis-a-vis sustainable results. Enthusiastically seize cross-platform e-business for cutting-edge internal or organic sources. Seamlessly restore orthogonal meta-services vis-a-vis ethical web-readiness. Interactively.
              </p>
            </details>            
          </div>
        </div>
        <div className="grid-cols-1">
        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                  how can we solve any problem?
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
              Continually revolutionize distinctive leadership without fully tested convergence. Competently underwhelm diverse solutions vis-a-vis sustainable results. Enthusiastically seize cross-platform e-business for cutting-edge internal or organic sources. Seamlessly restore orthogonal meta-services vis-a-vis ethical web-readiness. Interactively.
              </p>
            </details>
        </div>
      </div>
      {/* f a q section end */}
    </div>
  );
};

export default Testominal;
