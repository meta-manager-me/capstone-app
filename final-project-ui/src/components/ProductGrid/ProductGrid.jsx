import React from "react";

export const ProductGrid = () => {
  return (
    <div>
      <div class="grid grid-cols-4 gap-4 pt-10 h-screen">
        <div className=" lg:visible lg:col-start-1 lg:col-span-1  flex flex-col space-y-5 pl-2">
          <a class="btn btn-ghost grid grid-cols-2 normal-case text-xl border-gray-600">
            <label
              for="default-checkbox"
              class="ml-2 text-md text-bold font-medium text-gray-900 dark:text-gray-300 justify-self-start"
            >
              New
            </label>
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-6 h-6 text-gray-600  rounded-2xl justify-self-end  focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </a>
          <a class="btn btn-ghost grid grid-cols-2 normal-case text-xl border-gray-600">
            <label
              for="default-checkbox"
              class="ml-2 text-md text-bold font-medium text-gray-900 dark:text-gray-300 justify-self-start"
            >
              Buy Now
            </label>
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-6 h-6 text-gray-600 bg-gray-100 rounded-2xl justify-self-end border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </a>
          <a class="btn btn-ghost grid grid-cols-2 normal-case text-xl border-gray-600">
            <label
              for="default-checkbox"
              class="ml-2 text-md text-bold font-medium text-gray-900 dark:text-gray-300 justify-self-start"
            >
              Auction
            </label>
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-6 h-6 text-gray-600 bg-gray-100 rounded-2xl justify-self-end border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </a>
        </div>
        <div className="co1-start-1 col-span-4 lg:col-start-2 lg:col-span-4 bg-gray-600">
          <div class="bg-white rounded-lg">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
                Trending
              </h2>

              <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
