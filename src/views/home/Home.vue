<template>
  <div>
    <el-button type="info" class="button" @click="btnClick">退出登录</el-button>
    <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="" />
          <div>{{ item.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    //  请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    btnClick() {
      this.$message({
        message: "退出成功",
        type: "success",
      });
      this.$router.push("/login");
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
.button {
  margin-left: 10px;
}
.recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
