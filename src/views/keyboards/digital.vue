<template>
  <div style="padding: 20px;" align="middle">
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/CLP-645PE.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha CLP-645 PE">
          <template slot="description">₱159,950.00</template>
        </a-card-meta>
        <a-button @click="Click1" style="marginTop: 16px">{{sh1}}</a-button>
        <p v-show="desc1">DESCRIPTION</p>
        <p
          v-show="desc1"
        >Powerful sound and a superb wooden keyboard offer unprecedented levels of versatility to pianists of all abilities.</p>
        <a-button :loading="loading1" @click="handleClick1" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10" :padding="20">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/CLP-645R.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha CLP-645 R">
          <template slot="description">₱134,950.00</template>
        </a-card-meta>
        <a-button @click="Click2" style="marginTop: 16px">{{sh2}}</a-button>
        <p v-show="desc2">DESCRIPTION</p>
        <p
          v-show="desc2"
        >Powerful sound and a superb wooden keyboard offer unprecedented levels of versatility to pianists of all abilities.</p>
        <a-button :loading="loading2" @click="handleClick2" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/CLP625PE.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha CLP-625 PE">
          <template slot="description">₱109,950.00</template>
        </a-card-meta>
        <a-button @click="Click3" style="marginTop: 16px">{{sh3}}</a-button>
        <p v-show="desc3">DESCRIPTION</p>
        <p
          v-show="desc3"
        >Powerful sound and a superb wooden keyboard offer unprecedented levels of versatility to pianists of all abilities.</p>

        <a-button :loading="loading3" @click="handleClick3" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/CLP625R.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha CLP-625 R">
          <template slot="description">₱99,950.00</template>
        </a-card-meta>
        <a-button @click="Click4" style="marginTop: 16px">{{sh4}}</a-button>
        <p v-show="desc4">DESCRIPTION</p>
        <p
          v-show="desc4"
        >Powerful sound and a superb wooden keyboard offer unprecedented levels of versatility to pianists of all abilities.</p>

        <a-button :loading="loading4" @click="handleClick4" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      desc1: false,
      sh1: "Show Description",
      desc2: false,
      sh2: "Show Description",
      desc3: false,
      sh3: "Show Description",
      desc4: false,
      sh4: "Show Description"
    };
  },
  methods: {
    handleClick1() {
      this.loading1 = !this.loading1;
    },
    Click1() {
      this.desc1 = !this.desc1;
      if (this.desc1) {
        this.sh1 = "Hide Description";
      } else {
        this.sh1 = "Show Description";
      }
    },
    handleClick2() {
      this.loading2 = !this.loading2;
    },
    Click2() {
      this.desc2 = !this.desc2;
      if (this.desc2) {
        this.sh2 = "Hide Description";
      } else {
        this.sh2 = "Show Description";
      }
    },
    handleClick3() {
      this.loading3 = !this.loading3;
    },
    Click3() {
      this.desc3 = !this.desc3;
      if (this.desc3) {
        this.sh3 = "Hide Description";
      } else {
        this.sh3 = "Show Description";
      }
    },
    handleClick4() {
      this.loading4 = !this.loading4;
    },
    Click4() {
      this.desc4 = !this.desc4;
      if (this.desc4) {
        this.sh4 = "Hide Description";
      } else {
        this.sh4 = "Show Description";
      }
    }
  }
};
</script>