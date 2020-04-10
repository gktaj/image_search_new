<template>
  <!-- Page Content -->
  <div class="container" v-if="collectionLoad">
    <div class="modal-header">
      <h4>{{collectionLoad.data[0].title}}</h4>
    </div>
    <div class="modal-body">
      <div class="row">
        <!-- Post Content Column -->
        <div class="col-lg-12">
          <!-- Title -->
          <!-- Author -->
          <p class="lead">
            by
            <a href="#">{{collectionLoad.data[0].center}}</a>
          </p>

          <hr>

          <!-- Date/Time -->
          <p>Posted on {{collectionLoad.data[0].date_created | moment("dddd, MMMM Do YYYY")}}</p>
          <p class="small">NASA ID:-{{collectionLoad.data[0].nasa_id}}</p>

          <hr>

          <!-- Preview Image -->
          <img class="img-fluid rounded" :src="collectionLoad.links[0].href" alt>

          <hr>

          <!-- Post Content -->
          <p class="lead">{{collectionLoad.data[0].description}}</p>
          <p
            v-if="collectionLoad.data[0].description_508"
          >{{collectionLoad.data[0].description_508}}</p>
        </div>
      </div>
      <!-- /.row -->
    </div>
  </div>

  <!-- /.container -->
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "Article",
  computed: {
    ...mapGetters(["collectionLoad"])
  },
  created() {
    this.loadImages();
    const ID = this.$route.params.id;
    this.EVENTID(ID);
  },
  methods: {
    ...mapMutations(["EVENTID"]),
    ...mapActions(["loadImages"])
  }
};
</script>

<style>
button.close {
    position: absolute;
    right: 8px;
    top: 1px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: auto;
  outline: 0;
  background: rgba(0, 0, 0, 0.6);
}
</style>