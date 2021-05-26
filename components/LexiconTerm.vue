<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-4 mb-8">
    <div class="p-4 sm:py-6 sm:px-8">
      <h3 class="text-3xl leading-tight font-black">
        {{ term.title }}
        {{
          term.types && term.types.length
            ? `(${term.types.join(', ')} Element)`
            : ''
        }}
      </h3>
      <p class="mt-1 text-lg text-gray-500">{{ term.oneline }}</p>
      <p v-if="term.related && term.related.length" class="mt-1 text-gray-500">
        Related:
        <a
          class="mr-1 inline-block text-fire"
          v-for="related in term.related"
          :key="related"
          :href="`#${related}`"
          @click.prevent="query(related)"
          v-text="related"
        ></a>
      </p>
    </div>
    <div class="border-t-2 border-gray-100 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="p-4 sm:py-6 sm:px-8">
          <dd class="mt-1 sm:mt-0 sm:col-span-2">
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
  methods: {
    query(term) {
      this.$emit('query', term)
    },
  },
}
</script>
