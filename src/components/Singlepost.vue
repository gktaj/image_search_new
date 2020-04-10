<template>
  <transition name="fade">
    <div class="col-6 col-md-4 col-lg-4 wrapAll" v-if="item">
      <a href="#" @click.prevent="openPop(item.data[0].nasa_id)" class="innerWrap">
        <h4>{{item.data[0].title | shortTitle(30,"...")}}</h4>
        <div class="gal-detail thumb">
          <div
            href="#"
            class="image-popup"
            :title="item.data[0].title"
            :style="{ backgroundImage:'url( \'' + item.links[0].href + '\')'}"
          >
            <img :src="item.links[0].href" class="thumb-img" alt="work-thumbnail">
          </div>
          <div class="ga-border"></div>
          <p class="small">NASA ID:-{{item.data[0].nasa_id}}</p>
        </div>
      </a>
    </div>
  </transition>
</template>

<script>
import CustomEditLocal from "../modal/Modal.vue";
export default {
  name: "Singlepost",
  props: ["item", "index"],
  modals: {
    CustomEditLocal
  },
  filters: {
    shortTitle(text, length, suffix) {
      if (text.length > 30) {
        return text.substring(0, length) + suffix;
      } else {
        return text.substring(0, length);
      }
    }
  },
  methods: {
    goToPage() {
      this.$router.push({ name: "Article", params: { id: this.index } });
    },
    openPop(id) {
      this.$emit("openPop", id);
    }
  }
};
</script>

<style>
.wrapAll {
  display: flex;
  align-items: stretch;
}
.innerWrap {
  background: #40B3A2;
  color: #fff;
  display: block;
  margin-bottom: 15px;
}
.innerWrap:hover {
  background: #85CDCA;
  text-decoration: none;
}

.image-popup {
  max-height: 115px;
  overflow: hidden;
  display: block;
  min-height: 115px;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
}
.image-popup img {
  width: 100%;
  opacity: 0;
}
.wrapAll h4 {
  font-size: 16px;
  margin: 0px;
  min-height: 57px;
  background: #148272;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 10px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  word-break: break-all;
}

.gal-detail.thumb {
  padding: 10px;
}
p.small {
  white-space: pre-wrap;
  word-break: break-all;
  margin: 10px 0 0;
}
li.page-item.first,
li.page-item.previous,
li.page-item.next,
li.page-item.last {
  display: none !important;
}
a.page-link {
  padding: 0 !important;
  text-indent: -9999px;
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background: #666060;
  margin: 0 4px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>