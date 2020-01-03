<template>
  <div style="margin-bottom: 5rem; width: 100%" v-scrollanimation="isDesktop" >

    <div class="row justify-center items-center section-header">
      <h2>选择你的套餐</h2>
    </div>

    <div class="row offset-1 justify-center items-center">
      <div class="col-sm-9">
        <div class="row justify-center items-center">
          <div
            class="col-xs-12 col-sm-12 col-md-4 card-container"
            v-for="(pack, index) in packages"
            :key="index"
          >
            <q-card class="card">
              <div class="price-box wow fadeInUp">
                <q-card-section>
                  <div class="price-heading text-center">
                    <!-- /.package icon -->
                    <!--<q-icon name="s_fingerprint" ></q-icon>-->

                    <i class="material-icons price-icon">
                      {{ pack.icon }}
                    </i>

                    <!-- /.package name -->
                    <h3>{{ pack.name }}</h3>
                  </div>
                  <!-- /.price -->
                  <div class="price-group text-center">
                    <span class="dollar">￥</span>
                    <span class="price">{{ pack.price }}</span>
                    <span class="time">/月</span>
                  </div>
                </q-card-section>

                <q-card-section>
                  <!-- /.package features -->
                  <ul class="price-feature text-center">
                    <li>
                      <strong>{{ pack.traffic }}</strong> 可用流量
                    </li>
                    <li>
                      <strong>{{ pack.nodes }}</strong> 节点数量
                    </li>
                    <li>
                      <strong>{{ pack.speed }}</strong> 最高速率
                    </li>
                    <li>
                      <strong>{{ pack.devices }}</strong> 可用设备
                    </li>
                    <li v-if="pack.id !== 'ultimate'">
                      <strike
                        ><strong>{{ pack.special }}</strong
                        >特别提供</strike
                      >
                    </li>
                    <li v-if="pack.id === 'ultimate'">
                      <strong>{{ pack.special }}</strong
                      >特别提供
                    </li>
                  </ul>
                </q-card-section>

                <q-card-section>
                  <!-- /.package button -->
                  <div class="price-footer text-center">
                    <q-btn color="primary" label="BUY NOW" />
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      packages: [
        {
          id: "silver",
          name: "Silver 白银套餐",
          icon: "fingerprint",
          nodes: "20+",
          traffic: "100Gib/月",
          speed: "100mbps",
          devices: "3",
          price: "24.9",
          special: "数条 IPLC 及 BGP 专线 "
        },

        {
          id: "ultimate",
          name: "Ultimate 旗舰套餐",
          icon: "flight_takeoff",
          nodes: "30+",
          traffic: "100Gib/月",
          speed: "无限制",
          devices: "10",
          price: "99.9",
          special: "数条 IPLC 及 BGP 专线 "
        },

        {
          id: "platinum",
          name: "Platinum 铂金套餐",
          icon: "done_all",
          nodes: "20+",
          traffic: "100Gib/月",
          speed: "100mbps",
          devices: "6",
          price: "39.9",
          special: "数条 IPLC 及 BGP 专线 "
        }
      ]
    };
  },
  computed: {
    isDesktop() {
      return !this.$q.platform.is.mobile
    }
  },

  mounted() {
    console.log(" is desktop: " + this.isDesktop);
  }
};
</script>

<style lang="scss" scoped>
.before-enter {
  transform: translateY(100px);
  opacity: 0;
  transition: 2s all ease-out;
}
.enter {
  transform: translateY(0);
  opacity: 1;
}
.section-header {
  margin-bottom: 5rem;
}
.card-container {
  /*border: solid 1px;*/
  /*margin: 0rem auto;*/
  text-align: center;
  padding: 1rem auto;
  display: flex;
  justify-content: center;
  .card {
    width: 80%;

    .price-box {
      /*border: solid 1px #d1d1d1;*/
    }

    .price-heading h3 {
      margin-top: 0;
      font-size: 1.2rem;
    }

    .price-heading .price-icon {
      /*<!--color: $icon-secondary;-->*/
      color: $secondary;
      font-size: 5rem;
      /*margin-top: 0rem;*/
    }

    .price-group {
      padding: 0 0 1rem;
    }

    .price-group .dollar {
      font-size: 1.5rem;
      position: relative;
      bottom: 1.8rem;
    }

    .price-group .price {
      color: #3eb0f7;
      font-size: 3.5rem;
      font-weight: 500;
    }

    .price-group .time {
      font-size: 1rem;
    }

    .price-feature {
      padding: 0;
      margin: 0;
      width: 100%;
    }

    .price-feature li {
      margin-left: 2.5rem;
      margin-right: 2.5rem;
      /*font-size: .8rem;*/
      list-style: none;
      border-bottom: solid 1px #d1d1d1;
      line-height: 3rem;
      text-align: left;
    }
  }
}

@media (max-width: 700px) {
  .section-header {
    margin-bottom: 0rem;
    margin-top: 5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  .card-container {
    .card {
      width: 95%;
      margin-top: 3rem;
      h3 {
        font-size: 2rem;
      }
    }
  }
}
</style>
