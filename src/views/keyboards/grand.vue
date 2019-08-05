<template>
  <div style="padding: 20px;" align="middle">
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P03C7XPE.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha C7X">
          <template slot="description">₱2,650,000.00</template>
        </a-card-meta>
        <a-button @click="Click1" style="marginTop: 16px">{{sh1}}</a-button>
        <p v-show="desc1">DESCRIPTION</p>
        <p
          v-show="desc1"
        >Fender is guided by one clear, simple directive: make life better for musicians. While the original Telecaster certainly did that (and then some), we weren't content to rest on our laurels. Our team of mad scientists examined every component in near-microscopic detail. If we were able to improve it with a new design or modern materials we did; if it didn't need improvement, we left it alone. When the wood chips and solder fumes settled, what was left was the American Professional Telecaster—everything you need to play your best.</p>
        <a-button :loading="loading1" @click="handleClick1" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10" :padding="20">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P03C3XPE.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha C3X">
          <template slot="description">₱1,800,000.00</template>
        </a-card-meta>
        <a-button @click="Click2" style="marginTop: 16px">{{sh2}}</a-button>
        <p v-show="desc2">DESCRIPTION</p>
        <p
          v-show="desc2"
        >Fender is guided by one clear, simple directive: make life better for musicians. While the original Telecaster certainly did that (and then some), we weren't content to rest on our laurels. Our team of mad scientists examined every component in near-microscopic detail. If we were able to improve it with a new design or modern materials we did; if it didn't need improvement, we left it alone. When the wood chips and solder fumes settled, what was left was the American Professional Telecaster—everything you need to play your best.</p>
        <a-button :loading="loading2" @click="handleClick2" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P03GB1KPAW.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha GB1K PAW">
          <template slot="description">₱750,000.00</template>
        </a-card-meta>
        <a-button @click="Click3" style="marginTop: 16px">{{sh3}}</a-button>
        <p v-show="desc3">DESCRIPTION</p>
        <p
          v-show="desc3"
        >Fender is guided by one clear, simple directive: make life better for musicians. While the original Telecaster certainly did that (and then some), we weren't content to rest on our laurels. Our team of mad scientists examined every component in near-microscopic detail. If we were able to improve it with a new design or modern materials we did; if it didn't need improvement, we left it alone. When the wood chips and solder fumes settled, what was left was the American Professional Telecaster—everything you need to play your best.</p>

        <a-button :loading="loading3" @click="handleClick3" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P03GB1KPE.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha GB1K PE">
          <template slot="description">₱1,650,000.00</template>
        </a-card-meta>
        <a-button @click="Click4" style="marginTop: 16px">{{sh4}}</a-button>
        <p v-show="desc4">DESCRIPTION</p>
        <p
          v-show="desc4"
        >Fender is guided by one clear, simple directive: make life better for musicians. While the original Telecaster certainly did that (and then some), we weren't content to rest on our laurels. Our team of mad scientists examined every component in near-microscopic detail. If we were able to improve it with a new design or modern materials we did; if it didn't need improvement, we left it alone. When the wood chips and solder fumes settled, what was left was the American Professional Telecaster—everything you need to play your best.</p>

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