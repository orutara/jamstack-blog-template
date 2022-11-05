<template>
  <nav class="fixed z-50 bottom-0 w-full bg-reverse md:hidden">
    <ul class="flex justify-around my-3 max-w-xs sm:max-w-md m-auto">
      <li class="text-center">
        <nuxt-link to="/" class="inline-block mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="44.5"
            viewBox="0 0 30 44.5"
          >
            <g transform="translate(-543 -4848.5)">
              <path
                d="M65.437,9.447h0L56.371.949a3.509,3.509,0,0,0-4.8,0l-9.065,8.5a3.509,3.509,0,0,0-1.109,2.56V26.491A3.509,3.509,0,0,0,44.906,30h18.13a3.509,3.509,0,0,0,3.509-3.509V12.008A3.511,3.511,0,0,0,65.437,9.447ZM63.751,26.491a.717.717,0,0,1-.715.715h-5.96V21h-6.21v6.209h-5.96a.714.714,0,0,1-.715-.715V12.008a.711.711,0,0,1,.226-.521l9.065-8.5a.714.714,0,0,1,.977,0l9.066,8.5h0a.715.715,0,0,1,.226.522V26.491Z"
                transform="translate(503.603 4848.5)"
              />
              <text
                transform="translate(543 4892)"
                font-size="10"
                font-family="YuGo-Bold, YuGothic"
                font-weight="700"
              >
                <tspan x="0" y="0">Home</tspan>
              </text>
            </g>
          </svg>
        </nuxt-link>
      </li>
      <li class="text-center">
        <nuxt-link to="/categories" class="inline-block mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="44.5"
            viewBox="0 0 40 44.5"
          >
            <g transform="translate(-735 -4848.5)">
              <path
                d="M67.079,0H56.34l-.546.546L48.248,8.092l-.546.546V24.967A5.039,5.039,0,0,0,52.735,30H67.079a5.038,5.038,0,0,0,5.032-5.033V5.033A5.038,5.038,0,0,0,67.079,0Zm3.169,24.967a3.169,3.169,0,0,1-3.169,3.169H52.735a3.169,3.169,0,0,1-3.169-3.169V9.41h4.905a2.641,2.641,0,0,0,2.641-2.641V1.864h9.968a3.169,3.169,0,0,1,3.169,3.169V24.967Z"
                transform="translate(693.575 4848.5)"
              />
              <text
                transform="translate(735 4892)"
                font-size="10"
                font-family="YuGo-Bold, YuGothic"
                font-weight="700"
              >
                <tspan x="0" y="0">Category</tspan>
              </text>
            </g>
          </svg>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

li {
  flex: 1 0 50%;
  border-right: 1px solid #ddd;
}

li:last-child {
  border: none;
}

svg  {
  width: auto;
  height: 45px;
}
</style>