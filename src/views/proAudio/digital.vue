<template>
  <div style="padding: 20px;" align="middle">
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P12CL1.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha CL1 Digital Mixer">
          <template slot="description">₱949,990.00</template>
        </a-card-meta>
        <a-button @click="Click1" style="marginTop: 16px">{{sh1}}</a-button>
        <p v-show="desc1">DESCRIPTION</p>
        <p
          v-show="desc1"
        >The pursuit of perfection is ongoing and will probably never end, but along the way Yamaha has introduced a number of innovations that have become industry standards offering performance and familiarity that discerning users continue to demand. By definition, “standards” are best kept as they are. With evolutionary refinements, of course. Yamaha CL series digital mixing consoles represent a new level of refinement. They offer an evolved experience in accessible mixing, plus sonic purity with sound shaping capabilities that will give the most imaginative engineer unprecedented creative freedom. The CL series embodies the leading standards in live sound in their most advanced, most expressive form. Dual 8-fader sections in a space-saving console that can be used alone or cascaded to another CL console for input expansion.</p>
        <a-button :loading="loading1" @click="handleClick1" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10" :padding="20">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P12CL3.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha CL3 Digital Mixer">
          <template slot="description">₱1,259,990.00</template>
        </a-card-meta>
        <a-button @click="Click2" style="marginTop: 16px">{{sh2}}</a-button>
        <p v-show="desc2">DESCRIPTION</p>
        <p
          v-show="desc2"
        >The pursuit of perfection is ongoing and will probably never end, but along the way Yamaha has introduced a number of innovations that have become industry standards offering performance and familiarity that discerning users continue to demand. By definition, “standards” are best kept as they are. With evolutionary refinements, of course. Yamaha CL series digital mixing consoles represent a new level of refinement. They offer an evolved experience in accessible mixing, plus sonic purity with sound shaping capabilities that will give the most imaginative engineer unprecedented creative freedom. The CL series embodies the leading standards in live sound in their most advanced, most expressive form. An ideal blend of compact size and channel capacity for a variety of live and installed applications.</p>
        <a-button :loading="loading2" @click="handleClick2" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P12CL5.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha CL5 Digital Mixer">
          <template slot="description">₱1,599,990.00</template>
        </a-card-meta>
        <a-button @click="Click3" style="marginTop: 16px">{{sh3}}</a-button>
        <p v-show="desc3">DESCRIPTION</p>
        <p
          v-show="desc3"
        >The pursuit of perfection is ongoing and will probably never end, but along the way Yamaha has introduced a number of innovations that have become industry standards offering performance and familiarity that discerning users continue to demand. By definition, “standards” are best kept as they are. With evolutionary refinements, of course. Yamaha CL series digital mixing consoles represent a new level of refinement. They offer an evolved experience in accessible mixing, plus sonic purity with sound shaping capabilities that will give the most imaginative engineer unprecedented creative freedom. The CL series embodies the leading standards in live sound in their most advanced, most expressive form. With a three-section fader layout for efficient hands-on control, the CL5 is the ideal choice for a diverse spectrum of live sound systems.</p>
        <a-button :loading="loading3" @click="handleClick3" style="marginTop: 16px">Add to Cart</a-button>
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