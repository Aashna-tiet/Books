<template>
  <div>
    <h1>Book Info</h1>

    <form class="row g-3">
      <div class="col-md-4">
        <label for="classify1" class="form-label">classify1</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-md-4">
        <label for="classify2" class="form-label">classify2</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-md-4">
        <label for="classify3" class="form-label">classify3</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="col-md-4">
        <label for="author" class="form-label">Author</label>
        <input type="text" class="form-control" id="author" />
      </div>
      <div class="col-md-4">
        <label for="bktitle" class="form-label">Book Title</label>
        <input type="text" class="form-control" id="bktitle" />
      </div>

      <div class="col-md-4">
        <div class="mt-4">
          <button
            type="submit"
            class="btn btn-outline-primary me-4"
            @click="search()"
          >
            Submit
          </button>
          <button type="reset" class="btn btn-outline-danger" @click="clear()">
            Clear
          </button>
        </div>
      </div>
    </form>

    <div class="card mt-2">
      <div class="card-body">
        <span class="float-start">Books Found</span>

        <span class="float-end"
          ><button
            class="btn btn-outline-info btn-sm me2"
            v-if="this.results.hasNext"
            @click="search(1)"
          >
            Next
          </button></span
        >
        <span class="float-end">
          <button
            class="btn btn-outline-info btn sm me2"
            v-if="this.results.pgNo > 1"
            @click="search(-1)"
          >
            Prev
          </button>
        </span>
        <div class="row bg-success mt-2">
          <div class="col-md-1">S#</div>
          <div class="col-md-2">Classify1</div>
          <div class="col-md-2">Classify2</div>
          <div class="col-md-2">Classify2</div>
          <div class="col-md-3">Book Name</div>
          <div class="col-md-2">Actions</div>
        </div>
        <div v-if="results.length == 0">Nothing to show yet!</div>
        <div
          v-else
          class="row mt-2"
          v-for="(b, idx) in results.items"
          :key="b.id"
        >
          <div class="col-md-1">{{ idx + 1 }}</div>
          <div class="col-md-2">
            <select
              id="classify1"
              class="form-select"
              aria-label="Default select example"
              v-model="b.classify1"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-md-2">
            <select
              id="classify2"
              class="form-select"
              aria-label="Default select example"
              v-model="b.classify2"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-md-2">
            <select
              id="classify3"
              class="form-select"
              aria-label="Default select example"
              v-model="b.classify3"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-md-3">
            <input
              type="text"
              class="form-control"
              id="bktitle"
              v-model="b.bookInfo"
            />
          </div>
          <div class="col-md-2">
            <button
              type="submit"
              class="btn btn-outline-primary me-4"
              @click="saveRow(b)"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="copyRow(b)"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchInput: { pgNo: 3, hasNext: true },
      results: { items: [], pgNo: 3, hasNext: true },
    };
  },
  methods: {
    async search(p) {
      if (p == 0) {
        //first page of the document
      } else if (p < 0) {
        //go to prev page
      } else {
        //go to next page
      }
      console.log("Search input : " + JSON.stringify(this.searchInput));
      this.results.items = [
        {
          id: 1,
          classify1: 1,
          classify2: 2,
          classify3: 3,
          bookInfo: "This is a test",
        },
        {
          id: 2,
          classify1: 1,
          classify2: 2,
          classify3: 2,
          bookInfo: "This is another test",
        },
      ];
    },
    async clear() {
      this.searchInput = {};
      this.results = [];
    },
    async saveRow(book) {
      console.log("Saving book :" + JSON.stringify(book));
    },
    async copyRow(book) {
      let bc = {};
      console.log("Inside the add row function!");
      bc.classify1 = bc.classify2 = bc.classify3 = "";
      console.log("Book Name : " + book.bookInfo);

      bc.id = this.results.items.length;
      console.log("id of book " + bc.id);
      this.results.items.push({
        id: -bc.id,
        classify1: bc.classify1,
        classify2: bc.classify2,
        classify3: bc.classify3,
        bookInfo: book.bookInfo,
      });
      console.log("Row added : " + JSON.stringify(bc));
    },
  },
};
</script>
