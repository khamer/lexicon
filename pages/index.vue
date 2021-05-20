<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="min-h-screen bg-gray-100">
    <div class="py-10">
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
          <h1 class="text-3xl font-bold leading-tight text-gray-900 mr-8">
            Lexicon
          </h1>

          <div class="flex-1">
            <input
              v-model="query"
              type="text"
              placeholder="Filter Terms..."
              class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md py-2 px-4"
            />
          </div>
        </div>
      </header>
      <main class="py-4">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <lexicon-term
            v-for="term in filteredTerms"
            :key="term.slug"
            :term="term"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    query: '',
    terms: [],
  }),
  computed: {
    filteredTerms() {
      const regex = new RegExp(
        this.query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
        'i'
      )

      return this.terms
        .filter((term) => this.score(regex, term) > 0)
        .sort((a, b) => {
          if (this.score(regex, a) > this.score(regex, b)) {
            return -1
          }
          if (this.score(regex, a) < this.score(regex, b)) {
            return 1
          }

          return a.title > b.title ? 1 : a.title < b.title ? -1 : 0
        })
    },
  },
  mounted() {
    this.$content('terms')
      .fetch()
      .then((response) => (this.terms = response))
  },
  methods: {
    score(regex, term) {
      if (regex.test(term.title)) {
        return 3
      }
      if (regex.test(term.oneline)) {
        return 2
      }
      // const r = (n) => regex.test(n.value) ? true : (n.children.length ? n.children.some(
    },
  },
}
</script>
