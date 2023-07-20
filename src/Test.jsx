import React from 'react';

const Test = () => {
    return (
        <>
        <header className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="relative z-50 flex justify-between">
              <div className="flex items-center md:gap-x-12">
                <a aria-label="Home" href="/#">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 109 40"
                    className="h-10 w-auto"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
                      fill="#2563EB"
                    />
                    <path
                      d="M55.528 26.57V15.842H52V13.97h9.108v1.872h-3.636V26.57h-1.944Z"
                      fill="#0F172A"
                    />
                    <path
                      d="M83.084 26.57v-12.6h5.346c.744 0 1.416.18 2.016.54a3.773 3.773 0 0 1 1.44 1.44c.36.612.54 1.302.54 2.07 0 .78-.18 1.482-.54 2.106a4 4 0 0 1-1.44 1.494c-.6.36-1.272.54-2.016.54h-2.646v4.41h-2.7Zm2.664-6.84h2.376c.288 0 .546-.072.774-.216.228-.156.408-.36.54-.612a1.71 1.71 0 0 0 .216-.864c0-.324-.072-.606-.216-.846a1.394 1.394 0 0 0-.54-.576 1.419 1.419 0 0 0-.774-.216h-2.376v3.33ZM106.227 26.57V13.25h2.556v13.32h-2.556Z"
                      fill="#2563EB"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M95.906 26.102c.636.432 1.35.648 2.142.648.444 0 .864-.066 1.26-.198a4.25 4.25 0 0 0 1.062-.558 3.78 3.78 0 0 0 .702-.668v1.244h2.574v-9.522h-2.538v1.248a3.562 3.562 0 0 0-.648-.672 3.13 3.13 0 0 0-1.026-.558 3.615 3.615 0 0 0-1.278-.216c-.828 0-1.566.216-2.214.648-.648.42-1.164 1.002-1.548 1.746-.372.732-.558 1.578-.558 2.538 0 .96.186 1.812.558 2.556.372.744.876 1.332 1.512 1.764Zm4.104-1.908c-.36.228-.78.342-1.26.342-.468 0-.882-.114-1.242-.342a2.387 2.387 0 0 1-.828-.954c-.204-.42-.306-.906-.306-1.458 0-.54.102-1.014.306-1.422.204-.408.48-.726.828-.954.36-.24.774-.36 1.242-.36.48 0 .9.12 1.26.36.36.228.636.546.828.954.204.408.306.882.306 1.422 0 .552-.102 1.038-.306 1.458a2.218 2.218 0 0 1-.828.954Z"
                      fill="#2563EB"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="m76.322 23.197 2.595 3.373h2.268l-3.662-4.787 3.338-4.663h-2.196l-2.162 3.334-2.554-3.334h-2.34l3.652 4.71-3.634 4.74h2.196l2.5-3.373ZM62.738 26.102a3.78 3.78 0 0 0 2.142.648c.456 0 .888-.072 1.296-.216.42-.144.798-.336 1.134-.576a3.418 3.418 0 0 0 .864-.835v1.447h1.872v-9.45h-1.872v1.45a3.118 3.118 0 0 0-.72-.82 3.2 3.2 0 0 0-1.062-.612 4.033 4.033 0 0 0-1.35-.216c-.828 0-1.578.21-2.25.63-.66.42-1.188 1.002-1.584 1.746-.384.732-.576 1.572-.576 2.52 0 .936.192 1.776.576 2.52.384.744.894 1.332 1.53 1.764Zm4.122-1.476c-.432.276-.93.414-1.494.414a2.682 2.682 0 0 1-1.476-.414 2.987 2.987 0 0 1-1.008-1.134c-.24-.492-.36-1.05-.36-1.674 0-.612.12-1.158.36-1.638.252-.48.588-.858 1.008-1.134a2.682 2.682 0 0 1 1.476-.414c.564 0 1.062.138 1.494.414.432.276.768.654 1.008 1.134.252.48.378 1.026.378 1.638 0 .624-.126 1.182-.378 1.674-.24.48-.576.858-1.008 1.134Z"
                      fill="#0F172A"
                    />
                  </svg>
                </a>
                <div className="hidden md:flex md:gap-x-6">
                  <a
                    className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    href="/#features"
                  >
                    Features
                  </a>
                  <a
                    className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    href="/#testimonials"
                  >
                    Testimonials
                  </a>
                  <a
                    className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    href="/#pricing"
                  >
                    Pricing
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-x-5 md:gap-x-8">
                <div className="hidden md:block">
                  <a
                    className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    href="/login"
                  >
                    Sign in
                  </a>
                </div>
                <a
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
                  href="/register"
                >
                  <span>
                    Get started <span className="hidden lg:inline">today</span>
                  </span>
                </a>
                <div className="-mr-1 md:hidden">
                  <div data-headlessui-state="">
                    <button
                      className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
                      aria-label="Toggle Navigation"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                      id="headlessui-popover-button-:R3p6:"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                        fill="none"
                        strokeWidth={2}
                        strokeLinecap="round"
                      >
                        <path
                          d="M0 1H14M0 7H14M0 13H14"
                          className="origin-center transition"
                        />
                        <path
                          d="M2 2L12 12M12 2L2 12"
                          className="origin-center transition scale-90 opacity-0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
              Accounting{/* */}{" "}
              <span className="relative whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">made simple</span>
              </span>{" "}
              {/* */}for small businesses.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
              Most bookkeeping software is accurate, but hard to use. We make the
              opposite trade-off, and hope you don’t get audited.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
                href="/register"
              >
                Get 6 months free
              </a>
              <a
                className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
                >
                  <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
                </svg>
                <span className="ml-3">Watch video</span>
              </a>
            </div>
            <div className="mt-36 lg:mt-44">
              <p className="font-display text-base text-slate-900">
                Trusted by these six companies so far
              </p>
              <ul
                role="list"
                className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
              >
                <li>
                  <ul
                    role="list"
                    className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                  >
                    <li className="flex">
                      <img
                        alt="Transistor"
                        loading="lazy"
                        width={158}
                        height={48}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src="/_next/static/media/transistor.7274e6c3.svg"
                      />
                    </li>
                    <li className="flex">
                      <img
                        alt="Tuple"
                        loading="lazy"
                        width={105}
                        height={48}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src="/_next/static/media/tuple.74eb0ae0.svg"
                      />
                    </li>
                    <li className="flex">
                      <img
                        alt="StaticKit"
                        loading="lazy"
                        width={127}
                        height={48}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src="/_next/static/media/statickit.d7937794.svg"
                      />
                    </li>
                  </ul>
                </li>
                <li>
                  <ul
                    role="list"
                    className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                  >
                    <li className="flex">
                      <img
                        alt="Mirage"
                        loading="lazy"
                        width={138}
                        height={48}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src="/_next/static/media/mirage.18d2ec4e.svg"
                      />
                    </li>
                    <li className="flex">
                      <img
                        alt="Laravel"
                        loading="lazy"
                        width={136}
                        height={48}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src="/_next/static/media/laravel.7deed17e.svg"
                      />
                    </li>
                    <li className="flex">
                      <img
                        alt="Statamic"
                        loading="lazy"
                        width={147}
                        height={48}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src="/_next/static/media/statamic.6da5ebfb.svg"
                      />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="bg-white">
  <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-xl font-bold text-gray-900">Customers also bought</h2>

    <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <div>
        <div class="relative">
          <div class="relative h-72 w-full overflow-hidden rounded-lg">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg" alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls." class="h-full w-full object-cover object-center"/>
          </div>
          <div class="relative mt-4">
            <h3 class="text-sm font-medium text-gray-900">Zip Tote Basket</h3>
            <p class="mt-1 text-sm text-gray-500">White and black</p>
          </div>
          <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
            <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
            <p class="relative text-lg font-semibold text-white">$140</p>
          </div>
        </div>
        <div class="mt-6">
          <a href="#" class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200">Add to bag<span class="sr-only">, Zip Tote Basket</span></a>
        </div>
      </div>
      

     
    </div>
  </div>
</div><>
  {/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
// ...
require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/}
  <div className="bg-white">
    <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
      <h2 className="sr-only">Products</h2>
      <div className="-mx-px grid grid-cols-2   border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        <div className="group relative   border-gray-200 p-4 sm:p-6">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg"
              alt="TODO"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="pt-10 pb-4 text-center">
            <h3 className="text-sm font-medium text-gray-900">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Organize Basic Set (Walnut)
              </a>
            </h3>
            
             
          </div>
        </div>
     
        {/* More products... */}
      </div>
    </div>
  </div>
</>

       
      </>
      
    );
}

export default Test;
