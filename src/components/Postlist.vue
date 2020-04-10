<template>
  <div class="container">
    <div class="portfolioContainer row" v-if="collections">
      <Singlepost
        @openPop="openPop"
        v-for="(item,index) in pageOfItems"
        :item="item"
        :index="index"
        :key="item.id"
      />
    </div>
    <div class="text-center mt-3" v-if="this.searchInputdata">
      <jw-pagination :items="collections" @changePage="onChangePage"></jw-pagination>
    </div>
    <!-- Modal -->
    <div class="modal fade in" :class="{show:show}" :style="show ? 'display:block':'display:none'">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button type="button" class="close" @click="closePop">
            <span aria-hidden="true">&times;</span>
          </button>
          <Article/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Singlepost from "./Singlepost.vue";
import Article from "./Article.vue";
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import { bus } from "../main";
export default {
  name: "Postlist",
  components: {
    Singlepost,
    Article
  },
  data() {
    return {
      pageOfItems: [],
      show: false,
      shyle1: {
        display: "block"
      },
      shyle2: {
        display: "none"
      }
    };
  },
  computed: {
    ...mapState(["searchInputdata"]),
    ...mapGetters(["collections"])
  },
  created() {
    this.loadImages();
    bus.$on("changeIt", () => {
      if (!this.searchInputdata) {
        this.pageOfItems = this.collections.slice(0, 5);
      }
    });
  },
  mounted() {
    if (this.collections) {
      setTimeout(() => {
        this.pageOfItems = this.collections.slice(0, 5);
      }, 2000);
    }
  },
  methods: {
    ...mapActions(["loadImages"]),
    ...mapMutations(["EVENTID"]),
    onChangePage(pageOfItems) {
      // update page of items
      if (!this.searchInputdata) {
        this.pageOfItems = this.collections.slice(0, 5);
      } else {
        this.pageOfItems = pageOfItems;
      }
    },
    openPop(id) {
      this.EVENTID(id);
      this.show = !this.show;
      if (this.show) {
        document.body.style.overflow = "hidden";
      }
    },
    closePop() {
      this.show = false;
      document.body.style.overflow = "auto";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* ===========
   Gallery
 =============*/
.portfolioFilter a {
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.3s ease-out;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  color: #333333;
  padding: 5px 10px;
  display: inline-block;
  transition: all 0.3s ease-out;
}
.portfolioFilter a:hover {
  background-color: #228bdf;
  color: #ffffff;
}
.portfolioFilter a.current {
  background-color: #228bdf;
  color: #ffffff;
}
.thumb {
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  width: 100%;
}
.thumb-img {
  border-radius: 2px;
  overflow: hidden;
  width: 100%;
}
.gal-detail h4 {
  margin: 16px auto 10px auto;
  width: 80%;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.gal-detail .ga-border {
  height: 3px;
  width: 40px;
  background-color: #228bdf;
  margin: 10px auto;
}
</style>
