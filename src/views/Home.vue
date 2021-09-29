<template>
	<div style="height: 100vh;">
	  <VirtualList :listData="data" :itemSize="100"/>
	</div>
</template>

<script>
import VirtualList from "@/components/virtualScrolling";
let d = [];
for (let i = 0; i < 1000; i++) {
  d.push({ id: i, value: i });
}

export default {
  data() {
    return {
      data: d
    };
  },
  components: {
    VirtualList
  }
};
</script>
