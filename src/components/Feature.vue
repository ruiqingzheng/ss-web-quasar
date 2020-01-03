<template>
  <div style="margin-top: 5rem;" >
    <div class="row justify-center items-center section-header">
      <h2>OUR FEATURE</h2>
    </div>

    <div class="row offset-1 justify-center items-center" v-scrollanimation="isDesktop">
      <div class="col-sm-8" >

        <div class="row  justify-center items-center">
          <div
            class="col-xs-12 col-sm-12 col-md-4 card-container"
            v-for="(feature, index) in features"
            :key="index"
          >
            <q-card flat class="card">
              <div class="icon-wrapper">
                <!--<q-icon name="fas fa-ambulance" class="card-icon" />-->

                <i class="material-icons card-icon">
                  {{ feature.icon }}
                </i>
              </div>

              <q-card-section class="text-center card-title">
                <div class="text-h6">{{feature.title}}</div>
                <!--<div class="text-subtitle2">by John Doe</div>-->
              </q-card-section>

              <q-card-section class="text-center card-desc">
                {{ feature.desc }}
              </q-card-section>
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
      features: [
        {
          id: "",
          name: "专业稳定",
          icon: "device_hub",
          title: "专业稳定",
          desc:
            "我们专业的支持，无论何时何地您都能获得专业稳定, 方便快捷的网络访问体验。"
        },
        {
          id: "",
          name: "跨平台支持",
          icon: "important_devices",
          title: "跨平台支持",
          desc:
            "我们的应用程序适用于几乎所有平台，包括 macOS, iOS, Android 和 Linux 等。"
        },
        {
          id: "",
          name: "众多节点服务器",
          icon: "flash_on",
          title: "众多节点服务器",
          desc:
            "配备来自世界各地的服务器，可以轻松解锁本地内容。优质节点低延迟冲浪"
        },

        {
          id: "",
          name: "物美价廉",
          icon: "monetization_on",
          title: "物美价廉",
          desc:
            "实惠的套餐, 充足的流量, 极具性价比的选择"
        },
        {
          id: "",
          name: "简单易用",
          icon: "lock_open",
          title: "简单易用",
          desc:
            "只需要几个步骤即可完成设置, 节省您宝贵的时间"
        },
        {
          id: "",
          name: "7x24 在线支持",
          icon: "highlight",
          title: "7x24 在线支持",
          desc:
            "全天候在线为您的网络访问保驾护航,让您第一时间获得帮助"
        }
      ]
    };
  },
  computed: {
    isDesktop() {
      return !this.$q.platform.is.mobile
    }
  },
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
  margin-bottom: 3rem;
}
.card-container {
  /*border: solid 1px;*/
  h2 {
    width: 100%;
    text-align: center;
  }

  .card {
    /*max-width: 250px;*/
    /*width: 80%;*/
    margin-bottom: 5rem;

    .icon-wrapper {
      width: 100%;
      text-align: center;
      height: 4rem;
      .card-icon {
        font-size: 4rem;
        // color: $icon-secondary;
        color: $secondary;
      }
    }
    .card-title {
      height: 4rem;
    }
    .card-desc {
      height: 4rem;
    }
  }
}

@media (max-width: 700px) {
  .section-header {
    margin-bottom: 0rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  .card-container {
    .card {
      width: 100%;
      margin-top: 3rem;
      margin-bottom: .5rem;
    }
  }
}
</style>
