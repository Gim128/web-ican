<template>
    <div class="py-24 overflow-hidden bg-gradient-to-b from-sky-400 to-sky-200 sm:py-28">
                <div class="px-6 mx-auto max-w-7xl lg:px-8">
                    <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                      <div class="lg:pr-6 lg:pt-4">
                        <div class="lg:max-w-lg">
                          <h2 class="text-base font-semibold leading-7 text-sky-600" @click="downloadTwo" href="#">Download iCan Mall</h2>
                          <p class="mt-2 text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl">iCan Mall</p>
                          <p class="mt-6 text-lg leading-8 text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
              
                          <div class="flex items-center justify-center mt-5 mb-5 gap-y-4">
                              <img @click="playstore" src="../assets/play.png" class="w-32 h-10 cursor-pointer" alt="">
                          </div>
                          <div class="flex items-center justify-center mb-5">
                              <img @click="appstore" src="../assets/app-store.png" class="w-32 h-10 cursor-pointer" alt="">
                          </div>
                          <div class="flex items-center justify-center mt-3 mb-5">
                              <img @click="playstore" src="../assets/huawei.png" class="w-32 h-10 cursor-pointer" alt="">
                          </div>
                          <div class="flex items-center justify-center mb-5">
                              <img @click="appstore" src="../assets/direct.png" class="w-32 h-10 cursor-pointer" alt="">
                          </div>
                        </div>
                      </div>
                      <img src="../assets/img1.png" alt="Product screenshot" class="w-[32rem] max-w-none rounded-md ring-gray-400/10 sm:w-[48rem] md:-ml-4 lg:-ml-0" width="1200" height="800" />
                    </div>
                </div>
            
    </div>
    
  </template>
  
  <script>
  
  export default {
      name: "HeroSectionTwo",
  
      data(){
          return {
              
          }
      },
  
      methods: {
          playstore(){
              window.open('https://tailwindui.com/img/component-images/dark-project-app-screenshot.png', 'noreferrer');
          },
  
          appstore(){
              window.open('https://tailwindui.com/img/component-images/dark-project-app-screenshot.png', 'noreferrer')
          },

          downloadTwo(){
            window.open('#');
          },

          
      },
  }
      
  </script>