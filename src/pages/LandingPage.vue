<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToGenerator = () => {
  router.push('/generator');
};

const linkedInUrl = 'https://www.linkedin.com/in/mark-ivan-hernandez-a787a11b8/';
const buyMeCoffeeUrl = 'https://buymeacoffee.com/ayban123';
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-[#2D4A3E] via-[#4A5E4F] to-[#4F6168] flex flex-col">
    <div class="flex-1 flex items-center justify-center p-8">
      <div class="max-w-225 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-[#D4D4A9] mb-4 tracking-tight">
          Free Invoice Generator
        </h1>
        <p class="text-lg md:text-xl text-[#D4D4A9]/85 mb-12 max-w-125 mx-auto">
          Create professional invoices in seconds. No account required.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white/8 backdrop-blur-sm rounded-xl p-6 text-left border border-[#D4D4A9]/15 transition-all duration-200 hover:-translate-y-1 hover:bg-white/12">
            <div class="w-12 h-12 bg-[#F47920]/15 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#F47920]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[#D4D4A9] mb-2">100% Private</h3>
            <p class="text-sm text-[#D4D4A9]/70 leading-relaxed">
              Your data stays on your device. We use localStorage only — nothing is sent to any server.
            </p>
          </div>

          <div class="bg-white/8 backdrop-blur-sm rounded-xl p-6 text-left border border-[#D4D4A9]/15 transition-all duration-200 hover:-translate-y-1 hover:bg-white/12">
            <div class="w-12 h-12 bg-[#F47920]/15 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#F47920]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[#D4D4A9] mb-2">Completely Free</h3>
            <p class="text-sm text-[#D4D4A9]/70 leading-relaxed">
              No hidden fees, no subscriptions, no premium tiers. Free for everyone, forever.
            </p>
          </div>

          <div class="bg-white/8 backdrop-blur-sm rounded-xl p-6 text-left border border-[#D4D4A9]/15 transition-all duration-200 hover:-translate-y-1 hover:bg-white/12">
            <div class="w-12 h-12 bg-[#F47920]/15 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#F47920]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[#D4D4A9] mb-2">No Data Leakage</h3>
            <p class="text-sm text-[#D4D4A9]/70 leading-relaxed">
              Your invoices and client information never leave your browser. Complete data sovereignty.
            </p>
          </div>
        </div>

        <button
          @click="goToGenerator"
          class="inline-flex items-center gap-3 bg-[#F47920] text-[#2D4A3E] text-lg font-semibold px-8 py-4 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#e56a10] hover:scale-[1.02] group"
        >
          Create Your Invoice
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>

    <footer class="p-6 border-t border-[#D4D4A9]/10">
      <div class="max-w-2xl mx-auto text-center space-y-4">
        <p class="text-[#D4D4A9]/70 text-sm">
          Want to suggest a feature or improvement? Message me on LinkedIn!
        </p>

        <div class="flex items-center justify-center gap-4">
          <!-- LinkedIn -->
          <a
            :href="linkedInUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-[#D4D4A9] text-sm font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
            </svg>
            LinkedIn
          </a>

          <!-- Buy Me a Coffee -->
          <a
            :href="buyMeCoffeeUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 bg-[#FFDD00] hover:bg-[#FFDD00]/90 rounded-lg text-[#000000] text-sm font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364z"/>
            </svg>
            Buy me a coffee
          </a>
        </div>

        <p class="text-[#D4D4A9]/50 text-xs pt-2">
          Built with simplicity and privacy in mind.
        </p>
      </div>
    </footer>
  </div>
</template>
