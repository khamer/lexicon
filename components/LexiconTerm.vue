<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        {{ term.title }}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        {{ term.oneline }}
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:py-5 sm:px-6">
          <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
            <nuxt-content :document="term" />
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    term: { type: Object, required: true },
  },
}
</script>
