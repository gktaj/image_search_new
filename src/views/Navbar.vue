<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" v-show="$route.name=='Home'">
      <div class="container">
        <div class="p-1 bg-light w-100 rounded rounded-pill shadow-sm">
          <div class="input-group">
            <input
              type="search"
              v-model="serachInput"
              @keyup="checkInput"
              placeholder="What're you searching for?"
              aria-describedby="button-addon1"
              class="form-control border-0 bg-light rounded rounded-pill"
            >
            <div class="input-group-append">
              <button id="button-addon1" type="submit" class="btn btn-link text-primary">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { bus } from "../main";
export default {
  name: "Navbar",
  computed: {
    ...mapState(["searchInputdata"]),
    serachInput: {
      get() {
        return this.searchInputdata;
      },
      set(val) {
        this.SEARCHINPUT(val);
      }
    }
  },
  methods: {
    ...mapMutations(["SEARCHINPUT"]),
    checkInput() {
      bus.$emit("changeIt");
    }
  }
};
</script>