<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">My Books</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link" href="#/importData">Import</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/book">Books</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/taxon">Taxonomy</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container">
      <RouterView />
    </main>
  </div>
</template>
