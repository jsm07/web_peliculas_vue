<template>
  <div>
    <ul class="pagination">
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
          aria-label="Go to first page"
        >
          Primera
        </button>
      </li>

      <li class="pagination-item">
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          aria-label="Go to previous page"
        >
          Anterior
        </button>
      </li>

      <li v-for="page in pages" class="pagination-item" :key="page.name">
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
          :aria-label="`Go to page number ${page.name}`"
        >
          {{ page.name }}
        </button>
      </li>

      <li class="pagination-item">
        <button type="button" @click="onClickNextPage" :disabled="isInLastPage" aria-label="Go to next page">
          Siguiente
        </button>
      </li>

      <li class="pagination-item">
        <button type="button" @click="onClickLastPage" :disabled="isInLastPage" aria-label="Go to last page">
          Última
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'paginacion',
    props: {
      maxVisibleButtons: {
        required: false,
        default: 5,
      },
      totalPages: {
        required: true,
      },
      total: {
        required: true,
      },
      perPage: {
        required: true,
      },
      currentPage: {
        required: true,
      },
    },
    computed: {
      startPage() {
        if (this.currentPage === 1) {
          return 1;
        }

        if (this.currentPage === this.totalPages) {
          return this.totalPages - this.maxVisibleButtons + 1;
        }

        return this.currentPage - 1;
      },
      endPage() {
        return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
      },
      pages() {
        const range = [];

        for (let i = this.startPage; i <= this.endPage; i += 1) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage,
          });
        }

        return range;
      },
      isInFirstPage() {
        return this.currentPage === 1;
      },
      isInLastPage() {
        return this.currentPage === this.totalPages;
      },
    },
    methods: {
      onClickFirstPage() {
        this.$emit('pagechanged', 1);
      },
      onClickPreviousPage() {
        this.$emit('pagechanged', this.currentPage - 1);
      },
      onClickPage(page) {
        this.$emit('pagechanged', page);
      },
      onClickNextPage() {
        this.$emit('pagechanged', this.currentPage + 1);
      },
      onClickLastPage() {
        this.$emit('pagechanged', this.totalPages);
      },
      isPageActive(page) {
        return this.currentPage === page;
      },
    },
  };
</script>

<style lang="scss" scoped>
  ul.pagination {
    list-style-type: none;
  }

  li.pagination-item {
    display: inline-block;
  }

  button.active {
    background-color: #4caf50;
    color: white;
    border: 1px solid #4caf50;
  }
  button {
    color: black;
    background-color: white;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
  }
  button:hover:not(.active) {
    background-color: #ddd;
  }
</style>
