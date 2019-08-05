<template>
  <div style="padding: 20px;" align="middle">
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P80GK-61-SLIM.jpg"
          slot="cover"
        />
        <a-card-meta title="Gator GK-61-SLIM 61 Note Keyboard Bag">
          <template slot="description">₱6,999.00</template>
        </a-card-meta>
        <a-button @click="Click1" style="marginTop: 16px">{{sh1}}</a-button>
        <p v-show="desc1">DESCRIPTION</p>
        <p v-show="desc1">
          GK-61-SLIM - Slim 61 Note Keyboard Case
          Rigid EPS Foam Lightweight Case w/ Wheels for Slim 61 Note Keyboards
          • Rugged Nylon Construction with Polyethylene Reinforced Interior Frame
          • Interior is Lined with Tricot & Soft Foam
          • Fully Adjustable Padded Straps to Secure Keyboard in Place During Transport
          • Large accessory compartments on outside for pedals and cables
          • Built-In Wheels with Tow Handle & Skid Bars
        </p>
        <a-button :loading="loading1" @click="handleClick1" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10" :padding="20">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P80GKB-49.jpg"
          slot="cover"
        />
        <a-card-meta title="Gator GKB-49 49 Note Keyboard Bag">
          <template slot="description">₱2,999.00</template>
        </a-card-meta>
        <a-button @click="Click2" style="marginTop: 16px">{{sh2}}</a-button>
        <p v-show="desc2">DESCRIPTION</p>
        <p v-show="desc2">
          GKB-49 - 49 Note Keyboard Gig Bag
          Padded Keyboard Gig Bags for 49 Note Keyboards
          • Heavy-Duty Rugged Nylon Construction
          • Adjustable Padded Secure Straps to Hold Keyboard in Place During Transport
          • Exterior Accessory Pocket
          • Reinforced comfort riveted carry handles
        </p>
        <a-button :loading="loading2" @click="handleClick2" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P80GKB-61.jpg"
          slot="cover"
        />
        <a-card-meta title="Gator GKB-61 61 Note Keyboard Bag">
          <template slot="description">₱3,999.00</template>
        </a-card-meta>
        <a-button @click="Click3" style="marginTop: 16px">{{sh3}}</a-button>
        <p v-show="desc3">DESCRIPTION</p>
        <p v-show="desc3">
          GKB-61 - 61 Note Keyboard Gig Bag
          Padded Keyboard Gig Bags for 61 Note Keyboards
          • Heavy-Duty Rugged Nylon Construction
          • Adjustable Padded Secure Straps to Hold Keyboard in Place During Transport
          • Exterior Accessory Pocket
          • Reinforced comfort riveted carry handles
        </p>
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