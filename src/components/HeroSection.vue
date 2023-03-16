<template>
  <div class="overflow-hidden bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-indigo-600" href="#">Download iCan Mall</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">iCan Mall</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            <!-- <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="feature.icon" class="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl> -->

            <div class="mt-3 flex items-center justify-center gap-y-0">
                <img @click="playstore" src="../assets/playstore.png" class="w-48 h-24 cursor-pointer" alt="">
            </div>
            <div class="flex items-center justify-center gap-y-2">
                <img @click="appstore" src="../assets/playstore.png" class="w-48 h-24 cursor-pointer" alt="">
            </div>
            <div class="mt-3 flex items-center justify-center gap-y-0">
                <img @click="playstore" src="../assets/playstore.png" class="w-48 h-24 cursor-pointer" alt="">
            </div>
            <div class="flex items-center justify-center gap-y-2">
                <img @click="appstore" src="../assets/playstore.png" class="w-48 h-24 cursor-pointer" alt="">
            </div>
            

          </div>
        </div>
        <img src="../assets/img1.png" alt="Product screenshot" class="w-[32rem] max-w-none rounded-md ring-1 ring-gray-400/10 sm:w-[48rem] md:-ml-4 lg:-ml-0" width="1200" height="800" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HeroSection",

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
        }
    },
}
    

// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

// const features = [
//   {
//     name: 'Push to deploy.',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: 'SSL certificates.',
//     description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Database backups.',
//     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//     icon: ServerIcon,
//   },
// ]
</script>