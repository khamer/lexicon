<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="min-h-screen bg-salt text-ash">
    <div class="py-10">
      <header>
        <div class="max-w-7xl mx-auto pl-4 sm:px-6 lg:px-8 flex">
          <h1 class="text-3xl font-black leading-tight mr-8">
            <a href="/" @click.prevent="query('')">Lexicon</a>
          </h1>

          <div class="flex-1">
            <input
              v-model="queryTerms"
              autofocus
              type="search"
              placeholder="Filter Terms..."
              class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md py-2 px-4"
            />
          </div>
        </div>
      </header>
      <main class="py-4">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <p class="opacity-50 px-4 sm:px-0">
            A naming guide for web developers, designers, and strategists.
          </p>
        </div>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <lexicon-term
            v-for="term in filteredTerms"
            :key="term.slug"
            :term="term"
            @query="query"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    queryTerms: '',
    terms: [],
  }),
  computed: {
    filteredTerms() {
      const regex = new RegExp(
        this.queryTerms.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
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

    exactMatch() {
      return this.terms.filter(
        ({ title }) => title.toLowerCase() === this.queryTerms.toLowerCase()
      ).length
    },
  },
  mounted() {
    this.queryTerms = location.hash.replace(/^#/, '')
    this.$content('terms')
      .fetch()
      .then((response) => (this.terms = response))
  },

  methods: {
    query(term) {
      this.queryTerms = term
      history.replaceState({}, term, term ? `#${term}` : '/')
      scrollTo(0, 0)
    },
    flatten(node) {
      return [].concat(
        node.value ?? [],
        ...(node.children ? node.children.map(this.flatten) : [])
      )
    },

    score(regex, term) {
      if (regex.test(term.title)) {
        return 4
      }
      if (regex.test(term.types ? term.types.join(', ') : '')) {
        return 3
      }
      if (regex.test(term.oneline)) {
        return 2
      }

      if (regex.test(this.flatten(term.body).join(' '))) {
        return 1
      }
    },
  },
}
</script>
