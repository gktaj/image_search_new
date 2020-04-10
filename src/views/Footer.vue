<template>
<!-- Footer -->
  <footer class="bg-dark footerLinks">

        <ul class="navbar-nav flex-row">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="fas fa-images"></i> Images</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/graph"><i class="fas fa-chart-area"></i> Graph</router-link>
          </li>
        </ul> 
    <!-- /.container -->
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.footerLinks {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
}
.footerLinks li.nav-item {
    width: 50%;
    text-align: center;
}
.footerLinks .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
    background: #d3d3d3;
    border: 1px solid #aba9a9;
    font-weight: 800;
}
.footerLinks .navbar-nav .nav-link.router-link-exact-active {
    background: #007bff;
    color: #fff;
}

</style>