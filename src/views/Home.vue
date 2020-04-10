<template>
  <div class="home mt-3">
    <Postlist/>
  </div>
</template>

<script>
// @ is an alias to /src
import Postlist from '@/components/Postlist.vue'

export default {
  name: 'Home',
  components: {
    Postlist
  }
}
</script>
