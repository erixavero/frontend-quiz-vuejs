<template>
  <div class="wrapper">
    <nav class="navbar navbar-static-top navbar-default">
      <div class="container">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Website Logo</router-link>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/user">signin</router-link>
          </li>
          <li>
            <router-link to="/register">signup</router-link>
          </li>
          <li>
            <router-link to="/item">items</router-link>
          </li>
          <li>
            <router-link to="/cat">categories</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p class="text-center">Copyright &copy; 2017 | All Rights Reserved</p>
    </footer>
  </div>
</template>

<script src="./app.component.js"></script>
